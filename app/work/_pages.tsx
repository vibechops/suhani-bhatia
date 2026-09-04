import type { JSX } from "react";
import { EvidencePage, AgencyPage, CostingPage, MigrantPage, MobileGeoPage, PaidWorkPage } from "./_independent";
import { AiesecPage, AttritionPage, ClaimingPage, ColloquyPage, EvalPage, LeapPage, MgnregaPage, WorkflowPage } from "./_other";
import { GreenApplePage, PensionPage, RuralPage, TransgenderPage } from "./_professional";

export const CasePages: Record<string, () => JSX.Element> = {
  "transgender-rights": TransgenderPage,
  "rural-service-delivery": RuralPage,
  "pension-delivery": PensionPage,
  "green-apple": GreenApplePage,
  "womens-agency": AgencyPage,
  "migrant-welfare": MigrantPage,
  "paid-work": PaidWorkPage,
  "programme-costing": CostingPage,
  "mobile-geography": MobileGeoPage,
  "evidence-matrix": EvidencePage,
  "mgnrega-sessions": MgnregaPage,
  leap: LeapPage,
  aiesec: AiesecPage,
  attrition: AttritionPage,
  "welfare-data-workflow": WorkflowPage,
  "evaluation-design": EvalPage,
  "claiming-benefits": ClaimingPage,
  "rural-colloquy": ColloquyPage,
};
