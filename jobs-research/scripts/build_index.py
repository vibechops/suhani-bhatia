#!/usr/bin/env python3
"""Rebuild stream indexes, org indexes, and README counts from postings/."""

from __future__ import annotations

import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTINGS = ROOT / "postings"
STREAMS_DIR = ROOT / "streams"
ORGS_DIR = ROOT / "orgs"
README = ROOT / "README.md"

STREAM_META = [
    ("01", "consulting", "Social-sector / development consulting"),
    ("02", "government", "Government and public-sector consulting, fellowships, ministry roles"),
    ("03", "research-evidence", "Research, evidence, MEL"),
    ("04", "legal-policy", "Legal, regulatory and public policy"),
    ("05", "csr", "CSR and corporate foundations"),
    ("06", "esg", "ESG, sustainability, BRSR"),
    ("07", "gender-rights", "Gender, LGBTQ+ and rights implementation"),
    ("08", "migrant-livelihoods", "Migrant labour, urban welfare, livelihoods"),
    ("09", "un-multilateral", "UN and multilateral, India-based"),
    ("10", "knowledge-comms", "Knowledge, communications, development media"),
    ("11", "education", "Education systems and FLN"),
    ("12", "corporate-regulatory", "Corporate public policy, regulatory affairs, government affairs"),
]

BIG4 = {
    "deloitte",
    "ey",
    "ernst & young",
    "ernst and young",
    "kpmg",
    "pwc",
    "pricewaterhousecoopers",
    "grant thornton",
    "bdo",
}

UN_ORGS = {
    "unicef",
    "who",
    "world health organization",
    "undp",
    "un women",
    "unwomen",
    "ilo",
    "unfpa",
    "wfp",
    "unesco",
    "world bank",
    "adb",
    "asian development bank",
    "ifc",
    "international finance corporation",
    "unv",
}


def parse_frontmatter(text: str) -> dict | None:
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    if end < 0:
        return None
    block = text[3:end].strip()
    data: dict = {}
    for line in block.splitlines():
        if ":" not in line:
            continue
        key, val = line.split(":", 1)
        key = key.strip()
        val = val.strip()
        if key == "streams":
            inner = val.strip("[]")
            data[key] = [s.strip().strip("'\"") for s in inner.split(",") if s.strip()]
        elif val.lower() in ("null", "none", "~"):
            data[key] = None
        else:
            data[key] = val.strip("'\"")
    data["_body"] = text[end + 4 :].strip()
    return data


def load_postings() -> list[dict]:
    rows = []
    for path in sorted(POSTINGS.glob("*.md")):
        raw = path.read_text(encoding="utf-8", errors="replace")
        meta = parse_frontmatter(raw)
        if not meta:
            continue
        meta["_file"] = path.name
        meta["_rel"] = f"../postings/{path.name}"
        rows.append(meta)
    return rows


def org_key(name: str) -> str:
    return re.sub(r"\s+", " ", (name or "").strip().lower())


def is_big4(org: str) -> bool:
    o = org_key(org)
    return any(b in o for b in BIG4)


def is_un(org: str) -> bool:
    o = org_key(org)
    return any(u in o for u in UN_ORGS)


def write_stream_index(slug: str, title: str, num: str, rows: list[dict]) -> None:
    lines = [
        f"# {num}. {title}",
        "",
        f"Slug: `{slug}` · Postings: **{len(rows)}**",
        "",
        "| Org | Title | Location | Status | Seniority | Years | Source |",
        "|-----|-------|----------|--------|-----------|-------|--------|",
    ]
    for r in sorted(rows, key=lambda x: (x.get("org") or "", x.get("title") or "")):
        src = r.get("source") or ""
        src_cell = f"[link]({src})" if src else ""
        file_link = f"[{r.get('title') or ''}]({r['_rel']})"
        lines.append(
            "| {org} | {title} | {loc} | {status} | {sen} | {yrs} | {src} |".format(
                org=r.get("org") or "",
                title=file_link,
                loc=r.get("location") or "",
                status=r.get("status") or "",
                sen=r.get("seniority") or "",
                yrs=r.get("years_required") or "",
                src=src_cell,
            )
        )
    lines.append("")
    (STREAMS_DIR / f"{num}-{slug}.md").write_text("\n".join(lines), encoding="utf-8")


