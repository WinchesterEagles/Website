import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "components/header";
import Footer from "components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.winchestervolleyball.co.uk"),
  title: "Winchester Eagles Volleyball Club",
  description:
    "Welcome to Winchester Eagles Volleyball club We are a fun and friendly volleyball club located in Winchester. We welcome players of all abilities from beginners to pros.",

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-64x64.png", sizes: "64x64" },
      { url: "/favicon-192x192.png", sizes: "192x192" },
      { url: "/favicon-512x512.png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon-180x180.png",
  },

  // Open Graph (social previews)
  openGraph: {
    title: "Winchester Eagles Volleyball Club",
    description:
      "Winchester Eagles Volleyball Club - Winchester's home for volleyball. Open to players of all levels. our teams proudly compete in Hampshire's volleyball leagues..",
    url: "https://www.winchestervolleyball.co.uk",
    siteName: "Winchester Eagles Volleyball Club",
    images: ["/og-image.png"], // large social preview image
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Winchester Volleyball Club",
              url: "https://winchestervolleyball.co.uk",
              mainEntity: [
                {
                  "@type": "WebPage",
                  name: "Adults",
                  url: "https://winchestervolleyball.co.uk/adults",
                },
                {
                  "@type": "WebPage",
                  name: "Juniors",
                  url: "https://winchestervolleyball.co.uk/juniors",
                },
                {
                  "@type": "WebPage",
                  name: "Teams",
                  url: "https://winchestervolleyball.co.uk/teams",
                },
                {
                  "@type": "WebPage",
                  name: "Contact",
                  url: "https://winchestervolleyball.co.uk/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex flex-col items-center flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
