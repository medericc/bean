'use client'

import Link from 'next/link'

import Footer from '../../../components/layout/Footer'

import styles from './theologie.module.css'

const theologyCards = [
  {
    title: 'Saint Augustin',
    emoji: '📖',
    href: 'theologie/augustin',
    description:
      'Découvre les écrits, la pensée et la conversion du grand docteur de l’Église.'
  },
  {
    title: "Sainte Thérèse d'Avila",
    emoji: '⛪',
    href: 'theologie/therese',
    description:
      'Explore la mystique chrétienne et les enseignements de la réformatrice du Carmel.'
  },
  {
    title: 'Sainte Catherine de Sienne',
    emoji: '🕊️',
    href: 'theologie/catherine',
    description:
      'Découvre la vie, les lettres et la foi profonde de la patronne de l’Europe.'
  },
  {
    title: 'Sainte Hildegarde de Bingen',
    emoji: '🌾',
    href: 'theologie/hildegarde',
    description:
      'Découvre la vie dès la conception et l’âme humaine.'
  },
  {
    title: 'Signification Sponsale',
    emoji: '💍',
    href: 'theologie/mariage',
    description:
      'Découvre la beauté du sacrement du mariage.'
  }
]

export default function TheologiePage() {
  return (
    <main className={styles.theologiePage}>

      {/* HEADER */}
      <header className={styles.theologieHeader}>
        <div className={`container ${styles.theologieHeaderContent}`}>

          <Link
            href="/apprendre"
            className={styles.backLink}
          >
            ← Retour
          </Link>

          <h1 className={styles.theologieTitle}>
            <span>✝️</span>
            <span>Théologie</span>
          </h1>

          <span className={styles.theologieSubtitle}>
            Foi • Saints • Spiritualité
          </span>

        </div>
      </header>

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className="container">

          <div className={styles.heroContent}>

            <h2>
              Étudier la foi chrétienne
            </h2>

            <p>
              Découvre les grands saints, la spiritualité chrétienne
              et les fondements de la foi catholique à travers
              des enseignements accessibles et structurés.
            </p>

          </div>

        </div>
      </section>

      {/* GRID */}
      <section className={styles.learningSection}>
        <div className="container">

          <div className={styles.learningGrid}>

            {theologyCards.map((card, index) => (

              <Link
                key={card.href}
                href={card.href}
                className={`
                  ${styles.learningCard}
                  ${index % 2 === 0
                    ? styles.white
                    : styles.purple}
                  ${styles.animateFadeUp}
                `}
              >

                <div className={styles.cardEmoji}>
                  {card.emoji}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <div className={styles.cardLink}>
                  Explorer

                  <span className={styles.cardArrow}>
                    →
                  </span>
                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>

      <Footer />

    </main>
  )
}