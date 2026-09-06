import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Header } from "./components/Chrome";
import "./globals.css";
import { site } from "./lib/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Suhani Bhatia · Policy analyst",
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
    <html lang="en" className={`${sans.variable} ${serif.variable}`} data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
