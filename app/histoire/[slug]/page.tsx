import { notFound } from 'next/navigation';
import ExpandableSection from './ExpandableSection';

import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = histoireData[params.slug as keyof typeof histoireData]

  if (!data) {
    return {
      title: "Page non trouvée – Mémoire du Béarn",
    }
  }

  return {
    title: `${data.titre} – ${data.periode} | Mémoire du Béarn`,
  }
}

const histoireData = {
  // 'antiquite': {
  //   titre: "Peuple des Venarni",
  //   periode: "Antiquité",
  //   resume: "Les premières traces de peuplement dans les Pyrénées béarnaises.",
  //   introduction: "Le Béarn antique voit naître les premières communautés organisées...",
  //   image: "/images/histoire/antiquite.jpg",
  //   sections: [
  //     {
  //       titre: "Conquête du Béarn",
  //       contenu: (
  //         <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
  //           <p>
  //             Les populations protohistoriques vivaient de chasse, d’élevage et de commerce
  //             trans-pyrénéen. Leur culture se rattache aux peuples aquitains.
  //           </p>
  //         </div>
  //       )
  //     },
  //     {
  //       titre: "Arrivée des Vicomtes",
  //       contenu: (
  //         <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
  //           <p>
  //             Le territoire était structuré autour de clans, avec des échanges avec la
  //             Gascogne et la Navarre.
  //           </p>
  //         </div>
  //       )
  //     },
  //   ]
  // },
    'haut-moyen': {
    titre: "Formation du Béarn", 
    periode: "Moyen Age",
    resume: "Le Béarn naît d’une autonomie ancienne, forgée entre foi et féodalité",
    introduction: "Aux origines du Béarn, une autonomie singulière…",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Béarn – Préhistoire et Origines",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Le Béarn reposait historiquement sur deux diocèses : Lescar, héritière de l’ancienne cité gallo-romaine de Beneharnum, et Oloron, issue de Illuro, qui avaient une existence fragile durant le haut Moyen Âge et furent même absorbées entre le VIIIᵉ et le XIᵉ siècle dans un « évêché des Gascons », conséquence des invasions vascones puis normandes. Lors de la restructuration épiscopale, le titre d’évêque de Lescar remplaça celui de Beneharnum : le Béarn était désormais considéré comme une entité territoriale cohérente.
            </p>
          </div>
        )
      },
      {
        titre: "Création du nouveau vicomté",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
             Vers 980, le vicomte de Béarn est très probablement assassiné dans la viguerie de Pau–Lescar par Loup Fort, chevalier de Serre-Castet. Celui-ci agit par obligation de serment envers le comte, mais étant aussi lié par serment au vicomte, il doit ensuite faire pénitence.
Après cet épisode, Guillaume Sanche confie volontairement le titre de vicomte non pas au puissant viguier de Pau, mais au viguier du Vic-Bilh, jugé moins urbain et donc moins dangereux politiquement.
On peut penser qu’un accord a été trouvé entre Loup Fort et Gaston/Centulle : l’un devient viguier urbain, l’autre vicomte.
Après son meurtre et sa repentance, Loup Fort est probablement envoyé en mission vers la fin du millénaire par le duc de Gascogne et l’évêque Artus Racca. Il fonde alors un monastère à Lescar, futur évêché.
            </p>
          </div>
        )
      },
       {
        titre: "Qu’est-ce qu’une vicomté ?",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Entre le Xe et le XIIᵉ siècle, le titre de vicomte ne désigne pas un souverain autonome, mais un délégué du comte, dépourvu de pouvoir territorial propre.
Il agit par délégation comtale, comme le viguier, qui représente lui aussi le comte. Le vicomte n’est alors que le premier parmi ses pairs, sans autorité militaire ni frontière définie : il coordonne plus qu’il ne gouverne.
Quand certaines vicomtés deviennent trop puissantes, les comtes imposent des baillis pour limiter leur autonomie, comme à Toulouse.
Lorsqu’il n’y a qu’un seul viguier, il devient de fait vicomte, sans que cela change réellement son statut.
À Tartas, par exemple, le viguier cumule le titre de vicomte tout en restant inférieur à celui de Dax, qui dispose pourtant de plusieurs viguiers.
Certains viguiers font des choix diplomatiques en se rapprochant d’une vicomté plus puissante, parfois par guerre, pour renforcer leur influence.  </p>
          </div>
        )
      },
       {
        titre: "Béarn féodal",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           Après les incursions vikings du IXᵉ siècle, les Francs cessent d’intervenir en Gascogne.
En 977, Guillaume Sanche renforce son pouvoir par son mariage avec une princesse de Pampelune qui réside à Palestrion à Saint-Sever.
Son frère Gombaud, comte d’Agen et évêque de toute la Gascogne occidentale (regroupant les évêchés de Bayonne, Oloron, Lescar, Dax) joue un rôle central.
Austinde, archevêque d’Auch, agit indépendamment de Cluny, réformant la partie orientale.
Le centre politique se déplace vers Saint-Sever et le Tursan, où se tiennent les plaids (assemblées judiciaires et politiques).
À la même époque, la vicomté de Dax fonctionne avec un viguier mais sans vicomte local.
Après la bataille de Taller (vers 982), les seigneurs gascons forment une fédération militaire pour résister aux derniers raids normands.
Le chef gascon siège à Saint-Sever, au château Palestron, capitale régionale.
Certaines institutions s’écartent du modèle féodal classique comme la cour d’Escoures-des-Chaînes à Lembeye,  la cour Desaldour à Licharre.
Ces cours rurales refusent le schéma féodal hiérarchisé et restent attachées à la tradition casalaire (autonomie des maisons et communautés, sans hommage rendu dans un château).
Ces structures, parfois qualifiées d’“abbayes laïques”, conservent un fonctionnement particulier, surtout au sud de l’Adour.  </p>
          </div>
        )
      },
       {
        titre: "Social",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Le Béarn se distingue par une forte identité casalère, fondée sur l’autonomie des maisons (casaux). Cette particularité pousse souvent la Gascogne à surveiller de près la région.
Contrairement à d’autres territoires centralisés, le Béarn présente une dispersion institutionnelle avec le vicomte qui réside à Morlaàs, l’évêque à Lescar, le viguier à Pau. Cette répartition reflète un équilibre social et politique original, caractéristique du Béarn médiéval. </p>
          </div>
        )
      },
      {
        titre: "Barcelone",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          La région de Barcelone, première reprise aux musulmans par les Carolingiens à la fin du VIIIᵉ siècle, faisait partie de l’Empire carolingien puis du royaume de France. Au IXᵉ siècle, le comté de Barcelone, centre de la Marca Hispanica, se fragmente en petites unités. Menacé par al-Mansur, le comte Borell fit appel à Hugues Capet (élu roi en 987), mais ce dernier ne répondit pas : Barcelone fut détruite en 989.
Borell reconstruit la ville et rompt toute dépendance envers les rois de France, posant les bases de l’autonomie catalane.
Dès le XIᵉ siècle, Barcelone s’impose comme puissance régionale grâce à sa prospérité économique et à son influence politique, absorbant progressivement les autres comtés catalans. </p>
          </div>
        )
      },
    ]
  },
  'moyen-age': {
    titre: "Montée des Vicomtés",
    periode: "Moyen Age",
    resume: "Le Béarn s’affirme entre alliances, réformes et indépendance",
    introduction: "Entre foi, pouvoir et conquêtes, le Béarn s’élève…",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Action du comte",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         En 1022, Sanche Guillaume fonde un monastère à Saint-Pé de Générès, en Béarn près de la Bigorre. Il y réunit comtes et vicomtes, dont celui de Bigorre, tourné vers l’Aragon et la Navarre, puis place le monastère, la ville et le château sous l’autorité de l’Église de Lescar.
À ce moment, le viguier de Lescar est déplacé à Pau, probablement parce que son influence devenait trop forte.
En 1032, Sanche Guillaume Mitarra meurt sans héritier direct et est enterré à Saint-Julien de Lescar. Une grande lutte de succession éclate alors entre les Armagnacs (alliés au Béarn) et les Poitiers, qui finissent par l’emporter, étendant encore leur influence sur la région. </p>
          </div>
        )
      },
      {
        titre: "Alliances Gasco-Catalane",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
             De l’autre côté des Pyrénées, Sancho el Mayor meurt à son tour : l’Aragon revient à Ramire Ier (1035), tandis que la Castille échoue à Ferdinand Ier (1037).
Sanche VI Guillaume, issu de la même famille que Sancho el Mayor, roi d’Aragon, de León, de Castille et lié à Toulouse, accompagna à plusieurs reprises ce dernier dans ses campagnes contre les musulmans.
Après Ramire Ier d’Aragon, qui avait allié sa dynastie aux Catalans du comté d’Urgell, l’expansion vers Barbastro débute au début des années 1060.
Huesca devient alors un enjeu majeur : son évêque y est assassiné traîtreusement par un musulman.
Sous son successeur, Sanche Ramírez, une grande expédition est lancée en 1064, prêchée par le pape Alexandre II : c’est la croisade de Barbastro.
Dans ce contexte, le Béarn, grâce au col du Somport, devient une plaque tournante essentielle assurant la liaison entre la France et les royaumes chrétiens d’Espagne.
Guillaume VIII d’Aquitaine, allié aux Catalans et au comte d’Urgell, participe à l’expédition, mais elle se solde par un échec.
            </p>
          </div>
        )
      },
        {
        titre: "Relations avec l'Espagne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Le roi de Castille, de son côté, adopte une autre stratégie : il préfère soumettre les musulmans par tribut plutôt que par conquête.
Sanche Ramírez, pour renforcer son autorité, fait de l’Aragon un vassal de Saint-Pierre, impose la liturgie romaine et, à la demande du pape, épouse Félicie de Roussillon.
Toutefois, il refuse une guerre systématique contre les musulmans, privilégiant la négociation et traitant même avec Guillaume VIII d’Aquitaine, pourtant favorable à une nouvelle croisade.
En 1076, Sanche Ramírez récupère la plus grande partie du royaume de Navarre.
En Castille, après une crise de succession, Alphonse VI monte sur le trône.
Éduqué auprès d’un prince musulman, il écrivait parfois en arabe et se présentait comme « l’empereur des deux religions ».
Une fois roi, il relance l’expansion castillane, soutenu par Cluny, puissant ordre religieux, et par les parias, tributs versés par les rois musulmans pour acheter la paix.
Alphonse VI exploite habilement la rivalité entre les taifas, s’alliant à certains pour en affaiblir d’autres, ce qui lui permet de pousser la frontière castillane du Duero jusqu’au Tage.
            </p>
          </div>
        )
      },
      {
        titre: "Consolidation du pouvoir",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Entre 1020 et 1058, Centulle IV s’appuie sur un solide patrimoine familial centré sur le Vic-Bilh, foyer d’origine de sa lignée, notamment autour d’Escures. Il récupère sans guerre la vicomté d’Oloron, dirigée conjointement avec un bâtard jusqu’à la mort de ce dernier, moment où la vicomté revient totalement au seigneur béarnais. Cette unification oriente désormais le Béarn, jusque-là tourné vers Toulouse, vers les royaumes hispano-chrétiens au sud.
            </p>
          </div>
        )
      },
        {
        titre: "Politique ecclésiastique et alliances matrimoniales",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Fils d’Adélaïs et de Gaston III, Centulle V (règne 1058–1090) consolide le pouvoir du Béarn. Marié d’abord à Gisla, il a un fils, Gaston IV, avant d’épouser en 1079 Béatrix de Bigorre, jeune héritière du comté. Ce mariage, arrangé par l’abbé Amat et Bernard de Marseille, légat du pape, vise à étendre l’influence béarnaise. Le pape Grégoire VII, partisan de la réforme grégorienne, oblige Centulle à répudier Gisla pour consanguinité. Il salue cependant Centulle comme défenseur des pauvres et propagateur de la paix. Grâce à cette union, Centulle devient comte de Bigorre et obtient le soutien militaire du roi d’Aragon Sanche Ramírez, qui préfère renforcer cette alliance plutôt que voir la Bigorre passer sous l’autorité d’un rival plus puissant. Installé au château de la Hourquie, Centulle contrôle ainsi les cols pyrénéens, véritable atout stratégique.
            </p>
          </div>
        )
      },
      {
        titre: "Expansion territoriale et affirmation du pouvoir",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Profitant de la disparition d’Étienne de Mauléon, Centulle s’impose en Soule, obtenant du vicomte Guillaume VIII les honores souletins et concluant une conventio d’inféodation. La justice béarnaise s’étend à ce territoire : le Souletin promet son aide et accepte cette suzeraineté. Centulle, désormais aussi vicomte de Mauléon, accorde des franchises à Montory sur le modèle du for d’Oloron. Vers 1079, il fonde un prieuré à Morlaàs, qu’il remet à Cluny, acte de pénitence pour son mariage consanguin. Ce geste marque aussi la naissance de Morlaàs comme centre religieux et politique. Parallèlement, Centulle fait construire un château à Lescar, où il s’installe, transformant la ville en capitale du Béarn entre 1079 et 1110.
            </p>
          </div>
        )
      },
       {
        titre: "Indépendance politique et conflits ecclésiastiques",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Sous l’influence clunisienne et grâce à la Reconquista, Centulle fait battre monnaie, la monnaie centullienne, symbole d’une souveraineté régalienne. Cette émission, réalisée sans l’accord d’un comte supérieur, affirme l’indépendance béarnaise. Mais ses relations avec l’Église se tendent : il expulse l’évêque Bernard de Basse de Lescar (mort en 1080), transfère Saint-Pé de l’évêché de Lescar à celui de Tarbes, et entre en conflit sur plusieurs affaires religieuses, notamment l’inhumation de Raymond de Bartrès (1083). Il impose son autorité en Bigorre, après la soumission de Sanche de Labarthe, et obtient treize otages en garantie de fidélité. En 1082, il subit une défaite face à Dax, mais conserve l’essentiel de son influence. Entre-temps, Oloron gagne en importance avec un viguier local et la création d’une poblacion (1080).
            </p>
          </div>
        )
      },
       {
        titre: "Dernières campagnes et mort de Centulle",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Vers la fin de son règne, Centulle entre en guerre contre le roi d’Aragon Sanche Ramírez. Les troupes aragonaises ravagent la région, tandis que Richard et Guillaume de Soulom occupent Cauterets. Un duel judiciaire ordonné par Centulle rétablit les droits du monastère de Saint-Savin. Sous la médiation d’Alphonse VI de Castille et de Gui-Geoffroi de Poitiers, Centulle doit finalement prêter hommage au roi d’Aragon (vers 1089), tout en maintenant la suzeraineté française sur la Bigorre. Il obtient du duc douze conduits le long des vallées des gaves, renforçant son contrôle économique. Peu après, il s’éloigne de l’Aquitaine pour se rapprocher davantage de l’Aragon, participant à plusieurs campagnes dans les vallées de Tena et du Gállego. C’est au cours de l’une d’elles, au printemps 1090, qu’il est assassiné dans la vallée de Tena. À sa mort, l’union personnelle Béarn–Bigorre prend fin, Gaston IV hérite de la vicomté de Béarn, tandis que Bernard puis Centulle, fils de Béatrix, gouvernent successivement le comté de Bigorre.
            </p>
          </div>
        )
      },
    ]
  },
  'pelerin': {
    titre: "Pélerinage Armé", 
    periode: "Moyen Age",
     resume: "Foi, pouvoir et croisade au cœur du Béarn médiéval",
    introduction: "Gaston IV unit ferveur et indépendance souveraine...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Contexte historiques",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              À Alcoraz, où Pierre Ier d’Aragon affronta al-Musta‘în de Saragosse, chaque camp comptait environ 20 000 hommes. Le roi chrétien fit recenser les champions : sept musulmans et huit chrétiens. Voyant l’équilibre, il s’écria que la journée lui serait favorable. Le combat fut acharné, aucun ne reculant ; mais une unique charge chrétienne rompit les rangs musulmans, provoquant leur déroute. Huesca tomba alors aux mains des Aragonais. Al-Turtûshî décrit également une tactique musulmane défensive : des fantassins accroupis, protégés par des écus et des lances fichées au sol, appuyés par des archers d’élite et une cavalerie de soutien. Les assaillants subissent d’abord flèches et javelots, puis se heurtent aux pointes, avant la contre-attaque. Un témoin de Tortosa aurait vu cette formation résister, sauf lorsqu’un soldat rompit la ligne et fut aussitôt abattu par un cavalier chrétien.
            </p>
          </div>
        )
      },
      {
        titre: "Mariage et alliances politiques",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           En 1085, Gaston IV épouse Talèse d’Aragon, sœur du roi Sanche Ramírez, recevant probablement en dot la vicomté de Montaner.
En 1090, il affronte les seigneurs de Dax et de Soule.
Homme de foi, il manifeste sa piété en assistant à la dédicace de l’église de Saint-Pé-de-Geyres, suivant l’exemple paternel prônant « justice et paix ». Son mariage le rapproche de la famille royale d’Aragon : sa cousine est l’épouse de Pierre Ier d’Aragon, qui scelle une alliance politique. </p>
          </div>
        )
      },
       {
        titre: "Contexte religieux et appel à la croisade",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           En 1095, le pape Urbain II lance l’appel de Clermont, invitant les chrétiens à un pèlerinage armé. Gaston s’engage, non par ambition, mais par dévotion.
Pierre Ier, roi d’Aragon, n’y participe pas : le pape considère que lutter contre les musulmans d’Espagne équivaut à partir en Terre sainte. Il refuse même à l’archevêque de Tolède le départ en croisade. Pierre s’empare alors de Huesca (victoire d’Alcoraz, 1096), aidé par des contingents béarnais, un an avant la prise de Tarragone par les Catalans aux côtés d’un certain Alphonse, futur roi, qui soutient ensuite le Cid à Valence. À cette époque, les châtelains dominent la société.
L’Église tente de canaliser leur violence par la paix de Dieu (protection des femmes, enfants, clercs), et la trêve de Dieu (interdiction de combattre certains jours). La croisade devient un exutoire religieux et social : les seigneurs peuvent satisfaire leur ardeur guerrière tout en apaisant les tensions internes de l’Europe. Gaston part ainsi avec son frère, le comte de Bigorre, et de nombreux Gascons, rejoignant l’armée du comte de Toulouse Raymond de Saint-Gilles, puisque Guillaume d’Aquitaine renonce à l’expédition. Pendant son absence, son épouse Talèse administre le Béarn avec un conseil de seigneurs.
 </p>
          </div>
        )
      },
       {
        titre: "Départ en croisade et itinéraire",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Le légat pontifical Adémar de Monteil conduit l’armée du Midi (1096–1097), tandis que d’autres contingents (Normands, Lotharingiens) partent par la Dalmatie.
En route, les croisés sont attaqués par des populations locales. À Salonique, Adémar tombe de sa mule, l’expédition continue sans lui. Accueillis hostilement par les Byzantins, les croisés s’emparent des remparts en criant « Toulouse ». Certains refusent de se rendre à Constantinople, malgré les négociations entre l’empereur Alexis Comnène et Raymond. Gaston attend à Rhaedestos avec son frère, puis rejoint Robert de Normandie et Étienne de Blois : leur mot d’ordre, « Nous y allons pour Rome ! ».
 </p>
          </div>
        )
      },
       {
        titre: "Les grandes batailles",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Tout d'abord pendant le siège de Nicée, les croisés trouvent une situation semblable à la Reconquista : les musulmans sont divisés. Les Turcs seldjoukides, fondateurs du sultanat de Roum, souffrent de rivalités internes. Grâce aux machines de siège byzantines, Nicée capitule le 19 juin 1097. Ensuite, la bataille de Dorylée, où l'avant-garde normande est surprise ; Bohémond envoie un messager à Raymond et Gaston, qui accourent. Par une tactique défensive, les croisés repoussent les Seldjoukides. Cette victoire permet à Constantinople de survivre jusqu’au XVe siècle. Puis, la traversée de l’Anatolie avec les croisés qui souffrent de faim et de soif, se nourrissant de plantes épineuses.
           </p>
          </div>
        )
      },
      {
        titre: "Siège et prise d’Antioche",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Le 14 octobre 1097, l’armée se scinde. Gaston et Raymond prennent la route de l’Arménie (repos et soutien chrétien). Le 20 octobre, ils atteignent Antioche, immense cité de 400 tours. Le siège dure huit mois ; Gaston assure la garde alternée des fortifications (Malregard, Mahomerie). En décembre, le légat meurt lors d’une sortie turque. Gaston et Raymond recrutent alors des charpentiers à Saint-Siméon pour construire des machines de siège. Grâce à une trahison, Bohémond s’empare de la ville. Le 28 juin 1098, Gaston dirige les troupes de Raymond contre Kerbogha de Mossoul et remporte la victoire.
           </p>
          </div>
        )
      },
       {
        titre: "Fin de la croisade et retour en Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Après Antioche, Gaston accompagne Baudouin de Boulogne à Édesse, tandis que Raymond et Bohémond s’affrontent pour le pouvoir. Gaston poursuit loyalement la route vers Jérusalem.  La ville, gouvernée par les Fatimides d’Égypte (vizir Badr), est attaquée en juin 1099. Le 3 juin, Gaston atteint Ramla, puis avance vers Jérusalem. Tancrède s’empare de Bethléem. Le 13 juin, un premier assaut échoue à cause du poison dans les puits. Gaston organise alors les travaux de siège. Le 14 et 15 juillet, les croisés pénètrent dans la ville ; Tancrède et Gaston placent leurs bannières sur les réfugiés pour les protéger du massacre. Après la conquête, Gaston sert Godefroy de Bouillon. Le 12 août 1099, il participe à la victoire d’Ascalon, bien que la ville reste aux musulmans faute d’accord entre Godefroy et Raymond. En septembre 1099, Gaston quitte la Terre sainte, embarque à Laodicée avec le comte de Flandre et le duc de Normandie, regagnant Constantinople, puis le Béarn. À son retour, il fonde une maison hospitalière à Lescar, destinée aux pèlerins de Saint-Jacques, en remerciement à Dieu qui l’a protégé. 
          </p>
          </div>
        )
      },

      

    ]
  },
   'reconquista': {
    titre: "Le Béarn en mode Reconquista", 
    periode: "Moyen Age",
     resume: "Entre piété et ambition, le Béarn s’engage dans la Reconquista",
    introduction: "Gaston IV poursuit son élan de foi affirmant le rayonnement du Béarn...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      
        {
        titre: "Piété et Réformes religieuses",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          En 1101, Gaston IV de Béarn et son épouse Talèse installent à la cathédrale de Lescar, autour de l’évêque Sanche, un chapitre de chanoines suivant la règle de Saint-Augustin. Ce geste manifeste leur piété et leur volonté d’affirmer leur foi, notamment après le retour de Gaston de la croisade à Jérusalem. Le 21 avril 1101, sur l’instigation de l’archevêque d’Auch, ils fondent à Lescar, avec l’accord de l’évêque, un hôpital destiné aux pauvres et aux pèlerins. Pour son entretien, ils lui attribuent des redevances dans le Vic-Bilh et les revenus de plusieurs églises locales (Caresse, Assat, Bordes). Le 6 avril 1102, à Pâques, ils renouvellent leur piété en accordant au même hôpital le droit de percevoir un péage sur une passerelle à Lescar. Le propriétaire des terres devait fournir des juments pour le labour et du blé, recevant en échange une rente versée à la Toussaint et à la foire. Le même jour, Gaston et Talèse transfèrent à la cathédrale de Lescar leurs droits de justice et les revenus de toute la paroisse. Au début de 1102, après la naissance de leur fils Centulle V, Gaston effectue une nouvelle donation pour le prieuré clunisien de Sainte-Foy « pro Centullo filio meo » (pour mon fils Centulle). Il confirme ses donations précédentes et y ajoute la dîme sur les ventes de vin et de viande à Morlaàs, le dixième des revenus des vignes vicomtales et les cinq sous morlans perçus lors du « cursus equorum », joute équestre organisée à la Toussaint. Ces dons traduisent une volonté d’unir foi, héritage et prestige seigneurial. Le 19 février 1102, dans le cloître de Sainte-Foy, Gaston et Talèse signent un privilège d’ingénuité en faveur des habitants de Morlaàs, les plaçant sous leur protection directe. Ce geste marque une étape vers la création du futur « For » du Béarn, fondement des libertés locales. Dans cet esprit de dévotion, Gaston se qualifie lui-même de « pécheur Gaston, vicomte de Béarn ».  Face à la violence des chevaliers, l’Église instaure la Paix de Dieu, renforcée par les décisions du concile de Latran. Les combats sont désormais interdits les mercredis et mardis, sauf jours fériés, tandis que les seigneurs pouvaient toujours traverser les Pyrénées pour lutter contre les infidèles. Gaston, accompagné de ses châtelains, rejoint Bernard, comte d’Armagnac, à l’église de Diusse. En présence de Sanche, évêque de Lescar, ils confirment leur adhésion aux prescriptions de l’archevêque d’Auch en faveur de la paix et de la trêve. Malgré cette pacification religieuse, Gaston poursuivra ses combats contre Dax et Soule, occupant même les régions de Mixe et Ostabaret.
          </p>
          </div>
        )
      },

       {
        titre: "La Croisade et la Péninsule Ibérique",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Pendant ce temps, l’Aragon, jadis comparable au Béarn, s’était fortement accru. Avec la prise de Huesca, la péninsule Ibérique entre véritablement dans l’ère des croisades. Tandis que les chevaliers d’Occident partaient vers Jérusalem, le pape Urbain II rappelle que le combat contre les musulmans en Espagne valait autant spirituellement que celui en Terre sainte. En 1095, les Catalans, menacés de perdre Tarragone, reçoivent cette même indulgence : Urbain II affirme que les croisés espagnols bénéficient des mêmes grâces que ceux de Palestine. Ainsi, le combat sur la péninsule devient une croisade reconnue.  Pierre Ier d’Aragon poursuit ses conquêtes après Huesca : en 1100, il prend Barbastro, puis Bolea. En 1101, il fait vœu de croisade, prêt à partir vers Jérusalem, mais décide finalement de se concentrer sur l’Aragon pour s’emparer de Saragosse et ouvrir un chemin vers la Méditerranée. Il mène un raid dans la haute vallée de l’Èbre, prend Pueyo, et campe devant Saragosse avec deux légats pontificaux. Il baptise son camp Juslibol (déformation de Deus lo volt, « Dieu le veut »), reprenant le cri des croisés. Pour la première fois, la croix devient symbole militaire sur sol ibérique, consacrant Pierre Ier comme « el rey cruzado ». La mort de Pierre Ier en 1104, à seulement 36 ans, bouleverse l’Aragon. Son fils unique, marié à la fille du Cid, est mort sans descendance. Son frère cadet, Alphonse, non destiné au trône (il devait devenir moine à Sahagún), devient roi par hasard. Son mariage en 1109 avec Urraque, héritière de Castille, devait unir les royaumes ibériques, mais cette union échoue : Urraque, veuve du comte de Galice, a déjà un fils, le futur Alphonse VII, et le tempérament autoritaire d’Alphonse Ier mène à une mésentente durable.
         </p>
          </div>
        )
      },

       {
        titre: "Croisade en Espagne et expansion aragonaise",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       En 1109, de nombreux seigneurs français, dont Guillaume IX d’Aquitaine et le comte de Toulouse, rejoignent l’Espagne pour combattre les musulmans. L’expédition échoue à la bataille de Valtierra (1110), face à l’émir almoravide de Cordoue. Malgré cet échec, les liens entre croisés français et royaumes ibériques se renforcent. L’Aragon, sous Alphonse 1er, devient une base arrière pour les croisés restés en Europe, accueillant chevaliers et colons étrangers. Les rois ibériques encouragent cette implantation, offrant terres et privilèges aux nouveaux venus pour défendre les conquêtes chrétiennes. D'ailleurs, la plus grande défaite chrétienne de cette période survient à la bataille d’Uclés en 1108, où Sanche, fils du roi Alphonse VI de Castille, trouve la mort. Cet échec porte un coup très dur à la Castille et renforce la pression musulmane sur la péninsule. Profitant de cette faiblesse, Alphonse Ier d’Aragon, dit le Batailleur, accroît son influence dans la vallée de l’Èbre et lance plusieurs offensives. En 1110, il s’empare de Saragosse, avec l’appui d’une coalition aragonaise et navarraise, réalisant ainsi l’un des grands rêves de son frère défunt, Pierre Ier. Ce succès est soutenu par le pape Pascal II, qui, suivant la politique de ses prédécesseurs, accorde aux croisés d’Espagne les mêmes indulgences spirituelles que ceux partant pour Jérusalem. Les conquêtes ibériques prennent alors une valeur religieuse équivalente à celles de la Terre sainte, renforçant la ferveur des combattants. Dans ce contexte de croisade ibérique, les rois, tels qu’Alphonse Ier d’Aragon, favorisent l’installation de nouveaux colons et chevaliers étrangers. En échange d’un service armé, ces hommes reçoivent des terres et des privilèges. Ainsi, en 1106, des Castillans venus de Valladolid apportent leur aide aux Catalans pour verrouiller Balaguer, sur les rives du Segre, renforçant la frontière chrétienne. La mort d’Alphonse VI de Castille bouleverse l’équilibre politique de la péninsule. Son gendre, Alphonse Ier d’Aragon, en profite pour devenir une figure centrale de la Reconquista. Alphonse VI avait laissé son héritage à sa fille Urraca, veuve du comte de Galice, Raymond de Bourgogne. En épousant Alphonse Ier d’Aragon, elle réunit momentanément sous une seule autorité les royaumes de Castille, Léon, Galice, Aragon et Navarre, formant une puissance sans précédent. Face à cette progression chrétienne, le roi musulman al-Musta‘in de Saragosse, inquiet, s’allie aux Almoravides pour freiner l’avance d’Alphonse Ier. Ensemble, ils lancent des raids dévastateurs contre les frontières aragonaises et navarraises, notamment autour de Tudèle et Olite. En réponse, Alphonse Ier organise une contre-attaque vigoureuse vers ces zones frontalières. 
         </p>
          </div>
        )
      },

       {
        titre: "Réseaux féodaux et alliances",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Alphonse Ier s’appuie sur un vaste réseau féodal, constitué de troupes venues de Castille, de Navarre et d’Aragon, mais aussi sur de nombreuses familles nobles franco-ibériques appelées les Francos. Parmi ces alliés, Gaston IV de Béarn occupe une position essentielle. Par ses possessions, ses alliances et son prestige, il fait le lien entre les Pyrénées, la Gascogne et les royaumes d’Espagne. Ce système, fondé sur la féodalité et les lignages imbriqués, forme un réseau politique complexe et efficace comme la fille de Talèse et Gaston qui épouse Pierre, vicomte de Gabaret, seigneur apparenté aux puissantes familles des Miramont. De plus, Gaston IV entretient d’excellents rapports avec son frère Centulle de Bigorre, compagnon d’armes de la Première Croisade. Par ce lien, Gaston garde un contact étroit avec la noblesse des Pyrénées centrales, notamment celle du Lavedan, qu’il peut mobiliser en cas de conflit. Les mariages entre familles béarnaises, aragonaises et castillanes s’inscrivent dans un cadre plus large de coopération entre les royaumes ibériques et la noblesse capétienne française. L’exemple de la reine Urraca de Castille, fille d’Alphonse VI et de Constance de Bourgogne (issue de la haute noblesse française), illustre cette fusion des dynasties. Ces unions créent de véritables ponts politiques et culturels entre la France et les royaumes d’Espagne, consolidant la dimension européenne de la Reconquista.
          </p>
          </div>
        )
      },

       {
        titre: "Rupture entre Urraca et Alphonse Ier",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         À partir de 1110–1111, la situation politique ibérique change profondément. L’union entre Urraca de Castille et Alphonse Ier d’Aragon, censée unir leurs royaumes, se transforme rapidement en rivalité ouverte. Les deux souverains s’affrontent militairement, chacun cherchant à dominer l’autre. Soutenue par une partie de la noblesse castillane, Urraca lutte pour préserver son autorité face aux ambitions d’Alphonse Ier, qui souhaite maintenir son contrôle sur le Léon et la Galice. Ces affrontements tournent à une quasi guerre civile castillano-aragonaise, affaiblissant durablement les deux royaumes. Entre 1111 et 1114, les combats se multiplient et la noblesse se divise en factions. Le pouvoir d’Alphonse Ier s’en trouve fragilisé, plusieurs de ses alliés se détournant de lui. Dans ce climat de tension, Gaston IV de Béarn joue un rôle de médiateur diplomatique : il tente d’apaiser les conflits tout en défendant les frontières pyrénéennes. Le Béarn devient alors une zone tampon, un espace de stabilité dans un monde fragmenté par la guerre. Vers 1114, Alphonse Ier se détourne des querelles internes pour reprendre la Reconquista contre les royaumes musulmans du sud. Il lance une série de campagnes culminant en 1118 avec la prise de Saragosse, victoire majeure qui renforce son prestige, même si la tension avec Urraca persiste. Dans le même temps, le Béarn continue d’être un modèle de stabilité : Gaston IV maintient un réseau féodal solide fondé sur les casaux, les vesins et les abbayes laïques, institutions propres à la société béarnaise. Ce système assure au vicomte une base sociale stable et bien organisée, contrastant avec l’instabilité du monde féodal environnant.
          </p>
          </div>
        )
      },

       {
        titre: "Offensives et préparation de Saragosse",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Après avoir consolidé leur pouvoir sur Valence, les Almoravides cherchent à bloquer la progression d’Alphonse Ier. Depuis Monzón, le roi d’Aragon tente de rallier le célèbre Cid Campeador pour contrer leur expansion.
Valence contrôle alors les principales routes stratégiques : vers l’est (Lérida, Tortosa) et vers l’ouest (Saragosse via Calamocha et DarocaMais la prise de Morella en 1117, peut-être suivie de celle de Belchite, affaiblit le dispositif almoravide et ouvre la voie aux troupes chrétiennes. Pour sa nouvelle expédition, Alphonse Ier mobilise l’ensemble de ses forces aragoneses et navarraises, aidé par des contingents catalans et par le vicomte de Béarn, Gaston IV, qui met à sa disposition Centulle de Bigorre et plusieurs chevaliers gascons. Les troupes se rassemblent dans la plaine de l’Èbre, près d’Ayerbe, autour des Mallos de Riglos. Tous les châteaux des environs, jusqu’à Gormaz et Sibirana, sont placés en état d’alerte. Une fois Morella conquise, les chrétiens lancent une offensive vers Lérida (Lleida). C’est alors qu’Ali ben Yusuf, émir almoravide, débarque en Espagne pour la troisième fois le 22 juin 1117. Conscient de la gravité de la situation, il ordonne au gouverneur de Cordoue de rassembler les troupes musulmanes pour soutenir Tamin et Abd-Mazli. Selon certaines chroniques arabes, les Almoravides infligent une lourde défaite aux chrétiens, causant jusqu’à 10 000 morts. D’autres sources estiment toutefois qu’Alphonse Ier aurait évité un affrontement direct, jugeant la bataille trop risquée. Un document d’archives atteste sa présence à Saragosse le 8 juillet 1117, aux côtés de Gaston et Centulle, où il fit don de l’église Santas Missas, située hors des murs, à celle de Jaca. Après cette campagne, l’armée béarno-aragonaise se replie en ravageant la plaine fertile (la huerta) de Saragosse, une ville qui possède des fortifications presque aussi solides que Jérusalem. Gaston IV retourne ensuite en Béarn pour préparer l’offensive décisive de 1118. Cette campagne de 1117, bien que coûteuse, a un rôle stratégique préparatoire : elle isole Saragosse de Valence, mais une simple attaque frontale ne suffit pas : il faut envisager un long siège, avec famine stratégique pour affaiblir les défenseurs. Peu après son élection, le pape Gélase II réunit un concile à Toulouse le 24 janvier 1118. S’y rassemblent prélats des deux versants des Pyrénées : archevêques d’Arles et d’Auch, évêques de Lescar, Bayonne, Pampelune et Barbastro. Le concile confirme que l’expédition contre Saragosse est une croisade, avec les mêmes indulgences que celles d’Orient. Gaston IV, fort de son expérience des croisades orientales, est choisi pour organiser le siège. Il accueille dans le Béarn des contingents venus du nord des Pyrénées, notamment via Somport, passage stratégique entre France et Espagne.
          </p>
          </div>
        )
      },

       {
        titre: "La conquête de Saragosse",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      L’entrée dans Saragosse fut un exploit, mais la prise complète s’avéra longue et difficile, très fortifiée, peuplée et déterminée, la cité, avait été profondément transformée sous Auguste, dotée d’une muraille solide et d’un plan urbain romain rectangulaire, conservé par les Wisigoths puis renforcé par les musulmans. Ces derniers entretenaient minutieusement l’enceinte, ouverte au nord sur le pont Bab al-Qantarat, qui franchissait l’Èbre avant son confluent avec le Huerva et d’où partaient les routes vers Huesca et Lérida. Le port fluvial s’étendait entre le pont et le confluent. À l’intérieur, les chrétiens mozarabes vivaient au nord-ouest, près de l’ancienne cathédrale Santa Maria Virgen, tandis que les gouverneurs musulmans occupaient deux résidences : la zuda, entre la porte de Tolède et celle du pont, et une autre à l’angle opposé. Malgré le plan romain, la ville avait l’aspect d’une médina : mosquées, bains, alcaicería, maisons en pisé aux patios intérieurs. Les faubourgs s’étendaient hors les murs, notamment au sud vers la route de Daroca, avec caravansérail, mosquée, hôpital et cimetière, protégés par un rempart de terre délimitant l’aljama et l’église des Santas Misas, où les chrétiens honoraient les martyrs saragossains. Près de la route de Tudèle, les Banû Hûd édifièrent au XIᵉ siècle l’Aljafería. Les chroniques françaises exaltent Gaston IV de Béarn, à sa tête, seigneurs gascons et espagnols franchissent les Pyrénées pour libérer l’Église opprimée. Les faubourgs sont vite pris, les Sarrasins se retranchent derrière les murs, abandonnant richesses et vivres. Les chrétiens établissent vingt campements fortifiés encerclant la ville et coupent progressivement l’accès à l’eau et au ravitaillement. Gaston, à la tête des forces françaises et gasconnes, agit de concert avec Alphonse Ier, qui commande les armées aragonaises, navarraises et catalanes, dirigeant l’ensemble militaire et politique, tandis que Gaston joue un rôle spirituel reconnu par la papauté. Malgré les sorties des défenseurs, le blocus les affame. Après dix mois de siège, le 18 décembre 1118, Saragosse capitule. Alphonse Ier entre dans la ville et Gaston IV prend possession du quartier de l’Azuda. La conquête transforme Saragosse en capitale chrétienne, siège d’un nouvel archevêché et symbole de la victoire de la foi en Aragon. Alphonse nomme alors Gaston seigneur de Saragosse.    </p>
          </div>
        )
      },

       {
        titre: "Prise de Tudèle",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Après la prise de Saragosse, le cœur de la moyenne vallée de l’Èbre tombe aux mains des chrétiens, mais les communications vers la Navarre et la Castille restent coupées par des garnisons musulmanes, notamment à Tudèle et Tarazona. Gaston de Béarn, dit le Croisé, participe à la répartition des terres conquises et reçoit un fief à Uncastillo, tandis que son demi-frère et d’autres Béarnais obtiennent également des terres dans la région. Autour de Saragosse, la progression chrétienne se poursuit vers Alcañiz et le bassin du Jiloca, avec la prise de Daroca et de Calatayud. Et il s'ensuit une opération conjointe des vainqueurs de Saragosse, réunissant des Normands (Rotrou du Perche, Robert Burdet, Gautier de Gerville, Rainaud de Bailleul) et des Pyrénéens, dont Gaston IV de Béarn, Gui de Lons (évêque de Lescar), Centulle de Bigorre, Pierre de Gabarrère et Arnaud de Lavedan. Et Rotrou prit la ville grâce à une ruse militaire, il aurait feinté une déroute pour attirer les défenseurs hors des murs, mais cette version est discutée, car elle n’est confirmée par aucune source normande. Rotrou conserva Tudèle en fief d’Alphonse Ier d’Aragon, tandis que Gaston reçut Uncastillo, preuve du rôle actif des Béarnais dans les campagnes aragonaises. Un autre Béarnais, Pèlerin, entra au service du roi d’Aragon et reçut lui aussi un fief, établissant une lignée durable en Aragon. Les travaux de Pierre Boissonade confirment la participation importante des Gascons et des Béarnais, bien que l’élite militaire normande domine la chronique.
          </p>
          </div>
        )
      },
  {
        titre: "Campagne contre les Almoravides",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Les campagnes de 1120 et 1121 placent à nouveau les Béarnais au premier plan, après un temps d’éclipse derrière les Normands. Gaston IV de Béarn joue un rôle décisif aux côtés du roi Alphonse Ier le Batailleur : il encourage la poursuite de la Reconquista après la victoire de Cutanda (18 juin 1120), une bataille restée célèbre par l’expression « pire que Cutanda ». Gaston mène personnellement des expéditions en Celtibérie, prend Tarazona, y rétablit la cathédrale, puis conquiert Bilbilis (Calatayud) et Daroca, villes stratégiques au sud de Saragosse. Il repeuple ces cités, accorde des privilèges religieux et fonde un couvent des Chevaliers du Saint-Sépulcre à Montréal, inspiré des ordres de Terre Sainte. Mais, face à ces défaites, Ali ben Yusuf (le Miramolin) rassemble une armée almoravide considérable : Arabes, Zénètes, Berbères, Mesmouda, milices andalouses et chefs venus de tout al-Andalus. Sept rois musulmans y participent, dont le caïd d’Alméria. En réaction, Alphonse Ier fait appel à de nouveaux renforts : Gascons, Béarnais, Bigourdans, Normands et le puissant Guillaume IX d’Aquitaine, duc de Gascogne et de Poitou. Guillaume, désireux de regagner son prestige après avoir refusé la première croisade, rassemble une armée nombreuse de six cents chevaliers issus de Saintonge, Limousin, Périgord et Gascogne : Raimond de Turenne, Aimar d’Archiac, Guillaume d’Heugas, Robert de Tartas, Amanieu d’Albret, Pierre de Mugron, Bertrand de Bayonne, etc. Ils rejoignent Gaston de Béarn et Alphonse le Batailleur pour une grande offensive. L’arrivée de cette coalition chrétienne précipite la défaite almoravide. Après Cutanda (1120) et la prise de Calatayud, la frontière aragonaise s’étend vers le sud, créant une nouvelle marche appelée « l’Extramadure aragonaise », porte ouverte vers la Castille et Valence. Alphonse Ier consolide son pouvoir : il accorde à Calatayud un fuero (charte) en 1130, administre la région de Barbastro à Uncastillo, et transforme la mosquée de Saragosse en cathédrale (1120), en maintenant toutefois des relations apaisées avec la population musulmane restée sur place et la découverte miraculeuse des reliques de saint Bráulio par l’évêque Pierre de Librana, près de la porte Santa María la Mayor, renforce encore la dimension spirituelle de la reconquête. 
          </p>
          </div>
        )
      },

        {
        titre: "Les confréries et la naissance des ordres militaires",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      Dans ce climat, Gaston propose la création d’un ordre militaire inspiré des Chevaliers du Saint-Sépulcre, la Militia Christi, qui devait défendre les terres reconquises et favoriser la christianisation. Gaston fonde Monreal, confiée à ces Chevaliers des Palmes, dont le nom et l’emblème rappellent Jérusalem. Le roi d’Aragon leur attribua un vaste territoire montagneux encore peu occupé. Comme les chevaliers du Saint-Sépulcre, ils étaient dispensés de toute autre obligation militaire que la lutte contre l’Islam et conservaient leur butin. En 1122, dans le même esprit, Alphonse Ier fonda la Confrérie des Chevaliers de Belchite, bénie par Gui de Lons, évêque de Lescar et compagnon du roi et de Gaston. Belchite, déjà occupée avant la chute de Saragosse, servit de refuge à des aventuriers devenus défenseurs disciplinés du christianisme. Leur objectif était « d’ouvrir la route de Jérusalem et de libérer l’Église captive », en visant les territoires musulmans de Tortosa, Murcie et Almería. Les membres se divisaient en perpétuels, liés par les vœux de chasteté, pauvreté et obéissance, et en temporaires, engagés pour une durée limitée. L’Église, autrefois méfiante envers la guerre, intégrait désormais l’idée que le combat pouvait servir Dieu. Ce mouvement annonçait la création des Templiers, Hospitaliers et Teutoniques, mais ses racines se trouvent en Aragon et en Béarn. Les projets de Gaston et d’Alphonse anticipaient ce modèle, sans fonder de véritables moines-soldats, ils inventèrent une forme de laïcs voués temporairement à la guerre sainte. Ce n’est qu’en 1119, avec Hugues de Payens, que naquirent les Pauvres Chevaliers du Christ, futurs Templiers. Sous l’influence de Saint Bernard de Clairvaux, en 1128, ils devinrent un véritable ordre religieux, inspirant ensuite les Hospitaliers. Gaston et Alphonse avaient donc précédé cette révolution spirituelle, proposant un modèle ibérique et béarnais du combattant chrétien. Dès 1119, Belchite fut confiée à Galindo Sanchez, qui mena ses « chevaliers des palmes » au combat aux côtés de Gaston le Croisé. Cette organisation s’inscrivait dans le contexte bouillonnant suivant la victoire d’Alphonse Ier à Cutanda, il fallait fortifier les territoires conquis face aux Almoravides. Le roi multiplia alors les campagnes entre Aragon et Castille, fortifia Soria, réorganisa les évêchés et installa des colons à Daroca et Calatayud. La création de l’Hermandad de Belchite, confirmée par une assemblée d’évêques et d’archevêques, témoigne du contrôle ecclésiastique sur cette entreprise.
         </p>
          </div>
        )
      },
  {
        titre: "Relations politiques et dernières campagnes",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          En 1123, Alphonse Ier quitta Belchite pour se rendre en Béarn, après un séjour à Lérida, où ses ambitions s’opposaient à celles du comte de Barcelone, Ramon Bérenguer III.
Ce dernier avait passé un accord avec le gouverneur musulman Abifilel, plaçant Lérida sous sa protection en échange d’un futur établissement aux Baléares. Alphonse, ne voulant pas compromettre ses alliances, abandonna le projet catalan et se dirigea vers le Somport, où il rendit visite à Gaston de Béarn à Morlaàs. Cette rencontre, à la fois amicale et politique, marqua leur volonté commune de contrer les ambitions de Barcelone et de préserver l’équilibre des forces pyrénéennes. En 1124, Gaston ne résidait plus en Béarn mais en Aragon, accompagné de son épouse Talèse et de leur fils Centulle. Une charte de cette année atteste qu’il céda à Arnaud de Lavedan une propriété à Saragosse, transaction confirmée par Centulle.
Cette mention situe la famille dans la capitale du royaume aragonais, tandis qu’Alphonse Ier menait encore campagne en Navarre, en Ribagorce, en Castille et jusqu’à l’Extramadure aragonaise. Au printemps 1124, le roi poursuivit ses expéditions : attesté à Daroca en mars, à Logroño en mai, puis à Monreal del Campo en septembre pour installer des colons. En hiver, il lança une audacieuse expédition vers le sud, un raid jusqu’à la Peña Cadiella, reliant les huertas de Valence et Murcie, confirmant son ardeur militaire et la continuité de la reconquête. Le frère du roi d’Aragon, Pierre Ier, avait autrefois assiégé Huesca, aidé par le Cid et le jeune Alphonse. Devenu « roi de l’Extramadure aragonaise », ce dernier concrétisa enfin son projet de confrérie de Belchite : ouvrir au christianisme la route vers la Palestine en sécurisant le littoral de Valence. Il s’y rendit avec Gaston de Béarn, Gui de Lons, Rotrou du Perche, plusieurs chevaliers normands et aragonais, ainsi que l’évêque béarnais de Saragosse, Pierre de Librana. Ce fut sans doute la première expédition de la confrérie, symbole d’une alliance totale entre foi, guerre et fraternité pyrénéenne. Après avoir repoussé une contre-attaque ennemie au col de la Peña Cadiella, les Croisés, menés par Alphonse Ier le Batailleur et accompagnés peut-être de Gaston de Béarn, durent se replier. Revenu à Ayerbe et Uncastillo, dont Gaston restait seigneur en janvier 1125, le roi d’Aragon prépara une ambitieuse expédition vers la Méditerranée, appelée Huestes de España par l’historien Menéndez Pidal. Cette campagne, comparée plus tard à celles du Prince Noir ou même à la chevauchée de Charlemagne, visait à frapper le cœur d’al-Andalus. Les chroniqueurs Ibn-ʿAç-Caifari, Orderic Vital, la Crónica de San Juan de la Peña et la Crónica de los Estados peninsulares en firent un modèle de croisade, soulignant les parallèles entre Charlemagne à Saragosse (778) et Alphonse à Grenade (1125). Dans les deux cas, les souverains furent incités par des émissaires venus d’al-Andalus à intervenir en terre musulmane. 
       </p>
          </div>
        )
      },
       {
        titre: "L'expédition vers la Méditerranée",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      Les Mozarabes de Grenade, longtemps tolérés sous domination musulmane, furent brutalement persécutés à partir de 1099 sur ordre de l’émir Yusuf ben Tachfin, exécuté par des alfaquis rigoristes. Ces chrétiens d’al-Andalus appelèrent à l’aide Alphonse Ier, loué pour ses victoires. Ils lui envoyèrent lettres et registres vantant la richesse de Grenade, ses vergers, sa soie, son alcazaba, pour éveiller sa convoitise. Influencé par le précédent du Cid à Valence, Alphonse vit dans cette opportunité un moyen de restaurer la gloire chrétienne et d’établir un territoire vassal dans le sud, attirant des colons du nord. L’Aragon, jusqu’alors éclipsé par la Castille, pouvait enfin affirmer sa puissance et jouer un rôle décisif dans la Reconquista. L’armée, forte de 3 000 à 5 000 cavaliers aragonais, navarrais et castillans, rassemblée à Jalón, comptait parmi ses chefs Gaston IV de Béarn, véritable chef d’état-major, Centulle de Bigorre, et plusieurs évêques, dont Pierre de Saragosse et Étienne de Huesca. Le plan, tenu secret, visait Grenade. Partis de Daroca et Cella, ils atteignirent Valence le 20 octobre. Malgré l’alerte almoravide, de nombreux Mozarabes se joignirent à eux. L’armée contourna Valence, attaqua Denia sans succès, traversa Murcie par les gorges de Játiva et Peña Cadiella, puis marcha vers Vera, Almazoran, Purchena, et fit halte à Tijola avant d’échouer à Baeza, dépourvue de murailles. Cette longue chevauchée démontra la vaillance des croisés, malgré l’absence de résultats décisifs. Arrivés à Guadix, Alphonse et Gaston restèrent un mois avant de marcher sur Grenade. Prévenu, le gouverneur Abou-l-Tahir ibn Yousof mobilisa la défense, renforcée par une armée venue d’Afrique. Un complot chrétien interne, découvert à temps, fut réprimé, ruinant les espoirs d’un soulèvement. Privés de matériel de siège et d’appui maritime, les croisés établirent leur camp le 7 janvier 1126, affrontant froid et manque de vivres. Alphonse espéra une trahison interne, mais les Mozarabes, expulsés ou surveillés, restèrent inactifs. Après dix jours infructueux, la situation se dégrada : pluie, gel, pénurie et isolement contraignirent Alphonse à lever le siège le 23 janvier. Dix mille Mozarabes furent expulsés de Grenade et rejoignirent l’armée chrétienne. Changeant de stratégie, Alphonse ravagea les environs de Grenade et de Cordoue, cherchant l’affrontement. Son itinéraire, attesté à Macarena, Baena, Espejo et Lucena, mena à la bataille d’Anzul le 10 mars 1126 contre les troupes almoravides d’Abu-Bakr, fils de l’émir. Les musulmans, d’abord victorieux, furent pris de panique et battus : leur camp fut pillé, et l’armée chrétienne remporta une victoire éclatante. Cependant, faute de renforts, Alphonse et Gaston durent envisager le retour, non sans mener encore quelques incursions avant leur repli définitif. Traversant les montagnes des Alpujarras jusqu’à Motril, Alphonse et Gaston affirmèrent brièvement la présence chrétienne en Andalousie. Ibn-ʿAç-Caifari rapporte un geste symbolique du roi, jetant un objet du haut d’une falaise avant d’y bâtir une tour, interprété comme un vœu religieux. Le retour fut désastreux : attaques musulmanes, peste, froid, faim. De nombreux chevaliers périrent, dont l’évêque Raymond de Roda, mort d’épuisement le 21 juin à Huesca. Malgré tout, Alphonse et Gaston rentrèrent chargés de butin et de prisonniers, se glorifiant d’avoir infligé de lourdes pertes à l’ennemi.      </p>
          </div>
        )
      },

      {
        titre: "L’expédition de 1126",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         L’expédition menée par Alphonse Ier le Batailleur et Gaston IV de Béarn en 1126, attestée dans la région de Tudèle, fut une entreprise aussi héroïque que désastreuse. Leur bravoure fut unanimement saluée, mais les pertes humaines et politiques furent lourdes. Plutôt qu’une conquête progressive autour de l’Èbre, cette campagne alarma les Almoravides, qui préparèrent une revanche. Les chroniqueurs, tels que San Juan de la Peña et Orderic Vital, rapportent que malgré la vaillance des chrétiens, aucune ville fortifiée ne fut prise, les campagnes seulement ravagées, et la majorité des guerriers périrent. Cette chevauchée, qui dura plus d’un an sur le territoire musulman, eut aussi des conséquences tragiques pour les Mozarabes : beaucoup furent déportés au Maroc, tandis que les survivants participèrent au repeuplement de la vallée de l’Èbre. L’expédition marqua la fin des grandes campagnes communes d’Alphonse et de Gaston, dont le courage fut reconnu dans la charte d’Alfaro, signée par Gaston comme seigneur d’Uncastillo. Se proclamant « empereur par la grâce de Dieu », Alphonse Ier déclara libres tous les chrétiens mozarabes qu’il avait arrachés à la domination sarrasine. Ils reçurent la protection spéciale des fueros, furent installés sur des terres royales, exemptés d’impôts et de service militaire, et bénéficièrent d’une large autonomie judiciaire. Les litiges internes restaient du ressort de leurs communautés, le roi n’intervenant qu’en cas de conflit externe. Ces privilèges visaient à intégrer les Mozarabes tout en récompensant leur fidélité. À leur retour de campagne, Alphonse et Gaston durent cependant affronter de nombreuses difficultés dans la gestion de leurs domaines, marquant le début de la dernière phase de leur alliance politique.  La mort de la reine Urraca, le 8 mars 1126, provoqua une crise : son fils, Alphonse-Ramírez, devint Alphonse VII de Castille et Léon, déclenchant un conflit avec son beau-père, Alphonse Ier d’Aragon. La paix de Tamara régla la querelle : le roi d’Aragon reconnut la succession et le titre impérial d’Alphonse VII, tout en conservant l’Alava, Soria et la région jusqu’à San Esteban de Gormaz. Durant cette période, Gaston IV de Béarn, demeuré dans ses terres, prit d’importantes initiatives spirituelles. Le 6 avril 1128, avec son épouse Talèse, il fonda le prieuré de Sauvelade, rattaché à Sainte-Christine du Somport, puis, le 13 juin, confia à cet établissement la gestion de l’hôpital de Mifaget, créé entre 1110 et 1114. Ayant perdu leur fils unique, Centulle, le couple rédigea un acte de fondation dédié à la Sainte-Trinité, implorant la grâce d’un nouvel héritier, exaucée peu après par la naissance d’un nouveau fils, nommé lui aussi Centulle.
          </p>
          </div>
        )
      },
   {
        titre: "La mort de Gaston",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      Tandis que Gaston gérait ses affaires en Béarn, Alphonse poursuivit ses guerres, lançant en juin 1128 une expédition contre Valence. Après avoir ravagé Alcira et le col de Cullera, il remporta une victoire éphémère qui provoqua la colère de l’émir almoravide Ali ben Yusuf. Sans résultat durable, le roi retourna en Aragon. C’est vers la fin de 1129 qu’Alphonse et Gaston se rencontrèrent pour la dernière fois. Leur dernier acte commun date de septembre 1129, lorsqu’ils accordèrent des privilèges aux Francs installés à Pampelune. Gaston y signa comme seigneur de Saragosse, tandis qu’Alphonse, parti dans le val d’Aran, confia la régence au prélat Étienne de Huesca. Selon les Annales d’Aragon de Zurita, en 1131, les Maures tuèrent Étienne et Gaston, sans précision du lieu. L’historien Marca évoque une trahison, tandis qu’Ibn-Idhari précise qu’en 1130–1131, le chef almoravide Tashfin mena campagne à Jaén et Grenade, où Gaston fut vaincu par Yintan Ali. Sa tête fut exhibée dans les rues de Valence, puis envoyée à l’émir Ali ben Yusuf à Marrakech. Appelé par les musulmans « l’émir des chrétiens », il fut considéré comme un ennemi valeureux. Sa tête, plantée sur une pique et montrée dans les rues de Grenade, symbolisait la revanche musulmane, mais aussi leur respect pour un adversaire redouté. Son corps, restitué après négociation, fut inhumé sous le porche de Santa Maria la Mayor à Saragosse. Le roi d’Aragon apprit la mort de Gaston alors qu’il assiégeait Bayonne (1130–1131). Resté longtemps dans le val d’Aran pour affirmer son autorité, il lança ce siège avec l’aide de ses vassaux du nord des Pyrénées : Pierre, vicomte de Marsan et de Gabarret (gendre de Gaston), Gassion vicomte de Soule, et les Béarnais, dont le jeune Centulle VI, représenté par sa mère Talèse et par Gui de Lons, évêque de Lescar. L’assaut manqué contre Bayonne s’inscrit dans le contexte des rivalités féodales entre Barcelone et Toulouse. Tandis qu’Alphonse-Jourdain, comte de Toulouse, se rapprochait d’Alphonse VII de Castille, une coalition anti-aragonaise se forma. Avant de lever le siège, Gaston, ou son entourage, rédigea un testament prévoyant une nouvelle offensive entre Tortosa, Lérida et Fraga, dirigée contre les Almoravides et les Barcelonais. L’émir Ali ben Yusuf, jugeant Gaston le plus dangereux adversaire d’Alphonse, conclut un pacte avec Barcelone : contre 12 000 dinars annuels, les Catalans se placèrent sous protection musulmane. Outré, le roi d’Aragon accusa Barcelone de trahir la chrétienté, jurant de les soumettre et d’incorporer leur pays à son royaume.   </p>
          </div>
        )
      },
       {
        titre: "La bataille de Fraga et Centulle VI",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
 Depuis plusieurs années, Alphonse Ier d’Aragon, préparait une offensive décisive dans la vallée de l’Èbre, zone stratégique souvent ravagée par la cavalerie musulmane. Dès 1125, Garcia-Ramirez, futur roi de Navarre, avait repris Monzon, ouvrant la voie à une série d’opérations pour sécuriser les confins orientaux du royaume. En novembre 1132, Alphonse fit construire une flottille pour attaquer l’Èbre, s’empara de Mequinenza, transformée en base militaire, et concentra ensuite ses efforts sur Tortosa, espérant qu’en tombant, elle entraînerait Lleida. Âgé d’une soixantaine d’années et marqué par la mort de Gaston de Béarn, il conçut cette campagne comme une ultime croisade, animée par la ferveur et la rédemption. Il réunit ses vassaux et alliés : Aimeri de Narbonne, Garcia-Ramirez de Navarre, Rodrigue des Asturies, et surtout Centulle VI de Béarn, fils de Gaston. La régente Talèse, veuve de Gaston, renforça les liens entre Béarn et Aragon en affiliant l’abbaye de Sauvelade à Sainte-Christine du Somport et en offrant les biens d’Ayerbe. Les Béarnais, conduits par Gui de Lons, évêque de Lescar, participèrent activement, aux côtés de Gassion de Soule et Oger de Miramont. Privés du soutien du comte de Bigorre, demi-frère de Gaston, ils se placèrent sous la direction spirituelle de Gui, gardien du Lignum Crucis de Sahagun. Avant le siège, Alphonse fit prêter à ses chevaliers serment de ne jamais quitter Fraga avant sa conquête. L’entreprise était redoutable : la ville, naturellement protégée, possédait un réseau de souterrains permettant des sorties surprises. La garnison, bien armée, savait qu’aucune pitié ne viendrait d’Alphonse, devenu impitoyable depuis la mort de Gaston, comme l’avait montré l’exécution des défenseurs de Mequinenza. Le gouverneur de Fraga appela alors Ibn Ganya, maître de Valence et Murcie, qui accourut avec une armée de secours. Le 17 juillet 1134, les renforts musulmans encerclèrent les croisés : la bataille tourna à la catastrophe. Deux récits marquèrent les esprits : un moine, promettant l’aide divine, fut tué net par un projectile alors qu’il priait, et, selon Orderic Vital, une caravane almoravide de 200 chameaux chargés d’or attira les chrétiens dans un piège meurtrier. Les musulmans, experts en tactiques andalouses, feignirent une attaque frontale avant de refermer leur tenaille, tandis que la garnison surgissait des galeries pour achever la déroute. Ce qui devait être une victoire devint une défaite totale : le comte Beltran périt, ainsi que Centulle VI, dernier héritier de Gaston. Les musulmans s’emparèrent du camp chrétien et du Lignum Crucis, défendu jusqu’au bout par Gui de Lons, capturé, emmené à Valence, puis libéré contre rançon, mais aveuglé. Ce fut la première et unique défaite d’Alphonse le Batailleur. Tentant d’en limiter les conséquences, il nomma son frère Ramire, évêque de Roda, à la tête du royaume et redistribua des fiefs à Mequinenza et Huesca pour compenser les pertes. Épuisé, Alphonse rédigea son testament le 4 septembre 1134 et mourut trois jours plus tard, inhumé dans le cloître de Saint-Pierre-le-Vieux de Huesca, dans un tombeau simple, fidèle à sa vie de soldat du Christ. Sous son règne, l’Aragon devint une puissance majeure, rivalisant avec la Castille, tandis que le Béarn, bien que lié à l’influence aragonaise, conserva son autonomie féodale. Les fresques romanes de Saint-Lizier (vers 1117), illustrant la Jérusalem céleste, rappelaient que la vie terrestre n’avait de sens qu’orientée vers la foi et la dignité. </p>       </div>
        )
      },
      

    ]
  },
   'aragon': {
    titre: "Tutelle Aragonaise",
    periode: "Moyen Age",
    resume: "Le Béarn évolue sous l’influence des rois d’Aragon",
    introduction: "La vicomté s’inscrit dans la sphère aragonaise...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Rivalités et Alliances autour des Pyrénées",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              En 1112, Raymond-Bérenger III, père du futur fondateur de l’union entre la Catalogne et l’Aragon, épousa Douce de Provence. Cette alliance provoqua une vive rivalité avec la maison de Toulouse, maîtresse du Languedoc et du bas-Rhône. Le conflit éclata en 1125 : Raymond-Bérenger III obtint des compensations, puis son fils Raymond-Bérenger IV (1131–1134) devint prince d’Aragon, réalisant ainsi l’union dynastique entre les deux principautés. La maison de Toulouse, affaiblie, chercha alors le soutien d’Alphonse VII de Castille, tandis que les Catalans s’imposaient. Malgré une trêve, la Provence fut ravagée par les guerres des Baussenques. La crise s’acheva avec la reprise des hostilités par Raymond-Bérenger IV dans la vallée de l’Èbre. En 1135, le comte de Toulouse, Alphonse-Jourdain, allié à Guilhem VI de Montpellier ainsi qu’aux comtes de Foix et de Comminges, tenta de résister à l’expansion aragonaise. Cependant, après la mort du roi de Castille à Pâques 1135, Toulouse se retrouva isolée face aux ambitions catalanes renforcées par le mariage du nouveau vicomte de Béarn avec une fille de Barcelone. Dans le même temps, les Almoravides, après avoir conquis l’Extramadure aragonaise et menacé Saragosse, durent faire face à une double pression : celle de l’opposition du Maghreb et de l’offensive des Almohades, qui les accusaient de déviation juridique et de collusion avec des mercenaires chrétiens. Ces derniers leur déclarèrent le jihad.
            </p>
          </div>
        )
      },
      {
        titre: "Crise de succession en Aragon",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
             Avant sa mort, le roi d’Aragon et de Navarre, Alphonse le Batailleur, légua tout son royaume aux ordres militaires, Hospitaliers, Templiers et Chevaliers du Saint-Sépulcre, pour assurer la défense de la Terre sainte et écarter son frère Ramire le Moine de la succession. Cette décision, jugée irréaliste, alarma les seigneurs aragonais, conscients qu’elle priverait le pays d’un souverain au profit d’ordres religieux plus préoccupés par Jérusalem que par les affaires locales. À la mort du Batailleur, une crise éclata : la noblesse reconnut finalement Ramire le Moine comme roi, bien qu’il fût moine, tandis qu’Alphonse VII de Castille tenta d’imposer ses droits sur l’Aragon en invoquant sa descendance royale. Ramire, soutenu par la noblesse, fut couronné en 1135 et dut affronter les ambitions castillanes ainsi que la poussée des Almoravides. Pour rétablir l’ordre, il annula le testament du Batailleur, conclut des compensations avec les ordres militaires et quitta la vie religieuse pour se marier, afin d’assurer une descendance. Sur les conseils des nobles, il épousa Agnès de Poitou, fille de Guillaume IX d’Aquitaine. Grâce à une dispense papale, ils eurent une fille unique, Pétronille d’Aragon, assurant la continuité dynastique.
            </p>
          </div>
        )
      },  {
        titre: "Le Béarn et la maison de Gabarret",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Centulle VI, resté fidèle à Alphonse le Batailleur, fut tué lors du désastre de Fraga. La succession passa à sa sœur Guiscarde, veuve mariée à Pierre II, vicomte de Marsan, garantissant la continuité du pouvoir local malgré les tensions régionales. Leur fils mineur, Pierre III de Gabarret, fut placé sous la tutelle de sa grand-mère Talèse, veuve de Gaston le Croisé. Cependant, Talèse, s’étant opposée à Ramire le Moine, perdit ses droits sur Saragosse et Uncastillo, car les « honores » aragonais, grands fiefs non héréditaires, relevaient du roi à la mort de leur détenteur. En 1137, face aux tensions avec Alphonse VII de Castille, les nobles d’Aragon se tournèrent vers Raymond-Bérenger IV, comte de Barcelone, et décidèrent de fiancer le jeune seigneur à Pétronille d’Aragon, fille de Ramire, dont il devint le tuteur et le régent. Ce mariage permit à Ramire de se retirer du pouvoir et d’assurer la continuité dynastique tout en apaisant la noblesse. Raymond-Bérenger IV, désormais « prince d’Aragon », reprit contact avec Talèse, dernière témoin de la prise de Saragosse, et lui confirma certains fiefs et droits sur Huesca, Bespen et la basilique du Pilar, où reposait son mari. Dans le même temps, le jeune Pierre III de Gabarret, vicomte de Béarn, épousa Mathes des Baux de Provence, cousine du comte de Barcelone. À la mort de Talèse, Guiscarde assura la régence du Béarn.
            </p>
          </div>
        )
      },
      {
        titre: "L’influence des Almohades",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           Le premier objectif des Almohades fut la prise de Tortosa. Isolé, le petit roi de la ville, dépendant de la bienveillance catalane, fut rapidement contraint de capituler, entraînant la reddition de Lleida et de Fraga. Au même moment, Pierre III de Gabarret-Béarn, petit-fils de Talèse, vit dans ces événements la continuité des exploits de Gaston le Croisé et de Centulle VI. Il conclut un accord symbolique avec Raymond-Bérenger IV, cédant Huesca en échange de Fraga, renforçant ainsi les liens entre le Béarn et les affaires catalanes.
            </p>
          </div>
        )
      },  {
        titre: "Le Béarn dans la couronne d'Aragon et la Gascogne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Ducs de Gascogne depuis 1152, les rois d’Angleterre n’eurent pas le loisir de s’occuper du Béarn pendant presque un siècle. Chercher à arracher ce petit fief pyrénéen à la mouvance aragonaise aurait été une aventure périlleuse, au moment où ils devaient concentrer leurs forces contre la puissance capétienne. L’effondrement de l’hégémonie catalane au nord des Pyrénées après Muret créa un vide que les rois d’Angleterre purent prétendre combler en Béarn. Ils attendirent cependant 1228 pour affirmer que cette seigneurie avait toujours fait partie de la Gascogne, et pour réclamer l’hommage de ses vicomtes. Pierre III ne demeura pas longtemps seigneur de Fraga. En 1153, il fonda un hôpital à Ordios pour les pèlerins de Compostelle en route vers Roncevaux. Il mourut peu après, laissant deux jeunes enfants, Guiscard et Marie, placés sous la tutelle de leur grand-mère. Marie mourut à son tour en 1154, l’année où Henri II Plantagenêt devint roi d’Angleterre après son mariage avec Aliénor d’Aquitaine,sans l’accord du roi de France, provoquant un conflit féodal. Louis VII convoqua le couple pour trahison et confisqua leurs terres. Aliénor et ses fils consolidèrent la puissance ducale et transformèrent les institutions aquitaines en faveur du pouvoir central. Ils devaient concentrer leurs forces contre la puissance capétienne, donc dans les régions excentrées comme le Béarn, l’autorité ducale s’affaiblit progressivement, et la vicomté glisse hors de la mouvance gasconne. D'ailleurs en 1154, une délégation bérnaise d’environ 120 personnes franchit le col du Somport pour se rendre à Canfranc et prêter serment à Raymond-Bérenger, comte de Barcelone et prince d’Aragon, accompagné de son vassal Pierre, comte de Bigorre. Cette délégation, réunissant toutes les composantes de la société béarnaise, témoigne de la structure politique et sociale du pays. Tous prêtèrent serment d’hommage et de fidélité à Raymond-Bérenger, devenu tuteur légal des enfants du défunt vicomte Gaston et de Marie, et régent du Béarn, une sorte d’usurpation des droits du duc de Gascogne-Aquitaine.  Cependant, l’hommage ne liait les Béarnais qu’envers Raymond-Bérenger IV et non envers ses successeurs. Les rois d’Aragon ne tinrent pas compte de cette restriction, considérant le Béarn comme un nouvel élément de leur mouvance. Raymond-Bérenger prit à ses côtés le jeune Gaston V et sa sœur Marie, qui résidèrent à Barcelone. Lorsqu’un conflit grave éclatait en Béarn, le roi le réglait depuis la Catalogne, peut-être en déléguant ses pouvoirs à un représentant local. Les Béarnais conservaient probablement une certaine autonomie sous cette tutelle royale. En 1158, Henri II valida la dérive politique du Béarn en signant une alliance avec Raymond-Bérenger IV d’Aragon. Après avoir conquis la basse vallée de l’Èbre, Raymond-Bérenger acheva la Reconquista dans cette région et chercha à renforcer son autorité au nord des Pyrénées, notamment à travers l’hommage de Canfranc. 
 </p>
          </div>
        )
      },  {
        titre: "L'alliance anglo-aragonaise et les tensions avec Toulouse",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           Après la chute des Almoravides, les Almohades devinrent les nouveaux maîtres du sud de l’Espagne. En 1155, les rois chrétiens prirent Grenade puis Almeria, mais furent arrêtés par la contre-attaque d’Ibn Mardanis, fondateur du royaume de Murcie, qui ouvrit son territoire aux marchands chrétiens tout en luttant contre les Berbères. Pendant ce temps, la Castille s’affaiblissait. Après la mort d’Alphonse VII en 1157, le royaume fut divisé entre ses fils Sanche (Castille) et Ferdinand (Léon). La mort prématurée de Sanche laissa le trône à un enfant, Alphonse VIII, plongeant la région dans les guerres civiles et les rivalités nobiliaires. Cette instabilité freina la reconquête chrétienne et poussa la Navarre et le Léon à attaquer les frontières castillanes. Pour défendre les routes stratégiques, notamment entre Tolède et Cordoue, fut fondé l’ordre militaire de Calatrava. Malgré quelques succès, les Almohades reprirent l’avantage dès 1158. Profitant de ce contexte, Raymond-Bérenger IV chercha à étendre son influence vers le nord, notamment sur le Toulousain. En 1158, il rencontra Henri II Plantagenêt à Blaye pour consolider leur alliance. L’année suivante, en 1159, le comte de Toulouse fut encerclé par une armée anglo-gasconne dirigée par Henri II, soutenue par les Catalans et plusieurs seigneurs méridionaux. Le Quercy fut ravagé et Toulouse assiégée, mais Louis VII intervint pour défendre la ville, empêchant la victoire anglo-aragonaise. Malgré cet échec, Raymond-Bérenger tenta de maintenir son contrôle sur la Bigorre et le Béarn grâce à Gaston V, désormais adulte. Ensuite, en 1162, après la mort de Raymond-Bérenger IV, son fils Alphonse II d’Aragon poursuivit sa politique d’expansion, consolidant l’intégration des pays pyrénéens du nord à la Couronne d’Aragon. En 1169, Henri II donna le Poitou et l’Aquitaine en apanage à son second fils Richard. En 1170, sa sœur Aliénor, mariée à Alphonse VIII de Castille, apporta en dot les droits de son père sur la Gascogne, preuve qu’Henri II considérait déjà que le Béarn était sorti de sa mouvance. Cette indifférence anglaise favorisa l’audace d’Alphonse II d’Aragon, qui exigea en 1170 de Marie de Béarn un hommage non seulement pour le Béarn, mais aussi pour le Gavardan et le Brulhois. Ce geste permit au roi d’Aragon de s’affirmer face à son rival castillan, Alphonse VIII, qui, par son mariage avec Aliénor, pouvait avoir des prétentions sur ces fiefs. À la mort de Gaston V de Béarn en 1170, sans héritier direct, sa sœur Marie, célibataire et élevée en Catalogne, lui succéda. Alphonse II d’Aragon réagit aussitôt pour s’imposer comme son suzerain, lui choisissant pour époux un Moncade, puissant seigneur catalan, afin de mieux contrôler la vicomté.
            </p>
          </div>
        )
      },
       {
        titre: "La naissance de la maison de Moncade-Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          La puissance des Moncade découle de la réunion de deux lignages : celui de Castelviel de Rosanes et celui de Montecada, seigneurs de Castelviel, de Vich et de Gérone. Guillaume-Raymond Iᵉʳ (1045–1120), sénéchal de Catalogne, transmit sa charge à son fils Guillaume-Raymond II (1090–1173), proche conseiller et diplomate de Raymond-Bérenger IV de Barcelone. Celui-ci épousa d’abord Béatrice de Montcada, issue d’une autre branche du lignage, ce qui permit la réunion de nombreux domaines autour de Vich, Gérone et Osone, incluant plusieurs châteaux et droits seigneuriaux. Alliés à la famille de Castelviel de Rosanes, les Montcada consolidèrent leurs positions près de Barcelone, notamment autour de Martorell, et entretinrent des liens étroits avec l’abbaye de Montserrat. Guillaume-Raymond II, également sénéchal de Catalogne, renforça l’alliance avec la Couronne en mariant son fils cadet Guillaume-Raymond III à Marie de Béarn vers 1171, avec l’accord du roi d’Aragon. La rencontre décisive eut lieu à Jaca le 30 avril 1170. Marie de Béarn s’y rendit avec une délégation béarnaise, tandis qu’Alphonse II d’Aragon, entouré de nombreux évêques aragonais, fit valoir ses droits sur la vicomté. L’acte d’hommage stipulait explicitement que Marie reconnaissait tenir le Béarn du roi d’Aragon, promettant fidélité et service, et cédant en gage plusieurs châteaux stratégiques : Escurès, Cadillon, Morlaàs, Gabaret et Manciun. Les évêques de Lescar et d’Oloron jurèrent eux aussi fidélité à Alphonse II, y compris contre leur propre souveraine si elle rompait son serment. Après un nouvel hommage rendu à Saragosse, Marie de Béarn se retira dans un couvent à Montesquieu-Volvestre, après la naissance de ses jumeaux, Gaston et Guillaume-Raymond, nés en 1173. L’aîné, Gaston VI, fut désigné héritier du Béarn. Leur père, Guillaume de Montcada, ne fut pas nommé tuteur afin de ménager la sensibilité des Béarnais ; il perdit de ce fait ses fonctions de vicomte par alliance. La domination aragonaise se renforça alors : le jeune Gaston VI (1173–1214) fut placé sous la tutelle de Pélégrin de Castellarzuelo, seigneur de Barbastro, confirmant la mainmise de la Couronne d’Aragon sur le Béarn. Bien que cette tutelle étrangère ait suscité des réticences, elle fut maintenue grâce à la légitimité du lignage des Gabarret. Gaston VI rendit hommage au roi à Huesca en 1187 pour la vicomté de Béarn. Cependant, les terres de Gabardan et du Brulhois restèrent rattachées au duché d’Aquitaine, selon une clause de réserve. Ainsi, Gaston VI était vassal du roi d’Aragon pour le Béarn, mais demeurait vassal des ducs de Gascogne (notamment Richard de Poitiers) pour ses possessions du nord, préservant ainsi la personnalité politique distincte du Béarn, à une époque où l’expansion catalane s’étendait au Roussillon, à la Cerdagne, au Razès et au Lauragais, sous l’impulsion d’Alphonse II contre Raymond V de Toulouse et avec l’appui d’une alliance avec les Plantagenêt.  </p>
          </div>
        )
      },
       {
        titre: "Les alliances politiques sous Gaston VI",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Centulle III de Bigorre, fils de Pierre et de Béatrix II, petit-fils de Centulle, demi-frère de Gaston le Croisé, épousa Matelle (Hatelle), parente du roi Alphonse II d’Aragon. Ce dernier lui fit en 1175 donation de la vallée d’Aran, située dans le diocèse de Comminges mais sous domination espagnole. Leur fille Étiennette épousa Bernard de Comminges, et leur fille Pétronille fut élevée à la cour du roi d’Aragon, en attente de mariage, renforçant encore les liens entre la Bigorre, le Béarn et la monarchie aragonaise. En 1179, Richard Cœur de Lion chercha à rétablir son autorité sur les marges méridionales de son duché, notamment la Gascogne. Il battit et emprisonna Centulle de Bigorre pour avoir attaqué le vicomte de Dax, allié de Richard. À la demande du roi d’Aragon, désormais allié à Richard après un rapprochement avec le roi de Castille, Centulle fut libéré, scellant ainsi une réconciliation politique. En 1183, lorsque Bertrand de Born souleva une révolte contre Richard, Alphonse II prit son parti, sans aller jusqu’à la rupture totale. En 1181, Gaston VI se rendit à Bordeaux pour sceller une alliance entre la maison de Béarn et les Plantagenêt contre Toulouse, obtenant également celle de Bernard IV de Comminges. Ces alliances préparèrent la grande guerre méridionale de 1197. Le serment d’hommage de Gaston à Alphonse II, prononcé solennellement à Huesca, affirma sa fidélité et celle de ses successeurs aux rois d’Aragon. Vers 1170, Alphonse II avait imposé le mariage de Gaston VI avec Marie de Béarn, consolidant encore cette union politique et étendant son influence jusqu’au Brulhois et au Gabardan, renforçant ainsi les liens entre le Béarn, l’Aquitaine et l’Aragon. 
          </p>
          </div>
        )
      },
        {
        titre: "La troisème croisade et le Midi",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Pendant ce temps, en Orient, Saladin conquit l’Égypte et la Syrie, écrasa les Templiers et les Hospitaliers à Hattin, puis prit Jérusalem. Ces événements poussèrent la papauté à lancer la troisième croisade. Trois grands rois y participèrent : Frédéric Barberousse, Philippe Auguste et Richard Cœur de Lion. Mais la mort accidentelle de Barberousse, les rivalités entre Philippe et Richard, et le retrait du roi de France entraînèrent l’échec de la croisade, sans pour autant apaiser les conflits internes entre Aragonais et Toulousains. Profitant de cette situation, Alphonse II d’Aragon poursuivit sa politique d’encerclement du comté de Toulouse en fiançant sa nièce Pétronille de Comminges à Gaston VI de Béarn qui en 1194 avait mis fin à son différend avec le vicomte de Dax en renonçant à Mixe et Ostabarret en échange d’Orthez et conclu ensuite la paix avec le vicomte de Soule. Le contrat de mariage était très défavorable car le couple reconnaissait ne rien posséder sur la vallée d’Aran, pourtant donnée autrefois à Centulle III, et Gaston devait remettre Lourdes et d’autres châteaux bigourdans au roi d’Aragon sur simple demande. Malgré ces conditions, Gaston accepta ce mariage prestigieux. Pétronille, héritière de la Bigorre et du Marsan, lia ainsi le Toulousain, le Béarn et une partie de l’Aquitaine à la couronne d’Aragon mais ce mariage fut annulé par le pape. Après la mort de Raymond V de Toulouse (1194) puis d’Alphonse II (1196), leurs fils Raymond VI et Pierre II poursuivirent la lutte, sans qu’aucun camp ne prenne l’avantage. Dans ce climat d’anarchie, des mercenaires se multiplièrent entre Toulouse et Montpellier, se transformant souvent en bandes de routiers pillant la région. Les comtes de Foix, changeant fréquemment de camp entre Barcelone et Toulouse, furent excommuniés à plusieurs reprises. Au XIIIᵉ siècle, ils s’attaquèrent à la Catalogne : Raymond Roger s’impliqua dans le conflit entre Urgell et Castelbon, allant jusqu’à saccager la cathédrale d’Urgell et enfermer les chanoines. Ce désordre favorisa la montée de l’hérésie albigeoise : dès 1181, une première expédition ecclésiastique fut menée contre les Trencavel, et en 1195, un concile tenu à Montpellier lança l’anathème contre les hérétiques. La passivité de nombreux seigneurs permit la propagation de cette crise religieuse, affaiblissant l’autorité de Rome. Cette désorganisation politique et spirituelle s’ajouta aux troubles castillans, consolidant la puissance des Almohades en Andalousie. Ce n’est qu’après cette période qu’Alphonse VIII de Castille parvint à reprendre la main sur son royaume et tenta de sortir l’Espagne de la léthargie face à l’Islam. En 1198, Innocent III fut élu pape tandis que la domination musulmane persistait à Jérusalem, que la pression almoravide s’intensifiait sur les royaumes ibériques et que le catharisme gagnait le Languedoc. Le comte de Toulouse, Raymond VI, chercha à apaiser la situation et régla ses différends avec Richard Cœur de Lion, puis conclut le traité de Perpignan avec Pierre II d’Aragon, mettant fin aux guerres inter-pyrénéennes. Ce traité renforça le pouvoir aragonais, le comte de Comminges se soumit, et Pierre II consolida son autorité en épousant Marie de Montpellier. Tandis que Raymond VI demeurait son allié, Pierre II se concentra sur la lutte contre l’hérésie albigeoise. En 1203, Dominique de Guzman (futur saint Dominique) fonda l’ordre des Frères Prêcheurs pour la combattre. Pierre II renforça parallèlement les mesures répressives et se rendit à Rome en 1204, où il fut couronné par Innocent III, confirmant la fidélité de l’Aragon au Saint-Siège. Cette même année, la croisade prêchée pour reprendre Jérusalem échoua, détournée vers Constantinople, tandis que Pierre II demeurait partagé entre son devoir religieux et ses ambitions politiques.
        </p>
          </div>
        )
      },
       {
        titre: "La double vassalité",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      En 1201, le légat pontifical Pierre de Castelnau visita le Béarn et n’y trouva aucune trace d’hérésie albigeoise, témoignant de la stabilité religieuse locale. En 1204, le roi de Castille Alphonse VIII chercha à contester l’influence aragonaise dans le Béarn et la Gascogne, profitant des difficultés du roi d’Angleterre Jean sans Terre face à Philippe-Auguste. Se prévalant des droits de son épouse Aliénor, fille d’Henri II Plantagenêt, sur la Gascogne, il prit le titre de « duc de Gascogne » et convoqua ses vassaux gascons à Saint-Sébastien le 26 octobre 1204. Lors de cette assemblée, le comte d’Armagnac, le vicomte de Tartas et le vicomte de Béarn, Gaston VI lui-même, lui prêtèrent hommage. Ce geste marqua une reconnaissance momentanée du roi de Castille comme suzerain, sans rupture avec l’Aragon. Gaston cherchait manifestement à ménager les deux puissances voisines pour préserver l’autonomie béarnaise. En 1205, après quelques succès militaires, Alphonse VIII dut se retirer, mais les rois de Castille conservèrent leurs prétentions sur la Gascogne jusqu’en 1254. En 1208, un nouveau conflit éclata entre les rois d’Aragon et de Castille. Gaston VI prit le parti de son suzerain aragonais et lui versa 50 000 sous morlàas, une somme considérable. En échange, Pierre II lui donna en fief le château de Burgui et la vallée de Roncal, situés dans les Pyrénées (actuelle Navarre espagnole). Cette transaction confirma la fidélité du Béarn à la Couronne d’Aragon et marqua la fin de l’épisode castillan. 
        </p>
          </div>
        )
      },
       {
        titre: "La croisade albigeoise",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Après l’assassinat du légat pontifical Pierre de Castelnau près de Saint-Gilles du Gard en 1208, le pape Innocent III lança une croisade contre l’hérésie cathare, appliquant pour la première fois le concept de croisade à l’intérieur même de la chrétienté. Le roi de France Philippe Auguste refusa d’y participer, préférant concentrer ses efforts contre l’Angleterre, mais il autorisa plusieurs seigneurs d’Île-de-France, dont Simon de Montfort, à s’y engager. Le roi d’Aragon, Pierre II, resta prudent mais obéit au pape en surveillant ses vassaux, notamment les comtes de Foix, de Comminges et le vicomte de Béarn, Gaston VI. Pourtant, les seigneurs pyrénéens, profondément liés au monde occitan, furent inévitablement entraînés dans le conflit : soit comme combattants, soit comme relais logistique pour les armées croisées. La victoire initiale des Croisés au Languedoc, marquée par la prise de Béziers et la capitulation de Carcassonne, entraîna la dépossession de nombreux seigneurs méridionaux au profit des croisés du Nord. Gaston VI de Béarn, comte de Bigorre et vicomte de Béarn, vassal fidèle du roi d’Aragon, soutint ses alliés du Midi malgré les injonctions du pape. En 1210, tandis que les Almohades infligeaient une lourde défaite aux Castillans, l’Église et le royaume d’Aragon se trouvaient affaiblis. Pierre II ne put contenir l’élan de ses vassaux : Gaston VI participa à la défense de Toulouse en 1211, forçant Simon de Montfort à lever le siège, puis prit part à la malheureuse expédition de Castelnaudary. Ce n’était pas par conviction religieuse, car l’hérésie cathare n’avait pas pénétré en Béarn ni en Bigorre, mais par fidélité envers l’Aragon. Le 27 janvier 1213, Gaston renouvela son hommage au roi d’Aragon, aux côtés des comtes de Foix, de Comminges et de Toulouse, dans le cadre du projet de Pierre II de constituer un vaste État trans-pyrénéen. Cependant, le concile de Lavaur condamna Gaston pour son soutien à l’Aragon et aux Toulousains : il fut excommunié, privé temporairement de la vicomté du Brulhois, et ses terres furent déclarées vacantes par le pape. Malgré cela, il obtint rapidement le pardon pontifical après avoir cédé deux quartiers de la ville d’Oloron à l’évêque. Le pape Innocent III, conseillé par l’archevêque de Tolède, prêcha alors une nouvelle croisade contre les Almohades, espérant réunir les rois ibériques. L’armée chrétienne se rassembla à Tolède pour la Pentecôte 1212. La bataille des Navas de Tolosa (15 juillet 1212) se solda par une victoire éclatante des armées ibériques et par un prestige accru de Pierre II, célébré pour sa bravoure. Mais cette gloire fut de courte durée : le 13 septembre 1213, à Muret, Simon de Montfort remporta une victoire décisive, et Pierre II d’Aragon fut tué au combat avant même que Gaston et ses troupes puissent le rejoindre
 </p>
          </div>
        )
      },

       {
        titre: "Après Muret : défaite aragonaise",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
 Cette défaite marqua un tournant majeur : l’Aragon renonça à toute expansion au nord des Pyrénées pour se tourner vers la Méditerranée, tandis que le Béarn passa progressivement sous influence anglaise. Malgré l’absence de Cathares en Béarn, Gaston VI fut de nouveau condamné pour hérésie au concile de Lavaur, accusé d’avoir offert asile à des hérétiques et à l’assassin du légat pontifical. Pierre II étant mort, Gaston chercha la réconciliation : le légat pontifical Pierre de Bénévent transmit son pardon à l’évêque d’Oloron, Bernard de Morlanne. Il restitua à l’évêché les bourgs de Sainte-Marie et de Saint-Pé, puis fut absous et rétabli dans ses terres. Gaston VI demeura fidèle à la maison d’Aragon : il apparaît encore aux côtés du jeune roi Jacques Ier lors du siège de Tamarite de Litera. Il mourut sans descendance directe en 1214 (ou 1215 selon certaines sources), laissant pour héritier son frère jumeau Guillaume-Raymond, qui hérita des vicomtés de Béarn, Gabardan et Brulhois, ainsi que des droits sur Lérida et Tarragone. Du côté du comté de Foix, Raymond-Roger et son fils Roger-Bernard II prirent part activement à la résistance languedocienne. Versés en théologie, Raymond-Roger et sa sœur Escarmonde débattirent avec les Vaudois, les Cathares et les catholiques, ce qui valut à leur famille des soupçons d’hérésie. Lors du concile de Latran, le comté de Foix fut accusé, comme celui de Toulouse, de protéger les hérétiques. Malgré tout, Roger-Bernard II, époux de l’héritière de Castelbon et d’Andorre, poursuivit la lutte contre les Croisés. Foix, tout comme Montségur, devint un refuge pour les persécutés. En 1240, Saverdun et le Bas-Foix furent contraints de rendre hommage à Toulouse, désormais sous domination capétienne, mais à la mort de Raymond IV en 1265, les comtes de Foix restaient les seuls seigneurs occitans encore indépendants. Leur politique, souvent téméraire, consistait à jouer de la rivalité entre la France et l’Aragon, chacun convoitant ce comté stratégique. Après Muret, Simon de Montfort poursuivit son offensive. Il assiégea Lourdes en Bigorre, mais les Bigourdans résistèrent vaillamment et l’obligèrent à se retirer. La comtesse Pétronille de Bigorre, veuve de Gaston VI, se remaria successivement avec Nuno Sanche, Aymar de Rançon puis Boson de Matha, qui administra fermement le comté. Sous son autorité, la justice fut appliquée avec rigueur : tout homicide commis à Vie entraînait pour le coupable la peine d’être enterré vivant sous sa victime. Pour apaiser les tensions, le pape envoya le cardinal Pierre de Bénévent comme légat chargé de rétablir la paix et d’absoudre les seigneurs repentants. Le Béarn, la Bigorre et le Comminges furent progressivement réintégrés dans l’obéissance à Rome.
  </p>
          </div>
        )
      },
    ]
  },



  
     'autre': {
    titre: "Vers la Souveraineté",
    periode: "Moyen Age",
    resume: "Le Béarn s’émancipe et affirme son équilibre politique",
    introduction: "Des Guillaume à Gaston VII, le Béarn s'extirpe de l'Aragon...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Conflits et alliances Béarn-Bigorre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           Boson de Matha, époux de Pétronille de Bigorre, prit en main les affaires familiales de sa femme, notamment ses droits héréditaires sur la maison de Comminges, issus de son père Bernard de Comminges. Faute d’obtenir justice pacifiquement, il entra en guerre contre Bernard, comte de Comminges et beau-frère de Pétronille. Grâce à la médiation d’Amanieu d’Albret, l’affaire fut soumise à un arbitrage conjoint avec le comte de Toulouse. La rencontre se tint sur la lande de Bosc, en Nébouzan, où une paix fut conclue sous la garantie de Bernard II, archevêque d’Auch. Chacun remit des châteaux en gage d’exécution : Salies et Fronsac pour Comminges, Maîtrezin et Saint-Plancard pour Bigorre. Pétronille conclut ensuite une « ligue perpétuelle » avec Guillaume-Raymond de Moncade, seigneur de Béarn et frère jumeau de Gaston IV, afin d’assurer une amitié durable entre la Bigorre et le Béarn, unis par leurs intérêts communs : le contrôle des routes pyrénéennes et la défense contre Toulouse et l’Angleterre. En gage, elle donna au vicomte de Béarn la vicomté de Marsan, zone stratégique entre Gascogne et Béarn, ainsi que la seigneurie du quartier de Saragosse, sans doute des droits commerciaux ou fonciers. Elle céda plus tard ses droits sur le comté de Comminges. Connue pour sa piété et sa générosité, Pétronille versa des rentes aux pauvres de Baloc, Larreule, Parrabère et Caixon. Elle fit un legs à Amanieu, archevêque d’Auch, pour le remercier de ses services et rembourser une dette de 5 000 sols envers son prédécesseur Garcias II grâce aux revenus de Bagnères. Elle fit aussi des dons à Boson, son époux, qui administra la Bigorre comme comte jusqu’à remboursement des dettes. De leur union naquit Mathe, réputée pour sa piété, que Pétronille maria à Gaston VII de Moncade, vicomte de Béarn. Mais Gaston revendiqua la succession de la Bigorre, affirmant que le mariage antérieur de Pétronille avec Nuce, comte de Cerdagne, rendait nul son troisième mariage avec Guy de Montfort, rendant ainsi Esquivât, fils de ce dernier, illégitime. Pour se protéger, Esquivât se plaça sous la suzeraineté du roi d’Angleterre Henri III, à qui il rendit hommage pour la Bigorre, un fait inédit. Gaston, maître de Castelnau-de-Rivière-Basse, attaqua alors les terres bigourdanes jusqu’à Tarbes. Acculé, Esquivât fit appel à Simon de Montfort, lieutenant du roi d’Angleterre en Gascogne, et lui donna le comté en garantie, espérant le récupérer une fois la paix revenue. Grâce à la médiation d’Alphonse d’Aragon et de Roger de Foix, les hostilités cessèrent. Le 17 septembre 1257, à Orthez, Roger de Foix rendit sa sentence : Esquivât céderait à Gaston et Mathé la juridiction sur le Marsan et la Rivière-Basse, en échange de leur renoncement au reste du comté de Bigorre. Peu après, Roger maria sa fille Agnès à Esquivât, scellant la réconciliation. Esquivât fut ensuite dédommagé par l’héritage du vicomté de Couserans. Un nouveau conflit l’opposa toutefois au comte de Comminges, qui refusa de lui rendre le château de Cordesque, nécessitant un nouvel arbitrage du comte de Foix. En 1258, à Paris, Esquivât commit une erreur diplomatique en confirmant à Simon de Montfort la donation de Lourdes et Mauvezin. Montfort s’en servit pour se proclamer seigneur de Bigorre et envoya son cousin Philippe de Montfort prendre possession des châteaux. Esquivât reprit les armes, mais une trêve fut conclue : Montfort conserva Lourdes et Tarbes jusqu’à Noël, puis renonça. Reconnaissant la loyauté de Gaston de Béarn, Esquivât s’engagea finalement à ne jamais vendre ni aliéner la Bigorre sans l’accord du Béarn et du Foix.
            </p>
          </div>
        )
      },
       {
        titre: "La Bigorre entre les mains des héritiers",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Fatiguée des guerres, Pétronille se retira au monastère cistercien de l’Escaladieu, près de Bagnères, où elle rédigea un second testament réglant ses dettes et confia l’exécution de ses volontés à Simon de Montfort, comte de Leicester et son beau-frère, chargé d’administrer les revenus de la Bigorre pour rembourser les dettes de Boson de Matha. Elle désigna pour héritier universel son petit-fils Esquivât de Chabannes, fils d’Alix de Montfort et d’Esquivât II de Chabannes, prévoyant qu’en cas de décès sans descendance, la succession passerait à Jourdain de Chabannes, puis à Mathe et à ses descendants. Avant sa mort, Esquivât de Chabannes, comte de Bigorre, fit de sa sœur Laure, vicomtesse de Turenne, son héritière principale. À sa mort, la succession devint complexe. Gaston VII de Béarn et Mathé de Bigorre, fille de Pétronille, eurent quatre filles, dont Constance, très estimée. Quatre princes, fils ou frères de rois, demandèrent sa main. Son premier mari fut Alphonse, infant d’Aragon, fils du roi Jacques Ier ; elle lui apporta des domaines en Aragon, Catalogne et Majorque, mais il mourut sans enfant. En 1265, Thibaut de Navarre voulut la marier à son frère Henri : un traité fut conclu, Gaston lui donna les vicomtés de Gavarret et Brulhois, ainsi que des terres en Bigorre (Maubourguet, Castelnau, Auriébat, Ladevèze, Roquefort-de-Marsan), mais l’union échoua en 1266. Un troisième projet lia Henri, fils de Richard, roi des Romains, mais fut annulé ; un quatrième, avec Emmanuel, frère du roi de Castille, fut retardé par la dispense papale. Finalement, le mariage avec Henri d’Allemagne fut consommé à Mont-de-Marsan, et Gaston contesta le testament, affirmant que la succession devait revenir à Constance.
           </p>
          </div>
        )
      },
      {
        titre: "Héritage contesté et mainmises étrangères",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Suivant l’exemple de sa mère Pétronille, Mathé de Bigorre fonda avec son mari Gaston VII, le 12 juillet 1270, le monastère des religieuses de Beyries (ordre de Sainte-Claire) à Mont-de-Marsan, richement doté et validé par Pierre, évêque d’Aire. Selon le testament de Pétronille, la mort sans héritiers d’Esquivât et de Jourdain faisait de Constance l’héritière légitime. Les États de Bigorre la reconnurent comme comtesse : elle prêta serment de fidélité, et Tarbes, Bagnères, Vic et Ibos lui rendirent hommage. Mais Laure, s’estimant lésée, fit appel au roi d’Angleterre Édouard Ier par Jean de Grailly, sénéchal de Gascogne. Édouard profita du litige pour revendiquer la Bigorre, prétendant que son père Henri III avait acheté des droits à l’Église du Puy. Sous ce prétexte, il ordonna à Jean de Grailly de prendre possession du comté. À Tarbes, Gaston de Béarn remit le comté par obéissance, non par justice, et la Bigorre passa sous domination anglaise malgré les droits de Constance. Le testament de Gaston VII reflète sa foi : il fit vœu de croisade et, ne pouvant partir, ordonna l’envoi de cinq hommes d’armes béarnais en Terre sainte. Mathé, dans son propre testament, multiplia les dons charitables et légua 4 000 sols morlaas pour financer deux pèlerins, perpétuant la piété familiale. Édouard Ier s’empara donc du comté, prétextant un ancien droit de l’Église du Puy, bien que la Bigorre appartînt légitimement à Constance, héritière de Pétronille. Elle intenta un procès devant le sénéchal de Gascogne, représentant du roi d’Angleterre. Mais plusieurs héritiers revendiquèrent des parts du comté : Laure de Turenne, Mathilde de Thyet (par sa mère Alix), Guillaume de Teisson et Mathé d’Armagnac, selon la coutume gasconne du partage. Le procès s’enlisa, et le roi d’Angleterre conserva la Bigorre.  Épuisée, Constance céda ses droits à sa sœur Marguerite, comtesse de Foix, tout en gardant la Rivière-Basse et la vicomté de Marsan. En cas de perte, elle devait être indemnisée par la seigneurie de Saint-Gaudens, et si le Béarn revenait à Marguerite, elle conserverait à vie plusieurs terres (Larreule, Vic, Azereix, Ibos, etc.). En 1290, Philippe le Bel voulut reprendre le contrôle du Sud-Ouest. Le Parlement de Paris déclara que l’achat anglais de 1254 ne conférait qu’un droit symbolique d’hommage et reconnut à Constance la possession du comté. Mais en 1292, à la demande de la reine Jeanne de Navarre, un nouvel arrêt plaça la Bigorre sous l’autorité du roi de France jusqu’à résolution du litige. Jean de Longpérier, lieutenant du sénéchal de Toulouse, exécuta l’arrêt, déposant Constance de ses châteaux (sauf Lourdes) et ordonnant aux États de Bigorre d’obéir à l’Église du Puy. L’indignation fut générale. À l’assemblée de Séméac, l’abbé Arnaud Guillaume de Bénac rappela la légitimité de Constance et fit appel au roi. Bien qu’elle plaidât qu’elle n’avait pas été convoquée, ses recours restèrent vains. Longpérier imposa l’autorité royale en affichant les armes du roi et du Puy dans tout le comté. Le 9 octobre 1292, les États de Bigorre réaffirmèrent que Constance était l’unique héritière légitime de Pétronille et supplièrent Philippe le Bel de la rétablir dans ses droits. En vain : la Bigorre passa sous administration royale, marquant la fin de son indépendance.
           </p>
          </div>
        )
      },
      {
        titre: "Entre Aragon et Angleterre : la diplomatie",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Installé à Tarragone, Guillaume-Raymond entra en conflit ouvert avec l’évêque de la ville, finalement assassiné en 1194. Cet acte lui valut l’excommunication et l’exil. Désireux de retrouver sa place dans la chrétienté, il fais pénitence. Devenu vicomte de Béarn, Guillaume-Raymond fit de la défense des intérêts aragonais au nord des Pyrénées sa priorité. Il tenta d’intervenir en Bigorre, mais arriva trop tard pour empêcher le mariage de Pétronille (veuve de Gaston VI) avec Guy de Montfort, fils de Simon IV de Montfort, chef des croisés français combattus par Gaston VI. Guillaume renforça la garnison aragonaise du château de Lourdes, mais la situation ne fut apaisée qu’en 1220, à la mort prématurée de Guy de Montfort. Pétronille se remaria, permettant à la Bigorre d’échapper à la domination française. Souhaitant affermir son autorité, Guillaume publia les Fors de Morlaàs (1220) et d’Ossau (1221), renforçant droits et libertés locales. Ses responsabilités catalanes l’obligèrent à de constants allers-retours entre Morlaàs et Barcelone. Il mourut à Oloron en 1224, sans avoir accompli son vœu de croisade. Guillaume II de Béarn lui succéda. Très engagé en Catalogne-Aragon, il dut gérer les rivalités entre familles nobles autour du jeune roi Jacques Ier d’Aragon et participa activement à la préparation de l’invasion des îles Baléares. Lors de son retour en Béarn, en février 1228, il promit au représentant du roi d’Angleterre de rendre hommage pour ses terres en Aquitaine (Béarn, Gabardan, Brulhois, Captieux). Le 22 février 1228, à Captieux, Guillaume II rencontra Henri de Trubevyl, sénéchal de Guyenne, et promit, devant la cour, de faire hommage au roi d’Angleterre Henri III lors de son prochain voyage, pour « la terre qu’il tenait en Gascogne ainsi que ses prédécesseurs avaient coutume de la faire ». Cet acte, attesté par des témoins béarnais, fut interprété comme une reconnaissance implicite de la vassalité du Béarn envers le roi d’Angleterre. Les archives anglaises confirmèrent ce fait, notamment en 1365, lorsque Édouard III ordonna de rassembler les preuves de la vassalité béarnaise, l’engagement de Captieux figurant en premier.
            </p>
          </div>
        )
      },
      {
        titre: "La rupture progressive avec l’Aragon",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         L’attitude de Guillaume II s’explique par son désintérêt pour le Béarn, qu’il considérait comme une contrainte. Souhaitant la paix pour participer à la conquête des Baléares, il accepta la promesse d’hommage sans en mesurer les implications. Le chroniqueur de Jacques Ier rappelle pourtant que Guillaume II tenait Moncade et le Béarn en fief du roi d’Aragon, tandis que Castellon était sa propriété personnelle. Ainsi, trois souverains pouvaient revendiquer des droits sur le Béarn : le roi d’Aragon, le roi d’Angleterre et le roi de Castille. Le Béarn se trouva donc dans une situation juridique très complexe, conséquence des actes de Gaston VI (1204) et de Guillaume II (1228). Réconcilié avec Jacques Ier, Guillaume II se consacra entièrement à la croisade des Baléares. Le 23 janvier 1228, il était aux côtés du roi lors de la proclamation de l’expédition. Dès le débarquement à Majorque, le 11 septembre 1229, il trouva la mort avec son oncle Raymond de Moncade. Leurs corps furent inhumés dans le cloître de Santa Creus. Son tombeau, décoré des deux vaches du Béarn, est le plus ancien témoignage héraldique connu du symbole béarnais. À la fin du XIIᵉ et au début du XIIIᵉ siècle, le Béarn, théoriquement vassal de l’Aragon, n’entretenait plus avec ce royaume qu’un lien purement juridique. Après la défaite de Muret (1213), aucun noble béarnais ne combattit plus pour l’Aragon. L’influence aragonaise, entretenue par des seigneurs catalans attachés à la Méditerranée, n’était plus qu’une survivance. La mort de Guillaume II marqua un tournant : la rupture se fit progressivement sous Gaston VII Moncade (1229–1290), dernier des Moncade en Béarn. Installé à Orthez, dont il fit sa capitale, Gaston VII, endetté par les expéditions de son père, vendit de nombreux domaines catalans et se consacra à la Gascogne, négligeant ses possessions au sud des Pyrénées, administrées par des Béarnais. Parallèlement, les rois d’Aragon, tournés vers la Méditerranée, renoncèrent à leurs ambitions au nord des Pyrénées. Les liens féodaux entre Béarn et Aragon se défirent d’eux-mêmes, sans rupture officielle. Tout était consommé vers 1256, lors du traité de Corbeil, qui mit fin aux visées catalanes dans le Midi. Le Béarn n’y est d’ailleurs pas mentionné, car il relevait alors de la mouvance des rois d’Angleterre, ducs de Gascogne, comme le confirmait déjà le traité de Tolède. Ainsi, une alliance militaire du XIIᵉ siècle devint une vassalité étroite (1154–1214), puis perdit toute réalité après Muret, pour disparaître entre 1230 et 1250.
           </p>
          </div>
        )
      },
      {
        titre: "Gaston VII : For, bastides et révolte",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   Malgré la défaite de Muret (1213), le Béarn resta dans la mouvance aragonaise. Guillaume-Raymond et Guillaume II furent avant tout des seigneurs catalans, plus attachés à Moncade qu’au Béarn. Ensuite, les Béarnais, restés à l’écart des expéditions aragonaises, commencèrent à s’administrer eux-mêmes, avec les For Général en 1188 qui donne une charte fondatrice régissant les rapports entre vicomte et sujets, les For d'Ossau et de Barétous puis le renforcement des droits collectifs avec la confirmation du For de Morlaàs (en l’absence de leurs seigneurs catalans, les Béarnais profitèrent du vide politique pour affirmer leur liberté et bâtir les bases d’une identité féodale autonome). La promesse de Captieux fut considérée comme une preuve suffisante de la vassalité du Béarn par l’administration anglaise. Cette « tutelle » anglaise n’est pas encore politique, elle touche d’abord les finances, le contrôle des revenus, impôts, aides militaires, etc. Mais dès 1242, le contexte change. Henri III d’Angleterre vient sur le continent pour tenter de reconquérir le Poitou, alors aux mains des Français. Il convoque tous ses vassaux gascons à se joindre à lui. Gaston VII et sa mère répondent à l’appel : Gaston accompagne fidèlement le roi d’Angleterre pendant toute la campagne. Le 25 décembre 1242, à Bordeaux, Gaston VII rend hommage pour le Béarn à Henri III, reconnaissant officiellement le roi d’Angleterre comme suzerain du Béarn. Cet hommage lui procure des avantages financiers (pensions, aides, terres) et l’espoir de recevoir le comté de Bigorre. Cependant, après la défaite anglaise de Taillebourg, Henri III sort affaibli. En 1245, une vaste révolte éclate en Gascogne, de la Garonne aux Pyrénées. C’est une période d’anarchie féodale : Gaston VII entraîne dans sa ligue Raymond-Arnaud de Tartas, vocmote de Dax, Raymond-Guillaume de Soule, les Avarais et le seigneur de Gramont. Ensemble, ils dévastent le Labourd et s’opposent violemment à l’autorité anglaise. En 1248, Henri III confie à son beau-frère Simon de Montfort, comte de Leicester, la mission de rétablir l’ordre. Montfort tient une cour de justice à Saint-Sever, fait emprisonner le seigneur de Gramont et attaque Raymond-Guillaume V, retranché à Mauléon. Ce dernier finit par capituler et signe la paix avec l’Angleterre en 1252. Si Montfort met fin au soulèvement, son autorité rigoureuse provoque de nouvelles plaintes des députés gascons, si bien qu’Henri III retire sa charge et confie le gouvernement de la Gascogne à son fils aîné, Édouard. Face à cette pression anglaise et conscient de la nécessité de défendre son indépendance, Gaston VII met alors en place une politique ambitieuse de fortifications dont le transfert de la capitale de Morlaàs à Orthez en 1242, le renforcement des places fortes, notamment de Sauveterre, la fondation de plusieurs bastides, dont Bellocq, et la construction du château de Foix à Roquefort. En 1240, il rend officiellement hommage au roi d’Angleterre, confirmant la vassalité du Béarn, mais tout en manœuvrant pour préserver son autonomie. En 1245, il pille Dax et poursuit son implantation politique. En 1260, il fonde le couvent des Cordeliers à Mont-de-Marsan. Malgré l’esprit pactiste, Gaston VII modernisa profondément la vicomté. Vers 1250, il entreprit une réforme administrative divisant le territoire en vics ou bailliages, dirigés par des officiers vicomtaux, les bailes. Ceux-ci assuraient à la fois l’administration, la police et la justice locale. À l’inverse, les anciens viguiers perdirent leurs pouvoirs et devinrent de simples agents locaux. Apparurent aussi des péagers, chargés des saisies de bétail et percepteurs du cens. En 1252, la procédure criminelle adopta l’enquête inquisitoire, menée par quatre jurats et un curé. L’appel devant la Cort Major transforma l’ancienne cour seigneuriale en juridiction souveraine du Béarn. Cette période vit aussi la montée des bourgs, la réorganisation de l’habitat et l’extension des libertés communautaires, visant autant à résoudre des querelles familiales qu’à garantir l’intérêt général et la stabilité politique.
        </p>
          </div>
        )
      },
       {
        titre: "Entre vassalité anglaise et autonomie béarnaise",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    En conflit avec l'Angleterre, Gaston VII se tourne, en 1252, vers Alphonse X de Castille, tout juste monté sur le trône. Il devient vassal du roi de Castille, trahissant ainsi Henri III. Mais, Henri III négocie avec Alphonse X, et le 22 avril 1254, les deux rois signent le traité de Tolède où Alphonse X renonce à ses droits sur la Gascogne, il libère les Gascons (dont les Béarnais) de leur serment et leur ordonne de rendre hommage au roi d’Angleterre. Pour prouver sa fidélité, en 1255, Gaston VII remet sa fille Mathe comme otage à la cour du prince Édouard, pour quatre ans. Après cette soumission, Gaston VII cesse de se rebeller et collabore loyalement avec l’Angleterre. Cette fidélité est récompensée, il reçoit des avantages financiers, et Henri III cherche à l’attacher davantage à la couronne anglaise par une alliance prestigieuse. En 1270, Constance, fille aînée de Gaston VII et héritière du Béarn, épouse Henri d’Allemagne, roi des Romains et neveu d’Henri III. Le mariage devait ancrer le Béarn dans l’influence anglaise, mais Henri d’Allemagne est assassiné en 1271 à Viterbe par Guy de Montfort, avant d’avoir des enfants avec Constance. La mort d’Henri d’Allemagne, puis celle d’Henri III, offrent à Gaston VII un prétexte pour rompre avec la domination anglaise. Le vieux vicomte se révolte à nouveau, espérant restaurer l’autonomie du Béarn, mais il est rapidement vaincu et capturé.
         </p>
          </div>
        )
      },
       {
        titre: "Gaston, l’insoumis : le procès politique",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Le 2 octobre 1273, Gaston est jugé à Sault-de-Navailles par une commission royale anglaise. Il doit s'engager à rester à la disposition du roi, ne pas quitter Saint-Sever sans autorisation, reconnaître la validité du jugement ordonnant la saisie de ses biens et remettre la ville et le château d’Orthez en gage. La couronne anglaise contrôle désormais le centre politique de la vicomté. Fidèle à lui-même, Gaston VII ne respecte pas ses engagements et se rebelle une autre fois contre Édouard Iᵉʳ. La révolte échoue rapidement, confirmant la dépendance féodale du Béarn. Une médiation du nonce pontifical Gérard de Roussillon permet finalement une réconciliation. Le 14 janvier 1274, Gaston VII écrit une lettre d’excuses à Édouard Ier, dans laquelle il reconnaît explicitement sa vassalité envers le roi d’Angleterre et ajoute qu’il lui doit hommage lige. Cependant, cette lettre n’était pour Gaston VII qu’une manœuvre politique pour gagner du temps, il refusa ensuite de se soumettre et fit appel au Parlement de Paris contre la sentence de saisie prononcée par la cour de Saint-Sever. Cet appel aurait dû entraîner la suspension des hostilités, mais le vicomte de Béarn utilisa habilement l’attaque de quelques villages béarnais à la frontière du Marsan pour se poser en victime et réclamer réparation. Le 9 mai 1274, deux ambassadeurs béarnais arrivent à Limoges et présentent, le lendemain, leur requête au roi et à sa cour. Une trêve devait s’appliquer automatiquement lorsqu’un vassal faisait appel contre une sentence de son seigneur auprès d’une juridiction supérieure. Ainsi, Gaston reproche à Édouard Ier de ne pas agir en seigneur loyal. Édouard Ier donne alors des instructions à son sénéchal Luc de Thanney pour mettre fin aux attaques dirigées contre les sujets de Gaston VII. Refusant de s’avouer vaincu, Gaston comparait en personne devant le Parlement de Paris, où son procès commence en septembre 1274. Il éclate en injures contre Édouard Ier, qu’il qualifie de « traître, menteur, juge inique et déloyal », et jette son gant en signe de défi devant Philippe III le Hardi. Malgré cette violence verbale, Gaston VII persiste dans sa stratégie de défense, il ne conteste pas sa dépendance féodale, mais dénonce le comportement déloyal de son seigneur. Gaston VII pousse ensuite l’audace jusqu’à refuser de se battre contre les 5 chevaliers envoyés par Édouard Ier, prétextant qu’il s’agissait d’une affaire d’honneur personnelle et qu’il ne pouvait affronter que le roi lui-même. Il espérait probablement provoquer un conflit franco-anglais afin de préserver ses positions, mais Philippe III le Hardi refuse de se laisser entraîner et invite Gaston à présenter ses excuses publiques à Édouard Ier. Le vicomte est contraint à l’humiliation, d’abord à Londres, où il présente ses excuses, à Paris, devant le Parlement, puis revenu en Angleterre, il est placé en résidence surveillée au château de Winchester, du 26 janvier au 30 avril 1276. Déterminé à en finir avec ce vassal indocile, Édouard Ier, avec l’accord de Philippe III, décide de faire exécuter l’arrêt de la cour de Saint-Sever. L’arrêt, prévoyant la saisie d’Orthez et du Béarn, devient applicable, l’appel de Gaston VII ayant été annulé après ses excuses publiques, plus rien ne s’oppose à la mise sous séquestre. 
          </p>
          </div>
        )
      },
       {
        titre: "Saisie royale et survie politique",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Deux commissaires, Robert Fitzjohn et Itier Brochard, sont désignés à Westminster le 6 février 1276 pour exécuter cette mission, qu’ils accomplissent du 15 mars au 19 avril 1276. Retardés par la tempête, les commissaires débarquent à Bordeaux, gagnent Langon et Mont-de-Marsan, où ils rencontrent Constance, fille aînée de Gaston VII. Veuve d’Henri d’Allemagne, possédant des fiefs en Angleterre, Constance tente de jouer un rôle de médiatrice pour éviter toute violence. Accompagnée du sénéchal de Béarn, elle accepte de faciliter la mission des officiers du roi d’Angleterre, à condition qu’ils respectent les Fors de Béarn, selon ces coutumes, les commissaires doivent notifier leur mission à la Cour Majour de Béarn, et la saisie ne peut être effective qu’après cette formalité. Les Béarnais cherchent à gagner du temps par tous les moyens procéduraux, mais ne contestent jamais la compétence de la cour de Saint-Sever, ni la vassalité du Béarn. Le sénéchal avait donné rendez-vous à Fitzjohn et Brochard à Morlàas, pour les introduire auprès de la Cour Majour. Arrivés sur place, les commissaires ne trouvent ni le sénéchal, ni la Cour Majour. Ils rencontrent alors un représentant appelé « le consul de la Cour de Béarn », à qui ils notifient l’ordre de saisie, puis se rendent à Orthez. Ils y font prendre acte de leur mission par le bailli et le châtelain d’Orthez, à qui ils réclament un serment de fidélité particulier au roi d’Angleterre, nécessaire après la commise. Les officiers béarnais reconnaissent la saisie, mais refusent le serment sans autorisation écrite du vicomte les déliant de leur fidélité envers lui. La fin du document étant illisible, on ignore si les commissaires se contentèrent de cette réponse ou exigèrent le serment. Ainsi, en avril 1276, le Béarn est officiellement saisi et placé dans la main du roi d’Angleterre, duc de Gascogne. Après 4 mois de détention, Gaston VII est libéré mais contraint de se soumettre et de jurer fidélité au roi d’Angleterre. Ensuite, Gaston VII tenta de secouer une tutelle qu’il jugeait trop lourde. Sa révolte se solda par un échec complet ; toutefois, en 1279, il obtint le pardon d’Édouard Iᵉʳ à des conditions avantageuses. Dans ce contexte de dépendance, Gaston VII offrit ses services à Édouard Iᵉʳ lors de la campagne du pays de Galles en 1282. Entre 1287 et 1289, il accueillit 3 fois le roi d’Angleterre en Béarn et soutint sa politique ibérique.  Avec ses conseillers Bernard de Bizanos et Amat de Gayrosse, il contresigna le traité d’Oloron conclu entre Édouard Iᵉʳ et Alphonse III d’Aragon. 

     </p>
          </div>
        )
      },
     
    ]
  },

 'marguerite': {
    titre: "Vers la Souveraineté",
    periode: "Moyen Age",
    resume: "Le Béarn s’unit un comté vassal de la France",
    introduction: "De Marguerite à Fébus, l’indépendance devient diplomatie maîtrisée...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
       {
        titre: "La naissance de l’unité Foix-Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Dans les actes réglant sa succession en 1286, Gaston VII proposa un partage précis parmi ses filles, Constance conserverait le Marsan à titre viager, avant de le transmettre à sa sœur Marguerite qui recevait le Béarn, Mathe conserverait le Gavardan et le Brulhois et Guillelme hériterait des possessions catalanes, à condition de ne pas se marier et Gaston réaffirme clairement sa vassalité envers le roi-duc d’Angleterre en recommandant à ses successeurs de continuer à lui prêter hommage. Le 11 mai 1286, la Cour de Béarn, réunie à Morlàas, en présence de Gaston VII et de ses filles, approuva officiellement le nouveau règlement successoral, et pour rendre l’acte inattaquable, on fit venir le célèbre juriste Arnaud Novelli. Selon ce texte, Roger-Bernard de Foix et Marguerite, à leur succession, devraient prêter hommage au roi d’Angleterre pour le Béarn et pour leurs autres fiefs gascons, dont le Marsan. Toutefois, le Béarn ne peut être assimilé aux autres fiefs gascons, car le roi d’Angleterre n’y nomme aucun administrateur. Le vicomte continue d’y exercer pleinement la potestas, tout en reconnaissant la suzeraineté du roi-duc. En termes modernes, le Béarn est associé, mais non intégré au système féodal anglais. Gaston VII avait d’ailleurs fait préciser que l’union Foix-Béarn serait indissoluble, fondant la nouvelle orientation politique de la vicomté.  Le 11 mai 1290, Roger-Bernard III se présente devant la Cour Majour de Morlàas, accompagné de Marguerite et de Constance, vicomtesse de Marsan. Il jure de respecter l’union Foix-Béarn et toutes les clauses du règlement successoral. Sous la pression de Constance, fidèle soutien de la cause anglaise, il écrit à Édouard Iᵉʳ pour lui renouveler sa fidélité et promet de prêter hommage au plus tôt. Mais ces démarches sont dictées par la nécessité politique, Roger-Bernard a besoin de l’appui du roi d’Angleterre pour asseoir sa succession. Peu après, comprenant que Philippe le Bel étend lentement son influence par une « infiltration progressive », Roger-Bernard décide de se rapprocher du roi de France. À la fin de 1290, il signe à Paris un accord avec Philippe le Bel. Dès lors, la rupture avec Édouard Iᵉʳ est consommée, l’hommage promis n’est jamais rendu, quand éclate la guerre entre France et Angleterre, le comte de Foix combat dans l’armée française, alors qu’Édouard Iᵉʳ l’avait convoqué dans la sienne. Les efforts du roi d’Angleterre, notamment la mission de Jean de Bretagne à Orthez pour le convaincre, restent vains. La rupture est si totale qu’on ne trouve aucune mention du vicomte de Béarn dans les archives anglaises de 1295 à 1302.
       
    </p>
          </div>
        )
      },
      
 {
        titre: "Crise de succession et lutte pour la Bigorre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       À la mort sans héritier d’Esquivat en 1283, sa cousine Constance Moncade, petite-fille de Pétronille et fille aînée de Gaston VII, fut reconnue comtesse de Bigorre par les États. Mais lorsqu’en 1286 elle donna la Bigorre à sa sœur Marguerite, cela ralluma immédiatement les tensions. Les Montfort, le roi d’Angleterre et les Armagnac refusèrent cette union Bigorre–Béarn. Édouard Ier d’Angleterre mit le comté sous séquestre en 1285. En 1290, le Parlement de Paris obligea Constance à annuler sa donation. En 1292, Philippe IV le Bel plaça définitivement la Bigorre sous séquestre royal. Le comté fut alors administré par les rois de France, en tant que rois de Navarre, jusqu’en 1425, année où il fut rendu au vicomte de Béarn Jean Ier. Roger-Bernard III, comte de Foix et époux de Marguerite, mena une vie politique et militaire mouvementée. Après avoir rendu hommage à Louis IX à Paris en 1265, il s’allia à Géraud VI d’Armagnac contre Géraud de Casaubon, s’empara du château de Sompuy et fit exécuter ses défenseurs (1271). Cette guerre privée provoqua l’intervention du roi Philippe III le Hardi, qui interdit les conflits entre vassaux et fit emprisonner Roger-Bernard à Carcassonne (1272–1273), après avoir confisqué son comté. Libéré, Roger-Bernard récupéra ses terres à condition de servir le roi dans une expédition contre l’Aragon et la Navarre. En 1278, il entra en conflit avec Pere d’Urtx, évêque d’Urgell, au sujet de la vicomté de Castelbon. Ce différend fut réglé par le traité de paréage du 8 septembre 1278, qui créa la principauté d’Andorre, placée sous une souveraineté partagée entre le comte de Foix et l’évêque d’Urgell. Cependant, la lutte reprit contre Pierre III d’Aragon, et Roger-Bernard fut capturé à Balaguer (22 juillet 1280) puis emprisonné à Siurana jusqu’en 1284. À sa libération, il participa à la croisade d’Aragon aux côtés de Philippe III. Le partage fut contesté par Jacques II d’Aragon, bénéficiaire des terres catalanes données à Guilhelme et Mathe, et par Bernard VI d’Armagnac, fils de Mathe. Tous deux accusèrent Marguerite et Roger-Bernard d’avoir falsifié le testament de Gaston VII après sa mort (26 avril 1290). Ces tensions déclenchèrent deux grandes séries de conflits militaires et diplomatiques, entre Foix-Béarn et Armagnac au sujet de l’héritage gascon et autour de la Bigorre, enjeu distinct mais tout aussi disputé. Ces rivalités engendrèrent plusieurs guerres successives comme la première guerre (1290–1295) qui éclate alors que la France mène déjà des opérations en Normandie et en Gascogne. Face à ces conflits persistants, plusieurs grandes puissances intervinrent, les rois Philippe IV le Bel (France), Jacques II (Aragon), Édouard Ier (Angleterre) et le pape Clément V, ainsi que ses successeurs à Avignon. Dans son testament du 21 avril 1290, Gaston VII de Béarn légua d’abord ses possessions à sa fille aînée Constance, comtesse de Bigorre et de Marsan. Ce dernier s’empara alors par la force de la vicomté de Béarn. Malgré les protestations de l’évêque de Lescar, le roi de France laissa faire, car il avait besoin de Roger-Bernard dans sa lutte contre les Anglais. Il se contenta de confisquer temporairement les châteaux de Lordat et Montréal, exigeant du comte qu’il participe à une expédition en Terre sainte. Mais la chute de Saint-Jean-d’Acre (1291) mit fin aux croisades et rendit cette obligation caduque. Mais celle-ci mourut sans héritier et transmit ses droits à sa sœur Marguerite de Moncade, épouse de Roger-Bernard III de Foix. En 1295, Philippe IV tenta d’imposer la paix entre Armagnac et Foix-Béarn, mais sans succès durable.
          </p>
          </div>
        )
      },
         {
        titre: "Du conflit à la paix imposée",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    En 1295, Philippe IV tenta d’imposer la paix entre Armagnac et Foix-Béarn, mais sans succès durable. Après le départ de Robert II d’Artois de Gascogne, Roger-Bernard prit le commandement des troupes françaises contre les Anglais durant la guerre de Guyenne. Il participa au siège de Saint-Sever (avril 1295) et fut nommé gouverneur des évêchés d’Auch, Dax et Bayonne, ce qui le plaça face à Bernard VI d’Armagnac. En 1296, il entra en conflit avec Bernard Saisset, premier évêque de Pamiers, qui refusa le paréage imposé par le comte. L’évêque l’excommunia et mena une résistance anti-capétienne, ce qui provoqua un affrontement entre Philippe le Bel (soutenant Roger-Bernard) et le pape Boniface VIII. En 1297, Roger-Bernard commanda un des trois escadrons de l’armée française de Robert d’Artois, remportant la bataille de Bonnegarde, mettant fin à la guerre en Guyenne. En 1301, il se rendit à Senlis auprès du roi pour négocier le mariage de son fils Gaston avec Jeanne d’Artois, princesse capétienne. Roger Bernard III servit Philippe le Bel, tandis qu’Édouard Iᵉʳ prit Marguerite sous sa protection en 1304. Roger-Bernard mourut à Tarascon le 3 mars 1303, laissant la vicomté de Béarn à son fils Gaston Ier de Foix-Béarn, époux de Jeanne d’Artois, fille de Philippe d’Artois et petite-fille du puissant Robert II d’Artois. Marguerite de Foix régla la succession familiale en Catalogne après le legs de sa sœur Guilhelme à Gaston de Fezensaguet, et, par un accord avec Jacques II d’Aragon (1303, confirmé en 1310), fit restituer à son fils Gaston Iᵉʳ la majorité des terres catalanes des Moncade et la vicomté de Castelbon. Le 24 décembre 1303 à Toulouse, en présence de la reine Jeanne de Navarre et des princes héritiers Louis, Philippe et Charles, un arbitrage royal fut imposé entre Marguerite et Constance (sœurs Moncade), Mathe et son fils Bernard VI d’Armagnac. L’ordonnance royale de janvier 1304 stipula : « qu’il y ait entre les parties une ferme et stable paix ». Mathe d’Armagnac recevait le Brulhois, le Gavardan, Captieux et les terres d’Euse et d’Eusan, sans pouvoir rien réclamer sur le reste. Constance et Marguerite conservaient la Bigorre, le Béarn, le Marsan et leurs autres possessions. En cas de mort sans héritier de Guilhelme, la cadette, les terres catalanes devaient revenir à Mathe et ses enfants, mais le Gavardan retournerait à Constance et Marguerite. La Rivière-Basse était attribuée à Guilhelme. 
        </p>
          </div>
        )
      },
        {
        titre: "Marguerite, le bouclier du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Après la mort de Roger Bernard III (1302), Marguerite administra seule le comté de Foix et la tutelle de Gaston Iᵉʳ : elle géra les affaires militaires (conflit du Marsan), la diplomatie, la justice et les alliances locales (elle rend aucun hommage aux Plantagenêts). Gaston intervint seulement lors des campagnes contre les Armagnac (1303, 1307) et, libéré avant 1309, laissa sa mère gouverner jusqu’à sa mort. Sa belle-fille Jeanne d’Artois prolongea ensuite cette politique conciliatrice durant cinq ans. La paix arbitrée par Philippe IV le Bel en 1304 fut illusoire. Marguerite de Moncade refusa car c'était une atteinte au testament de Gaston VII (l’ordonnance contredisait la volonté paternelle sur l’usufruit du Gavardan), Mathe d’Armagnac continuait à revendiquer le Marsan, malgré le partage de 1286 et l’arbitrage ne réhabilitait pas Roger Bernard III, accusé d’avoir falsifié le testament. Pour résister aux Capétiens, Marguerite reprit la stratégie de son père, exploiter les rivalités entre puissances. Elle fit appel au pape, elle fit remettre le Gavardan entre ses mains par Édouard Ier d’Angleterre, face à sa résistance, les Capétiens durent adoucir leurs exigences. une reprise des hostilités (1303–1307) avec Gaston Ier de Foix-Béarn qui mène deux campagnes ; excommunié, condamné par le Parlement de Paris, il est emprisonné au Châtelet et frappé d’une amende de 40 000 livres tournois (Édouard II fit lever l’excommunication de Gaston Iᵉʳ en 1308). Après les morts de Guilhelme (1309) et de Constance (1310), les luttes reprennent autour du Gavardan et de la Rivière-Basse, détachée du comté de Bigorre En 1329, une nouvelle sentence arbitrale fut rendue par Philippe d’Évreux, roi de Navarre et le comte de Foix-Béarn conserva Gavardan, Moncade et Castelviel, le comte d’Armagnac reçut la Rivière-Basse, le pays d’Eauze et le Brulhois . Marguerite, fille de Gaston VII et veuve de Roger-Bernard, assuma la tutelle de son fils Gaston Ier de Foix-Béarn, puis celle de son petit-fils Gaston II (1314–1319). Elle gouverna le Béarn de 1286 à 1319, d’abord comme tutrice, puis comme véritable souveraine, car les Béarnais lui étaient profondément attachés. Élevée dans une ambiance anglophile, son père étant vassal fidèle du roi Édouard Ier d’Angleterre, Marguerite sut préserver l’indépendance politique du Béarn entre les influences française, anglaise et aragonaise. Sa longévité politique, son habileté diplomatique et sa gestion ferme assurèrent la continuité du pouvoir vicomtal dans une période de guerres incessantes.
        </p>
          </div>
        )
      },
        
         {
        titre: "Marguerite entre Béarn et Guyenne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Dès 1304, Marguerite de Béarn se plaça sous la protection du roi d’Angleterre Édouard Ier, lui demandant de garantir l’exécution du testament de son père Gaston VII, alors que les Armagnac menaçaient d’une guerre générale avec l’appui de la France. Cette protection anglaise se traduisit par une intervention croissante de la cour de Saint-Sever, qui jugea en appel des causes tranchées en première instance par les tribunaux béarnais.
Entre 1305 et 1314, la cour de Saint-Sever connut presque chaque année de procès impliquant des Béarnais. En 1309, Marguerite se fit représenter officiellement auprès de cette cour par les sires d’Andoins et de Gerderest, et le 2 septembre, Édouard II ordonna à son sénéchal de veiller personnellement à sa sécurité. En 1310, priée de se présenter en personne à la cour, Marguerite informa Jean de Bretagne, comte de Richmond, qu’elle déléguait ses pouvoirs à son chapelain Arnaud et à maître Arnaud-Guillaume. L’année suivante, les officiers du sénéchal de Guyenne provoquèrent des incidents de frontière à Labastide-Villefranche, donnant à la cour anglaise de nouvelles occasions d’intervenir dans les affaires du Béarn. En 1312, alors que le sénéchal voulait la contraindre à comparaître lui-même, Marguerite demanda à être représentée par un procureur, conformément à la coutume, mais finit par se rendre à la cour de Saint-Sever en 1313. De nouveau assignée en 1314, elle refusa de comparaître, invoquant un vice de procédure : elle aurait dû être convoquée par le viguier de Saint-Sever et non par un simple prévôt assisté d’un sergent. Elle alla même jusqu’à faire appel à la cour anglaise contre deux seigneurs béarnais, Arnaud de Doumy et le sire de Lescun. Ces faits montrent que l’administration anglo-gasconne exerçait alors un contrôle judiciaire effectif sur le Béarn, plus fort que jamais auparavant.
   </p>
          </div>
        )
      },
 {
        titre: "Le Béarn à l’épreuve des Foix",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Parallèlement, au début du XIVᵉ siècle, une nouvelle élite locale, issue des villages, les prohomis, riches paysans et marchands familiers du droit, accéda aux responsabilités administratives du pays. En 1310, un événement tragique toucha la famille vicomtale : Gaston Ier, son épouse Jeanne d’Artois et leur fils âgé d’un an furent victimes d’une tentative d’empoisonnement de la part de cousins de Roger Bernard. Les coupables, Guillaume de Foix et Guillaume de Loubens, furent immédiatement exécutés. En 1312, Gaston Ier accusa sa mère Marguerite d’avoir aliéné et détourné des terres durant sa curatelle. Une guerre ouverte s’ensuivit : Gaston prit les châteaux de Lembeye et de Sauveterre, mais les barons béarnais s’interposèrent et imposèrent un accord. Selon ce compromis, Marguerite, vicomtesse légitime, conservait la haute main sur le Béarn et les affaires gasconnes. C’est en tant que comte de Foix que Gaston Ier apparaît ensuite, notamment lorsqu’il participe à la guerre en Flandre aux côtés du roi Louis X le Hutin. À son retour, en 1315, il tomba malade et dicta son testament, accordant à son épouse Jeanne d’Artois une rente viagère annuelle de 5 000 livres tournois prélevée sur le bas comté de Foix. Il mourut le 13 décembre 1315 à Maubuisson, à seulement 26 ans.
   </p>
          </div>
        )
      },
       {
        titre: "Marguerite face aux rois français et anglais",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Les Béarnais redoutaient que l’union du Béarn avec le comté de Foix n’entraîne le pays dans un conflit avec le roi d’Angleterre, ce qui aurait nui à leurs intérêts économiques, notamment à l’accès aux pâturages landais nécessaires à leurs troupeaux. S’il n’existe aucun texte prouvant que Marguerite ait expressément favorisé l’influence anglaise, les faits démontrent son orientation anglophile : elle reconnaissait la cour de Saint-Sever et le roi d’Angleterre comme ses justiciers immédiats, et le roi de France comme arrière-justicier. Cette attitude provoqua la colère des officiers français. En 1312, après que des Béarnais eurent attaqué les possessions des Albret près de Bayonne, les juges royaux intervinrent, soutenant les Albret alliés à Philippe IV le Bel. Marguerite et vingt-quatre communautés béarnaises furent condamnées solidairement à 52 000 livres tournois de dommages envers le roi de France. Philippe le Bel ajouta à cette sanction le bannissement d’une trentaine de Béarnais, dont le bailli d’Oloron. Pour se défendre, Marguerite ne remit pas en cause la compétence de la justice française, mais dénonça la violation des Fors de Béarn : selon eux, les Béarnais devaient d’abord être jugés par leurs propres tribunaux, puis, en appel, par la cour de Saint-Sever, la justice royale n’intervenant qu’en dernier ressort. Peu après, Marguerite fit écarter sa bru Jeanne d’Artois, alors à la cour de France, pour incompétence, prodigalité et inconduite, lui retirant la tutelle du jeune Gaston, âgé de six ans. Le Parlement de Paris, saisi de l’affaire, se prononça en faveur de Jeanne en 1317, mais ce ne fut qu’à la mort de Marguerite, en novembre 1318, que Jeanne d’Artois fut rétablie dans ses droits de curatrice, tutrice et régente.
   </p>
          </div>
        )
      },
       {
        titre: "Procès, ingérences et crise familiale",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Jeanne d’Artois semble alors avoir voulu se concilier les forces traditionnelles en Béarn et avoir accueilli favorablement les réclamations des bourgs et des vallées, peut-être moins prises en compte sous Marguerite. Ainsi, Jeanne accorda au bourg d’Orthez le bénéfice du for de Morlaàs le 16 février 1319. À Bielle, le 2 juillet 1319, elle reconnut aux Ossalois les droits immenses, voire exorbitants, qu’ils réclamaient en vain depuis une centaine d’années, au moins sur le Pont Long. Gaston II, devenu majeur, échangea les serments traditionnels avec les cours à sa majorité en mai 1323. Son mariage avec Aliénor, fille du comte Bernard VIII de Comminges, fut célébré en 1324. À la mort de Marguerite, Jeanne d’Artois, sa bru, gouverna donc le Béarn pendant la minorité de son fils, de 1319 à 1323. L’entourage de Philippe V profita de la présence, à la tête du Béarn, d’une princesse d’origine française pour intervenir avec vigueur dans la vicomté. Deux procès dont le Parlement de Paris fut saisi servirent de prétexte. Cette même année éclata le conflit qui opposa Jeanne d’Artois à son fils Gaston II. Avec une violence inouïe des mots, la régente et ses officiers furent accusés d’exactions, de blasphèmes, d’injures et de mauvaises pratiques.  Des érudits ont affirmé que la démesure du douaire de Jeanne, le bas comté de Foix, en était la cause. Mais les lettres de rémission que le roi Charles IV le Bel accorda à Jeanne n’en font pas mention. Jeanne d’Artois fut d’abord accusée d’exactions, de mauvaises pratiques, de blasphèmes et d’injures. Ces accusations pourraient relever soit de la calomnie de la part de Gaston II, soit d’une accusation politique. Jeanne aurait pu rompre une paix antérieure conclue entre 1318 et 1324. Furent également accusés ses « gens et officiers », béarnais eux-mêmes, qui avaient gouverné le Béarn à ses côtés. Peut-être s’opposèrent-ils à Gaston II parce qu’il s’était engagé dans les rangs français.     </p>
          </div>
        )
      },
 {
        titre: "La diplomatie et le contrôle du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La guerre avait repris entre le roi de France et le roi-duc d’Aquitaine en 1324. Une armée commandée par Charles de Valois, dans laquelle figurait le jeune comte de Foix, occupa la Gascogne (sauf Saint-Sever et Bayonne). Gaston II se retrouva ensuite aux côtés de Philippe VI de Valois en 1328, en Flandres. Cet engagement rompait avec la politique d’équilibre de Marguerite et allait à l’encontre des intérêts économiques du Béarn, du Marsan et du Gavardan. Au même moment, plusieurs Béarnais, tels Pierre de Gabaston, se trouvaient du côté du roi-duc d’Aquitaine. Les circonstances exactes de l’accusation portée contre Jeanne d’Artois restent inconnues. Jeanne d’Artois vit se dresser contre elle le puissant baron béarnais Garcie-Arnaud de Navailles. Condamné pour trahison par la Cour Majour à la confiscation de ses biens, ce seigneur fit appel directement au Parlement de Paris et non aux cours gasconnes. Le Parlement, après avoir déclaré l’appel recevable, condamna Marguerite et prononça la saisie du Béarn en 1318. C’est à propos de cette affaire que Marca défendit sa théorie : Garcie-Arnaud aurait fait appel au Parlement non comme baron de Béarn, mais comme seigneur de Castelnau-en-Chalosse, fief relevant du roi de France. En prenant le pouvoir, Jeanne hérita de cette situation difficile. Elle protesta, au nom de son fils, contre la sentence du Parlement de Paris et envoya un mémoire réfutant les arguments de Marca. Les juristes chargés de défendre Jeanne ne remirent pas en cause la compétence du Parlement de Paris, mais contestèrent la validité de l’arrêt sur la base de la procédure, le baron de Navailles avait dépassé le délai légal de dix jours pour déposer son appel, l’appel n’avait pas été notifié à la Cour Majour dans le délai de trente jours, les Fors de Béarn et coutumes d’Aquitaine, qui exigeaient que la cour de Saint-Sever fût saisie avant le Parlement de Paris, avaient été violés. Ce mémoire reprend mot pour mot les arguments utilisés auparavant par Marguerite auprès de la cour de Saint-Sever. Jeanne adopta donc une attitude conforme à celle de sa belle-mère. Peut-être fut-ce le prix à payer pour éviter la saisie du Béarn. Peu après, Jeanne changea complètement de politique : elle rompit avec Édouard II, obtint l’appui du Parlement de Paris et du roi de France, qui décida de la protéger contre les entreprises du roi d’Angleterre. Un document isolé (Documents, 23) éclaire cet épisode : un mémoire d’officiers anglais protestant contre l’envoi d’hommes d’armes français en Béarn, censés placer Jeanne sous la sauvegarde du roi de France. Charles IV le Bel avait pris cette décision à la demande de Jeanne, qui avait fait appel au Parlement de Paris contre Édouard II. Le roi d’Angleterre s’éleva vivement contre ce geste, estimant qu’il violait ses droits et faisait du Béarn un État vassal direct du roi de France, ce qui menaçait la paix en Gascogne. Les officiers anglais rassemblèrent tous les textes prouvant que les vicomtes de Béarn avaient prêté hommage aux ducs de Gascogne, mais leur protestation resta sans effet. Le Béarn glissa ainsi dans la mouvance directe des rois de France. Le 20 juillet 1342, Édouard III ordonna à ses officiers de ramener le vicomte de Béarn à l’obéissance et de réclamer son aide contre le roi de France. Le sénéchal d’Aquitaine tenta des négociations, sans succès. Dans son testament de 1343, Gaston II ne fit aucune allusion au roi d’Angleterre mais mentionna les années de règne du roi de France, soulignant ainsi la rupture.   </p>
          </div>
        )
      },
        {
        titre: "Équilibre fragile et aspiration à l’indépendance",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Vers le milieu du XIVᵉ siècle, le Béarn se trouvait dans une situation complexe : les rois d’Angleterre et de France pouvaient prétendre à sa dépendance directe, mais ni l’un ni l’autre n’exerçait un contrôle effectif. Le Béarn semblait sur le point de quitter la mouvance anglaise pour entrer dans celle du roi de France. Cette « oscillation » permit à la vicomté de disposer d’une large autonomie, sans pour autant être indépendante. Les sires de Béarn n’avaient jamais proclamé publiquement qu’ils répudiaient tout lien de dépendance ou qu’ils faisaient du Béarn un franc-alleu. Les changements d’obédience ne posaient jusque-là aucun problème : les populations connaissaient aussi bien le monde aragonais que le monde gascon. Mais le passage sous domination directe des rois de France fut beaucoup plus mal accepté. Gaston II et son entourage fuxéen, habitués au royaume de France, soutenaient Philippe VI, mais les Béarnais s’y opposaient, se battre contre l’Angleterre, c’était se couper des pâturages landais et du port de Bayonne, risquer la confiscation des fiefs du Marsan et du Gavardan, et perdre les avantages économiques et administratifs liés à l’Angleterre. Cette rupture détruisait l’équilibre économique de la vicomté. L’opposition interne apparut clairement au début de la guerre de Cent Ans, alors que Gaston II combattait aux côtés des Français, des commerçants béarnais finançaient le roi d’Angleterre, des nobles servaient dans ses armées, et des bourgeois administraient des territoires gascons. Une grave crise menaçait donc le Foix-Béarn, dont l’union n’avait qu’un demi-siècle. C’est dans ce contexte que certains conseillers de Gaston II conçurent un compromis : faire du Béarn un franc-alleu, c’est-à-dire un État neutre et souverain, tout en maintenant l’unité du Foix-Béarn. Ces conseillers restèrent auprès de Gaston III. Grâce à son opportunisme, celui-ci réussit à mettre en pratique cette idée. Au lieu de rejoindre directement la mouvance française, le Béarn tenta de devenir un État souverain. Avec le milieu du XIVᵉ siècle s’achevait une longue période de vassalité commencée en 1154. Durant deux siècles, cette vassalité envers l’Aragon puis l’Angleterre avait empêché les vicomtes de conduire une politique propre. Ils avaient dû combattre dans les Baléares, en Bordelais ou en Toulousain selon les ordres de leurs suzerains. Les premières tentatives d’émancipation furent donc marquées par un changement profond, les vicomtes proclamèrent la neutralité du Béarn et dirigèrent en pleine souveraineté leur politique extérieure.    </p>
          </div>
        )
      },
    ]
  },

  
     'souverainete': {
    titre: "Souveraineté",
    periode: "Moyen Age",
    resume: "Le Béarn souverain sous Gaston Fébus",
    introduction: "Puissance, art et liberté définissent l’État fébusien...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Conquête du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Les populations protohistoriques vivaient de chasse, d’élevage et de commerce
              trans-pyrénéen. Leur culture se rattache aux peuples aquitains.
            </p>
          </div>
        )
      },
      {
        titre: "Arrivée des Vicomtes",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
              Le territoire était structuré autour de clans, avec des échanges avec la
              Gascogne et la Navarre.
            </p>
          </div>
        )
      },
    ]
  },
  'union-navarre': {
    titre: "Union avec la Navarre",
    periode: "Renaissance",
    resume: "Le Béarn s’unit à la couronne navarraise indépendante.",
    introduction: "Entre héritage et rapprochement avec Paris....",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Le Béarn après la mort de Fébus",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      Après la mort de Gaston Fébus, les États de Béarn, créés en 1391, reprirent son principe d’indépendance fondé sur la neutralité entre France et Angleterre. Ils s’emparèrent du trésor de Fébus, instaurèrent un serment d’union pour protéger les fors et coutumes, et désignèrent Mathieu de Castelbon comme héritier, à condition qu’il fasse annuler le traité de Toulouse liant le Béarn à la France. En 1391, Mathieu obtint la renonciation de Charles VI aux droits de la couronne sur le Béarn et refusa l’offre d’hommage du roi d’Angleterre Richard II. Reconnu vicomte en 1393, il laissa le pouvoir aux États et mourut sans héritier après avoir perdu ses terres catalanes. La succession revint à sa sœur Isabelle de Castelbon et à son époux Archambaud de Grailly, allié des Anglais. Acceptés par les États en 1398, ils prêtèrent un serment strict. La France tenta de réagir mais dut accepter le compromis de l’accord de Tarbes (10 mai 1399) : Archambaud rendit hommage pour le Foix et le Nébouzan, mais non pour le Béarn, dont la souveraineté de fait fut reconnue. Dès août 1399, la chancellerie béarnaise employa les termes sobiraa et sobiranetat (« souverain » et « souveraineté ») dans un procès opposant Archambaud aux Palois, attestant l’autonomie des institutions locales. Archambaud poursuivit la politique économique de Fébus en tentant d’intégrer les terres communes au domaine vicomtal, provoquant la résistance des Palois et Ossalois. Il affirma « ne reconnaître aucun souverain si ce n’est Dieu », tandis que les États défendirent les droits des communautés. La chancellerie continua de lui donner les titres de señor ou vesconte. À sa mort en 1412, Isabelle gouverna aux côtés de leur fils Jean Iᵉʳ, qu’elle conserva sous son autorité jusqu’en 1428. Jean Iᵉʳ, vassal du roi de France pour le Foix mais souverain en Béarn, avait prêté hommage au roi en 1406, combattu en Guyenne, épousé Jeanne de Navarre puis Jeanne d’Albret (1422). Il navigua entre Armagnacs, Bourguignons et Anglais avant de se rallier à Charles VII. Henri V d’Angleterre tenta en vain de rétablir une vassalité en falsifiant d’anciens hommages, et le traité de Troyes (1420) ignora le Béarn. Sous la surveillance des États, Jean conclut plusieurs traités de neutralité et de commerce : Bordeaux (1425), renouvelé en 1427, confirmé à Montaner (1431). Il étendit son territoire en annexant Castelbon, Mauvezin (1412), la Bigorre, Lautrec, Mauléon et Guiche (1425). Jusqu’à sa mort en 1436, Jean Iᵉʳ maintint l’équilibre entre fidélité à la France et souveraineté béarnaise, assurant la neutralité et la prospérité du pays au cœur des rivalités franco-anglaises et ibériques.
          </p>
          </div>
        )
      },
      {
        titre: "Le Béarn, entre France et Navarre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        À la mort de Jean Iᵉʳ en 1436, le Béarn, souverain de fait depuis près d’un siècle, chercha à faire reconnaître juridiquement son indépendance. Les États de Béarn, déjà garants des libertés du pays, renforcèrent leur autorité pendant la minorité de Gaston IV, placé sous la tutelle de Mathieu de Comminges. Ils lui imposèrent un serment solennel, instituèrent la réunion annuelle de l’assemblée et mirent en place un contrôle étroit du pouvoir vicomtal : promulgation des Établissements de Béarn, encadrement des finances et des ateliers monétaires, indemnité et immunité des députés, création de deux syndics permanents (d’Épée et de Robe) et d’un Abrégé des États chargé des affaires urgentes. Ce système fit du Béarn une véritable petite république d’États, où le prince devait gouverner sous la surveillance d’institutions représentatives. Cette organisation s’inscrivait dans le mouvement européen de limitation du pouvoir princier, comparable aux Cortès ibériques ou aux Diètes d’Empire, mais trouva en Béarn un terrain particulièrement favorable. Les États affirmèrent également la neutralité du pays pour protéger son commerce transfrontalier. Gaston IV confirma cette politique dès 1436, en concluant avec le sénéchal d’Aquitaine Jean de Radcliff un traité garantissant la libre circulation des marchands béarnais dans les territoires anglais et rappelant que l’alliance entre le roi de France et la maison de Foix ne concernait que le comté de Foix, et non le Béarn. Dans la seconde moitié du XVe siècle, cette combinaison originale de souveraineté, de neutralité et de diplomatie commerciale renforça l’indépendance politique du Béarn. 
           </p>
          </div>
        )
      },
        {
        titre: "Le Béarn, entre France et Navarre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Devenu majeur, Gaston IV de Foix-Béarn se distingua dès 1441–1442 dans les campagnes contre les Anglais autour de Saint-Sever et de Dax, au service de Charles VII, tout en préservant la neutralité économique du Béarn avec Bayonne, encore anglaise. En 1443, Charles VII lui demanda d’abandonner dans ses actes la formule souveraine « par la grâce de Dieu ». En échange du titre de lieutenant général du roi en Guyenne et en Gascogne, le vicomte accepta, ce qui alarma les États de Béarn, soucieux de préserver la neutralité et la distinction juridique entre le Foix, vassal de la France, et le Béarn, demeuré souverain. En parallèle, la rivalité entre les maisons de Gramont et de Beaumont agitait la Soule et la Navarre : les premiers restaient fidèles au roi de France, tandis que les seconds, menés par Louis de Beaumont, s’alliaient à la cause anglo-navarraise. En juillet 1449, Gaston IV mit le siège devant Mauléon, tenue par Louis de Beaumont, connétable de Navarre. Le roi de Navarre, venu secourir son connétable, se trouva face à son propre gendre : Gaston IV lui rappela qu’il agissait sur ordre de Charles VII, non contre lui. Le château fut pris au nom du roi de France, et Gaston IV, déjà remarqué pour sa bravoure à Dax, fut fait chevalier, puis confirmé lieutenant général de Gascogne et de Guyenne. Ambitieux, il épousa en 1441 l’infante Éléonore de Navarre, fille de Jean II d’Aragon et de Blanche Iʳᵉ de Navarre, unissant ainsi les destinées du Béarn et de la Navarre. De cette union naquit un espoir d’héritage sur le trône navarrais, mais les querelles dynastiques au sein de la famille d’Aragon plongèrent le royaume dans la guerre civile. En 1455, Jean II, roi « consort » de Navarre, destitua son fils Charles, prince de Viane, de ses droits au trône, provoquant un conflit durable jusqu’à la mort de celui-ci en 1461. Après la mort de la reine Blanche, Jean II épousa en secondes noces Juana Enríquez, dont il eut Ferdinand, futur « Catholique ». À la mort d’Alphonse V d’Aragon en 1458, Jean II devint roi d’Aragon, et en 1461, les Cortes reconnurent Ferdinand comme héritier, écartant Charles de Viane, qui mourut peu après, peut-être empoisonné. Pendant ces luttes, Gaston IV, devenu pair de France en 1458, soutint tour à tour les causes aragonaise et navarraise selon les alliances. En 1462, la guerre civile s’étendit à la Navarre : Blanche de Navarre, sœur de Charles de Viane, fut capturée par son père et confiée à la garde de sa sœur Léonore et de Gaston IV à Orthez. Blanche mourut en 1464, probablement empoisonnée, tandis que Léonore devenait héritière. Louis XI, monté sur le trône en 1461, se méfia d’abord du puissant vicomte : il exigea la restitution de la Soule, mais leurs relations se normalisèrent rapidement. Le mariage de Madeleine de France, sœur du roi, avec Gaston de Foix, fils du vicomte, renforça leurs liens. En 1465, Gaston IV récupéra Mauléon et participa aux affaires du royaume ; il assista aux États généraux de 1468 à la droite du souverain. Pendant ce temps, Jean II et les Beamontais s’appuyèrent sur Ferdinand pour contenir l’influence française en Navarre. En 1467, Léonore céda à son demi-frère Ferdinand ses droits sur l’Aragon, consolidant ainsi la future union ibérique. En 1469, un traité entre Jean II et le duc de Bourgogne reconnut Ferdinand comme « gouverneur général de tous les royaumes ». À la mort d’Henri IV de Castille en 1475, Isabelle et Ferdinand furent proclamés rois de Castille, préparant la réunion des couronnes espagnoles. Entre-temps, Gaston IV continua de gouverner en souverain : il fit de Pau la capitale du Béarn (1464), renforça ses possessions, racheta Lautrec, devint vicomte de Narbonne, et entretint une cour brillante où rayonna son oncle, le cardinal de Foix. Il demeura un allié prudent de Louis XI, tout en préservant la souveraineté béarnaise. À la mort de son fils aîné Gaston en 1470, puis à la sienne en 1472, le Béarn passa à son petit-fils François Phœbus.
        </p>
          </div>
        )
      },
         {
        titre: "Le Béarn face à Louis XI",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     François-Phœbus était seulement âgé de cinq ans donc Louis XI tenta d’en prendre la tutelle, mais les États de Béarn confièrent la régence à Madeleine de France, mère du jeune prince, tout en conservant le pouvoir effectif. La France riposta économiquement : les officiers de Guyenne imposèrent la traite foraine aux marchands béarnais et taxèrent les bergers transhumants. En 1472 et 1477, Louis XI interdit la circulation de la monnaie de Morlàas, provoquant un déclin commercial. Le Béarn, isolé, se tourna vers le Midi français, et plusieurs nobles, comme Gaston du Lion, cherchèrent carrière à la cour de France. Considérés comme étrangers, les Béarnais installés en France étaient soumis au droit d’aubaine. Entre 1476 et 1481, Louis XI leur accorda des lettres de naturalité, notamment à Gaston du Lion, Jean de Méritein et Bernard de la Cornière, tout en précisant que le Béarn n’était « point de son royaume », reconnaissant ainsi son statut particulier. Après négociation avec Louis XI, Madeleine laissa la Soule à la France et, malgré une paix trouvée, ne put stopper les guerres entre Beaumont et Luxe. En 1479, à la mort de Jean II d’Aragon, sa fille Éléonore devint officiellement reine de Navarre le 28 janvier, mais mourut quinze jours plus tard, après avoir désigné pour successeur son petit-fils François-Phœbus de Foix-Béarn, qu’elle exhorta à s’allier à la France. En 1481, François-Phœbus hérita donc du trône de Navarre et fut couronné à Pampelune, unissant le Béarn à une couronne royale. Louis XI et Ferdinand d’Aragon tentèrent d’exercer leur influence par des projets d’alliance matrimoniale. En 1483, François-Phœbus mourut subitement à Pau, à seize ans, probablement empoisonné alors qu’il jouait de la flûte, sans avoir régné sur la partie espagnole de son royaume. Il fut enterré dans la cathédrale de Lescar. Sa sœur Catherine de Foix-Béarn, âgée de treize ans, fut désignée héritière, mais son oncle Jean de Foix contesta la succession. En 1484, les rois catholiques envisagèrent de marier Catherine au fils du prince des Asturies, mais Anne de Beaujeu, régente du royaume de France, intervint pour contrer ces ambitions. Les États de Béarn refusèrent le projet espagnol et conclurent, le 14 juin 1484, le mariage de Catherine avec Jean d’Albret, fils aîné d’Alain sire de Labrit. Le couple s’installa à Pampelune pour pacifier leurs États et entreprit d’unifier le Béarn et la Navarre, notamment par la création projetée d’un évêché commun reliant Lescar et Oloron à Pampelune. La même année, Jean de Foix tenta une insurrection pour faire valoir ses droits à la succession de François-Phœbus. En réponse, Anne de Beaujeu réunit un conseil royal à Montargis le 2 octobre sous l’autorité de Charles VIII. Le conseil distingua le Béarn et la Navarre du royaume de France, limitant la compétence du Parlement de Paris au seul comté de Foix et reconnaissant de fait la souveraineté du Béarn et de la Navarre. Il précisa que seuls leurs assemblées, les Cortès en Navarre et les États en Béarn, pouvaient désigner le successeur de François-Phœbus. Le 5 octobre 1484, les États de Béarn proclamèrent Catherine « Dame Catherine, royne de Navarre, senhora sobereine de Béarn, comtesse de Foix », officialisant la titulature souveraine du Béarn. Entre 1486 et 1491, Ferdinand le Catholique chercha à affermir son influence. En 1486, il organisa l’encerclement militaire de la Navarre. En 1487, il supprima les sauf-conduits des marchands navarrais et les soumit à son autorisation, tandis que la famille Beaumont s’alliait au comte de Lérin, suivant les coutumes castillanes. En 1488, le traité de Valence plaça la Navarre sous tutelle espagnole, censée apaiser les représailles et rouvrir le commerce, mais les troupes castillanes restèrent sur place. En 1491, il fut interdit aux rois de Navarre de marier leurs enfants sans l’accord d’Isabelle et Ferdinand.
        </p>
          </div>
        )
      },
        {
        titre: "La Castille menace Pampelune",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1494, Jean III d’Albret et Catherine arrivèrent à Pampelune dont les portes étaient fermées par ordre de Louis de Beaumont, comte de Lérin. Ils furent finalement couronnés le 13 janvier 1494 dans la cathédrale de Pampelune, lors de grandes fêtes où l’historien Garibay rapporte un chant basque célébrant Labrit et le roi père et fils contre le connétable Louis de Beaumont. En 1495, un accord fut signé à Burgos entre les rois de Navarre et ceux de Castille : le comte de Lérin se rendit, remit ses biens « en faveur du Catholique » et passa en Castille, tandis que la Navarre resta jusqu’en 1500 sous occupation militaire castillane. Entre 1498 et 1511, la Navarre connut de fortes tensions avec la France, la Castille et l’Aragon. En 1498, sous la pression des rois catholiques, elle expulsa les juifs refusant de se convertir. En 1500, le traité de Séville prévit la libération du royaume de l’influence castillane, mais Ferdinand retint à sa cour Madeleine, fille des rois de Navarre, projetant de la marier à un de ses descendants. En 1502, André Fébus, fils aîné de Madeleine, mourut au palais royal de Sangüesa, où naquit peu après Henri, dit “de Sangüesa”, futur Henri II de Navarre et époux de Marguerite de Valois. En 1504, Madeleine mourut à Medina de Madalene, retenue en Castille selon le traité de Séville, la même année que la reine Isabelle la Catholique. En 1505, le traité de Blois fut conclu entre Louis XII et Ferdinand le Catholique pour contrer Philippe le Beau, archiduc d’Autriche et mari de Jeanne la Folle, héritière de Castille : il prévoyait le mariage de Ferdinand, veuf, avec Germaine de Foix, petite-fille de Louis XI, unissant la branche des Foix-Béarn à la couronne d’Aragon et renforçant les prétentions espagnoles sur la Navarre. En 1506, Jean et Catherine signèrent le pacte de Tudela avec Philippe le Beau, mais celui-ci mourut un mois plus tard et Ferdinand reprit le pouvoir. En 1507, le comte de Lérin, trahi par des partisans “beaumontais”, fut expulsé de Navarre avec les troupes castillanes. Le 12 mars, César Borgia, fils du pape Alexandre VI et ancien allié du roi de Navarre, tomba dans une embuscade tendue par les beaumontais et fut tué. En 1508, Louis de Beaumont tenta de récupérer les biens familiaux avec le soutien de Ferdinand, qui préparait déjà l’invasion du royaume. En mars 1509, l’archevêque de Saragosse, fils de Ferdinand, affirma que le véritable titre du royaume revenait au roi d’Aragon, et Ferdinand fit rassembler les textes justifiant ses droits sur le trône de Navarre. En 1511, il signa avec le pape et Venise la “Sainte Ligue”, alliance dirigée contre la France, donnant un prétexte religieux à ses ambitions sur la Navarre.
</p>
          </div>
        )
      },
        {
        titre: "Devant le parlement de Toulouse",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Dans le même temps, au Béarn, Gaston de Foix, petit-fils de Gaston II et neveu de Louis XII, récupéra la Soule en 1506, mais mourut en 1512 à Ravenne, laissant de nouveau la Soule à la France.  Par la suite, le Parlement de Toulouse réagit à l’appel de Jean d’Albret et Catherine de Navarre au pape, qui affirmait la souveraineté du Béarn. Dans un mémoire, il soutint que la vicomté n’était qu’une seigneurie relevant du duché d’Aquitaine. Le 6 mars 1509, Jean et Catherine répondirent par un mémoire déclarant que le Béarn « n’est, ne fust oncques de la juridiction, obéissance ne sujection dudit Monseigneur le roi ». Le débat prit alors une dimension politique majeure autour de la question de la souveraineté béarnaise. Louis XII, engagé dans les guerres d’Italie contre Ferdinand, chercha à maintenir un équilibre pyrénéen. En 1509, il ordonna depuis Grenoble, le 13 avril, l’exécution des amendes prononcées contre Jean d’Albret et Catherine de Navarre, mais ses agents échouèrent à pénétrer en Béarn. Soutenu par le roi, le Parlement de Toulouse ouvrit le 4 juillet 1509 un nouveau procès accusant les souverains de refus d’hommage envers la France. Le 7 janvier 1510, il prononça la confiscation du Béarn. Face à cette décision, les États se réunirent le 26 février 1510 à Sauveterre, en présence de Jean et Catherine, décidant de fortifier le pays tout en privilégiant la diplomatie. Une ambassade fut envoyée à Louis XII, qui ordonna ensuite, le 4 mai 1510, l’exécution de l’arrêt de confiscation, avant d’envisager un partage : la Navarre à la Castille et le Foix-Béarn à la France. Mais la formation de la Sainte Ligue en 1511 changea la donne. Profitant du contexte, les Béarnais proposèrent à Louis XII une alliance contre la Castille en échange de la reconnaissance de leur souveraineté. Craignant un nouveau front pyrénéen, Louis XII accepta d’ouvrir des négociations. Le 2 mai 1512, une ambassade béarnaise arriva à Montrichard, près de Blois. Les délégués exigèrent que la question de la souveraineté fût discutée avant toute alliance, tandis que le roi voulait l’ordre inverse. Finalement, il céda. À Blois, deux commissions furent instituées : l’une pour négocier l’alliance, l’autre pour désigner les arbitres chargés de trancher la compétence du Parlement de Toulouse. Le 8 juillet 1512, Louis XII, qui venait de suspendre son projet de partage du Béarn, fit nommer les arbitres et ouvrit à Blois un arbitrage opposant Jean et Catherine d’Albret, souverains du Béarn et de Navarre, au Parlement de Toulouse, lequel revendiquait sa juridiction sur la vicomté ; les débats s’ouvrirent le 12 juillet suivant. Jean et Catherine confièrent leur défense à Pierre de Fundères, procureur général de la vicomté, tandis que Jean de Nogerolles représentait le Parlement de Toulouse. Les audiences commencèrent le 12 juillet 1512 par les plaidoiries et la remise de « cédulles » explicatives. Le 13 juillet, de nouvelles séances furent consacrées aux réfutations.
</p>
          </div>
        )
      },
        {
        titre: "Le plaidoyer de Pierre de Fundères",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Dans sa défense, Pierre de Fundères affirma que Jean et Catherine « tiennent et possèdent ledit pays et seigneurie de Béarn comme seigneurs souverains, sans reconnaître aucun supérieur temporel ». Il énuméra les prérogatives du souverain béarnais : battre monnaie, faire grâce, lever des impôts, légiférer, rendre justice sans appel et déclarer la guerre. Il appuya sa démonstration sur plusieurs arguments : les Béarnais établis en France devaient obtenir des lettres de naturalité, preuve qu’ils n’étaient pas sujets du roi ; Louis XI avait traversé le Béarn sans y exercer aucun droit royal ; et le conseil de Charles VIII, lors de la crise successorale de 1484–1485, avait reconnu l’indépendance de la vicomté. Pour renforcer sa position, il cita Froissart, Honoré Bonet et Jules César, évoqua la neutralité du Béarn pendant la guerre de Cent Ans, et rappela que le légat pontifical ne pouvait intervenir sans autorisation du souverain local. Il s’appuya également sur des spécificités religieuses et administratives : les limites des diocèses de Lescar et d’Oloron ne coïncidaient pas avec les frontières politiques, la Soule dépendait de l’évêque d’Oloron et Orthez de celui de Dax, d’où la création d’officialités locales à Orthez et Mauléon. Enfin, Fundères rappela qu’aucun officier royal français n’avait jamais exercé en Béarn, tout en admettant que la traite foraine, perçue aux frontières, l’était parfois par des agents du roi de France. Il contesta la compétence du Parlement de Toulouse, démontra l’irrégularité de la procédure intentée contre ses clients et cita les États de Béarn comme garants du droit du pays à choisir librement son seigneur en cas de vacance du pouvoir. Face à lui, Jean de Nogerolles soutint que le Béarn faisait naturellement partie du royaume de France, se situant au nord des Pyrénées, frontières que Jules César aurait déjà assignées à la Gaule. Selon lui, le Parlement de Toulouse était compétent sur tout l’ancien territoire aquitain, de la Garonne aux Pyrénées. Il plaça la frontière entre France et Espagne au col de Roncevaux, légitimant ainsi la division de la Navarre entre la Castille (au sud) et la France (au nord). Pour appuyer sa thèse, Nogerolles rappela que la Bigorre et la Soule, également au nord des Pyrénées, appartenaient au royaume, et cita les hommages féodaux rendus autrefois par Gaston VII et Roger-Bernard III de Foix au duc de Gascogne, alors roi d’Angleterre, comme preuve de vassalité. Il affirma que les vicomtes de Béarn tenaient leurs droits régaliens par concession du roi de France, invoquant la doctrine des droits inaliénables de la couronne, qui permettait à Louis XII d’annuler toute tolérance antérieure. 
</p>        </div>
        )
      },
        {
        titre: "Ferdinand d’Aragon et la résistance du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le 15 juillet 1512, les arbitres réunis à Blois cassèrent les arrêts du Parlement de Toulouse pour incompétence, sans se prononcer sur la souveraineté du Béarn. Quelques jours plus tard, le 21 juillet, les troupes castillanes envahirent la Navarre. En effet, un accord conclu le 9 février 1512 à Londres entre Ferdinand d’Aragon et Henri VIII d’Angleterre prévoyait une offensive contre la France, et Ferdinand profita du contexte pour s’emparer du royaume navarrais, sous prétexte que Jean d’Albret refusait de lui laisser le passage vers la France, alors en guerre pour l’Italie. Le 18 juillet 1512, Louis XII et les rois de Navarre avaient signé un traité de Blois défensif, que Ferdinand transforma en traité offensif par la diffusion d’une copie falsifiée. Prétextant l’appui supposé de Jean et Catherine d’Albret à la France schismatique, il lança ses troupes sur la Navarre. L’armée castillane, forte d’environ 15 000 hommes commandés par le duc d’Albe, envahit la région en évitant les forces françaises stationnées à Bayonne. En septembre 1512, Saint-Jean-Pied-de-Port fut prise, les vallées d’Aspe, Salazar et Roncal conquises, Garris incendiée, le château du seigneur de Luxe soumis et Uhart-Mixe détruit. Jean III et Catherine durent se réfugier à Mauléon, tandis que Ferdinand consolidait sa conquête. Le duc d’Albe fit détruire les maisons fortes, saisir les biens et renforcer la garnison de Saint-Jean-Pied-de-Port. En octobre, Jean d’Albret publia un manifeste contre Ferdinand, proclamant qu’il n’avait aucun droit sur la Navarre, puis lança une contre-offensive avec Pierre de Navarre et Roger de Gramont. Le 19 octobre 1512, la bataille d’Ainhice-Mongelos se solda par un échec. Bien que les Castillans durent un moment abandonner Saint-Jean-Pied-de-Port, ils la reprirent aussitôt. En novembre, la défaite des Navarrais entraîna une nouvelle occupation, et début 1513, les nobles bas-navarrais furent contraints de prêter hommage à Ferdinand, certains, comme les seigneurs de Luxe et de Gramont, refusèrent et virent leurs biens confisqués. Malgré cette soumission forcée, la Basse-Navarre resta profondément hostile à la domination espagnole. Les Cortes ne parvinrent pas à lever les impôts dans les vallées de Mixe, Ostabarès, Iholdy-Armendaritz et Arbéroue ; les collecteurs furent molestés ou emprisonnés, et les habitants invoquèrent la situation de frontière assiégée. Pourtant, les institutions locales survécurent : les juntes de Garris et d’Amendeuix en mars 1514 rassemblèrent plus de 600 notables sous l’autorité du bayle Jaime de Zhala, preuve de la persistance d’une administration autochtone. Ferdinand tenta bien quelques gestes de réparation, ordonnant des indemnisations en 1514 et 1515, mais ces mesures restèrent symboliques. La même année, les États de Basse-Navarre réunis à Uhart-Cize prêtèrent serment de fidélité au roi d’Aragon, tout en envoyant des otages, signe d’une soumission contrainte. L’esprit de résistance, incarné par le poète Bernard de Echepare, emprisonné pour trahison, demeura vivace. Après les révoltes, les troupes castillanes renforcèrent la citadelle de Saint-Jean-Pied-de-Port, détruisirent le château de Garris et occupèrent Saint-Palais. En 1515, sous la direction d’Ochoa de Ursua, la forteresse fut ravitaillée et armée, bien que le duc de Nájera jugeât ces efforts vains. Dès février 1516, la défense fut concentrée sur le château d’Ultrapu, plus sûr.
</p>        </div>
        )
      },
  {
        titre: "La régence d’Alain et la défense du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
À la mort de Catherine de Navarre en 1517, Jean d’Albret ne conserva plus que la Basse-Navarre, tandis que l’influence française progressait en Béarn. Louis XII, désireux de ménager les Béarnais, avait suspendu toute annexion, reconnaissant implicitement leur souveraineté. La mort de Catherine d’Albret en 1517 fut suivie d’une tentative française d’annexion du Béarn. Le contexte semblait favorable : l’héritier, Henri II d’Albret, n’avait que quatorze ans et vivait depuis 1515 à la cour de son oncle François Ier. Le roi et sa mère, Louise de Savoie, voulurent exercer sa tutelle. Mais les États de Béarn, soucieux de préserver l’indépendance du pays, rejetèrent cette tutelle et confièrent la régence au vieux Alain d’Albret. Une délégation ramena le jeune Henri en Béarn, où il fut proclamé « senhor soubiran ». Estimant le moment opportun, le pouvoir royal tenta une intervention armée : des troupes françaises, convaincues de trouver des alliés en Béarn, envahirent la vicomté mais furent repoussées. La trêve tacite conclue en 1512 lors de l’arbitrage de Blois fut ainsi rompue. Dès lors, l’affrontement entre la France et le Béarn reprit, ouvertement ou non, jusqu’au début du XVIIᵉ siècle. Victorieux en 1517, les Béarnais profitèrent de la situation pour affirmer que Louis XII avait reconnu en 1512 la souveraineté juridique du Béarn. Cette idée reposait sur une déclaration de Pierre de Biaix, arbitre à Blois, selon laquelle « le pays de Béarn est pays de par soi, tenu par ses seigneurs sans reconnaître de supérieur ». Pourtant, malgré ce discours, les souverains du Béarn ne nommèrent jamais d’ambassadeurs auprès des cours étrangères, signe que leur indépendance demeurait ambiguë sur le plan juridique. Face à cette résistance, la monarchie française temporisa tout en maintenant ses pressions. Le chancelier Duprat refusa d’accorder des « lettres de naturalité » aux Béarnais installés en France, tout en précisant que leurs biens n’étaient pas menacés, bien que « le roi ne fût point souverain seigneur du Béarn ». Autrement dit, les Béarnais n’étaient ni entièrement sujets du roi, ni complètement étrangers. De même, la traite foraine fut perçue de manière irrégulière aux frontières, selon les intérêts de l’administration royale. En 1519, durant cette période de tension, Alain d’Albret créa à Pau le Conseil souverain, inspiré du modèle navarrais d’avant 1512, afin de centraliser la justice et d’affirmer l’indépendance du Béarn.
</p>       </div>
        )
      },
       {
        titre: "La chute de Noain",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1521, Henri II d’Albret mena la reconquête de la Haute-Navarre, d’abord victorieuse à Pampelune, où Ignace de Loyola fut blessé, puis tragiquement brisée à Esquiroz et surtout à la bataille de Noain le 30 juin 1521. En quarante jours, les troupes franco-navarraises avaient repris Saint-Jean-Pied-de-Port et libéré tout le royaume, avant d’être repoussées par les 30 000 hommes impériaux du duc de Nájera. La chute définitive de Saint-Jean-Pied-de-Port en août 1521, suivie de la mort du capitaine Juancot d’Arbeloa, marqua la fin de cette brève reconquête et l’intégration durable de la Haute-Navarre dans la monarchie espagnole. Le 10 mai 1521, l’armée d’André de Foix, seigneur d’Asparros, forte de 12 000 hommes et d’une artillerie lourde, était prête à reconquérir la Navarre. Le 12 mai, le siège de Saint-Jean-Pied-de-Port débuta. Le comte de Lerín, chef du parti beaumontais, tenta de secourir la place mais fut battu à Baïgorry et s’enfuit avec près de 2 000 Bas-Navarrais. Le 13 mai, le duc de Nájera rapporta que plusieurs villes, dont Saint-Palais, s’étaient soulevées et que les Bas-Navarrais se levaient pour Jean d’Albret. Le 15 mai, Saint-Jean-Pied-de-Port tomba, suivie du fort de Château-Pignon, et l’armée franco-navarraise atteignit les portes de Pampelune, que le vice-roi quitta le 17. Cependant, la reconquête fut de courte durée. Après la lourde défaite de Noain le 30 juin 1521, les Navarrais se replièrent vers Espelette, en Labourd. Certains résistèrent encore à Saint-Jean-Pied-de-Port : après vingt et un jours de siège, sur six cents défenseurs, trois cents furent tués, y compris leur capitaine. Après la chute de la ville, le capitaine Juanicot fut capturé puis exécuté à Pampelune le 25 août avec quatre de ses compagnons. Le beaumontais Juan de Torrelblanca fut envoyé en France pour intercepter les fuyards sur la route de Cize à Bayonne, voie stratégique traversant l’Arbéroue. En juillet 1522, la guerre reprit en Navarre. Le fort de Maya, défendu avec bravoure par le jeune Léon d’Espelette et le seigneur de Belzunce, résista d’abord à l’assaut impérial. Le 19 (ou 22) juillet, après un siège héroïque, la forteresse fut finalement prise par les Impériaux. Cent cinquante-deux Bas-Navarrais, originaires des deux versants pyrénéens, furent capturés et exclus du décret de pardon du 25 décembre 1523. Parmi eux se trouvaient plusieurs nobles : Charles et Victor de Mauléon, François de Beaumont, Martin de Lagarde, François d’Espelette, Roger de Gramont, ainsi qu’Arnaud, Marie et Tristan de Hosta (ou Ozta). Certains, comme Juan Perez de Osta, converti au christianisme, furent recensés à Pampelune, tandis que d’autres conservaient en Navarre les noms de leurs villages d’origine. Le 18 octobre 1522, les survivants de l’armée d’Asparros, appuyés par des troupes françaises, reprirent le château de Fontarabie, tandis que d’autres forces occupaient à nouveau le fort de Maya. Belzunce y perdit son étendard avant d’être secouru par Martin d’Ursua. Malgré ces succès ponctuels, la guerre continua : la forteresse de Maya fut détruite le 22 juillet, et plusieurs maisons fortes, dont celles de Jaureguizar et de Bertiz, furent rasées. Les rescapés rejoignirent alors les troupes françaises retranchées à Fontarabie, où Charles Quint échoua à asseoir sa domination. Le 24 novembre 1522, le maréchal de Navarre fut assassiné près de Simancas, et les biens des rebelles furent confisqués.
</p>       </div>
        )
      },
 {
        titre: "La Navarre déchirée",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1523, Charles Quint lança une nouvelle campagne contre la Basse-Navarre et le Labourd, mobilisant 24 000 hommes. Ses troupes ravagèrent Saint-Palais, Mauléon et Ustaritz, mais l’expédition échoua. Malgré ces dévastations, Henri II d’Albret conserva son autorité en Basse-Navarre. Le 28 août 1523, les États de Basse-Navarre furent réunis à Saint-Palais. Le commissaire d’Henri II, Bertrand d’Abbadie, y renouvela au nom du roi le serment de garder les fors et libertés du royaume. Le 1ᵉʳ septembre, Henri II confirma ces privilèges à Navarrenx devant vingt-six délégués représentant les villes, le clergé et la noblesse. Il institua deux sessions annuelles des États, créa une chancellerie suprême composée d’un président et de six conseillers, et fit battre une monnaie propre à la Basse-Navarre, geste hautement symbolique face à Charles Quint. Saint-Palais, devenu le centre d’opérations du Béarn et du sud de la France, fut toutefois abandonné le jour de Noël 1523 après le raid du prince d’Orange sur la Soule, le Labourd et la Basse-Navarre. En 1524, malgré la poursuite des troubles, les Français perdirent un quart de leurs effectifs. Fontarabie, assiégée, tomba le 27 février ; les Navarrais obtinrent ensuite le pardon royal le 29 février, mais abandonnèrent définitivement la place le 29 avril, mettant fin à la résistance organisée face au pouvoir impérial. En 1525, la victoire impériale de Pavie, où François Iᵉʳ et Henri II d’Albret furent faits prisonniers, ce dernier parvenant à s’évader, consacra la domination de Charles Quint sur la Navarre. Cette défaite marqua une rupture décisive : la Navarre fut durablement divisée en deux entités, la Haute-Navarre demeurant sous domination espagnole, tandis que la Basse-Navarre restait attachée à la dynastie des Albret. Dès le 19 mai 1525, plusieurs nobles bas-navarrais prêtèrent serment d’allégeance à Charles Quint, recevant à partir du 18 août des gratifications annuelles financées par les taxes levées sur la « Terre des Basques, Mixe, Ostabaret et leurs vallées », dont la perception demeurait difficile dans des régions encore rebelles. Le traité de Madrid du 14 janvier 1526, signé entre François Iᵉʳ et Charles Quint, scella cette séparation : le roi de France renonçait à ses prétentions sur l’Italie et la Bourgogne, tandis que l’empereur projetait de marier sa sœur, Léonore d’Autriche, à Henri II d’Albret afin de lui faire abandonner ses droits sur la Navarre. Henri refusa, et en janvier 1527, il épousa finalement Marguerite de Valois, sœur de François Iᵉʳ, une union déjà négociée depuis 1525. Ensemble, ils fondèrent la Chambre des Comptes de Pau, organe administratif et financier du Béarn, renforçant l’autonomie du pays face à la France. Pendant ce temps, la Navarre subit une période de répression marquée par des procès pour sorcellerie, des confiscations et la castillanisation de son administration. Entre 1525 et 1527, les ordonnances impériales instaurèrent de nouveaux impôts et alignèrent les institutions sur le modèle castillan, conduisant à l’extinction du For Général. La résistance persista : le 5 mai 1527, des habitants de la vallée d’Ossès furent condamnés pour avoir refusé de payer les impôts « selon l’usage et la coutume ». Un incident éclata à Ascarat, où des gens venus d’Ossès enlevèrent des bœufs en guise de tribut ; une vingtaine d’hommes armés de Saint-Jean-Pied-de-Port, alors occupé par les Impériaux, vinrent les reprendre près d’Uhart-Cize. Le commissaire royal Hernando de la Serna réprima l’émeute et fit emprisonner Miguel de Aice, libéré six mois plus tard contre rançon. Ces épisodes illustrent la ténacité de la résistance bas-navarraise, marquée par le refus des taxes abusives et la lente soumission administrative à l’autorité impériale.
</p>       </div>
        )
      },
      {
        titre: "La paix des Dames",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En juillet 1527, un édit royal publié à Garris plaça sous tutelle les juridictions civiles et ecclésiastiques pour faciliter la levée des impôts, tandis que les derniers serments d’allégeance furent obtenus sous contrainte : celui de Saint-Jean-Pied-de-Port, dirigé par le bayle Pedro de Armendariz, puis ceux des vallées de Baïgorry et d’Ultrapuertus, le 28 septembre. Le 30 septembre, les députés d’Ossès, Johanes de Bidazabal, Petri d’Ameztoii et Johanes de Mendikoaga, prêtèrent à leur tour serment, suivis par les autres communautés jusqu’au 8 octobre. Enfin, en février 1528, Charles Quint accorda de nouvelles grâces impériales, confirmant la fin progressive de la résistance navarraise. Cette même année 1527, la Basse-Navarre, épuisée par les campagnes successives, se soumit définitivement à Charles Quint, tandis qu’Henri II d’Albret épousait Marguerite d’Angoulême, sœur de François Iᵉʳ, une alliance qui rapprocha durablement la maison d’Albret de la France. Charles Quint reconnut la suzeraineté française sur le Béarn, tout en maintenant la Haute-Navarre sous domination espagnole et en rattachant le château de Mauléon au gouvernement de Guyenne. La Basse-Navarre, restée fidèle aux Albret, reçut alors le statut d’une principauté autonome, confirmé en 1530 par un don royal de 2 000 livres. Après cette date, la séparation entre Haute-Navarre espagnole et Basse-Navarre française fut définitivement établie. Les seigneurs partisans des Albret, dont les Gramont, réclamèrent sans succès la restitution de leurs biens confisqués. En 1533, Charles Quint ordonna une enquête sur les droits des sujets du roi de France, puis, en 1534, la restitution partielle des domaines saisis depuis 1521. Dans son testament, il reconnut l’injustice de l’usurpation du royaume de Navarre, mais son fils Philippe II n’en tira aucune conséquence. Après 1528, bien que considérée comme perdue pour les Impériaux, la Basse-Navarre conserva encore une administration espagnole à Burguete jusqu’en 1533. Malgré les interdictions impériales, les échanges commerciaux et pastoraux entre les deux versants pyrénéens se poursuivirent : Charles Quint interdit en 1529 l’entrée dans son royaume de toute personne venant de France, du Béarn ou de Basse-Navarre, mais la Chambre des Comptes autorisa encore en 1528 le passage du bétail par les cols. Une frontière stable fut fixée vers 1530, et les relations pastorales se maintinrent, comme le prouve la facerie conclue entre Bastan et Ossès en 1547, garantissant les droits traditionnels de pâturage. En 1529, la « paix des Dames » ou traité de Cambrai, signée entre Marguerite d’Autriche et Louise de Savoie d’un côté, et Marguerite de Navarre de l’autre, mit fin provisoirement au conflit entre la France et l’Empire. Les litiges sur la restitution des biens navarrais se prolongèrent toutefois jusqu’en 1539. La Haute-Navarre devint une province espagnole sans autonomie, tandis que la Basse-Navarre resta liée aux Albret, dont Henri IV, petit-fils d’Henri II, hériterait plus tard la légitimité. Sur le plan intérieur, en l’absence d’Henri II, le pouvoir fut exercé à partir de 1535 par sa sœur Anne d’Albret et Jacques de Foix, évêque de Lescar et chancelier de Foix-Béarn. Entre 1538 pet 1547, Henri transforma la bastide de Navarrenx en une forteresse bastionnée sur les plans de l’ingénieur Antonio de Castello, suscitant l’inquiétude de Charles Quint, qui craignait qu’elle ne serve de base à une expédition française. En 1545, Tristan de Monein devint le premier gouverneur de la forteresse, et en 1546, les États du Béarn demandèrent la révision de ses fortifications. Henri signa les nouveaux règlements militaires en 1551, adoptés et imprimés en béarnais en 1552, illustrant la vitalité politique du pays. Sur le plan extérieur, Henri tenta en vain de reconquérir la Haute-Navarre, que Charles Quint refusa toujours de lui restituer, ne lui reconnaissant que le titre de prince de Béarn. Cependant, les États de Béarn restèrent farouchement attachés à leur souveraineté : ils refusèrent les documents rédigés en français, réservèrent les fonctions publiques aux natifs du pays et affirmèrent leur statut d’État indépendant face à la monarchie française. À la mort de sa femme, Henri voulut épouser la duchesse de Lorraine (nièce de Charles Quint) ou Juana, sa fille (il aurait obtenu la Navarre en dot s’il la déshéritait). Il avait élaboré des plans d’invasion espagnole par Bordeaux et Toulouse jusqu’à Pau.
</p>       </div>
        )
      },
  {
        titre: "Entre foi nouvelle et liberté du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Au début du XVIᵉ siècle, un profond mouvement de réforme morale et spirituelle agita la chrétienté. En France, des humanistes tels que Lefèvre d’Étaples et Érasme, inspirés par l’Antiquité et les langues bibliques, prônèrent un retour aux Écritures. En Allemagne, Luther s’éleva en 1517 contre le Saint-Siège à propos des indulgences. En France, Guillaume Briçonnet, évêque de Meaux, et son disciple Gérard Roussel, futur évêque d’Oloron, tentèrent de réformer l’Église de l’intérieur. Sous François Ier, la situation religieuse connut une évolution complexe : le Concordat de Bologne (1516), signé avec Léon X, donna au roi la mainmise sur les nominations ecclésiastiques, renforçant le contrôle de l’État sur l’Église gallicane. Cependant, l’Église conserva une influence profonde sur la vie quotidienne, les mœurs et l’enseignement, si bien que la réforme restait étroitement surveillée par les autorités religieuses. François Ier, d’abord bienveillant, changea d’attitude après la condamnation de la Réforme par la Sorbonne et le Parlement de Paris. En 1534, la tension culmina avec l’affaire des Placards : un conflit ouvert entre le roi et les milieux évangéliques, qui marqua la rupture entre l’État et les réformateurs. François Ier se montra plus prudent, mais Marguerite d’Angoulême, sa sœur, persista dans son œuvre spirituelle. Elle avait publié un ouvrage mystique, le Miroir de l’âme pécheresse, condamné par la faculté de théologie de Paris, mais soutenu par de nombreux humanistes. Les réformateurs, contraints à la fuite, trouvèrent refuge auprès de Marguerite, devenue reine de Navarre par son mariage avec Henri II d’Albret en 1527. Installés à Nérac puis à Pau, Marguerite et Henri firent de leur cour un centre d’humanisme chrétien et un refuge pour les évangéliques persécutés. On y rencontrait Gérard Roussel, évêque d’Oloron, Clément Marot, Jacques Lefèvre d’Étaples et même Jean Calvin à ses débuts. Marguerite, sensible aux idées nouvelles mais fidèle à Rome, voulait purifier l’Église sans la détruire. Roussel, prêchant avec piété et rigueur morale, incarnait cet évangélisme modéré que Calvin lui reprocha vivement. Ses sermons, ses aumônes et son austérité firent de lui une figure respectée, mais controversée : les uns l’accusaient d’être trop conciliant, d’autres trop novateur. Après la mort de Marguerite, Henri II d’Albret maintint la protection de Roussel, dont la modération et le rejet de la violence correspondaient à sa propre politique religieuse. En Béarn, il favorisa un compromis liturgique : le Credo, le Pater et le Dialogue furent traduits en langue vulgaire pour la compréhension du peuple. Mais pour les calvinistes radicaux, cela ne suffisait pas : ils dénonçaient l’inaction du roi et cherchaient à atteindre les représentants du pouvoir royal et les agents de la monarchie. En Soule, région voisine du Béarn et de la Basse-Navarre, ces tensions se traduisirent par des affaires d’hérésie, comme celle de Mauléon en 1546, où plusieurs habitants furent condamnés pour avoir prié hors de l’Église, un signe de la pénétration des idées réformatrices jusque dans les vallées basques. Sous l’influence de Marguerite d’Angoulême, le Béarn devint à son tour un refuge pour les prédicateurs et les intellectuels réformés. Henri II d’Albret, tout en restant l’allié fidèle de François Ier, refusa d’autoriser leur arrestation sur son territoire, affirmant ainsi la souveraineté du Béarn et sa liberté religieuse. Marguerite l’encouragea à défendre ce principe, rappelant que la protection des réfugiés constituait un acte d’indépendance politique autant que spirituelle. Dès lors, la défense de la souveraineté béarnaise se confondit avec la diffusion du protestantisme.
</p>       </div>
        )
      },
     ,
  {
        titre: "Jeanne d’Albret, l’enfance d’une reine",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Jeanne d’Albret naquit en novembre 1528 à Saint-Germain-en-Laye, fille de Marguerite de Navarre et d’Henri d’Albret, roi de Navarre. Son oncle, François Ier, régnait sur la France. par sa mère, déjà engagée dans l’évangélisme et protectrice de poètes et théologiens réformateurs, elle a un goût précoce pour la politique, la religion et les lettres. Mais l’enfant grandit surtout auprès de sa gouvernante, Aymée de Lafayette, amie de Marguerite et Baillive de Caen. confinée entre les sombres murailles de ce château de Plessis-lès-Tours. Sa mère, qui introduisit la Renaissance italienne en France et, selon René Doumic, fut une protectrice des lettres encore plus éclairée que François Ier lui-même. et qui soutenait la devotio moderna, une réforme intérieure de la foi, qui marqua durablement l’éducation de Jeanne, était malheureusement comme hypnotisée par l'éclat qui entourait la prestance, l'esprit et le trône de son frère. Dès 1538, le mariage de Jeanne devint un véritable enjeu diplomatique : son père souhaitait l’unir à l’infant Philippe pour récupérer la Haute-Navarre, tandis que François Ier préférait la marier au duc de Clèves. La paix, que le connétable de Montmorency prônait sans relâche, semblait pourtant encore lointaine. Charles Quint, lors de sa visite, trouva Jeanne intéressante, mais il n’était évidemment pas prêt à céder la Haute-Navarre ni à arranger les affaires de François Ier. Marguerite, sa mère, se retrouva « entre deux feux », dans une tension extrême, puisque son mari refusait ces projets. Les États de Navarre tranchèrent en affirmant qu’on ne marierait pas Jeanne à un prince étranger. François Ier lui présenta alors le duc de Clèves. Jeanne, soutenue par son père, refusa et osa contester. Jeanne alla jusqu’à préférer entrer au couvent plutôt que de céder. Mais l’affaire se conclut de force : elle protesta jusqu’au bout, avant d’être physiquement emmenée par le connétable, sur ordre du roi. Le connétable démissionna ensuite de cette responsabilité, mais Jeanne, âgée d’à peine douze ans, avait déjà protesté solennellement contre la violence qui lui était faite. Elle dut subir une véritable fustigation ….. sur ordre de sa « tendre mère », et si le mariage fut célébré en 1541, la consommation n’eut bien sûr pas lieu. En 1545, le mariage fut annulé : l’union s’était révélée stérile et le duc s’était finalement rapproché de Charles Quint. Jeanne, de son côté, témoigna elle-même des violences subies pour la contraindre à ce mariage, relatant menaces et châtiments infligés sur ordre maternel. Sa résistance, exceptionnelle pour une enfant de son âge, marqua un des premiers témoignages directs conservés de sa voix. Ce mariage forcé signa symboliquement la fin de son enfance : non seulement par l’union imposée, mais aussi parce qu’il fut l’occasion de ses premiers mots mémorables, prononcés alors qu’elle se sentait totalement impuissante.
</p>       </div>
        )
      },

       {
        titre: "Entre couronne et Réforme",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1548, Jeanne d’Albret épouse à Moulins Antoine de Bourbon, qu’elle avait aimé à la cour, mais cette union n’apporte finalement rien sur le plan diplomatique. Sept ans plus tard, à la mort de son père, elle devient reine de Navarre et souveraine du Béarn. Comme Antoine est un Bourbon et non un Béarnais, seule Jeanne prête serment devant son peuple et ouvre ses États à l’influence calviniste, faisant venir des prédicants dans les maisons aristocratiques et dans tout le Béarn. Sa vie familiale est marquée par des drames : la négligence de ses gouvernantes lui coûte la mort de quatre enfants, et elle veille avec attention sur sa fille Catherine, très malade. Bien avant sa conversion, Jeanne protège déjà ses sujets protestants, empêchant qu’ils soient maltraités et veillant à ce qu’ils puissent librement choisir d’écouter le curé catholique ou le pasteur réformé. Sa sincérité et les sacrifices qu’elle consent ensuite pour la Réforme en témoignent. Lors de son mariage avec Antoine de Bourbon, le roi de France tenta d’échanger les domaines pyrénéens des Albret contre des terres situées au centre du royaume, afin de mieux contrôler cette région stratégique face aux Habsbourg. À la mort d’Henri II d’Albret, Henri II de France retint Antoine à sa cour et fit occuper militairement le Béarn-Navarre et le pays de Foix. Fidèle à ses sujets, Antoine refusa de trahir leur indépendance, organisa la défense locale et autorisa les États à solliciter l’aide de l’Espagne, une mesure qui témoigne de la défiance persistante envers la tutelle française. Devenue reine de Navarre en 1555, Jeanne d’Albret applique en août 1555 les suites de l’ordonnance de 1546 imposant la foi catholique. Cependant, sa conviction se renforce : elle estime que le temps du « dilettantisme tolérant » d’Érasme est révolu. Dans une lettre du 22 août 1555 adressée au vicomte de Gourdon, Jeanne d’Albret affirme que la réforme de l’Église est « juste et nécessaire ». Elle introduit les premiers ministres protestants en Béarn sans que son oncle, l’évêque de Lescar, ne s’en aperçoive. En 1557, Antoine de Bourbon, son époux, fait venir le prédicateur Le Gay, dit Boisnormand, qui prêche d’abord au château de Pau, puis dans tout le Béarn et à Nérac. La même année, Antoine de Bourbon, dans l’espoir de récupérer Pampelune, négocie une alliance contre la France avec Philippe II. En mars se déroule le désastre de Saint-Quentin. Antoine, cousin du roi, est excusé et revient à la cour. Mais, en pleine négociation entre Français et Espagnols, la guerre ne s’arrête pas : Philippe II envahit le Pays basque et s’empare de Saint-Jean-de-Luz. Navarrais et Français s’allient alors pour écarter leur ennemi commun. Cependant, Antoine veut davantage et attaque la Navarre, alors que l’Espagne est encore en pleine négociation avec la France. Il échoue, et s’ensuit le traité de Cateau-Cambrésis.
</p>       </div>
        )
      },
       {
        titre: "La conversion de Jeanne d’Albret",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1558, Jeanne d’Albret et Antoine de Bourbon n’assistent pas aux États généraux où Calvin espérait leur présence, car le réformateur plaçait de grands espoirs dans la maison de Bourbon. À La Rochelle, par l’intermédiaire de Jeanne, le pasteur Pierre David met en scène une pièce symbolisant l’Église malade guérie par un pasteur. Peu après, Antoine emmène le jeune Henri, futur Henri IV, assister aux sermons de Barbaste et de Boisnormand à Pâques 1559. Les pasteurs parisiens Chandieu et Morel reprochent ensuite à Antoine sa timidité, contrastant avec la fermeté de Jeanne. Le pape Paul IV la considérait d’ailleurs comme « pire que sa mère, qui a infesté la maison de Vendôme » (17 août). À la mort d’Henri II, Catherine de Médicis, jusque-là peu influente sous le règne de son mari, devient régente d’un royaume profondément divisé par les tensions religieuses. La puissante famille de Guise en profite pour renforcer son emprise à la cour. Le conseil de Navarre, davantage tourné vers l’Espagne que vers la cause navarraise, invite alors Antoine de Bourbon à se rendre à Paris. Il s’y rend accompagné de son frère Louis de Condé, de son cousin le prince de La Roche-sur-Yon, ainsi que des neveux du connétable de Montmorency, François d’Andelot et Coligny. À Paris, Catherine de Médicis confie à Antoine la mission d’accompagner sa fille Élisabeth de Valois en Espagne pour son mariage avec Philippe II, mais celui-ci refuse de faire le déplacement, le roi d’Espagne ne le désignant que sous le titre de « duc de Vendôme ». Antoine cherche ensuite, par tous les moyens, à obtenir une véritable couronne. Il tente de marier son fils à la fille du roi de Bohême ou à l’archiduc Maximilien d’Autriche, et propose même d’abandonner la Navarre en échange d’une autre principauté, comme le Milanais, la Sardaigne ou la Tunisie. L’Espagne entretient alors une diplomatie lente et ambiguë, espérant tirer profit de ses ambitions. Au retour de Roncevaux en 1559, Antoine se déclare prêt à aider l’Espagne à envahir la Guyenne et à partager la France en deux avec l’empereur, persuadé que Catherine de Médicis ne défend que mollement ses prétentions. Il va jusqu’à promettre que son fils renoncerait au protestantisme et propose même d’envoyer le jeune Henri comme otage en Sardaigne, mais il meurt avant d’avoir pu réaliser ces projets. En 1560, la France entre dans une période de graves tensions religieuses. La conjuration d’Amboise, organisée contre l’avis de Calvin par le gentilhomme périgourdin La Renaudie, rassemble près de dix mille hommes venus de Gascogne pour réclamer le renvoi des Guise et la liberté de culte. Condé et Antoine de Bourbon, informés du complot, n’y participent pas directement, mais l’affaire tourne rapidement au désastre : la révolte est écrasée par les Lorrains. Face à cet échec, Antoine cherche des appuis à l’étranger, notamment auprès d’Élisabeth d’Angleterre et des princes protestants allemands. Dans le même temps, François Hotman publie son virulent Épître au Tigre de France contre le cardinal de Lorraine, tandis que Théodore de Bèze rejoint Nérac, où il devient le conseiller spirituel de Jeanne d’Albret. Le 25 décembre 1560, celle-ci fait publiquement profession de foi réformée, déclarant avoir été « retirée de l’idolâtrie par la grâce divine ». Cette conversion ouverte transforme la souveraine du Béarn en véritable chef moral du parti réformé. À la cour de France, Catherine de Médicis, désormais régente, tente de maintenir un fragile équilibre entre catholiques et protestants, mais les Guise, profitant de la faiblesse du pouvoir royal, s’imposent et marginalisent progressivement les réformés.
</p>       </div>
        )
      },
       {
        titre: "Jeanne d’Albret, la réformatrice du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1561, Jeanne d’Albret se rend à Paris, où elle est reçue comme une étrangère. Malgré cet accueil froid, elle y affirme son autorité en célébrant le mariage de son neveu sous la bénédiction du réformateur Théodore de Bèze et en participant activement au colloque de Poissy, convoqué par Catherine de Médicis dans le cadre de sa politique œcuménique. Ce colloque, destiné à rapprocher catholiques et protestants, se solde par un échec qui accentue encore la fracture religieuse du royaume. Catherine de Médicis, cherchant à apaiser les tensions, fait réciter à ses enfants les prières en français. À cette époque, on estime à environ deux millions le nombre de protestants en France. Certains tentent même de convertir le roi et sa famille, le jeune futur Henri III aurait, dit-on, jeté au feu le livre d’heures de sa sœur. Antoine de Bourbon, quant à lui, pratique la messe à la fois avec Charles IX et avec Jeanne, illustrant la complexité de sa position religieuse. Cela scandalise l’Espagne qui juge Catherine trop conciliante et considère sa politique religieuse comme honteuse. Voyant son ouverture excessive, Catherine de Médicis se rend compte de son erreur et adopte bientôt une attitude beaucoup plus ferme envers le protestantisme au sein de sa propre maison. Cette même année, Jeanne promulgue un règlement fondamental pour le Béarn, instaurant un synode annuel à Orthez. Elle fait venir de Genève un pasteur envoyé par Calvin, Jean Reymond Merlin, chargé d’établir un règlement pour la nouvelle Église réformée de Béarn-Navarre. Ce synode, réunissant pasteurs et représentants des paroisses, organise la vie spirituelle et morale du pays. Dans le même mouvement, Jeanne interdit les processions catholiques et fonde une académie protestante à Lescar, plus tard transférée à Orthez, destinée à former les futurs pasteurs, en fixant leurs salaires, pensions et avantages. Par ces réformes, elle réorganise profondément la vie religieuse et morale de ses États, tout en s’efforçant de maintenir la paix civile. En juillet 1561, elle publie l’ordonnance de Nérac, qui autorise catholiques et protestants à partager les mêmes lieux de culte selon le principe du simultaneum, un acte de tolérance exceptionnel pour l’époque. Dans une lettre à son oncle, l’évêque de Lescar, Jeanne justifie cette mesure au nom de la concorde civile et de l’obéissance aux ordonnances souveraines. Sous l’influence de l’ambassadeur d’Espagne, Antoine de Bourbon impose à leur fils Henri une éducation catholique. Le précepteur protestant La Gaucherie est remplacé par un enseignant catholique, et le jeune prince, alors âgé de huit ans, résiste plusieurs mois avant de céder et d’assister à la messe pour la première fois le 1er juin 1562.
</p>       </div>
        )
      }
    ]
  },
   'navarre': {
    titre: "Tournée vers Paris",
    periode: "Renaissance",
    resume: "Le Béarn embrasse la Réforme protestante",
    introduction: "Entre héritage et réforme, Jeanne d’Albret gouverne libre....",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Le massacre de Wassy",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     En mars 1562, le massacre de Wassy, où les troupes du duc de Guise attaquent des fidèles huguenots, provoque une vague de violences dans tout le royaume. Catherine de Médicis, d’abord hésitante, tente de s’allier avec Louis de Condé et envisage de confier à Jeanne un rôle de médiatrice entre les deux camps. Mais les Guise et le connétable de Montmorency s’y opposent avec vigueur. Sous leur pression, Jeanne est contrainte de quitter la cour et se réfugie à Vendôme, séparée de son fils Henri. À Paris, Théodore de Bèze et l’amiral de Coligny soutiennent alors la politique conciliante du chancelier Michel de L’Hospital, auteur de l’édit de janvier 1562, qui reconnaît officiellement le culte réformé en France. On compte alors environ deux millions de protestants dans le royaume. Cependant, sous l’influence du pape, Catherine de Médicis renforce la discipline religieuse à la cour et s’éloigne progressivement du parti réformé. La première guerre de Religion éclate. Antoine de Bourbon, lieutenant général du royaume, prend le commandement des troupes royales et meurt au siège de Rouen en novembre 1562. Pendant ce temps, Jeanne, réfugiée à Orthez, consolide son autorité : elle fait venir le pasteur Jean Reymond Merlin, fonde un synode et structure la nouvelle Église réformée de Béarn-Navarre. Mais après le massacre de Wassy, où les troupes du duc de Guise massacrent des huguenots, le climat religieux s’enflamme dans tout le royaume. Guise est acclamé comme un nouveau David, et les violences se multiplient. Dans ce contexte tendu, Antoine, qualifié de « nouveau Julien l’Apostat » par Bèze, s’en prend à Jeanne : il veut la faire exiler chez Philippe de Lenoncourt, évêque de Châlons, car elle avait désobéi à son interdiction d’assister à la messe et s’était rendue auprès de Condé pour y participer. Loin des Pyrénées et de ses cures thermales, on craint alors pour sa vie, ce qui ne déplaît guère à Antoine, qui rêve d’épouser Marie Stuart, la veuve de François II, afin de se rapprocher des Guise et de renforcer sa position politique. Catherine de Médicis, soucieuse de préserver l’équilibre des forces, compte sur Jeanne pour maintenir la stabilité du royaume, tandis que Calvin lui-même lui écrit pour l’exhorter à tenir bon. Cependant, l’ambassadeur d’Espagne, Chantonnay, parvient à obtenir son exil. Jeanne, qui avait déjà refusé d’assister au baptême de son fils, devient la cible des pressions conjuguées d’Antoine et de Catherine, poussés par l’ambassadeur espagnol à la chasser de la cour. Hésitante, Catherine de Médicis tente un moment de s’allier à Condé et envisage d’utiliser Jeanne comme intermédiaire entre les deux partis religieux, mais les Guise et le connétable de Montmorency déjouent ses plans. Jeanne est alors contrainte de fuir à Vendôme, séparée de son fils Henri. Tandis que Catherine cherche à rapprocher les Bourbons, premiers princes du sang, un triumvirat catholique se forme pour contrebalancer leur influence. Privée de soutien, Jeanne perd la protection royale. Elle rejoint Vendôme avec sa fille, laissant son fils à la cour, où se produit le Scandale de Vendôme, sans son consentement. Antoine, voulant venger les cendres de ses parents, envoie Blaise de Monluc, capitaine catholique du roi en Guyenne, pour capturer Jeanne. Mais la reine de Navarre parvient à s’échapper par la Gascogne occidentale, échappant ainsi à la poursuite. Après la mort d’Antoine (qui s’était converti au luthéranisme), Jeanne n’est plus considérée comme une hérétique en exil par Catherine, mais comme une puissance indépendante. Progressivement, Jeanne renoue un lien de confiance avec Catherine de Médicis, notamment grâce à des intermédiaires comme Victor Bordeaux de La Chassetière, agent navarrais à Paris. Les deux femmes finissent même par échanger une correspondance cordiale et font ensemble quelques emplettes.
        </p>
          </div>
        )
      },
    
       {
        titre: "Entre foi réformée et raison d’État",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Jeanne peut enfin reprendre l’éducation de son fils Henri, bien que celui-ci doive rester à la cour de France. L’éducation du futur Henri IV est confiée à des hommes protestants instruits, proches du mouvement réformé européen. Catherine de Médicis, soucieuse de garder un œil sur Jeanne, lui accorde certains avantages politiques, titres, charges militaires et reconnaissance de son autorité sur le Béarn, mais, en contrepartie, elle garde le jeune Henri comme otage à la cour. Jeanne s’indigne de cette situation qu’elle juge profondément injuste : on la contraint à signer des textes contraires à sa foi et à ses convictions. Elle proteste vigoureusement contre les décisions du pouvoir catholique, en particulier contre la nomination de Blaise de Monluc comme gouverneur, un homme qu’elle exècre pour sa brutalité envers les huguenots. Monluc mène alors de violentes campagnes contre les protestants dans tout le sud-ouest, notamment en Guyenne et en Béarn, multipliant provocations, propos grossiers et menaces directes à l’égard de Jeanne. Malgré cette tension croissante, Catherine de Médicis parvient à conserver le contrôle politique. Elle impose la paix selon ses propres termes et sort renforcée de la situation : les troupes royales remportent la victoire à Dreux en 1562, François de Guise, chef catholique tout-puissant, est assassiné en 1563, et la même année, l’édit d’Amboise accorde une certaine liberté de conscience aux protestants. Jeanne d’Albret fut exhortée par Calvin à renverser totalement la papauté, bien que ce dernier reconnaisse que tout ne pouvait s’accomplir en un seul jour. Pour l’aider dans cette tâche, il lui envoya Jean Raymond Merlin, principal organisateur de la Réforme en Béarn. Merlin prônait un changement profond et rapide, tout en cherchant à rallier les États et même le clergé, qu’il tenta de rassurer en promettant aux titulaires de conserver leurs bénéfices jusqu’à leur mort. Cependant, la correspondance de Jeanne révèle qu’elle se montrait plus prudente que son conseiller : soucieuse d’éviter les émeutes et les troubles, elle privilégiait avant tout la paix civile et la conciliation entre les deux confessions.
       </p>
          </div>
        )
      },
    
       {
        titre: "Jeanne d’Albret face à Rome",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   En 1563, la reine consulta les États de Béarn, qui s’opposèrent à l’interdiction du catholicisme. Après les avoir entendus, Jeanne proclama la liberté de conscience : catholiques et protestants pourraient désormais pratiquer leur culte sans entrave. Dans les villes acquises à la Réforme, elle laissa enlever les images des églises, mais ailleurs, elle les maintint. En juin de la même année, elle interdit les processions publiques, souvent sources de désordre, ainsi que les prêches enflammés de certains moines, dont les excès avaient déjà provoqué des massacres à Paris et à Orléans. En septembre, elle imposa une contribution de 15 000 livres au clergé pour financer le collège et le nouveau culte, jugeant cet usage bien plus utile que les levées destinées à soutenir les guerres du roi contre les huguenots. Malgré les difficultés financières de son trésor, Jeanne refusa de spolier l’Église : Merlin nota qu’il ne reçut pas un sou, et même Calvin ne fut jamais remboursé des 10 000 livres avancés jadis à Antoine de Bourbon. La progression paisible de la Réforme en Béarn inquiéta profondément les milieux catholiques européens. Dès 1563, Jeanne adressa au pape Pie IV une lettre dans laquelle elle le qualifiait d’« homme qui, après avoir reçu la vérité, l’avait abandonnée parce qu’il y avait trouvé l’avancement de sa fortune ». En réponse, le pape l’excommunia, et, quelques mois plus tard, une bulle de l’Inquisition la somma de comparaître à Rome sous peine de confiscation de ses biens. Cette menace, qui équivalait à une autorisation donnée aux puissances catholiques pour la dépouiller par la force, encouragea complots et projets d’enlèvement, soutenus notamment par le roi d’Espagne et la maison de Guise. Grâce à l’intervention de Catherine de Médicis, la conspiration échoua. Malgré cette grave provocation, Jeanne ne chercha pas à se venger : elle maintint dans son royaume la coexistence du culte catholique et du culte réformé. Dans ce climat tendu, trois évêques, Louis d’Albret (Lescar), Claude Regin (Oloron) et François de Noailles (Dax), furent eux aussi considérés à Rome comme suspects d’hérésie, presque autant que leur souveraine. Pourtant, le catholicisme continua à jouir de la même liberté qu’auparavant : le chapitre de Lescar se reconstitua dans la chapelle Saint-Martin de Goerets, et celui d’Oloron se réfugia à Mauléon, en Soule. Ceux qui espéraient profiter des troubles pour supprimer complètement le catholicisme furent donc déçus, grâce à la vigilance, à la modération et à la tolérance de Jeanne, mais aussi à celle de son peuple.
       </p>
          </div>
        )
      },
    
       {
        titre: "L’équilibre religieux de Jeanne d’Albret",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Jeanne d’Albret adopta une politique religieuse pragmatique et modérée. Lorsqu’une ville était déjà largement acquise à la Réforme, elle ne s’opposait pas au retrait des images dans les églises ; ailleurs, elle les laissait en place. En juin 1563, elle interdit les processions catholiques, souvent sources de troubles, ainsi que les prêches violents des moines, qu’elle jugeait responsables des massacres de Paris et d’Orléans. En septembre, elle imposa au clergé une contribution de 15 000 livres pour financer un collège et le nouveau culte — une dépense qu’elle considérait plus utile que les impôts levés par le roi de France pour combattre les « hérétiques ». Soucieuse de respecter les droits acquis et les volontés locales, Jeanne adapta sa politique aux majorités religieuses : dans les villes gagnées au protestantisme, le culte réformé remplaçait le catholicisme, tandis que dans les campagnes demeurées fidèles à Rome, la messe se maintenait. Fait rare à l’époque, les deux cultes cohabitaient parfois dans les mêmes églises. Elle ne chercha jamais à éradiquer totalement le catholicisme, considérant que supprimer toute référence papale dans des régions hostiles à la Réforme reviendrait à laisser le peuple « sans religion ». Rigoureuse et intègre, la reine se montra irréprochable dans sa gestion financière : malgré la pénurie chronique de son trésor, elle ne détourna jamais rien à son profit. Même Calvin, qui avait prêté 10 000 livres à son époux Antoine de Bourbon, ne fut pas remboursé. Dans certains cas, Jeanne imposa plus fermement la Réforme, comme à Sauveterre, où, profitant de la vacance du curé, elle ordonna à toute la population, prêtres compris, d’assister aux prédications protestantes. Mais dans l’ensemble, sa politique demeurait tolérante, équilibrée et légaliste, visant à faire progresser la Réforme sans provoquer de guerre civile, contrairement à ce qui se passait ailleurs en France. 
        </p>
          </div>
        )
      },
    
       {
        titre: "Jeanne d’Albret défie Rome",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Toujours en 1563, sur la recommandation du prince de Condé, elle remplaça dans l’administration du comté de Périgord son chancelier Bouchard, proche des Guises, par Pierre Lambert, conseiller au parlement de Bordeaux exilé pour cause de religion. Elle fit également publier le catéchisme de Calvin en béarnais et confia au pasteur Jean Reymond-Merlin, envoyé de Genève par Calvin, la tâche d’organiser une véritable Église réformée en Béarn. S’appuyant sur la législation royale, Merlin interdit les processions de la Fête-Dieu et dédia plusieurs églises, notamment la cathédrale de Lescar et l’église Saint-Martin de Pau, au seul culte réformé, après les avoir dépouillées de leurs ornements. Ces mesures, jugées brutales, provoquèrent une vive protestation des États de Béarn, qui réclamèrent en vain, dès le 23 juin 1563, le rétablissement des processions, puis, les 27 et 29 du même mois, la liberté de conscience. Le 28 septembre, le Saint-Office cita Jeanne à comparaître devant le tribunal de l’Inquisition, sous peine de confiscation de ses États et de leur attribution à un autre souverain. Jeanne refusa catégoriquement, déclarant qu’en tant que souveraine, elle n’avait pas à obéir à une juridiction étrangère. Ce refus, hautement symbolique, devint un véritable acte de résistance religieuse : pour la première fois, la reine de Navarre invoquait aussi clairement la liberté de conscience. Grâce à l’intervention du jeune Charles IX et de Catherine de Médicis, la mesure fut annulée. Dans une lettre datée du 23 décembre 1563, la reine mère exhorta Jeanne d’Albret à rétablir la paix parmi ses sujets, « comme le roi le fait des siens, c’est-à-dire en leur permettant de vivre en liberté de conscience, sans contrainte ni forcer personne ». Parallèlement, Catherine envoya à Pau son émissaire Guyon du Gout pour avertir la souveraine des risques qu’elle encourait si elle persistait à gouverner selon les principes réformés. Menacée de confiscation de ses terres, voire d’une guerre ouverte, Jeanne répondit avec diplomatie : elle promit de maintenir la paix, d’envoyer un représentant chargé de s’expliquer, et d’assurer l’ordre en son absence en confiant la régence locale à Monsieur de Gramont. Elle écrivit également au connétable de Montmorency et adressa ses remerciements au roi d’Espagne pour le soutien promis après la mort de son époux, précisant que sa foi protestante relevait uniquement de sa conscience personnelle et familiale, sans volonté de troubler ni ses voisins ni ses alliés.
      </p>
          </div>
        )
      },
    
       {
        titre: "Jeanne d’Albret et Catherine de Médicis",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Inspirée des édits de pacification français, Saint-Germain (1562) et Amboise (1563), la patente que Médicis publia prônait la concorde, l’union et l’amitié, interdisait les injures et garantissait la liberté de conscience. Elle accordait aussi une amnistie générale (sauf pour les cas de lèse-majesté) et imposait un silence perpétuel au procureur général. Cependant, contrairement à la France, le Béarn n’avait pas connu de guerre civile : la paix n’y fut pas négociée, mais imposée par l’autorité souveraine. Les restrictions religieuses frappaient surtout les catholiques, privés de la restitution de leurs lieux de culte, et l’application de la patente relevait exclusivement des tribunaux de la reine. Ce texte s’inspirait du principe cujus regio, ejus religio établi par la paix d’Augsbourg (1555), officialisant en Béarn la coexistence des deux Églises au sein d’un même État. En réalité, Jeanne d’Albret considérait cette tolérance comme une mesure transitoire : dès 1566, elle confia à Théodore de Bèze son intention « d’abattre entièrement l’idolâtrie », montrant que son objectif final demeurait l’établissement définitif de la Réforme. Elle restait convaincue que le temps et la liberté finiraient par rallier les cœurs à la foi réformée. Au même moment, Catherine de Médicis, soucieuse d’éviter que la France ne replonge dans la guerre civile entre catholiques et protestants, entreprend un grand tour de France (1564–1566) avec son fils, le jeune roi Charles IX. Ce voyage, qui part de Fontainebleau le 13 mars 1564, a pour but de montrer l’unité du royaume, d’apaiser les tensions et de réaffirmer l’autorité royale à travers des fêtes, des cortèges et des cérémonies spectaculaires. Catherine veut rassembler les nobles autour de la couronne et donner une image de paix et de grandeur. Ce long périple passe par le Lyonnais, la Bresse, le Roussillon, la Savoie et d’autres provinces, dans une mise en scène fastueuse mêlant politique, diplomatie et pédagogie pour les jeunes princes. Malgré sa prudence et ses efforts de conciliation, les tensions religieuses persistent : des croix sont renversées, des violences éclatent, et l’Inquisition intervient. Catherine se veut médiatrice, cherchant à contenir les excès de part et d’autre, tandis que Jeanne d’Albret, restée fidèle à la Réforme, refuse tout compromis et quitte la cour avec son fils Henri de Navarre, désapprouvant la politique d’équilibre de la reine mère. Catherine de Médicis, mère du roi, est frappée par le nombre et la vigueur des protestants dans le Sud-Ouest. Elle comprend que la région n’est plus majoritairement catholique et tente en vain de ramener Jeanne d’Albret à la foi romaine. La reine de Navarre lui répond avec fermeté et courage, refusant toute conversion. Après cette entrevue, la cour poursuit son voyage à travers Agen, Bordeaux, Montauban, Toulouse, et d’autres villes, pour rendre justice, recevoir des hommages et affirmer la présence du roi. Chaque halte donne lieu à des fêtes somptueuses : cortèges, habits fastueux, musique et processions. Les princesses participent aux cérémonies religieuses pour témoigner de la fidélité du royaume à l’Église catholique, tandis que le récit souligne la fatigue du voyage et l’impression durable laissée par Jeanne d’Albret, demeurée intraitable. Toutes les grandes autorités du royaume se retrouvent ensuite au château royal : Coligny, le cardinal de Lorraine, Montmorency, et bien d’autres. Comme souvent, l’arrivée de Jeanne provoque un scandale : elle fait prêcher dans son appartement un sermon protestant, s’exposant ainsi aux reproches. Elle doit plaider pour rester auprès de son fils. Puis la cour se déplace vers Moulins, ville de son mariage passé, où Catherine de Médicis tente encore de réconcilier Coligny et les Guise. Après un passage en Auvergne et dans le Nivernais, la cour regagne Paris le 1ᵉʳ mai 1566. L’atmosphère y semble plus apaisée, ce que Jeanne remarque avec satisfaction.
       </p>
          </div>
        )
      },
    
       {
        titre: "Jeanne bâtit l’Église du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Jeanne demeure ensuite huit mois à Paris pour régler de nombreuses affaires : un procès contre le cardinal de Bourbon au sujet de la succession des Bourbon-Vendôme ; une opposition au mariage du duc de Nemours avec Anne d’Este, veuve de François de Guise, afin qu’il tienne sa promesse envers sa cousine Françoise de Rohan ; et diverses poursuites, notamment contre Jacques Spifame, ministre protestant qu’elle avait soutenu mais qui l’a trahie avant d’être exécuté à Genève. Ces épreuves renforcent le caractère combatif et revendicatif de Jeanne. Des plaintes lui parviennent de Limoges, de Foix ou de Pau concernant sa politique religieuse et fiscale, provoquant même des révoltes armées. Isolée mais tenace, elle reste animée d’une énergie farouche, « avec une ardeur de persécutée », décrite comme forte, virile d’esprit et sans faiblesse. Elle veille aussi à l’éducation de son fils, âgé de treize ans, âge de majorité royale. Satisfaite de sa foi, elle déplore cependant le manque de solidité de son instruction : son précepteur La Gaucherie lui aurait fait perdre sept années d’études, « le bâtiment est tombé en ruine ». Cette image traduit son attachement humaniste à une éducation à la fois solide et pieuse. Cultivée et poétesse, Jeanne avait elle-même eu pour maître le poète Nicolas Bourbon. En mai 1566, elle visite à Paris l’imprimerie de Robert II Estienne, célèbre humaniste, accompagnée de ses enfants Henri (futur Henri IV) et Catherine de Bourbon. Passionnée de livres, elle fait imprimer un texte de sa main destiné à enseigner la piété à ses enfants, affirmant sa volonté de leur transmettre les valeurs protestantes et l’esprit des « craignants-Dieu ». Elle confie ensuite l’éducation d’Henri à Jean Morély, gentilhomme calviniste et humaniste aux idées jugées trop libérales, condamnées à Genève et critiquées par Théodore de Bèze. Malgré les polémiques, elle lui garde d’abord confiance avant de l’écarter après des accusations compromettantes. Durant cette période, Jeanne poursuit au Béarn la construction d’une Église protestante organisée, inspirée de Genève. Elle accueille Pierre Viret, renforce les synodes, limite les pratiques catholiques (processions, mendicité des moines, sépultures dans les églises) et fonde en 1566 l’Académie d’Orthez pour former les futurs pasteurs. Les ordonnances de la même année interdisent les quêtes des prêtres, les jeux de hasard et les danses jugées indécentes, tout en attribuant les revenus des bénéfices ecclésiastiques aux pauvres de l’Église réformée. Si certains catholiques complotent contre elle, la reine réagit avec une modération remarquable, préférant pardonner les révoltes plutôt que de punir sévèrement. Les pasteurs, en revanche, la pressent d’aller plus loin, et un synode à Nay lui demande d’interdire totalement la messe, ce qu’elle refuse, privilégiant une approche progressive et pacifique. Malgré cette prudence, ses réformes suscitent l’hostilité de la cour de France et de l’Église catholique. Pourtant, les pasteurs du Béarn réclamaient davantage de fermeté. Un synode réuni à Nay la pressa d’interdire totalement la messe, Michel Vigneau en tête. Jeanne s’y refusa ( comme Bèze avait condamné Vendôme), mais adopta en juillet 1566 des ordonnances limitant certaines pratiques catholiques, processions, prédications, mendicité des moines, sépultures dans les églises, et réservant les bénéfices vacants au nouveau culte, sans pour autant abolir la messe ni confisquer les biens ecclésiastiques, comme on l’accusa faussement. Dans une lettre adressée à Théodore de Bèze, elle exprimait sa volonté d’abattre l’« idolâtrie », tout en cherchant des moyens pacifiques : elle envisageait même d’organiser des débats publics pour convaincre son peuple plutôt que d’imposer une rupture brutale. Ces efforts de conciliation n’apaisèrent pourtant pas ses adversaires. Les intrigues du clergé et de la cour de France s’intensifièrent : Charles de Luxe, gentilhomme béarnais, espionnait pour Charles IX et fomenta la révolte de Basse-Navarre en 1566–1567. Malgré ce soulèvement et les menaces répétées contre sa vie, Jeanne fit preuve d’une remarquable modération : une fois la révolte réprimée, elle pardonna aux conjurés. Plus encore, Charles de Luxe, loin d’être puni, reçut du roi de France le collier de l’ordre de Saint-Michel en récompense de sa trahison. Cette clémence de la reine illustre l’esprit de tolérance et de patience qui guida son action, même au cœur des épreuves les plus périlleuses.
    </p>
          </div>
        )
      },
    
       {
        titre: "Les Pâques sanglantes",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    En 1566, le comté de Foix, hérité des Albret, est contesté par la couronne et par certains vassaux. Jeanne subit alors des décisions iniques, où la justice royale cherche manifestement à affaiblir son autorité territoriale. Elle y voit la main de ses ennemis, les Guise et la cour de Paris, qui tentent de la dépouiller d’une partie de ses droits. Dans le même temps, sa parente Françoise de Rohan poursuit un procès retentissant contre le duc de Nemours, qui l’avait séduite puis abandonnée malgré une union promise. Le Parlement de Paris rend en 1566 un arrêt défavorable à Françoise, ce que Jeanne dénonce comme une injustice flagrante, preuve selon elle que la justice demeure entièrement sous influence catholique. À la cour, des rumeurs se propagent : on prétend que Jeanne d’Albret projette d’assassiner Catherine de Médicis ou d’enlever le duc d’Anjou, futur Henri III. Savigny, bâtard d’Antoine de Bourbon, se trouve compromis dans ces intrigues ; certains le soupçonnent d’avoir servi d’instrument à un complot, ou d’avoir laissé croire qu’il en existait un. Il est finalement assassiné mystérieusement, probablement pour l’empêcher de parler ou d’ajouter encore à la confusion. Ces manœuvres visaient à salir Jeanne, mais aucune preuve ne l’impliqua jamais. À l’approche de la deuxième guerre de Religion, Jeanne décide de regagner le Béarn pour poursuivre son projet d’édification d’une Église protestante. Elle s’entoure du grand réformateur Pierre Viret, venu de Lausanne, qui avait déjà diffusé la Réforme en France, du Rhône au Languedoc. Leur objectif est clair : mettre en place un système religieux destiné à remplacer progressivement l’Église catholique, que Jeanne juge condamnée à disparaître. Cependant, Claude Régin, évêque d’Oloron et jusque-là fidèle à la reine, refuse de soutenir ces mesures restrictives contre le catholicisme et préfère quitter le Béarn. Les ordonnances de 1566, supprimant les bénéfices catholiques et transférant leurs revenus aux pauvres de l’Église réformée, marquent un tournant décisif. Un rapport de l’espion espagnol Guevara décrit un épisode révélateur : à Pâques, après la Cène célébrée à Pau, une dispute éclate entre le ministre Merlin et le seigneur de Sainte-Colomme ; le seigneur d’Audaux prend parti pour Merlin, la querelle dégénère devant Jeanne et son fils Henri, et plus de cinquante luthériens sont tués contre six catholiques, avec de nombreux blessés. Ces « Pâques sanglantes » sont suivies d’actes d’iconoclasme dans tout le Béarn.
       </p>
          </div>
        )
      },
    
       {
        titre: "La Réforme sous le sceptre de fer",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    En 1566, Jeanne d’Albret, reine de Navarre et duchesse d’Albret, établit un règlement destiné à organiser la Réforme en Béarn. Désormais, un synode unique devait se tenir chaque année au mois de novembre ; les procès de mariage relevaient exclusivement de la reine et de son Conseil ; les affaires de mœurs, paillardise, femmes publiques, mendicité des valides, étaient sévèrement réprimées. Elle interdit les cartes et les dés, confirma les restrictions sur les danses, bannit moines et prêtres de toute quête, et supprima les processions publiques catholiques, n’autorisant plus que des cérémonies à l’intérieur des cloîtres. La jeunesse devait être instruite au collège d’Orthez, financé par le trésor public, avec un procureur et deux régents nommés pour assurer son fonctionnement. Les ministres protestants reçurent un traitement annuel, 300 livres pour les mariés, 240 pour les célibataires, mais il leur fut interdit de prêcher hors du Béarn sans autorisation, tandis qu’à l’intérieur du territoire, ils jouissaient d’une pleine liberté de prédication, contrairement aux catholiques à qui ce droit fut retiré. Les enterrements furent désormais interdits dans les temples, sauf exception, et devaient se dérouler sans cérémonie. Les prêtres catholiques ne pouvaient plus sonner les cloches ni retourner dans les lieux où leur culte avait été supprimé. Jeanne déclara vouloir extirper l’« idolâtrie romaine » et supprima les bénéfices ecclésiastiques, dont les revenus furent attribués aux pauvres de l’Église réformée. Les patrons laïques conservaient seulement le droit de présentation, à condition que les bénéficiaires ne fussent pas catholiques. Enfin, tout obstacle posé par les évêques et abbés fut interdit, confirmant la mainmise de Jeanne sur la Réforme béarnaise. Cette radicalisation s’explique par plusieurs facteurs : la condamnation de Jeanne d’Albret par l’Inquisition, les affrontements religieux dans le Sud-Ouest qui l’obligèrent à inspecter et fortifier ses places, ainsi que son refus de céder au roi de France sur la réévaluation de la monnaie béarnaise, les « bacquettes », symbole de son autorité régalienne. Sa politique suscita de fortes résistances : plusieurs gentilshommes catholiques complotèrent contre elle, comme Jean de Belsunce, qui fomenta un soulèvement en Basse-Navarre, ou Jacques de Sainte-Colomme, qui projeta l’enlèvement de Jeanne et de son fils Henri, l’interdiction du calvinisme et le bannissement des étrangers protestants. Même les États de Béarn, dirigés par les évêques catholiques, contestèrent les ordonnances de 1566. Jeanne les imposa néanmoins avec fermeté, tout en maintenant le catholicisme dans les villages où il demeurait majoritaire.
       </p>
          </div>
        )
      },
    
       {
        titre: "Entre prudence et révolte",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Au début de 1567, Jeanne ramena son fils Henri de Navarre, alors âgé de quatorze ans, en Béarn. C’était une mesure de prudence : elle voulait l’éloigner de la cour de France, où les Guise et la couronne risquaient de le manipuler ou même de le retenir en otage. Elle lui donna une grande éducation, rustique, à coup de fuet à chaque mauvais pas. Le climat lui,  était très tendu : les protestants dénonçaient les violations de l’édit de pacification d’Amboise (1563). Louis de Condé, chef militaire huguenot, tentait encore, en 1567, de négocier avec la cour pour éviter un nouveau conflit. Mais Jeanne savait que la situation restait fragile. Les protestants découvrirent que, parallèlement aux édits de tolérance, le roi Charles IX et Catherine de Médicis envoyaient aux parlements et gouverneurs des contre-lettres secrètes leur ordonnant de ne pas appliquer réellement la liberté de culte. Cette duplicité fut vécue comme une trahison : aux yeux de Jeanne, la monarchie poussait les réformés à bout. En 1567, alors que les tensions religieuses s’exacerbent, Jeanne rencontre Condé et Coligny pour débattre de l’avenir du parti réformé. Tandis que Catherine de Médicis cherche à la retenir à la cour, Jeanne, méfiante, prétexte un voyage avec son fils. En réalité, elle prépare secrètement la révolte protestante : quittant Paris pour le Poitou, puis la Gascogne, elle marque le début de la rébellion des huguenots contre le pouvoir royal catholique. Le 28 septembre 1567 éclata la « surprise de Meaux » : Condé et Coligny tentèrent de s’emparer du roi et de la reine mère pour les protéger des Guise. L’opération échoua, entraînant la deuxième guerre de Religion. Alors à Saint-Gaudens, Jeanne apprit la nouvelle et écrivit aussitôt à Catherine de Médicis. Elle protesta de sa loyauté et expliqua que les protestants n’avaient pris les armes que pour trois raisons : éviter leur extermination (« être rasés de dessus la terre »), servir sincèrement le roi, et protéger les princes du sang (Condé, Navarre, etc.). Elle rejeta donc la responsabilité de la guerre sur la duplicité de la cour, non sur les réformés. En 1568 parut la traduction en béarnais du Psautier de Clément Marot par Arnaud de Salette. La cour de France tenta alors d’impliquer Jeanne comme médiatrice entre catholiques et protestants. Elle refusa, consciente que la cour n’était pas impartiale et que sa position en serait affaiblie. Elle chargea La Vaupilière de porter ses plaintes au roi Charles IX : dénoncer la duplicité royale, les violations de l’édit de pacification, et présenter des requêtes pour son fils Henri de Navarre, afin qu’il puisse circuler librement en Guyenne pour veiller à l’application des édits, à la liberté de culte et à la protection des protestants.
        </p>
          </div>
        )
      },
    
       {
        titre: "Complots et menaces sur le Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   Le cardinal de Lorraine, chef des Guise et puissant allié catholique, chercha à faire enlever Henri de Béarn par l’intermédiaire de Jean de Losses, capitaine fidèle à la cour. Cet épisode montre que Jeanne et son fils restaient directement menacés, tandis que la cour catholique jouait sur les deux tableaux : la diplomatie et la menace armée. Les demandes transmises par La Vaupilière furent refusées par Charles IX, confirmant que la cour n’avait aucune intention de protéger les droits des protestants ni de respecter les édits. Le 25 janvier 1568, depuis Pau, Jeanne d’Albret adressa une lettre ferme et spirituelle au procureur du roi à Périgueux, M. de Bordes, qui avait arbitrairement saisi les biens de son serviteur Lambert. Elle rappela que ce dernier travaillait pour son service à Paris et qu’il était indigne de le maltraiter. Ce sens élevé de la justice contraste fortement avec l’attitude de Catherine de Médicis et de Charles IX. Ce dernier, feignant la conciliation, demanda à Jeanne d’apaiser la situation « avec douceur », tout en surveillant étroitement le Béarn, inquiet des troubles religieux. Une révolte éclata alors en Basse-Navarre : Jeanne accepta de pardonner au peuple, mais non aux seigneurs rebelles. Dans le même temps, un complot, probablement fomenté par les Guise, fut découvert : il visait à enlever ses enfants, voire Jeanne elle-même. Elle dut fuir à Nérac, se rapprochant encore davantage des chefs protestants. Charles IX déclara que Jeanne avait toujours cherché la paix, mais qu’elle avait été contrainte de prendre les armes pour se défendre. Il ordonna à Noailles de protéger sa ville et d’éviter que les troubles ne nuisent aux « pauvres sujets » du roi, manière détournée de signifier : « Surveillez bien cette affaire et empêchez que Jeanne ne prenne trop de pouvoir. »
       </p>
          </div>
        )
      },
    
       {
        titre: "Jeanne face à l’Europe catholique",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Charles mit alors la pression sur le jeune Henri : après avoir pris de ses nouvelles à la suite d’une fièvre, il lui recommanda de ne pas suivre sa mère ni les huguenots. Il remercia également Caumont d’avoir tenté de dissuader Jeanne de rejoindre les protestants en armes. Après la bataille de Jarnac et l’assassinat du prince de Condé, Jeanne d’Albret devint la cheffe politique des réformés. Le 29 septembre 1569, elle se rendit à La Rochelle, où elle ranima le courage de ses partisans, sacrifia ses biens et présenta son fils Henri, âgé de quinze ans, comme l’espoir du parti protestant. Accusée de rébellion, Jeanne prouva au contraire que c’était la couronne qui, dès octobre 1568, avait ordonné la saisie de ses domaines (15 octobre 1568) et nommé, le 4 mars 1569, le seigneur de Terride gouverneur de ses États, avec mission d’extirper l’hérésie et de confisquer les biens des protestants. En réalité, ce n’était donc pas Jeanne qui s’était rebellée contre Charles IX, mais bien la cour de France qui, avant même les événements de La Rochelle, complotait pour soulever ses sujets, confisquer ses terres et livrer son royaume à d’autres puissances, dont l’Espagne. Jeanne ne choisit pas La Rochelle par esprit de rébellion, mais parce qu’elle n’avait plus d’autre issue pour sauver sa vie et celle de ses enfants. Jean de Losses et Montluc auraient d’ailleurs reçu mission d’enlever la reine ou au moins ses enfants, confirmant la réalité d’une tentative de capture. Dans une lettre adressée à Charles IX le 16 septembre 1568, depuis Bergerac, Jeanne précisa que ses armes ne servaient qu’à trois fins : éviter l’extermination (« qu’on ne nous rase de dessus la terre »), servir loyalement le roi et protéger les princes de son sang. Ainsi, loin d’être rebelle, elle se présentait comme fidèle au roi, mais contrainte par les menaces extérieures. La Mothe-Fénelon, ambassadeur du roi de France, avait obtenu d’elle qu’elle pardonne les révoltés de Basse-Navarre, puis tenta de la convaincre de se rendre à la cour, ce qui revenait, pour elle, à se livrer à ses pires ennemis : les Guise et Catherine de Médicis. Jeanne refusa. Jean de Losses, capitaine gascon fidèle à la couronne, aurait reçu l’ordre d’enlever Jeanne ou ses enfants, tandis que Montluc, gouverneur catholique de Guyenne, aurait reçu une commission similaire selon Poeydavant. Les sources divergent, mais toutes confirment l’existence d’un véritable projet d’arrestation ou d’enlèvement. À cela s’ajoutait une menace internationale : en 1568, le pape Pie V projeta de déposer Jeanne et chargea le roi d’Espagne, Philippe II, de s’emparer du Béarn et de la Navarre. Face à ces périls, Jeanne joua un rôle diplomatique majeur, multipliant manifestes, lettres et négociations. Pendant ce temps, la terreur s’abattit sur le Béarn : les réformés, privés de défense, furent livrés à leurs ennemis, tandis que son lieutenant-général, le comte de Gramont, oscillait entre les deux camps.
       </p>
          </div>
        )
      },
    
       {
        titre: "Jeanne triomphe à Orthez",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    La troisième guerre de Religion (1568-1570) toucha directement le Béarn lorsque Charles IX, jugeant Jeanne d’Albret prisonnière, ordonna la saisie de toutes ses possessions, y compris sa seigneurie souveraine, confiée à Antoine de Lomagne, comte de Luxe. Fidèle à sa foi, la reine résista avec le soutien des protestants français et de leurs alliés anglais et néerlandais, notamment depuis La Rochelle. Rapidement accusée de préparer la guerre sous couvert de paix, elle répondit dans ses Mémoires qu’en tant qu’autorité temporelle des réformés et belle-sœur de Condé, elle devait se défendre de l’accusation de rébellion. Sa stratégie consista à attaquer directement la maison de Guise, et surtout le cardinal de Lorraine, qu’elle décrivit comme perfide et manipulateur, afin de justifier la prise d’armes protestante. Elle rappela la trahison de ses adversaires lors de la surprise de Meaux, comparant leurs manœuvres à celles d’un peintre qui efface et refait sans cesse son tableau, et accusa encore le cardinal de « jouer à la pelote de sa foi et de son honneur ». Justifiant l’armement de 1568, elle affirma que les princes du sang, suivis de la noblesse et du peuple, avaient le devoir de défendre un royaume menacé. La crise éclata entre 1568 et 1571. En 1568, Jeanne obtint des États leur appui pour sa politique religieuse et ses ordonnances de 1566, qui interdisaient la prédication et le culte catholique. Partie rejoindre Coligny et Condé à La Rochelle, elle provoqua la réaction de Charles IX, qui envoya des troupes commandées par le baron de Terride. Les Béarnais, unis malgré leurs différences religieuses, se déclarèrent prêts à combattre. Les forces royales occupèrent le pays, mais Navarrenx résista héroïquement. Grâce à Mongomery, Jeanne leva une armée dans l’Albigeois et le Quercy, libéra Navarrenx le 6 août 1569, puis remporta la bataille d’Orthez le 15 août. Des représailles frappèrent les catholiques et, en 1571, les Ordonnances ecclésiastiques firent du calvinisme la religion officielle du Béarn. L’Académie protestante d’Orthez devint alors un centre intellectuel majeur, la cause de la souveraineté s’identifiant à celle de la Réforme. En 1568, les habitants de Soule se révoltèrent contre l’autorité de Jeanne d’Albret, reine de Navarre. Catherine de Médicis envoya un émissaire, La Mothe, pour apaiser la situation, mais les troubles persistèrent : des bandes armées pillèrent, saccagèrent des maisons et s’en prirent aux représentants du pouvoir. En 1567-1568, les Soulétins rejoignirent les ligueurs catholiques révoltés en Basse-Navarre et attaquèrent plusieurs localités. Jeanne d’Albret réagit en envoyant des troupes commandées par son fils Henri (le futur Henri IV), qui repoussèrent les insurgés. Ceux-ci, chassés, se vengèrent en ravageant le village de Montory. Malgré les interventions, l’anarchie régna encore un mois en Soule, où la reine ne put rétablir l’ordre sans risquer d’aggraver la crise. La paix mit du temps à s’installer en Soule, malgré les tentatives de réconciliation.
       </p>
          </div>
        )
      },
     {
        titre: "La reconquête du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   Le 23 mars, la paix de Longjumeau fut signée, mais la tension demeura. Le 23 août, Condé et Coligny se réfugièrent à La Rochelle ; Jeanne, se sentant en danger, s’y rendit également et confia la lieutenance générale au baron d’Arros. Le 18 octobre 1568, sous prétexte que sa tante Jeanne d’Albret était tombée aux mains des huguenots, le roi Charles IX ordonna la saisie de ses biens en France et chargea Charles de Luxe de prendre possession, en son nom, de la Basse-Navarre et de la Soule, tout en préparant l’invasion du Béarn. D’Arros, anticipant une attaque, se tint prêt à défendre le pays. Ce même mois d’octobre, après s’être emparé de la Basse-Navarre, Charles de Luxe prit aussi le château de Mauléon, sans égard pour son beau-frère, le seigneur de Belsunce, qui en était gouverneur et s’était réfugié à La Rochelle auprès du prince Henri. Maître de la Soule, Luxe établit un avant-poste à Osserain, à la frontière entre la Soule, la Basse-Navarre et le Béarn. Mais Gramont, bras droit de d’Arros, parvint à le déloger en janvier 1569. L’année 1569 fut désastreuse pour la Soule. Le 4 mars, le duc d’Anjou, futur Henri III, ordonna au vicomte de Terride de soumettre le Béarn, tandis que Luxe et les troupes catholiques navarraises et souletines envahissaient la région, multipliant les violences et les pillages. Les catholiques béarnais s’emparèrent d’Oloron, Luxe prit Nay, et Domezain pilla Sauveterre. Impuissant face à cette invasion, d’Arros dut se replier sur Navarrenx. Terride s’empara rapidement de tout le Béarn, rétablit le culte catholique, interdit le culte réformé et, soutenu par les troupes de Luxe, entreprit le siège de Navarrenx, commencé le 24 mai. Face à cette offensive, Jeanne d’Albret réagit et confia au comte de Montgommery, le 10 juillet 1569, la mission de repousser les envahisseurs et de délivrer d’Arros. À cette occasion, elle fit frapper une médaille affirmant sa détermination : « Jeanne, par la grâce de Dieu, reine de Navarre, seule et avec les autres, pour Dieu, le royaume, les lois et la paix. Ou victoire entière, ou paix assurée, ou mort honneste. » La campagne de vingt jours qui suivit fut saluée par Montluc lui-même comme « le plus beau traict de guerre du siècle ». Les accusations catholiques de cruautés, notamment à Artix, Nay ou après Orthez, le 15 août, sont infondées : aucun massacre n’a été prouvé, et Montgomery, loin d’imiter le baron des Adrets, se distingua par sa rapidité et sa discipline. Les seules exécutions attestées concernèrent Bassillon, gouverneur de Navarrenx, convaincu de trahison pour avoir voulu livrer la Navarre aux Espagnols. Jeanne prit alors la tête du parti protestant, rejoignit son beau-frère Louis de Condé et l’amiral de Coligny, puis se rendit en Angleterre, où elle rencontra Élisabeth Iʳᵉ. À Londres, elle engagea ses bijoux afin de financer l’armée huguenote. Elle laissa la lieutenance générale du Béarn à Bernard d’Arros, car elle avait plus confiance en Gramont. À la tête d’une armée, Montgommery quitta Castres le 27 juillet, traversa le comté de Foix où il recruta des soldats fidèles à Jeanne d’Albret, et, forçant les étapes, entra en Béarn entre le 6 et le 8 août 1569. Il marcha alors sur Navarrenx, que Terride dut abandonner après un siège de trois mois, laissant derrière lui son artillerie. Montgommery poursuivit ensuite sa progression : tandis que Terride se repliait sur Orthez, Oloron et Mauléon, il ne lui laissa aucun répit et, le 15 août, le délogea du château de Moncade à Orthez. Poursuivant sa victoire, Montgommery entra triomphalement dans Pau, la capitale du Béarn, le 23 août. Luxe et Domezain se réfugièrent en Soule, mais les troupes de Montgommery les y poursuivirent, ravageant le pays et incendiant de nombreuses églises. Charles de Luxe fut finalement chassé de Mauléon, dont la ville fut brûlée et saccagée ; la garde du château fut confiée au capitaine huguenot Pierre d’Aramits. Cependant, retiré dans son château de Tardets, Charles de Luxe ne renonça pas et prépara sa revanche. Il attaqua Saint-Jean-Pied-de-Port, fidèle à la reine de Navarre, mais dut se replier sur la Soule. Réunissant ses troupes à Barcus, il lança ensuite une offensive sur le Béarn et s’empara de Sainte-Marie, d’où il fut délogé par d’Arros. De nouveau battu, Luxe se replia en Basse-Navarre, non sans tenter de reprendre Mauléon ; mais le capitaine Aramits défendit la place avec acharnement. Au cours de ces combats, les Béarnais incendièrent encore une fois la ville. Dans une lettre à la reine de Navarre, Enecot de Sponde déplora cet acte et s’interrogea sur la décision de brûler le château et la ville de Mauléon au lieu d’y établir une garnison, comme le conseil l’avait prévu.
     </p>
          </div>
        )
      },

        {
        titre: "Entre guerre et pardon",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
  Le 6 janvier 1570, Charles IX confia à Charles de Luxe la charge de lieutenant général du roi en Soule, déclenchant de nouveaux combats qui aboutirent à la reprise de Mauléon par les forces royales. Le 28 janvier, Bernard d’Arros publia une ordonnance rétablissant en Béarn l’exercice de la religion catholique, permettant ainsi à l’évêque d’Oloron, Claude Régnier, de regagner son diocèse. Malgré ces mesures, la Soule demeura agitée : en juillet, des troupes béarnaises envahirent la région jusqu’à Domezain pour piller les récoltes, mais les paysans armés réussirent à les repousser. Le 8 août 1570, la paix de Saint-Germain mit fin à la troisième guerre de Religion. Jeanne d’Albret rentra alors en Béarn à l’automne 1571 et accorda une amnistie générale aux chefs catholiques, à l’exception de Charles de Luxe. En novembre, elle quitta son royaume pour Paris afin de négocier le mariage de son fils, Henri de Navarre, avec Marguerite de Valois, sœur de Charles IX, union censée symboliser la réconciliation religieuse du royaume. Cependant, Jeanne mourut peu avant la célébration du mariage, le 9 juin 1572. La Soule retrouva ensuite une période de tranquillité, tandis que la France entière était frappée par le massacre de la Saint-Barthélemy, le 24 août 1572. Henri de Navarre, futur Henri IV, échappa au massacre grâce à sa conversion apparente au catholicisme, accompagné de plusieurs seigneurs béarnais. En 1569, les troupes royales menées par Antoine de Lomagne, baron de Terride, avaient envahi le Béarn avec l’aide de catholiques locaux. Le lieutenant général de Jeanne, Bernard d’Arros, s’était alors retranché dans la forteresse de Navarrenx, assiégée du 24 mai au 8 août. La place tint bon jusqu’à l’arrivée des renforts envoyés par Jeanne et commandés par Gabriel de Lorges, comte de Montgommery, et le baron de Montamat. Terride fut battu à Orthez le 15 août et son état-major capturé le 24. Jeanne punit sévèrement les catholiques béarnais ayant soutenu les troupes royales : confiscations de biens, exils et proscriptions. Certains lui attribuèrent les exécutions de prisonniers à Navarrenx, mais les sources montrent qu’elle n’y prit aucune part : les ordres arrivèrent trop tard, et les morts furent causées par des soldats agissant sans instruction. Jeanne d’Albret n’ordonna donc aucun massacre. Dès le 28 janvier 1569, elle avait publié une ordonnance bannissant le catholicisme, puis ordonné, le 2 octobre, la saisie des biens ecclésiastiques. À Lescar, plusieurs chanoines catholiques restèrent pourtant sur place malgré la confiscation de leurs biens. En 1570, elle interdit le culte catholique et confia les biens de l’Église à l’État. Cependant, des procès-verbaux de 1570-1571 témoignent encore de la présence d’un clergé local lors des visites de commissaires royaux. Progressivement, certaines mesures furent adoucies : le 25 novembre, des lettres de grâce annulèrent partiellement les proscriptions et rétablirent plusieurs anciens membres catholiques du Conseil souverain ou des États, à condition qu’ils jurent fidélité à leur souveraine. Des violences éclatèrent à Pau et dans quelques localités, mais non à Orthez ni à Navarrenx. Les protestants eux-mêmes furent parfois victimes de représailles : le pasteur Michel Vigneau, par exemple, fut pendu pour avoir présenté une requête en faveur du catholicisme. Malgré ces troubles, Jeanne proclama, le 31 mai 1570, un pardon général à tous ses sujets. Après ces épreuves, la paix de Saint-Germain, signée le 8 août 1570, mit fin à la guerre. Jeanne remercia Charles IX pour cet édit, soulignant la joie du peuple béarnais et sa fidélité au roi. Elle écrivit qu’elle ne désirait « que le bien et le service du royaume ».
 </p>
          </div>
        )
      },

       {
        titre: "La tolérance assiégée",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En mars 1571, Jeanne d’Albret se félicita du vote des trois États du Béarn, qui lui confirma la fidélité de la majorité de ses sujets. Elle annonça la convocation d’États généraux pour entendre leurs plaintes et leur promit justice. En signe de confiance, elle réduisit son armée et garantit la liberté de conscience, le respect des sépultures et la paix religieuse. Grâce à Bernard d’Arros, elle savait qu’il existait encore des notables catholiques dans plusieurs communautés béarnaises, notamment à Lescar, Oloron et Morlaàs. Ce même mois, elle rappela à son lieutenant Bernard d’Arros qu’aucun sujet ne devait être « forcé ni contraint pour le faict de la conscience », marquant ainsi sa position de tolérance. C’est également à cette époque que fut publiée la traduction en basque du Nouveau Testament par Jean de Liçarrague (1571), signe de la vitalité intellectuelle et religieuse de son règne. Le 9 novembre, Jeanne fut bien accueillie en Béarn par ses sujets des deux religions et proclama une amnistie générale. Sous la pression des synodes et des États de Béarn, où siégeaient encore des membres catholiques, elle promulgua le 26 novembre 1571 ses ordonnances ecclésiastiques. Celles-ci confièrent la gestion des biens ecclésiastiques à un Conseil chargé de financer le culte réformé et les écoles. Pour Jeanne, il ne s’agissait pas d’une spoliation, mais d’une mesure de justice : selon elle, les biens de l’Église appartenaient au peuple. Contrairement à certaines interprétations, ces ordonnances n’abolissaient pas le catholicisme. Elles n’imposaient aucune conversion forcée, ne prévoyaient pas de sanctions contre les catholiques et laissaient la messe se célébrer dans plusieurs régions. En réalité, le culte catholique ne fut interdit que pendant deux ans, et encore, seulement par ses lieutenants d’Arros et Montamat. Jeanne elle-même ne supprima jamais la messe ni ne mena de persécutions religieuses. Elle croyait que le temps et la liberté finiraient par rallier les cœurs à la Réforme. Malgré sa défaite, la monarchie française préparait sa revanche. En 1571, un Mémoire sur le Béarn affirma que la vicomté faisait partie du royaume, et des lettres patentes refusèrent désormais toute « naturalité » aux Béarnais, désormais considérés comme sujets du roi. Après plusieurs échecs d’annexion, la mort de Jeanne d’Albret en 1572 offrit une nouvelle occasion à la couronne.
 </p>
          </div>
        )
      },
        {
        titre: "La dernière reine de Navarre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En février et mars 1572, Jeanne d’Albret se rendit à Chenonceaux pour négocier le mariage de son fils Henri, futur Henri IV, avec Marguerite de Valois. Dans ses lettres à son fils, elle se plaignit de la moralité de la cour et décrivit un milieu corrompu : « Pour rien au monde je ne voudrais que vous veniez vivre ici. Même si je savais que c'était mauvais, je trouve cela encore pire que je ne le craignais. Ici, ce sont les femmes qui font des avances aux hommes, et non l'inverse. Si vous étiez ici, vous ne vous échapperiez jamais sans une intervention spéciale de Dieu. » Elle assimila cette cour à un lieu de débauche, de luxure et de tentation, un véritable « piège sexuel » tendu aux hommes. Ce projet de mariage visait à sceller la réconciliation entre catholiques et protestants. Coligny et Louis de Nassau, réhabilités par Charles IX car il avait besoin d’eux, pensaient à marier Henri de Navarre à Élisabeth. Montée à Paris, Jeanne reçut un chien de la reine Margot, mais Catherine de Médicis ne l’écouta pas et se moqua d’elle. Pourtant, si Jeanne refusait de signer, cela signifiait la rupture avec la France et l’emprise accrue des Guise. Marguerite souhaitait d’ailleurs épouser le duc de Guise, mais celui-ci se maria avec Catherine de Clèves. Catherine de Médicis, quant à elle, envisageait un mariage avec l’Espagne. Montgomery conseilla à Jeanne de maintenir le mariage avec Navarre. Elle s’y résolut finalement, consciente des enjeux politiques. Mais la reine mourut subitement en juin 1572, peu avant la cérémonie, laissant un royaume affermi, pacifié et profondément attaché à son indépendance. Sous son règne, le Béarn connut la guerre, la Réforme religieuse et la réorganisation politique, mais aussi une souveraine lucide et tolérante, convaincue que la foi ne devait jamais être imposée par la force. À sa mort, Jeanne exprima ses dernières volontés : elle souhaitait que sa fille, filleule de Catherine de Médicis, épouse un grand prince protestant et qu’ils vivent en harmonie. À Henri, son fils, elle laissa un ultime conseil : qu’il protège sa sœur « après Dieu » et qu’il lui serve de père.
 </p>
          </div>
        )
      }
    ]
  },

};

