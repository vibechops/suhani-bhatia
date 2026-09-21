#!/usr/bin/env python3
"""Generate stream-9 UN/multilateral India posting markdown from scraped JD text."""
from __future__ import annotations

import re
from pathlib import Path

SCRAPE = Path("/tmp/un-scrape")
OUT = Path("/Users/sahil/Documents/suhani-resume/jobs-research/postings")
OUT.mkdir(parents=True, exist_ok=True)


def load(*names: str) -> str:
    for name in names:
        for p in (SCRAPE / name, SCRAPE / f"{name}.txt", SCRAPE / f"{name}.html"):
            if p.exists():
                return p.read_text(encoding="utf-8", errors="ignore")
    return ""


def trim_from(text: str, markers: list[str]) -> str:
    best = -1
    for m in markers:
        i = text.find(m)
        if i >= 0 and (best < 0 or i < best):
            best = i
    return text[best:] if best >= 0 else text


def trim_to(text: str, markers: list[str]) -> str:
    cut = len(text)
    for m in markers:
        i = text.find(m)
        if i > 200 and i < cut:
            cut = i
    return text[:cut]


def tidy(text: str) -> str:
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def write_md(slug: str, meta: dict, body: str) -> Path:
    lines = ["---"]
    for k, v in meta.items():
        if isinstance(v, list):
            lines.append(f"{k}: [{', '.join(v)}]")
        elif v is None:
            lines.append(f"{k}: null")
        else:
            lines.append(f"{k}: {v}")
    lines.append("---")
    path = OUT / f"{slug}.md"
    # do not overwrite seeded gender intern unless regenerating intentionally
    if slug == "undp-india-gender-intern-delhi" and path.exists():
        return path
    path.write_text("\n".join(lines) + "\n\n" + body.strip() + "\n", encoding="utf-8")
    return path


def body_unjoblink(text: str) -> str:
    text = trim_from(text, ["JOB DESCRIPTION", "JOB DETAILS", "Organizational Setting", "Background"])
    text = trim_to(
        text,
        [
            "Potential interview questions",
            "UN Joblink Main Menu",
            "Register now\nto reach",
            "Create account\nLogin\nFor employers",
        ],
    )
    return tidy(text)


def body_impactpool(text: str) -> str:
    # prefer full JD after Summary
    if "Background:" in text:
        text = text[text.find("Background:") :]
    elif "JOB DESCRIPTION" in text or "Job Description" in text:
        text = trim_from(text, ["JOB DESCRIPTION", "Job Description", "| Job Description"])
    text = trim_to(text, ["Summary by Impactpool", "Potential interview questions", "Fellowship\n"])
    return tidy(text)


def body_devnet(text: str) -> str:
    text = trim_from(text, ["VACANCY ANNOUNCEMENT", "A. About GIZ", "Reference #", "About the Organization"])
    text = trim_to(text, ["Premium Jobs", "This Job is no longer active"])
    return tidy(text)


POSTINGS: list[tuple[str, dict, str]] = []


def add(slug: str, meta: dict, body: str) -> None:
    if len(body.strip()) < 400:
        print(f"SKIP short body: {slug} ({len(body)})")
        return
    POSTINGS.append((slug, meta, body))


# --- LIVE ---

t = load("extra_45")
body = tidy(
    trim_to(
        trim_from(t, ["Organizational Setting and Reporting Relationship", "Join Our Mission"]),
        ["IMPORTANT INFORMATION", "How to Apply", "Return to"],
    )
)
add(
    "adb-india-climate-change-officer-adaptation-2026-09",
    {
        "org": "Asian Development Bank",
        "title": "Climate Change Officer (Climate Change Adaptation)",
        "location": "New Delhi (India Resident Mission)",
        "streams": ["un-multilateral"],
        "seniority": "where-it-leads",
        "years_required": "8+",
        "degree": "Bachelor's in climate science, environmental science/management, engineering, economics or related; Master's preferred",
        "status": "live",
        "posted": "2026-09-07",
        "deadline": "2026-09-21",
        "source": "https://www.adb.org/careers/260856",
        "scraped": "2026-09-17",
    },
    body,
)

