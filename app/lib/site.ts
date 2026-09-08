export const site = {
  name: "Suhani Bhatia",
  url: "https://suhanibhatia.com",
  role: "Policy analyst",
  tagline: "Public policy · research · strategy",
  description:
    "Policy analyst. I find where public programmes fail the people they are meant to reach, and recommend what can be done under real constraints.",
  email: "suhani3537@gmail.com",
  linkedin: "https://www.linkedin.com/in/suhani-bhatia-870a19215",
  villageSquare: "https://villagesquare.in/author/suhani-bhatia/",
  resume: "/suhani-bhatia-resume.pdf",
  dalbergPdf: "/suhani-bhatia-dalberg-assignment.pdf",
  city: "Mumbai, India",
  cohort: "MA Public Policy and Law, TISS (2027)",
  relocate: "Open to relocation across India",
  interest:
    "Open to strategy, public-sector advisory, policy research and implementation work.",
};

export const nav: { href: string; label: string; external?: boolean }[] = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "Resume" },
];

export const clients = [
  { name: "Telangana State Police", logo: "/logos/telangana-police.png", kind: "mark" as const },
  { name: "Transform Rural India", logo: "/logos/tri.png", kind: "word" as const },
  { name: "Village Square", logo: "/logos/village-square-mark.png", kind: "mark" as const },
  { name: "VIP Industries", logo: "/logos/vip.png", kind: "word" as const },
  { name: "Sanchay", logo: "/logos/sanchay.svg", kind: "mark" as const },
  { name: "AIESEC", logo: "/logos/aiesec.jpg", kind: "mark" as const },
];
