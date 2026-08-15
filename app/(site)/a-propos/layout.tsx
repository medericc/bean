import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos de Mémoire du Béarn",
  description:
    "Découvrez le projet Mémoire du Béarn, ses sources historiques, sa méthodologie de recherche et les ouvrages consacrés à l'histoire du Béarn.",
  openGraph: {
    title: "À propos de Mémoire du Béarn",
    description:
      "Sources, méthode de recherche et références utilisées pour construire Mémoire du Béarn.",
    type: "website",
  },
};

export default function VicomtesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
