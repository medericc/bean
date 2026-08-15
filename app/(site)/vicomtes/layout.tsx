import type { Metadata } from "next"

export const metadata = {
  title: "Les Vicomtes de Béarn",
  description:
    "Découvrez les vicomtes de Béarn, de Centulle IV à Catherine de Bourbon : grandes lignées, périodes de règne, alliances et histoire de la souveraineté béarnaise.",
  openGraph: {
    title: "Les Vicomtes de Béarn",
    description:
      "Retrouvez les principaux vicomtes et souverains du Béarn, de la dynastie des Centulle aux Foix-Béarn et aux souverains de Navarre.",
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
