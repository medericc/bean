import type { Metadata } from 'next'
import HildegardeClient from './HildegardeClient'

export const metadata = {
  title:
    'Sainte Hildegarde de Bingen : âme, corps et conception',
  description:
    "Les enseignements de Sainte Hildegarde de Bingen sur l'âme humaine, la conception, la croissance spirituelle, le péché et la lumière intérieure.",
  keywords: [
    'Sainte Hildegarde',
    'Hildegarde de Bingen',
    'âme',
    'corps',
    'conception',
    'théologie catholique',
    'docteur de l Église',
    'spiritualité chrétienne',
  ],
}

export default function Page() {
  return <HildegardeClient />
}