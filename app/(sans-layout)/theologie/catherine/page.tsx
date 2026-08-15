import type { Metadata } from 'next'
import CatherineClient from './CatherineClient'


export const metadata: Metadata = {
  title: "Sainte Catherine de Sienne : vie et enseignements spirituels",
  description:
    "Découvrez la vie de Sainte Catherine de Sienne, Docteur de l'Église, ses enseignements spirituels, ses lettres au pape et son influence dans l'histoire de l'Église.",
  openGraph: {
    title: "Sainte Catherine de Sienne : vie et enseignements spirituels",
    description:
      "Découvrez la vie, la spiritualité et les principaux enseignements de Sainte Catherine de Sienne.",
    type: 'article',
  },
}

export default function Page() {
  return <CatherineClient />
}