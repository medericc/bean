// app/lignees/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const ligneesData = {
  centulle: {
    titre: "Maison de Centulle",
    periode: "IXe - XIe siècle",
    description: "Les Centulle sont les véritables fondateurs de la vicomté de Béarn. Ils établissent les premières institutions béarnaises et étendent considérablement le territoire.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Centulle Ier", "Centulle II", "Centulle III", "Centulle IV", "Centulle V"],
    faitsMarquants: [
      "Fondation de la vicomté de Béarn",
      "Établissement des Fors de Béarn",
      "Extension territoriale vers l'Aragon",
      "Construction des premières forteresses"
    ],
    heritage: "Les Centulle ont posé les bases institutionnelles et territoriales qui permettront au Béarn de devenir une puissance régionale."
  },
  // ... autres lignees
};

export default function LigneeDetailPage({ params }: Props) {
  const lignee = ligneesData[params.slug as keyof typeof ligneesData];
  
  if (!lignee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête avec image */}
      <section className="relative h-96 bg-gray-800">
        <img 
          src={lignee.image} 
          alt={lignee.titre}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="font-titre text-4xl md:text-5xl mb-2">{lignee.titre}</h1>
          <p className="font-corps text-xl">{lignee.periode}</p>
        </div>
      </section>
      
      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-titre text-3xl text-vert-mousse mb-6">Histoire de la lignée</h2>
                <p className="font-corps text-gray-700 leading-relaxed mb-6">
                  {lignee.description}
                </p>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Faits marquants</h3>
                <ul className="font-corps text-gray-700 space-y-2 mb-8">
                  {lignee.faitsMarquants.map((fait, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-or-patine mr-3">•</span>
                      {fait}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Héritage</h3>
                <p className="font-corps text-gray-700 leading-relaxed">
                  {lignee.heritage}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Vicomtes de la lignée */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Vicomtes de cette lignée</h3>
                <ul className="font-corps text-gray-700 space-y-2">
                  {lignee.vicomtes.map((vicomte, index) => (
                    <li key={index}>
                      <a href={`/vicomtes/${vicomte.toLowerCase().replace(' ', '-')}`} 
                         className="hover:text-or-patine transition-colors">
                        {vicomte}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Période */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-2">Période</h3>
                <p className="font-corps text-gray-700">{lignee.periode}</p>
              </div>
              
              {/* Navigation */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Explorer</h3>
                <div className="space-y-2">
                  <a href="/lignees" className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    ← Retour aux lignées
                  </a>
                  <a href="/vicomtes" className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    Voir tous les vicomtes →
                  </a>
                </div>
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
    { slug: 'centulle' },
    { slug: 'gabarret' },
    { slug: 'moncade' },
    { slug: 'foix' },
    { slug: 'navarre' }
  ];
}