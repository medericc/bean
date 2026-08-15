import type { Metadata } from 'next'
import ThomasClient from './ThomasClient'

export const metadata: Metadata = {
  title: "Saint Thomas d'Aquin : résumé de la Somme théologique",
  description:
    "Découvrez les grandes idées de saint Thomas d'Aquin à travers la Somme théologique : foi, raison, vertus, morale, passions, loi et vie chrétienne.",
  openGraph: {
    title: "Saint Thomas d'Aquin : résumé de la Somme théologique",
    description:
      "Une synthèse des grandes idées philosophiques et théologiques de saint Thomas d'Aquin.",
    type: 'article',
  },
}

export default function Page() {
  return <ThomasClient />
}