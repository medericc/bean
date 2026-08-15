import type { Metadata } from 'next'
import MariageClient from './MariageClient'

export const metadata: Metadata = {
  title: "La signification sponsale du corps selon Jean-Paul II",
  description:
    "Découvrez la signification sponsale du corps selon la Théologie du Corps de saint Jean-Paul II : homme et femme, mariage, chasteté, communion des personnes, concupiscence et rédemption.",
  openGraph: {
    title: "La signification sponsale du corps selon Jean-Paul II",
    description:
      "Comprendre la signification sponsale du corps et les grands thèmes de la Théologie du Corps de saint Jean-Paul II.",
    type: 'article',
  },
}

export default function Page() {
  return <MariageClient />
}