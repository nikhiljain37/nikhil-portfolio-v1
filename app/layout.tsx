import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil — Full Stack Developer",
  description:
    "Full Stack Developer focused on building modern, responsive websites with React, Next.js, and TypeScript. Passionate about clean design and seamless user experiences.",
  
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "Full Stack",
    "react",
    "next.js",
    "typescript",
    "developer portfolio",
    "web developer",
    "Full Stack developer",
    "nikhil",
    "software engineer",
    "creative developer",
    "UI/UX",
  ],
  openGraph: {
    title: "Nikhil — Full Stack Developer",
    description:
      "Creative Full Stack Developer crafting high-quality web applications using React, Next.js, and modern technologies. Let’s create something impactful.",
    url: "https://your-portfolio-url.com", // update this
    siteName: "Nikhil Portfolio",
    images: [
      {
        url: "/icon.png", 
        width: 1200,
        height: 630,
        alt: "Nikhil — Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil — Full Stack Developer",
    description:
      "Building beautiful and performant web experiences with React and Next.js.",
    creator: "@your_twitter_handle", // update this
    images: ["/icon.png"], // replace with your OG image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
