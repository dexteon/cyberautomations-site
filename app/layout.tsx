import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CyberAutomations — We Run Your Content Department",
  description:
    "One 5-minute voice memo. Twenty publication-ready pieces by afternoon. AI systems built, deployed, and managed for creators and educators doing serious volume.",
  openGraph: {
    title: "CyberAutomations — We Run Your Content Department",
    description:
      "One voice memo. Twenty pieces. Built, deployed, and managed for you.",
    url: "https://cyberautomations.com",
    siteName: "CyberAutomations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberAutomations — We Run Your Content Department",
    description:
      "AI systems built and managed for creators who are serious about growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-ca-cream text-ca-text antialiased font-sans">
        {children}
      </body>
      <GoogleAnalytics gaId="G-B05MJW13C2" />
    </html>
  );
}
