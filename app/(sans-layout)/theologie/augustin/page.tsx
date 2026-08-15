import type { Metadata } from 'next'
import AugustinClient from './AugustinClient'


export const metadata: Metadata = {
  title: "Saint Augustin et la prière : enseignements et vie spirituelle",
  description:
    "Découvrez les enseignements de saint Augustin sur la prière, le désir de Dieu, la vie éternelle, la volonté divine, l'amitié et le vrai bonheur.",
  openGraph: {
    title: "Saint Augustin et la prière : enseignements et vie spirituelle",
    description:
      "Explorez la pensée de saint Augustin sur la prière, le désir de Dieu et la recherche du vrai bonheur.",
    type: 'article',
  },
}

export default function Page() {
  return <AugustinClient />
}