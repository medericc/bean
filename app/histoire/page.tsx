// app/histoire/page.tsx
import Timeline from '@/components/Timeline';

export default function HistoirePage() {
  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-6">
              Histoire du Béarn
            </h1>
            <p className="font-corps text-xl text-brun-terre leading-relaxed">
              De l&apos;Antiquité au rattachement à la France, parcourez les siècles 
              d&apos;histoire qui ont forgé l&apos;identité du Béarn.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Interactive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Timeline />
        </div>
      </section>
      
      {/* Section complémentaire */}
      <section className="py-16 bg-parchemin-fonce">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-titre text-3xl text-vert-mousse mb-6">
                Une histoire riche et complexe
              </h2>
              <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
                <p>
                  Le Béarn a su préserver son identité à travers les siècles, 
                  des premiers peuplements à son intégration dans le royaume de France.
                </p>
                <p>
                  Sa position stratégique dans les Pyrénées en a fait un territoire 
                  convoité, mais aussi un carrefour culturel unique.
                </p>
                <p>
                  Explorez les événements marquants, les batailles décisives et 
                  les transformations sociales qui ont façonné cette région.
                </p>
              </div>
            </div>
            <div className="bg-parchemin p-8 rounded-lg border border-or-patine shadow-lg">
              <h3 className="font-titre text-2xl text-brun-terre mb-4">
                Chiffres clés
              </h3>
              <div className="space-y-3 font-corps">
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span>Période couverte</span>
                  <span className="font-semibold">+ de 2000 ans</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span>Vicomtes répertoriés</span>
                  <span className="font-semibold">30 vicomtes</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span>Lignées principales</span>
                  <span className="font-semibold">5 dynasties</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Documents sources</span>
                  <span className="font-semibold">+ de 100 références</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}