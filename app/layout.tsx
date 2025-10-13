import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
})

export const metadata: Metadata = {
  title: "Mémoire du Béarn – Histoire, Lignées et Vicomtés",
  description:
    "Explorez l’histoire du Béarn de l’Antiquité à Henri IV. Découvrez les grandes lignées vicomtales – Centulle, Gabarret, Moncade, Foix et Navarre – et plongez dans le patrimoine culturel béarnais.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Mémoire du Béarn",
    description:
      "Découvrez l’histoire, les lignées et le patrimoine du Béarn à travers les siècles.",
  },
  metadataBase: new URL("https://memoiredubearn.fr"),
  themeColor: "#e2d3b7",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${crimsonText.variable}`}>
      <body className="antialiased bg-background text-foreground font-[var(--font-inter)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
