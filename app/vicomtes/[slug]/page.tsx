// app/vicomtes/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const vicomtesData = {
  "centulle-iv": {
  "titre": "Centulle IV",
  "surnom": "le Vieux",
  "dates": "vers 1020 – 1058",
  "lignee": "Maison de Centulle",
  "description": "Vicomte de Béarn entre 1020 et 1058, Centulle IV, dit le Vieux, consolida durablement la puissance béarnaise en s’appuyant sur un solide patrimoine centré sur le Vic-Bilh, foyer ancestral de sa lignée. Héritier de Gaston II, il récupéra pacifiquement la vicomté d’Oloron, d’abord co-dirigée avec un bâtard local, avant d’en devenir seul maître à la mort de celui-ci. Son règne marqua un tournant : la seigneurie béarnaise, jadis tournée vers Toulouse, s’ouvrit désormais vers l’Espagne et les royaumes hispano-chrétiens, suivant les routes de Compostelle et de Vézelay. Engagé dans des conflits constants avec les Dacquois et les seigneurs voisins, il détacha en 1056 le vassal de Salies pour affermir son autorité. Il fut finalement tué par les Souletins en 1058.",
  "image": "/images/vicomtes/centulle-iv-detail.jpg",
  "biographie": "Centulle IV renforça l’unité territoriale du Béarn en intégrant Oloron et en développant un axe d’échanges religieux et commerciaux vers la péninsule Ibérique. Son action, à la charnière du monde gascon et des royaumes espagnols, fit du Béarn un acteur stratégique du piémont pyrénéen. Son assassinat par les Souletins en 1058 mit fin à un règne d’expansion et de transition politique.",
  "faitsMarquants": [
    "Succède à Gaston II vers 1020 et gouverne jusqu’à sa mort en 1058.",
    "Récupère la vicomté d’Oloron sans conflit, puis l’intègre pleinement au Béarn.",
    "Oriente le Béarn vers les sociétés hispano-chrétiennes et les routes de Compostelle.",
    "Entre en guerre contre Dax et ses alliés ; détache le vassal de Salies en 1056.",
  ],
  "alliances": "Partenariats politiques avec les seigneurs d’Oloron et ouverture vers les royaumes chrétiens d’Espagne.",
 
"contexte": "Sous Centulle IV, la vicomté connaît un recentrage territorial autour du Vic-Bilh et d’Oloron, tout en s’ouvrant vers les sociétés hispano-chrétiennes. Les tensions frontalières avec Dax et la Soule témoignent de la fragilité des équilibres politiques locaux.",
  "heritage": "Sous Centulle IV, le Béarn s’émancipe de la sphère toulousaine et amorce son orientation méridionale vers la Navarre et l’Aragon, posant les bases de son expansion médiévale."
},
"centulle-v": {
  "titre": "Centulle V le Jeune",
  "dates": "1058–1090",
  "surnom": "le Jeune",
  "lignee": "Maison de Centulle",
  "description": "Vicomte réformateur et bâtisseur de l’indépendance béarnaise, Centulle V consolide le pouvoir local, réforme l’administration et renforce l’alliance religieuse et politique avec Cluny et Rome.",
  "image": "/images/vicomtes/centulle-v-detail.jpg",
  "biographie": "Fils de Gaston III, mort avant de régner seul, et marié d’abord à Gisla, il épouse en 1079 Béatrix de Bigorre, avec l’appui du pape Grégoire VII. Partisan de la réforme grégorienne, il réside à Lescar pour pénitence, fonde un prieuré à Morlaàs, favorise l’ordre clunisien et bat monnaie. Il étend son autorité sur la Soule, accorde des franchises à Montory et rattache Saint-Pé à Tarbes. Militairement, il soutient puis affronte Sanche Ramírez d’Aragon, participe aux campagnes pyrénéennes. ",
  "faitsMarquants": [
    "Partisan de la réforme grégorienne et allié du pape Grégoire VII.",
    "Fonde Morlaàs et y introduit l’ordre clunisien.",
    "Fait battre monnaie, symbole de souveraineté béarnaise.",
    "Participe à des campagnes aragonaises, meurt assassiné en 1090."
  ],
  "alliances": "Marié à Béatrix de Bigorre (alliance Béarn–Bigorre) ; alliance religieuse avec Cluny et politique avec le Saint-Siège.",
  "contexte": "Période d’affaiblissement du pouvoir comtal aquitain et montée des principautés pyrénéennes autonomes. L’influence clunisienne et la réforme grégorienne renforcent les liens entre religion et politique dans le sud-ouest.",
  "heritage": "Centulle V établit les fondations de l’indépendance béarnaise, une monnaie propre et un pouvoir vicomtal affirmé. Il lègue à son fils Gaston IV un Béarn centralisé, fidèle à Rome et reconnu comme entité souveraine."
}
,
"gaston-iv": {
  "titre": "Gaston IV",
  "surnom": "le Croisé",
  "dates": "1090 – 1131",
  "lignee": "Maison de Centulle",
  "description": "Vicomte de Béarn entre la fin du XIe et le début du XIIe siècle, Gaston IV, surnommé le Croisé, incarna la puissance féodale et spirituelle du Béarn médiéval. Guerrier, diplomate et homme de foi, il sut allier croisade, réforme et expansion territoriale tout en maintenant la cohésion de ses terres.",
  "image": "/images/vicomtes/gaston-iv-detail.jpg",
  "biographie": "Marié avec une princesse aragonaise, il reçut probablement la vicomté de Montaner en dot. Il répondit à l’appel du pape Urbain II, aux côtés de Raymond de Saint-Gilles. Il dirigea les troupes gasconnes lors du siège de Jérusalem et protégea la population locale après la victoire. À son retour, il fonda à Lescar des bâtiments religieux pour remercier Dieu. Lors de la reconquista, à Saragosse, il organisa le siège et fut nommé seigneur de la ville. Il prit part à la conquête de Tarazona, Calatayud et Daroca, fondant la Militia Christi. Il établit la ville de Monreal et assura son développement. En 1131, il est décapité par les Almoravides près de Grenade, sa tête fut exposée à Valence, puis restituée à Saragosse.",
  "faitsMarquants": [
    "Épouse Talèse d’Aragon (1085) et renforce les liens entre Béarn et Aragon.",
    "Participe à la première croisade : Nicée, Antioche, Jérusalem (1096–1099).",
    "Fonde des établissements religieux à Lescar, Sauvelade et Mifaget.",
    "Dirige le siège de Saragosse (1118) et devient seigneur de la ville.",
    "Crée la Militia Christi, confrérie militaire inspirée du Saint-Sépulcre.",
    "Poursuit la Reconquista : prend Tarazona, Calatayud et Daroca (1120–1130).",
  ],
  "alliances": "Son mariage avec Talèse d’Aragon lia durablement le Béarn à la couronne d’Aragon. Proche d’Alphonse Ier le Batailleur, il devint l’un des principaux soutiens de la Reconquista et un médiateur entre les royaumes chrétiens d’Espagne.",
"contexte": "Le tournant des XIe et XIIe siècles correspond à l'époque des croisades, un moment où l’Europe féodale se consolide tout en s’ouvrant à une dimension spirituelle et guerrière sans précédent. Le Béarn, jusque-là principauté montagnarde aux marges du duché de Gascogne, s’intègre alors pleinement aux grands courants de la chrétienté occidentale. La vicomté s’ouvre vers le sud et participe à la défense de la foi sur deux fronts. Dans le même temps, les réformes ecclésiastiques issues de Cluny pénètrent le Béarn, réorganisant la vie religieuse autour des chapitres, des prieurés et des hôpitaux pour pèlerins. Le Béarn devient un carrefour d’influences entre la Gascogne, l’Aragon et la Navarre, où se croisent marchands, chevaliers et pèlerins de Compostelle."
, "heritage": "Son engagement croisé et son alliance avec l’Aragon font du Béarn un intermédiaire entre Gascogne et Espagne. Ses fondations religieuses structurent le paysage spirituel du pays. Ses croisades inscrit le nom des vicomtes de Béarn dans l’histoire mondiale."
},

