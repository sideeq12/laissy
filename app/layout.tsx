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

export const metadata: Metadata = {
  metadataBase: new URL("https://lovissaconsulting.co.uk"),
  title: "Lovissa Consulting | Safe, Rule-Based CRM Automation for Professional Firms",
  description: "Lovissa Consulting is a UK-based consulting firm specialising in compliant client operations and automation. We design systems that reduce admin workload while maintaining regulatory integrity and human oversight.",
  keywords: ["CRM Automation", "Professional Services Automation", "Legal Tech", "Finance Automation", "Compliance-First Design", "Lovissa Consulting", "UK Automation Consulting"],
  authors: [{ name: "Lovissa Consulting" }],
  openGraph: {
    title: "Lovissa Consulting | Safe CRM Automation",
    description: "Lovissa Consulting is a UK-based consulting firm specialising in compliant client operations and automation. We design systems that reduce admin workload while maintaining regulatory integrity and human oversight.",
    url: "https://lovissaconsulting.co.uk",
    siteName: "Lovissa Consulting",
    images: [
      {
        url: "/logopng.png",
        width: 800,
        height: 600,
        alt: "Lovissa Consulting Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovissa Consulting | Professional CRM Automation",
    description: "Lovissa Consulting is a UK-based consulting firm specialising in compliant client operations and automation. We design systems that reduce admin workload while maintaining regulatory integrity and human oversight.",
    images: ["/logopng.png"],
  },
  icons: {
    icon: [
      { url: "/faviiii.png", sizes: "32x32", type: "image/png" },
      { url: "/faviiii.png", sizes: "16x16", type: "image/png" },
      { url: "/faviiii.png" },
    ],
    shortcut: "/faviiii.png",
    apple: "/faviiii.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