def write_org_list(path: Path, title: str, rows: list[dict]) -> None:
    lines = [
        f"# {title}",
        "",
        f"Postings: **{len(rows)}**",
        "",
        "| Org | Title | Streams | Location | Status | Source |",
        "|-----|-------|---------|----------|--------|--------|",
    ]
    for r in sorted(rows, key=lambda x: (x.get("org") or "", x.get("title") or "")):
        streams = ", ".join(r.get("streams") or [])
        src = r.get("source") or ""
        src_cell = f"[link]({src})" if src else ""
        file_link = f"[{r.get('title') or ''}]({r['_rel']})"
        lines.append(
            f"| {r.get('org') or ''} | {file_link} | {streams} | {r.get('location') or ''} | {r.get('status') or ''} | {src_cell} |"
        )
    lines.append("")
    path.write_text("\n".join(lines), encoding="utf-8")


def write_matrix(rows: list[dict]) -> None:
    slug_order = [s for _, s, _ in STREAM_META]
    orgs: dict[str, set[str]] = defaultdict(set)
    display: dict[str, str] = {}
    for r in rows:
        ok = org_key(r.get("org") or "")
        if not ok:
            continue
        display[ok] = r.get("org") or ok
        for s in r.get("streams") or []:
            orgs[ok].add(s)

    header = "| Org | " + " | ".join(slug_order) + " |"
    sep = "|-----|" + "|".join(["-----"] * len(slug_order)) + "|"
    lines = [
        "# Org × stream matrix",
        "",
        "Built from posting frontmatter. X = org has at least one posting tagged to that stream.",
        "",
        header,
        sep,
    ]
    for ok in sorted(orgs.keys(), key=lambda k: display[k].lower()):
        cells = ["X" if s in orgs[ok] else "" for s in slug_order]
        lines.append(f"| {display[ok]} | " + " | ".join(cells) + " |")
    lines.append("")
    (ORGS_DIR / "org-matrix.md").write_text("\n".join(lines), encoding="utf-8")


def update_readme_counts(rows: list[dict], by_stream: dict[str, list[dict]]) -> None:
    live = sum(1 for r in rows if (r.get("status") or "") == "live")
    closed = sum(1 for r in rows if (r.get("status") or "") == "closed")
    lines = [
        "",
        "## Scrape report",
        "",
        f"- Total postings: **{len(rows)}**",
        f"- Live: **{live}** · Closed (backfill): **{closed}**",
        f"- Big 4 tagged: **{sum(1 for r in rows if is_big4(r.get('org') or ''))}**",
        f"- UN / multilateral tagged: **{sum(1 for r in rows if is_un(r.get('org') or ''))}**",
        "",
        "| Stream | Count | Live | Closed | Short of 50? |",
        "|--------|------:|-----:|-------:|:------------|",
    ]
    for num, slug, title in STREAM_META:
        rs = by_stream.get(slug, [])
        l = sum(1 for r in rs if r.get("status") == "live")
        c = sum(1 for r in rs if r.get("status") == "closed")
        short = "yes" if len(rs) < 50 else "no"
        lines.append(f"| {num}. {title} | {len(rs)} | {l} | {c} | {short} |")
    lines.append("")

    text = README.read_text(encoding="utf-8")
    marker = "## Scrape report"
    if marker in text:
        text = text.split(marker)[0].rstrip() + "\n"
    text = text + "\n".join(lines)
    README.write_text(text, encoding="utf-8")


def main() -> None:
    STREAMS_DIR.mkdir(parents=True, exist_ok=True)
    ORGS_DIR.mkdir(parents=True, exist_ok=True)
    POSTINGS.mkdir(parents=True, exist_ok=True)

    rows = load_postings()
    by_stream: dict[str, list[dict]] = defaultdict(list)
    for r in rows:
        for s in r.get("streams") or []:
            by_stream[s].append(r)

    for num, slug, title in STREAM_META:
        write_stream_index(slug, title, num, by_stream.get(slug, []))

    write_org_list(ORGS_DIR / "big4.md", "Big 4 and tier-2 (Grant Thornton, BDO)", [r for r in rows if is_big4(r.get("org") or "")])
    write_org_list(ORGS_DIR / "un-multilateral.md", "UN and multilateral", [r for r in rows if is_un(r.get("org") or "")])
    write_matrix(rows)
    update_readme_counts(rows, by_stream)
    print(f"Indexed {len(rows)} postings across {len(by_stream)} streams.")


if __name__ == "__main__":
    main()
