#!/usr/bin/env python3
"""Push Outreach + Regulatory Watch tabs and write lane-2-corporate-pp.md."""

from __future__ import annotations

import json
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOKEN = Path("/tmp/gcloud-user.token").read_text().strip()
SID = "1EJYumDPOybjnEGRwJ3Om7Fder9wZFaSWsLebwZbFNAU"
ev = json.loads((ROOT / "synthesis" / "skill-evidence.json").read_text())
cr = ev["streams"]["corporate-regulatory"]

NAVY = {"red": 0.102, "green": 0.227, "blue": 0.353}
WHITE = {"red": 1, "green": 1, "blue": 1}
RHYTHM = {"red": 0.925, "green": 0.941, "blue": 0.953}


def api(method: str, url: str, payload=None):
    body = None if payload is None else json.dumps(payload).encode()
    req = urllib.request.Request(url, data=body, method=method)
    req.add_header("Authorization", f"Bearer {TOKEN}")
    if payload is not None:
        req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req) as resp:
            raw = resp.read().decode()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        raise SystemExit(f"{e.code} {e.read().decode()[:2500]}")


def header_block(sheet_id: int, ncols: int) -> list:
    return [
        {
            "mergeCells": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 0,
                    "endRowIndex": 1,
                    "startColumnIndex": 0,
                    "endColumnIndex": ncols,
                },
                "mergeType": "MERGE_ALL",
            }
        },
        {
            "mergeCells": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 1,
                    "endRowIndex": 2,
                    "startColumnIndex": 0,
                    "endColumnIndex": ncols,
                },
                "mergeType": "MERGE_ALL",
            }
        },
        {
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 0,
                    "endRowIndex": 1,
                    "startColumnIndex": 0,
                    "endColumnIndex": ncols,
                },
                "cell": {
                    "userEnteredFormat": {
                        "backgroundColor": NAVY,
                        "textFormat": {
                            "foregroundColor": WHITE,
                            "bold": True,
                            "fontSize": 12,
                            "fontFamily": "Arial",
                        },
                        "verticalAlignment": "MIDDLE",
                    }
                },
                "fields": "userEnteredFormat(backgroundColor,textFormat,verticalAlignment)",
            }
        },
        {
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 1,
                    "endRowIndex": 2,
                    "startColumnIndex": 0,
                    "endColumnIndex": ncols,
                },
                "cell": {
                    "userEnteredFormat": {
                        "backgroundColor": RHYTHM,
                        "textFormat": {"fontSize": 10, "fontFamily": "Arial"},
                        "wrapStrategy": "WRAP",
                        "verticalAlignment": "MIDDLE",
                    }
                },
                "fields": "userEnteredFormat(backgroundColor,textFormat,wrapStrategy,verticalAlignment)",
            }
        },
        {
            "repeatCell": {
                "range": {
                    "sheetId": sheet_id,
                    "startRowIndex": 2,
                    "endRowIndex": 3,
                    "startColumnIndex": 0,
                    "endColumnIndex": ncols,
                },
                "cell": {
                    "userEnteredFormat": {
                        "backgroundColor": NAVY,
                        "textFormat": {
                            "foregroundColor": WHITE,
                            "bold": True,
                            "fontSize": 10,
                            "fontFamily": "Arial",
                        },
                        "verticalAlignment": "MIDDLE",
                    }
                },
                "fields": "userEnteredFormat(backgroundColor,textFormat,verticalAlignment)",
            }
        },
    ]


def widths(sheet_id: int, sizes: list[int]) -> list:
    out = []
    for i, w in enumerate(sizes):
        out.append(
            {
                "updateDimensionProperties": {
                    "range": {
                        "sheetId": sheet_id,
                        "dimension": "COLUMNS",
                        "startIndex": i,
                        "endIndex": i + 1,
                    },
                    "properties": {"pixelSize": w},
                    "fields": "pixelSize",
                }
            }
        )
    return out


