#!/usr/bin/env python3
"""Build per-stream skill evidence from postings/ into synthesis/skill-evidence.json."""

from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTINGS = ROOT / "postings"
OUT = ROOT / "synthesis" / "skill-evidence.json"

STREAMS = [
    "consulting",
    "government",
    "research-evidence",
    "legal-policy",
    "csr",
    "esg",
    "gender-rights",
    "migrant-livelihoods",
    "un-multilateral",
    "knowledge-comms",
    "education",
    "corporate-regulatory",
]

# Rank by fit for Suhani Lane 1 (from corpus synthesis).
# corporate-regulatory is Lane 2 (parallel), not buried as fit-rank 12.
FIT_RANK = [
    "research-evidence",
    "consulting",
    "legal-policy",
    "government",
    "gender-rights",
    "knowledge-comms",
    "education",
    "csr",
    "esg",
    "un-multilateral",
    "migrant-livelihoods",
]
LANE2_STREAMS = ["corporate-regulatory"]

SKILLS: dict[str, str] = {
    "stakeholder_mgmt": r"stakeholder",
    "policy_brief_report": r"policy brief|report writing|white paper|position paper|\breports\b",
    "fieldwork_travel": r"field ?work|field visit|travel|field-based|field based",
    "government_stakeholders": r"government (officials|stakeholders|departments|counterparts)|district administration|state government",
    "hindi": r"\bhindi\b",
    "regional_language": r"regional language|local language|kannada|marathi|odia|tamil|telugu|gujarati|bengali",
    "excel": r"\bexcel\b",
    "powerpoint": r"powerpoint|\bppt\b|slide deck",
    "stata": r"\bstata\b",
    "r_stats": r"\br\b(?=.*(stata|python|spss|statistical))|stata/r|r/stata|\br\b and python|python or r|r or python",
    "python": r"\bpython\b",
    "surveycto_odk": r"surveycto|open data kit|\bodk\b|kobo",
    "powerbi_tableau": r"power bi|tableau",
    "sql": r"\bsql\b",
    "qualitative": r"focus group|\bfgd|semi-structured|qualitative",
    "quantitative": r"econometric|regression|quantitative analysis|statistical",
    "mel_logframe": r"\bm&e\b|\bmel\b|monitoring and evaluation|monitoring & evaluation|logframe|theory of change|indicator",
    "rct_impact": r"\brct\b|randomi[sz]ed|impact evaluation",
    "proposal_fundraising": r"proposal|fundrais|donor|grant writing",
    "project_management": r"project management|programme management|program management",
    "law_degree": r"\bllb\b|degree in law|law degree|law graduate|undergraduate degree in law",
    "msw": r"\bmsw\b|social work",
    "mpp_public_policy": r"public policy|\bmpp\b",
    "economics": r"economics",
    "development_studies": r"development studies",
    "mba": r"\bmba\b",
    "brsr": r"\bbrsr\b",
    "gri_sasb_tcfd": r"\bgri\b|\bsasb\b|\btcfd\b|\bissb\b",
    "ghg_carbon": r"\bghg\b|carbon|scope 1|scope 3|emission",
    "gender_gbv": r"\bgender\b|gbv|violence against women|posh|sexual harassment",
    "csr_act": r"schedule vii|section 135|companies act|csr law|csr compliance",
    "labour_law": r"labour law|labor law|labour code|minimum wage|\bbocw\b|\besic\b",
    "comms_social": r"social media|content creation|communications strategy|newsletter|editorial",
    "canva": r"\bcanva\b",
    "ai_tools": r"chatgpt|generative ai|\bllm\b",
    # Lane 2: corporate regulatory / public policy / government affairs
    "regulators_india": r"\brbi\b|\bsebi\b|\btrai\b|\bcci\b|\birdai\b|\bmeity\b|reserve bank|telecom regulatory|competition commission",
    "consultation_paper": r"consultation paper|discussion paper|white paper|comments on (the )?draft|public consultation",
    "industry_response": r"industry response|stakeholder comment|representation to|submission to (the )?(ministry|regulator|rbi|sebi|trai)",
    "government_affairs": r"government affairs|\bga\b(?=.*(public|policy|regulator))|public affairs|government relations|\bgr\b(?=.*(public|policy))",
    "stakeholder_map": r"stakeholder map|stakeholder mapping|power mapping|influence map",
    "financial_literacy": r"annual report|10-k|\b10k\b|financial statement|balance sheet|p&l|profit and loss|investor presentation",
    "fintech_payments": r"\bfintech\b|digital payment|upi|payment.?system|nbfc|digital lending|neo.?bank",
    "executive_brief": r"executive brief|one.?pager|board note|ceo brief|management note|talking points",
}

