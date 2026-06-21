import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE = "https://khansumber.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Khansumber Altankhuyag — Builder, Full-Stack Developer & Founder",
  description:
    "I build things end-to-end — from Gridwave, a German language-learning platform, to algorithmic futures trading systems. Full-stack developer and founder based in San Francisco.",
  keywords: [
    "Khansumber Altankhuyag",
    "full-stack developer",
    "React developer",
    "Python developer",
    "Gridwave",
    "algorithmic trading",
    "San Francisco developer",
    "freelance web developer",
  ],
  authors: [{ name: "Khansumber Altankhuyag" }],
  openGraph: {
    title: "Khansumber Altankhuyag — Builder & Full-Stack Developer",
    description:
      "From a German language-learning platform to algorithmic trading systems — I build things end-to-end.",
    url: SITE,
    siteName: "Khansumber Altankhuyag",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khansumber Altankhuyag — Builder & Full-Stack Developer",
    description:
      "From a German language-learning platform to algorithmic trading systems — I build things end-to-end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
