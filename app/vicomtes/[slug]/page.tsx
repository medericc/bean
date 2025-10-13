// app/vicomtes/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const vicomtesData = {
  "centulle-iv": {
    titre: "Centulle IV le Vieux",
    dates: "1058 - 1088",
    lignee: "Maison de Centulle",
    description: "Centulle IV, surnommé 'le Vieux', est l'un des vicomtes les plus marquants de la dynastie des Centulle. Son long règne de 30 ans permet une consolidation durable du pouvoir béarnais.",
    image: "/images/vicomtes/centulle-iv-detail.jpg",
    biographie: "Fils de Gaston III, Centulle IV accède au pouvoir dans un contexte d'instabilité régionale. Il parvient à stabiliser la vicomté et à étendre son influence vers les territoires voisins...",
    faitsMarquants: [
      "Consolidation des frontières béarnaises",
      "Développement des institutions vicomtales", 
      "Extension de l'influence en Aragon",
      "Fondation de plusieurs abbayes"
    ],
    alliances: "Marié à Gisla de Gascogne, renforçant les liens avec la noblesse gasconne",
    heritage: "Centulle IV laisse une vicomté stabilisée et renforcée, posant les bases de l'expansion future du Béarn."
  },
  // ... autres vicomtes
};

export default function VicomteDetailPage({ params }: Props) {
  const vicomte = vicomtesData[params.slug as keyof typeof vicomtesData];
  
  if (!vicomte) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-4">
              {vicomte.titre}
            </h1>
            <p className="font-corps text-2xl text-brun-terre mb-2">{vicomte.dates}</p>
            <p className="font-corps text-lg text-gray-700">{vicomte.lignee}</p>
          </div>
        </div>
      </section>
      
      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="float-right ml-8 mb-4 w-64">
                  <img 
                    src={vicomte.image} 
                    alt={vicomte.titre}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                <h2 className="font-titre text-3xl text-vert-mousse mb-6">Biographie</h2>
                <p className="font-corps text-gray-700 leading-relaxed mb-6">
                  {vicomte.biographie}
                </p>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Faits marquants</h3>
                <ul className="font-corps text-gray-700 space-y-3 mb-8">
                  {vicomte.faitsMarquants.map((fait, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-or-patine mr-3 mt-1">•</span>
                      <span>{fait}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Alliances et descendance</h3>
                <p className="font-corps text-gray-700 leading-relaxed mb-8">
                  {vicomte.alliances}
                </p>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Héritage</h3>
                <p className="font-corps text-gray-700 leading-relaxed">
                  {vicomte.heritage}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Fiche technique */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Fiche technique</h3>
                <dl className="font-corps text-gray-700 space-y-3">
                  <div>
                    <dt className="font-semibold">Règne</dt>
                    <dd>{vicomte.dates}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Lignée</dt>
                    <dd>{vicomte.lignee}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Surnom</dt>
                    <dd>{vicomte.titre.split('le ')[1]}</dd>
                  </div>
                </dl>
              </div>
              
              {/* Navigation */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Navigation</h3>
                <div className="space-y-3">
                  <a href="/vicomtes" className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    ← Retour aux vicomtes
                  </a>
                  <a href={`/lignees/${vicomte.lignee.split(' ').pop()?.toLowerCase()}`} 
                     className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    Voir la lignée {vicomte.lignee.split(' ').pop()} →
                  </a>
                </div>
              </div>
              
              {/* Période */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-2">Contexte historique</h3>
                <p className="font-corps text-gray-700 text-sm">
                  Période de consolidation du pouvoir vicomtal et d&apos;expansion territoriale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'centulle-iv' },
    { slug: 'gaston-iv' },
    { slug: 'gaston-febus' },
    { slug: 'henri-iv' }
  ];
}