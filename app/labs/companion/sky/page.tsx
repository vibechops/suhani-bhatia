import type { Metadata, Viewport } from "next";
import { CompanionApp } from "./CompanionApp";

export const metadata: Metadata = {
  title: "Assistant · sunset",
  description: "Saved sunset-glass version.",
  applicationName: "Assistant",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
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
  themeColor: "#c45a6a",
};

export default function CompanionSkyPage() {
  return <CompanionApp />;
}
