import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import CookieManager from "@/components/CookieManager";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
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
  title: {
  default: "Histoire du Béarn – Culture et politique béarnaise",
  template: "%s | Histoire du Béarn",
},
  description:
    "L'histoire du Béarn à travers Fébus, Jeanne d'Albret ou Gaston le Croisé : comprenez le contexte politique actuel. L'union avec la Navarre, la Religion, la Révolution et les grandes transformations.",
 
 
    manifest: "/manifest.json",

  authors: [{ name: "Histoire du Béarn" }],
  creator: "Histoire du Béarn",
  publisher: "Histoire du Béarn",

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },

  openGraph: {
    title: "Histoire du Béarn – Culture et politique béarnaise",
    description:
      "Plongez au cœur de l’histoire du Béarn, des origines antiques à aujourd'hui. Un site dédié aux vicomtes, lignées et héritages du Béarn.",
    url: "https://www.histoirebearn.fr/",
    siteName: "Histoire du Béarn",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Histoire du Béarn – Histoire et lignées",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Histoire du Béarn",
    description:
      "L'histoire du Béarn à travers Fébus, Jeanne d'Albret ou Gaston le Croisé : comprenez le contexte politique actuel. L'union avec la Navarre, la Religion, la Révolution et les grandes transformations.",
    images: ["/og-image.jpg"],
  },

  other: {
    "apple-mobile-web-app-title": "Béarn",
  },

  metadataBase: new URL("https://www.histoirebearn.fr/"),
  themeColor: "#e2d3b7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Histoire du Béarn",
    "url": "https://www.histoirebearn.fr/",
    "publisher": {
      "@type": "Organization",
      "name": "Histoire du Béarn"
    }
  };

  return (
    <html lang="fr" className={`${inter.variable} ${crimsonText.variable}`}>
    
    <head> <meta name="google-site-verification" content="bkMPmGoEuaRWDYIDy5nqOSICbq_a87ndZAmFouUItWQ" /></head>
    
    
      <body className="antialiased bg-background text-foreground font-[var(--font-inter)]">
        {/* JSON-LD Schema.org */}
       
   <CookieManager />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
       
        <Analytics />
      </body>
    </html>
  );
}
