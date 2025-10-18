// app/a-propos/page.tsx
'use client';

import { useState } from 'react';



// Composant Card pour les ressources
interface ResourceCardProps {
  titre: string;
  auteur: string;
  type: 'livre' | 'video' | 'document' | 'article';
  description: string;
  annee?: string;
  lien?: string;
  details?: string[];
}

function ResourceCard({ titre, auteur, type, description, annee, lien, details }: ResourceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const typeConfig = {
    livre: { color: 'bg-vert-mousse', icon: '📚', label: 'Ouvrage' },
    video: { color: 'bg-yellow-900', icon: '🎥', label: 'Vidéo' },
    document: { color: 'bg-or-patine', icon: '📄', label: 'Document' },
    article: { color: 'bg-blue-600', icon: '📖', label: 'Article' }
  };

  const config = typeConfig[type];

  return ( <> 
    <div className="bg-parchemin rounded-lg border border-or-patine overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* En-tête de la carte */}
      <div className={`${config.color} text-white p-4`}>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl">{config.icon}</span>
              <span className="font-corps text-sm font-medium">{config.label}</span>
            </div>
            <h3 className="font-titre text-xl">{titre}</h3>
            <p className="font-corps text-white/90 mt-1">{auteur}</p>
          </div>
          {annee && (
            <span className="bg-white/20 px-2 py-1 rounded text-sm font-corps">
              {annee}
            </span>
          )}
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <p className="font-corps text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Détails supplémentaires */}
        {details && details.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center font-corps text-brun-terre hover:text-or-patine transition-colors text-sm"
            >
              <span>Points clés</span>
              <svg 
                className={`w-4 h-4 ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <ul className="mt-2 space-y-2 font-corps text-gray-600 text-sm">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-or-patine mr-2 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        
        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          {lien ? (
            <a 
              href={lien}
              target="_blank"
              rel="noopener noreferrer"
              className="font-corps text-sm text-or-patine hover:text-brun-terre transition-colors font-medium"
            >
              Accéder à la ressource →
            </a>
          ) : (
            <span className="font-corps text-sm text-gray-500">Ressource consultée</span>
          )}
          
          <button className="text-gray-400 hover:text-or-patine transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
</>  );
}

export default function AProposPage() {
  const ressources = [
    {
      titre: "Gaston Fébus: Prince des Pyrénées",
      auteur: "Pierre Tucoo-Chala",
      type: 'livre' as const,
      description: "Biographie exhaustive de Gaston III de Foix-Béarn, dit Fébus, prince emblématique du Béarn médiéval. L'ouvrage couvre son règne, sa politique et son héritage culturel.",
      annee: "1991",
      details: [
        "Analyse détaillée du Livre de la Chasse",
        "Politique d'indépendance face à la France et l'Angleterre",
        "Relations avec la cour de Navarre",
        "Administration et gouvernement du Béarn"
      ]
    },
    {
      titre: "L'Islam Près des Pyrénées",
      auteur: "Pierre Tucoo-Chala",
      type: 'livre' as const,
      description: "Étude approfondie de la sœur d'Henri IV et son rôle dans l'histoire du Béarn. L'ouvrage explore son influence politique et culturelle.",
      annee: "1994",
      details: [
        "Régence pendant les guerres de religion",
        "Correspondance avec Henri IV",
        "Influence sur la cour de Nérac",
        "Patronage artistique et littéraire"
      ]
    },
    {
      titre: "Nouvelle Histoire du Béarn",
      auteur: "Laurent Jalabert",
      type: 'livre' as const,
      description: "Ouvrage de référence sur la maison de Foix-Béarn, explorant les liens dynastiques et l'administration des territoires.",
      annee: "2024",
      details: [
        "Généalogie détaillée des Foix-Béarn",
        "Stratégies matrimoniales et alliances",
        "Gestion des domaines pyrénéens",
        "Relations avec la couronne d'Aragon"
      ]
    },
    {
      titre: "Conférence - Les Comtes de Foix ",
      auteur: "Claudine Pailhès",
      type: 'video' as const,
      description: "Documentaire historique complet sur YouTube retraçant la vie et l'œuvre de Gaston Fébus, avec des interventions d'experts et des reconstitutions.",
      lien: "https://www.youtube.com/watch?v=uWDQv7m8uS8",
      details: [
        "Interviews avec des historiens spécialistes",
        "Visite des châteaux fébusiens",
        "Analyse du manuscrit du Livre de la Chasse",
        "Contextualisation historique du XIVe siècle"
      ]
    },
    {
     titre: "La Béarn et sa Souveraineté",
      auteur: "Pierre Tucoo-Chala",
      type: 'livre' as const,
      description: "Édition critique des Fors anciens de Béarn, textes fondamentaux qui ont structuré l'organisation juridique et sociale de la vicomté.",
      annee: "1961",
      details: [
        "Transcription des manuscrits médiévaux",
        "Analyse comparative des différentes versions",
        "Commentaires historiques et juridiques",
        "Glossaire des termes béarnais"
      ]
    },
       {
      titre: "Conférence - Les Vicomtes de Béarn",
      auteur: "Thierry Issartel",
      type: 'video' as const,
      description: "Documentaire historique complet sur YouTube retraçant la vie et l'œuvre de Gaston Fébus, avec des interventions d'experts et des reconstitutions.",
      lien: "https://www.youtube.com/watch?v=V2rK9e50cV0",
      details: [
        "Interviews avec des historiens spécialistes",
        "Visite des châteaux fébusiens",
        "Analyse du manuscrit du Livre de la Chasse",
        "Contextualisation historique du XIVe siècle"
      ]
    }
  ];

  const stats = [
    { nombre: "12+", label: "Ouvrages de référence" },
    { nombre: "6", label: "Archives consultées" },
    { nombre: "3", label: "Semaines de recherche" },
    { nombre: "200+", label: "Documents analysés" }
  ];

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-6">
              À Propos du Projet
            </h1>
            <p className="font-corps text-xl text-brun-terre leading-relaxed">
              Découvrez les sources et la méthodologie qui ont permis de reconstituer 
              l&apos;histoire fascinante du Béarn à travers les siècles.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-titre text-3xl text-vert-mousse mb-8 text-center">
              Méthodologie et Sources
            </h2>
            
            <div className="space-y-6 font-corps text-gray-700 leading-relaxed">
              <p>
                Ce projet &quot;Mémoire du Béarn&quot; est le fruit d&apos;un travail de recherche approfondi 
                s&apos;appuyant sur des sources historiques rigoureuses et des ouvrages de référence 
                reconnus par la communauté scientifique.
              </p>
              
              <p>
                Chaque information présentée sur ce site a été soigneusement vérifiée et 
                croisée avec plusieurs sources afin de garantir l&apos;exactitude historique 
                et la fiabilité des contenus.
              </p>

              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Approche scientifique</h3>
                <ul className="font-corps text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-or-patine mr-3 mt-1">•</span>
                    <span>Consultation systématique des sources primaires disponibles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or-patine mr-3 mt-1">•</span>
                    <span>Recoupement des informations avec les travaux universitaires récents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or-patine mr-3 mt-1">•</span>
                    <span>Collaboration avec des spécialistes de l&apos;histoire régionale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-or-patine mr-3 mt-1">•</span>
                    <span>Respect de la chronologie et du contexte historique</span>
                  </li>
                </ul>
              </div>

              <p>
                Les travaux de <strong>Pierre Tucoo-Chala</strong>, historien spécialiste du Béarn médiéval, 
                constituent la colonne vertébrale de ce projet. Ses recherches approfondies 
                sur Gaston Fébus et la période médiévale béarnaise font autorité dans le domaine.
              </p>

              <p>
                Nous avons également intégré les contributions récentes d&apos;historiens comme 
                <strong> Claudine Pailhès</strong> pour les aspects généalogiques et dynastiques, 
                ainsi que des ressources multimédias comme les documentaires de 
                <strong> Francis Pailhès</strong> pour une approche plus accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-parchemin-fonce">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-parchemin p-6 rounded-lg border border-or-patine">
                <div className="font-titre text-3xl text-or-patine mb-2">{stat.nombre}</div>
                <div className="font-corps text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className="py-16 bg-parchemin">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl text-vert-mousse mb-4">
              Ressources Principales
            </h2>
            <p className="font-corps text-lg text-brun-terre max-w-2xl mx-auto">
              Découvrez les ouvrages, documents et médias qui ont nourri ce projet 
              et qui constituent les références essentielles sur l&apos;histoire du Béarn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ressources.map((ressource, index) => (
              <ResourceCard
                key={index}
                titre={ressource.titre}
                auteur={ressource.auteur}
                type={ressource.type}
                description={ressource.description}
                annee={ressource.annee}
                lien={ressource.lien}
                details={ressource.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Remerciements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="font-titre text-3xl text-vert-mousse mb-8">
              Remerciements
            </h2>
            
            <div className="prose prose-lg max-w-none text-left">
              <p className="font-corps text-gray-700 leading-relaxed mb-6">
                Ce projet n&apos;aurait pas été possible sans le travail pionnier des historiens 
                et chercheurs qui ont consacré leur vie à l&apos;étude du Béarn. Nous tenons 
                particulièrement à souligner l&apos;apport fondamental de :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-parchemin-fonce p-6 rounded-lg text-center">
                  <h4 className="font-titre text-xl text-vert-mousse mb-2">Pierre Tucoo-Chala</h4>
                  <p className="font-corps text-gray-600 text-sm">
                    Historien spécialiste du Béarn médiéval
                  </p>
                </div>
                <div className="bg-parchemin-fonce p-6 rounded-lg text-center">
                  <h4 className="font-titre text-xl text-vert-mousse mb-2">Claudine Pailhès</h4>
                  <p className="font-corps text-gray-600 text-sm">
                    Archiviste et historienne des Foix-Béarn
                  </p>
                </div>
              </div>

              <p className="font-corps text-gray-700 leading-relaxed">
                Nous remercions également les institutions qui ont facilité l&apos;accès 
                aux archives et documents nécessaires à cette recherche, ainsi que 
                tous les passionnés d&apos;histoire qui, par leurs travaux et partages, 
                contribuent à faire vivre la mémoire du Béarn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-parchemin-fonce">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-titre text-3xl text-vert-mousse mb-6">
            Contribuer au Projet
          </h2>
          <p className="font-corps text-lg text-brun-terre mb-8 max-w-2xl mx-auto">
            Vous disposez d&apos;informations, documents ou corrections concernant l&apos;histoire du Béarn ? 
            Votre contribution est la bienvenue pour enrichir ce travail collectif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-or-patine text-white px-8 py-3 rounded-lg font-corps font-medium hover:bg-brun-terre transition-colors"
            >
              Proposer une correction
            </a>
            <a 
              href="/suggestions"
              className="border-2 border-brun-terre text-brun-terre px-8 py-3 rounded-lg font-corps font-medium hover:bg-brun-terre hover:text-white transition-colors"
            >
              Soumettre une ressource
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}