import type { Metadata } from 'next'
import HildegardeClient from './HildegardeClient'

export const metadata: Metadata = {
  title: "Sainte Hildegarde de Bingen : âme, corps et spiritualité",
  description:
    "Découvrez les enseignements de Sainte Hildegarde de Bingen sur l'âme, le corps, la conception, le péché, la croissance spirituelle et la lumière intérieure.",
  openGraph: {
    title: "Sainte Hildegarde de Bingen : âme, corps et spiritualité",
    description:
      "Explorez la pensée spirituelle de Sainte Hildegarde de Bingen sur l'âme humaine, le corps et la vie intérieure.",
    type: 'article',
  },
}

export default function Page() {
  return <HildegardeClient />
}