"talese-d-aragon": {
  titre: "Talèse d’Aragon",
  surnom: "la Régente",
  dates: "1090 – 1137",
  lignee: "Maison de Centulle",
  description: "Sœur du roi Sanche Ramírez d’Aragon et épouse de Gaston IV de Béarn, Talèse d’Aragon fut une figure majeure du XIe–XIIe siècle, liant durablement le Béarn au royaume d’Aragon par le mariage, la diplomatie et la religion.",
  image: "/images/vicomtes/talese-d-aragon-detail.jpg",
  biographie: "Probablement dame de la vicomté de Montaner, Talèse joue un rôle central dans l’administration du Béarn, surtout durant les absences de son mari. Ensemble, ils construisent des fondations religieuses et des hôpitaux pour les pauvres et les pèlerins. Veuve, Talèse devient régente du Béarn pour son fils, puis pour son petit-fils. Opposé à Ramire le Moine, elle perd des fiefs mais conserve l’appui de Raymond-Bérenger IV, qui lui confirme en 1137 des droits sur Huesca, Bespen et la basilique du Pilar.",
  faitsMarquants: [
    "1085 : mariage avec Gaston IV de Béarn",
    "1101 : fondation du chapitre et de l’hôpital de Lescar",
    "1128 : fondation du prieuré de Sauvelade, rattaché à Sainte-Christine du Somport",
    "1137 : confirmation de ses fiefs par Raymond-Bérenger IV, comte de Barcelone"
  ],
  alliances: "Mariée à Gaston IV de Béarn ; sœur du roi Sanche Ramírez d’Aragon ; cousine germaine d’Alphonse Ier d’Aragon ; mère de Centulle VI et grand-mère de Pierre III de Gabarret.",
  contexte: "Talèse évolue à une époque de fortes interactions entre le Béarn, la Navarre et l’Aragon, marquée par la Reconquista et l’influence croissante des dynasties pyrénéennes. Son action contribue à renforcer les liens entre la vicomté béarnaise et la couronne d’Aragon, notamment à travers la religion, la diplomatie et la tutelle féodale.",
  heritage: "Talèse d’Aragon laisse un héritage politique et religieux durable : elle a consolidé les alliances trans-pyrénéennes, fondé des institutions religieuses majeures et transmis au Béarn une tradition d’autonomie alliée à l’influence aragonaise."
},

