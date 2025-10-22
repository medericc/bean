import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Mémoire du Béarn – Histoire, Lignées et Vicomtés",
  description:
    "Explorez l’histoire du Béarn de l’Antiquité à Henri IV. Découvrez les grandes lignées vicomtales – Centulle, Gabarret, Moncade, Foix et Navarre – et plongez dans le patrimoine culturel béarnais.",
  manifest: "/manifest.json",
  keywords: [
    "Béarn",
    "Histoire du Béarn",
    "Vicomté du Béarn",
    "Henri IV",
    "Centulle",
    "Moncade",
    "Foix",
    "Navarre",
    "Patrimoine",
    "Culture béarnaise",
  ],
  authors: [{ name: "Mémoire du Béarn" }],
  creator: "Mémoire du Béarn",
  publisher: "Mémoire du Béarn",
  openGraph: {
    title: "Mémoire du Béarn – Histoire, Lignées et Vicomtés",
    description:
      "Plongez au cœur de l’histoire du Béarn, des origines antiques aux rois de Navarre. Un site dédié aux vicomtés, lignées et héritages du Béarn.",
    url: "https://memoiredubearn.fr",
    siteName: "Mémoire du Béarn",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mémoire du Béarn – Histoire et lignées",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mémoire du Béarn",
    description:
      "Découvrez l’histoire, les lignées et le patrimoine du Béarn à travers les siècles.",
    images: ["/og-image.jpg"],
  },
icons: {
  icon: [
    { url: "/favicon.ico", type: "image/x-icon" },
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
  ],
  apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
},

  other: {
    "apple-mobile-web-app-title": "Béarn",
  },
  metadataBase: new URL("https://memoiredubearn.fr"),
  themeColor: "#e2d3b7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${crimsonText.variable}`}>
           <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Béarn" />
        <meta name="theme-color" content="#e2d3b7" />
      </Head>
      <body className="antialiased bg-background text-foreground font-[var(--font-inter)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
