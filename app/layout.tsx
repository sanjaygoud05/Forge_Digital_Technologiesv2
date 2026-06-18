import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import BottomBanner from "@/components/BottomBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Forge Digital Technologies | Modern Digital Solutions",
    template: "%s | Forge Digital Technologies",
  },
  description: "Elite digital agency specializing in premium website development, mobile apps, and UI/UX design. Based in Hyderabad, serving global clients.",
  keywords: ["Web Development", "Mobile Apps", "UI/UX Design", "Hyderabad Tech", "Digital Agency", "Software Engineering"],
  authors: [{ name: "Forge Digital Technologies" }],
  creator: "Forge Digital Technologies",
  publisher: "Forge Digital Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://forgedigitaltechnologies.com"),
  openGraph: {
    title: "Forge Digital Technologies | Modern Digital Solutions",
    description: "Building the ecosystem for tomorrow's leaders through elite digital products and design.",
    url: "https://forgedigitaltechnologies.com",
    siteName: "Forge Digital Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Digital Technologies | Modern Digital Solutions",
    description: "Elite digital agency for websites, mobile apps, and high-end design.",
    creator: "@forgedigital",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
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
        <StructuredData />
        {children}
        <ChatBot />
        <CookieConsent />
        <BottomBanner />
      </body>
    </html>
  );
}
