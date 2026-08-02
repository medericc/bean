import type { Metadata } from 'next'
import ThereseClient from './ThereseClient'

export const metadata: Metadata = {
  title: "Les Sept Demeures du Château intérieur de Sainte Thérèse d'Avila",
  description:
    "Résumé complet des Sept Demeures du Château intérieur de Sainte Thérèse d'Avila : les étapes de la vie spirituelle, de la conversion jusqu'à l'union transformante avec Dieu.",
  keywords: [
    'Sainte Thérèse d Avila',
    'Thérèse d Avila',
    'Sept Demeures',
    'Château intérieur',
    'vie spirituelle',
    'oraison',
    'mystique chrétienne',
    'théologie catholique',
    'docteur de l Église',
    'saints catholiques',
    'union à Dieu',
  ],
  openGraph: {
  title:
    "Les Sept Demeures du Château intérieur de Sainte Thérèse d'Avila",

  description:
    "Résumé complet des Sept Demeures du Château intérieur, le grand traité spirituel de Sainte Thérèse d'Avila.",

  type: "article",
},
}

export default function Page() {
  return <ThereseClient />
}