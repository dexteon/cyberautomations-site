import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberAutomations — We Run Your Content Department",
  description:
    "One voice memo Monday morning. Twenty pieces of publication-ready content by afternoon. Managed AI infrastructure for creators and educators doing $5K–$50K/month.",
  openGraph: {
    title: "CyberAutomations — We Run Your Content Department",
    description:
      "One voice memo. 20 pieces of content. Every week. Built on the same infrastructure principles used in Fortune 500 security operations.",
    url: "https://cyberautomations.com",
    siteName: "CyberAutomations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberAutomations — We Run Your Content Department",
    description:
      "One voice memo. 20 pieces of content. Every week.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ca-navy text-ca-white antialiased">
        {children}
      </body>
    </html>
  );
}
