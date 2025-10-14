import { notFound } from 'next/navigation';
import ExpandableSection from './ExpandableSection';

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
    titre: "Formation du Béarn médiéval", 
    periode: "Moyen Age",
    resume: "Le Béarn naît d’une autonomie ancienne, forgée entre foi et féodalité.",
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
    resume: "Le Béarn s’affirme entre alliances, réformes et indépendance souveraine.",
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
Sanche VI Guillaume, issu de la même famille que Sancho el Mayor — roi d’Aragon, de León, de Castille et lié à Toulouse — accompagna à plusieurs reprises ce dernier dans ses campagnes contre les musulmans.
Après Ramire Ier d’Aragon, qui avait allié sa dynastie aux Catalans du comté d’Urgell, l’expansion vers Barbastro débute au début des années 1060.
Huesca devient alors un enjeu majeur : son évêque y est assassiné traîtreusement par un musulman.
Sous son successeur, Sanche Ramírez, une grande expédition est lancée en 1064, prêchée par le pape Alexandre II : c’est la croisade de Barbastro.
Dans ce contexte, le Béarn, grâce au col du Somport, devient une plaque tournante essentielle assurant la liaison entre la France et les royaumes chrétiens d’Espagne.
Guillaume VIII d’Aquitaine, allié aux Catalans et au comte d’Urgell, participe à l’expédition — mais elle se solde par un échec.
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
Une fois roi, il relance l’expansion castillane, soutenu par Cluny — puissant ordre religieux — et par les parias, tributs versés par les rois musulmans pour acheter la paix.
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
            Profitant de la disparition d’Étienne de Mauléon, Centulle s’impose en Soule, obtenant du vicomte Guillaume VIII les honores souletins et concluant une conventio d’inféodation. La justice béarnaise s’étend à ce territoire : le Souletin promet son aide et accepte cette suzeraineté. Centulle, désormais aussi vicomte de Mauléon, accorde des franchises à Montory sur le modèle du for d’Oloron. Vers 1079, il fonde un prieuré à Morlaàs, qu’il remet à Cluny — acte de pénitence pour son mariage consanguin. Ce geste marque aussi la naissance de Morlaàs comme centre religieux et politique. Parallèlement, Centulle fait construire un château à Lescar, où il s’installe, transformant la ville en capitale du Béarn entre 1079 et 1110.
            </p>
          </div>
        )
      },
       {
        titre: "Indépendance politique et conflits ecclésiastiques",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
            Sous l’influence clunisienne et grâce à la Reconquista, Centulle fait battre monnaie — la monnaie centullienne, symbole d’une souveraineté régalienne. Cette émission, réalisée sans l’accord d’un comte supérieur, affirme l’indépendance béarnaise. Mais ses relations avec l’Église se tendent : il expulse l’évêque Bernard de Basse de Lescar (mort en 1080), transfère Saint-Pé de l’évêché de Lescar à celui de Tarbes, et entre en conflit sur plusieurs affaires religieuses, notamment l’inhumation de Raymond de Bartrès (1083). Il impose son autorité en Bigorre, après la soumission de Sanche de Labarthe, et obtient treize otages en garantie de fidélité. En 1082, il subit une défaite face à Dax, mais conserve l’essentiel de son influence. Entre-temps, Oloron gagne en importance avec un viguier local et la création d’une poblacion (1080).
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
     resume: "Le Béarn s’affirme entre alliances, réformes et indépendance souveraine.",
    introduction: "Entre foi, pouvoir et conquêtes, le Béarn s’élève…",
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
En route, les croisés sont attaqués par des populations locales. À Salonique, Adémar tombe de sa mule, l’expédition continue sans lui. Accueillis hostilement par les Byzantins, les croisés s’emparent des remparts en criant « Toulouse ». Certains refusent de se rendre à Constantinople, malgré les négociations entre l’empereur Alexis Comnène et Raymond. Gaston attend à Rhaedestos avec son frère, puis rejoint Robert de Normandie et Étienne de Blois : leur mot d’ordre — « Nous y allons pour Rome ! ».
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

       {
        titre: "Piété et Réformes religieuses",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          En 1101, Gaston IV de Béarn et son épouse Talèse installent à la cathédrale de Lescar, autour de l’évêque Sanche, un chapitre de chanoines suivant la règle de Saint-Augustin. Ce geste manifeste leur piété et leur volonté d’affirmer leur foi, notamment après le retour de Gaston de la croisade à Jérusalem. Le 21 avril 1101, sur l’instigation de l’archevêque d’Auch, ils fondent à Lescar, avec l’accord de l’évêque, un hôpital destiné aux pauvres et aux pèlerins. Pour son entretien, ils lui attribuent des redevances dans le Vic-Bilh et les revenus de plusieurs églises locales (Caresse, Assat, Bordes). Le 6 avril 1102, à Pâques, ils renouvellent leur piété en accordant au même hôpital le droit de percevoir un péage sur une passerelle à Lescar. Le propriétaire des terres devait fournir des juments pour le labour et du blé, recevant en échange une rente versée à la Toussaint et à la foire. Le même jour, Gaston et Talèse transfèrent à la cathédrale de Lescar leurs droits de justice et les revenus de toute la paroisse. Au début de 1102, après la naissance de leur fils Centulle V, Gaston effectue une nouvelle donation pour le prieuré clunisien de Sainte-Foy « pro Centullo filio meo » (pour mon fils Centulle). Il confirme ses donations précédentes et y ajoute la dîme sur les ventes de vin et de viande à Morlaàs, le dixième des revenus des vignes vicomtales et les cinq sous morlans perçus lors du « cursus equorum », joute équestre organisée à la Toussaint. Ces dons traduisent une volonté d’unir foi, héritage et prestige seigneurial. Le 19 février 1102, dans le cloître de Sainte-Foy, Gaston et Talèse signent un privilège d’ingénuité en faveur des habitants de Morlaàs, les plaçant sous leur protection directe. Ce geste marque une étape vers la création du futur « For » du Béarn, fondement des libertés locales. Dans cet esprit de dévotion, Gaston se qualifie lui-même de « peccador Viami vicecomes » — « le pécheur Gaston, vicomte de Béarn ».  Face à la violence des chevaliers, l’Église instaure la Paix de Dieu, renforcée par les décisions du concile de Latran. Les combats sont désormais interdits les mercredis et mardis, sauf jours fériés, tandis que les seigneurs pouvaient toujours traverser les Pyrénées pour lutter contre les infidèles. Gaston, accompagné de ses châtelains, rejoint Bernard, comte d’Armagnac, à l’église de Diusse. En présence de Sanche, évêque de Lescar, ils confirment leur adhésion aux prescriptions de l’archevêque d’Auch en faveur de la paix et de la trêve. Malgré cette pacification religieuse, Gaston poursuivra ses combats contre Dax et Soule, occupant même les régions de Mixe et Ostabaret.
          </p>
          </div>
        )
      },

       {
        titre: "La Croisade et la Péninsule Ibérique",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Pendant ce temps, l’Aragon, jadis comparable au Béarn, s’était fortement accru. Avec la prise de Huesca, la péninsule Ibérique entre véritablement dans l’ère des croisades. Tandis que les chevaliers d’Occident partaient vers Jérusalem, le pape Urbain II rappelle que le combat contre les musulmans en Espagne valait autant spirituellement que celui en Terre sainte. En 1095, les Catalans, menacés de perdre Tarragone, reçoivent cette même indulgence : Urbain II affirme que les croisés espagnols bénéficient des mêmes grâces que ceux de Palestine. Ainsi, le combat sur la péninsule devient une croisade reconnue.  Pierre Ier d’Aragon poursuit ses conquêtes après Huesca : en 1100, il prend Barbastro, puis Bolea. En 1101, il fait vœu de croisade, prêt à partir vers Jérusalem, mais décide finalement de se concentrer sur l’Aragon pour s’emparer de Saragosse et ouvrir un chemin vers la Méditerranée. Il mène un raid dans la haute vallée de l’Èbre, prend Pueyo, et campe devant Saragosse avec deux légats pontificaux. Il baptise son camp Juslibol (déformation de Deus lo volt — « Dieu le veut »), reprenant le cri des croisés. Pour la première fois, la croix devient symbole militaire sur sol ibérique, consacrant Pierre Ier comme « el rey cruzado ». La mort de Pierre Ier en 1104, à seulement 36 ans, bouleverse l’Aragon. Son fils unique, marié à la fille du Cid, est mort sans descendance. Son frère cadet, Alphonse, non destiné au trône (il devait devenir moine à Sahagún), devient roi par hasard. Son mariage en 1109 avec Urraque, héritière de Castille, devait unir les royaumes ibériques, mais cette union échoue : Urraque, veuve du comte de Galice, a déjà un fils, le futur Alphonse VII, et le tempérament autoritaire d’Alphonse Ier mène à une mésentente durable.
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
        L’entrée dans la ville constitue un exploit, la prise complète s’avère longue et difficile : la cité est puissamment fortifiée, sa population nombreuse et déterminée. Anciennement appelée Salduba, Saragosse avait été profondément transformée sous Auguste, dotée d’une muraille intérieure solide et d’un plan urbain romain en rectangle régulier. Ce schéma est conservé sous les Wisigoths, puis renforcé par les musulmans, qui entretiennent minutieusement l’enceinte. Au nord, la muraille s’ouvre sur le pont Bab al-Qantarat, traversant l’Èbre en amont du confluent avec le Huerva. De là partent les routes vers Huesca et Lérida. Entre le confluent et le pont s’étend le port fluvial, longeant les murs de la ville. À l’intérieur, les chrétiens mozarabes habitent le secteur nord-ouest, près de l’ancienne cathédrale Santa Maria Virgen. Les gouverneurs musulmans disposent de deux résidences : la zuda, entre la porte de Tolède et celle du pont, et une autre à l’angle opposé. Malgré la persistance du plan romain, la cité a pris l’aspect d’une médina orientale : mosquées, bains, alcaicería (marché couvert) et maisons blanches à murs de pisé et patios intérieurs. Les faubourgs (ar-rabad) se développent hors des murs, notamment au sud le long de la route de Daroca, avec caravansérail, mosquée, hôpital et cimetière. Un rempart de terre protège cette zone, délimitant l’aljama (judería) à l’est et l’église des Santas Misas au sud, où les chrétiens honorent les reliques des martyrs saragossains. Près de la route de Tudèle, les Banû Hûd édifient un palais princier dans la tradition arabe : l’Aljafería. Achevé au XIᵉ siècle, ce complexe (87 × 78 m) est entouré d’une enceinte et somptueusement réaménagé par al-Muqtadir, souverain raffiné qui en fait un palais résidentiel d’exception. Restaurée, l’Aljafería demeure aujourd’hui l’un des joyaux architecturaux majeurs de Saragosse, témoin du faste artistique et politique de l’époque musulmane. Les chroniques françaises exaltent le rôle de Gaston : sous sa conduite, seigneurs gascons et espagnols franchissent les Pyrénées pour libérer l’Église opprimée. Les faubourgs sont rapidement attaqués, les Sarrasins se replient derrière les murailles en laissant richesses et ressources. Les chrétiens installent campements fortifiés et encerclent étroitement la ville, tandis qu’un groupe se distingue par des attaques éclairs infligeant de lourdes pertes aux défenseurs.  Arrive ensuite Alphonse Ier, à la tête d’une armée aragonaise renforcée par Navarre et Catalogne Selon Lacarra, les deux chefs agissent de concert avec Gaston qui dirige les forces françaises et gasconnes, et joue un rôle spirituel reconnu par la papauté. Alphonse conduit les forces ibériques et assure la direction militaire et politique.  Les assiégeants coupent progressivement l’accès à l’eau et au ravitaillement, affamant les défenseurs. Malgré sorties et tentatives de briser l’encerclement, les chevaliers chrétiens tiennent bon. Des vingt campements fortifiés sont construits autour des murailles pour empêcher tout secours. Après près de dix mois de siège, Saragosse capitule le 18 décembre 1118, Alphonse Ier entre dans la ville et Gaston IV prend possession du quartier appelé l’Azuda. La conquête transforme Saragosse en capitale chrétienne, siège d’un nouvel archevêché, symbole de la victoire sur l’islam en Aragon. Alphonse nomme Gaston seigneur de Saragosse.
          </p>
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
        Dans ce climat de victoire, Gaston IV de Béarn propose la création d’un ordre militaire inspiré des Chevaliers du Saint-Sépulcre : la Militia Christi. Cette confrérie devait défendre les terres reconquises et assurer la christianisation des nouvelles cités. Il fonde la ville de Monreal, confiée à ces chevaliers, appelés aussi Chevaliers des Palmes, dont le nom et l’emblème rappellent leur lien avec Jérusalem et la vocation religieuse de la Reconquista. Le roi d’Aragon attribua aux chevaliers fondés par Gaston de Béarn, une confrérie de laïcs voués à combattre pour le Christ, un vaste territoire montagneux encore peu occupé. Pour assurer leur subsistance, ils reçurent la moitié des revenus de Monreal, une part des tributs payés par les chefs musulmans sous leur protection et une rente annuelle de 1 000 sous à Jaca et à Saragosse. Comme les chevaliers du Saint-Sépulcre, ils furent dispensés de toute autre obligation militaire que la lutte contre l’Islam et purent conserver l’intégralité de leur butin. Le clergé, associé à cette fondation, célébrait chaque année une messe pour leurs morts et leur accordait des indulgences équivalentes à celles des croisés de Terre sainte. L’archevêque d’Auch confirma ces privilèges, promettant quarante jours d’indulgence à quiconque les soutiendrait financièrement. Dans le même élan, en 1122, Alphonse Ier fonda la Confrérie des Chevaliers de Belchite, bénie par Gui de Lons, évêque de Lescar et compagnon du roi et de Gaston. Cette confrérie, reconnue lors d’une grande assemblée ecclésiastique, symbolisait la spiritualité partagée entre les deux hommes et devint un pilier de la défense de l’Extramadure aragonaise. Belchite, déjà occupée avant la chute de Saragosse, servit de refuge à des aventuriers transformés en défenseurs disciplinés du christianisme. Leur objectif, clairement formulé, était « d’ouvrir la route de Jérusalem et de libérer l’Église captive », en visant notamment les territoires musulmans de Tortosa, Murcie et Almería. Les membres se divisaient en deux groupes, les perpétuels, qui faisaient vœu de chasteté, pauvreté et obéissance, et les temporaires, engagés pour une durée limitée au service du Christ. Les confrères bénéficiaient d’exemptions fiscales, de la liberté de disposer de leur butin et d’un privilège de non-combat contre tout chrétien. Même les marchands associés pouvaient commercer librement, à condition de ne jamais traiter avec les infidèles. Chaque mois de service accordait une rémission spirituelle, et les dons financiers permettaient d’obtenir des dispenses de carême ou d’abstinence — preuve d’une adaptation pragmatique de l’esprit de croisade. L’apparition des confréries de Monreal et Belchite s’inscrit dans une transformation majeure du monde chrétien : l’Église médiévale, autrefois méfiante à l’égard des armes, intégrait désormais l’idée que le combat pouvait servir Dieu. Cette évolution culmine avec la création des Templiers, des Hospitaliers et des Teutoniques, mais elle trouve ses racines en Aragon et en Béarn. Les projets de Gaston et d’Alphonse anticipèrent cette mutation : sans créer de véritables moines-soldats, ils inventèrent un modèle où des laïcs pouvaient consacrer une part de leur vie à la guerre sainte. Les confréries aragonaises précédèrent même les institutions du Nord. Avant elles, l’Ordre de l’Hôpital de Saint-Jean de Jérusalem (confirmé en 1113) restait un ordre charitable. Ce n’est qu’en 1119, avec Hugues de Payens, que naquirent les Pauvres Chevaliers du Christ, ancêtres des Templiers. Sous l’influence de Saint Bernard de Clairvaux, en 1128, ces chevaliers devinrent un véritable ordre religieux, inspirant à leur tour les Hospitaliers à militariser leur vocation. Gaston et Alphonse avaient donc précédé cette révolution spirituelle, proposant un modèle ibérique et béarnais du combattant chrétien. Les confréries fondées par Gaston et Alphonse inspirèrent toute la péninsule Ibérique car en 1158, fut créé l’Ordre de Calatrava, d’esprit cistercien etsuivirent ceux d’Alcántara, d’Avis (au Portugal) et de Saint-Jacques de l’Épée (vers 1170). Dès 1119, Belchite fut confiée à Galindo Sanchez, qui mena ses « chevaliers des palmes » au combat aux côtés de Gaston le Croisé. Cette organisation naquit dans le contexte bouillonnant qui suivit la victoire d’Alphonse Ier à Cutanda : il fallait alors fortifier les territoires nouvellement conquis face aux Almoravides. Le roi multiplia ses campagnes entre Aragon et Castille, fortifiant Soria, réorganisant les évêchés et installant des colons dans les plaines de Daroca et Calatayud. La création de l’Hermandad de Belchite fut confirmée par une assemblée d’évêques et d’archevêques, signe du contrôle ecclésiastique sur cette entreprise.
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
Cette mention situe la famille dans la capitale du royaume aragonais, tandis qu’Alphonse Ier menait encore campagne en Navarre, en Ribagorce, en Castille et jusqu’à l’Extramadure aragonaise. Au printemps 1124, le roi poursuivit ses expéditions : attesté à Daroca en mars, à Logroño en mai, puis à Monreal del Campo en septembre pour installer des colons. En hiver, il lança une audacieuse expédition vers le sud, un raid jusqu’à la Peña Cadiella, reliant les huertas de Valence et Murcie, confirmant son ardeur militaire et la continuité de la reconquête. Le frère du roi d’Aragon, Pierre Ier, avait autrefois assiégé Huesca, aidé par le Cid et le jeune Alphonse. Devenu « roi de l’Extramadure aragonaise », ce dernier concrétisa enfin son projet de confrérie de Belchite : ouvrir au christianisme la route vers la Palestine en sécurisant le littoral de Valence. Il s’y rendit avec Gaston de Béarn, Gui de Lons, Rotrou du Perche, plusieurs chevaliers normands et aragonais, ainsi que l’évêque béarnais de Saragosse, Pierre de Librana. Ce fut sans doute la première expédition de la confrérie, symbole d’une alliance totale entre foi, guerre et fraternité pyrénéenne. Après avoir repoussé une contre-attaque ennemie au col de la Peña Cadiella, les Croisés, menés par Alphonse Ier le Batailleur et accompagnés peut-être de Gaston de Béarn, durent se replier. Revenu à Ayerbe et Uncastillo, dont Gaston restait seigneur en janvier 1125, le roi d’Aragon prépara une ambitieuse expédition vers la Méditerranée, appelée Huestes de España par l’historien Menéndez Pidal. Cette campagne, comparée plus tard à celles du Prince Noir ou même à la chevauchée de Charlemagne, visait à frapper le cœur d’al-Andalus. Les chroniqueurs Ibn-ʿAç-Caifari, Orderic Vital, la Crónica de San Juan de la Peña et la Crónica de los Estados peninsulares en firent un modèle de croisade, soulignant les parallèles entre Charlemagne à Saragosse (778) et Alphonse à Grenade (1125). Dans les deux cas, les souverains furent incités par des émissaires venus d’al-Andalus à intervenir en terre musulmane. Les Mozarabes de Grenade, longtemps tolérés sous domination musulmane, furent brutalement persécutés à partir de 1099 sur ordre de l’émir Yusuf ben Tachfin, exécuté par des alfaquis rigoristes. Ces chrétiens d’al-Andalus appelèrent à l’aide Alphonse Ier, loué pour ses victoires. Ils lui envoyèrent lettres et registres vantant la richesse de Grenade, ses vergers, sa soie, son alcazaba, pour éveiller sa convoitise.
Influencé par le précédent du Cid à Valence, Alphonse vit dans cette opportunité un moyen de restaurer la gloire chrétienne et d’établir un territoire vassal dans le sud, attirant des colons du nord. L’Aragon, jusqu’alors éclipsé par la Castille, pouvait enfin affirmer sa puissance et jouer un rôle décisif dans la Reconquista. L’armée, forte de 3 000 à 5 000 cavaliers aragonais, navarrais et castillans, rassemblée à Jalón, comptait parmi ses chefs Gaston IV de Béarn, véritable chef d’état-major, Centulle de Bigorre, et plusieurs évêques, dont Pierre de Saragosse et Étienne de Huesca. Le plan, tenu secret, visait Grenade. Partis de Daroca et Cella, ils atteignirent Valence le 20 octobre. Malgré l’alerte almoravide, de nombreux Mozarabes se joignirent à eux. L’armée contourna Valence, attaqua Denia sans succès, traversa Murcie par les gorges de Játiva et Peña Cadiella, puis marcha vers Vera, Almazoran, Purchena, et fit halte à Tijola avant d’échouer à Baeza, dépourvue de murailles. Cette longue chevauchée démontra la vaillance des croisés, malgré l’absence de résultats décisifs. Arrivés à Guadix, Alphonse et Gaston restèrent un mois avant de marcher sur Grenade. Prévenu, le gouverneur Abou-l-Tahir ibn Yousof mobilisa la défense, renforcée par une armée venue d’Afrique. Un complot chrétien interne, découvert à temps, fut réprimé, ruinant les espoirs d’un soulèvement. Privés de matériel de siège et d’appui maritime, les croisés établirent leur camp le 7 janvier 1126, affrontant froid et manque de vivres. Alphonse espéra une trahison interne, mais les Mozarabes, expulsés ou surveillés, restèrent inactifs. Après dix jours infructueux, la situation se dégrada : pluie, gel, pénurie et isolement contraignirent Alphonse à lever le siège le 23 janvier. Dix mille Mozarabes furent expulsés de Grenade et rejoignirent l’armée chrétienne. Changeant de stratégie, Alphonse ravagea les environs de Grenade et de Cordoue, cherchant l’affrontement. Son itinéraire, attesté à Macarena, Baena, Espejo et Lucena, mena à la bataille d’Anzul le 10 mars 1126 contre les troupes almoravides d’Abu-Bakr, fils de l’émir. Les musulmans, d’abord victorieux, furent pris de panique et battus : leur camp fut pillé, et l’armée chrétienne remporta une victoire éclatante. Cependant, faute de renforts, Alphonse et Gaston durent envisager le retour, non sans mener encore quelques incursions avant leur repli définitif. Traversant les montagnes des Alpujarras jusqu’à Motril, Alphonse et Gaston affirmèrent brièvement la présence chrétienne en Andalousie. Ibn-ʿAç-Caifari rapporte un geste symbolique du roi, jetant un objet du haut d’une falaise avant d’y bâtir une tour, interprété comme un vœu religieux. Le retour fut désastreux : attaques musulmanes, peste, froid, faim. De nombreux chevaliers périrent, dont l’évêque Raymond de Roda, mort d’épuisement le 21 juin à Huesca. Malgré tout, Alphonse et Gaston rentrèrent chargés de butin et de prisonniers, se glorifiant d’avoir infligé de lourdes pertes à l’ennemi.
          </p>
          </div>
        )
      },

      {
        titre: "L’expédition de 1126 et la mort de Gaston",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         L’expédition menée par Alphonse Ier le Batailleur et Gaston IV de Béarn en 1126, attestée dans la région de Tudèle, fut une entreprise aussi héroïque que désastreuse. Leur bravoure fut unanimement saluée, mais les pertes humaines et politiques furent lourdes. Plutôt qu’une conquête progressive autour de l’Èbre, cette campagne alarma les Almoravides, qui préparèrent une revanche. Les chroniqueurs, tels que San Juan de la Peña et Orderic Vital, rapportent que malgré la vaillance des chrétiens, aucune ville fortifiée ne fut prise, les campagnes seulement ravagées, et la majorité des guerriers périrent. Cette chevauchée, qui dura plus d’un an sur le territoire musulman, eut aussi des conséquences tragiques pour les Mozarabes : beaucoup furent déportés au Maroc, tandis que les survivants participèrent au repeuplement de la vallée de l’Èbre. L’expédition marqua la fin des grandes campagnes communes d’Alphonse et de Gaston, dont le courage fut reconnu dans la charte d’Alfaro, signée par Gaston comme seigneur d’Uncastillo. Se proclamant « empereur par la grâce de Dieu », Alphonse Ier déclara libres tous les chrétiens mozarabes qu’il avait arrachés à la domination sarrasine. Ils reçurent la protection spéciale des fueros, furent installés sur des terres royales, exemptés d’impôts et de service militaire, et bénéficièrent d’une large autonomie judiciaire. Les litiges internes restaient du ressort de leurs communautés, le roi n’intervenant qu’en cas de conflit externe. Ces privilèges visaient à intégrer les Mozarabes tout en récompensant leur fidélité. À leur retour de campagne, Alphonse et Gaston durent cependant affronter de nombreuses difficultés dans la gestion de leurs domaines, marquant le début de la dernière phase de leur alliance politique.  La mort de la reine Urraca, le 8 mars 1126, provoqua une crise : son fils, Alphonse-Ramírez, devint Alphonse VII de Castille et Léon, déclenchant un conflit avec son beau-père, Alphonse Ier d’Aragon. La paix de Tamara régla la querelle : le roi d’Aragon reconnut la succession et le titre impérial d’Alphonse VII, tout en conservant l’Alava, Soria et la région jusqu’à San Esteban de Gormaz. Durant cette période, Gaston IV de Béarn, demeuré dans ses terres, prit d’importantes initiatives spirituelles. Le 6 avril 1128, avec son épouse Talèse, il fonda le prieuré de Sauvelade, rattaché à Sainte-Christine du Somport, puis, le 13 juin, confia à cet établissement la gestion de l’hôpital de Mifaget, créé entre 1110 et 1114. Ayant perdu leur fils unique, Centulle, le couple rédigea un acte de fondation dédié à la Sainte-Trinité, implorant la grâce d’un nouvel héritier, exaucée peu après par la naissance d’un nouveau fils, nommé lui aussi Centulle. Tandis que Gaston gérait ses affaires en Béarn, Alphonse poursuivit ses guerres, lançant en juin 1128 une expédition contre Valence. Après avoir ravagé Alcira et le col de Cullera, il remporta une victoire éphémère qui provoqua la colère de l’émir almoravide Ali ben Yusuf. Sans résultat durable, le roi retourna en Aragon. C’est vers la fin de 1129 qu’Alphonse et Gaston se rencontrèrent pour la dernière fois. Leur dernier acte commun date de septembre 1129, lorsqu’ils accordèrent des privilèges aux Francs installés à Pampelune. Gaston y signa comme seigneur de Saragosse, tandis qu’Alphonse, parti dans le val d’Aran, confia la régence au prélat Étienne de Huesca. Selon les Annales d’Aragon de Zurita, en 1131, les Maures tuèrent Étienne et Gaston, sans précision du lieu. L’historien Marca évoque une trahison, tandis qu’Ibn-Idhari précise qu’en 1130–1131, le chef almoravide Tashfin mena campagne à Jaén et Grenade, où Gaston fut vaincu par Yintan Ali. Sa tête fut exhibée dans les rues de Valence, puis envoyée à l’émir Ali ben Yusuf à Marrakech. Appelé par les musulmans « l’émir des chrétiens », il fut considéré comme un ennemi valeureux. Sa tête, plantée sur une pique et montrée dans les rues de Grenade, symbolisait la revanche musulmane, mais aussi leur respect pour un adversaire redouté. Son corps, restitué après négociation, fut inhumé sous le porche de Santa Maria la Mayor à Saragosse. Le roi d’Aragon apprit la mort de Gaston alors qu’il assiégeait Bayonne (1130–1131). Resté longtemps dans le val d’Aran pour affirmer son autorité, il lança ce siège avec l’aide de ses vassaux du nord des Pyrénées : Pierre, vicomte de Marsan et de Gabarret (gendre de Gaston), Gassion vicomte de Soule, et les Béarnais, dont le jeune Centulle VI, représenté par sa mère Talèse et par Gui de Lons, évêque de Lescar. L’assaut manqué contre Bayonne s’inscrit dans le contexte des rivalités féodales entre Barcelone et Toulouse. Tandis qu’Alphonse-Jourdain, comte de Toulouse, se rapprochait d’Alphonse VII de Castille, une coalition anti-aragonaise se forma. Avant de lever le siège, Gaston, ou son entourage, rédigea un testament prévoyant une nouvelle offensive entre Tortosa, Lérida et Fraga, dirigée contre les Almoravides et les Barcelonais. L’émir Ali ben Yusuf, jugeant Gaston le plus dangereux adversaire d’Alphonse, conclut un pacte avec Barcelone : contre 12 000 dinars annuels, les Catalans se placèrent sous protection musulmane. Outré, le roi d’Aragon accusa Barcelone de trahir la chrétienté, jurant de les soumettre et d’incorporer leur pays à son royaume.
          </p>
          </div>
        )
      },

       {
        titre: "La bataille de Fraga et Centulle VI",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Depuis plusieurs années, Alphonse Ier d’Aragon, dit le Batailleur, préparait une offensive décisive dans la vallée de l’Èbre, une zone stratégique régulièrement attaquée par la cavalerie musulmane. Dès 1125, Garcia-Ramirez, futur roi de Navarre, avait repris Monzon aux musulmans, ouvrant la voie à une série d’opérations militaires destinées à sécuriser les confins orientaux du royaume. En novembre 1132, Alphonse ordonna la construction d’une flottille pour mener une attaque fluviale sur l’Èbre. Il s’empara ensuite de Mequinenza, au sud de Fraga, qu’il transforma en base militaire. Le roi choisit de concentrer ses efforts sur Tortosa, pensant qu’en tombant, cette ville entraînerait celle de Lleida. Âgé d’une soixantaine d’années et profondément marqué par la mort de son compagnon d’armes Gaston de Béarn, il conçut cette campagne comme une ultime croisade, empreinte de ferveur religieuse et de désir de rédemption. Alphonse réunit alors ses vassaux et alliés pour une expédition qu’il voulait sainte : Aimeri de Narbonne, Garcia-Ramirez de Navarre, Rodrigue des Asturies, et surtout Centulle VI de Béarn, fils du défunt Gaston. La régente Talèse, veuve de Gaston, renforça encore les liens entre le Béarn et l’Aragon en offrant à l’abbaye de Sauvelade une affiliation à Sainte-Christine du Somport, ainsi que les biens de la vicomté d’Ayerbe. Les Béarnais, conduits par Gui de Lons, évêque de Lescar, participèrent activement à la croisade, accompagnés de Gassion de Soule et Oger de Miramont. Privés du soutien du comte de Bigorre, demi-frère de Gaston récemment décédé, ils s’en remirent à la direction spirituelle de Gui de Lons, qui garda précieusement dans la tente royale le reliquaire du Lignum Crucis de Sahagun.
Avant le siège, Alphonse fit prêter à ses chevaliers le serment de ne jamais quitter Fraga tant que la cité ne serait pas conquise. L’entreprise s’annonçait difficile : Fraga bénéficiait d’une défense naturelle redoutable. Le sous-sol, percé de cavernes et galeries, permettait aux défenseurs de surgir par surprise. La garnison, bien armée, savait qu’elle n’aurait aucune pitié à attendre d’Alphonse, devenu impitoyable depuis la mort de Gaston. À Mequinenza, il avait déjà exécuté la garnison ennemie, montrant que la clémence n’était plus de mise.
Le gouverneur de Fraga fit appel à Ibn Ganya, gouverneur de Valence et de Murcie, qui leva rapidement une armée de secours. Le 17 juillet 1134, les renforts musulmans arrivèrent, encerclant les croisés. La bataille tourna à la catastrophe. Nous avons deux anecdotes. ans la première, un moine promit au roi que Dieu ferait tomber les murailles s’il priait depuis une colline. Mais un projectile ennemi le tua net, coupé en deux par une pierre, provoquant la stupeur dans le camp chrétien. Dans la seconde, selon Orderic Vital, une caravane almoravide de 200 chameaux chargés d’or et de vivres approchait. Alphonse voulut l’attaquer immédiatement, malgré les avertissements du comte Beltran, qui soupçonnait un piège. L’assaut se solda par un massacre, les croisés ayant été surpris pendant le pillage. Puis, les musulmans, forts de leur expérience andalouse, mirent en œuvre une tactique d’encerclement redoutable : une attaque frontale suivie d’un revers soudain qui prit les croisés en tenaille. La garnison, utilisant ses souterrains, sortit par surprise et acheva la déroute. Ce qui devait être une victoire chrétienne devint une défaite totale. La bataille de Fraga fut un désastre sans précédent. Le comte Beltran périt, tout comme le jeune Centulle VI de Béarn, dernier héritier de Gaston. Les musulmans s’emparèrent du camp chrétien et des reliques de la Vraie Croix, défendues jusqu’au bout par Gui de Lons, capturé puis emmené à Valence. L’évêque fut ensuite libéré contre rançon, mais après avoir été aveuglé. Ce fut la première et unique défaite d’Alphonse le Batailleur, jusque-là invaincu. Malgré tout, il tenta de limiter les conséquences : il nomma son frère Ramire, évêque de Roda, à la tête du royaume, et attribua de nouveaux fiefs à Mequinenza et Huesca pour remplacer les seigneurs morts au combat. Affaibli et profondément atteint, Alphonse rédigea son testament le 4 septembre 1134, avant de mourir trois jours plus tard, le 7 septembre. Il fut inhumé dans le cloître de Saint-Pierre-le-Vieux de Huesca, dans un tombeau simple et austère, fidèle à sa vie de soldat du Christ. Les fresques romanes de Saint-Lizier achevées vers 1117, réparties en deux cycles, la terre et l’église terrestre / le ciel et l’église céleste, symbolisaient la Jérusalem céleste, rappelant aux hommes que la vie terrestre n’avait de sens que vécue dans la foi et la dignité, en quête de la vie éternelle. Sous le règne d'Alphonse, l’Aragon devint une puissance majeure, rivalisant avec la Castille. Le Béarn, bien qu’incorporé partiellement à l’influence aragonaise, conserva son autonomie féodale.  </p>
          </div>
        )
      },

    ]
  },
  
   'aragon': {
    titre: "Tutelle Aragonaise",
    periode: "Moyen Age",
    resume: "Les premières traces de peuplement dans les Pyrénées béarnaises.",
    introduction: "Le Béarn antique voit naître les premières communautés organisées...",
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
     'souverainete': {
    titre: "Souveraineté Béarnaise",
    periode: "Moyen Age",
    resume: "Les premières traces de peuplement dans les Pyrénées béarnaises.",
    introduction: "Le Béarn antique voit naître les premières communautés organisées...",
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
    resume: "Les premières traces de peuplement dans les Pyrénées béarnaises.",
    introduction: "Le Béarn antique voit naître les premières communautés organisées...",
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
  // tu ajouteras ici les autres slugs : "haut-moyen", "moyen-age", "aragon", "souverainete", "union-navarre"
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
    { slug: 'souverainete' },
    { slug: 'union-navarre' },
  ];
}
