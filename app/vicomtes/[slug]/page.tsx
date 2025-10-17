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
},
"gaston-vi": {
  "titre": "Gaston VI",
  "dates": "1173– 1214",
  "surnom": "le Bon",
  "lignee": "Maison de Moncade",
 "description": "Vicomte diplomate pris entre Aragon, Aquitaine et la Croisade albigeoise, Gaston VI défend l’indépendance béarnaise tout en servant la politique aragonaise.",
  "image": "/images/vicomtes/gaston-vi-detail.jpg",
  "biographie": "En 1187, il rend hommage au roi Alphonse II d’Aragon pour le Béarn. Il se marie avec Pétronille de Comminges, héritière de Bigorre, réorganise ses domaines en échangeant Mixe et Ostabarret contre Orthez et assure la paix avec la Soule. Aux côtés de son suzerain Pierre II d’Aragon, il prend part à la croisade albigeoise. Accusé d’alliance avec les hérétiques, il est deux fois excommunié, mais reste fidèle à la foi catholique et veille à l’ordre ecclésiastique en Béarn. Après pénitence, le pape l’absout. Il meurt sans héritier direct ; la Bigorre revient alors à son épouse, et le Béarn à son frère Guillaume-Raymond.",
  "faitsMarquants": [
   "Échange territorial : Orthez contre Mixe et Ostabarret.",
    "Participe à la croisade albigeoise, défenseur de Toulouse.",
    "Excommunié politiquement mais jamais hérétique.",
  ],
  "alliances": "Alliance aragonaise forte (Alphonse II et Pierre II d’Aragon) ; relations avec Toulouse et Comminges ; tensions avec Simon de Montfort et la papauté.",
  "contexte": "Début du XIIIe siècle marqué par l’expansion des croisés du Nord en Occitanie, la puissance du royaume d’Aragon dans les Pyrénées et la montée de la papauté contre les princes méridionaux.",
  "heritage": "Dernier grand vicomte béarnais impliqué dans la politique occitane ; il défend l’autonomie du Béarn durant la tourmente de la croisade albigeoise et prépare l’ascension de son frère Guillaume-Raymond puis de Gaston VII."
}
,
"guillaume-raymond": {
  "titre": "Guillaume-Raymond",
  "dates": "1214 – 1224",
  "surnom": "le Repenti",
  "lignee": "Maison de Moncade",
  "description": "Frère jumeau de Gaston VI de Béarn, Guillaume-Raymond de Moncade incarne la transition du Béarn vers la maison catalane des Moncade. Seigneur énergique et parfois brutal, il marque la vicomté par d’importantes réformes institutionnelles et par son rôle dans les luttes d’influence entre la France et l’Aragon au début du XIIIe siècle.",
  "image": "/images/vicomtes/guillaume-raymond-moncade.jpg",
  "biographie": "Il épouse Guillemette de Castelviel, héritière de Rosanès et Martorell, et hérite des droits de sa famille sur Lérida et Tarragone. En 1194, il assassine l’archevêque de Tarragone, son oncle par alliance, ce qui provoque son excommunication et son exil. Après des années de pénitence, il obtient le pardon du pape Innocent III en 1215. Ensuite, il s’allie à la Couronne d’Aragon contre les Montfort et défend les intérêts béarnais. En 1216, il reprend Lourdes aux croisés et soutient Pétronille de Bigorre. En Béarn, il consolide l’autorité vicomtale en réformant les Fors. Fatigué et décidé à expier définitivement son crime, il prépare un pèlerinage en Terre Sainte mais meurt à Oloron, léguant la vicomté à son fils.",
  "faitsMarquants": [
   "1194 : assassinat de l’archevêque de Tarragone et exil prolongé en France.",
    "1216 : reprend le château de Lourdes aux troupes de Simon de Montfort et défend la Bigorre.",
    "1220–1221 : codifie les Fors de Morlaàs et d’Ossau, stabilisant la législation béarnaise."
  ],
  "alliances": "Marié à Guillemette de Castelviel (Maison de Castelviel de Rosanès). Alliances politiques avec la Couronne d’Aragon et le comte Sanche de Roussillon.",
  "contexte": "Le Béarn se trouve alors à la croisée des ambitions aragonaises, anglaises et françaises. Après la défaite de Muret (1213), Guillaume-Raymond tente de maintenir l’autonomie béarnaise tout en s’appuyant sur les rois d’Aragon pour contrer la mainmise des Croisés de Montfort.",
  "heritage": "Guillaume-Raymond laisse au Béarn une structure juridique consolidée et une tradition d’autonomie. Son fils, Guillaume II de Moncade, poursuit cette politique dans un contexte d’apaisement et de recentrage aragonais vers la Méditerranée."
}

 ,"guillaume-ii": {
  "titre": "Guillaume II",
  "dates": "1224-1229",
  "surnom": "le Croisé des Baléares",
  "lignee": "Maison de Moncade",
  "description": "Fils de Guillaume-Raymond Ier de Moncade et de Guillemette de Castelviel, Guillaume II fut à la fois seigneur catalan et vicomte de Béarn. Élevé à la cour d’Aragon, il incarna la double identité pyrénéenne de sa lignée, partagée entre Catalogne et Béarn.",
  "image": "/images/vicomtes/guillaume2-detail.jpg",
  "biographie": "En 1225, il prit possession de la vicomté tout en restant actif dans la politique aragonaise. Impliqué dans les intrigues autour de Jacques Iᵉʳ, il combattit à Valence en 1226 avant de se réconcilier avec la Couronne. En 1228, il rendit hommage à Henri III d’Angleterre pour ses terres gasconnes, marquant le retour du Béarn dans la mouvance gasconne. Peu après, il rejoignit la flotte de Jacques Iᵉʳ et mena l’assaut sur les Baléares. À la tête du navire amiral, il tomba héroïquement lors du débarquement de Portopi en 1229. Son corps fut inhumé à Santes-Creus, sous un tombeau orné des armes des Moncade et des vaches du Béarn.",
  "faitsMarquants": [
 "1226 : Participe à la campagne contre les musulmans de Valence et aux troubles de cour d’Aragon.",
    "1228 : Rend hommage à Henri III d’Angleterre à Captieux pour ses terres gasconnes.",
    "1229 : Dirige le navire amiral lors de la conquête des Baléares ; meurt héroïquement à Portopi.",
    "Inhumé à Santes-Creus, panthéon royal d’Aragon-Catalogne."
  ],
  "alliances": "Maison d’Aragon, Couronne d’Angleterre (hommage féodal, 1228), lignage catalan des Moncade et Castelviel.",
  "contexte": "Sous son règne, la France capétienne consolide son pouvoir au sud, tandis que la Couronne d’Aragon oriente sa politique vers la Méditerranée (conquête de Majorque et Valence). Le Béarn retrouve une position intermédiaire entre Gascogne anglaise et royaumes ibériques.",
  "heritage": "Guillaume II de Moncade, dernier vicomte catalan du Béarn, symbolise la fin du rêve d’un État trans-pyrénéen. Sa mort à Portopi consacre le passage du Béarn d’un espace aragonais vers une autonomie gasconne."
},
"gaston-vii": {
  "titre": "Gaston VII",
  "dates": "1229 – 1290",
  "surnom": "le Révolté",
  "lignee": "Maison de Moncade",
  "description": "Dernier grand vicomte indépendant du Béarn médiéval, Gaston VII consolida le pouvoir béarnais tout en jonglant entre la suzeraineté anglaise, aragonaise et castillane. Chef énergique et orgueilleux, il affirma durablement l’autonomie du Béarn dans un contexte de rivalités féodales intenses.",
  "image": "/images/vicomtes/marie-detail.jpg",
  "biographie": "Né vers 1229, Gaston VII de Béarn, issu de la maison de Moncade, succéda à son père et hérita d’un Béarn lourdement endetté. Il vendit ses domaines catalans, transféra la capitale de Morlaàs à Orthez et y installa son administration. En 1240, il rend hommage au roi d’Angleterre pour confirmer la vassalité du Béarn tout en gardant son autonomie. Il sert Henri III lors de la campagne du Poitou, puis se révolte pendant la guerre gasconne. Il cherche l’appui de la Castille, s’y rallie un temps, puis revient aux Anglais après le traité de Tolède. Il livre sa fille en otage pour prouver sa fidélité, reçoit des faveurs royales, puis se soulève encore. Fait prisonnier, il doit jurer loyauté, mais recommence, insultant même Édouard Iᵉʳ au Parlement de Paris avant d’être enfermé à Winchester et voir le Béarn saisi. Finalement pardonné, il sert loyalement la couronne anglaise, combat les Gallois et accueille Édouard Iᵉʳ en Béarn. Il participe au traité d’Oloron, organise la succession de ses filles et confirme la vassalité du Béarn. Il meurt en 1290 à Sauveterre, laissant un État fort et farouchement indépendant.",
  "faitsMarquants": [
    "Transfert de la capitale béarnaise de Morlaàs à Orthez et fortification du pays (Sauveterre, Bellocq, Roquefort).",
    "Participation à la campagne du Poitou (1242) et à la guerre gasconne contre Henri III (1245-1254).",
    "Multiples révoltes contre la tutelle anglaise : 1255, 1273, 1274, 1276 et 1279.",
    "Fondation du couvent des Cordeliers à Mont-de-Marsan (1260) et signature du traité d’Oloron (1289)."
  ],
  "alliances": "Lié successivement aux rois d’Angleterre Henri III et Édouard Iᵉʳ, à Alphonse X de Castille et à Alphonse III d’Aragon. Alliances matrimoniales avec les maisons de Foix, d’Allemagne et de Moncade.",
  "contexte": "XIIIᵉ siècle marqué par les luttes féodales entre Plantagenêts, Capétiens et royaumes ibériques. Le Béarn se trouve entre Gascogne anglaise et Aragon, cherchant à préserver son autonomie politique et judiciaire (Fors de Béarn).",
  "heritage": "Son règne consolida la centralisation du pouvoir vicomtal, fixa Orthez comme capitale et assura l’indépendance de fait du Béarn malgré la vassalité anglaise. Par ses filles, la dynastie se rattacha à la maison de Foix, ouvrant la voie à l’union future du Béarn et du Comté de Foix."
},


  "marguerite": {
    "titre": "Marguerite de Béarn",
    "dates": "1290 – 1319",
    "surnom": "la Diplomate",
    "lignee": "Maison de Moncade",
    "description": "Héritière des Moncade et fille de Gaston VII de Béarn, Marguerite de Béarn fut l’une des plus fortes personnalités politiques du Béarn médiéval. Par son mariage avec Roger-Bernard III de Foix, elle unit durablement le Béarn et le comté de Foix, tout en maintenant l’indépendance du pays face aux rois de France et d’Angleterre.",
    "image": "/images/vicomtes/marie-detail.jpg",
    "biographie": "Marguerite épousa en 1257 Roger-Bernard III de Foix. À la mort de son père, elle dut défendre sa succession contre sa sœur. Le partage de 1286 lui attribua le Béarn et le Marsan, mais ce testament fut contesté, déclenchant de longues guerres entre Foix-Béarn et Armagnac. Ensuite veuve, elle est administratrice du Béarn et de Foix. Refusant l’arbitrage royal, elle fit appel au pape et au roi d’Angleterre Édouard Iᵉʳ, obtenant son soutien contre les Capétiens. Elle régla aussi les successions familiales en Catalogne et négocia pour restituer les domaines des Moncade à son fils. Marguerite refusa toujours l'hommage promis par son père aux anglais, préservant l’autonomie du Béarn.",
    "faitsMarquants": [
      "Union du Béarn et du comté de Foix par son mariage avec Roger-Bernard III (1287)",
      "Refus de toute vassalité formelle envers les rois de France et d’Angleterre",
      "Conflit avec son fils Gaston Ier (1312), arbitré en sa faveur par les barons béarnais",
      "Maintien du Béarn comme puissance autonome entre Capétiens, Armagnacs et Plantagenêts"
    ],
    "alliances": "Épouse de Roger-Bernard III de Foix ; mère de Gaston Ier de Foix-Béarn ; alliée des rois d’Angleterre Édouard Ier et Édouard II ; en relation diplomatique avec Jacques II d’Aragon.",
    "contexte": "Marguerite vécut à une époque où le sud-ouest de la France était le théâtre d’une lutte d’influence entre la monarchie capétienne et la couronne d’Angleterre. Le Béarn, juridiquement autonome, servait de zone tampon entre ces deux puissances et les royaumes ibériques. La politique de Marguerite fut guidée par la préservation des libertés béarnaises et par un jeu d’équilibre diplomatique face à ces grandes monarchies.",
    "heritage": "Marguerite de Moncade laissa un héritage décisif : elle consolida l’union du Béarn et du comté de Foix, renforça les liens avec l’Aragon grâce à ses origines catalanes, et affermit la souveraineté béarnaise."
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