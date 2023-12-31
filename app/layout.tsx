import type { Viewport, Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlausibleProvider from "next-plausible";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  themeColor: "#FACC15",
  colorScheme: "light",
};

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  category: "education",
  metadataBase: new URL("https://uneebee.com"),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased">
      <head>
        <PlausibleProvider domain="uneebee.com" />
      </head>

      <body className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