"marie": { 
  "titre": "Marie de Béarn", 
  "dates": "1170 – 1173",
  "surnom": "la Pieuse",
  "lignee": "Maison de Gabarret", 
  "description": "Fille de Pierre III de Gabarret et sœur de Gaston V, Marie de Béarn fut la première vicomtesse à placer durablement le Béarn sous l’influence du royaume d’Aragon. Femme de devoir et de piété, elle servit de lien décisif entre les traditions gasconnes et la culture catalano-aragonaise. Son règne, bien que bref, marqua un tournant dans l’histoire féodale du Béarn.", 
  "image": "/images/vicomtes/marie-detail.jpg", 
  "biographie": "À la mort de son frère Gaston V, Marie de Béarn se rendit humblement à Jaca, tête nue, le 30 avril 1170, pour prêter serment de fidélité au roi d’Aragon pour le Béarn. En échange, celui-ci lui promit sa protection contre tous hommes et toutes femmes qui se dresseraient contre elle. En garantie, Marie lui remit plusieurs forteresses en gage. Restant fidèle à son engagement, elle épousa Guillaume-Raymond III de Montcada en 1171. En 1173, elle se retira de la vie politique et entra en religion.", 
  "faitsMarquants": [
    "1170 : Serment de fidélité prêté à Alphonse II d’Aragon à Jaca, acte qui rattache officiellement le Béarn à la sphère aragonaise.",
    "1171 : Mariage avec Guillaume-Raymond III de Montcada, puissant seigneur catalan choisi par le roi d’Aragon.",
    "1173 : Retrait de la vie publique et entrée au monastère de Sainte-Croix de Montesquieu-Volvestre, confiant la régence à l’Aragon.",
    "Fondation de la lignée des Moncade de Béarn, qui dominera la politique trans-pyrénéenne des décennies suivantes."
  ],
  "alliances": "Alliance matrimoniale et politique avec la Maison de Montcada et le royaume d’Aragon sous Alphonse II.",
  "contexte": "Le XIIᵉ siècle est une période d’intenses rivalités féodales dans le sud-ouest de la France. Le Béarn, pris entre l’influence anglaise d’Aquitaine et la puissance montante du royaume d’Aragon, cherche à garantir sa sécurité. Par son mariage et son serment, Marie oriente résolument la vicomté vers la sphère catalano-aragonaise, renforçant les liens au-delà des Pyrénées.",
  "heritage": "Marie de Béarn laisse un héritage durable : elle scelle l’alliance entre le Béarn et l’Aragon et fonde la dynastie des Moncade. Son geste politique inaugure une période de coopération et de tutelle aragonaise qui marquera profondément les vicomtes de Béarn jusqu’au XIIIᵉ siècle."
}

 
  // ... autres vicomtes
};

