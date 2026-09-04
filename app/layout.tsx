import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "./data";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Suhani Bhatia",
    template: "%s · Suhani Bhatia",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "profile",
  },
  authors: [{ name: site.name, url: site.url }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