add(
    "giz-india-junior-transport-infrastructure-advisor-delhi-2026-09",
    {
        "org": "GIZ India",
        "title": "Junior Transport Infrastructure Advisor",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "eligible-now",
        "years_required": "1-2",
        "degree": "Postgraduate in transport planning or related",
        "status": "live",
        "posted": "2026-09-16",
        "deadline": "2026-09-30",
        "source": "https://devnetjobsindia.org/jobdescription.aspx?job_id=303756",
        "scraped": "2026-09-17",
    },
    body_devnet(load("page_35")),
)

add(
    "giz-india-energy-advisor-hydrogen-delhi-2026-09",
    {
        "org": "GIZ India",
        "title": "Energy Advisor (Hydrogen Ramp-Up / IGEF-related)",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "live",
        "posted": "2026-09-11",
        "deadline": "2026-09-24",
        "source": "https://devnetjobsindia.org/jobdescription.aspx?job_id=303463",
        "scraped": "2026-09-17",
    },
    body_devnet(load("giz_energy")),
)

add(
    "giz-india-climate-finance-advisor-fastr-delhi-2026-09",
    {
        "org": "GIZ India",
        "title": "Climate Finance Advisor (FASTR)",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "live",
        "posted": "2026-09-16",
        "deadline": "2026-09-30",
        "source": "https://devnetjobsindia.org/jobdescription.aspx?job_id=303758",
        "scraped": "2026-09-17",
    },
    body_devnet(load("giz_cf")),
)

# --- CLOSED recent ---

add(
    "adb-india-project-assistant-inrm-2026-09",
    {
        "org": "Asian Development Bank",
        "title": "Project Assistant (Multiple Positions)",
        "location": "New Delhi (India Resident Mission)",
        "streams": ["un-multilateral"],
        "seniority": "where-it-leads",
        "years_required": "5+",
        "degree": "Bachelor's preferably in engineering, business administration or related",
        "status": "closed",
        "posted": "2026-08-31",
        "deadline": "2026-09-15",
        "source": "https://www.adb.org/careers/260854",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("adb_pa", "page_30")),
)

add(
    "undp-india-operations-associate-tribal-npsa6-2026-09",
    {
        "org": "UNDP India",
        "title": "Operations Associate (Tribal projects / SDG Acceleration)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "migrant-livelihoods"],
        "seniority": "eligible-now",
        "years_required": "3 (bachelor's) or 6 (secondary)",
        "degree": "Secondary required; bachelor's in social sciences/development/operations preferred",
        "status": "closed",
        "posted": None,
        "deadline": "2026-09-09",
        "source": "https://www.unjobnet.org/jobs/detail/undp-operations-associate-88407944",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("extra_49", "page_18")),
)

