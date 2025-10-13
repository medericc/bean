// app/vicomtes/page.tsx
import Card from '@/components/Card';

const vicomtes = [
  {
    slug: "centulle-iv",
    titre: "Centulle IV le Vieux",
    description: "Vicomte de 1058 à 1088, il consolide le pouvoir béarnais et étend l'influence de la vicomté.",
    image: "/images/vicomtes/centulle-iv.jpg",
    periode: "1058-1088",
    lignee: "Centulle",
    badge: "Bâtisseur"
  },
  {
    slug: "gaston-iv",
    titre: "Gaston IV le Croisé", 
    description: "Héros de la première croisade, il renforce les institutions et développe l'administration.",
    image: "/images/vicomtes/gaston-iv.jpg",
    periode: "1090-1131",
    lignee: "Centulle", 
    badge: "Croisé"
  },
  {
    slug: "gaston-febus",
    titre: "Gaston Fébus",
    description: "Prince emblématique, auteur du Livre de la Chasse, il incarne l'apogée culturel du Béarn.",
    image: "/images/vicomtes/gaston-febus.jpg",
    periode: "1343-1391",
    lignee: "Foix-Béarn",
    badge: "Mécène"
  },
  {
    slug: "henri-iv",
    titre: "Henri IV de France",
    description: "Dernier vicomte souverain de Béarn avant son accession au trône de France.",
    image: "/images/vicomtes/henri-iv.jpg", 
    periode: "1572-1610",
    lignee: "Navarre",
    badge: "Roi de France"
  }
];

export default function VicomtesPage() {
  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-6">
              Les Vicomtes de Béarn
            </h1>
            <p className="font-corps text-xl text-brun-terre leading-relaxed">
              Découvrez les hommes qui ont gouverné le Béarn, de ses origines 
              à son rattachement à la couronne de France.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filtres et recherche */}
      <section className="py-8 bg-parchemin-fonce">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex gap-4">
              <select className="font-corps bg-white border border-or-patine rounded px-4 py-2">
                <option>Toutes les lignées</option>
                <option>Centulle</option>
                <option>Gabarret</option>
                <option>Moncade</option>
                <option>Foix</option>
                <option>Navarre</option>
              </select>
              <select className="font-corps bg-white border border-or-patine rounded px-4 py-2">
                <option>Toutes les périodes</option>
                <option>IXe-XIe siècle</option>
                <option>XIIe-XIIIe siècle</option>
                <option>XIVe-XVe siècle</option>
                <option>XVIe-XVIIe siècle</option>
              </select>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Rechercher un vicomte..."
                className="font-corps bg-white border border-or-patine rounded pl-10 pr-4 py-2 w-64"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Grille des vicomtes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vicomtes.map((vicomte, index) => (
              <Card
                key={index}
                titre={vicomte.titre}
                description={vicomte.description}
                image={vicomte.image}
                lien={`/vicomtes/${vicomte.slug}`}
                badge={vicomte.badge}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistiques */}
      <section className="py-16 bg-parchemin-fonce">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-titre text-3xl text-or-patine mb-2">32</div>
              <div className="font-corps text-gray-700">Vicomtes répertoriés</div>
            </div>
            <div>
              <div className="font-titre text-3xl text-or-patine mb-2">5</div>
              <div className="font-corps text-gray-700">Lignées différentes</div>
            </div>
            <div>
              <div className="font-titre text-3xl text-or-patine mb-2">+600</div>
              <div className="font-corps text-gray-700">Ans d'histoire</div>
            </div>
            <div>
              <div className="font-titre text-3xl text-or-patine mb-2">1</div>
              <div className="font-corps text-gray-700">Roi de France</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}