outreach_title = [
    "Outreach  ·  Lane 2 is a referral market  ·  Now doors first (Chase, Koan, Ikigai, APCO, Cashfree)  ·  Stretch orgs get coffee chats, not cold applications"
]
outreach_note = [
    "Cadence: Day 0 send · Day 7 polite bump · Day 21 close or ask for one intro. Max 4 new outreaches/week. Log replies here."
]
outreach_header = [
    "Type",
    "Target / Role",
    "Why",
    "Channel",
    "Template",
    "Sent?",
    "Follow-up date",
    "Status",
    "Notes",
]
outreach_rows = [
    [
        "Alum / peer",
        "TISS alum in corporate PP / GA / Chase / Koan / Big 4 reg",
        "Warm path into Now advisory doors",
        "LinkedIn / WhatsApp",
        "Alum",
        "",
        "",
        "Open",
        "",
    ],
    [
        "Alum / peer",
        "TRI / Village Square contact who knows PP boutiques",
        "Second-degree intro",
        "Email",
        "Alum",
        "",
        "",
        "Open",
        "",
    ],
    [
        "Professional",
        "Analyst / Associate at Chase India (Digital Economy or Fintech)",
        "Same seat she wants in 0-2 years",
        "LinkedIn",
        "Cold PP",
        "",
        "",
        "Open",
        "From corpus: chase-associate-*.md",
    ],
    [
        "Professional",
        "Analyst / Associate at Koan Advisory",
        "Rolling 0-year analyst culture",
        "LinkedIn / contactus@",
        "Cold PP",
        "",
        "",
        "Open",
        "koan-advisory-policy-research-rolling.md",
    ],
    [
        "Professional",
        "Ikigai Law PP & GA team junior",
        "Law + PP fit",
        "LinkedIn",
        "Cold PP",
        "",
        "",
        "Open",
        "",
    ],
    [
        "Professional",
        "APCO Mumbai / Delhi public affairs analyst",
        "Intern deadline ~17 Oct; ask about analyst path",
        "LinkedIn",
        "Cold PP",
        "",
        "",
        "Open",
        "apco-worldwide-intern-*.md",
    ],
    [
        "Recruiter / HR",
        "Cashfree PP & GA hiring manager / HR",
        "0-1 year live seat Bengaluru",
        "Careers form + LinkedIn",
        "Recruiter",
        "",
        "",
        "Open",
        "Deadline ~17 Oct 2026",
    ],
    [
        "Recruiter / HR",
        "KPMG Regulatory / EY FS Risk campus or lateral recruiter",
        "Big 4 entry regulatory-adjacent",
        "LinkedIn / careers",
        "Recruiter",
        "",
        "",
        "Open",
        "",
    ],
    [
        "Professional",
        "CII / ASSOCHAM Executive (Financial Sector or Digital Policy)",
        "Association Now path; regulator tracking",
        "LinkedIn",
        "Cold PP",
        "",
        "",
        "Open",
        "",
    ],
    [
        "Professional",
        "Visa GA Analyst / team (Mumbai) - coffee only",
        "Stretch 2-4 years; learn the desk, do not apply cold unless bar drops",
        "LinkedIn",
        "Cold PP",
        "",
        "",
        "Open",
        "Stretch. visa-analyst-government-affairs-mumbai-2026-07.md",
    ],
    [
        "Professional",
        "NASSCOM Public Policy (informational)",
        "Stretch; association network",
        "LinkedIn / events",
        "Cold PP",
        "",
        "",
        "Open",
        "Not an apply target now",
    ],
    [
        "Professional",
        "The Dialogue / Digital India Foundation researcher",
        "Fintech policy writing peers",
        "LinkedIn",
        "Cold PP",
        "",
        "",
        "Open",
        "",
    ],
]

