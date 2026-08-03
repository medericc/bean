import type { Metadata } from 'next'
import ThomasClient from './ThomasClient'

export const metadata: Metadata = {
  title: "Saint Thomas d'Aquin : résumé de la Somme théologique",
  description:
    "Synthèse des idées de saint Thomas d'Aquin : foi, charité, prudence, justice, morale, passions et théologie.",
  keywords: [
    "Saint Thomas d'Aquin",
    "Somme théologique",
    "thomisme",
    "philosophie médiévale",
    "théologie",
    "vertus",
  ],
};

export default function Page() {
  return <ThomasClient />
}