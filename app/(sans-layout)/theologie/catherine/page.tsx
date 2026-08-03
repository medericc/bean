import type { Metadata } from 'next'
import CatherineClient from './CatherineClient'

export const metadata = {
  title: 'Sainte Catherine de Sienne | Enseignements spirituels',
  description:
    'Découvrez la vie de Sainte Catherine de Sienne, Docteur de l’Église, ses enseignements spirituels, ses lettres au pape et son influence sur l’histoire de l’Église catholique.',

    keywords: [
    'Sainte Catherine de Sienne',
    'Catherine de Sienne',
    'Docteur de l’Église',
    'théologie catholique',
    'saints catholiques',
    'spiritualité chrétienne',
    'histoire de l’Église',
  ],
}

export default function Page() {
  return <CatherineClient />
}