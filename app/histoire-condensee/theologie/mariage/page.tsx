import type { Metadata } from 'next'
import MariageClient from './MariageClient'

export const metadata = {
  title: 'Signification sponsale | Théologie du Corps de saint Jean-Paul II',
  description:
    "Découvrez la signification sponsale du corps selon la Théologie du Corps de saint Jean-Paul II et saint Augustin : création de l'homme et de la femme, mariage, chasteté, communion des personnes, concupiscence, rédemption, fidélité et vocation des époux.",

  keywords: [
    'signification sponsale',
    'théologie du corps',
    'saint Jean-Paul II',
    'Jean-Paul II',
    'mariage chrétien',
    'théologie catholique',
    'communion des personnes',
    'homme et femme',
    'Adam et Ève',
    'création',
    'sacrement du mariage',
    'chasteté',
    'concupiscence',
    'rédemption',
    'fidélité conjugale',
       'saint Augustin',
    'spiritualité catholique',
    'enseignement catholique',
  ],
}

export default function Page() {
  return <MariageClient />
}