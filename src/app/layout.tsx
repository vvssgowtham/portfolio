import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Gowtham Korupolu | Product Development Engineer",
  description:
    "Portfolio of V V S S Gowtham Korupolu - Product Development Engineer specializing in Backend Systems, React, and Automation.",
  keywords: [
    "Product Development Engineer",
    "Backend Developer",
    "React Developer",
    "Gowtham Korupolu",
    "Next.js Portfolio",
  ],
  openGraph: {
    title: "Gowtham Korupolu | Product Development Engineer",
    description:
      "Building scalable digital infrastructures and fluid frontends.",
    url: "https://vvssgowtham.dev",
    siteName: "Gowtham Korupolu",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased font-sans selection:bg-gum-pink selection:text-gum-black`}
      >
        {children}
      </body>
    </html>
  );
}
