import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RocketNative — Launch React Native Apps Faster",
  description:
    "RocketNative is a preconfigured boilerplate for React Native apps with Firebase, RevenueCat, and OneSignal ready to use. Launch your app in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:title" content="RocketNative — Launch React Native Apps Faster" />
      <meta
        property="og:description"
        content="Save time and focus on building your app. RocketNative is a boilerplate for React Native apps with Firebase, RevenueCat, and OneSignal preconfigured."
      />
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta property="og:site_name" content="RocketNative" />
      <meta property="og:url" content="https://rocketnative.io/" />
      <meta name="twitter:title" content="RocketNative — Launch React Native Apps Faster" />
      <meta
        name="twitter:description"
        content="Preconfigured boilerplate for React Native apps with Firebase, RevenueCat, and OneSignal ready to go."
      />
      <meta name="twitter:image" content="/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}