export default function VicomteDetailPage({ params }: Props) {
  const vicomte = vicomtesData[params.slug as keyof typeof vicomtesData];
  
  if (!vicomte) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-4">
              {vicomte.titre}
            </h1>
            <p className="font-corps text-2xl text-brun-terre mb-2">{vicomte.dates}</p>
            <p className="font-corps text-lg text-gray-700">{vicomte.lignee}</p>
          </div>
        </div>
      </section>
      
      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="float-right ml-8 mb-4 w-64">
                  <img 
                    src={vicomte.image} 
                    alt={vicomte.titre}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                <h2 className="font-titre text-3xl text-vert-mousse mb-6">Biographie</h2>
                <p className="font-corps text-gray-700 leading-relaxed mb-6">
                  {vicomte.biographie}
                </p>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Faits marquants</h3>
                <ul className="font-corps text-gray-700 space-y-3 mb-8">
                  {vicomte.faitsMarquants.map((fait, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-or-patine mr-3 mt-1">•</span>
                      <span>{fait}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Alliances et descendance</h3>
                <p className="font-corps text-gray-700 leading-relaxed mb-8">
                  {vicomte.alliances}
                </p>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Héritage</h3>
                <p className="font-corps text-gray-700 leading-relaxed">
                  {vicomte.heritage}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Fiche technique */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Fiche technique</h3>
                <dl className="font-corps text-gray-700 space-y-3">
                  <div>
                    <dt className="font-semibold">Règne</dt>
                    <dd>{vicomte.dates}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Lignée</dt>
                    <dd>{vicomte.lignee}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Surnom</dt>
                    <dd>{vicomte.surnom}</dd>
                  </div>
                </dl>
              </div>
              
              {/* Navigation */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Navigation</h3>
                <div className="space-y-3">
                  <a href="/vicomtes" className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    ← Retour aux vicomtes
                  </a>
                  <a href={`/lignees/${vicomte.lignee.split(' ').pop()?.toLowerCase()}`} 
                     className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    Voir la lignée {vicomte.lignee.split(' ').pop()} →
                  </a>
                </div>
              </div>
              
              {/* Période */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-2">Contexte historique</h3>
                <p className="font-corps text-gray-700 text-sm">
               {vicomte.contexte}   </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'centulle-iv' },
    { slug: 'gaston-iv' },
    { slug: 'gaston-febus' },
    { slug: 'henri-iv' }
  ];
}