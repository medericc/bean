// components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-parchemin relative overflow-hidden">
      {/* Texture de fond subtile */}
      <div className="absolute inset-0 bg-[url('/textures/papier-ancien.jpg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Titre principal */}
          <h1 className="font-titre text-4xl md:text-6xl lg:text-7xl text-vert-mousse mb-6 leading-tight">
            Mémoire du Béarn
          </h1>
          
          {/* Sous-titre */}
          <p className="font-corps text-xl md:text-2xl text-brun-terre mb-8 leading-relaxed max-w-3xl mx-auto">
            Des origines antiques aux rois de Navarre, revivez la mémoire du Béarn.
          </p>
          
          {/* Bouton CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-or-patine text-white px-8 py-4 rounded-lg font-titre text-lg hover:bg-brun-terre transition-colors shadow-lg hover:shadow-xl">
              Explorer l&apos;Histoire
            </button>
            <button className="border-2 border-brun-terre text-brun-terre px-8 py-4 rounded-lg font-corps font-medium hover:bg-brun-terre hover:text-white transition-colors">
              Découvrir les Lignées
            </button>
          </div>
          
          {/* Indicateur de scroll */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-brun-terre rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brun-terre rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}