add(
    "undp-india-finance-administrative-coordinator-2026-09",
    {
        "org": "UNDP India",
        "title": "Finance and Administrative Coordinator",
        "location": "New Delhi / India",
        "streams": ["un-multilateral"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-09-03",
        "source": "https://unjoblink.org/job/details/461784/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("page_17")),
)

add(
    "undp-india-project-officer-circular-economy-2026-08",
    {
        "org": "UNDP India",
        "title": "Project Officer (Circular Economy and Chemicals Management)",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-27",
        "source": "https://unjoblink.org/job/details/459814/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("page_16")),
)

add(
    "undp-india-project-analyst-gender-social-inclusion-2026-08",
    {
        "org": "UNDP India",
        "title": "Project Analyst, Gender & Social Inclusion",
        "location": "New Delhi",
        "streams": ["un-multilateral", "gender-rights"],
        "seniority": "eligible-now",
        "years_required": "0 (master's) or 2 (bachelor's)",
        "degree": "Master's in Gender Studies, Development Studies, Public Policy, Social Sciences or related (or bachelor's + 2 years)",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-23",
        "source": "https://unjoblink.org/job/details/457934/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("page_3")),
)

add(
    "undp-india-project-analyst-livelihoods-value-chains-2026-05",
    {
        "org": "UNDP India",
        "title": "Project Analyst – Livelihoods and Inclusive Value Chains (NPSA-8)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "migrant-livelihoods"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-05-11",
        "source": "https://www.impactpool.org/jobs/651366",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_11")),
)

add(
    "undp-india-national-project-manager-value-chains-2026-05",
    {
        "org": "UNDP India",
        "title": "National Project Manager - Value Chain Development and Private Sector Partnerships (NPSA-10)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "migrant-livelihoods"],
        "seniority": "where-it-leads",
        "years_required": "5 (master's) or 7 (bachelor's)",
        "degree": "Master's in Development Studies, Economics, Agriculture, Rural Management, Public Policy, Business Administration or related",
        "status": "closed",
        "posted": None,
        "deadline": "2026-05-16",
        "source": "https://www.impactpool.org/jobs/659047",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_34")),
)

add(
    "undp-india-ic-economic-analyst-niti-adaptation-2026-02",
    {
        "org": "UNDP India",
        "title": "Individual Consultant - Economic Analyst (Climate Adaptation / NITI Aayog support)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "government"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": "2026-01-27",
        "deadline": "2026-02-10",
        "source": "https://unjoblink.org/job/details/395899/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("page_8", "page_33")),
)

add(
    "unicef-india-partnerships-officer-governance-yuwaah-no1-2026-08",
    {
        "org": "UNICEF India",
        "title": "Partnerships Officer (Governance), NO-1, Temporary 364 days (YuWaah)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "education"],
        "seniority": "eligible-now",
        "years_required": "1+",
        "degree": "Bachelor's in Social Science, Development Studies, Communications, Business Administration, Political Science, International Relations, Public Policy or related",
        "status": "closed",
        "posted": "2026-07-24",
        "deadline": "2026-08-05",
        "source": "https://unjoblink.org/job/details/453338/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("page_1", "extra_42")),
)

add(
    "unicef-india-consultant-partnerships-livelihoods-yuwaah-2026-09",
    {
        "org": "UNICEF India",
        "title": "Consultant – Partnerships for Livelihoods (YuWaah), 14.5 months",
        "location": "New Delhi (office-based with travel)",
        "streams": ["un-multilateral", "migrant-livelihoods"],
        "seniority": "where-it-leads",
        "years_required": "10+",
        "degree": "Master's in Public Policy, Economics, Rural Development, International Development or related",
        "status": "closed",
        "posted": None,
        "deadline": "2026-09-09",
        "source": "https://unjoblink.org/job/details/463440/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("unicef_liv", "page_2")),
)

add(
    "unicef-india-childcare-policy-reform-consultancy-2026-09",
    {
        "org": "UNICEF India",
        "title": "Individual consultancy for childcare policy reform (Indian nationals)",
        "location": "Home-based / New Delhi (possible travel)",
        "streams": ["un-multilateral", "gender-rights", "education"],
        "seniority": "where-it-leads",
        "years_required": "10-12",
        "degree": "Master's or above in Economics, Public Policy or related; care economy research preferred",
        "status": "closed",
        "posted": None,
        "deadline": "2026-09-15",
        "source": "https://www.unjobnet.org/jobs/detail/unicef-individual-consultancy-for-childcare-policy-reform-indian-nationals-only-88624832",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("page_39")),
)

add(
    "unicef-india-data-analysis-consultant-education-2026-08",
    {
        "org": "UNICEF India",
        "title": "Data Analysis Consultant, Education section, 11.5 months (remote)",
        "location": "New Delhi (remote)",
        "streams": ["un-multilateral", "education", "research-evidence"],
        "seniority": "where-it-leads",
        "years_required": "10+",
        "degree": "Master's in Demography/Statistics/Population studies/Education or related social science",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-18",
        "source": "https://www.impactpool.org/jobs/1229455",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_10", "extra_48")),
)

add(
    "unicef-india-child-protection-consultant-justice-evac-2026-08",
    {
        "org": "UNICEF India",
        "title": "Child Protection Consultant – Justice and Ending Violence Against Children, 11 months",
        "location": "New Delhi (office-based)",
        "streams": ["un-multilateral", "gender-rights"],
        "seniority": "where-it-leads",
        "years_required": "8+",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-25",
        "source": "https://www.impactpool.org/jobs/1231039",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_9", "extra_47")),
)

add(
    "unicef-india-advocacy-consultant-2026-08",
    {
        "org": "UNICEF India",
        "title": "Advocacy Consultant (Communication, Advocacy and Partnerships), 17 months",
        "location": "New Delhi",
        "streams": ["un-multilateral", "knowledge-comms"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": "2026-07-26",
        "deadline": "2026-08-03",
        "source": "https://india.un.org/en/jobs",
        "scraped": "2026-09-17",
    },
    # Minimal verified listing from india.un.org (full TOR not publicly mirrored in scrape set)
    tidy(
        """Advocacy Consultant. New Delhi. India. Communication, Advocacy and partnerships. 17 Months. Office Based #594716

Closing date: 03 August 2026

Agency: UNICEF – United Nations Children’s Fund

Source listing (United Nations in India jobs board, 26 July 2026 posting):
https://india.un.org/en/jobs

Note: Full TOR was advertised via UNICEF careers; this file captures the verified India-board listing fields only. Do not treat missing duty details as invented content."""
    ),
)

# Fix: advocacy body too short / meta-note - skip if under threshold after add check
# We'll handle by providing more from search snippets only if substantial - skip short

add(
    "unicef-maharashtra-state-consultant-road-safety-shwp-2026",
    {
        "org": "UNICEF India",
        "title": "State Consultant – Child Road Safety, Adolescent Mental Health & Climate Change",
        "location": "Pune (Maharashtra)",
        "streams": ["un-multilateral", "education"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": None,
        "source": "https://devnetjobsindia.org/jobdescription.aspx?Job_Id=289682",
        "scraped": "2026-09-17",
    },
    body_devnet(load("extra_50", "page_23")),
)

add(
    "who-india-hso-ai-for-health-ssa-2026-09",
    {
        "org": "WHO India",
        "title": "Health Systems Officer - AI for Health (SSA)",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "eligible-now",
        "years_required": "2+",
        "degree": "Master's or above in public health, health policy, health informatics or related",
        "status": "closed",
        "posted": "2026-08-13",
        "deadline": "2026-09-03",
        "source": "https://www.impactpool.org/jobs/1231547",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_24")),
)

add(
    "wfp-india-programme-associate-climate-food-systems-2026-08",
    {
        "org": "WFP India",
        "title": "Programme Associate (Climate Change, Resilient Food Systems), SC Level 6",
        "location": "New Delhi",
        "streams": ["un-multilateral", "migrant-livelihoods"],
        "seniority": "where-it-leads",
        "years_required": "6+",
        "degree": "Secondary with specialized certification; university degree in Business, Commerce, Public Administration, Economics, Agriculture, Statistics, Environmental Sciences, IT or related desirable",
        "status": "closed",
        "posted": "2026-08-10",
        "deadline": "2026-08-24",
        "source": "https://www.impactpool.org/jobs/1230695",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_25")),
)

add(
    "un-women-india-national-technical-consultant-gender-statistics-mospi-2026-08",
    {
        "org": "UN Women India",
        "title": "National Technical Consultant - Data and Statistics for MoSPI",
        "location": "New Delhi (embedded in MoSPI)",
        "streams": ["un-multilateral", "gender-rights", "government"],
        "seniority": "where-it-leads",
        "years_required": "7+",
        "degree": "Master's or higher in Statistics, Economics, Demography, Public Policy, Development Studies, Gender Studies, Data Science or related",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-14",
        "source": "https://www.impactpool.org/jobs/1229709",
        "scraped": "2026-09-17",
    },
    body_impactpool(load("page_26")),
)

add(
    "unfpa-india-unv-communications-specialist-2026-06",
    {
        "org": "UNFPA India / UNV",
        "title": "UNV Communications Specialist (Content Writer and Editor)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "gender-rights", "knowledge-comms"],
        "seniority": "eligible-now",
        "years_required": "3",
        "degree": "Bachelor's in Communications, Journalism, Public Relations, Advertising, Development, International Relations, Social Sciences, Public Administration or related",
        "status": "closed",
        "posted": "2026-06-25",
        "deadline": None,
        "source": "https://india.unfpa.org/en/vacancies/unv-communications-specialist-content-writer-and-editor-1",
        "scraped": "2026-09-17",
    },
    tidy(trim_from(load("extra_46"), ["Mission and Objectives", "UNV Communications Specialist"])),
)

add(
    "unfpa-india-ic-resource-mobilization-partnerships-2026-03",
    {
        "org": "UNFPA India",
        "title": "Individual Consultant (Local): Resource Mobilization and Partnerships",
        "location": "New Delhi",
        "streams": ["un-multilateral", "gender-rights"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-03-02",
        "source": "https://www.unfpa.org/jobs/individual-consultant-local-resource-mobilization-and-partnerships-new-delhi",
        "scraped": "2026-09-17",
    },
    tidy(
        trim_to(
            trim_from(load("extra_43", "page_12"), ["The United Nations Population Fund", "Individual Consultant"]),
            ["Share this page", "Related content", "Footer"],
        )
    ),
)

add(
    "unfpa-india-programme-specialist-adolescents-youth-noc-2026-04",
    {
        "org": "UNFPA India",
        "title": "Programme Specialist, Adolescents and Youth (NOC)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "gender-rights", "education"],
        "seniority": "where-it-leads",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-04-09",
        "source": "https://www.unfpa.org/jobs/national-post-programme-specialist-adolescents-and-youth-new-delhi-india-noc",
        "scraped": "2026-09-17",
    },
    tidy(
        trim_to(
            trim_from(load("extra_44", "page_13"), ["The Programme Specialist", "National Post", "Job Description"]),
            ["Share this page", "Related content"],
        )
    ),
)

add(
    "ilo-india-intern-field-social-protection-spsa-2026-03",
    {
        "org": "ILO India",
        "title": "Intern Field (Social Protection / SPSA), DWT/CO-New Delhi",
        "location": "New Delhi",
        "streams": ["un-multilateral", "migrant-livelihoods", "gender-rights"],
        "seniority": "eligible-now",
        "years_required": "0",
        "degree": "Enrolled in or recently completed relevant postgraduate studies (see ILO internship rules in JD)",
        "status": "closed",
        "posted": "2026-02-27",
        "deadline": "2026-03-08",
        "source": "https://unjoblink.org/job/details/407546/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("ilo", "page_6")),
)

add(
    "unhcr-india-information-management-associate-g6-2026-07",
    {
        "org": "UNHCR India",
        "title": "Information Management Associate (G6), Temporary Appointment",
        "location": "New Delhi",
        "streams": ["un-multilateral", "migrant-livelihoods"],
        "seniority": "eligible-now",
        "years_required": "3-5",
        "degree": "see JD (information management / data / related)",
        "status": "closed",
        "posted": None,
        "deadline": "2026-07-22",
        "source": "https://unjoblink.org/job/details/451113/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("unhcr_im", "page_5")),
)

add(
    "unhcr-india-rsd-associate-g6-2026-07",
    {
        "org": "UNHCR India",
        "title": "RSD Associate (G6), Temporary Appointment",
        "location": "New Delhi",
        "streams": ["un-multilateral", "gender-rights"],
        "seniority": "eligible-now",
        "years_required": "2-3",
        "degree": "University degree in Law, Human Rights, International Relations or related desirable",
        "status": "closed",
        "posted": None,
        "deadline": "2026-07-22",
        "source": "https://unjoblink.org/job/details/451122/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("unhcr_rsd", "page_4")),
)

add(
    "world-bank-india-et-consultant-analyst-governance-2026-05",
    {
        "org": "World Bank India",
        "title": "E T Consultant - Analyst (Public Sector / Governance)",
        "location": "New Delhi",
        "streams": ["un-multilateral", "government"],
        "seniority": "eligible-now",
        "years_required": "see JD",
        "degree": "see JD",
        "status": "closed",
        "posted": None,
        "deadline": "2026-05-06",
        "source": "https://unjoblink.org/job/details/434476/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("wb_etc", "page_7")),
)

add(
    "unesco-mgiep-associate-project-officer-research-2026-06",
    {
        "org": "UNESCO MGIEP (New Delhi)",
        "title": "Associate Project Officer - Research (SEL / SDG 4.7), SC8",
        "location": "New Delhi",
        "streams": ["un-multilateral", "education", "research-evidence"],
        "seniority": "eligible-now",
        "years_required": "0-2",
        "degree": "PhD in education, psychology, neuroscience/cognitive science, statistics (psychology major) or other education-related sciences",
        "status": "closed",
        "posted": None,
        "deadline": "2026-06-30",
        "source": "https://unjoblink.org/job/details/440003/",
        "scraped": "2026-09-17",
    },
    body_unjoblink(load("unesco")),
)

add(
    "giz-india-junior-finance-specialist-country-office-2026-08",
    {
        "org": "GIZ India",
        "title": "Junior Finance Specialist / Finance Specialist (Country Office) - 3 positions",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "eligible-now",
        "years_required": "3-4",
        "degree": "Commerce graduate with professional certifications and/or SAP expertise preferred",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-05",
        "source": "https://devnetjobsindia.org/jobdescription.aspx?job_id=299141",
        "scraped": "2026-09-17",
    },
    body_devnet(load("page_22")),
)

add(
    "giz-india-intern-storein-energy-storage-delhi-2026-08",
    {
        "org": "GIZ India",
        "title": "Intern – Energy Storage for Renewable Energy Integration (StoREin)",
        "location": "New Delhi",
        "streams": ["un-multilateral"],
        "seniority": "eligible-now",
        "years_required": "0",
        "degree": "Postgraduate (M.Tech/M.Sc/master's) in engineering, preferably electrical/renewable energy/energy economics/power systems",
        "status": "closed",
        "posted": None,
        "deadline": "2026-08-09",
        "source": "https://devnetjobsindia.org/jobdescription.aspx?job_id=299309",
        "scraped": "2026-09-17",
    },
    tidy(
        """Intern, Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH

Location: New Delhi
Apply by: 09 Aug 2026
Reference #: 06/07/2026-Internship
Project: Energy Storage for Renewable Energy Integration in India (StoREin)
Position: Intern

The Indo-German technical cooperation project “Energy Storage for Renewable Energy Integration in India (StoREin)" led by the Ministry of New and Renewable Energy (MNRE), Government of India and jointly implemented with Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH, commissioned by the Federal Ministry for the Environment, Climate Action, Nature Conservation and Nuclear Safety (BMUKN) under the International Climate Initiative (IKI) is a transformative initiative aims to significantly advance the integration of renewable energy into India's power grid at the Distribution level by leveraging effective energy storage solutions.

The project is being implemented together with leading technical and research Consortium Partners; Fraunhofer Institute for Energy Economics and Energy System Technology (Fraunhofer IEE) Germany, Indian Institute of Technology (IIT) Bombay, The Energy and Resources Institute (TERI) and World Resources Institute (WRI) India.

Required qualifications (from public JD mirror):
- Postgraduation (M.Tech, M.Sc., master’s or equivalent) in engineering, preferably in electrical/renewable energy/energy economics/power system.
- Internship agreement for a duration of minimum 5 months and maximum up to 6 months.
- Monthly stipend of Rs.24,000/- and INR 5,000/- per month (in lumpsum) for local travel.
- Interns to arrange accommodation on their own.
- In case of official travel during assignment GIZ travel guidelines shall apply.

How to Apply: Please send your CV with a brief cover letter to sucheta.rawat@giz.de
Last date of application: 09th August 2026

Source: https://devnetjobsindia.org/jobdescription.aspx?job_id=299309"""
    ),
)

# Remove advocacy if short was added incorrectly - filter at write time

written = []
skipped = []
for slug, meta, body in POSTINGS:
    if slug == "unicef-india-advocacy-consultant-2026-08" and len(body) < 800:
        # keep as listing stub only if we want coverage; user said do not invent - stub with verified listing is OK if marked
        pass
    if len(body.strip()) < 400:
        skipped.append(slug)
        continue
    # skip overwriting seeded file content path differently
    p = write_md(slug, meta, body)
    written.append((slug, meta["status"], meta["org"], p))

print(f"Wrote {len(written)} files; skipped {len(skipped)}: {skipped}")
for slug, status, org, p in written:
    print(f"  [{status}] {org}: {slug}")
