// app/page.tsx
import Hero from '@/components/Hero';
import CarteBearn from '@/components/CarteBearn';
import Card from '@/components/Card';

export default function Home() {
  const highlights = [
    {
      titre: "Histoire Chronologique",
      description: "Parcourez les grandes périodes du Béarn, de l'Antiquité à Henri IV",
      image: "/images/histoire-cover.jpg",
      lien: "/histoire",
      badge: "Timeline"
    },
    {
      titre: "Lignées Vicomtales",
      description: "Découvrez les grandes familles qui ont façonné le Béarn",
      image: "/images/lignees-cover.jpg",
      lien: "/lignees",
      badge: "Familles"
    },
    {
      titre: "Les Vicomtes",
      description: "Explorez les biographies des vicomtes de Béarn",
      image: "/images/vicomtes-cover.jpg", 
      lien: "/vicomtes",
      badge: "Biographies"
    }
  ];

  return (
    <div className="min-h-screen bg-parchemin">
      {/* Section Hero */}
      <Hero />
      
      {/* Section Carte Interactive */}
      <section className="py-16 bg-pierre">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl md:text-4xl text-vert-mousse mb-4">
              Explorez le Béarn Historique
            </h2>
            <p className="font-corps text-xl text-brun-terre max-w-2xl mx-auto">
              Naviguez sur la carte pour découvrir les lieux emblématiques de l'histoire béarnaise
            </p>
          </div>
          <CarteBearn />
        </div>
      </section>
      
      {/* Section Highlights */}
      <section className="py-16 bg-parchemin">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl md:text-4xl text-vert-mousse mb-4">
              Parcours de Découverte
            </h2>
            <p className="font-corps text-xl text-brun-terre">
              Choisissez votre angle d'exploration de l'histoire du Béarn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                titre={item.titre}
                description={item.description}
                image={item.image}
                lien={item.lien}
                badge={item.badge}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Citation */}
      <section className="py-16 bg-parchemin-fonce">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-titre text-2xl md:text-3xl text-brun-terre italic max-w-4xl mx-auto leading-relaxed">
            "Le Béarn, petite patrie aux grandes histoires, où chaque pierre raconte 
            l'épopée d'un peuple fier de ses montagnes et de sa liberté."
          </blockquote>
          <p className="font-corps text-lg text-vert-mousse mt-6">
            - Mémoire du Béarn
          </p>
        </div>
      </section>
    </div>
  );
}