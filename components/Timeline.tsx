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
    slug: 'centulle',
  },
  {
    annee: "XIe siècle",
    titre: "Montée de la Vicomté",
    description: "Le Béarn s'affirme comme une puissance autonome"
 ,
    slug: 'temps-feodaux',
  },
  {
    annee: "XIIe siècle",
    titre: "Pélerinage Armé", 
    description: "Participation aux croisades et renforcement des liens chrétiens",
    slug: 'pelerin',
  
  },
  {
    annee: "XIIe siècle",
    titre: "En pleine Reconquista", 
    description: "Engagement dans la Reconquista aux côtés des royaumes chrétiens.",
    slug: 'reconquista',
  
  },
   {
    annee: "XIIe-XIIIe siècle",
    titre: "Tutelle Aragonaise", 
    description: "Rapprochement avec l'Aragon face à l’influence gasconne",
    slug: 'aragon',
  
  },
   {
    annee: "XIIIe siècle", 
    titre: "Fin de la Tutelle",
    description: "Le Béarn s’affranchit de la tutelle et affirme peu à peu son autonomie",
    slug: 'tutelle',
  },
    {
    annee: "XIIIe-XIVe siècle", 
    titre: "Vers la Souveraineté",
    description: "Le Béarn se consolide, posant les bases d’une véritable indépendance",
    slug: 'marguerite',
  },
   {
    annee: "XIVe siècle", 
    titre: "La Souveraineté",
    description: "Sous Fébus, le Béarn atteint son apogée politique",
    slug: 'souverainete',
  },
  {
    annee: "XIVe siècle", 
    titre: "L'Apogée Militaire",
    description: "Le Béarn s'impose militairement et diplomatiquement",
    slug: 'apogee',
  },
  {
    annee: "XIVe siècle", 
   titre: "L'Affirmation Béarnaise",
    description: "Le Béarn sous la Menace du Prince Noir",
    slug: 'affirmation',
  },
   {
    annee: "XIVe siècle", 
    titre: "Les Drames de Fébus",
    description: "Le Pays de Béarn entre Guerre et Tragédie",
    slug: 'drames',
  },
  {
    annee: "XIVe-XVe siècle", 
    titre: "Le Béarn Post-Fébus",
    description: "Les États en affirmation définitivement l'indépendance",
    slug: 'apres-febus',
  },
 
  {
    annee: "XVe-XVIe siècle", 
    titre: "Union avec la Navarre",
    description: "Union, perte de territoire mais affermissement de leur pouvoir",
    slug: 'union-navarre',
  }
  
  ,

   {
    annee: "XVIe siècle", 
    titre: "L'Humanisme en Béarn",
    description: "Ils consolident le Béarn, en étant un pou entre deux singes",
    slug: 'l-humanisme',
  }
  
  ,
  {
    annee: "XVIe siècle", 
    titre: "Entre Pau et Genève",
    description: "Animée par la vertu, Jeanne d’Albret impose avec fermeté la Réforme",
    slug: 'bearn-protestant',
  },
  {
    annee: "XVIe siècle", 
    titre: "Tournée vers Paris",
    description: "Face au Royaume de France, la survie du Pays de Béarn est en jeu",
    slug: 'vers-paris',
  }
   ,
  {
    annee: "XVIe siècle", 
    titre: "Entre Béarn et Paris",
    description: "Le Béarn dirigeait depuis la région parisienne",
    slug: 'france',
  }
  ,


   {
    annee: "XVIe-XVIIe siècle", 
    titre: "Le Béarn Post-Henri",
    description: "Le départ de la dernière gouvernante",
    slug: 'le-depart',
  }
  ,


  {
    annee: "XVIIe siècle", 
    titre: "Sous la Monarchie Absolue",
    description: "Après la mort d'Henri IV, le Béarn rejoint la Fleur de Lys",
    slug: 'monarchie',
  }
  ,
  {
    annee: "XVIIIe siècle", 
    titre: "Le Siècle des Ténèbres",
    description: "Des idées noahides s'emparent de Londres, Paris, Pau...",
    slug: 'tenebres',
  }
  ,

   {
    annee: "XVIIIe siècle", 
    titre: "Vers la Terreur",
    description: "Jusqu'à la convocation des États généraux en 1789...",
    slug: 'revolution',
  }
  ,
  {
    annee: "XVIIIe siècle", 
    titre: "Le Béarn sous la Terreur",
    description: "Jusqu'à l'Assassinat de Maximilien de Robespierre...",
    slug: 'la-republique',
  }
   ,
  {
    annee: "XIXe-XXe siècle", 
    titre: "L'Entrée du Monde dans l'Obscurantisme",
    description: "Des Peuplicides se mettent en place au nom de la Tolérance",
    slug: 'terreur',
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