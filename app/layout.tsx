import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scaffold - Build GitHub Apps in Minutes",
  description: "The fastest way to build, test, and deploy GitHub Apps. Transform your development workflow with powerful automation tools.",
  keywords: ["GitHub Apps", "automation", "development tools", "CI/CD", "GitHub integration"],
  authors: [{ name: "Scaffold" }],
  openGraph: {
    title: "Scaffold - Build GitHub Apps in Minutes",
    description: "The fastest way to build, test, and deploy GitHub Apps. Transform your development workflow with powerful automation tools.",
    type: "website",
    locale: "en_US",
    siteName: "Scaffold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaffold - Build GitHub Apps in Minutes",
    description: "The fastest way to build, test, and deploy GitHub Apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
