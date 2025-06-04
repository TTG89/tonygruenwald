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
  title: "Tony Gruenwald's Portfolio",
  description:
    "Full-Stack Developer & UI/UX Designer specializing in React, Node.js, and modern web technologies. View my selected work and get in touch for your next project.",
  keywords: [
    "Software Engineer",
    "Tailwind",
    "React Developer",
    "Next.js",
    "Web Development",
    "",
  ],
  openGraph: {
    title: "Tony Gruenwald - Full-Stack Developer & UI/UX Designer",
    description:
      "Full-Stack Developer & UI/UX Designer specializing in React, Node.js, and modern web technologies. View my selected work and get in touch for your next project.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Gruenwald - Full-Stack Developer & UI/UX Designer",
    description:
      "Full-Stack Developer & UI/UX Designer specializing in React, Node.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}
