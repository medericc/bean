// app/lignees/page.tsx
import Card from '@/components/Card';

export const metadata = {
  title: "Lignées du Béarn",
}
const lignees = [
  {
    slug: "centulle",
    titre: "Maison de Centulle",
    description: "La première lignée des vicomtes de Béarn, issue du Vic-Bilh, remontant au Xe siècle.",
    image: "/centulle-cove.png",
    periode: "Xe - XIIe siècle",
    vicomtes: "10 vicomtes",
    badge: "Fondateurs"
  },
  {
    slug: "gabarret",
    titre: "Maison de Gabarret", 
    description: "Brève mais importante lignée qui consolide le pouvoir vicomtal face aux voisins aquitains.",
    image: "/lignee-cover.jpg",
    periode: "XIIe siècle",
    vicomtes: "3 vicomtes",
    badge: "Consolidation"
  },
  {
    slug: "moncade",
    titre: "Maison de Moncade",
    description: "Puissante famille qui étend l'influence du Béarn en Catalogne et renforce l'administration.",
    image: "/moncade-cover.jpg",
    periode: "XIIe - XIIIe siècle", 
    vicomtes: "5 vicomtes",
    badge: "Expansion"
  },
  {
    slug: "foix",
    titre: "Maison de Foix-Béarn",
    description: "Union stratégique avec le comté de Foix, période d'apogée politique et culturelle.",
    image: "/histoire-cover.jpg",
    periode: "XIIe - XVe siècle",
    vicomtes: "8 vicomtes", 
    badge: "Apogée"
  },
  {
    slug: "navarre",
    titre: "Maison de Navarre",
    description: "Alliance avec la Navarre, menant au règne d'Henri IV et au rattachement à la France.",
    image: "/vicomtes-coverx.jpg", 
    periode: "XVe - XVIe siècle",
    vicomtes: "4 vicomtes",
    badge: "Couronnement"
  }
];

export default function LigneesPage() {
  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-6">
              Les Lignées Vicomtales
            </h1>
            <p className="font-corps text-xl text-brun-terre leading-relaxed">
              Découvrez les grandes dynasties qui ont gouverné le Béarn et 
              façonné son destin à travers les siècles.
            </p>
          </div>
        </div>
      </section>
      
      {/* Grille des lignées */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lignees.map((lignee, index) => (
              <Card
                key={index}
                titre={lignee.titre}
                description={lignee.description}
                image={lignee.image}
                lien={`/lignees/${lignee.slug}`}
                badge={lignee.badge}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Arbre généalogique simplifié */}
      <section className="py-16 bg-parchemin-fonce">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl text-vert-mousse mb-4">
              Succession des Lignées
            </h2>
            <p className="font-corps text-lg text-brun-terre">
              Visualisez la transmission du pouvoir à travers les dynasties
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {lignees.map((lignee, index) => (
              <div key={index} className="text-center">
                <div className="bg-parchemin p-4 rounded-lg border border-or-patine min-w-[150px]">
                  <h3 className="font-titre text-lg text-vert-mousse">{lignee.titre.split(' ').pop()}</h3>
                  <p className="font-corps text-sm text-gray-600">{lignee.periode}</p>
                </div>
                {index < lignees.length - 1 && (
                  <div className="text-center py-2">
                    <div className="w-4 h-4 mx-auto transform rotate-45 bg-or-patine"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}