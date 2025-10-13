import { notFound } from 'next/navigation';
import ExpandableSection from './ExpandableSection';

const histoireData = {
  'antiquite': {
    titre: "Peuple des Venarni",
    periode: "Antiquité",
    resume: "Les premières traces de peuplement dans les Pyrénées béarnaises.",
    introduction: "Le Béarn antique voit naître les premières communautés organisées...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Conquête du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Les populations protohistoriques vivaient de chasse, d’élevage et de commerce
              trans-pyrénéen. Leur culture se rattache aux peuples aquitains.
            </p>
          </div>
        )
      },
      {
        titre: "Arrivée des Vicomtes",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Le territoire était structuré autour de clans, avec des échanges avec la
              Gascogne et la Navarre.
            </p>
          </div>
        )
      },
    ]
  },
  // tu ajouteras ici les autres slugs : "haut-moyen", "moyen-age", "aragon", "souverainete", "union-navarre"
};

interface Props {
  params: { slug: string };
}

export default function HistoireDetailPage({ params }: Props) {
  const pageData = histoireData[params.slug as keyof typeof histoireData];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="relative h-96 bg-gray-800">
        <img 
          src={pageData.image} 
          alt={pageData.titre}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4">
          <span className="inline-block bg-or-patine text-white px-4 py-2 rounded-full font-corps text-sm mb-4">
            {pageData.periode}
          </span>
          <h1 className="font-titre text-4xl md:text-5xl mb-4">{pageData.titre}</h1>
          <p className="font-corps text-xl max-w-2xl mx-auto leading-relaxed">
            {pageData.resume}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-corps text-xl text-gray-700 leading-relaxed text-center italic">
            {pageData.introduction}
          </p>
        </div>
      </section>

      {/* Sections dépliables */}
      <section className="py-16 bg-parchemin">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl text-vert-mousse mb-4">
              Analyse Détaillée
            </h2>
            <p className="font-corps text-lg text-brun-terre">
              Explorez les différents aspects de cette période
            </p>
          </div>

          <div className="space-y-6">
            {pageData.sections.map((section, index) => (
              <ExpandableSection
                key={index}
                titre={section.titre}
                enfants={section.contenu}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-parchemin-fonce">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <a
            href="/histoire"
            className="inline-flex items-center font-corps text-brun-terre hover:text-or-patine transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la chronologie
          </a>
        </div>
      </section>
    </div>
  );
}

/* ✅ Fonction statique possible car ce fichier n’est pas client */
export function generateStaticParams() {
  return [
    { slug: 'antiquite' },
    { slug: 'haut-moyen' },
    { slug: 'moyen-age' },
    { slug: 'aragon' },
    { slug: 'souverainete' },
    { slug: 'union-navarre' },
  ];
}
