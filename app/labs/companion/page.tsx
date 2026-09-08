import type { Metadata, Viewport } from "next";
import { CompanionApp } from "./CompanionApp";

export const metadata: Metadata = {
  title: "Assistant",
  description: "Voice to list. Speak when it's done.",
  applicationName: "Assistant",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Assistant",
  },
  icons: {
    apple: "/labs/companion/apple-icon",
  },
  manifest: "/labs/companion/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e58ab0",
};

export default function CompanionPage() {
  return <CompanionApp />;
}
