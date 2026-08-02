import type { Metadata } from 'next'
import AugustinClient from './AugustinClient'

export const metadata = {
  title: 'Saint Augustin et la prière | Culture chrétienne',
  description:
    "Découvrez les enseignements de Saint Augustin sur la prière, la vie éternelle, le désir de Dieu, l'amitié, la santé, la volonté divine et le vrai bonheur.",
  keywords: [
    'Saint Augustin',
    'prière',
    'enseignement chrétien',
    'théologie catholique',
    'docteur de l Église',
    'vie éternelle',
    'foi chrétienne',
    'culture chrétienne',
  ],
}

export default function Page() {
  return <AugustinClient />
}