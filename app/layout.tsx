import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scaffold - Structure for what you're building",
  description: "Turn your startup idea into a week-by-week roadmap. Built for college students who want to launch, not just plan.",
  keywords: ["startup roadmap", "college entrepreneurs", "student founders", "startup planning", "MVP development"],
  authors: [{ name: "Scaffold" }],
  openGraph: {
    title: "Scaffold - Structure for what you're building",
    description: "Turn your startup idea into a week-by-week roadmap. Built for college students who want to launch, not just plan.",
    type: "website",
    locale: "en_US",
    siteName: "Scaffold",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaffold - Structure for what you're building",
    description: "Turn your startup idea into a week-by-week roadmap.",
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
