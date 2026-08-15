import type { Metadata } from 'next'
import ThereseClient from './ThereseClient'

export const metadata: Metadata = {
  title: "Les Sept Demeures de Sainte Thérèse d'Avila",
  description:
    "Découvrez les Sept Demeures du Château intérieur de Sainte Thérèse d'Avila et les différentes étapes de la vie spirituelle, de la conversion jusqu'à l'union à Dieu.",
  openGraph: {
    title: "Les Sept Demeures de Sainte Thérèse d'Avila",
    description:
      "Découvrez les Sept Demeures du Château intérieur et le chemin spirituel décrit par Sainte Thérèse d'Avila.",
    type: 'article',
  },
}

export default function Page() {
  return <ThereseClient />
}