interface Props {
  params: { slug: string };
}

export default function HistoireDetailPage({ params }: Props) {
  const pageData = histoireData[params.slug as keyof typeof histoireData];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="relative h-96 bg-gray-800">
        <img 
          src={pageData.image} 
          alt={pageData.titre}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4">
          <span className="inline-block bg-or-patine text-white px-4 py-2 rounded-full font-corps text-sm mb-4">
            {pageData.periode}
          </span>
          <h1 className="font-titre text-4xl md:text-5xl mb-4">{pageData.titre}</h1>
          <p className="font-corps text-xl max-w-2xl mx-auto leading-relaxed">
            {pageData.resume}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-corps text-xl text-gray-700 leading-relaxed text-center italic">
            {pageData.introduction}
          </p>
        </div>
      </section>

      {/* Sections dépliables */}
      <section className="py-16 bg-parchemin">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl text-vert-mousse mb-4">
              Analyse Détaillée
            </h2>
            <p className="font-corps text-lg text-brun-terre">
              Explorez les différents aspects de cette période
            </p>
          </div>

          <div className="space-y-6">
            {pageData.sections.map((section, index) => (
              <ExpandableSection
                key={index}
                titre={section.titre}
                enfants={section.contenu}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-parchemin-fonce">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <a
            href="/histoire"
            className="inline-flex items-center font-corps text-brun-terre hover:text-or-patine transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la chronologie
          </a>
        </div>
      </section>
    </div>
  );
}

/* ✅ Fonction statique possible car ce fichier n’est pas client */
export function generateStaticParams() {
  return [
    { slug: 'antiquite' },
    { slug: 'haut-moyen' },
    { slug: 'moyen-age' },
    { slug: 'aragon' },
    { slug: 'autre' },
    { slug: 'souverainete' },
    { slug: 'union-navarre' },
  ];
}
