// components/Timeline.tsx
const periodes = [
  {
    annee: "Antiquité",
    titre: "Peuple des Venarni", 
    description: "Les premières traces de peuplement dans les Pyrénées béarnaises"
  },
  {
    annee: "IXe siècle", 
    titre: "Haut Moyen Âge",
    description: "Formation des premières entités territoriales"
  },
  {
    annee: "Xe siècle",
    titre: "Formation du Béarn médiéval", 
    description: "Émergence de la vicomté de Béarn"
  },
  {
    annee: "XIIe-XIIIe",
    titre: "Montée des Vicomtés",
    description: "Expansion territoriale et affirmation du pouvoir"
  },
  {
    annee: "XVe siècle",
    titre: "Union avec la Navarre", 
    description: "Alliances dynastiques et extension de l'influence"
  },
  {
    annee: "1553-1610", 
    titre: "Règne d'Henri IV",
    description: "Apogée et rattachement à la France"
  }
];

export default function Timeline() {
  return (
    <div className="relative py-12">
      {/* Ligne centrale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-or-patine h-full hidden md:block"></div>
      
      <div className="space-y-8 md:space-y-12">
        {periodes.map((periode, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
            {/* Contenu */}
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <div className="bg-parchemin p-6 rounded-lg shadow-lg border border-or-patine hover:shadow-xl transition-shadow">
                <span className="inline-block bg-vert-mousse text-white px-3 py-1 rounded-full text-sm font-corps mb-2">
                  {periode.annee}
                </span>
                <h3 className="font-titre text-2xl text-brun-terre mb-3">{periode.titre}</h3>
                <p className="text-gray-700 font-corps leading-relaxed">{periode.description}</p>
                <button className="mt-4 text-or-patine hover:text-brun-terre font-corps font-medium transition-colors">
                  En savoir plus →
                </button>
              </div>
            </div>
            
            {/* Point sur la timeline */}
            <div className="w-full md:w-1/2 flex justify-center items-center py-4 md:py-0">
              <div className="w-6 h-6 bg-or-patine rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Espace vide pour l'alternance */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}