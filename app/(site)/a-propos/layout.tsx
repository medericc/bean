import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos de Histoire du Béarn",
  description:
    "Découvrez le projet Histoire du Béarn, ses sources historiques, sa méthodologie de recherche et les ouvrages consacrés à l'histoire du Béarn.",
  openGraph: {
    title: "À propos de Histoire du Béarn",
    description:
      "Sources, méthode de recherche et références utilisées pour construire Histoire du Béarn.",
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
