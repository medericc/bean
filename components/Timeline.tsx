// components/Timeline.tsx
'use client';

import Link from 'next/link';

type Periode = {
  annee: string;
  titre: string;
  description: string;
  slug: string;
};


const periodes: Periode[] = [
  // {
  //   annee: "Antiquité",
  //   titre: "Peuple des Venarni", 
  //   description: "Les premières traces de peuplement dans les Pyrénées béarnaises",
  //   slug: 'antiquite',
  // },

  {
    annee: "Xe siècle",
    titre: "Formation du Béarn médiéval", 
    description: "Émergence de la vicomté de Béarn",
    slug: 'haut-moyen',
  },
  {
    annee: "XIe siècle",
    titre: "Montée de la Vicomté",
    description: "Le Béarn s'affirme comme une puissance autonome"
 ,
    slug: 'moyen-age',
  },
  {
    annee: "XIIe siècle",
    titre: "Pélerinage Armé", 
    description: "Participation aux croisades et renforcement des liens chrétiens",
    slug: 'pelerin',
  
  },
   {
    annee: "XIIe-XIIIe siècle",
    titre: "Tutelle Aragonaise", 
    description: "Rapprochement avec l'Aragon face à l’influence gasconne",
    slug: 'aragon',
  
  },
  {
    annee: "XIVe-XVe siècle", 
    titre: "Souveraineté Béarnaise",
    description: "Le Béarn atteint son indépendance politique maximale",
    slug: 'souverainete',
  },
  {
    annee: "XVe-XVIe siècle", 
    titre: "Union avec la Navarre",
    description: "Cette union prépare l’avènement d’Henri de Navarre, futur roi de France",
    slug: 'union-navarre',
  }
];

export default function Timeline() {
  return (
    <div className="relative py-12">
      {/* Ligne centrale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-or-patine h-full hidden md:block"></div>
      
      <div className="space-y-8 md:space-y-12">
        {periodes.map((periode, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center`}
          >
            {/* Contenu */}
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <div className="bg-parchemin p-6 rounded-lg shadow-lg border border-or-patine hover:shadow-xl transition-shadow">
                <span className="inline-block bg-vert-mousse text-white px-3 py-1 rounded-full text-sm font-corps mb-2">
                  {periode.annee}
                </span>
                <h3 className="font-titre text-2xl text-brun-terre mb-3">{periode.titre}</h3>
                <p className="text-gray-700 font-corps leading-relaxed">{periode.description}</p>

                {/* 🔗 Lien dynamique */}
                <Link
                  href={`/histoire/${periode.slug}`}
                  className="mt-4 inline-block text-or-patine hover:text-brun-terre font-corps font-medium transition-colors"
                >
                  En savoir plus →
                </Link>
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