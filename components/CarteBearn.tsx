// components/CarteBearn.tsx
export default function CarteBearn() {
  const regions = [
    { nom: "Oloron", x: "30%", y: "40%" },
    { nom: "Orthez", x: "20%", y: "60%" },
    { nom: "Pau", x: "40%", y: "50%" },
    { nom: "Navarrenx", x: "25%", y: "55%" }
  ];

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-parchemin rounded-xl border-2 border-or-patine overflow-hidden">
      {/* Texture de fond */}
      <div className="absolute inset-0 bg-[url('/textures/papier-ancien.jpg')] opacity-10"></div>
      
      {/* Carte stylisée */}
      <div className="absolute inset-8 bg-pierre rounded-lg border border-brun-terre/20">
        {/* Points interactifs */}
        {regions.map((region, index) => (
          <button
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: region.x, top: region.y }}
          >
            <div className="w-4 h-4 bg-or-patine rounded-full border-2 border-white shadow-lg transition-all group-hover:scale-150 group-hover:bg-vert-mousse"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-2 py-1 rounded text-sm font-corps opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {region.nom}
            </div>
          </button>
        ))}
        
        {/* Lignes de contour */}
        <div className="absolute inset-4 border border-brun-terre/30 rounded"></div>
        <div className="absolute inset-8 border border-brun-terre/20 rounded"></div>
      </div>
      
      {/* Légende */}
      <div className="absolute bottom-4 left-4 bg-parchemin/90 backdrop-blur-sm p-3 rounded-lg border border-or-patine">
        <p className="font-titre text-sm text-brun-terre">Carte du Béarn historique</p>
        <p className="font-corps text-xs text-gray-600">Cliquez sur les points pour explorer</p>
      </div>
    </div>
  );
}