template_lines = [
    [""],
    ["TEMPLATES (copy into LinkedIn; edit names; no AI paste to strangers)"],
    [""],
    ["Alum"],
    [
        "Hi {Name}, I am Suhani (TISS, TRI/Pride Place work on rights implementation). I am building toward corporate public policy / regulatory advisory in India, starting with boutiques like Chase and Koan. Would you have 15 minutes in the next two weeks to share how you entered the lane? Happy to send a one-pager on my work first."
    ],
    [""],
    ["Recruiter"],
    [
        "Hi {Name}, I am applying for {Role} at {Org}. Law background + field policy research (Pride Place Act analysis; BOCW welfare memo). I can send a 1-page executive brief and a short consultation-style note. Is {Role} still open, and is there anything beyond the portal packet that helps?"
    ],
    [""],
    ["Cold PP"],
    [
        "Hi {Name}, I follow {Org}'s work on {Topic}. I am an early-career policy researcher (TISS; law; rights-to-delivery memos) moving into corporate PP / GA. I am not asking for a job in this note. Could I ask two questions about how your team tracks consultations and what a strong analyst writing sample looks like? 15 minutes is plenty."
    ],
    [""],
    ["LINKEDIN POSITIONING (Lane 2 draft - edit before publishing)"],
    [""],
    ["Headline"],
    [
        "Policy researcher (law) | Rights implementation -> corporate public policy / regulatory advisory | TISS · TRI"
    ],
    [""],
    ["About"],
    [
        "I work at the seam between statute and delivery: Pride Place (rights implementation), BOCW/welfare entitlements, and field research across Indian states. I am building the craft corporate PP and regulatory advisory teams hire for: regulator maps, consultation responses, executive briefs, and fintech/payments literacy. Open to Analyst / Associate / Intern seats at PP boutiques, public affairs firms, association desks, and entry Big 4 regulatory practices. Mumbai/Delhi preferred."
    ],
    [""],
    ["Featured (add when ready)"],
    [
        "Pride Place 1-pager · BOCW 2-pager · Regulator map · One consultation response · One fintech memo"
    ],
]

watch_title = [
    "Regulatory Watch  ·  Friday 20-min scan  ·  5-line note  ·  ties to Media Diet; do not duplicate long reading lists"
]
watch_note = [
    "Mark Consumed? after you write the note. Prefer live consultations over news explainers. Fintech theme is the deep sector."
]
watch_header = [
    "Date added",
    "Regulator / source",
    "Item",
    "Theme",
    "Why track",
    "Link / where",
    "Type",
    "Consumed?",
    "Notes",
]
watch_rows = [
    [
        "2026-09-18",
        "RBI",
        "Payments / PPIs / digital lending consultations (standing)",
        "Fintech",
        "Core sector for Chase/Visa/Cashfree desks",
        "rbi.org.in -> Publications / Notifications",
        "Standing watch",
        "N",
        "JD-named theme",
    ],
    [
        "2026-09-18",
        "SEBI",
        "Consultation papers + circulars (standing)",
        "Markets / disclosure",
        "Consultation-response practice; BRSR-adjacent literacy",
        "sebi.gov.in",
        "Standing watch",
        "N",
        "",
    ],
    [
        "2026-09-18",
        "TRAI",
        "Consultation papers (standing)",
        "Telecom / digital",
        "CII digital policy desks track TRAI/DoT/MeitY",
        "trai.gov.in",
        "Standing watch",
        "N",
        "",
    ],
    [
        "2026-09-18",
        "CCI",
        "Orders + combinations (standing)",
        "Competition",
        "Google GAPP competition desk is stretch; still useful literacy",
        "cci.gov.in",
        "Standing watch",
        "N",
        "watch / not Now apply",
    ],
    [
        "2026-09-18",
        "MeitY",
        "IT Rules / DPDP rules drafts (standing)",
        "Data / digital",
        "Ikigai / Koan / NASSCOM digital economy work",
        "meity.gov.in",
        "Standing watch",
        "N",
        "",
    ],
    [
        "2026-09-18",
        "IRDAI",
        "Notices (light touch)",
        "Insurance",
        "CII financial sector EO tracks IRDAI with RBI/SEBI",
        "irdai.gov.in",
        "Standing watch",
        "N",
        "light",
    ],
    [
        "2026-09-18",
        "RBI",
        "One live consultation PDF (pick this week)",
        "Fintech",
        "Timed 2-page industry response artefact",
        "Download from RBI site",
        "Exercise target",
        "N",
        "W4 calendar",
    ],
    [
        "2026-09-18",
        "SEBI",
        "One live consultation PDF (pick this month)",
        "Markets",
        "Second consultation response",
        "sebi.gov.in",
        "Exercise target",
        "N",
        "",
    ],
    [
        "2026-09-18",
        "NASSCOM / IAMAI",
        "Public submissions / event notes",
        "Industry",
        "See how associations phrase asks",
        "nasscom.in / iamai.in",
        "Industry voice",
        "N",
        "watch / not JD-named task",
    ],
    [
        "2026-09-18",
        "The Dialogue",
        "Fintech & sustainable finance notes",
        "Fintech",
        "Writing sample shape for fintech PP",
        "thedialogue.co",
        "Research shop",
        "N",
        "",
    ],
]


