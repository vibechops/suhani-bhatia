import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePages } from "../_pages";
import { work } from "../../lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return { title: "Work" };
  return { title: item.title, description: item.dek };
}

export default async function WorkCase({ params }: Props) {
  const { slug } = await params;
  const Page = CasePages[slug];
  if (!Page) notFound();
  return <Page />;
}
