export type Filter =
  | "all"
  | "professional"
  | "independent"
  | "policy"
  | "field"
  | "quantitative"
  | "strategy"
  | "programme"
  | "operations"
  | "data";

export type Provenance =
  | "professional"
  | "independent"
  | "synthetic"
  | "published";

export type HomeSlot =
  | "feature"
  | "beside"
  | "research"
  | "full"
  | "trio"
  | "wide"
  | "model"
  | "tool"
  | "list"
  | false;

export type WorkItem = {
  slug: string;
  title: string;
  problem: string;
  dek: string;
  year: string;
  where: string;
  category: string;
  method: string;
  filters: Filter[];
  provenance: Provenance;
  provenanceLabel: string;
  depth: "full" | "note" | "tool";
  home: HomeSlot;
  role: string;
  output: string;
  skills: string[];
};

export const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "professional", label: "Professional" },
  { id: "independent", label: "Independent" },
  { id: "policy", label: "Policy" },
  { id: "field", label: "Field" },
  { id: "quantitative", label: "Quantitative" },
  { id: "strategy", label: "Strategy" },
  { id: "programme", label: "Programme design" },
  { id: "operations", label: "Operations" },
  { id: "data", label: "Data" },
];

export const work: WorkItem[] = [
  {
    slug: "transgender-rights",
    title: "When a rights law meets a police station",
    problem: "Why a rights-based law can fail at the point of implementation.",
    dek: "How the Transgender Persons (Protection of Rights) Act 2019 is supposed to travel through a protection cell, and where that journey depends on ordinary police administration.",
    year: "2026",
    where: "Pride Place, Telangana State Police",
    category: "Professional research",
    method: "Implementation research · statutory analysis · field observation",
    filters: ["policy", "field"],
    provenance: "professional",
    provenanceLabel: "Professional research",
    depth: "full",
    home: "feature",
    role: "Research intern, Pride Place",
    output: "Four-part implementation analysis and a stakeholder deck for police leadership, with a three-state comparison.",
    skills: ["Statutory research", "Institutional analysis", "Field observation", "Stakeholder decks"],
  },
  {
    slug: "rural-service-delivery",
    title: "Why a public service reaches one community and not another",
    problem: "What produces uneven last-mile delivery inside the same district.",
    dek: "Fourteen interviews across six states with SHG members, panchayat representatives and practitioners, asking why district services arrive unevenly.",
    year: "2025",
    where: "Transform Rural India / Village Square",
    category: "Professional research",
    method: "Semi-structured interviews · field and archival synthesis",
    filters: ["field", "policy"],
    provenance: "professional",
    provenanceLabel: "Professional research",
    depth: "full",
    home: "beside",
    role: "Consultant, Transform Rural India",
    output: "Fourteen interviews across six states, synthesised into published analysis for Village Square.",
    skills: ["Semi-structured interviewing", "Field data collection", "Rural livelihoods"],
  },
  {
    slug: "migrant-welfare",
    title: "On the lists, not at the counter",
    problem: "Where a ₹5 crore grant can change migrant welfare outcomes inside 24 months.",
    dek: "How a philanthropic fund might spend ₹5 crore over 24 months so that low-income interstate migrants in Mumbai receive benefits at the frontline.",
    year: "2026",
    where: "Mumbai",
    category: "Independent strategy analysis",
    method: "Diagnostic · options · stage-gate · cost and M&E",
    filters: ["strategy", "programme"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "full",
    role: "Independent analyst",
    output: "12-slide strategy deck, cost and coverage model, weighted decision matrix, 90-day diagnostic and evaluation design.",
    skills: ["Strategy", "Programme design", "Excel modelling", "Evaluation design"],
  },
  {
    slug: "womens-agency",
    title: "Financial inclusion is not the same as agency",
    problem: "Whether financial inclusion is a sufficient proxy for women’s agency.",
    dek: "Between two rounds of the National Family Health Survey, women’s use of their own bank accounts rose 25.6 points. Participation in three household decisions rose 4.7.",
    year: "2026",
    where: "Independent research",
    category: "Independent research",
    method: "NFHS-4 and NFHS-5 · descriptive statistics · OLS",
    filters: ["quantitative", "policy"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "research",
    role: "Independent researcher",
    output: "Research note with Stata do-file and data; op-ed in progress with Prof. Namrata Chindarkar, IIM Ahmedabad.",
    skills: ["Stata", "NFHS", "Scheme monitoring", "Gender"],
  },
  {
    slug: "pension-delivery",
    title: "Pensions at the last mile",
    problem: "Where a listed pensioner still fails to become a paid pensioner.",
    dek: "Two villages, a Block Development Officer’s office, and the ordinary barriers between a listed pensioner and a payment.",
    year: "2023–24",
    where: "Sanchay",
    category: "Professional research",
    method: "Field interviews · administrative observation",
    filters: ["field", "policy"],
    provenance: "professional",
    provenanceLabel: "Professional research",
    depth: "full",
    home: "trio",
    role: "Field intern, Sanchay",
    output: "Barrier analysis across two villages, presented to the organisation and the BDO office.",
    skills: ["Field interviews", "Social protection", "Implementation analysis"],
  },
  {
    slug: "attrition",
    title: "Why workers leave",
    problem: "How to structure attrition in Tier 2 and Tier 3 labour markets without confidential plant data.",
    dek: "A method for looking at attrition in Tier 2 and Tier 3 labour markets. The funnel uses synthetic data. The professional assignment at VIP Industries is described without confidential figures.",
    year: "2025",
    where: "VIP Industries · methodological demonstration",
    category: "Quantitative analysis",
    method: "Funnel · segmentation · synthetic demonstration",
    filters: ["quantitative", "operations", "professional"],
    provenance: "synthetic",
    provenanceLabel: "Synthetic demonstration",
    depth: "full",
    home: "trio",
    role: "HR intern, VIP Industries",
    output: "Attrition structure for frontline roles, plus a reproducible funnel method on synthetic data.",
    skills: ["Excel", "Labour markets", "Segmentation"],
  },
  {
    slug: "mobile-geography",
    title: "A phone the welfare system assumes",
    problem: "Where digital welfare assumes a phone a woman does not actually use.",
    dek: "OTP, e-KYC and portability all presume a woman can be reached on a phone she herself uses. In several Phase-II states, own-use bank accounts are far ahead of own-use phones.",
    year: "2026",
    where: "Independent spatial analysis",
    category: "Technical work",
    method: "State-level mapping · NFHS-5 factsheets",
    filters: ["data", "quantitative", "policy"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "tool",
    role: "Independent analyst",
    output: "Ranked state map of the account-to-phone gap and a note on what it means for OTP-based welfare.",
    skills: ["QGIS-style spatial reasoning", "NFHS", "Digital welfare"],
  },
  {
    slug: "green-apple",
    title: "Building an education business from zero",
    problem: "What it takes to price, staff and retain a service when the fee has to arrive every month.",
    dek: "Five years of a tuition centre in Delhi: curriculum, pricing, parents, and a practice that had to work or the fee stopped. From nothing to about ₹1 lakh a month.",
    year: "2018–23",
    where: "Green Apple Academy, Delhi",
    category: "Operations · entrepreneurship",
    method: "Operating case",
    filters: ["operations"],
    provenance: "professional",
    provenanceLabel: "Professional experience",
    depth: "full",
    home: "wide",
    role: "Founder and educator",
    output: "A tuition centre run for five years to about ₹1 lakh a month, owning curriculum, pricing and retention.",
    skills: ["Operations", "Pricing", "Service design", "Ownership"],
  },
  {
    slug: "paid-work",
    title: "Accounts moved. Paid work did not keep pace.",
    problem: "Whether bank accounts and paid work moved together for Indian women.",
    dek: "A second cut of the same NFHS rounds: women’s paid cash work rose 6.3 points while own-use bank accounts rose 25.6.",
    year: "2026",
    where: "Independent research",
    category: "Quantitative analysis",
    method: "NFHS national time series · ecological cross-section",
    filters: ["quantitative"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "list",
    role: "Independent researcher",
    output: "Companion research note on paid work and accounts, NFHS national time series.",
    skills: ["Stata", "NFHS", "Labour and gender"],
  },
  {
    slug: "programme-costing",
    title: "What ₹5 crore can and cannot buy",
    problem: "What coverage a ₹5 crore grant can buy under conservative, base and upside assumptions.",
    dek: "An auditable cost and coverage model for assisted migrant welfare access: population, enrolment, successful receipt, staffing, and three scenarios.",
    year: "2026",
    where: "Independent technical work",
    category: "Technical work",
    method: "Excel programme model · sensitivity",
    filters: ["data", "strategy", "programme"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "tool",
    role: "Independent analyst",
    output: "Auditable Excel cost and coverage workbook: seven sheets, three scenarios, ±30% sensitivity.",
    skills: ["Excel", "Scenario analysis", "Sensitivity", "Unit costs"],
  },
  {
    slug: "mgnrega-sessions",
    title: "Welfare information at the SHG",
    problem: "How entitlement information reaches women who have to claim MGNREGA and related benefits.",
    dek: "Entitlement sessions with self-help group women on MGNREGA and related benefits, sitting beside the pension fieldwork.",
    year: "2023–24",
    where: "Sanchay",
    category: "Programme design",
    method: "Facilitation · beneficiary-facing work",
    filters: ["programme", "field"],
    provenance: "professional",
    provenanceLabel: "Professional experience",
    depth: "note",
    home: "list",
    role: "Field intern, Sanchay",
    output: "Entitlement sessions for SHG women; eye-care camps reaching 250+ residents with the MP's office and Axis Bank.",
    skills: ["Community facilitation", "MGNREGA", "Social protection"],
  },
  {
    slug: "leap",
    title: "Documenting a rural livelihoods programme",
    problem: "How to write a programme so that problem, population, delivery and monitoring sit in one place.",
    dek: "Support to the team writing up TRI’s LEAP programme design: problem, population, delivery, and what still has to be filled in from internal documents.",
    year: "2025",
    where: "Transform Rural India",
    category: "Programme design",
    method: "Programme documentation",
    filters: ["programme"],
    provenance: "professional",
    provenanceLabel: "Professional experience",
    depth: "note",
    home: "list",
    role: "Consultant, Transform Rural India",
    output: "Programme design documentation: problem, population, delivery, monitoring.",
    skills: ["Programme design", "Theory of change", "Documentation"],
  },
  {
    slug: "aiesec",
    title: "Partnerships that grow a pipeline",
    problem: "How segmented relationships grew an applicant pipeline by 30 percent.",
    dek: "Ten companies, five NGOs, three academic institutions, and a 30 percent rise in the applicant pipeline.",
    year: "2022–23",
    where: "AIESEC in Delhi IIT",
    category: "Operations",
    method: "Partnership management",
    filters: ["operations"],
    provenance: "professional",
    provenanceLabel: "Professional experience",
    depth: "note",
    home: "trio",
    role: "Corporate partnerships and international relations",
    output: "Eighteen partnerships held across companies, NGOs and campuses; applicant pipeline up 30 percent.",
    skills: ["Stakeholder management", "Pipeline", "Partnerships"],
  },
  {
    slug: "welfare-data-workflow",
    title: "From a public table to a usable file",
    problem: "How published factsheet totals become a file someone else can check.",
    dek: "A Python and SQL workflow: reading published NFHS factsheet totals, checking them, joining them, and producing a policy-ready extract.",
    year: "2026",
    where: "Independent technical work",
    category: "Technical work",
    method: "Python · SQL · reproducible extract",
    filters: ["data"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "note",
    home: "tool",
    role: "Independent",
    output: "Python and SQL workflow that reads, checks and joins published NFHS totals into a policy-ready extract.",
    skills: ["Python", "SQL", "Data cleaning"],
  },
  {
    slug: "evaluation-design",
    title: "How would we know assisted access worked?",
    problem: "How to tell whether naka help desks increased benefit receipt.",
    dek: "An evaluation design for naka-based help desks in three Mumbai wards. The design follows the diagnostic. A randomised trial is a later instrument if a partner can actually randomise.",
    year: "2026",
    where: "Independent analysis",
    category: "Strategy · evaluation",
    method: "Theory of change · identification · measurement",
    filters: ["strategy", "quantitative"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "list",
    role: "Independent analyst",
    output: "Difference-in-differences design with a matched comparison ward and a process evaluation.",
    skills: ["Impact evaluation", "Identification", "M&E"],
  },
  {
    slug: "claiming-benefits",
    title: "Why eligible people do not claim",
    problem: "Where eligible people drop out between awareness and receipt.",
    dek: "A behavioural and administrative account of the journey from awareness to receipt, keeping hypotheses distinct from what the published evidence already shows.",
    year: "2026",
    where: "Independent analysis",
    category: "Independent research",
    method: "Administrative burden · behavioural framework",
    filters: ["policy", "field"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "full",
    home: "list",
    role: "Independent analyst",
    output: "Six-stage framework from awareness to receipt, with hypotheses kept separate from published evidence.",
    skills: ["Psychology", "Administrative burden", "Welfare access"],
  },
  {
    slug: "evidence-matrix",
    title: "A small tool for keeping sources honest",
    problem: "How to keep a finding tied to its source, method and confidence.",
    dek: "A working evidence matrix: question, source, method, finding, confidence, implication.",
    year: "2026",
    where: "Independent technical work",
    category: "Technical work",
    method: "Research tool · AI-assisted build, documented",
    filters: ["data"],
    provenance: "independent",
    provenanceLabel: "Independent analysis",
    depth: "tool",
    home: "tool",
    role: "Independent",
    output: "A working evidence matrix with CSV export, seeded from sources cited on this site.",
    skills: ["Research workflow", "AI-assisted research", "Product thinking"],
  },
  {
    slug: "rural-colloquy",
    title: "Holding the floor at a rural convening",
    problem: "How to hold a day of rural practice so that a question from the floor still lands.",
    dek: "Emcee for Day 2 of the India Rural Colloquy 2025, Delhi chapter, and recorded conversations for TRI’s Rural Renaissance series.",
    year: "2025",
    where: "Transform Rural India",
    category: "Speaking",
    method: "Moderation · on-camera conversation",
    filters: [],
    provenance: "professional",
    provenanceLabel: "Professional communication",
    depth: "note",
    home: false,
    role: "Emcee, Transform Rural India",
    output: "Day 2 moderation at the India Rural Colloquy 2025; recorded conversations for the Rural Renaissance series.",
    skills: ["Moderation", "Public conversation"],
  },
];

export const writing = [
  {
    title: "From ruins to revival: can Chettinad mansions anchor rural futures?",
    publication: "Village Square",
    date: "June 2025",
    group: "policy" as const,
    dek: "The houses employed carpenters, masons, tile-makers. They funded temples, tanks, schools. Whether they can be saved is a question about a rural economy, not only about heritage.",
    href: "https://villagesquare.in/from-ruins-to-revival-can-chettinad-mansions-anchor-rural-futures/",
  },
  {
    title: "People’s movements to save the forests: a timeline",
    publication: "Village Square",
    date: "April 2025",
    group: "policy" as const,
    dek: "A stay on 400 acres in Hyderabad sits inside a longer Indian argument about who a forest is for.",
    href: "https://villagesquare.in/peoples-movements-to-save-the-forests-a-timeline/",
  },
  {
    title: "Rural India’s cricket fantasies come alive virtually",
    publication: "Village Square",
    date: "May 2025",
    group: "other" as const,
    dek: "Chai shops as war rooms, and a one-rupee contest that can also take a week’s money. Reported from a position of not being a cricket person.",
    href: "https://villagesquare.in/dream11-rural-indias-cricket-fantasies-come-alive-virtually/",
  },
  {
    title: "Why measures of women’s agency are absent from Indian scheme monitoring",
    publication: "Op-ed in progress, with Prof. Namrata Chindarkar, IIM Ahmedabad",
    date: "2026",
    group: "policy" as const,
    dek: "The NFHS analysis on this site is the empirical companion to that argument.",
    href: "/work/womens-agency",
    internal: true,
  },
];

export const education = [
  {
    deg: "MA Public Policy and Law",
    school: "Tata Institute of Social Sciences, Mumbai",
    dates: "2025 – 2027",
    note: "CGPA 7.6/10 to date. Econometrics, impact evaluation, development data analysis, regulatory governance.",
  },
  {
    deg: "BBA",
    school: "Maharaja Agrasen Institute of Management, Delhi",
    dates: "2024",
    note: "GPA 8.0/10.",
  },
  {
    deg: "BA Psychology",
    school: "IGNOU, Delhi",
    dates: "2024",
    note: "",
  },
];

export const timeline = [
  { dates: "2018 – 2023", title: "Green Apple Academy", where: "Operating a neighbourhood service under cash and capacity constraints" },
  { dates: "2022 – 2023", title: "AIESEC in Delhi IIT", where: "Partnerships and pipeline" },
  { dates: "2023 – 2024", title: "Sanchay", where: "Pensions and welfare access in two villages" },
  { dates: "2025", title: "VIP Industries", where: "Attrition in Tier 2 and Tier 3 labour markets" },
  { dates: "2025 – present", title: "Transform Rural India / Village Square", where: "Multi-state field research and published analysis" },
  { dates: "2025 – 2027", title: "TISS Mumbai", where: "MA Public Policy and Law" },
  { dates: "2026", title: "Telangana State Police, Pride Place", where: "Implementation of a rights statute inside a police cell" },
];

export function item(slug: string) {
  const found = work.find((w) => w.slug === slug);
  if (!found) throw new Error(`Unknown work: ${slug}`);
  return found;
}

export function homeItems(slot: Exclude<HomeSlot, false>) {
  return work.filter((w) => w.home === slot);
}

export const evidence = [
  { figure: "14", label: "interviews across six states on last-mile delivery", href: "/work/rural-service-delivery" },
  { figure: "+25.6 / +4.7 pp", label: "own-use accounts versus three household decisions, NFHS-4 to NFHS-5", href: "/work/womens-agency" },
  { figure: "4-part", label: "implementation analysis for Telangana Police", href: "/work/transgender-rights" },
  { figure: "₹5 crore", label: "independent strategy: where a 24-month grant could change migrant receipt", href: "/work/migrant-welfare" },
  { figure: "₹1 lakh", label: "monthly revenue reached by Green Apple Academy", href: "/work/green-apple" },
  { figure: "10 · 5 · 3", label: "corporate, NGO and academic partnerships at AIESEC", href: "/work/aiesec" },
];

export const territories = [
  {
    label: "Delivery",
    text: "Why benefits, rights and public services fail between eligibility and receipt.",
  },
  {
    label: "Institutions",
    text: "How incentives, rules and frontline behaviour shape what a policy becomes in an ordinary office.",
  },
  {
    label: "Evidence",
    text: "How to distinguish what sounds plausible from what the data actually supports.",
  },
  {
    label: "Strategy",
    text: "Where limited resources can change an outcome inside a fixed window.",
  },
];

export const steps = [
  {
    label: "Decision",
    text: "Clarify what actually has to be decided before choosing a method.",
  },
  {
    label: "System",
    text: "Map actors, incentives, rules, and the person moving through them.",
  },
  {
    label: "Evidence",
    text: "Interviews, administrative data, surveys, statutes, secondary research.",
  },
  {
    label: "Constraint",
    text: "Separate symptoms from the mechanism producing them.",
  },
  {
    label: "Options",
    text: "Make trade-offs explicit: feasibility, cost, scale, institutional dependence.",
  },
  {
    label: "Recommendation",
    text: "Useful only if an organisation can act on it, and only if it can survive implementation.",
  },
];

export const capabilities = [
  {
    label: "Research",
    items: [
      { href: "/work/transgender-rights", title: "Telangana Police" },
      { href: "/work/rural-service-delivery", title: "TRI interviews" },
      { href: "/work/pension-delivery", title: "Sanchay pensions" },
    ],
  },
  {
    label: "Analysis",
    items: [
      { href: "/work/womens-agency", title: "Women’s agency" },
      { href: "/work/paid-work", title: "Paid work and accounts" },
      { href: "/work/attrition", title: "Attrition" },
    ],
  },
  {
    label: "Strategy",
    items: [
      { href: "/work/migrant-welfare", title: "Migrant welfare" },
      { href: "/work/programme-costing", title: "Cost and coverage" },
      { href: "/work/evaluation-design", title: "Evaluation design" },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "/work/green-apple", title: "Green Apple Academy" },
      { href: "/work/aiesec", title: "AIESEC partnerships" },
    ],
  },
  {
    label: "Data",
    items: [
      { href: "/work/womens-agency", title: "Stata / NFHS" },
      { href: "/work/programme-costing", title: "Excel model" },
      { href: "/work/mobile-geography", title: "Spatial reading" },
      { href: "/work/welfare-data-workflow", title: "Python and SQL" },
    ],
  },
  {
    label: "Communication",
    items: [
      { href: "/writing", title: "Village Square" },
      { href: "/speaking", title: "India Rural Colloquy" },
      { href: "/work/rural-colloquy", title: "Rural Renaissance" },
    ],
  },
];

export { interview } from "./interview";