def main() -> None:
    meta = api(
        "GET",
        f"https://sheets.googleapis.com/v4/spreadsheets/{SID}?fields=sheets(properties(title,sheetId,index))",
    )
    existing = {s["properties"]["title"]: s["properties"] for s in meta["sheets"]}
    reqs = []
    if "Outreach" not in existing:
        reqs.append({"addSheet": {"properties": {"title": "Outreach", "index": 2}}})
    if "Regulatory Watch" not in existing:
        reqs.append(
            {"addSheet": {"properties": {"title": "Regulatory Watch", "index": 3}}}
        )
    if reqs:
        api(
            "POST",
            f"https://sheets.googleapis.com/v4/spreadsheets/{SID}:batchUpdate",
            {"requests": reqs},
        )
        meta = api(
            "GET",
            f"https://sheets.googleapis.com/v4/spreadsheets/{SID}?fields=sheets(properties(title,sheetId,index))",
        )
        existing = {s["properties"]["title"]: s["properties"] for s in meta["sheets"]}

    out_id = existing["Outreach"]["sheetId"]
    reg_id = existing["Regulatory Watch"]["sheetId"]

    for sid in (out_id, reg_id):
        try:
            api(
                "POST",
                f"https://sheets.googleapis.com/v4/spreadsheets/{SID}:batchUpdate",
                {
                    "requests": [
                        {"clearBasicFilter": {"sheetId": sid}},
                        {"unmergeCells": {"range": {"sheetId": sid}}},
                        {
                            "updateCells": {
                                "range": {"sheetId": sid},
                                "fields": "userEnteredValue,userEnteredFormat,dataValidation",
                            }
                        },
                    ]
                },
            )
        except SystemExit:
            api(
                "POST",
                f"https://sheets.googleapis.com/v4/spreadsheets/{SID}:batchUpdate",
                {
                    "requests": [
                        {
                            "updateCells": {
                                "range": {"sheetId": sid},
                                "fields": "userEnteredValue,userEnteredFormat,dataValidation",
                            }
                        },
                    ]
                },
            )

    out_values = [
        outreach_title + [""] * 8,
        outreach_note + [""] * 8,
        outreach_header,
    ] + outreach_rows
    out_values.append([""] * 9)
    for t in template_lines:
        out_values.append(t + [""] * (9 - len(t)))

    reg_values = [
        watch_title + [""] * 8,
        watch_note + [""] * 8,
        watch_header,
    ] + watch_rows

    api(
        "POST",
        f"https://sheets.googleapis.com/v4/spreadsheets/{SID}/values:batchUpdate",
        {
            "valueInputOption": "USER_ENTERED",
            "data": [
                {"range": "Outreach!A1", "values": out_values},
                {"range": "Regulatory Watch!A1", "values": reg_values},
            ],
        },
    )
    print("wrote values")

    n_out = len(outreach_rows)
    n_reg = len(watch_rows)
    fmt: list = []
    fmt += header_block(out_id, 9)
    fmt += header_block(reg_id, 9)
    fmt.append(
        {
            "repeatCell": {
                "range": {
                    "sheetId": out_id,
                    "startRowIndex": 3,
                    "endRowIndex": 3 + n_out,
                    "startColumnIndex": 0,
                    "endColumnIndex": 9,
                },
                "cell": {
                    "userEnteredFormat": {
                        "wrapStrategy": "WRAP",
                        "verticalAlignment": "TOP",
                        "textFormat": {"fontSize": 10, "fontFamily": "Arial"},
                    }
                },
                "fields": "userEnteredFormat(wrapStrategy,verticalAlignment,textFormat)",
            }
        }
    )
    fmt.append(
        {
            "repeatCell": {
                "range": {
                    "sheetId": reg_id,
                    "startRowIndex": 3,
                    "endRowIndex": 3 + n_reg,
                    "startColumnIndex": 0,
                    "endColumnIndex": 9,
                },
                "cell": {
                    "userEnteredFormat": {
                        "wrapStrategy": "WRAP",
                        "verticalAlignment": "TOP",
                        "textFormat": {"fontSize": 10, "fontFamily": "Arial"},
                    }
                },
                "fields": "userEnteredFormat(wrapStrategy,verticalAlignment,textFormat)",
            }
        }
    )
    fmt.append(
        {
            "updateSheetProperties": {
                "properties": {
                    "sheetId": out_id,
                    "gridProperties": {"frozenRowCount": 3, "columnCount": 9},
                    "tabColor": {"red": 0.55, "green": 0.35, "blue": 0.20},
                },
                "fields": "gridProperties.frozenRowCount,gridProperties.columnCount,tabColor",
            }
        }
    )
    fmt.append(
        {
            "updateSheetProperties": {
                "properties": {
                    "sheetId": reg_id,
                    "gridProperties": {"frozenRowCount": 3, "columnCount": 9},
                    "tabColor": {"red": 0.25, "green": 0.40, "blue": 0.55},
                },
                "fields": "gridProperties.frozenRowCount,gridProperties.columnCount,tabColor",
            }
        }
    )
    fmt += widths(out_id, [110, 280, 220, 140, 90, 70, 110, 80, 200])
    fmt += widths(reg_id, [100, 120, 280, 120, 220, 200, 110, 90, 160])
    fmt.append(
        {
            "setBasicFilter": {
                "filter": {
                    "range": {
                        "sheetId": out_id,
                        "startRowIndex": 2,
                        "endRowIndex": 3 + n_out,
                        "startColumnIndex": 0,
                        "endColumnIndex": 9,
                    }
                }
            }
        }
    )
    fmt.append(
        {
            "setBasicFilter": {
                "filter": {
                    "range": {
                        "sheetId": reg_id,
                        "startRowIndex": 2,
                        "endRowIndex": 3 + n_reg,
                        "startColumnIndex": 0,
                        "endColumnIndex": 9,
                    }
                }
            }
        }
    )
    fmt.append(
        {
            "setDataValidation": {
                "range": {
                    "sheetId": out_id,
                    "startRowIndex": 3,
                    "endRowIndex": 3 + n_out,
                    "startColumnIndex": 4,
                    "endColumnIndex": 5,
                },
                "rule": {
                    "condition": {
                        "type": "ONE_OF_LIST",
                        "values": [
                            {"userEnteredValue": "Alum"},
                            {"userEnteredValue": "Recruiter"},
                            {"userEnteredValue": "Cold PP"},
                        ],
                    },
                    "showCustomUi": True,
                },
            }
        }
    )
    fmt.append(
        {
            "setDataValidation": {
                "range": {
                    "sheetId": out_id,
                    "startRowIndex": 3,
                    "endRowIndex": 3 + n_out,
                    "startColumnIndex": 7,
                    "endColumnIndex": 8,
                },
                "rule": {
                    "condition": {
                        "type": "ONE_OF_LIST",
                        "values": [
                            {"userEnteredValue": "Open"},
                            {"userEnteredValue": "Replied"},
                            {"userEnteredValue": "Closed"},
                        ],
                    },
                    "showCustomUi": True,
                },
            }
        }
    )
    fmt.append(
        {
            "setDataValidation": {
                "range": {
                    "sheetId": reg_id,
                    "startRowIndex": 3,
                    "endRowIndex": 3 + n_reg,
                    "startColumnIndex": 7,
                    "endColumnIndex": 8,
                },
                "rule": {
                    "condition": {
                        "type": "ONE_OF_LIST",
                        "values": [
                            {"userEnteredValue": "Y"},
                            {"userEnteredValue": "N"},
                        ],
                    },
                    "showCustomUi": True,
                },
            }
        }
    )
    api(
        "POST",
        f"https://sheets.googleapis.com/v4/spreadsheets/{SID}:batchUpdate",
        {"requests": fmt},
    )
    print("formatted")

    # markdown twin
    md = []
    md.append("# Lane 2: Corporate public policy / regulatory / government affairs")
    md.append("")
    md.append(
        f"Parallel career lane beside Lane 1 (research / consulting / legal-policy / gov). Corpus: **{cr['count']}** postings tagged `corporate-regulatory` (live {cr['live']}, eligible-now {cr['eligible_now']}). Scraped 2026-09-18."
    )
    md.append("")
    md.append(
        "Sheet: https://docs.google.com/spreadsheets/d/1EJYumDPOybjnEGRwJ3Om7Fder9wZFaSWsLebwZbFNAU/edit"
    )
    md.append("")
    md.append("## What is realistic Now")
    md.append("")
    md.append(
        "Chase, Koan, Ikigai, APCO intern (Mumbai), Cashfree PP&GA 0-1 (Bengaluru, deadline ~17 Oct), Edelman Analyst, KPMG/EY regulatory entry, CERC/ASSOCHAM/CII Executives, Digital India Foundation, Prayas Energy RA."
    )
    md.append("")
    md.append("## Stretch (coffee, not cold apply)")
    md.append("")
    md.append(
        "Visa GA Analyst (JD bar 2-4), NASSCOM SM/Director, Google/Meta/Amazon PP, PayU/Razorpay/PhonePe heads, Primus VP."
    )
    md.append("")
    md.append("## Sheet changes")
    md.append("")
    md.append(
        "- Skill Tracker: 8 Lane 2 rows (regulator map, consultation response, GA map, executive brief, fintech literacy, financial literacy, monitoring habit)."
    )
    md.append(
        "- Target Organizations: Lane + Eligibility columns (Now / After Jul 2027 / Stretch) on every org; 22 Lane 2 orgs added."
    )
    md.append(
        "- Daily / Weekly / Monthly: Lane 2 blocks added without replacing Lane 1 IEIC/Sattva/LAMP plan."
    )
    md.append(
        "- New tabs: Outreach (targets + templates + LinkedIn draft), Regulatory Watch (Friday scan)."
    )
    md.append("")
    md.append("## Deferred")
    md.append("")
    md.append(
        "Competitions & Events, Interview Prep, Employer Intel deep-dive, Monthly Review. Revisit after two weeks of Daily rows ticked."
    )
    md.append("")
    md.append("## Evidence top skills (stream %)")
    md.append("")
    skills = sorted(cr["skills"].items(), key=lambda x: -x[1]["pct"])
    for k, v in skills[:12]:
        if v["pct"] >= 8:
            md.append(f"- `{k}`: {v['pct']}% e.g. {', '.join(v['proof'][:2])}")
    md.append("")
    text = "\n".join(md)
    assert "\u2014" not in text
    out = ROOT / "synthesis" / "lane-2-corporate-pp.md"
    out.write_text(text + "\n", encoding="utf-8")
    print("wrote", out)


if __name__ == "__main__":
    main()
