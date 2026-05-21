// components/Timeline.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    annee: "Ie-Ve siècle",
    titre: "Naissance de l'Eglise", 
    description: "Les Enseignements du Christ",
    slug: 'eglise',
  },
  {
    annee: "XIIe-XIVe siècle",
    titre: "Formation du Béarn médiéval", 
    description: "Émergence de la vicomté de Béarn",
    slug: 'fondement',
  },
 {
    annee: "XIVe siècle", 
    titre: "La Souveraineté",
    description: "Sous Fébus, le Béarn atteint son apogée politique",
    slug: 'souverain',
  },
 {
    annee: "XIVe-XVIe siècle", 
   titre: "L'Affirmation Béarnaise",
    description: "Les États en affirmation définitivement l'indépendance",
    slug: 'republique',
  },
   {
    annee: "XVIe siècle", 
    titre: "Union avec la Navarre",
    description: "Union, perte de territoire mais affermissement de leur pouvoir",
    slug: 'navarre',
  }
  
  ,


  {
    annee: "XVIIe siècle", 
    titre: "Sous la Monarchie Absolue",
    description: "Le Béarn dirigeait depuis la région parisienne",
    slug: 'monarchie-absolue',
  }
  ,
   
  {
    annee: "XVIIIe siècle", 
    titre: "Le Béarn sous la Terreur",
    description: "Jusqu'à l'assassinat de Maximilien de Robespierre...",
    slug: 'la-terreur',
  }



  
];
const periodes2: Periode[] = [
  // {
  //   annee: "Antiquité",
  //   titre: "Peuple des Venarni", 
  //   description: "Les premières traces de peuplement dans les Pyrénées béarnaises",
  //   slug: 'antiquite',
  // },

  {
    annee: "Ie-Ve siècle",
    titre: "Naissance de l'Eglise", 
    description: "Les Enseignements du Christ",
    slug: 'eglise',
  },
  {
    annee: "Ve-VIIe siècle",
    titre: "Les Mérovingiens", 
    description: "La Naissance de la France",
    slug: 'naissance-france',
  },
 {
    annee: "IXe-XIVe siècle", 
    titre: "Les Capétiens",
    description: "De Charlemagne à Gaston Fébus",
    slug: 'capet',
  },
 {
    annee: "XVe-XVIe siècle", 
   titre: "La Pucelle d'Orléans",
    description: "La Providence démarre de Lorraine",
    slug: 'sainte-jeanne',
  }
  
  ,
   {
    annee: "XVIe-XVIIIe siècle", 
    titre: "Les Protestants",
    description: "Une hérésie se disperse à travers l'Europe",
    slug: 'calviniste',
  }
  
  ,
  {
    annee: "XVIIIe siècle", 
    titre: "La Révolution",
    description: "Les Républicains prennent Paris",
    slug: 'paris',
  }
  
  ,

  {
    annee: "XVIIIe-XIXe siècle", 
    titre: "Sous la Terreur",
    description: "La République s'impose en France",
    slug: 'revolution-france',
  }
  ,
   
  {
    annee: "XIXe-XXe siècle", 
    titre: "Le Monde des Banques",
    description: "L'être humain est objet...",
    slug: 'technologie',
  }



  
];
export default function Timeline() {
  const [mode, setMode] = useState<'bearn' | 'monde'>('bearn');

  const data = mode === 'bearn' ? periodes : periodes2;

  return (
    <div className="relative py-12">

      {/* Boutons */}
      <div className="flex justify-end mb-10">
        <div className="bg-parchemin border border-or-patine rounded-full p-1 flex shadow-md">
          
          <button
            onClick={() => setMode('bearn')}
            className={`px-5 py-2 rounded-full transition-all duration-300 font-corps
              ${
                mode === 'bearn'
                  ? 'bg-vert-mousse text-white'
                  : 'text-brun-terre hover:bg-gray-100'
              }`}
          >
            Béarn
          </button>

          <button
            onClick={() => setMode('monde')}
            className={`px-5 py-2 rounded-full transition-all duration-300 font-corps
              ${
                mode === 'monde'
                  ? 'bg-vert-mousse text-white'
                  : 'text-brun-terre hover:bg-gray-100'
              }`}
          >
            Monde
          </button>
        </div>
      </div>

      {/* Ligne centrale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-or-patine h-full hidden md:block"></div>

      <AnimatePresence mode="wait">

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="space-y-8 md:space-y-12"
        >

          {data.map((periode, index) => (
            <motion.div
              key={periode.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              } items-center`}
            >

              {/* Contenu */}
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <div className="bg-parchemin p-6 rounded-lg shadow-lg border border-or-patine hover:shadow-xl transition-shadow">

                  <span className="inline-block bg-vert-mousse text-white px-3 py-1 rounded-full text-sm font-corps mb-2">
                    {periode.annee}
                  </span>

                  <h3 className="font-titre text-2xl text-brun-terre mb-3">
                    {periode.titre}
                  </h3>

                  <p className="text-gray-700 font-corps leading-relaxed">
                    {periode.description}
                  </p>

                  <Link
                    href={`/histoire-condense/${
  mode === 'bearn'
    ? 'bearn'
    : 'monde'
}/${periode.slug}`}
                    className="mt-4 inline-block text-or-patine hover:text-brun-terre font-corps font-medium transition-colors"
                  >
                    En savoir plus →
                  </Link>

                </div>
              </div>

              {/* Point timeline */}
              <div className="w-full md:w-1/2 flex justify-center items-center py-4 md:py-0">
                <div className="w-6 h-6 bg-or-patine rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* espace */}
              <div className="hidden md:block w-1/2"></div>

            </motion.div>
          ))}

        </motion.div>
      </AnimatePresence>
    </div>
  );
}