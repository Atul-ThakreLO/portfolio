import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Atul Thakre",
  title: "Atul Thakre - Full Stack & Web3 Developer",
  description:
    "Full Stack & Web3 Developer building scalable applications, smart contracts, and modern user experiences. Specializing in Ethereum, Solidity, Next.js, and blockchain development.",
  url: "https://portfolio-one-mu-22.vercel.app", 
  ogImage: "https://portfolio-one-mu-22.vercel.app/og-image.png", 
  links: {
    twitter: "https://x.com/AtulThakre_Lg",
    github: "https://github.com/Atul-ThakreLO",
    linkedin: "https://www.linkedin.com/in/atul-thakre-logers",
  },
  keywords: [
    "Full Stack Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "Smart Contracts",
    "Solidity",
    "Ethereum",
    "Next.js",
    "React",
    "TypeScript",
    "GSAP",
    "Portfolio",
    "Atul Thakre",
    "DApp Development",
    "Decentralized Applications",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@AtulThakre_Lg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