CERTS: dict[str, str] = {
    "GRI": r"\bgri\b",
    "BRSR": r"\bbrsr\b",
    "NISM Social Impact / SIA": r"\bnism\b|social impact assessment|\bsroi\b",
    "SurveyCTO / ODK": r"surveycto|open data kit|\bodk\b|kobo",
    "Stata": r"\bstata\b",
    "Power BI": r"power bi",
    "Canva": r"\bcanva\b",
    "TCFD": r"\btcfd\b",
    "SASB / ISSB": r"\bsasb\b|\bissb\b",
    "CFA ESG": r"cfa.?esg|certificate in esg",
    "GARP SCR": r"garp|\bscr\b",
}

MARKET_CERTS = [
    {
        "name": "CFA Institute Certificate in ESG Investing",
        "label": "market-valued, not JD-named",
        "streams": ["esg", "csr", "consulting"],
        "note": "Named rarely in India JDs; common ask in ESG career guides and Big 4 hiring conversations.",
    },
    {
        "name": "MITx Evaluating Social Programs (J-PAL)",
        "label": "market-valued, not JD-named",
        "streams": ["research-evidence", "education", "government"],
        "note": "Signals RCT / impact evaluation literacy for J-PAL, IDinsight, CEGIS-adjacent roles.",
    },
    {
        "name": "GARP Sustainability and Climate Risk (SCR)",
        "label": "market-valued, not JD-named",
        "streams": ["esg"],
        "note": "Useful for climate-risk analyst tracks at CRISIL / ratings houses; not required in corpus JDs.",
    },
]


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
        val = val.strip().strip("'\"")
        if key == "streams":
            inner = val.strip("[]")
            data[key] = [s.strip().strip("'\"") for s in inner.split(",") if s.strip()]
        elif val.lower() in ("null", "none", "~", ""):
            data[key] = None
        else:
            data[key] = val
    data["_body"] = text[end + 4 :]
    return data


def years_bucket(y: str | None, blob: str) -> str:
    y = (y or "").lower()
    if "intern" in blob[:500] or y.strip() in ("0", "0 years", "none", "fresher"):
        return "intern/0"
    m = re.search(r"(\d+)", y)
    if not m:
        return "unspecified"
    n = int(m.group(1))
    if n <= 2:
        return "0-2"
    if n <= 5:
        return "3-5"
    return "5+"


def horizon(r: dict) -> str:
    """Now = intern/0-2 or bachelor's track; 2027 = master's-gated or 3+ years where-it-leads."""
    blob = r["_blob"]
    yb = r["_years_bucket"]
    sen = r.get("seniority") or ""
    if yb in ("intern/0", "0-2"):
        return "Now"
    if sen == "eligible-now" and yb == "unspecified":
        # check if master's required with 0 years
        if re.search(r"master.?s.*(not required|0 year|no (prior )?experience)", blob):
            return "2027"
        if re.search(r"bachelor|graduate degree|any graduate|undergraduate", blob) and not re.search(
            r"master.?s (degree|required|preferred)", blob[:800]
        ):
            return "Now"
        return "Now"
    if yb in ("3-5", "5+") or sen == "where-it-leads":
        return "2027"
    return "2027"


def load_rows() -> list[dict]:
    rows = []
    for path in sorted(POSTINGS.glob("*.md")):
        raw = path.read_text(encoding="utf-8", errors="replace")
        meta = parse_frontmatter(raw)
        if not meta:
            continue
        meta["_file"] = path.name
        body = meta.get("_body") or ""
        blob = f"{meta.get('title','')} {meta.get('degree','')} {meta.get('years_required','')} {body}".lower()
        meta["_blob"] = blob
        meta["_years_bucket"] = years_bucket(meta.get("years_required"), blob)
        meta["_horizon"] = horizon(meta)
        rows.append(meta)
    return rows


def proof_files(matches: list[dict], limit: int = 3) -> list[str]:
    def score(r: dict) -> tuple:
        live = 0 if r.get("status") == "live" else 1
        yb = r["_years_bucket"]
        yscore = {"intern/0": 0, "0-2": 1, "unspecified": 2, "3-5": 3, "5+": 4}.get(yb, 5)
        return (live, yscore, r.get("org") or "")

    seen = set()
    out = []
    for r in sorted(matches, key=score):
        f = r["_file"]
        if f in seen:
            continue
        seen.add(f)
        out.append(f)
        if len(out) >= limit:
            break
    return out


def main() -> None:
    rows = load_rows()
    by_stream: dict[str, list[dict]] = defaultdict(list)
    for r in rows:
        for s in r.get("streams") or []:
            if s in STREAMS:
                by_stream[s].append(r)

    corpus = {
        "total": len(rows),
        "live": sum(1 for r in rows if r.get("status") == "live"),
        "closed": sum(1 for r in rows if r.get("status") == "closed"),
        "scraped": "2026-09-18",
        "fit_rank": FIT_RANK,
        "lane2_streams": LANE2_STREAMS,
    }

    # corpus-wide skill percents for cross-cutting
    cross: dict[str, dict] = {}
    n_all = len(rows) or 1
    for skill, pat in SKILLS.items():
        hits = [r for r in rows if re.search(pat, r["_blob"], re.I)]
        cross[skill] = {
            "count": len(hits),
            "pct": round(100 * len(hits) / n_all),
            "proof": proof_files(hits),
        }

    streams_out: dict[str, dict] = {}
    for s in STREAMS:
        rs = by_stream.get(s, [])
        n = len(rs) or 1
        live = sum(1 for r in rs if r.get("status") == "live")
        eligible = [r for r in rs if r.get("seniority") == "eligible-now"]
        n_el = len(eligible) or 1

        skills_out = {}
        for skill, pat in SKILLS.items():
            hits = [r for r in rs if re.search(pat, r["_blob"], re.I)]
            hits_el = [r for r in eligible if re.search(pat, r["_blob"], re.I)]
            if not hits:
                continue
            skills_out[skill] = {
                "count": len(hits),
                "pct": round(100 * len(hits) / n),
                "pct_eligible_now": round(100 * len(hits_el) / n_el),
                "proof": proof_files(hits),
            }

        certs_out = []
        for name, pat in CERTS.items():
            hits = [r for r in rs if re.search(pat, r["_blob"], re.I)]
            if hits:
                certs_out.append(
                    {
                        "name": name,
                        "label": "JD-named",
                        "count": len(hits),
                        "pct": round(100 * len(hits) / n),
                        "proof": proof_files(hits, 2),
                    }
                )
        for mc in MARKET_CERTS:
            if s in mc["streams"]:
                certs_out.append(
                    {
                        "name": mc["name"],
                        "label": mc["label"],
                        "count": 0,
                        "pct": 0,
                        "note": mc["note"],
                        "proof": [],
                    }
                )

        orgs = Counter(r.get("org") or "Unknown" for r in rs)
        doors_now = []
        doors_2027 = []
        for r in rs:
            if r.get("status") != "live":
                continue
            door = {
                "org": r.get("org"),
                "title": r.get("title"),
                "years": r.get("years_required"),
                "deadline": r.get("deadline"),
                "file": r["_file"],
                "horizon": r["_horizon"],
                "seniority": r.get("seniority"),
            }
            if r["_horizon"] == "Now":
                doors_now.append(door)
            else:
                doors_2027.append(door)

        streams_out[s] = {
            "count": len(rs),
            "live": live,
            "closed": len(rs) - live,
            "eligible_now": len(eligible),
            "where_it_leads": sum(1 for r in rs if r.get("seniority") == "where-it-leads"),
            "years": dict(Counter(r["_years_bucket"] for r in rs)),
            "top_orgs": orgs.most_common(12),
            "skills": skills_out,
            "certs": certs_out,
            "doors_now": doors_now[:20],
            "doors_2027": doors_2027[:15],
        }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    payload = {"corpus": corpus, "cross_cutting": cross, "streams": streams_out}
    text = json.dumps(payload, indent=2, ensure_ascii=False)
    # JD titles sometimes use em dashes; keep tracker copy clean.
    text = text.replace("\u2014", "-").replace("\u2013", "-")
    OUT.write_text(text + "\n", encoding="utf-8")
    print(f"Wrote {OUT} ({corpus['total']} postings, {len(streams_out)} streams)")


if __name__ == "__main__":
    main()
