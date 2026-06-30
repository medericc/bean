

import { notFound } from "next/navigation";
import ExpandableSection from "./ExpandableSection";
import type { Metadata } from "next";

export async function generateMetadata(
  props: {
    params: Promise<{
      categorie: string;
      slug: string;
    }>
  }
): Promise<Metadata> {

  const { categorie, slug } = await props.params;

  const dataSource =
    categorie === 'monde'
      ? worldData
      : histoireData;

  const data =
    dataSource[slug as keyof typeof dataSource];

  if (!data) {
    return {
      title: "Page non trouvée – Mémoire du Béarn",
    };
  }

  return {
    title: `${data.titre} – ${data.periode} | Mémoire du Béarn`,
  };
}

const histoireData = {
 
   'eglise': {
    titre: "Naissance de l'Église", 
    periode: "Antiquité",
    resume: "Jésus-Christ vient fonder son Église sur saint Pierre",
    introduction: "Aux origines de l'Église qui a façonné l'Europe…",
    image: "/images/histoire/eglise.jpg",
    sections: [
      {
        titre: "La Primauté de Saint Pierre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      La religion chrétienne (Jacques 1,27 ; 2 Timothée 3,2) a progressé par la personne de Pierre (et de ses successeurs) pour qui Jésus a spécifiquement prié afin que sa foi ne défaille pas et qu'il « affermisse ses frères ». La lettre d’Agathon du 6e concile : « Pierre a parlé, c’est dogmatique ». Jésus, ayant reçu du Père la mission de Berger, la confie visiblement à Pierre en changeant son nom pour une raison précise (en grec, Petros est le masculin de Petra à la période post-Alexandre) et lui déclare : « Tu es Pierre, et sur cette pierre je bâtirai mon Église », « Je te donnerai les clefs du Royaume » et « Pais mes brebis ». À l'image de Moïse transmettant son autorité à Josué, Jésus donne à Pierre une autorité visible : dans les Actes, ce dernier prend constamment l’initiative comme pasteur de l’Église (1er à parler, 1er à faire un miracle, il choisit le successeur de Judas, c’était dans sa barque que Jésus enseignait pas l’autre, Luc 5,3…). Le bâton à prendre est mentionné dans Marc 6 et pas dans Luc 9, car c'est Pierre qui a raconté l'histoire à Marc. De plus, l'Apocalypse montre que Jésus détient les clefs de David, confirmant l'existence de l'autorité du Royaume, tout en confiant son exercice terrestre à Pierre. Saint Ignace d'Antioche précise d'ailleurs explicitement que l'Église de Rome « préside » dans la région des Romains, et dès l’an 96, Clément, 4e pape, intervient avec autorité à Corinthe alors que l'apôtre Jean est pourtant vivant, prouvant sa primauté. Le fait que les évêques (garantis par l’imposition des mains, Actes 1,26) aux trois coins du monde (de Lyon à Rome, d'Antioche à Carthage) proclamaient exactement la même foi sans moyens de communication modernes prouve que l'Esprit Saint maintient l'unité depuis la Pentecôte, cinquante jours après la résurrection du Christ (accomplie par la puissance du Saint-Esprit, selon la volonté du Père et par la puissance divine du Fils puisque toutes les œuvres divines sont communes aux trois Personnes). 
          </p>
          </div>
        )
      },
      {
        titre: "Deux Mille Ans de Vérité",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Depuis 2000 ans, l’Église tranche les erreurs par ses décisions (comme l'institution des diacres dans Actes 6, le célibat des prêtres en l’an 306, la Bible à la fin du IVe siècle) et ses conciles (du premier à Jérusalem dans Actes 15 vers l’an 50 jusqu'à Vatican II en 1965). Malgré les infiltrations historiques — de Judas aux hommes dénoncés par Saint Pie X qui feignent la foi pour tromper les simples, en passant par le Père de l'Église Saint Irénée visant ceux qui prêchent un autre Christ, un autre Père de l'Église Saint Cyrille avertissant contre les ministres divisant la foi par calculs séculiers ou les abbés de la Révolution ou encore au XXe siècle, l'archevêque Marcinkus (directeur de la banque du Vatican) impliqué dans le scandale P2 via le maçon Calvi. Elle ne se contredit jamais malgré la grande densité des conciles (comme Nicée en 325, convoqué par Constantin pour la paix de l'Empire, personnellement peu concerné par la théologie) qui s'appuient sur les Pères de l’Église, gardiens des enseignements du Christ pour distinguer la vraie doctrine des hérésies face à la gnose des Actes avec Simon le Magicien (entraînant des sectes où violer les lois morales de ce monde serait une façon de s'en libérer), l’islam avec Mahomet (qui nous appelle “gens du livre” en parlant d’un soi-disant Évangile), le mormonisme avec Smith (qui utilise la bible Louis Segond mal traduite avec un canon suivant les juifs), le donatisme face à un Constantin soucieux de préserver la paix ou encore la double prédestination de Calvin (récusé car Dieu est comme au centre d'une sphère, il embrasse du regard tous nos chemins et connaît nos choix sans nous y contraindre) basée sur la Bible (méthodologie inversée), toutes permises par Dieu pour un plus grand bien (sans Luther pas de Saint Bellarmin…). Il nous incombe de travailler au salut du plus grand nombre, quel que soit le contexte. Pour ce faire, nous devons suivre le phare qu’est l’Église divino-humaine, assurément faible par le libre arbitre de ses membres (un évêque argentin à refuser la communion dans la bouche en 2025 en aversion avec la norme), mais dont la foi demeure inébranlable par le sang du Crucifié et sa prière pour le successeur de Pierre (le pape). Une foi à ne pas pervertir au gré de prétextes sophistiques. À ce compte, l'un pourrait rebaptiser Marianne "Jules" sous prétexte que les révolutionnaires se référaient à la République romaine ; un autre, décréter qu'il faut chanter La Parisienne plutôt que La Marseillaise parce que la capitale est Paris ; un troisième combinerait les deux pour créer "Le Jules et la Parisienne". On se retrouverait alors avec trois entités protestantes.

</p>   </div>
        )
      },
       {
        titre: "Écriture, Tradition et Magistère",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La foi repose sur 3 piliers : l’Écriture, dont le canon fut fixé par le pape Damase Ier à Rome puis validé à Carthage à la fin du IVe siècle pour clore le différend entre Saint Augustin et Saint Jérôme (pères de l'Eglise), ce dernier s'y est soumis en demandant violemment à Rufin d'en faire autant, illustrant le De Veritate de Saint Thomas d'Aquin qui rappelle que seule l'Église est infaillible, non les Pères. De plus, 2 Timothée 3,15-16 valide le livre de la Sagesse, et le Nouveau Testament cite la Septante (corroborée par les manuscrits de Qumrân pour Hébreux 1,6) et non le texte massorétique (7 livres de moins), dont les voyelles furent ajoutées tardivement par les Juifs (leur nouvelle religion étant postérieure à celle du catholicisme) après avoir perdu leur autorité (parabole des vignerons), Augustin affirmant même qu’ils y avaient censuré des livres sur le Christ. Cette Écriture découle d'un autre pilier, la Tradition orale, l'Église étant la « colonne et l'appui de la vérité » (1 Tim 3,15) : c'est elle qui tranche, clarifie et a canonisé la Bible via les Pères (qui étaient catholique, « Là où est Jésus-Christ là est l’Église catholique »  Saint Ignace, disciple de Pierre, en 107) parmi une pléthore d’évangiles, à l'image de Saint Irénée (disciple de Polycarpe de Smyrne, lui-même baptisé bébé par "immersion dans la Trinité" et disciple de Jean) authentifiant l'histoire des vrais Évangiles. Selon Jean 21, 25, tout n'est pas consigné dans la Bible (qui compte 73 livres). C'est comme si je disais que je parle à mes disciples près d'un filet dans un village : je ne vais pas tout décrire (la place des nuages, le temps, le nombre de bancs...). Ce sont mes disciples qui le transmettront oralement ("c'était un filet de tennis à Ascain"), et là, les disciples du Christ ne se trompent pas, car l'Esprit Saint guide l'Église (Actes 15, 28). Cette transmission orale (Thess 2:5 et 2 Thess 2,15) précède l'écrit — Abraham n'ayant rien écrit avant Moïse —, alors que la Bible ne s'autoproclame jamais autorité unique, omet l'auteur de l'Évangile de Matthieu, mentionne une lettre perdue dans Colossiens 4,16 et Actes 20,35 possède un agraphon (proche de l’effet Ben Franklin). Enfin, le Magistère scelle cette structure, Jésus affirme « Qui vous rejette, me rejette » (Lc 10,16), donne en Matthieu 18,18 une autorité morale et spirituelle via le concept de « lier et délier » (condamner/absoudre) permettant l’unité de l’Église par les excommunications, et institue en Jean 20,22-23 et Jacques 5,14-15 la confession, poussant Saint Cyprien à déclarer qu'on ne peut se réconcilier sans les prêtres et Saint Augustin à interdire de se confesser à Dieu seul alors qu'Il ordonne d'aller au prêtre. De plus, c’est le Christ qui agit à travers chaque sacrement donc la validité ne dépend pas de la sainteté de la personne (pape Etienne). 

    
    
      </p> 
      
         </div>
        )
      },
       {
        titre: "Les Signes Visibles de la Foi",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Depuis lors, de nombreux saints sont morts martyrs face aux Romains en refusant de pervertir leur foi pour le monde et peuvent aujourd'hui intercéder pour nous auprès de Dieu car on ne meurt pas en Christ. Ainsi, bien que Jésus soit l'unique médiateur dans l'ordre du salut (1 Tim 2,5), « la prière du juste a une grande efficacité » (Jacques 5,16), et celle des saints, parfaits en Dieu, s'avère encore plus puissante (la prière du Sub tuum praesidium avec la Theotokos datant de 250 ou les prières demandant l’intercession de Pierre sont antérieures à la Bible). Ce rôle spirituel s'illustre aussi à Bethléem avec Rachel (évoquée en Jérémie 31 et Matthieu 2), le Midrash Genesis Rabbah 82 dit qu'elle y est présente pour faire miséricorde et prier. En parallèle, l'importance des reliques est validée par l'Écriture, à l'image de 2 Rois 13:21 où le contact avec les ossements d'Élisée ressuscite un mort, ou du témoignage historique du martyre de Polycarpe avant l'an 200. Dieu lui-même a ordonné la création d'images sacrées : des chérubins dans le Temple (1 Rois 6,23-29) et sur l'Arche (Exode 25,18-22), demandant même à Moïse de fabriquer des statues (Exode 25:18-20) devant lesquelles Josué et les anciens se prosternaient. Les Coptes séparés après le concile de Chalcédoine (451) utilisent des icônes, tout comme il y en avait au Temple de Salomon (Flavius Josèphe).

          
          
           </p>          </div>
        )
      },
       {
        titre: "Marie, Nouvelle Ève et Mère",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   Marie est une créature que Jésus nous donne comme mère (Jean 19,26-27), choisie par Dieu pour devenir la Mère du Seigneur fait homme (Luc 1,43) depuis la Genèse 3,15. Contrairement à Zacharie, elle ne doute pas de Dieu, marquant ainsi la fin de l'Ancien Testament, et son intercession à Cana prend le contre-pied d'Achaz dans Isaïe 7. Honorée par Jésus (loi de Moïse), elle est la Nouvelle Ève et la première-née de la nouvelle création (Sainte Anne ayant eu le paradis en son sein selon Saint Jean Damascène). Sa vénération est très ancienne, comme le prouvent le Sub tuum praesidium du IIIᵉ siècle (antérieur à la Bible) et Saint Éphrem (IVᵉ siècle) qui la qualifie de « médiatrice du monde entier ». De plus, le terme kecharitoménè utilisé par l'ange dans Luc 1,28 (« toi qui as été comblée de grâce et qui le restes durablement ») consacre son Immaculée Conception (à ne pas contredire par une interprétation personnelle de la Bible, sinon Hébreux 9:27 contredirait les deux morts de Lazare). Saint Athanase d'Alexandrie la compare à l'Arche de Noé (homélie du Papyrus de Turin) car toutes deux sont couvertes par l'Esprit au dessus du péché (sous l’eau du déluge et sous l’eau du baptême, qui sauve et peut être de désir comme avec le bon larron ou de sang), une association visible en Apocalypse 11,19 où l'Esprit Saint et l'Arche apparaissent juste avant la femme d'Apocalypse 12. Ainsi, détenir cette Arche de l'Alliance qu'est Marie garantit la victoire : de même que l'Arche de Noé a vaincu le péché avec ses enfants, nous devenons les enfants de Marie au pied de la croix, en route vers le paradis.

 
 </p>  

  </div>
        )
      },
      {
        titre: "De Jérusalem à la Rome Chrétienne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Tandis qu'Isaïe prédit le transfert vers une autre nation et que Jérémie annonce le châtiment de Jérusalem (en lien avec le Christ et le figuier), Daniel prophétise la destruction de la ville par un chef (ce sera Vespasien), un événement remarqué mais mal interprété par l'historien Flavius Josèphe (suivant la prophétie de Matthieu 24). Saint Éphrem souligne le passage de Juda à Judas (comme les marchands du Temple attirés par l'argent). La « pierre » de Daniel 2:45 incarne “Pierre” (surnom donné exprès par Jésus à Simon) ou le Christ par le martyr de Pierre — associé au Psaume 2 et décrit selon Aphraate comme la vigne dont le Père est le vigneron et nous les ceps —, fondant ce royaume qui durera jusqu'à la fin (Daniel 2:44). Ce mouvement, confirmé dans Romains 9 et 10, se déploie lorsque, selon Jean 19 et Matthieu 27, Rome reconnaît la vérité là où les Juifs la rejettent, faisant de Pilate — .qui a préféré suivre la démocratie pour ses biens matériels plutôt que la vérité, alors qu'il savait Jésus innocent— le « prophète du royaume » d’après Saint Éphrem, le bourreau se transforme alors en serviteur, la lance du centurion venant desceller ce que les chérubins avaient scellé dans la Genèse. Les premiers chrétiens, par leur martyre, ont christianisé ex nihilo l'Empire romain afin d'en faire un hôpital pour les malades désireux de se faire soigner (Paul et Pierre font écho à Remus et Romulus), et non un tribunal, qui se contenterait de condamner sans rien apporter au salut (“voir chez l’autre ce qui vient de Dieu pour reconnaître ses faiblesses mais rester autoritaire pour le bien commun (un parent qui éduque son enfant)”, St Thomas), ou un foyer de contamination (“entrer dans un hôpital et transmettre une maladie mortelle en assurant qu'elle ne l'est pas, tuera quand même” ; c’est la même chose avec le péché mortel). Au fil de son histoire, l’Église accorde des tolérances face aux réalités d'un monde où certaines règles ne sont plus applicables partout, confiant aux laïcs le soin de travailler pour tendre à nouveau vers l'idéal et non de “jouer avec le jeu” en érigeant les tolérances en normes.


     </p>     </div>
        )
      },

      
    ], },


  'fondement': {
    titre: "Formation du Béarn", 
    periode: "Temps Féodaux",
    resume: "Le Béarn naît d’une autonomie ancienne, forgée entre foi et féodalité",
    introduction: "Aux origines du Béarn, une autonomie singulière…",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Les Origines Médiévales du Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   Les Vascons ont participé aux batailles de Roncevaux (778 et 824) contre les armées de Charlemagne puis de Louis le Pieux près de Pampelune et à la bataille de Taller face aux Vikings (982). Les Francs cessent d'intervenir en Béarn (chrétiens depuis le Ve siècle). Lors de la restructuration épiscopale, le titre d’évêque de Lescar remplaça celui de Beneharnum (approximativement ancien nom de Lescar) qui a donné son nom au Béarn. Vers 980, le vicomte de Béarn est très probablement assassiné près de Lescar par Loup Fort, chevalier de Serre-Castet (envoyé par le comte), qui fera ensuite pénitence. Après cet épisode, le comte Guillaume Sanche confie le titre de vicomte non pas au puissant viguier, mais au viguier du Vic-Bilh, jugé moins urbain et donc moins dangereux politiquement. En 1022, le comte Sanche Guillaume vient en Béarn, le viguier de Lescar est déplacé à Pau (probablement parce que son influence devenait trop forte) puis il meurt en 1032. C’est alors la guerre de succession : le Béarn soutient l'Armagnac, mais c’est Poitiers qui gagne. Le territoire s’étend vers le nord, laissant une autonomie au Béarn ! 
   
        </p>
          </div>
        )
      },
      {
        titre: "L'affirmation des Vicomtes",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Centulle IV récupère sans guerre la vicomté d’Oloron, dirigée conjointement avec un bâtard jusqu’à la mort de ce dernier, orientant désormais le Béarn vers les royaumes hispano-chrétiens au Sud. Centulle V, “défenseur des pauvres et propagateur de la paix”, épouse Gisèle d’Armagnac avec qui il a un fils (Gaston de Béarn) mais le pape les sépare (en pénitence Centulle donne le prieuré de Morlaàs à Cluny). Il se marie à Béatrix, comtesse de Bigorre, avec qui il a Bernard et Centulle de Bigorre, ce qui lui permet de se rapprocher du roi d’Aragon. Profitant de la disparition d’Étienne de Mauléon, Centulle s’impose en Soule (obtenant du duc Guillaume VIII les honores souletins) et accorde des franchises à Montory sur le modèle du for d’Oloron. Centulle fait battre monnaie, Oloron reçoit un viguier local et une poblacion (1080).  Centulle V entre en guerre contre le roi d’Aragon et les troupes aragonaises ravagent la région. Alphonse VI de Castille et de Gui-Geoffroi de Poitiers (Guillaume VIII d'Aquitaine) décident que Centulle doit prêter hommage au roi d’Aragon (vers 1089), tout en maintenant la suzeraineté française sur la Bigorre et Centulle obtient du duc des conduits le long des vallées des gaves.Il participe à plusieurs campagnes dont celle dans la vallée de Tena au printemps 1090. 
            </p>
          </div>
        )
      },
       {
        titre: "L'Épopée Croisée de Gaston IV",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1085, Gaston IV épouse Talèse d’Aragon, nièce du roi Sanche Ramírez, recevant probablement en dot la vicomté de Montaner. Après la fin des invasions vikings, l’Église peut se mettre en place et déjà canaliser la violence des guerriers de nature par la paix de Dieu (3 premiers jours de la semaine + jours de fête) et la trêve de Dieu (protège femmes, enfants, paysans, clercs). En 1095, le pape Urbain II lance l’appel pour la 1re croisade, les seigneurs peuvent satisfaire leur ardeur guerrière tout en apaisant les tensions internes de l’Europe. Gaston part avec son demi-frère, le comte de Bigorre, ainsi qu'avec le comte de Toulouse Raymond de Saint-Gilles, puisque Guillaume d’Aquitaine renonce à l’expédition. Pendant son absence, son épouse Talèse administre le Béarn avec un conseil de seigneurs et Pierre d’Aragon s’empare de Huesca (victoire d’Alcoraz, 1096), aidé par des contingents béarnais. À Salonique, le légat tombe de sa mule, l’expédition continue sans lui. Accueillis hostilement par les Byzantins, les croisés répondent aux Turcs qu’ils y vont pour Rome. Les musulmans sont divisés et Nicée capitule le 19 juin 1097. Ensuite à la bataille de Dorylée, l'avant-garde normande est surprise, Bohémond envoie un messager à Raymond et Gaston, qui accourent et les croisés repoussent les Seldjoukides. Puis il s’ensuit la traversée de l’Anatolie avec les croisés qui souffrent de faim et de soif, se nourrissant de plantes épineuses. Le 14 octobre 1097, l’armée se scinde. Gaston et Raymond prennent la route de l’Arménie (repos et soutien chrétien). Les croisés hors-Arménie mènent leurs propres ambitions. Le 20 octobre, ils atteignent Antioche et le siège dure huit mois, Gaston assure la garde alternée des fortifications. Gaston et Raymond recrutent des charpentiers à Saint-Siméon pour construire des machines de siège. Grâce à une trahison, Bohémond s’empare de la ville. Le 28 juin 1098, Gaston dirige les troupes de Raymond contre Kerbogha de Mossoul et remporte la victoire. Après Antioche, Gaston accompagne Baudouin de Boulogne à Édesse, tandis que Raymond et Bohémond s’affrontent pour le pouvoir. Gaston poursuit loyalement sa route vers Jérusalem et organise alors les travaux de siège. Les 14 et 15 juillet, les croisés pénètrent dans la ville, Tancrède et Gaston placent leurs bannières sur les réfugiés pour les protéger du massacre. Après la conquête, Gaston sert Godefroy de Bouillon. Le 12 août 1099, il participe à la victoire d’Ascalon, bien que la ville reste aux musulmans par désaccord interne entre Godefroy et Raymond. 
 
  </p>
          </div>
        )
      },
       {
        titre: "Gaston IV, seigneur de Saragosse",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     À son retour, Gaston IV fonde un hôpital destiné aux pauvres et aux pèlerins à Lescar (les premiers hôpitaux pour pauvres en Europe ont été fondés par l'Église et financés par des legs, des revenus de leurs terres ou la dîme, l'impôt ecclésiastique), en remerciement à Dieu qui l’a protégé. Gaston se qualifie lui-même de « pécheur Gaston, vicomte de Béarn ». Ensuite, avec Alphonse le Batailleur, Gaston participe à la Reconquista et est nommé seigneur de Saragosse, puis il reçoit Uncastillo. Gaston propose la création d’un ordre militaire inspiré des Chevaliers du Saint-Sépulcre et fonde Monreal, confiée à ces Chevaliers des Palmes. En 1122, Alphonse Ier fonde la Confrérie des Chevaliers de Belchite, bénie par Gui de Lons, évêque de Lescar. Le 6 avril 1128, Gaston avec Talèse, fonde le prieuré de Sauvelade et lui confie la gestion de l’hôpital de Mifaget, créé entre 1110 et 1114. Ayant perdu leur fils unique, Centulle, le couple rédige un acte de fondation dédié à la Sainte-Trinité, implorant la grâce d’un nouvel héritier, exaucée avec un autre Centulle. Gaston concède aussi les fors pour la ville de Morlaàs confirmé par Talèse (l’article 35 oblige le consentement individuel pour partir en guerre). En 1131, trahi, Gaston surnommé « l’émir des chrétiens », voit sa tête plantée sur une pique dans les rues de Grenade par respect. En 1134, c’est Centulle VI qui périt à Fraga, les Béarnais appelés par Alphonse étaient conduits par Gui de Lons, évêque de Lescar, avec Gassion de Soule et Oger de Miramont mais sans Centulle de Bigorre. 
       
          </p>
          </div>
        )
      },
       {
        titre: "Le Béarn sous Tutelle Aragonaise",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La région de Barcelone faisait partie du royaume des Francs mais le comte Borell appelle le roi des Francs face aux musulmans et il ne lui répond pas, c’est le début de l’autonomie catalane. En 1112, Raimond-Bérenger III épouse Douce de Provence donc une rivalité naît des 2 côtés des Pyrénées, le fils de Raymond (Raymond IV) deviendra prince d'Aragon et épousera Marie de Béarn. Les Anglais ont conquis l’Aquitaine et s'intéressent à la France (Raimond-Bérenger IV signe avec le roi d'Angleterre  en 1158 à Blaye) donc le Béarn gagne en autonomie sous tutelle de l’Aragon (serment de Canfranc 1154). En 1159, Louis VII défendra Toulouse des anglo-aragonais.  Ensuite, à la tête du Béarn, se succèdent Pierre, Guiscarde, puis Gaston V et Marie (élevés tous deux à Barcelone) sous la tutelle de l’Aragon. Raimond-Bérenger IV comte de Barcelone, prend Tortosa, Lleida et Fraga (1149). Ensuite à Tortosa des musulmans tentent de reprendre la ville mais des femmes laïques prennent les armes et contraignent les assaillants musulmans à lever le siège. Le Comte fonde l’Ordre de la Hache afin de les honorer (exemptées de certaines taxes). Puis, Marie épouse Guillaume Raymond III, fils cadet du sénéchal de Catalogne (Raymond Berenger 4), à Jaca le 30 avril 1170. Marie de Béarn, tête nue, reconnaissait tenir le Béarn du roi d’Aragon (il demande même le Gabardan et le Brulhois). Après la mort d’Alphonse VI de Castille, la nouvelle reine Urraque épouse Alphonse Ier d’Aragon mais il n’est pas reconnu roi de Castille alors qu’il le souhaite. Urraque prend la tête de ses troupes pour défendre ses cités contre l’armée de son mari, résistant notamment lors du siège d’Astorga. En parallèle, elle stoppe des nobles galiciens qui tentent de porter son fils sur le trône car il n'a aucun lien de parenté avec Alphonse. Le mariage est ensuite annulé. 
 </p>
          </div>
        )
      },
      
    ]
  },
  
  'moncade': {
    titre: "Formation du Béarn", 
    periode: "Temps Féodaux",
    resume: "Le Béarn naît d’une autonomie ancienne, forgée entre foi et féodalité",
    introduction: "Aux origines du Béarn, une autonomie singulière…",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Le Béarn face à la Croisade",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Élevée en Aragon, Pétronille de Comminges (possède Marsan et Bigorre) se marie à Gaston VI de Béarn. Après sa mort, elle se remarie plusieurs fois car elle n'est pas une guerrière et il faut un guerrier pour défendre un comté. Elle sécurise les routes pyrénéennes en cédant le Marsan à Guillaume Ier de Béarn. Elle verse des rentes aux pauvres et finit sa vie au monastère de l'Escaladieu. Gaston VI avait renoncé à Mixe et Ostabarret en échange d’Orthez face au vicomte de Dax et conclut la paix avec le vicomte de Soule. Le catharisme est un mouvement “tolérant” à caractère gnostique (le monde et le corps auraient été faits par le Malin, donc donner naissance est mal et se marier ramène au péché originel ; ses mouvements modernes sont donc anti-vie, l’infusion de l’esprit-saint prisonnier se ferait à la naissance, reniant la Vierge Marie, qui, consciente de ses épreuves, sut traverser la mangeoire, la fuite et la Passion pour devenir Reine du Ciel) qui refuse l’idée que Dieu se soit fait homme (ils ne défendent pas le péché juste ils le redéfinissent) pour la rédemption des péchés (« se sauver tout seul » comme disait Satan, l’inverse de l’Assomption de Marie, pour eux Jésus n’a pas souffert la Passion et montrait juste comment retourner au ciel) et se répand dans le Midi (très hostile à l’Église depuis des siècles, presque tous les comtes de Foix ont été excommuniés). Il n'y a pas de cathares en Béarn mais, fidèle à son suzerain, Pierre II d’Aragon (catholique aussi qui a envie de dominer toutes les Pyrénées), il se bat contre la France et l'Église (informé par la France pour des motifs politiques, et désireux d'éviter le sort d'Honorius, le pape rallie ce camp). Ils perdent à Muret en 1213 (Pierre II d’Aragon est tué au combat), le pape l’excommunie et il devra donner une partie de la ville d'Oloron à l'Église pour revenir en communion. Guillaume Raymond, frère jumeau de Gaston VI, a aussi des terres catalanes de par sa lignée Moncade mais il est responsable de l'assassinat de l'évêque de Tarragone en 1194, excommunié par l'Église, il doit faire "pénitence". Il veut maintenir l'influence de l'Aragon en Béarn. Après des tensions avec Guy de Montfort, il conclut avec Pétronille, la comtesse de Bigorre, une "ligue perpétuelle" contrôler les routes des Pyrénées et se protéger de la France et de l'Angleterre, en échange, il reçoit le Marsan. Il publie les Fors de Morlaàs (1220) et d'Ossau (1221). Le seigneur ne peut pas faire n'importe quoi, il doit respecter les coutumes locales. Il court entre Béarn et Barcelone puis meurt à Oloron en 1224. Guillaume II était plus intéressé par la politique en Catalogne et en Aragon que par le Béarn. Donc, pour avoir la paix en Béarn et pouvoir partir à la Reconquista l'esprit tranquille, il rencontre le représentant du roi d'Angleterre à Captieux (1228) pour rendre hommage (le Béarn garde ses fors). Il meurt au combat en 1229. Son tombeau porte les deux vaches, c'est la preuve la plus ancienne de ce symbole.

 
  </p>
          </div>
        )
      },
      {
        titre: "Gaston VII face à l'Angleterre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Gaston VII, qui a reçu le Marsan de sa femme Mathe de Mastas (fille de Pétronille de Comminges et de Boson de Mastas), mais pas la Bigorre (donnée à un petit-fils de Pétronille par testament), accompagne Henri III d'Angleterre en campagne en 1242 et lui rend hommage. Mais la même année il déplace le centre du pouvoir de Morlaàs à Orthez, renforce les places fortes (Sauveterre), fonde des bastides (comme Bellocq) et construit le château de Roquefort. Il crée les postes de "bailes" et de "péagers" pour collecter les taxes, instaure l'enquête inquisitoire (à l’accusé de se défendre, mais sous un arbitraire seigneurial qui devait protéger son peuple et éviter de se faire chasser, et non sous l’Inquisition, qui a été mise en place pour calmer les excès, seulement pour les chrétiens, “sa communauté”, et qui ne versait pas le sang en coexistant avec le tribunal seigneurial) . En 1245, il prend la tête d'une ligue anti-anglaise. En 1252, il lâche Henri III pour devenir le vassal d'Alphonse X de Castille. Après un traité entre Henri III et Alphonse, il se ressoumet en 1255. Puis Henri III d'Angleterre et son beau-fils meurent, il peut se rebeller contre les Anglais. Il fonde le couvent des Cordeliers à Mont-de-Marsan en 1260. En 1273, il est capturé, jugé à Sault-de-Navailles et contraint de livrer Orthez. En 1274, devant le Parlement de Paris, il insulte le roi Édouard Iᵉʳ et veut défier le roi en personne !  Il ira en prison à Winchester pendant 3 mois. C'est Constance de Marsan (veuve) qui négocie avec l'Angleterre, le Béarn rend hommage mais conserve ses fors. Gaston se révolte encore, mais en 1279, il obtient le pardon d’Édouard Iᵉʳ à des conditions avantageuses. Il donne le Béarn à Marguerite et unit Foix-Béarn (son mari étant Roger-Bernard III qui s'était proclamé « comte de Foix par la grâce de Dieu » en 1274 mais encerclé, il a renoncé). Lors de la réunion de la Cour de Béarn à Morlaàs le 11 mai 1286, Marguerite Moncade, par son père, reçoit le Béarn puis le Marsan après le décès de sa sœur Constance. Elle prête hommage au roi d'Angleterre pour ses fiefs gascons, en préservant les fors béarnais lui permettant de contrer les ambitions françaises mais ne prêtera plus jamais hommage. Elle reçoit le comté de Bigorre sous forme de don de la part de sa sœur Constance mais le Parlement de Paris l'oblige — après les protestations de l'Armagnac au nom de Mathe, sœur de Marguerite — à annuler cette donation en 1290. Elle a refusé l'arbitrage de Philippe le Bel en 1304 car il ne respectait pas le testament de son père en rappelant que les Béarnais devaient être jugés selon leurs lois et non celles des “Français” avant une intervention royale. Même quand son fils a été en âge de gouverner, elle a gardé les rênes du pouvoir et a assuré 2 régences avec l’appui des barons jusqu’à 1319 (elle a permis l'ascension de riches paysans et marchands).

   
       </p>
          </div>
        )
      },
       {
        titre: "Jeanne d'Artois et les Fors",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Jeanne d’Artois ne fut rétablie dans ses droits de curatrice, tutrice et régente par Paris qu’après la mort de Marguerite qui laisse des milliers de sous aux filles pauvres d'Orthez et Pampelune pour leur mariage. Jeanne d’Artois accueille favorablement les réclamations des bourgs (accorda au bourg d’Orthez le bénéfice du for de Morlaàs) et des vallées (reconnut aux Ossalois les droits immenses qu’ils réclamaient en vain depuis une centaine d’années, au moins sur le Pont Long), moins prises en compte sous Marguerite (représentant le respect de la multiculturalité au sein du Béarn). Après l'affaire du baron de Navailles (qui avait fait appel à la France via son fief), Jeanne conteste car Saint Sever devait être saisie avant Paris. Mais elle utilisa aussi Charles IV le Bel pour protéger le Béarn d’Édouard II d'Angleterre. En guerre avec son fils, elle est emprisonnée, puis sera libérée par Fébus. Gaston IX combat pour les rois de France, ce qui fâche les Béarnais (ses sujets continuent de financer et de servir le roi d'Angleterre) car s'opposant à l’Angleterre, il sacrifie l'économie locale (pâturages landais, port de Bayonne et revenus du Marsan). Il place Foix sous l'autorité du Sénéchal de Toulouse et non plus de Carcassonne qu'il tient du roi de France mais doit fidélité au prince de Catalogne (roi d'Aragon) pour le Donezan et Castelbon. Gaston partageait aussi l'Andorre avec l'évêque d’Urgell. Lorsque Gaston IX partit combattre en Flandres pour le roi de France, il obtient la vicomté de Lautrec et la promesse de la vicomté basque de Soule, à condition d’en expulser les Anglo-Gascons. Le pape et Philippe d'Évreux font signer à Armagnac et à lui un compromis sur la Bigorre à Tarbes en 1329 : elle reste à la France. Ensuite, Armagnac sera enfermé lors du siège de Ferrare. Il participe aussi à une croisade en Andalousie et Aliénor (qui lui a apporté les Terres-Basse Albigeoises) assure la régence. 


</p>
          </div>
        )
      },
       {
        titre: "La Régence d'Aliénor de Comminges",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Aliénor de Comminges, 8e enfant de Bernard VII de Comminges, promise à Gaston IX, 14 ans de moins qu’elle, répondit avec esprit : « Si c’est le comte de Foix, je n’hésiterais même pas à attendre qu’il naisse. » Très pieuse, Aliénor eut plusieurs enfants morts en bas âge et fonda une œuvre religieuse en leur mémoire ainsi que pour son fils survivant, Gaston. Aliénor assure la régence jusqu’aux 21 ans de Fébus. Elle rembourse la dette de Burgos, acquiert la seigneurie de Lannemezan et remet des comptes impeccables à Fébus. Avec son fils, elle parcourt le pays pour rencontrer ses sujets après 2 régences difficiles. Fébus disait vouloir servir la France comme son père mais limita son engagement à la défense de son Marsan et de son Gabardan qu’il tient de la France. Après la victoire anglaise de Calais, Philippe VI de France convoque ses vassaux à Amiens mais Fébus ne vient pas et déclare l'indépendance du Béarn le 25 septembre 1347, Fébus reste vassal du roi de France et d'Aragon pour ses autres terres.  La Navarre était devenue capétienne car le roi de France Philippe IV était marié à la reine de Navarre mais ensuite la succession française partit au mâle le plus proche, alors que la succession navarraise se transmettait par les filles (Jeanne II, mariée au Capétien et normand Philippe d'Évreux). Aliénor choisit Agnès, la princesse navarraise avec accord de la France pour son fils. Blanche de Navarre, sœur d’Agnès, se marie avec Philippe VI donc Febus est le beau-frère du Roi de Navarre et de la Reine de France. Jeanne de Navarre meurt sans payer la dot promise à sa fille. Philippe VI meurt vite, Jean II lui succède et il fait face au demande de Charles II de Navarre (frère d'Agnès) pour ses terres sur l'hexagone. La France soutenait  la famille de la Cerda face à la Castille. Jean II avait placé sa confiance en l’un de leurs descendants, Charles d’Espagne, en lui donnant le comté d’Angoulême en 1353 (celui que Charles II revendique). 
          </p>
          </div>
        )
      },
       {
        titre: "Les Campagnes Militaires de Fébus",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En 1351 Gaston, est nommé lieutenant-général par Charles II, se range à ses côtés et participe aux combats contre les Anglo-Gascons dans la région de Condom. Puis, une trêve est signée et Charles II se marie avec la fille du roi de France. En 1352, Jean II nomma Jean Ier d'Armagnac lieutenant-général en Languedoc, choix qui déplut fortement à Gaston.  À Toulouse, les capitouls (magistrats municipaux) craignaient que Lafrançaise, tombée aux mains des Anglais, ne mette la ville en danger. Ne se sentant plus protégés, ils conclurent un accord financier avec le comte de Foix (une forte compensation pour qu’il contraigne Stafford à se retirer. Il agissait comme un entrepreneur de guerre indépendant en intervenant contre paiement, sans s’engager officiellement dans un camp. Puis, avec Gui de Comminges, il reprend Lafrançaise, contraignant Stafford à se retirer. Le 19 octobre 1353, alors qu’Arnaud-Guilhem (gouverneur de Béarn en l'absence de son demi-frère Febus) déjeunait au couvent des Frères Prêcheurs, des hommes et des femmes armés attaquèrent le bâtiment ! Arnaud-Guilhem les arrête. De retour en novembre, Fébus, au lieu de les pendre — ce qui aurait été normal —, demande une amende collective et suspend les fors. Une fois celle-ci payée, le 4 avril 1354, Orthez retrouva ses privilèges. Cette décision restait fidèle à l’esprit des Fors du Béarn, qui ne prévoyaient aucune peine afflictive mais seulement des compensations financières adaptées à la gravité du dommage et à la situation sociale de la victime.
</p>
          </div>
        )
      },


        {
        titre: "Le Prince Noir débarque à Bordeaux",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Au début de 1354, un marchand de Sauveterre-de-Béarn, Pélegrin de Fosse, ayant acheté des marchandises à Bordeaux pour les vendre à Montpellier, fut arrêté par les autorités locales et se vit confisquer une somme de 300 écus destinée à son commerce sous prétexte qu'il était anglais.Febjs leur précise dans une lettre du 5 mai 1354, que les Béarnais sont sujets d’un pays souverain. Gaston X obtient la libération de Pélegrin, mais non la restitution de ses biens. Le 8 janvier 1354, Charles d’Espagne fut assassiné par des hommes du roi de Navarre. Jean le Bon, roi de France et beau-père de Charles II, réagit violemment en ordonnant à Comminges et à Armagnac d’envahir les domaines navarrais au nord des Pyrénées. Fébus refuse d'aider, ne serait-ce que Comminges et Armagnac à passer, étant ennemi de l'Armagnac qui venait de ravager ses terres à partir d’Aire-sur-l’Adour quand il combattait contre les Anglo-Gascons. Charles II se rapproche d' Édouard III d’Angleterre. Jean le Bon conclut un nouveau traité avec son gendre, lui cédant la Champagne et la Brie. En échange, Charles II restitue ses domaines normands, mais il garde la possibilité d’exercer un chantage politique en contrôlant le port stratégique de Cherbourg, désormais accessible aux Anglais. Grâce à ce port, Charles II proposa à Édouard III un partage du royaume de France. Édouard III projette un débarquement à Cherbourg (Gaston était du complot). Jean le Bon, paniqué, conclut la paix de Valognes le 10 septembre 1355, amnistiant les conjurés, parmi lesquels figurait le comte de Foix. Peu après, le prince Édouard de Woodstock (le futur Prince Noir), fils aîné d’Édouard III, débarqua à Bordeaux avec des renforts. Le Prince Noir est nommé lieutenant-général de Gascogne en 1353. Il y est chargé d’une vaste offensive en coordination avec Charles II de Navarre. Nonobstant, ce dernier s'étant réconcilié avec Jean le Bon, le prince de Galles débarque finalement à Bordeaux le 23 septembre 1355. Cette même année, il lance une grande chevauchée à travers le Languedoc, région prospère depuis le règne de Saint Louis et dévaste les campagnes. Jean Ier d’Armagnac, impuissant, s’était réfugié dans Toulouse. 
</p>
          </div>
        )
      },

        {
        titre: "L'Art de la Neutralité Payante",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En janvier 1356, Jean le Bon signe des lettres de rémission pour amnistier son fils, le roi de Navarre, ainsi que le comte de Foix. Cette clémence renforce Charles II de Navarre dans la conviction qu’il peut tout se permettre et il monte alors un nouveau complot, découvert lors d’un banquet à Rouen le 5 avril 1356. Il y est arrêté, certainement comme Fébus, son complice présumé. Le roi de France exige alors de Fébus un hommage pour le Béarn, mais celui-ci refuse, préférant préserver la souveraineté de ses terres. Alors que le Prince de Galles s’apprête à lancer une chevauchée entre Bordeaux et Calais, le roi finit par libérer Fébus pour éviter qu'il ne change de camp. Fébus ira accueillir le roi d'Aragon à Perpignan contre la Castille (hommage à Pierre IV pour ses terres de Cerdagne et de Conflent, promettant en retour une aide militaire, en échange d’une indemnité confortable pour chaque homme et chaque cheval engagé). Ensuite Pierre d'Aragon demande Fébus à l'aide pour la guerre des 2 Pierre, mais Fébus demande a être payer plus. Pierre IV finit par céder, concédant à Gaston un supplément de solde pour chaque soldat.  Fébus a l'assurance que le prince noir (Edouard de Windstock, Prince de Galles) n'allait pas attaquer le Béarn. Il se rapproche de la Castille donc il reçoit le paiement intégral des soldes promises par l'Aragon avant le début de la campagne militaire. Fébus avança lentement et arriva après la trêve. Jean le Bon est capturé à Poitiers par le prince noir. Puis Gaston décide de partir en croisade avec le seigneur pro-anglais Jean III de Grailly, captal de Buch (lui assurant aucune attaque anglaise). Le pays de Buch fut reçu par cette famille originaire de Savoie par un mariage avec des Anglais au XIIIe siècle (Pierre de Grailly épouse grâce aux Anglais une héritière bordelaise). Fébus peut donc ne pas répondre aux sollicitations du roi d’Aragon, dont la trêve avec la Castille venait d’être rompue, lui évitant ainsi d’être impliqué dans le conflit entre la Navarre et la France. Il emprunte à Bruges pour financer sa croisade et aura du mal à la rembourser. 
</p>
          </div>
        )
      },

        {
        titre: "Fébus écrase la Jacquerie Médiévale",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le dauphin Charles est régent du royaume en l'absence de son père, retenu prisonnier à Londres. Les États-Généraux de Paris, sous l’influence du prévôt des marchands Étienne Marcel, exigeaient des réformes et critiquaient sa manière de gouverner. Des bandes de mercenaires ravageaient le territoire : les Navarrais en Normandie, les Anglais dans le Berry, le Poitou et l’Auvergne. Le 25 mai 1358 éclata, dans le Beauvaisis, une violente jacquerie menée par un certain Jacques Bonhomme, qui se répandit dans le Soissonnais, le Valois et la Brie, donnant lieu à de terribles violences. Étienne Marcel, affaibli, crut pouvoir tirer parti de ce soulèvement, tandis que le Dauphin Charles, pour protéger sa famille, mit à l’abri sa femme Jeanne de Bourbon, sa sœur la duchesse d’Orléans, et leurs dames d’honneur dans la ville fortifiée de Meaux.  La bourgeoisie locale, gagnée aux idées d’Étienne Marcel, constituait encore un soutien actif à Charles II de Navarre. Selon Honoré Bouvet et Michel du Bernis, les princesses françaises pensèrent que seul Fébus pouvait les sauver et l'appelèrent de Prusse. Arrivé sur le marché de Meaux, il aurait annoncé à la Dauphine le cri de guerre « Fébus en avant ! ». Les Jacques, pris au dépourvu, furent massacrés. La Dauphine, voyant la déroute des révoltés, leur aurait adressé un dernier appel : « Fuyez, vilains Jacques, car le comte de Foix marche sur vous ! » Finalement, la ville fut sauvée, les princesses libérées, et de grandes fêtes furent organisées en l’honneur de Fébus et de ses gens, la reine elle-même participant aux réjouissances. Fébus repartit ensuite en Béarn. Selon Esquerrier, c’est à Meaux que Fébus aurait confié à la Dauphine sa célèbre devise : « Toque y si gauses ».

</p>
          </div>
        )
      },

        {
        titre: "La Grande Victoire de Launac",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le dauphin de France nomme lieutenant en Languedoc le comte de Poitiers (son frère Jean), laissant la région sous la garde de Jean Ier d’Armagnac, gouverneur et allié avec le pape. Le Languedoc occidental est favorable à Fébus mais le Languedoc oriental, aligné sur Carcassonne, lui est hostile. Au cours de l’hiver 1359-1360, Gaston profite de la rupture entre le Dauphin Charles et le roi d’Angleterre Édouard III pour rallier les bandes anglo-gasconnes et lance une vaste chevauchée militaire (Bigorre, Foix, l’Albigeois...). Jean Ier d’Armagnac, également comte de Rouergue, tenta de résister depuis Lautrec, tandis que le comte de Poitiers cherchait en vain à négocier la paix car les finances du royaume étaient épuisées, les revenus de Champagne faibles, et le prince noir, fils d’Édouard III, menaçait Reims. Fébus demandait la Bigorre, le remplacement du lieutenant général et de l'argent. Débutant une guerre d'usure avec Jean de Poitiers, qui se mariera avec une infante d'Armagnac. Au printemps de 1360, le traité de Brétigny donne Poitiers aux Anglais, la Bigorre devient anglaise comme toute l'Aquitaine, les Albret, ex-alliés des Anglais, s'allient à l'Armagnac. Fébus signe Pamiers et reçoit de l'argent du Languedoc.  Fébus, dans son autorité grandissante, va jusqu’à nommer un receveur agissant en son nom dans la sénéchaussée royale de Beaucaire, où il se comporte comme sur ses propres terres. Les routiers (mercenaire) ravagent la région du sud de la France. Jean, duc de Berry, lieutenant général en Languedoc dérange Fébus car il est le gendre d'Armagnac. Le 5 décembre 1362, les deux armées d'Armagnac et de Béarn se rencontrent près de Launac et c'est une victoire pour Fébus. 
</p>
          </div>
        )
      },

        {
        titre: "Fébus esquive le Prince Noir",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Febus reçoit de l'argent (conserve ces prisonniers jusqu'à recevoir l’intégralité des rançons, car à l’époque une partie des sommes versées disparaissait souvent entre les mains des intermédiaires) et la maison d'Armagnac renonçait à ses réclamations territoriales. À la suite de cette victoire il répudie sa femme se déliant de Charles de Navarre avec qui il avait eu des intrigues contre la France. Le 14 janvier 1364 vers neuf heures du matin, Fébus rend hommage à Edouard de Galles pour le Marsan et le Gabardan mais pas le Béarn. Ensuite après avoir retrouvé l'ancien hommage de Marguerite, Édouard lui dit de venir prêter hommage pour le Béarn. Mais Fébus prétexte alors une blessure à la jambe. Édouard renvoie un sauf-conduit et un médecin, Gaston lui assure que sa jambe guérit « grâce à Dieu » en le flattant. Le prince lui dit de venir fin septembre (fermé car les Anglo-Navarrais ont déjà perdu la bataille de Cocherel, ce qui stoppe l'ambition de Charles II). Castelbon, Albret et même Armagnac (ruiné par la rançon qu'il doit payer à Fébus, il a demandé l'aide du prince de Galles) ont prêté hommage. Fébus ne prête toujours pas hommage et parle d'un complot qui l'attend. 
</p>
          </div>
        )
      },
      
    ]
  },
  'souverain': {
   titre: "Souveraineté",
    periode: "Temps Féodaux",
    resume: "Le Béarn souverain sous Gaston Fébus",
    introduction: "Puissance, art et liberté définissent l’État fébusien...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
        {
        titre: "Le Justicier du Château de Pau",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Sous le préau de sa vigne à Moncade, près du gave au pied du château de Pau, Gaston affirme juger « le pauvre comme le riche » : n'importe qui peut lui demander justice (pas de pléthore d'intermédiaires, laissant les dirigeants agir à leur guise comme aujourd'hui). Il annula la nomination d'un tailleur au poste de jurat car l'élection s'était faite contre sa volonté, il réprime sévèrement le bailli d'Oloron qui tentait d'interdire aux habitants l'usage de leurs propres fours, face à une mère de famille chargée de six enfants dont les biens étaient hypothéqués (mort de son mari), il ordonna la suspension immédiate de la vente pour éviter la ruine de la famille. Lorsqu'un marchand d'Orthez fut dépouillé de sa cargaison par des commerçants du Languedoc, Fébus appliqua la loi du talion économique : il fait saisir des marchandises provenant du Languedoc pour compenser la perte de son sujet. L'un de ses jugements les plus célèbres concerne une femme « chef de maison » (épouse d'un cadet ayant pris le nom de sa femme) coupable d'adultère avec le baron d'Arros. Alors que ce crime était passible de mort dans une grande partie de l'Europe, Fébus préféra une solution pragmatique : Gaston demande au mari de reprendre son épouse et celui-ci accepte. Le baron d'Arros est donc condamné à une lourde amende et la femme, quant à elle, dut verser le double de sa dot à son mari à titre de réparation. 

 </p>
          </div>
        )
      },
      {
        titre: "AYolande de Bar, reine-lieutenante",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Yolande de Bar, mariée à 15 ans avec Jean Ier d'Aragon alors âgé de 30 ans, cherche un rôle politique à la cour mais la reine Sibylle de Fortià s'y opposait. Jean délègue souvent à sa femme l'autorité royale et parvient à éviter une crise. Devenue reine-lieutenante, elle transforme sa cour en un centre de culture française. Elle échangeait avec Gaston Febus. Éjectée du pouvoir à la mort de Jean avec la maison d'Armagnac, elle tente d'envahir la Catalogne mais elle termine enfermée au château Moncade près de Barcelone. En 1417, devant le Parlement de Paris, elle récupère le Bar pour son petit-fils, le bon roi René, fils de Yolande d'Aragon (qui a protégé le futur Charles VII).
 </p>
          </div>
        )
      },
      {
        titre: "Fébus entre France et Angleterre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    La guerre civile castillane entre Henri de Trastamare et Pierre le Cruel mobilisa les ressources anglaises amenant la taxe du foyer et provoqua un soulèvement des barons gascons. Grâce à la France, Henri monte sur le trône, Pierre va en 1366 se réfugier chez le Prince Noir et Charles de Navarre pour repartir avec les Albret-Armagnac. Ses vassaux du Marsan et de Gabardan furent intégrés à l’arrière-garde anglaise, sous les ordres de Jean III de Grailly. Henri est vaincu, il franchit le Somport et est accueilli au château Moncade par Fébus, qui l'envoie ensuite en pays de Foix d'où il reprend la lutte en harcelant les garnisons anglo-gasconnes de Bigorre. Fébus plaça la région béarnaise en état d’alerte (8 mai 1367). Pierre le Cruel se met à tuer les prisonniers, le prince noir veut pas car ils représentent un butin, Albret n’est pas content puis le prince noir tombe malade comme son armée. Le Prince Noir va donc emprunter sans guerre la route de Sauveterre-de-Béarn à Orthez en promettant de payer son ravitaillement « jusqu'à la moindre poule ». Le clan Armagnac-Albret, cherchant un nouveau mécène (anglais ruiné), se tourna vers Charles V. Arnaud-Amanieu d'Albret épouse Marguerite de Bourbon (belle-sœur de Charles V), recevant une pension de 60 000 francs et 42 000 francs d'arriérés dus par Édouard III. Jean Ier d'Armagnac signe une alliance le 30 juin 1368. À son avènement, le roi Charles V nomme Louis d’Anjou lieutenant-général en Languedoc pour chasser les Anglo-Gascons du Midi avec l'appui d'Armagnac. Cependant, Louis constate la faiblesse et le manque de popularité d'Armagnac devant Gaston Fébus qui, tout en jurant fidélité à la France, intimide Armagnac. En parallèle, le Captal de Buch pille la région pour l'Angleterre mais épargne le territoire de Fébus, un chef puissant et riche dont la solde attire les mercenaires. Pour riposter, Louis d’Anjou attaque les places fortes de Buch et reprend notamment Tuzaguet à son capitaine, Bascot de Mauléon, lequel finira par se mettre directement au service de Fébus. Le siège de Lourdes est difficile et se conclut par un accord le 5 juillet : les Compagnons peuvent rester, mais placent le château sous l'autorité du roi de France. Anjou doit se retirer car le duc de Lancastre (Jean de Gand) débarque à Calais. Gaston Fébus se rapproche de Jean de Lancastre, qui prétend au trône de Castille, et met le château de Lourdes sous son autorité. Forcé de réagir, Charles V s'allie à Henri de Trastamare (le rival de Lancastre) et rappelle Anjou. Ce dernier détache Roger-Bernard de Castelbon de l'orbite de Foix. Fébus obtient l'évacuation de la garnison anglo-gasconne du château de Mauléon et installe, en septembre 1375, ses propres troupes pour protéger les Souletins contre 4 000 francs. Fébus instrumentalise les routiers pour déstabiliser les seigneuries voisines et les pousser à solliciter son aide (en avance sur le modernisme), étendant ainsi indirectement son autorité tout en fortifiant Pau. C’est en cette même année qu’est signé le Tribut des Trois Vaches, qui est aujourd’hui le plus ancien traité de paix d’Europe toujours en vigueur (la Junte de Roncal entre le Barétous et Roncal).

           
             </p>
          </div>
        )
      },
        {
        titre: "La guerre pour le Comminges",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     La mort de Pierre-Raymond II de Comminges, le 15 octobre 1375, pose un problème de succession. En 1339, après la mort d'un garçon en bas âge, le comté aurait pu revenir à la sœur aînée, Cécile, mais Pierre-Raymond n'en sort vainqueur qu'avec l'aide de son beau-père, Gui de Comminges (le « redoutable roi de l'Albigeois »), et du roi de France Philippe VI. Pour éviter que le Comminges ne tombe aux mains des Anglais, ces derniers en font un fief masculin, ce qui constitue une justification post hoc (sophisme de la rationalisation). En 1375, on se retrouve face au même problème, d'autant plus que l'héritière est mince. Fébus réclame cette couronne par l'intermédiaire de sa défunte mère, qui souhaitait être inhumée à Notre-Dame de Salanques, qu'elle a fondée. Il rencontre Jeanne de Muret sur un pont. Armagnac prévoit de marier son fils à l'héritière. La guerre se prépare et Fébus fait revenir son fils naturel, Bernard, comte de Medinaceli. Le 6 janvier 1375, à Orthez, plusieurs seigneurs commingeois, contre de fortes sommes d'argent, promettent de le servir « contre tous à l'exception de leur seigneur naturel le comte de Comminges ». Cependant, si ce dernier « meurt sans enfant mâle, ils mettront tout leur pouvoir » au service du comte de Foix. Après l'échec de son entrevue avec Jeanne de Comminges, Gaston X attaque dès le mois de juillet. Il laisse en couverture le captal de Buch à Cazères-sur-l'Adour, mais Jean II d'Armagnac s'en empare. Fébus les emmure ! Ils se rendent, mais avec l'appui du roi, la coalition Armagnac-Albret-Comminges est sûre de l'emporter tôt ou tard. Gaston juge donc préférable de mettre fin à la guerre. Jeanne de Comminges, inquiète pour l’avenir de sa fille Marguerite, envisage de la marier au roi de Navarre. Pour empêcher cette alliance, Jean d’Armagnac impose, le 18 juin 1378, le mariage de Marguerite avec son propre fils, Jean III. Ils acceptent alors de reprendre les négociations avec le Béarn, sous la médiation du duc d’Anjou. L'héritier béarnais, le jeune prince Gaston, est uni à Béatrix d’Armagnac ; Fébus renonce au Comminges mais reçoit maintes terres, et des dizaines de seigneurs du Comminges deviennent ses vassaux directs (du vivant de Fébus). L’emprise sur Lannemezan, Tournay et Mauvezin isole la puissante famille de La Barthe, jusque-là pilier de la domination armagnacaise, et prive Jean d’Armagnac de son contrôle traditionnel sur presque tout le haut cours du fleuve, à l’exception du secteur de Miramont. Désormais, il devient possible de chevaucher d’un seul trait depuis le château de Mazères jusqu’à celui de Mauvezin en restant constamment sur des terres tenues par le Béarn ou sur des fiefs nouvellement vassalisés. 
     
           
           
              </p>
          </div>
        )
      },
      {
        titre: "La Mort du Jeune Gaston",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         
Les sujets béarnais sont fiers du luxe de leur seigneur (les États donneront plus tard 2 000 écus à Jean d'Albret) et donnent de la nourriture au vicomte en guise d'impôt. Guiraud Lacroze (le maître de cuisine de Fébus) n'hésite pas à réprimander ceux qui fournissent de la volaille de mauvaise qualité. Fébus soupe en général à minuit. Odon de Mendousse est l'évêque de Lescar et le précepteur du jeune Gaston. En mars 1378, cet évêque reçut officiellement 400 florins de la part de Charles II de Navarre pour des « services » rendus. Les espions de Fébus notèrent les allées et venues de messagers ainsi que l'implication d'Yvain (le bâtard) à Pampelune. Charles II de Navarre jalousait le succès et le train de vie supérieur de Fébus. Charles II privilégie les solutions expéditives : en 1378, un chambellan du roi de France est accusé d'avoir tenté d'empoisonner ce dernier avec une drogue fournie par le réseau navarrais. Le jeune Gaston, âgé de 15 ou 16 ans, rend visite à sa mère Agnès à Pampelune. Là, son oncle, le roi Charles II de Navarre, lui aurait remis une « petite bourse » contenant de la poudre. Le complot est découvert à Orthez. Soit Fébus rend visite à son fils en prison et le tue accidentellement, soit ce dernier est exécuté après un procès (la seule peine de mort prononcée sous le règne de Fébus !). Roger-Bernard de Castelbon, mari de Géraude de Sault de Navailles (la future régente), a un intérêt direct dans cette mort, car le testament de 1371 le désigne comme successeur ; Fébus l'emprisonne donc et ne le libère que contre 36 000 florins. L'évêque de Lescar et le seigneur d'Andoins se réfugient à Pampelune le 16 août 1380. 

   </p>
          </div>
        )
      },
        {
        titre: "La Foi Profonde de Fébus",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Gaston Fébus quitte Orthez pour s’isoler à Pau, où il écrit son Livre des oraisons. Pour Fébus, tous les péchés peuvent être pardonnés sauf la méconnaissance de Dieu, qu’il considère comme la folie suprême menant à la damnation automatique. Il affirme n’y être « jamais tombé », même s’il avoue avoir été mordu par la morsure enragée de tous les autres maux. Dans la 12ᵉ oraison, il décrit la lutte incessante contre le diable, qui tend ses pièges dans chaque aspect de la vie. Fébus compare cette lutte à la chasse, qu’il juge vertueuse car elle éloigne l’oisiveté (« source de tous les péchés »). Le droit de chasse appartenait à tout homme jusqu'au règne d'Henri Ier de Béarn. Fébus conclut que santé, beauté et richesse s’évanouissent comme un songe. Malgré son désespoir, Fébus affirme sa foi orthodoxe en un Dieu unique et trinitaire : « Gloire au Père, au Fils et au Saint-Esprit ». Il invoque la Vierge Marie, les saints et les anges, notamment saint Michel, afin qu’ils intercèdent en sa faveur et l’aident à mourir d’une mort digne de louange. Fébus, en « indigne serviteur », implore la miséricorde divine et demande que toutes les générations prient pour son pardon, suppliant Dieu de le défendre contre le diable afin de ne jamais tomber dans le seul péché qu’il juge véritablement impardonnable. Fébus préfère s’adresser directement à Dieu, à la Vierge et aux saints. Il inclut le clergé dans ses prières, mais pour s’en plaindre. Il demande à Dieu d’apaiser sa vengeance contre les ecclésiastiques, dont certains ont un comportement public indigne ; Gaston utilise d'ailleurs des taxes pour le masquer (l'archevêque qui mariera plus tard Catherine de Bourbon n'avait par exemple jamais célébré de messe...). Il doute même de l’efficacité des sacrements, observant qu’après avoir partagé l’hostie avec un ennemi, leurs serments sont aussitôt violés. Malgré ce mépris, Fébus continue à nommer des prêtres selon ses propres intérêts, parfois choisis pour leur « pieuse ignorance ». 
          </p>
          </div>
        )
      },




      {
        titre: "La Lutte pour le Languedoc",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      Après la mort de Charles V en septembre 1380, son fils Charles VI, âgé de douze ans, devient roi. Le 19 novembre 1380, le Conseil royal nomme le duc de Berry lieutenant général en Languedoc, une décision impopulaire qui ravive les protestations (notamment à Poitiers). Le 17 décembre 1380, les consuls d’Albi demandent à Toulouse de reconnaître Fébus comme régent légitime. Cela pousse les États de Languedoc à débattre de la question entre 1380 et 1381, et ils demandent au roi l'exclusion de Berry.  Fébus proteste auprès du roi, accusant Berry de soutenir l’Armagnac, et réunit en avril 1381 les États à Mazères pour contester ses décisions. En juillet 1381, les négociations de Pamiers aboutissent à un compromis : Fébus abandonne ses prétentions sur la lieutenance du Languedoc contre 65 000 francs et une pension annuelle de 40 000 francs, à condition de rester neutre. Entre le 20 et le 21 juillet, les hommes de Fébus affrontent ces bandes près de Rabastens et Couffouleux, confirmant la fausse paix de Pamiers et la persistance de la rivalité entre Berry et le comte de Foix pour la domination du Midi. Le dimanche de la Madeleine, ses troupes surprennent et mettent en déroute les compagnons du duc de Berry devant les murs de Rabastens. Fébus fait alors exposer les bannières capturées à Mazères. Politiquement, le Languedoc est alors en révolte contre le duc de Berry ; ce dernier se voit donc obligé de déléguer ses pouvoirs à Fébus. Le 28 décembre, un accord est signé à Capestang : Fébus obtient une compensation financière, la reconnaissance de ses droits sur les terres de Bigorre et la liberté d'attaquer ses propres ennemis (Albret-Armagnac) sans intervention du duc. En échange, il abandonne les communautés languedociennes qu’il laisse à Berry. Par la suite, entre 1381 et 1382, les troupes de Fébus lancent des raids pour démontrer que les seigneurs actuels sont incapables de protéger leurs sujets. Désespérés, certains nobles et villages préfèrent alors se placer sous la protection du « seul homme capable de le faire » : Gaston Fébus. Constance de Rabastens connaît des extases mystiques et dresse un portrait héroïque de Gaston Fébus, par opposition à celui du comte d’Armagnac, figure du traître absolu. L’une de ses images, « la vache sera à l’ombre de la fleur », symbolise l’union imminente entre le Béarn et la France (Fébus et Charles VI, ou plus tard Henri II de Béarn qui devient Henri IV). 

         
           </p>
          </div>
        )
      }
       
    ]
  },
  'republique': {
     titre: "L'Affirmation Béarnaise",
    periode: "Temps Féodaux",
    resume: "Les États devant la France",
    introduction: "Les États affirment définitivement leur indépendance...",
    image: "/images/histoire/antiquite.jpg",
    sections: [


       {
        titre: "Le massacre des Béarnais à Aljubarrota",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Jean Ier de Castille, allié de Fébus, revendique le trône, tandis que les Portugais soutiennent Jean d’Aviz. Malgré ses liens avec la Castille, Fébus refuse d'intervenir, car il sait que le duc de Lancastre (Anglais) soutient le camp portugais. Pourtant, de nombreux chevaliers béarnais décident de partir au combat. Fébus les avertit solennellement qu'ils ne reviendront pas et, le 14 août 1385, à Aljubarrota, 300 Béarnais sont massacrés. Accablé, Fébus s'enferme pendant trois jours avant de confier à son frère, Arnaud-Guilhem de Morlanne : « Jamais le pays de Béarn n’a perdu autant d’hommes en un jour, alors que je les avais prévenus ». Le conflit se déplace ensuite vers la Galice, que le duc de Lancastre convoite désormais. Pour contrer les Anglais, Charles VI envoie une armée commandée par le duc de Bourbon. Fébus indique que la Soule est sous sa protection, interdisant tout pillage sur ses terres. De plus, il désigne à Bourbon le site de Brassempouy, où s'est retranché Perrot le Béarnais, un routier pro-anglais et ennemi personnel du comte. Le duc rase le château. Ensuite, au retour de l'expédition, Fébus suggère au duc de laisser ses troupes se « défouler » sur les terres de l’évêque de Lectoure, situées dans le comté d’Armagnac. 
           </p>
          </div>
        )
      },
      {
        titre: "L'ingéniosité Financière de Fébus",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    En 1385, Gaston Fébus fait recenser les foyers du Béarn et impose une taxe de deux francs par an et par feu (12 500 feux sont alors répertoriés). Pour garantir le paiement, il s’appuie une solidarité villageoise : les plus riches doivent compenser les défaillances des plus pauvres afin que le village atteigne toujours son quota (fonctionnement habituel sous la Monarchie Française, mais ici sans aristocratie). Fébus refuse d'instaurer la gabelle, car elle ruinerait l'économie vitale des salines de Salies. À la place, il multiplie les sources de revenus intelligentes. Il met en place la taxe de transit (des péages sont installés, notamment sur le pont d’Orthez), l'impôt sur la croissance (en prélevant 4 % sur l'accroissement de fortune des bourgeois, estimant que leur enrichissement découle directement de sa politique de stabilité), l'usure institutionnalisée (bravant l'interdiction chrétienne, il autorise et pratique l'usure avec des taux montant jusqu'à 43 %, ce qui lui permet de saisir les biens des nobles incapables de rembourser leurs dettes) ou encore le rachat des corvées (les sujets peuvent payer une taxe pour être exemptés de travaux publics). Ce trésor de guerre lui permet d'acheter la loyauté de seigneurs alliés. Pour gouverner, il promeut des hommes issus de la bourgeoisie comme Bernard de Luntz, ou récompense des serviteurs comme Pierre de Latapie en lui offrant des terres, l'élevant ainsi au rang de noble. À Navarrenx, les jurats en retard d'impôts vont d'eux-mêmes se constituer prisonniers à Orthez. Enfin, pour être le seul maître à bord, Fébus paralyse les assemblées d’États. S'il maintient la Cour Major et les communautés locales, il réduit leur rôle à une simple fonction consultative (il respecte les fors).

         </p>
          </div>
        )
      },
      {
        titre: "Les Pillages organisés en Languedoc",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
           En 1388, Charles VI décide de s’émanciper de la tutelle de ses oncles (Berry et Bourgogne). Il s'entoure des Marmousets (favorables à la restauration de l’autorité royale et à la paix avec l’Angleterre) et veut mettre fin aux abus d’Anjou et de Berry en Languedoc. Le maréchal Louis de Sancerre vient voir Fébus à Orthez pour négocier le mariage de Berry avec Jeanne de Boulogne (élevée au château de Moncade), mais surtout pour sonder les intentions du comte de Foix. Fébus reste neutre par rapport au pape ; il reçoit d'ailleurs à Noël 1388 des évêques d’Avignon et de Rome (Rome pour ses terres aquitaines pro-anglaises et Avignon pour celles comme Foix), mais il prête de l’argent au profit du pape d'Avignon. Cependant, il exerce lui-même le droit de régale sur les bénéfices ecclésiastiques (une vision proche de celle de John Wyclif). De plus, Fébus recrute des marginaux (ses propres hommes, des vassaux de Lanta...) et de petits nobles ruinés comme Jacques de Naiz ou Pierre de Chaudière, qui pillent le Languedoc. Ces agissements s'apparentent à ceux des routiers vers Tarbes, poussant Michel de Serres, sénéchal de Bigorre, à songer à solliciter l'aide de Fébus. Sancerre lui demande d'arrêter. À ce moment, Fébus retient le fils de L'Isle-Jourdain (allié de l'Armagnac) en gage d’un prêt pour Mondonville, tandis que Jean III d’Armagnac a capturé des proches de Gaston, comme son conseiller Bernard de Duras. En 1389, le duc de Lancastre orchestre un accord entre Fébus et Jean III d'Armagnac. Fébus doit libérer le fils du comte de L’Isle-Jourdain (mais comme ce dernier meurt, L’Isle-Jourdain doit payer Fébus) et restitue les terres de Mondonville et de Gensac. De son côté, Jean libère Duras sans exiger de rançon et renonce à ses prétentions sur les Terres-Basses d’Albigeois. 
           </p>
          </div>
        )
      },
       {
        titre: "Une Alliance Lucrative pour Fébus",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
          Héritière du Comminges par sa mère, Jeanne de Boulogne est sous la tutelle de Fébus (car sa mère trouvait son mari trop mou). Le comte souhaite initialement une alliance avec l'Angleterre, mais la paix étant signée avec la France, il décide de choisir le duc de Berry pour époux (qui n'est plus lieutenant en Languedoc et est ainsi éloigné des Armagnac) en échange d'une somme colossale. Lors du mariage, Charles VI est sauvé du Bal des ardents par sa nouvelle tante, Jeanne, qui étouffe avec ses vêtements les flammes (des déguisements enflammés accidentellement par Louis d'Orléans) ; le roi plonge alors encore plus profondément dans la folie. Froissart rapporte que cette union (malgré quarante ans d'écart) est un mariage heureux. 

 </p>
          </div>
        )
      },
       {
        titre: "Mariette, Patronne de la Maison",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      Dans les campagnes béarnaises, l'ordre social repose sur le premier-né (garçon ou fille), qui hérite de l'intégralité du patrimoine afin de préserver l'unité de la maison et d'éviter le morcellement des terres. Mariette de Suberbielle, en tant que premier enfant, devient la Daune (la patronne) de la maison Suberbielle. Ainsi, lorsqu'elle épouse Arnautuc, un cadet de la ferme Cami qui ne possède rien, ce dernier perd son nom d'origine pour adopter celui de la maison de sa femme et devient « Arnaud aperat de Soberbiele » (Arnaud dit de Suberbielle). C’est Mariette qui gère la propriété en son nom et prend les décisions financières (très certainement en accord avec son mari). Les nobles et les bourgeois doivent respecter cette hiérarchie, qui repose sur une égalité de principe dans les règles et sur des statuts distincts (sans aucun impérialisme, même entre plaines et vallées), assurant ainsi la vie en société. Froissart affirme d'ailleurs que sous la protection de Fébus (très sévère avec les élites béarnaises), le peuple vit dans une telle liberté et une telle harmonie que le Béarn ressemble à un véritable « paradis sur terre » alors que toute l’Europe est ravagée par la guerre de Cent Ans. 

          </p>
          </div>
        )
      },
       {
        titre: "Les Castelbon et la Couronne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       En janvier 1390, Fébus va voir le roi de France à Toulouse, puis l’invite à Mazères. En le flattant, il signe un accord pour léguer le Béarn au roi de France à sa mort (« je suis français dedans comme dehors ») et s'engage en outre à ne plus attaquer l'Armagnac en échange de la Bigorre et d’une compensation financière. Ensuite, en avril, Fébus se rend à Bayonne pour rejoindre le duc de Lancastre. Il lui prête allégeance, affirmant qu'il se sent fondamentalement anglais, et reçoit de l’argent. En mai, il négocie avec l'Aragon contre l’Armagnac (avec qui les relations sont mauvaises depuis la prise de pouvoir de Jean) afin de pouvoir faire face au roi de France. Le 1er août 1391, à l’Hôpital d’Orion près d’Orthez, après une journée de chasse dans les bois de Sauveterre, le destin du comte bascule. Gaston Fébus, qui possède plus de 1 600 chiens, demande de l’eau pour se laver les mains. Au contact de l’eau froide, son visage pâlit, son cœur tressaille et il s’effondre en murmurant : « Je suis mort, sire Dieu, pardon ». Après la mort de Fébus, les États désignent Mathieu de Castelbon (âgé de 14 ans et gendre du roi d'Aragon). Pour y parvenir, ils font annuler le traité de Toulouse en échange de milliers de francs. Mathieu laisse le pouvoir aux États et part combattre aux côtés du duc de Berry pour le trône d’Aragon, avant de mourir sans héritier après avoir perdu ses terres catalanes dans cette bataille. La succession revient alors à sa sœur, Isabelle de Castelbon, et à son époux, Archambaud de Grailly. Ce dernier, bien qu'allié des Anglais, renonce à cette alliance en envoyant son fils Jean en otage à la cour de France, ce qui leur permet de récupérer Castelbon. À la mort d’Archambaud, Isabelle gouverne avec son fils Jean Iᵉʳ jusqu’en 1428.
          </p>
          </div>
        )
      },
      {
        titre: "Les Foix Maîtres du Midi",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        La reine Isabeau de Bavière se rapproche de l'Angleterre (son mari, Charles VI, étant fou). Les Bourguignons, également alliés aux Anglais par mariage, font face aux Armagnacs (les ennemis du Béarn), eux-mêmes alliés par mariage au dauphin, le futur Charles VII. Jean Iᵉʳ est lieutenant général en Languedoc à la fois pour les Anglais et pour le dauphin (Isabelle est pro-anglaise, mais lui est pro-français de facto). Les officiers du roi en Languedoc doivent même passer par lui pour valider les ordres du souverain. Jean est en bons termes avec la Navarre (son premier mariage se fait avec Jeanne de Navarre) et aide l'Aragon. Il obtient ainsi des domaines vers la Catalogne et reçoit la Bigorre du roi de France en 1425. Son frère Mathieu obtient le Comminges par mariage. Son autre frère, Gaston de Buch, sert d'intermédiaire en tant que seigneur anglais, tandis que le cardinal de Foix, son troisième frère (qui fait construire une chapelle à Avignon ornée d'une fresque le représentant avec ses quatre frères), est légat du pape dans le Midi. Ils tiennent ainsi tout le Midi de la France et s'entraident constamment. À la mort de Jean Iᵉʳ en 1436, Gaston XI, fils de Jeanne d'Albret, est placé sous la tutelle de Mathieu de Comminges. Les États font du Béarn une petite république d’États, où le prince doit gouverner sous la surveillance d’institutions représentatives. Devenu majeur, il se distingue dès 1441–1442 dans les campagnes contre les Anglais autour de Saint-Sever et de Dax, au service de Charles VII, alors que Bayonne est encore anglaise. En 1443, Charles VII lui demande d’abandonner dans ses actes la formule souveraine « par la grâce de Dieu ». En échange du titre de lieutenant général du roi en Guyenne et en Gascogne, le vicomte accepte, ce qui alarme les États de Béarn. Les Gramont (partisans de la France) et les Beaumont (anglo-navarrais) agitent la Soule et la Navarre. En juillet 1449, Gaston XI met le siège devant Mauléon, place tenue par Louis de Beaumont, connétable de Navarre (le roi de Navarre étant son gendre). Le château est pris au nom du roi de France, et Gaston XI est fait chevalier et confirmé lieutenant général de Gascogne et de Guyenne. Louis XI, le nouveau roi, se méfie de Gaston au début, mais il marie ensuite sa sœur, Madeleine de France, au fils de ce dernier. En 1465, Gaston XI récupère Mauléon (une promesse faite à Gaston IX) et assiste aux États généraux de 1468 à la droite du souverain. Gaston, marié à l’infante Éléonore de Navarre, participe à la guerre de succession navarraise, et Éléonore devient reine de Navarre. Gaston fait aussi de Pau la capitale du Béarn (1464), renforce ses possessions, rachète Lautrec et devient vicomte de Narbonne. À la mort de son fils aîné Gaston en 1470, puis à la sienne en 1472, le Béarn passe à son petit-fils, François Fébus. 
           </p>
          </div>
        )
      },
       {
        titre: "La succession de François Fébus",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Madeleine de France, mère du jeune François Fébus, assure la régence. La France riposte économiquement face à ce Béarn que Louis XI qualifie de « point de mon royaume » (ne faisant pas partie de son royaume). Pour apaiser les tensions, Madeleine laisse la Soule — alors en proie à la guerre entre les factions Beaumont et Luxe — à la France. Éléonore, reine de Navarre, meurt en conseillant à son successeur François Fébus (couronné à Pampelune le 9 décembre 1481) de s’allier à la France. Cependant, ce dernier meurt à l’âge de 16 ans, probablement empoisonné en jouant de la flûte. Sa sœur Catherine, âgée de seulement 13 ans, est alors désignée héritière. L’Espagne d'Isabelle de Castille veut la marier au fils du prince des Asturies afin de récupérer la Navarre, mais Anne de Beaujeu, régente de France, intervient pour contrer cette ambition. Les États de Béarn refusent le projet espagnol et concluent, le 14 juin 1484, le mariage de Catherine avec Jean d’Albret, fils aîné d’Alain, sire d'Albret. Jean de Foix tente alors une insurrection pour faire valoir ses droits à la succession de François Fébus. En réponse, Anne de Beaujeu réunit un conseil royal à Montargis le 2 octobre, qui distingue nettement le Béarn et la Navarre du royaume de France : seuls les Cortès en Navarre et les États en Béarn peuvent désigner le successeur de François Fébus. 
         </p>
          </div>
        )
      },
  {
        titre: "La Pression des Rois Catholiques",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     En 1486-1487, Ferdinand le Catholique organise l’encerclement militaire de la Navarre et supprime les sauf-conduits des marchands navarrais, tandis que la famille Beaumont s’allie au comte de Lérin. En 1488, le traité de Valence place la Navarre sous tutelle espagnole pour apaiser les représailles et rouvrir le commerce, mais les troupes castillanes restent sur place. En 1491, il est formellement interdit aux rois de Navarre de marier leurs enfants sans l’accord préalable d’Isabelle et de Ferdinand. En 1495, un accord est signé à Burgos entre les rois de Navarre et ceux de Castille : le comte de Lérin se rend, remet ses biens et passe en Castille, tandis que la Navarre reste sous occupation militaire castillane jusqu’en 1500. En 1498, sous la pression des Rois Catholiques, la Navarre expulse les Juifs qui refusent de se convertir. En 1500, le traité de Séville prévoit la libération du royaume de l’influence castillane, mais Ferdinand retient à sa cour Madeleine, fille des rois de Navarre, dans le but de la marier à l’un de ses descendants. En 1506, Jean et Catherine signent le pacte de Tudela avec Philippe le Beau (roi de Castille), mais ce dernier meurt un mois plus tard et Ferdinand reprend le pouvoir. Enfin, en 1507, le comte de Lérin, trahi par des partisans beaumontais, est expulsé de Navarre avec les troupes castillanes. 
  </p>
          </div>
        )
      }
      

    ]
  },
   'navarre': {
    titre: "Union avec la Navarre", 
    periode: "Renaissance",
     resume: "Union, perte de territoire mais affermissement de leur pouvoir",
    introduction: "Entre héritage et rapprochement avec Paris......",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      
        {
        titre: "La Souveraineté reconnue à Blois",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Le 6 mars 1509, Jean et Catherine déclarent par un mémoire que le Béarn n’est pas une seigneurie soumise au duc d’Aquitaine. Soutenu par Louis XII alors en Italie, le Parlement de Toulouse prononce la confiscation du Béarn le 7 janvier 1510. Face à cette décision, les États se réunissent avec Jean et Catherine le 26 février 1510 pour fortifier le pays. Une ambassade est envoyée à Louis XII, qui envisage un partage : la Navarre à la Castille et le Foix-Béarn à la France. Mais pendant ce temps, l’archevêque de Saragosse, fils de Ferdinand, affirme que la Navarre revient à son père et, en 1511, il signe à Venise avec le pape pour intégrer la « Sainte Ligue » contre la France. Les Béarnais proposent alors à Louis XII une alliance contre la Castille en échange de la reconnaissance de leur souveraineté. Louis XII accepte d’ouvrir des négociations. Le 2 mai 1512, une ambassade béarnaise arrive à Montrichard, près de Blois. Le 12 juillet, Jean et Catherine confient leur défense à Pierre de Fundères, procureur général de la vicomté, tandis que Jean de Nogerolles représente le Parlement de Toulouse. Pierre énumère les prérogatives du souverain béarnais : battre monnaie, faire grâce, lever des impôts, légiférer, rendre justice sans appel et déclarer la guerre. De plus, les Béarnais établis en France doivent obtenir des lettres de naturalité. Le 15 juillet 1512, les arbitres réunis à Blois cassent les arrêts du Parlement de Toulouse pour incompétence. Pierre de Biaix, arbitre, déclare que « le pays de Béarn est pays de par soi, tenu par ses seigneurs sans reconnaître de supérieur ». Pourtant, les souverains du Béarn ne nomment jamais d’ambassadeurs auprès des cours étrangères. Le 21 juillet, Ferdinand profite du contexte et de l’accord qu'il signe le 9 février 1512 à Londres avec Henri VIII d’Angleterre, hostile à la France (ce dernier se proclamera plus tard chef de l'Église d'Angleterre pour confisquer les richesses catholiques à la suite du refus de son divorce par le pape, et se mariera six fois). Les troupes castillanes envahissent la Navarre, sous prétexte que Jean d’Albret refuse de leur laisser le passage vers la France, alors en guerre pour l’Italie. Ferdinand a en réalité falsifié le traité de Blois pour le transformer en traité offensif. Jean et Catherine doivent se réfugier à Mauléon. En octobre, Jean d’Albret publie un manifeste contre Ferdinand, proclamant qu’il n’a aucun droit sur la Navarre, puis lance une contre-offensive avec Pierre de Navarre et Roger de Gramont. Celle-ci échoue. Les seigneurs de Luxe et de Gramont refusent de prêter serment à Ferdinand et voient leurs biens confisqués ; la Basse-Navarre reste profondément hostile à la domination espagnole. Les Cortès ne parviennent pas à lever les impôts dans les vallées de Mixe, d'Ostabarès, d'Iholdy-Armendaritz et d'Arbéroue, mais les institutions locales survivent : les juntes de Garris et d’Amendeuix rassemblent, en mars 1514, plus de 600 notables sous l’autorité du bayle Jaime de Zhala. La même année, les États de Basse-Navarre réunis à Uhart-Cize prêtent serment de fidélité au roi d’Aragon et doivent lui envoyer des otages. Le poète Bernard d'Echepare (auteur du premier livre imprimé en langue basque) est quant à lui emprisonné pour trahison. 
          </p>
          </div>
        )
      },

       {
        titre: "La guerre pour la Navarre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
      À la mort de Catherine de Navarre en 1517, Jean d’Albret ne conserve plus que la Basse-Navarre. L’héritier, Henri II d’Albret, est encore jeune et vit depuis 1515 à la cour de François Ier. Louise de Savoie et François veulent exercer sa tutelle, mais les États de Béarn la rejettent fermement et confient la régence à son grand-père, Alain d’Albret. Des troupes françaises, convaincues de trouver des alliés en Béarn, envahissent la vicomté mais sont repoussées. La trêve tacite conclue en 1512 lors de l’arbitrage de Blois est ainsi rompue. Dès lors, l’affrontement entre la France et le Béarn reprend, ouvertement ou non, jusqu’au début du XVIIᵉ siècle. Le chancelier Duprat refuse d’accorder des « lettres de naturalité » aux Béarnais installés en France tout en menaçant leurs biens, même si « le roi n'est point souverain seigneur du Béarn ». En 1519, durant cette période de tension, Alain d’Albret crée à Pau le Conseil souverain (inspiré du modèle navarrais d’avant 1512) afin de centraliser la justice et d’affirmer l’indépendance du Béarn. En 1521, Henri II d’Albret lance la reconquête de la Haute-Navarre avec le général Asparros. Le 15 mai, Saint-Jean-Pied-de-Port tombe et l’armée franco-navarraise atteint les portes de Pampelune, que le vice-roi quitte le 17 mai. Saint Ignace de Loyola est blessé lors de la prise de la ville. En quarante jours, les troupes franco-navarraises reprennent Saint-Jean-Pied-de-Port et libèrent tout le royaume. En 1523, Charles Quint lance une nouvelle campagne contre la Basse-Navarre et le Labourd, mobilisant 24 000 hommes. Ses troupes ravagent Saint-Palais, Mauléon et Ustaritz, mais l’expédition échoue : Henri II d’Albret conserve son autorité en Basse-Navarre. Le 28 août 1523, les États de Basse-Navarre se réunissent à Saint-Palais. Le commissaire d’Henri II, Bertrand d’Abbadie, y renouvelle au nom du roi le serment de garder les fors et libertés du royaume. 
       </p>
          </div>
        )
      },

       {
        titre: "De Pavie à la Paix des Dames",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Henri II, qui a des pèlerins pour parrains, fait battre une monnaie propre à la Basse-Navarre, un geste symbolique fort face à Charles Quint. Saint-Palais, devenu le centre d’opérations du Béarn et du sud de la France, est toutefois abandonné le jour de Noël 1523 après le raid dévastateur du prince d’Orange sur la Soule, le Labourd et la Basse-Navarre. En 1525, la victoire impériale de Pavie — où François Iᵉʳ et Henri II de Béarn sont faits prisonniers — consacre la domination de Charles Quint sur la Navarre. Henri parvient à s'évader, tandis que la future Marguerite de Navarre vient négocier pour son frère François Ier. La Navarre est alors divisée en deux entités : la Haute-Navarre revient définitivement à l’Espagne et la Basse-Navarre reste aux mains des Albret (ce qui est confirmé en 1530). Au traité de Madrid du 14 janvier 1526, le roi de France renonce provisoirement à ses prétentions sur l’Italie et la Bourgogne. De retour sur leurs terres, Henri et Marguerite fondent la Chambre des comptes de Pau, renforçant l’autonomie administrative du pays face à la France. Henri, très aimé du peuple béarnais, crée également la Cour criminelle, réduisant ainsi l’influence et les abus des magistrats. En 1529, la « paix des Dames » est signée entre Marguerite d’Autriche et Louise de Savoie. Cette paix met fin provisoirement au conflit entre la France et l’Empire. Les litiges sur la restitution des biens navarrais se prolongent toutefois jusqu’en 1539. La Haute-Navarre devient une province espagnole sans autonomie, tandis que la Basse-Navarre reste liée aux Albret. Sur le plan intérieur, en l’absence d'Henri II d'Albret, le pouvoir est exercé à partir de 1535 par sa sœur, Anne d’Albret, et par Jacques de Foix, évêque de Lescar et chancelier de Foix-Béarn. Entre 1538 et 1547, Henri transforme la bastide de Navarrenx en une forteresse bastionnée d'une modernité absolue. Véritable prototype de la fortification moderne bien avant Vauban, elle suscite l’inquiétude de Charles Quint, dont l'espion lui rapporte : « Sire, il y a des places que l'on prend, et d'autres que l'on laisse. Navarrenx est de celles-là. » En 1545, Tristan de Monein devient le premier gouverneur de cette forteresse. 

   </p>
          </div>
        )
      },
  {
        titre: "La Résistance face à la France",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Henri tente en vain de reconquérir la Haute-Navarre, que Charles Quint refuse toujours de lui restituer, ne lui reconnaissant que le titre de prince de Béarn. Face aux pressions extérieures, les États de Béarn restent farouchement attachés à leur souveraineté : ils refusent les documents rédigés en français, réservent les fonctions publiques aux seuls natifs du pays et affirment leur statut d’État indépendant face à la monarchie française. À la mort de sa femme, Henri veut épouser la duchesse de Lorraine (nièce de Charles Quint) ou l'infante Juana, fille de l'empereur, pour obtenir la Navarre en dot (à condition de déshériter sa propre fille). Dans cette optique, il élabore même des plans d’invasion espagnole passant par Bordeaux et Toulouse jusqu’à Pau. Plus tard, devenue souveraine, Jeanne poursuit sa politique d'indulgence envers ses opposants internes, et ce, en pleine guerre contre la Couronne de France. C'est d'ailleurs face à la politique française de contrefaçon des monnaies qu'elle menace de la peine de mort toute récidive. Cette fermeté stoppe définitivement le problème, même si le roi de France, Henri II, ne s’y plie pas.

  
   </p>
          </div>
        )
      },
       {
        titre: "Propagande et Pouvoir en Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Merlin, envoyé par Calvin comme agent d'influence intérieur pour protestantiser le Béarn (à l'instar de la monarchie française, les Béarnais n’ont pas forcément la religion de leur souverain), demande beaucoup à Jeanne d'Albret. Il lui répète que ses efforts sont insuffisants pour constituer une avancée structurelle conséquente. Jeanne, quant à elle, demeure terrorisée car son peuple — dont elle a la charge devant Dieu — se montre hostile. Calvin lui soutient que ses doutes sont des attaques du diable. Elle va jusqu'à s'infliger des auto-amendes pour manque de foi (vouloir le salut du plus grand nombre de ses sujets, un grand pouvoir implique de grande responsabilité), et proclame la première liberté de conscience de l'histoire (un sophisme, comme à chaque fois). La « modération » se déplace alors au niveau idéologique : les protestants saturent l'espace public (tous les hauts postes leur sont confiés, illustrant une pseudo-maïeutique socratique et une manufacture du consentement), il n’y a plus de procession et usent de paralogismes (comme le concept polymorphe et adjectif élastique de « fanatique », qui permet un véritable court-circuit mental) dans tout le Béarn. Malgré cela, Calvin estime que « ce n'est pas assez ». Coincée entre la France et l'Espagne qui mettent le Béarn en danger, la reine ne peut que continuer dans cette voie. Par la suite, la rigueur morale du protestantisme la conforte dans son idée de faire “sa propre Église de son côté” (face aux mœurs féminines qu'elle observe hors du Béarn et à ses histoires personnelles, se sentant guidée par Dieu alors que Dieu ne peut pas faire détester un frère). Enfin, l'attaque de la France en 1569 terrorise le Béarn et permet d'imposer cette religion sans violence, de concert avec les États et dans le respect des fors (toute modification ayant eu lieu lors de l'attaque étant annulée par la reine, à l'image de ce que fera la future Pologne), malgré la force de la nouvelle République de Genève — née d’un patriotisme, les politiciens gardent le contrôle sur l’Église (une situation inédite depuis le XIe siècle), après s’être libérée d’une Savoie catholique grâce à l’appui de Berne (zwinglienne, une sorte de protestantisme), Genève finit par se détacher de cette dernière pour faire appel à Calvin (un autre anticatholique, pour éviter le système catholique et renforcer le pouvoir économique de la bourgeoisie genevoise). La ville du calvinisme est appuyée et protégée par ses traités avec la France (qui, contrairement aux Anglais, les respecte) face à cette Savoie pro-espagnole, alors même que le roi de France se trouve affaibli par la Ligue. —, Jeanne suit le système : répression, poursuite, amnistie (sauf quelques bannissements). Même des catholiques restent en poste pour leurs compétences, et les petites gens sont jugés avec moins de gravité que les grands.


 </p>
          </div>
        )
      },

       {
        titre: "L'Instruction pour Tous en Béarn",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Marguerite de Navarre, sœur de François Iᵉʳ qui a protégé le cercle de Meaux et obtenu l’Armagnac, se disait au même niveau de foi que Marie et a permis l’arrivée du protestantisme en France. D’abord protégée par le pape, elle fera ensuite face à la Sorbonne jusqu’aux mesures prises par son frère après la décapitation d’une statue de la Vierge et l’affaire des Placards. De plus, Marguerite a aussi écrit L'Heptaméron où, dans des histoires inventées, elle critique fortement les mœurs du clergé, des hommes, mais aussi des femmes (une femme se disant vertueuse qui pratique l’inceste avec son fils, ou une autre qui accuse son amant de viol devant son mari), dans le but de mettre en avant le saint mariage et la vertu (précisant qu'il ne faut pas se marier par plaisir mais par raison car c’est pour la vie), et qui sera repris par des mouvements républicains faisant une fixette sur une partie de son message, le pervertissant sciemment dans l’espace public (biais de focalisation ou de confirmation dans des discours visant à protéger des « institutions républicaines » imaginaires). Sa fille Jeanne d’Albret, marraine de Jeanne Séguier et convertie par Bèze (qui considérait que les héliocentristes étaient sataniques), publiera les Ordonnances ecclésiastiques détaillant l'organisation, les cours, la discipline et la vie quotidienne basées sur le protestantisme, et tente même d'instaurer un enseignement mixte. Jeanne réussit à proposer l'école à tous les Béarnais et toutes les Béarnaises — faisant du Béarn le premier pays au monde à généraliser l'instruction, alors qu'à l'origine, celle-ci n'est destinée qu'à former des clercs (et donc réservée à certains hommes, hors noblesse et religieuses) — pensant qu’il faut lire la Bible pour être sauvé. Dans ce système, les diacres interrogent régulièrement les enfants pour les orienter soit vers l'Académie, soit vers un métier. L'apprentissage se fait au rythme de l'apprenant et en fonction de ses compétences. Cette approche se rapproche de l'idéal de nombreux philosophes des Lumières. Pas comme aujourd’hui, où l’élève dépend du bon vouloir d’un corps enseignant parisien dont la parole fait autorité. Une accusation fausse ou un effet de groupe des collègues, avec le mimétisme des élèves, et il se produit un étiquetage contagieux. L’ataraxie passe pour de l’impudence, la juste colère pour un aveu, et toute réaction corrobore la sentence d’un groupe qui confond l’unanimité avec la vérité. Là où la victimisation ostentatoire s’assure une indulgence future par le poids des soutiens qu’elle coalise, ceux habitués à l’affront se passent de l’approbation générale et feront front à un système calqué sur la mentalité de la masse. Par son suivisme et sa persécution des marginaux, il devient l’auxiliaire inconscient (“la luxure rend bête”, St Thomas, au demeurant) de l’atomisation profitant au capitalisme qui règne sur une société composée de pleureurs et de conformistes n'acceptant pas leurs épreuves vers la sainteté (imaginativement ou souvent en diffamant — dans son sens noble — pour pérenniser les crimes pro-individualistes impunis qu’ils commettent, se séparant et séparant leur prochain de Dieu).  Dieu peut permettre que nous tombions dans le péché ou que nous en subissions pour qu'on progresse, ce sont des épreuves.


 </p>
          </div>
        )
      },

      
      
      
      {
        titre: "Jeanne d'Albret, Ordre et Morale",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Saint Louis voit le rôle du roi comme celui d’un « roi chrétien juste » devant Dieu : il permet que ses sujets fassent appel directement à lui pour limiter les abus locaux, encourage les lois contre le blasphème et les jeux d'argent, soutient la morale de l'Église et crée les corporations (excluant les débauchés désordonnés) qui prenaient soin des veuves, des orphelins et des membres malades. Après avoir promis que la France protégera toujours les chrétiens d’Orient (380 millions de chrétiens sont persécutés aujourd’hui, 1 sur 7, au nom de lois antichrétiennes créées par les ésotéristes eux-mêmes, comme la laïcité, et donc de l’argent comme Judas), il conseillera à son fils de soutenir le pauvre contre le riche avant de savoir la vérité, dans son testament. Issue de sa famille par alliance, choquée par les mœurs des femmes hors du Béarn et soucieuse du salut de ses sujets, Jeanne d'Albret (prête à être brûlée vive avec ses enfants plutôt que de renoncer à sa foi pour son peuple) impose au Béarn une police des mœurs où crimes et péchés se confondent. Le pouvoir terrestre est au service du spirituel : les rassemblements festifs sont interdits (car ce sont des occasions de péché — comme le disait le Curé d'Ars — à l'image de la débauche qui réduit le prochain à un objet et ne fait pas Dieu la fin), ignorant sciemment ceux catholiques, le consentement est une circonstance aggravante et l’apologie est pire que l’acte lui-même (les mauvaises œuvres font perdre la vision du divin et le péché noircit l’âme). Toute déviance est sanctionnée par le pilori ou le bannissement. La reine garantit ainsi la sécurité du corps et de l'âme des Béarnais, qui ont l'assurance que leur voisine n'est ni une fornicatrice ni une meurtrière.  En totale aversion avec le système de la Vᵉ République et son conditionnement social (inspiré de la philosophie de Fichte, favorable à l'opinion et à la soumission, et donc anti-vérité vu qu’on objecte plus qu'on n'acquiesce, à l'inverse total de l'agnosticisme méthodologique de saint Thomas d'Aquin). Ce système républicain, par son mépris social et sa pression permanente, empêche la réflexion personnelle et force le peuple dans le péché par « ignorance », marchant main dans la main avec la LICRA qui gère les discours publics (travail de sape via les mêmes fondateurs issus du GODF, qui fournissait déjà ses planches à Mitterrand) et les jugent infiniment plus grave que l'adultère. Comme le rappelle le catéchisme, les péchés personnels finissent par créer des structures sociales mauvaises qui poussent d’autres personnes au mal. Très attachés à ces règles, les Béarnais refusent de s'en défaire ; de ce fait, Henri IV (parrain de nombreux Béarnais, resté proche de ses nourrices et de ses frères de lait) ne parviendra jamais à abolir cette police des mœurs malgré les pressions de Paris.

       
         </p>
          </div>
        )
      },

       {
        titre: "Le Béarn Change de Calendrier",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Il existe à l'époque quatre styles de Nouvel An : la Circoncision, la Nativité, Pâques (utilisé par les rois de France) et la Conception (en vigueur en Béarn). Les marchands béarnais, qui commercent avec l’Espagne et la France où le style de la Circoncision est déjà imposé, subissent des complications. Les syndics Pédesert et Laborde demandent donc à la reine de changer la date en 1571. La souveraine accepte. En 1582, Henri II de Béarn imposera depuis Nérac la réforme grégorienne — le calendrier julien accusant un retard annuel de 11 minutes — à l'instar de son beau-frère. Publié le 20, le décret fait passer directement la population du 21 au 29 décembre. Les Béarnais manquent ainsi la célébration de Noël cette année-là.
</p>
   </div>
        )
      },
  {
        titre: "Jeanne et Ses Ennemis",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
 Après l'assassinat de son mari, Anne d'Este (duchesse de Guise) veut se venger de Coligny, accusé d'avoir commandité le meurtre. Ses recours en justice échouent, jusqu'à la Saint-Barthélemy jusqu'à la Saint-Barthélemy qui démontre la montée des Guise. En parallèle, Anne est l’ennemie jurée de Jeanne d'Albret au sujet du duc de Nemours. Anne veut l'épouser, tandis que Jeanne défend les droits de sa protégée, Françoise de Rohan. Le jour du mariage d'Anne et de Nemours, Françoise envoie un émissaire pour faire stopper la cérémonie, mais l'homme est roué de coups et jeté en prison. Le pape confirme le mariage. Ce scandale brise définitivement l'amitié entre Jeanne d'Albret et la mère d'Anne d'Este, Renée de Ferrare, qui était sa seule amie au sein de la famille royale. Anne verra ses enfants occis par Henri III de France. Jeanne était aussi déjà fâchée avec Marguerite de Nevers qui avait modifié un livre écrit par la mère de Jeanne. En réaction, Jeanne avait fait détruire ces exemplaires et réédité l'ouvrage avec une préface sarcastique envers Marguerite. Un affront que la fille de cette dernière, Henriette de Nevers, ne pardonnera jamais à Jeanne.

         </p>
          </div>
        )
      },
       {
        titre: "Jeanne Face à la Mort",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Jeanne prépare activement le mariage de son fils lorsque, le 5 juin, elle est prise de fièvre. Elle répète que tout vient de Dieu, ne se plaint jamais et répond « oui » lorsque ses pasteurs lui demandent : « Jésus est ton sauveur, seras-tu purifiée par son sang ? ». Jeanne dit aux femmes près d’elle qu’il ne faut pas pleurer, car Dieu l’appelle vers une vie meilleure, la terre étant pleine de vanités. Elle regrette de ne pas avoir eu le temps de suffisamment les récompenser et exhorte la fille de Madame de Tignonville à rester ferme dans sa foi (bien que cette dernière aura, par la suite, des mœurs catastrophiques).
     
         </p>
          </div>
        )
      },
  {
        titre: "Catherine, Gouvernante de Gascogne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
 Catherine de Bourbon — qui, dans son enfance, jouait avec un nain au Castet-Béziat à Pau, tombe souvent malade et nomme un ânon « son frère de lait » car elle consomme le même lait de la même ânesse que lui — est nommée gouvernante de Gascogne et régente de Béarn en 1577. Elle se cache fréquemment à Navarrenx et dort souvent à Audaux. Pour Catherine, la guerre est purement politique, les catholiques peuvent aller à la messe dans les alentours (contrairement à Genève ou à des territoires luthériens allemands). Elle encourage la prière collective ainsi que le jeûne pour la protection du royaume, tout en mettant en avant la haute moralité de ses proches. Elle proclame l’avènement de son frère et réussit à rallier la noblesse gasconne, initialement hostile à Henri IV (le Béarn hérétique a conquis la France, fille aînée de l’Église, contrairement aux autres provinces qui ont étaient avalées par la France). De santé fragile, elle se rend régulièrement aux Eaux-Bonnes. Elle finit par quitter le Béarn pour épouser le duc de Bar, une union périlleuse en raison de sa foi protestante. Face aux pressions catholiques, les protestants organisent une stratégie pour éluder l’évêque Du Perron. Sa dernière phrase sur son lit de mort est : « Sauvez mon fruit ».


         </p>
          </div>
        )
      }
      

    ]
  },
   'monarchie-absolue': {
     titre: "Sous la monarchie absolue",
    periode: "Renaissance",
    resume: "Le Béarn et la monarchie française",
    introduction: "La monarchie française s'impose en Béarn....",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "L'Éducation Rustique d'Henri IV",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
         Henri Ier de Béarn donne à son petit-fils, Henri II de Béarn et futur Henri IV de France (par son père qui n'est alors que « mari de la vicomtesse » en Béarn car non béarnais), une éducation rustique. Celle-ci lui permet de marcher pieds nus dans les montagnes et de vivre ses premières années comme un fils de paysan, loin des « problèmes de riches » qu'il découvrira plus tard à Paris. Henri a sept nourrices, dont Jeanne Lafourcade (qui vit dans une humble chaumière) avec qui il garde des rapports très affectueux, tout comme avec ses filleuls issus du peuple (il tient à payer la sage-femme et le pâtissier le jour même). Il a ensuite pour gouvernante Susanne de Bourbon-Busset, baronne de Miossens, non pas dans le palais natal, mais au château agreste de Coarraze, chef-lieu d'une des treize baronnies du Béarn. Là, il est nourri de pain bis, de laitage, de bœuf et d'ail. Il marche souvent pieds nus et nu-tête, ignorant tous les luxes de la vie au milieu des enfants du peuple.
           </p>
          </div>
        )
      },
      {
        titre: "L'Éducation Intellectuelle d'Henri IV",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le premier précepteur d'Henri est La Gaucherie (un choix validé par Catherine de Médicis, sûrement pour rassurer Jeanne d'Albret sur sa neutralité), un homme aux mœurs pures. Jeanne demande à Henri de l’aimer comme elle-même puisqu’il incarne son autorité ; ce à quoi l'enfant répond : « Oui, s'il m'aime aussi ». Ils deviennent rapidement amis. Dans cette éducation, point de livres imposés, mais des livres désirés : les études sont courtes, les récréations brèves mais nombreuses, et font la part belle au jeu de paume. Henri étudie les maximes grecques et surtout Plutarque, que sa mère lui donne pour éviter qu'il ne devienne un ignorant (il apprécie également Jules César et Tite-Live). À cette époque, la défection du connétable de Bourbon chagrine beaucoup le jeune Henri. Selon les ordres stricts de Jeanne, il est tenu dans l'ignorance des intrigues de la cour et de la politique, n'a que des compagnons d'étude (comme Agrippa d'Aubigné), de chasse et d'armes et pas de véritables amis (Ségur et La Rochefoucauld le deviendront par la suite). Au collège de Navarre (toujours sous la direction de La Gaucherie et de Beauvais), il rencontre le futur Henri III et Henri de Guise. Selon Jeanne, Henri apprend davantage en sept mois avec le théologien Morély qu'en sept ans avec La Gaucherie. En 1567, après son retour en Béarn, Henri poursuit son éducation scolaire sous la direction de l'humaniste Florent Chrétien. Jeanne le corrige souvent ; Henri approuvera cette sévérité plus tard en ordonnant l’achat de fouets pour l'éducation de son propre fils, le futur Louis XIII. En février 1568, à seulement treize ans, il pacifie la Basse-Navarre en véritable guerrier. Il explique au peuple que la reine respectera leurs privilèges (fors) et qu'il suffit de lui demander au lieu de se rebeller en suivant les directives de Paris, se présentant déjà comme leur futur meilleur ami. À son arrivée à La Rochelle aux côtés de Jeanne, il répond à un long discours d'accueil qu’il saura « beaucoup mieux faire que dire », avant de manquer de se noyer sur une digue, sauvé de justesse par un capitaine rochelais. La Rochelle, qui bénéficiait de privilèges communaux depuis 1199, s'était ensuite alliée aux Français pour en obtenir davantage. Très indépendants, ses bourgeois ont sauté sur l'occasion du calvinisme pour accroître encore plus leur autonomie (Jeanne d'Albret, sa mère, y a d'ailleurs nommé des maires).

         
           </p>
          </div>
        )
      },  {
        titre: "Les Maximes d'Henri IV",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Les maximes d'Henri IV, dictées par son précepteur La Gaucherie, dessinent le portrait idéal d'un souverain juste et vertueux : il y rappelle qu'un bon roi doit préférer sa patrie à ses propres enfants, estimer qu'un héros n'a rien fait tant qu'il lui reste à accomplir, et comprendre qu'un prince esclave de ses passions n'est qu'un « esclave couronné », même à la tête des plus vastes États. Ce programme d'éducation morale et politique enseigne qu'il faut vaincre avec justice ou mourir avec gloire — une sentence qu'il prononcera plus tard en grec devant Catherine de Médicis —, tout en affirmant que si les rois ont une grande autorité sur leurs peuples, celle de Dieu sur les rois est bien plus grande encore. Tournant le dos à la tyrannie, Henri IV soutient qu'un souverain qui aime la flatterie et craint la vérité s'entoure d'esclaves, qu'un roi oisif dépend de ceux qui travaillent à sa place, et qu'une prospérité vécue dans l'orgueil mène à la lâcheté dans l'adversité. Le texte insiste enfin sur la supériorité de la clémence, qui imite la Divinité, face à la vengeance qui abaisse l'homme, car le droit le plus flatteur de la royauté reste de faire le bien : les souverains ne se font craindre que par leur puissance, mais c'est la bienfaisance seule qui les fait aimer, puisqu'il vaut toujours mieux conserver un seul citoyen que de faire périr mille ennemis. 
          </p>
          </div>
        )
      },
      {
        titre: "L'Avènement de la Monarchie Absolue",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Saisi d'effroi en devenant roi, Henri IV ne peut se dérober à ses lourdes responsabilités, car c'est son devoir devant Dieu, qui est juridiquement le véritable propriétaire du royaume (à l'image des dirigeants actuels qui font la volonté de ceux qui leur ont permis d’accéder au pouvoir). Il place donc la survie de l’État au-dessus de tout. Il stoppe 36 ans de guerres civiles et amorce la monarchie absolue. L’État repose désormais sur des officiers soumis à la Paulette, une taxe qui permet au roi de s'assurer un revenu régulier en imposant un groupe social riche. Henri se base sur la fidélité acquise et s'efforce de réduire le pouvoir des gouverneurs de province, jugés trop puissants. Au lieu de s'appuyer sur eux, il envoie directement des commissaires en mission, comme pour faire appliquer l’Édit de Nantes ou mener la réforme des hôpitaux. Par ailleurs, il n’impose pas le français aux différents peuples de France. Très pragmatique et diligent, il s'entoure de ministres aussi bien catholiques que protestants. En décembre 1606, il améliore la discipline, redresse les mœurs du clergé et veille à l'instruction des prêtres (un paradoxe similaire à celui de Charlemagne). Il nomme par exemple le cardinal Arnaud d'Ossat, un homme d'origine modeste. Grâce à ces mesures, les abus diminuent et le pape reconnaît ses efforts. Très dissipé, Henri IV verra Marie de Médicis (qu’il a épousé après avoir écarté des princesses allemandes car il ne voulait pas "un lot de vin couché auprès de lui” et pour effacer l’énorme dette de la France envers la Toscane) lever la main sur lui, et ils s’entendront bien malgré de nombreuses péripéties. 
    </p>
          </div>
        )
      },  {
        titre: "Henri IV Gouverne en Marchant",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Hostile aux lourdeurs cérémonielles, Henri IV impose un rythme rapide et efficace : les décisions sont prises en deux heures. Il tient souvent conseil en marchant dans les galeries du Louvre, de Fontainebleau ou des Tuileries. Tout comme Sully, il hait les discours lénifiants et complexes des juristes, qu'il juge déconnectés des réalités militaires et paysannes (une rhétorique de nanti), il privilégie le pragmatisme, sans termes élastiques que n'importe qui peut redéfinir à sa guise. Au parlement de Paris, il dira à Achille de Harlay : "Les grandes causes ne sauraient souffrir de vains délais. À l'instar des règles de Béarn ('sur ordre de mon feu grand-père'), les avocats doivent s'exempter de paroles superflues (la substance d'un discours l'emporte sur l'artifice de l'éloquence)". Le Conseil se réunit chaque matin, de 6 h à 8 h, avec les princes du sang et les officiers de la couronne. Le roi complète ces séances collectives par des entretiens individuels afin de tester personnellement ses conseillers (son ami Biron sera puni de mort après l’un d’eux pour trahison envers le peuple français qu’Henri doit protéger). Après un débat marquant le 4 mai 1600, où l'évêque Du Perron démonte les arguments du protestantisme, Henri en sort pleinement conforté dans sa foi catholique (à l'exception de la question du culte des saints, ce qui reste "compréhensible" au vu des "dérives" liées aux reliques à cette époque (absence de réseaux), ils laissaient faire puisque cela menait à la foi). Immédiatement après cet événement, il insiste auprès de sa sœur, Catherine de Bourbon, pour qu'elle se convertisse à son tour.

</p>
          </div>
        )
      }, 
      
       {
        titre: "Henri IV et le Peuple",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Henri IV, qui jouait souvent au jeu de paume comme sa 1ère femme (qui ne guerroyait pas car ce n’était pas comme les barêmes sportifs discriminatoires actuels), disait que « s’en prendre à ses sujets, c’est s’en prendre à lui, car ce sont ses enfants », notamment lors des inondations de la Loire. Sur les routes, il s’arrêtait pour parler au peuple, demandant l’origine des voyageurs, leur destination et le prix des denrées. Dans la société d’ordres, le peuple formait la base du royaume et inquiétait les élites : Salluste du Bartas comparait la démocratie à un navire sans pilote. Dans le Sud-Ouest, les révoltes visaient surtout la gabelle, comme celles des Croquants, des Honnêtes Rouges ou des Gauthiers (Normandie). Pierre de L’Estoile rapporte qu’Henri IV aurait dit que, s’il n’avait pas été roi, il se serait fait Croquant. Il envoya le sieur de Boissise sur place : les gouverneurs dispersèrent violemment les paysans, mais Henri IV ordonna surtout le siège du château de Gimel, repaire de seigneurs pillards opprimant le peuple. Un impôt sur les marchandises provoqua aussi des troubles vers Limoges. Henri IV vint lui-même entendre « les plaintes de son peuple » et céda après quelques exécutions menées par Jambville. En 1597, il interdit aux gens de guerre de ravager les campagnes sous peine de mort, puis bannit les armes à feu sur les grands chemins. En 1608, en Bourgogne, il fit raser les châteaux servant de refuge aux bandits, financés par les États de Bourgogne. En 1601, devant le Parlement de Paris, il dénonça la corruption des petits officiers de justice qui ruinaient les justiciables. Il abaissa aussi le taux d’intérêt de la rente et réduisit la taille de 18 à 14,5 millions de livres dès 1600. En 1598, il révoqua les lettres d’anoblissement accordées depuis vingt ans afin de réimposer 40 000 personnes. Pour lutter contre la spéculation et la fuite des métaux précieux, il tenta d’imposer un nouvel édit monétaire, mais le Parlement s’y opposa. Après les guerres civiles, les villes formèrent un monde distinct de la paysannerie et de la noblesse. Bordeaux se gouvernait comme une « vraie république », où gouverneur et archevêque étaient vus comme des étrangers. Henri IV interdit les brigues électorales, fit nommer des hommes de confiance comme Montaigne à Bordeaux, confirma l'oligarchie des "bourgeois de Bordeaux" pour mieux la contrôler et supprima les consuls lyonnais pour imposer un système parisien plus contrôlable (son fils Louis Ie l’imposera en Béarn, marquant un choc, tout en maintenant les fors et privilèges). En 1600, il autorisa les villes protestantes à racheter leurs biens aliénés à bas prix, mais les obligea en échange à relever leurs fortifications et entretenir des garnisons à leurs frais.

 </p>
          </div>
        )
      }, 
      
      
       {
        titre: "Le Renouveau Économique et Agricole",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>

Sous l’impulsion de Maximilien de Béthune, partisan d’une politique favorable à l’agriculture, des ormes et des tilleuls sont plantés le long des routes afin de fournir du bois pour l’artillerie et la marine. Des haies vives sont également aménagées aux Tuileries, avant d’être détruites par le grand hiver de 1608. Henri IV modernise la circulation des personnes et de l’information en créant trois lignes de voyageurs et en ouvrant les relais de chevaux au public. Pour faciliter un commerce routier lent et coûteux, il veut relier les rivières entre elles : le canal de Briare unit ainsi la Loire au Loing. Il cherche aussi à relancer le commerce maritime dans le sud du royaume, mais les fonds royaux sont détournés et les États de Languedoc refusent de financer le projet. Afin de concurrencer la puissance commerciale espagnole et hollandaise, Henri IV favorise la création de compagnies de commerce tournées vers les Indes orientales, dans le contexte de l’essor des grandes compagnies marchandes européennes, comme la Compagnie protestante néerlandaise des Indes orientales (après le déplacement juif d'Anvers à Amsterdam, plus tolérante envers eux, pour fuir l’Inquisition espagnole) qui amorce le capitalisme moderne — mis en avant par l'évolution du calvinisme (où la réussite matérielle est vue comme un signe d'élection divine, alors que “la recherche de la gloire terrestre est notre plus grand obstacle” selon St Thomas, et les juifs usuriers sauvés, dont la religion s'est réorganisée après la chute du Temple) qui dilue la raison (Bèze et Abraham) et dévie de plus en plus car il n’a aucun point d’accroche (le Pape), c’est interprétation sur interprétation du moment pour ses membres — pendant que la domination espagnole diminue (expulsion de réseaux marchands fin XVe siècle) et l’anglaise augmentera (les protestants avec Cromwell, Orange, le retour des Juifs, New Amsterdam reprise). En 1603, après avoir rencontré des Amérindiens amenés en France, il abandonne le modèle espagnol centré sur l’exploitation minière et privilégie une politique fondée sur le commerce, la colonisation et l’évangélisation. Malgré l’opposition de Sully, Québec est fondée par Samuel de Champlain. Entre 1598 et 1610, le royaume ne connaît ni grande famine ni grande peste : mieux nourris, les paysans sont plus nombreux, la faim recule et la natalité augmente. Henri IV fait assécher les marais pour les transformer en terres cultivables grâce à l’ingénieur hollandais Humphrey Bradley. En 1600, Olivier de Serres rédige le Théâtre d’agriculture que le roi fait lire chaque soir et diffuse largement. Il développe aussi les potagers d’essai, plante 15 000 à 20 000 mûriers aux Tuileries et à Fontainebleau, y fait construire une magnanerie, encourage la sériciculture, tente la culture de la canne à sucre à Hyères et favorise les haras pour l’élevage des chevaux. Henri réglemente également la chasse selon les saisons afin de protéger les récoltes, maintient le monopole aristocratique et punit sévèrement le braconnage. Dès 1595, il libéralise le commerce des marchandises puis, en 1601, proclame la libre circulation des grains et des vins pour attirer les capitaux étrangers, tout en suspendant les exportations de grains lors des mauvaises récoltes de 1604 et 1608. Le paysage rural se repeuple, l’élevage progresse et le commerce des grains enrichit surtout grands propriétaires, bourgeois et nouveaux anoblis rachetant les terres. Sous son petit-fils, la France sera la plus grande puissance démographique et agricole d'Europe occidentale. 

 </p>
          </div>
        )
      }, 
      
      
      {
        titre: "La Modernisation de Paris",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Henri IV supervise et finance ses maçons (ils faisaient des cathédrales sur plusieurs siècles, sans vaine gloire) sur ses propres deniers (notamment grâce à ses gains au jeu de paume). Il réglemente la salubrité des rues face aux boues et aux loups, et pose en 1607 la première pierre de l'Hôpital Saint-Louis afin d'isoler les malades à la suite de l'épidémie de peste de 1606. Il projette également une Place de France où chaque rue porterait le nom d'une province (aucun roi n’a jamais imposé les lois ou la langue de Paris à ses peuples : il se veut le Roi des Peuples de France). Henri modernise les programmes de l’université en y intégrant les arts militaires et de l'ingénieur, en s'appuyant sur le retour des Jésuites (1603) et sur les Oratoriens. Il protège le mathématicien Viète (concepteur de l'algèbre moderne) ainsi que les ingénieurs Alleaume et Bachot, et charge Sully de créer un conservatoire des arts et métiers au Louvre pour inspirer les techniciens. Pour conserver le savoir, il centralise la Bibliothèque royale à Paris en y réunissant les collections de Fontainebleau, du cardinal de Bourbon et de Catherine de Médicis, incluant la Bible de Charles le Chauve. De plus, il valorise le Collège de France en y créant des chaires d'anatomie et de botanique, et fonde un collège de chirurgie pour détacher définitivement cette discipline du métier de barbier. Son fils Louis Ier de Béarn, avec Richelieu, fondera l’Académie française et enverra des intendants (bourgeois ou noblesse de robe) dans les provinces pour permettre au roi de gouverner les provinces sans dépendre entièrement des parlements (gouverneurs ou élites locales), se superposant aux nobles de robe et d’épée, il s'inscrit dans la suite logique de la politique d’Henri IV. Cela permet l'avènement de la monarchie absolue composite sous Louis XIV, le droit de remontrance des juges étant fortement réduit (bien qu'il sera restauré plus tard par Philippe le Régent). 


   </p>
          </div>
        )
      },
       {
        titre: "De la Fronde à Versailles",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Sous la Régence, Mazarin veut suspendre le salaire des “robins” (noblesse de robe devenue très riche grâce à ses charges et protégeant ses privilèges fiscaux, ce qui empêche le roi de créer un impôt plus juste taxant aussi les riches et les nobles afin de soulager les paysans). Ces derniers hurlent au scandale et bloquent l'État. Les princes (la noblesse d’épée) entrent alors en piste, saisissant l’occasion pour redevenir les maîtres chez eux. Une propagande s’installe : les bourgeois se prétendent du peuple, car ils sont ni du clergé ni de la noblesse (une illusion, un habitant d'Audaux est bien plus proche de son seigneur ou de son curé que d'un banquier parisien), face à un "tyran" qui lui prendrait donc son argent avec Mazarin en bouc émissaire. Après cette période de la Fronde, Louis II de Béarn (XIV de France) force les princes à vivre à Versailles (qui fait la grandeur de la France et coûte cher comme si tous les députés étaient au même endroit, pas dans leur villa) et les corrige (Grands jours d'Auvergne). La France devient la première puissance mondiale, tant par son armée que par son agriculture jusqu’au grand Hiver de 1709. Face aux Habsbourg (Espagne et Autriche), Louis XIV s'allie avec l'Empire ottoman, la Bavière, la Suède ou encore les Stuart anglais. En 1688, Guillaume d'Orange (calviniste proche de Locke, farouchement anti-français et anti-espagnol, financé par le banquier juif Suasso) est porté par les parlementaires protestants anglais sur le trône d'Angleterre (qui ont décapité le roi catholique avant). Une immense coalition (Angleterre, Provinces-Unies, Prusse, Autriche) se forme contre la France. Face au danger, Louis XIV lance un appel patriotique le 12 juin 1709, et le peuple décide de se battre pour son roi dans leur destin commun “La France”. Le mythe de la nation républicaine ne viendra que plus tard avec l’école de Ferry et son fascisme républicain (culte de Marianne) avec l'interdiction des langues locales alors que sous Louis XIV il n’y avait pas de ministre de l’Instruction (ou éducation)—  c’étaient les communes qui décidaient du programme et de leur maître, le roi ne cherchait jamais à formater uniformément le peuple en vendant à bas prix des ouvrages médiocres pour qu'il les achète et s'abrutisse loin de la Vérité (l'Église) comme avec des séries, journaux et films proposés gratuitement et exclusivement maçonniques (banalisant des crimes, Disney étant formé par des maçon au DeMolay…), contrairement à la République aujourd'hui — qui proposera des solutions à une panique morale, fabriquée par un matraquage médiatique (effet de loupe), bonnes en soi (vernis de respectabilité) mais portées par des gens pervertis (hypocrisie morale) avec un principe individualiste (instrumentalisée pour une autre motivation réelle : la débauche qui tue les âmes, et plus haut, pour des intérêts pécuniaires). Félix Pécaut, protestant natif de Salies, collaborateur de Jules Ferry et Buisson, a été Inspecteur Général de l’Enseignement Primaire et Pauline Kergomard, protestante éduquée à Orthez et nièce des francs-maçons Reclus, participe à la transformation des salles d’asile (tenus par des soeurs) en écoles maternelles. En Béarn, il existe plusieurs parlers car on parle traditionnellement la même langue que les gens que l’on côtoie. Voir un Basque s’allier à un Breton qu’il ne connaît pas face à un Romain sous prétexte qu’ils appartiennent à la « même nation » mènera à 2 guerres mondiales, substituant l'intérêt financier à l'amour véritable des siens. Finalement, le petit-fils de Louis XIV devient roi d'Espagne et les frontières françaises sont préservées. Les guerres de Louis XIV vont endetter les communes qui doivent vendre, pour la première fois, leurs communaux à des financiers qui deviennent les “nouveaux seigneurs” par intérêt mercantile asservissant par l'argent un peuple qui en dépend. 


 </p>
          </div>
        )
      }
      ,
       {
        titre: "Un Colon Béarnais",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le Béarnais Jean-Vincent d’Abbadie de Saint-Castin, descendant de Marguerite de Moncade et devenu orphelin de mère dès le berceau lors d’une épidémie de peste, quitte La Rochelle le 6 mai 1665 pour la Nouvelle-France. Âgé de seulement 13 ans, il embarque comme enseigne, accompagné de son serviteur Regnault Bordenave. Cinq ans plus tard, il gagne Pentagouët — l’actuelle Castine, qui porte aujourd’hui son nom. Dès 1659, un marchand de Boston proposait déjà de déporter les Français de Port-Royal s’ils refusaient de se soumettre, projet qui se réalisera effectivement au siècle suivant. Saint-Castin s’installe ensuite chez les Abénaquis, dans l’actuel Maine, adopte leur mode de vie, épouse la fille du grand chef Pidiansiske et devient un chef et un guerrier respecté parmi eux. Revenu plus tard en Béarn, il ne pourra cependant jamais repartir, le Parlement de Pau étant alors désireux d’affirmer son autonomie face à Louis XIV (qui venait de condamner un projet de Vauban de destruction des provinces, pour imposer tous les sujets des peuples de France il faut forcément les annihiler).

 
  </p>
          </div>
        )
      }
    ]
  },



  
     'la-terreur': {
 titre: "Le Béarn sous la Terreur",
    periode: "Époque Moderne",
    resume: "Les Sacrilèges s'abattent sur la France",
    introduction: "Des Peuplicides se mettent en place au nom de la Tolérance",  image: "/images/histoire/antiquite.jpg",
    sections: [
     
     
        {
        titre: "L'Éthique de la Guerre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le commandant en chef de l'armée de la France catholique à Fontenoy est le protestant maréchal de triomphe grandiose, mais Louis a préféré une entrée beaucoup plus sobre. Cependant, en privé, Louis XV entretenait des relations distantes avec son épouse et ses mauvaises mœurs addictives le rapprochent de — et le soumettent à —  la haute bourgeoisie financière avec la Pompadour qui protège Voltaire, le libéral Quesnay — "Prix plus élevés = salaires plus élevés", telle était la volonté des "nouveaux seigneurs" pour s'enrichir (leur but) n'augmentant pas la rémunération des paysans qui travaillent —  ou encore Diderot — qui se verra assurer une sécurité financière par la tsarine et correspondante du maçon Voltaire, Catherine II de Russie, qui prit le pouvoir après l'assassinat de son époux par l'un de ses amants (Orlov, avec qui elle avait eu des enfants illégitimes). Par réaction, ce comportement incitera son fils, le Dauphin (père du futur Louis XVI), à mener une vie extrêmement pieuse et chaste. En pleine guerre de 7 ans alors que le Royaume de France se trouve dans une position critique, Antoine Dupré aurait créé un explosif impressionnant et le montre au roi mais Louis XV juge cette invention inhumaine et paye Dupré pour qu'il détruise sa fortune. Le 10 août 1792, Louis XVI (pas fétichiste institutionnel contrairement à la République) refusera de tirer sur la foule (des marseillais qui commettront des horreurs). Cinq ans plus tôt, il avait signé l’édit de Tolérance (diluant la vérité unique du christianisme) après une rencontre entre son ministre Malesherbes, le franc-maçon Lafayette et le pasteur protestant Rabaut Saint-Étienne. Ce dernier — proche de l'abbé franc-maçon Grégoire et du curé révolutionnaire Dom Gerle, adepte de la prophétesse Catherine Théot qui se dit "mère de Dieu" et probablement marié par la suite — incitait d'ailleurs les protestants à « se préparer à devenir les instituteurs de la nation en faisant couler l'instruction jusqu'aux derniers individus ». 
      
          </p>
          </div>
        )
      },
     
      {
        titre: "La Loge Maçonnique de Pau",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La loge maçonnique de Pau — une franc-maçonnerie qui prône une vertu sans fondement uniforme en professant le dogme de « ne pas en avoir » (paradoxe d'autoréférence niant la Vérité Révélée, à l'instar de pouvoir penser que 2+2=22 mais pas de prononcer le truisme 2+2=4) et demeure soumise à la sécularité, combattant un groupe en forgeant une définition sur mesure le déclarant mauvais selon un dogme mouvant de concert avec la République (sans réellement unifier toutes les loges, comme si Dieu pouvait donner des vérités différentes), tout en se disant favorable à la liberté d’expression absolue, avec une volonté d’universalité mondiale (même langue, même culture, mêmes activités par la concentration urbaine, une tour de Babel), cette secte ésotérique vouée à la vaine gloire est tolérée en France sous l’absolutisme bien qu’excommuniée par l’Église  — réaccueille les avocats en 1779 (Hillaire Laterrade, Joseph Claverie, François Balthasar...) après une fête maçonnique pour célébrer le rétablissement du Parlement de Navarre. Cette action est soutenue par la comtesse de Gramont (proche de Marie-Antoinette, dont la fille sera guillotinée lors d'une Révolution qui lui fait perdre tous ses droits de comtesse, celle-ci passant sous l’autorité des républicains par la volonté de ces derniers) et par des Parisiens (Joseph-Charles Lefranc, Jean-Baptiste Lagrange, Philippe Frédureau...). En 1778, une pyramide est surmontée du berceau-carapace d'Henri IV (culte du « bon roi Henri ») et domine les portraits de Sully et de Necker (le ministre banquier protestant, allié aux révolutionnaires notamment par sa femme qui fréquente les salons bourgeois avec des francs-maçons, comme l’abbé Sieyès, les Rolland, Buffon, Napoléon, Franklin…). Depuis le départ du souverain, les États gèrent le Béarn autonome ; les décisions viennent donc d'un groupe de nantis, ce que saint Thomas d'Aquin condamne car c’est réifier les gens (il faut être simple et se contenter de peu, 1 Tim 6,8). Cazalet est alors le grand maître qui veut, de manière sophistique, « éclairer l'homme sur ses droits et ses devoirs ». Dès qu'il comprend que la Révolution va tout centraliser à Paris et retirer des droits importants aux Béarnais, comme l’expropriation pour cause d'utilité publique portant atteinte à la famille, Cazalet lâche l'affaire (en juin 1789) et se retire définitivement de la politique.

          
            </p>
          </div>
        )
      },
       {
        titre: "Le Béarn face à la Révolution",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Mourot, député à Paris, considère que le système béarnais avec ses fors millénaires (la “constitution béarnaise”) symbolisant les libertés béarnaises (Louis XIV, XV et XVI avaient juré personnellement de les respecter) est un mélange équilibré entre monarchie, aristocratie et Tiers État. Les États de Béarn affirment que la loi existe avant le roi, que le souverain doit respecter la loi et que le pouvoir exécutif doit rester soumis à celle-ci ; ils craignent alors que la France ne détruise leurs institutions locales par leur nouvelle Constitution (limiter le pouvoir du noble pour l’avoir à sa place). Après l'abolition des privilèges — Paris ne se soumet pas aux Fors et peut faire ce qu'elle veut des Béarnais sans les connaître —, Mourot démissionne du Comité féodal. À Salies — qui a son privilège vital (vendre son sel) depuis Catherine de Bourbon en 1587 (pour prendre l’eau salée, il faut habiter Salies et être fils ou fille de Part-Prenant, les cadets et cadettes doivent aussi être mariés, et le tout est organisé via leur propre démocratie) — des riches avaient confisqué des bois donnés par Jeanne d’Albret (en 1572) et Salies accueillait plutôt favorablement le rattachement à Paris pour préserver ses privilèges... Dans ce bouleversement territorial, Pau perd son statut de chef-lieu au profit de Saint-Palais (sur la Bidouze), mais par manque de compétences administratives locales, ce statut revient finalement à Pau.

   
   </p>
          </div>
        )
      },
      {
        titre: "La Démocratie Directe au Labourd",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Jusqu’à la Révolution — qui fait suite à celle des États-Unis, lancée après que la loge maçonnique St. Andrew’s Lodge de Boston a acquis la Green Dragon Tavern, événement qui mettra le maçon Washington au pouvoir, aidé entre autres par Haym Salomon, avant que des ésotéristes ne se succèdent à sa tête, comme Obama, Bush, Truman ou Ford —, il y avait une démocratie directe au Labourd via le Biltzar. Ce système s'avère proche de l’idéal de Rousseau (apostat du protestantisme qui a convolé avec sa “mère adoptive”), mais appliqué dans le cadre labourdin : sans noblesse décorative, ni clergé politique, ni bourgeois placés au-dessus des pauvres. Chaque fille aînée ou fils aîné est chef de maison et participe publiquement à l'assemblée villageoise pour veiller au bon fonctionnement de la cité et statuer ouvertement sur les choix vitaux de la collectivité. Ensuite, le délégué (élu par les chefs de maison) se rend au Biltzar pour y exprimer l'avis de sa communauté, et non le sien. Enfin, le syndic, un salarié compétent en droit, gère les affaires courantes. À cette époque, Paris n'impose aucune loi, et des idéologies ésotériques et lucratives (telles que l'androgynie de Comenius, liée à l’Unesco qui a influencé le collège invisible) ne sont pas imposées. Au niveau des métiers, au XIᵉ siècle, les femmes basques sont commerçantes et les hommes sont pêcheurs, illustrant une parfaite complémentarité.

          </p>
          </div>
        )
      },
      {
        titre: "La Fin des Libertés du Labourd",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Après que le basque Henri de Belsunce fut mangé par les républicains, les Labourdins perçoivent initialement dans la Révolution une opportunité d’autonomie totale, en espérant obtenir des délégués locaux parlant leur langue. Mais la Révolution détruit rapidement les libertés de la démocratie labourdine. Le député du Labourd, Garat le Jeune, suivant fidèlement les directives de son peuple, s’écrie : « Ma province proteste ! » lorsque la Révolution efface le Labourd de la carte — comme les autres provinces de France —, brise l’unité du Pays basque et le fusionne de force avec le Béarn dans les départements conçus par l’« abbé » maçon Sieyès, partisan du doublement des députés du tiers état, du vote par tête et de la création de l’Assemblée nationale. La nuit du 4 août provoque alors une déshumanisation administrative ainsi que la destruction des structures traditionnelles de la vie sociale, mettant fin au défi des vassaux. Cette dynamique fait suite au mensonge de Camille Desmoulins (franc-maçon du GODF, tout comme le prince losengier Philippe "Égalité" d’Orléans qui tuera son cousin le roi à la suite de la politique anti-noble menée depuis Louis XIII avant de se faire occire) le 12 juillet, qui lance la Révolution. Celle-ci débouche sur la décapitation du gouverneur de Launay — qui a pourtant dîné avec les assaillants en gage de bonne foi, obtenant la promesse qu'aucun sang ne sera versé à l'ouverture des portes — et du prévôt Flesselles. Leurs têtes sont portées au bout de piques pour saluer leurs « nouveaux maîtres » (Henri IV). La Révolution met en place un jeu de l’oie où la figure d’Henri occupe une place importante ; son corps sera profané et son cœur brûlé. Dans le catholicisme, le cultuel n’écrase pas le culturel (St Paul adaptait son discours aux communautés, il le tournait vers les courses ou la citoyenneté…), il l’élève (retirer le péché des cultures) : ainsi, un Breton n'est pas un Basque tout en étant pleinement catholique. À l'inverse, la colonisation intérieure de la République écrase ces cultures et ces différences.


   </p>
          </div>
        )
      },
      {
        titre: "Pierre Hourcastrémé Face à l'Église",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Sous la Monarchie, si une communauté faisait la même chose pendant 10, 20 ou 30 ans sans que le seigneur ne proteste, cela devenait un droit acquis   (une "franchise" ou un "privilège") différenciant les peuples de France.   En 1789, la DDHC, en totale opposition au droit divin (ils évincent les nobles, l’ordre, et l’Église, le frein, pour faire ce qu’ils veulent et non servir le peuple), est signée sous les auspices de l’Être Suprême (concept ésotérique) au nom de la liberté de l’homme (Satan dans l'ésotérisme) avant la mort du lieutenant du Christ (celui qui a vaincu Satan) et retire de nombreux droits comme l’expropriation pour cause d'utilité publique. Les terres de l’Église sont revendues aux bourgeois, qui seront désormais forcément favorables à la suite de la Révolution puisqu’elle garantit les terres qu’ils ont achetées (St Thomas). Plus tard, Lyon n'ayant pas choisi la bonne faction républicaine, Paris lui déclare la guerre. Les Lyonnais sont alors mitraillés : 44 000 boulets, bombes et autres obus tombent sur la ville, et il est inscrit au centre-ville : « Lyon fit la guerre à la liberté, Lyon n'est plus » (la liberté quand ça ne touche pas aux affaires de l’État). Les ésotéristes (la luxure rend bête, St Thomas) autorisent bien évidemment toutes les pratiques personnelles (on peut désormais manipuler quelqu’un et le sodomiser sans aucune sanction, réifiant les gens comme les révolutionnaires Sade et Mirabeau) car ils ne suivent pas des fors ou le droit canon conçu par des gens ordonnés. On vit désormais entouré de principes sataniques et d'horreurs, ce qui se rapproche de l’idéal de Rousseau. Cette vision est partagée par le maçon de Navarrenx Pierre Hourcastrémé, avocat à Pau, très anticlérical et partisan du sola scriptura. Ce dernier veut transformer la liturgie chrétienne en une religion civile — ce qui se concrétisera historiquement, le baptême civil existant encore aujourd'hui, encouragé par les municipalités socialistes et communistes — et déclare préférer l'esclavage perpétuel à la mort, mais finit tout de même par être dégoûté par la tournure de la Révolution. Ce destin contraste avec l'attitude de l’humble sainte Marcelle (le pouvoir matériel étant soumis au discernement spirituel, on est tous serviteurs et responsables de tous, contrairement à ce que prétend la propagande républicaine méprisant le peuple alors plus vertueux) ou de figures comme Ste Bernadette Soubirous et Ste Lúcia dos Santos. Toutes deux reçoivent des   messages (en gascon pour Bernadette) comme : « Tu souffriras sur terre, tu auras ta récompense dans les cieux », et non la promesse d'être «   heureux dans des loges avec quatre personnes ». Toutes restent profondément humbles après leurs apparitions. 
 </p>
          </div>
        )
      },
      {
        titre: "Le Martyre de Marguerite Rutan",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Dans une famille de quinze enfants, la bienheureuse Marguerite Rutan aide son père au travail avant de devenir sœur (Fille de la Charité). Elle dirige l’hôpital de Pau, œuvre pour l'aide aux enfants, puis devient la première dirigeante de l’hôpital de Dax. En 1793, elle refuse de prêter serment à la Constitution civile du clergé et de se soumettre à la République, un régime faisant l’apologie du péché avec comme devise “liberté, égalité, fraternité ou la mort”. La République le lui reproche (suivant ses lois) et la fait arrêter. Devant le tribunal républicain, elle réitère son refus et le régime l’assassine en la condamnant à la guillotine (« Pour être fort, il faut être craint », comme disait Macron en 2025 aux côtés de ses ministres « soldats de l’an II » qui produisent chaque jour 666 assassinats par avortement). Marie Vivé voit ses vœux annulés par la Révolution car elle n’a que 17 ans, elle rentrera à Salies et prêtera serment à la Liberté et à l’Égalité. Ce même régime — mené par les réseaux du GODF (Ferry, Manuel Valls, Mélenchon ou encore le trio, banquier exhibitioniste Maurice Rouvier de la commune de Marseille, Briand et Combes de la séparation de l'Église et de l'État, icelui qui a fermé plus de 2000 écoles religieuses a été trahi, comme Robespierre qui faisait face au système de Cloots) — expulse sainte Léonie Aviat et ses religieuses un siècle plus tard pour détruire la seule véritable barrière face au système bancaire : la morale de Dieu !

    </p>
          </div>
        )
      },


  {
        titre: "La Déportation des Villages Basques",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
En avril 1793, Dartigoeyte dénonce le « fanatisme » des Basques — en réaction aux déportations du clergé, à l'élimination de 96 % des religieuses de France et aux massacres de septembre de Danton, proche (par l'intermédiaire du "religieux” Chabot) de Dobruška (faux banquier et rabbin juif converti et anobli qui a fondé une secte kabbaliste voulant reconstruire sans Révélation ni morale avec Brunswick de Valmy) qui a sa communauté active en Allemagne selon Cloots, les loges sont fermées pour éviter une contre-révolution — qui refusent de se soumettre à la propagande républicaine, ce qui pousse le pouvoir à ordonner au général Dumas de les « terrasser ». Dès novembre 1793, les « aristocrates locaux » (jugeant les Labourdins comme une exception , traiter les êtres humains comme des objets lucratifs dès leur conception un principe républicain) sont accusés d'espionnage pour le compte de l'Inquisition espagnole. Ces « aristocrates » (paravent) ne le sont que pour la République car ce sont des paysans, des artisans et des domestiques. Par la suite, la République définira elle-même ses pseudo-attaques pour ne plus faire erreur (les inversions sémantiques et épouvantails : «arriéré», «moyenâgeux» ou «raciste» de Mitterrand via les planches du GODF, pour protéger l’immigration qui baisse les salaires face au PCF au nom du “grand patronat”, à l'instar des «papistes» ou «idolâtres» des protestants, pour éliminer les gens bons) en pratiquant une sélection partiale des faits historiques sur la base d'une pétition de principe favorable à la centralisation parisienne. C'est d'autant plus absurde car les Labourdins se trouvent en mauvais termes avec la Navarre espagnole, les habitants de Sare ayant autrefois aidé Louis XIV à Vera de Bidasoa, et même la République naissante. Ce sont des villages entiers (Sare, Ainhoa...) qui sont déportés dans des camps de concentration, au son de La Marseillaise du franc-maçon Rouget de Lisle — qu’il chante chez son frère de loge, le baron protestant, maçon, illuminé et fils de banquier anobli par Louis XV  Philippe Frédéric de Dietrich — (le « sang impur » repris par Lénine à sa sortie du wagon) et sous l'effigie de la Marianne bleu-blanc-rouge (« sainte Marianne » selon le porphyrogénète Debret). Au milieu de ces épreuves, Pierre Iharour, après un long supplice, parvient à sauver des objets liturgiques. Il ne s'ensuit aucune attaque personnelle de la part des victimes, car se plaindre d'un être humain est spirituellement mauvais, chacun étant lui-même pécheur, la contestation se dirige uniquement contre l'État, à l'instar des politiques d'amnistie de Jeanne d'Albret et de pardon d'Henri IV. Nonobstant cela, Biarritz subit plus tard des bombardements au nom de la « Nation » par les forces alliées menées par les maçons Churchill, Eisenhower et Roosevelt (dont l'épouse signera la DUDH aux côtés du maçon juif bayonnais Cassin) et même des changements de noms de rues pour détruire son histoire.

  </p>
          </div>
        )
      },


{
        titre: "Le Curé Capuran",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le curé Capuran, prêtre jureur qui a fourni des vases sacrés à la République (en échange d'une pension de 800 livres), demande l'abolition du culte à Salies. Il souhaite également que l'église Saint-Vincent soit transformée en temple de la Raison (le culte de la République), arborant l'inscription requise : « Le peuple français reconnaît l'Être suprême et l'immortalité de l'Âme ». La société populaire y tient désormais ses réunions. De plus, il appuie la disparition des emblèmes religieux de l'espace public pour les remplacer par des symboles républicains, comme l'élévation d'un autel de la Patrie et la plantation d'un arbre de la Fraternité.
  </p>
 
          </div>
        )
      },

       {
        titre: "Guider les âmes vers Dieu",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Lorsque je m'adresse à un Béarnais, je m'appuie sur la tradition béarnaise (la légitimité) en harmonie avec la vision de l’Église catholique (Marc 8:33) — car le Béarn est catholique (la Vérité) — et non sur un impérialisme idéologique païen qui met le corps au-dessus de l’âme (jusqu’à l’écraser, la volonté du diable), l’objectif d’un humain est de devenir saint et de construire des saints (pas suivre des idéologies éphémères hédonistes et séculières pro-péché) à l’instar des apôtres avec St Paul (un événement ne définit pas une personne, ce n’est qu’un accident car elle est créée par Dieu, par contre si elle se définit comme pécheresse, c’est une possibilité de contamination donc un grand danger, si on va dans un hôpital pour contaminer les gens (analogie de l’âme), ils vont mourir), “s'imaginer le faire et compatir avec le pêcheur" comme le disait sainte Catherine. Dieu est un Dieu d'ordre (comme le monde est ordonné) que l'on craint de décevoir parce qu'il nous aime à l’instar d’un père avec son enfant (il le laisse faire seul parfois pour qu'il progresse) ou son chat (il sait mieux que nous ce qui est bon pour nous, même si on ne comprend pas sur le moment). L'être humain est ordonné à la vie dès sa conception, sa respiration même étant téléonomique (l’ordre est le bien, le désordre le mal, comme stopper sa respiration mène à la mort, l’ordre de la vie n’est pas de s'annihiler avant la naissance). Aimer, c’est avoir le courage de corriger l’autre pour qu’il reste éclairé et dans l’ordre (la « Sainte Colère »). Ce n’est pas le juger par orgueil, par haine — “Celui qui n'aime pas son frère demeure dans la mort”, 1 Jean 3:14, si on juge normal de détester un homme pécheur, Dieu (la perfection) pense quoi de nous, pécheurs ?, Mt 7,12 — ou par biais de conformisme (“le salut de l'âme du prochain prime sur notre vie corporelle”, St Thomas). En effet, nous portons une responsabilité lorsque nous conseillons ou approuvons le mal (propagation du péché, détester les gens publiquement), à l'image de la contraception d’État ou de l’euthanasie (symbolisant l'individualisme —antithétique pour ces prétendus socialistes—, je n'aide pas les autres donc ils ne m'aident pas). Il ne faut pas conforter l'autre dans son péché mortel (« prendre le fruit », car le péché noircit l’âme) ni y consentir (c’est l’anti-révélation de Voltaire sécularisé au XXe siècle, le relativisme) par des illusions comme un sophisme des deux torts. Ne pas regretter un péché mortel conduit à l’enfer, et égarer son prochain est fatal (le Christ a pris ces péchés-là sur la croix), ce qui se fait souvent par faiblesse (Adam). Les saints sont morts pour avoir refusé l'idéologie dominante afin de faire vivre la vraie foi et non “le veau d’or” (pervertir Dieu selon ses sentiments du moment), le progrès consiste à s'inspirer d'eux pour une progression constante (progresser sans la Révélation, comme la maçonnerie, c’est régresser) et non s'asservir au libéralisme, encore plus arriéré que celui des tribus païennes de l’Antiquité. Pourtant, c'est ce que souhaitent les maçons au service des banques, ils servent ce même principe dirigé contre le corps et l’âme de leurs sujets. Il faut toujours définir ses termes lors d’une prise de parole (tactique de l'encre de seiche ou sophisme d'ambiguïté) et juger le principe des dires des locuteurs (en analysant l’origine de leurs définitions préalables pour évaluer la légitimité de cette source) afin de ne pas tomber dans le sophisme (à l’instar de rentrer dans un mauvais principe, comme l’individualisme, alors qu’on y est contre d’office, on ne respecte pas l’erreur) tout en étant ouvert (ouvert à la Vérité, c'est ne pas tomber dans le sophisme de l’ouverture d’esprit relativiste qui consiste à écouter "vérité comme mensonge" sans jugement pour continuer de "faire ce qu’on veut", cela revient à être fermé vu qu’on ne tient compte de rien). Seule la vérité rend libre et heureux, sans que l'on s'invente des chaînes matérielles souvent occultes comme le concours sophistique, propagandiste et aliénant de « la plus belle femme de France » (inventé par l’anti-catholique de Waleffe en aversion à la canonisation de Jeanne d’Arc). Tous les chefs d'État légitimes du Béarn dirigeaient (lorsqu'ils étaient lucides) en se basant sur le Paradis et l'Enfer, et non sur des inventions philosophiques, ils ne voulaient pas offenser Dieu. Il faut vivre chaque jour comme si, le soir même, nous devions paraître devant Dieu, cela implique de chercher constamment à accomplir Sa volonté par le discernement : les dons que nous recevons peuvent porter de bons fruits comme des fruits amers, se remettre en question sans juger l'autre face à soi (avoir de la haine c’est objectivement du poison, donc conforme aux enseignements du Christ, il faut voir les gens comme des instruments de Dieu dans nos vies) ou avoir trop de déconcentration (une obsession qui prend le dessus sur la vérité, c’est un péché qui crie vers le ciel, et on n'aurait jamais envie de boire du sirop si on n'en avait jamais bu). Devant le Christ, on ne pourra pas dire : « Alors lui, il a fait ça, mais moi j’ai fais moins pire donc c'est bon ». On ne connaît pas l'intention de l'autre. Il faut juger selon la justice, et non pas pseudo-sonder son esprit. Il faut guider ses frères vers Dieu (Luc 12, 47:38), et donc vers la vie (vouloir son bien donc ne pas vouloir qu’il pèche). Ce guidage commence par le respect des lois fondamentales (pour la vie) des Béarnais, qui existent depuis plus d'un millénaire sous la vraie Église de Dieu. C'est tout l'inverse de les exterminer dès leur conception (la vie après l'accouchement serait-elle plus utopique que celle après la mort ?) et/ou de les mettre en état de péché mortel, comme le voudraient les banques pour leur business. 

 
  </p>
          </div>
        )
      }
     
    ]
  },


};

const worldData = {
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
   
  
     'eglise': {
    titre: "Naissance de l'Église", 
    periode: "Antiquité",
    resume: "Jésus-Christ vient fonder son Église sur saint Pierre",
    introduction: "Aux origines de l'Église qui a façonné l'Europe…",
    image: "/images/histoire/eglise.jpg",
    sections: [
      {
        titre: "La Primauté de Saint Pierre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
  La religion chrétienne (Jacques 1,27 ; 2 Timothée 3,2) a progressé par la personne de Pierre (et de ses successeurs) pour qui Jésus a spécifiquement prié afin que sa foi ne défaille pas et qu'il « affermisse ses frères ». La lettre d’Agathon du 6e concile : « Pierre a parlé, c’est dogmatique ». Jésus, ayant reçu du Père la mission de Berger, la confie visiblement à Pierre en changeant son nom pour une raison précise (en grec, Petros est le masculin de Petra à la période post-Alexandre) et lui déclare : « Tu es Pierre, et sur cette pierre je bâtirai mon Église », « Je te donnerai les clefs du Royaume » et « Pais mes brebis ». À l'image de Moïse transmettant son autorité à Josué, Jésus donne à Pierre une autorité visible : dans les Actes, ce dernier prend constamment l’initiative comme pasteur de l’Église (1er à parler, 1er à faire un miracle, il choisit le successeur de Judas). Le bâton à prendre est mentionné dans Marc 6 et pas dans Luc 9, car c'est Pierre qui a raconté l'histoire à Marc. De plus, l'Apocalypse montre que Jésus détient les clefs de David, confirmant l'existence de l'autorité du Royaume, tout en confiant son exercice terrestre à Pierre. Saint Ignace d'Antioche précise d'ailleurs explicitement que l'Église de Rome « préside » dans la région des Romains, et dès l’an 96, Clément, 4e pape, intervient avec autorité à Corinthe alors que l'apôtre Jean est pourtant vivant, prouvant sa primauté. Le fait que les évêques (garantis par l’imposition des mains, Actes 1,26) aux trois coins du monde (de Lyon à Rome, d'Antioche à Carthage) proclamaient exactement la même foi sans moyens de communication modernes prouve que l'Esprit Saint maintient l'unité depuis la Pentecôte, cinquante jours après la résurrection du Christ (œuvre de toute la Trinité comme chaque action divine). Laconiquement, la Sainte Trinité c’est : le Père engendre le Fils éternellement, donc sans antériorité chronologique (à l'instar d'une ampoule allumée qui éclaire une pièce : la pièce est éclairée par l'ampoule, mais celle-ci n'est pas antérieure), et le Saint-Esprit procède éternellement des deux (on peut utiliser l'analogie augustinienne de l'âme, bien qu'imparfaite, où la mémoire engendre l'intelligence, desquelles découle la volonté).
  
 
  </p>
          </div>
        )
      },
      {
        titre: "Deux Mille Ans de Vérité",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Depuis 2000 ans, l’Église tranche les erreurs par ses décisions (comme l'institution des diacres dans Actes 6, le célibat des prêtres en l’an 306 pour la qualité de l’enseignement, la Bible à la fin du IVe siècle) et ses conciles (du premier à Jérusalem dans Actes 15 vers l’an 50 jusqu'à Vatican II en 1965). Malgré les infiltrations historiques — de Judas aux hommes dénoncés par Saint Pie X qui feignent la foi pour tromper les simples, en passant par le Père de l'Église Saint Irénée visant ceux qui prêchent un autre Christ, un autre Père de l'Église Saint Cyrille avertissant contre les ministres divisant la foi par calculs séculiers ou les abbés de la Révolution ou encore au XXe siècle, l'archevêque Marcinkus (directeur de la banque du Vatican) impliqué dans le scandale P2 via le maçon Calvi. Elle ne se contredit jamais malgré la grande densité des conciles (comme Nicée en 325, convoqué par Constantin pour la paix de l'Empire, personnellement peu concerné par la théologie) qui s'appuient sur les Pères de l’Église, gardiens des enseignements du Christ pour distinguer la vraie doctrine des hérésies face à la gnose (ésotérisme entraînant des sectes où violer les lois morales de ce monde serait une façon de s'en libérer, le monde “étant une oeuvre du mauvais”) des Actes avec Simon le Magicien qui veut avoir le pouvoir des apôtres contre de l’argent (déjà de l’ésotéro-lucratif anti-Christ), l’islam avec Mahomet (qui nous appelle “gens du livre” en parlant d’un soi-disant Évangile), le mormonisme avec Smith (qui utilise la bible Louis Segond mal traduite avec un canon suivant les juifs), le donatisme face à un Constantin soucieux de préserver la paix ou encore la double prédestination de Calvin (récusé car Dieu est comme au centre d'une sphère, il embrasse du regard tous nos chemins et connaît nos choix sans nous y contraindre) basée sur la Bible (méthodologie inversée), toutes permises par Dieu pour un plus grand bien (sans Luther pas de Saint Bellarmin…). Il nous incombe de travailler au salut du plus grand nombre, quel que soit le contexte. Pour ce faire, nous devons suivre le phare qu’est l’Église divino-humaine, assurément faible par le libre arbitre de ses membres (un évêque argentin à refuser la communion dans la bouche en 2025 en aversion avec la norme), mais dont la foi demeure inébranlable par le sang du Crucifié et sa prière pour le successeur de Pierre (le pape). Une foi à ne pas pervertir au gré de prétextes sophistiques. À ce compte, l'un pourrait rebaptiser Marianne "Jules" sous prétexte que les révolutionnaires se référaient à la République romaine ; un autre, décréter qu'il faut chanter La Parisienne plutôt que La Marseillaise parce que la capitale est Paris ; un troisième combinerait les deux pour créer "Le Jules et la Parisienne". On se retrouverait alors avec trois entités protestantes.

</p>   </div>
        )
      },
       {
        titre: "Écriture, Tradition et Magistère",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    La foi repose sur 3 piliers : l’Écriture, dont le canon fut fixé par le pape Damase Ier à Rome puis validé à Carthage à la fin du IVe siècle pour clore le différend entre Saint Augustin et Saint Jérôme (pères de l'Eglise), ce dernier s'y est soumis en demandant violemment à Rufin d'en faire autant, illustrant le De Veritate de Saint Thomas d'Aquin qui rappelle que seule l'Église est infaillible, non les Pères (mais le consensus des Pères). De plus, 2 Timothée 3,15-16 valide le livre de la Sagesse, et le Nouveau Testament cite la Septante (corroborée par les manuscrits de Qumrân pour Hébreux 1,6) et non le texte massorétique (7 livres de moins), dont les voyelles furent ajoutées tardivement par les Juifs après avoir perdu leur autorité (parabole des vignerons), Augustin affirmant même qu’ils y avaient censuré des livres sur le Christ. Cette Écriture découle d'un autre pilier, la Tradition orale, l'Église étant la « colonne et l'appui de la vérité » (1 Tim 3,15) : c'est elle qui tranche, clarifie et a canonisé la Bible via les Pères (qui étaient catholique, « Là où est Jésus-Christ là est l’Église catholique »  Saint Ignace, disciple de Pierre, en 107) parmi une pléthore d’évangiles, à l'image de Saint Irénée (disciple de Polycarpe de Smyrne, lui-même baptisé bébé par "immersion dans la Trinité" et disciple de Jean) authentifiant l'histoire des vrais Évangiles. Selon Jean 21, 25, tout n'est pas consigné dans la Bible (qui compte 73 livres). C'est comme si je disais que je parle à mes disciples près d'un filet dans un village : je ne vais pas tout décrire (la place des nuages, le temps, le nombre de bancs...). Ce sont mes disciples qui le transmettront oralement ("c'était un filet de tennis à Ascain"), et là, les disciples du Christ ne se trompent pas, car l'Esprit Saint guide l'Église (Actes 15, 28). Cette transmission orale (Thess 2:5 et 2 Thess 2,15) précède l'écrit — Abraham n'ayant rien écrit avant Moïse —, alors que la Bible ne s'autoproclame jamais autorité unique, omet l'auteur de l'Évangile de Matthieu, mentionne une lettre perdue dans Colossiens 4,16 et Actes 20,35 possède un agraphon (proche de l’effet Ben Franklin). Enfin, le Magistère scelle cette structure, Jésus affirme « Qui vous rejette, me rejette » (Lc 10,16), donne en Matthieu 18,18 une autorité morale et spirituelle via le concept juif de « lier et délier » (condamner/absoudre) permettant l’unité de l’Église par les excommunications, et institue en Jean 20,22-23 et Jacques 5,14-15 la confession, poussant Saint Cyprien à déclarer qu'on ne peut se réconcilier sans les prêtres et Saint Augustin à interdire de se confesser à Dieu seul alors qu'Il ordonne d'aller au prêtre. De plus, c’est le Christ qui agit à travers chaque sacrement donc la validité ne dépend pas de la sainteté de la personne (pape Etienne). 

      </p> 
      
         </div>
        )
      },
       {
        titre: "Les Signes Visibles de la Foi",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Depuis lors, de nombreux saints sont morts martyrs (avec joie) face aux Romains en refusant de pervertir leur foi pour le monde (nous la préserver) et peuvent aujourd'hui intercéder pour nous auprès de Dieu car on ne meurt pas en Christ. Ainsi, bien que Jésus soit l'unique médiateur dans l'ordre du salut (1 Tim 2,5), « la prière du juste a une grande efficacité » (Jacques 5,16), et celle des saints, parfaits en Dieu, s'avère encore plus puissante (la prière du Sub tuum praesidium avec la Theotokos datant de 250 ou les prières demandant l’intercession de Pierre sont antérieures à la Bible). Ce rôle spirituel s'illustre aussi à Bethléem avec Rachel (évoquée en Jérémie 31 et Matthieu 2), le Midrash Genesis Rabbah 82 dit qu'elle y est présente pour faire miséricorde et prier. En parallèle, l'importance des reliques est validée par l'Écriture, à l'image de 2 Rois 13:21 où le contact avec les ossements d'Élisée ressuscite un mort, ou du témoignage historique du martyre de Polycarpe avant l'an 200. Dieu lui-même a ordonné la création d'images sacrées : des chérubins dans le Temple (1 Rois 6,23-29) et sur l'Arche (Exode 25,18-22), demandant même à Moïse de fabriquer des statues (Exode 25:18-20) devant lesquelles Josué et les anciens se prosternaient. Les Coptes séparés après le concile de Chalcédoine (451) utilisent des icônes, tout comme il y en avait au Temple de Salomon (Flavius Josèphe). De plus, Dieu (qui est notre fin, l'enfer étant d'être coupé de Dieu) est le meilleur instructeur : il sait mieux que nous ce qui est bon pour nous, comme un père qui dit “non” à son fils sans que l'enfant comprenne (ou un chat avec son maître). 
          
          
           </p>          </div>
        )
      },
       {
        titre: "Marie, Nouvelle Ève et Mère",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Marie est une créature que Jésus nous donne comme mère (Jean 19,26-27), choisie par Dieu pour devenir la Mère du Seigneur fait homme (Luc 1,43) depuis la Genèse 3,15. Contrairement à Zacharie, elle ne doute pas de Dieu, marquant ainsi la fin de l'Ancien Testament, et son intercession à Cana prend le contre-pied d'Achaz dans Isaïe 7. Honorée par Jésus (loi de Moïse), elle est la Nouvelle Ève et la première-née de la nouvelle création (Sainte Anne ayant eu le paradis en son sein selon Saint Jean Damascène). Sa vénération est très ancienne, comme le prouvent le Sub tuum praesidium du IIIᵉ siècle (antérieur à la Bible) et Saint Éphrem (IVᵉ siècle) qui la qualifie de « médiatrice du monde entier ». De plus, le terme kecharitoménè utilisé par l'ange dans Luc 1,28 (« toi qui as été comblée de grâce et qui le restes durablement ») consacre son Immaculée Conception. Saint Athanase d'Alexandrie la compare à l'Arche de Noé (homélie du Papyrus de Turin) car toutes deux sont couvertes par l'Esprit au dessus du péché (sous l’eau du déluge et sous l’eau du baptême, qui sauve et peut être de désir comme avec le bon larron ou de sang), une association visible en Apocalypse 11,19 où l'Esprit Saint et l'Arche apparaissent juste avant la femme d'Apocalypse 12. Ainsi, détenir cette Arche de l'Alliance qu'est Marie garantit la victoire : de même que l'Arche de Noé a vaincu le péché avec ses enfants, nous devenons les enfants de Marie au pied de la croix, en route vers le paradis.
 </p>  

  </div>
        )
      },
      {
        titre: "De Jérusalem à la Rome Chrétienne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Tandis qu'Ésaïe prédit le transfert vers une autre nation et que Jérémie annonce le châtiment de Jérusalem (en lien avec le Christ et le figuier), Daniel prophétise la destruction de la ville par un chef (ce sera Vespasien), un événement remarqué mais mal interprété par l'historien Flavius Josèphe (suivant la prophétie de Matthieu 24). Saint Éphrem souligne le passage de Juda à Judas (comme les marchands du Temple attirés par l'argent). La « pierre » de Daniel 2:45 incarne “Pierre” ou le Christ — associé au Psaume 2 et décrit selon Aphraate comme la vigne dont le Père est le vigneron et nous les ceps —, fondant ce royaume qui durera jusqu'à la fin (Daniel 2:44). Ce mouvement, confirmé dans Romains 9 et 10, se déploie lorsque, selon Jean 19 et Matthieu 27, Rome reconnaît la vérité là où les Juifs la rejettent, faisant de Pilate le « prophète du royaume » d’après Saint Éphrem, le bourreau se transforme alors en serviteur, la lance du centurion venant desceller ce que les chérubins avaient scellé dans la Genèse. Les premiers chrétiens, par leur martyre, ont christianisé ex nihilo l'Empire romain afin d'en faire un hôpital pour les malades désireux de se faire soigner (Paul et Pierre font écho à Remus et Romulus), et non un tribunal qui se contenterait de condamner sans rien apporter au salut. Au fil de son histoire, l’Église accorde des tolérances face aux réalités d'un monde où certaines règles ne sont plus applicables partout, confiant aux laïcs le soin de travailler pour tendre à nouveau vers l'idéal et non de “jouer avec le jeu” en érigeant les tolérances en normes.
     </p>     </div>
        )
      },

      
    ], },
  'naissance-france': {
    titre: "Les Mérovingiens", 
    periode: "Temps Féodaux",
    resume: "Sainte Clotilde christianise le Royaume des Francs",
    introduction: "Aux origines de la France, un baptême…",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "Sainte Clotilde et Clovis",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Princesse burgonde née vers 475 à Lyon, Sainte Clotilde voit ses parents et ses frères tués par son oncle Gondebaud, qui s'empare alors du pouvoir sans la faire tuer en raison de son sexe. Remarquée par Clovis, roi des Francs, elle l’épouse vers 492. Chrétienne fervente, elle cherche sans relâche à convertir son époux païen, au sein d'une Gaule qui se christianisait déjà depuis ses débuts par le sang de ses martyrs (sainte Blandine ou saint Pothin), et dont le peuple était désormais profondément chrétien (les anciennes croyances druidiques invoquaient déjà une immortalité de l’âme). Après la mort de leur premier enfant survenue juste après son baptême — Clotilde est contente car il meurt baptisé et sans péché —, elle persévère dans la prière. En 496, lors de la bataille de Tolbiac, Clovis invoque le Christ, remporte la victoire et se fait baptiser. Du peuple jusqu'à son nouveau roi, les territoires de la Gaule se réunissent, marquant ainsi la naissance du Royaume chrétien des Francs, et donc de la France. Sans primauté de l'aîné, elle aurait préféré voir ses fils égorgés que déshonorés. L’infanticide sera condamné chez les Francs, alors qu'il était courant auparavant (à une époque où la femme devait travailler et le mari guerroyer). Cette condamnation est restée en vigueur jusqu’à la Ve République. C'est l'évolution d'un peuple qui, comme tous les autres à l’exception des Juifs, s’est détaché de Dieu. Dans ces autres cultures, l’homme se fait Dieu, à l'image de Prométhée et Zeus, ou du serpent adoré à travers des sacrifices d’enfants chez les Amérindiens. Cette influence se perpétue ensuite en Europe via des sectes gnostiques et ésotériques (comme la franc-maçonnerie). Selon ces croyances, inspirées de la gnose de Simon le Magicien, le serpent serait l'envoyé du vrai Dieu, et l'humanité chercherait à s'extirper de ce monde (ésotérisme), possiblement en provoquant la divinité par des péchés contre nature, tels que la contraception ou l’androgynie de « Comenius » (violer les lois morales de ce monde serait une façon de s'en libérer).

    
    
       </p>
          </div>
        )
      },
      {
        titre: "Le traité d'Andelot de 587",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     L'Espagnole Brunehaut devient reine d'Austrasie (et de fait reine de France) et voit sa sœur, Galswinthe, tuée par Frédégonde. La faide royale débute alors, et le mari de Brunehaut, Sigebert, est à son tour tué par Frédégonde. En 587, au nom de sa sœur, Brunehaut obtient la juridiction sur le Béarn après la mort de saint Gontran, en vertu du traité d’Andelot. Ensuite, elle épouse le beau-fils de Frédégonde, Mérovée, mais Frédégonde fait tuer ce dernier, ainsi que le fils et la belle-fille de Brunehaut. Très intelligente, Brunehaut restaure les voies romaines, veut centraliser le royaume et converse directement avec le pape ou encore avec l'Empire byzantin. Cependant, les grands seigneurs se dressent contre cette politique de centralisation : ils tuent une partie de sa famille puis la mettent elle-même à mort de façon atroce.
      </p>
          </div>
        )
      },
       {
        titre: "Les Crimes de la Reine Frédégonde",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Frédégonde provoque la disgrâce de la reine Audovère pour prendre sa place, avant de la faire assassiner. N'obtenant pas le succès escompté, elle fait ensuite assassiner la nouvelle reine, Galswinthe, pour enfin réussir à monter sur le trône. Pour protéger son rang et sa descendance, elle élimine les fils du premier mariage de son époux, fait violer sa belle-fille, organise l’assassinat du roi Sigebert Ier et fait exécuter l’évêque Prétextat en pleine messe à Rouen. Enfin, après avoir été surprise en flagrant délit d'adultère, elle fait également assassiner son propre mari, le roi Chilpéric Ier.
  </p>
          </div>
        )
      },
       {
        titre: "Sainte Bathilde, l'Esclave devenue Reine",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La reine Bathilde naît en Saxe vers 626. Capturée dans sa jeunesse, elle est réduite à l’esclavage. Achetée par le maire du palais Erchinoald (Archambault), elle gagne rapidement l'estime du roi Clovis II et l’épouse. À la mort de son mari, elle assure la régence du royaume. Au niveau judiciaire chez les Francs, la vie d’une femme respectable et en âge d’avoir des enfants valait deux fois celle d’un homme, et jusqu’à trois fois si elle était enceinte. Elle interdit alors la vente d’esclaves chrétiens sur les marchés des Francs, conformément aux conciles catholiques. Elle supprime également la capitation (un impôt prélevé dès la naissance, puisque selon le catholicisme l’enfant est un être humain, ce qui mettait en danger les familles précaires qui ne pouvaient plus vouer leur enfant à l’esclavage) pour aider à vivre, à l’opposé des états modernes qui aide à mourir. De plus, elle favorise une profonde réforme du clergé en luttant contre la simonie, suivant les décrets du concile de Chalon. Plus tard, elle se retire au monastère de Chelles qu’elle a elle-même fondé (et qui sera détruit par la Révolution). Elle reste la dernière grande personnalité mérovingienne à exercer le pouvoir.

   </p>
          </div>
        )
      }
    ]
  },
  
  'capet': {
    titre: "Les Capétiens", 
    periode: "Temps Féodaux",
    resume: "L'Europe rentre dans la Guerre de 100 ans",
    introduction: "Le mot France se normalise…",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      {
        titre: "La Piété de Sainte Mathilde",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>

Fille du comte saxon Théodoric, Mathilde naît vers 895 et grandit au couvent, élevée par des religieuses. Mariée à Henri l'Oiseleur (qui a vingt ans de plus qu'elle), futur roi de Germanie, elle élève cinq enfants, dont le futur empereur Otton Ier le Grand. Devenue veuve, la reine distribue aux pauvres une partie du trésor royal, ce qui lui vaut d'être dépouillée de ses biens par sa propre famille. Par la suite, les membres de la famille se pardonnent mutuellement. Elle s'éteint finalement dans l’abbaye qu’elle a elle-même bâtie pour son mari, qu’elle aimait profondément.

  </p>
          </div>
        )
      },
      {
        titre: "La première dramaturge de l'Europe",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
  Hrotsvitha devient chanoinesse au monastère saxon de Gandersheim. Elle écrit des poèmes hagiographiques célébrant la sainteté, la foi et la victoire de la grâce divine. Inspirée par le dramaturge antique Térence, elle compose six comédies en transformant les intrigues païennes d'origine en récits qui exaltent la chasteté et la vertu chrétienne. Elle meurt vers l’an 1002, et est aujourd'hui le dramaturge latin d’Europe le plus ancien dont nous possédons les œuvres complètes.

     </p>
          </div>
        )
      },

       {
        titre: "La Confession d'Agnès d'Aquitaine",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Agnès d'Aquitaine, impératrice et mère d'Henri IV, assure la régence du Saint-Empire après le décès de son époux Henri III. Le pape Victor II avait appuyé sa belle-fille Béatrice (mère de Mathilde de Toscane) face aux chanoinesses de Gandersheim (une partie des biens ayant été octroyée à des ministériels) ; Étienne IX inversera la sentence. Puis, avec l'accord de l'impératrice Agnès, l'évêque Gérard de Bourgogne est élu pape à Sienne sous le nom de Nicolas II (il réservera l'élection des pontifes aux cardinaux). Alexandre II est donc élu par les cardinaux. Agnès suscite alors l'élection de l'antipape Honorius II (bon choix laïquement, mais pas théologiquement donc un choix bête), divisant l'Église. Elle s'empresse de prendre le voile mais, par la suite, Annon de Cologne, confesseur d'Henri III, kidnappe son fils : c'est le coup de Kaiserswerth (le jeune roi tentant de s'évader par le Rhin). Annon rétablit le légitime pape. Pour faire amende honorable, Agnès se rend à Rome et se confesse à saint Pierre Damien sur le tombeau de saint Pierre ; pour se racheter, elle exerce une médiation en faveur de l'Église (elle demeure chef de l'Empire jusqu'à la majorité de son fils) et distribue ses biens aux nécessiteux. Elle a fait traduire les ouvrages de Constantin l'Africain et fera l'objet de critiques en guise de prétexte rétroactif aux côtés de Béatrix et Mathilde, au sein d'un prétendu « sénat de femmes » influençant le pape.

</p>
          </div>
        )
      },
       {
        titre: "Mathilde de Toscane, Chef de Guerre",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Fille de Béatrice de Bar, Mathilde de Toscane reçoit une éducation poussée, centrée sur l'étude des langues, le maniement des armes et l’équitation. Très jeune, elle accompagne déjà sa mère sur les champs de bataille. Alors que l'empereur Henri IV veut nommer ses propres évêques pour s'assurer des vassaux fidèles, le pape s'y oppose fermement : Mathilde devient alors la chef de guerre de l'Église. En situation d'infériorité numérique face aux forces impériales, elle pratique l'embuscade et la tactique de la terre brûlée depuis ses forteresses stratégiques des Apennins. Elle va jusqu'à faire fondre ses propres bijoux pour financer l'armée papale et remporte une victoire décisive lors de son attaque nocturne à Sorbara en 1084. Après sa mort en 1115, elle est inhumée au sein de la basilique Saint-Pierre de Rome.

</p>
          </div>
        )
      },
       {
        titre: "Blanche de Castille, Régente Ferme",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
   L’intelligence précoce de Blanche de Castille lui permet d’être choisie par sa grand-mère Aliénor d’Aquitaine pour épouser le futur roi de France. Elle vit à la même période que saint Thomas d’Aquin, qui sait « baptiser » la philosophie d'Aristote et éviter ainsi que les « nouveaux savoirs » grecs arrivés en Europe ne divisent l’Église. Pour aider son mari, elle parvient à faire céder le roi Philippe II Auguste en menaçant de mettre en gage ses enfants. Pendant son gouvernement et ses périodes de régence, elle fait face avec fermeté aux prétentions du duc de Bretagne, du comte de Clermont ou encore d'Isabelle d’Angoulême. Elle explique à son fils (le futur saint Louis) qu’elle préfère le voir mort plutôt qu’en état de péché mortel, et qu’un chef d'État ne doit jamais chercher la popularité, mais se concentrer sur la protection de son peuple — en particulier les plus vulnérables (les embryons, les vieillards, les pauvres et les malades). Soucieuse de justice, elle libère des prisonniers, bâtit une abbaye pour les orphelins et repose finalement dans l'abbaye de Maubuisson, qu’elle a elle-même construite.


  </p>
          </div>
        )
      },
       {
        titre: "L'Exclusion des Femmes du Trône",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Isabelle de France, reine d'Angleterre et fille de Philippe IV, remarque lors d'un banquet à Londres que deux chevaliers normands, les frères Gauthier et Philippe d'Aunay, arborent des aumônières qu'elle avait offertes à ses belles-sœurs l'année précédente. Le roi ordonne une enquête qui confirme l'adultère prolongé de Marguerite de Bourgogne et Blanche de Bourgogne au sein de la tour de Nesle. Le 19 avril 1314 à Pontoise, les frères d'Aunay sont castrés et décapités, tandis que les princesses sont tondues et jetées au donjon de Château-Gaillard. Elles deviendront les deux reines de France, puis Blanche verra son mariage cassé car la marraine de son mari est sa mère (fait exprès, Médicis était celle de Bourbon avec l'idée de la marier au futur Henri III et de pouvoir couper le mariage). Cette crise jette le doute sur la légitimité de la fille de Marguerite. Pour remédier à cela, les femmes sont exclues de la succession royale en 1316 pour éviter qu'une enfant potentiellement bâtarde ne monte sur le trône (théorisée post hoc par la loi salique). C'est une logique de succession qui conduira en 1328 à l'éviction d'Édouard III d'Angleterre au profit de Philippe VI de Valois, devenant l'étincelle du déclenchement de la guerre de Cent Ans. 

</p>
          </div>
        )
      }
      
    ]
  },
  'sainte-jeanne': {
   titre: "La Pucelle d'Orléans",
    periode: "Temps Féodaux",
    resume: "La Providence démarre de Lorraine",
    introduction: "Batailles, Victoires et Triple Donation...",
    image: "/images/histoire/antiquite.jpg",
    sections: [
        {
        titre: "La Mission de Jeanne d'Arc",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Née vers 1412 à Domrémy ("maison du baptiseur de Clovis"), Jeanne d'Arc, qui parle un excellent français, entend des voix dès l'âge de treize ans (celles de saint Michel Archange, de sainte Catherine d’Alexandrie et de sainte Marguerite d’Antioche). Ces voix lui ordonnent de partir à la rencontre du dauphin afin de le faire sacrer à Reims. À cette époque, les Bourguignons s'allient aux Anglais, seul le Mont-Saint-Michel résiste encore à l'envahisseur, et si la ville d'Orléans tombe, le sort du royaume est scellé. Jeanne (à ne pas confondre avec Jeanne la Flamme, qui était une noble guerrière alliée des Anglais) part alors pour Chinon, qu’elle atteint le 6 mars 1429. Elle y reconnaît immédiatement le roi Charles VII, qui s’est pourtant déguisé au milieu de sa cour sans qu'elle ne l’ait jamais vu auparavant, et lui révèle des secrets personnels que personne d’autre ne peut connaître. Convaincu par ce signe, Charles VII décide de lui confier le commandement des troupes, malgré la méfiance initiale de ses capitaines.


 </p>
          </div>
        )
      },
      {
        titre: "Les Succès Militaires de Jeanne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Jeanne va trouver le duc d’Alençon et ses lieutenants et leur affirme qu’elle dispose des meilleurs conseils, car ils « viennent du Roi du Ciel, et que saint Louis et Charlemagne se tiennent à genoux devant le trône de Dieu pour implorer le salut de la France ». Le 4 mai, elle applique une tactique audacieuse et les Français remportent leur première grande victoire depuis des années. Le 7 mai, elle est atteinte près de la clavicule par une flèche qu’elle arrache elle-même de son corps. Dès le lendemain, Orléans est définitivement libérée de l'occupation anglaise. Par la suite, le 18 juin 1429, l’armée française terrasse les Anglais lors de la bataille de Patay. Un seul soldat français y trouve la mort : « Un de trop », déclare alors Jeanne.

 </p>
          </div>
        )
      },
      {
        titre: "Jeanne d'Arc Reine de France",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Le 17 juillet 1429, à Reims, Jeanne demande au roi de lui remettre symboliquement son royaume, ce qu’il fait solennellement. Elle déclare à son tour donner ce royaume au Christ, avant d’ajouter que le Christ le rend ensuite au roi Charles, qui devient ainsi le véritable lieutenant du Christ sur terre (un événement consigné par le Clerc de Spire le 17 septembre 1429). Jeanne sait dès lors qu’elle doit être capturée pour réparer les fautes de la France, ce qui se produit effectivement à Compiègne.


  </p>
          </div>
        )
      },
        {
        titre: "Le Zèle de Jeanne d'Arc",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Pendant son procès, Jeanne tient tête avec courage à des juges ecclésiastiques inféodés à l’Université de Paris, à l'image de l’évêque Pierre Cauchon. Ce dernier a adhéré au traité de Troyes (profondément anti-français) pour obtenir l'évêché de Beauvais, et devait se préparer à rejoindre le concile de Bâle. Jeanne récuse ce juge corrompu au service des intérêts anglais et est brûlée vive (1Co 9,27, Col 1,24 2Co 12,9). Par ailleurs, elle dénonce fermement les hussites comme hérétiques, car ils prêchent la libre interprétation de l’Écriture : « Vous ruinez les sacrements, vous déchirez la foi, arrêtez, ou je viendrai vous passer au fil de l’épée ». Faisant preuve du même zèle que saint Jean Chrysostome ou, plus tard, qu'Isabelle la Catholique, sainte Jeanne d'Arc s'en prend directement à ceux qu'elle considère comme la source du mal, et non au peuple, agissant par pure charité pour Dieu et, par conséquent, pour les hommes.

    </p>
          </div>
        )
      },
        {
        titre: "La Justice Morale d'Isabelle",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Afin de stabiliser son royaume, la servante de Dieu Isabelle de Castille parvient, grâce à son contexte géopolitique, à instaurer l'Inquisition espagnole (le peuple était pour). Cette institution, établie dans toute l’Espagne unie politiquement autour de lois morales (après la Reconquista), se montre très sévère envers les riches (ils pouvaient payer la jizya avant) — afin que la Couronne demeure maîtresse chez elle devant Dieu et ne pactise pas avec des puissances d’argent aux projets matériels (pour ne pas casser le système) dangereuses pour les âmes car à l’inversechâtiait seulement les gens sans moyens (pas de projet pro-enfer) pour leur salut (par exemple, une femme pauvre qui a tué des enfants a reçu 200 coups de fouets avant d’être relachée) — ainsi qu’envers le clergé, tenu de faire preuve d’une exemplarité morale et d’une bonne foi (par leur autorité, ils peuvent égarer le peuple, pour casser le système par exemple). Sur le plan dogmatique, un prêtre en état de péché mortel administre malgré tout des sacrements valides, selon sainte Thérèse d'Avila, et « même le baptême de Judas était valide » selon saint Augustin (tous deux étant qualifiés du titre de "docteur" de l'Église, traitant ce titre sur un pied de parité absolue). En contrôlant, instruisant et corrigeant — contrairement aux autres tribunaux civils de l’époque, bien plus expéditifs — la reine entend assurer le salut de tous ses sujets étant chacun dès son origine ordonné à la vie et, sur le plan téléonomique, comme un vieillard en puissance, sans soumission à des banquiers sédentaires. Pour éviter le péché, il faut extirper ce qui le provoque, l’apologie étant considérée comme pire que l’acte lui-même. Certains sujets ignorent simplement que la fornication (2 personnes qui ont une relation sexuelle deviennent une seule chair, ne pas réifier son prochain) ou l’usure excessive constituent un crime, et que le consentement est une circonstance aggravante. Le fait de se dénoncer soi-même témoigne du repentir, et la peine s'en trouve forcément allégée. Ainsi, un acte isolé de sodomie n’entraîne pas la peine de mort — sauf pour les riches, les membres du clergé ou aux débuts de l’institution —, mais la persistance obstinée dans le crime, qui ne relève plus d’une simple perte de lucidité mais d’un refus délibéré de se repentir, est lourdement sanctionnée afin de protéger les peuples de ces prédateurs qui les entraînent dans un péché endurcissant l’âme et obscurcissant la conscience. De plus, une souffrance, une humiliation ou une punition peuvent devenir une occasion de repentir ; sans repentir, c’est la séparation d’avec Dieu, l’enfer. Une grande partie de la communauté musulmane se convertira au protestantisme et se réfugiera en Béarn. 

     </p>
          </div>
        )
      },
       ,
        {
        titre: "La Bataille de Lépante",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Joseph Nasi (banquier juif expulsé d’Ibérie qui fuira d’Anvers où il avait créé une succursale avec le concours de Rabbi Abraham Benveniste, et se mariera à sa cousine) est proche du sultan musulman Soliman le Magnifique (lié par son médecin, le rabbin Moïse/Moché Hamon), ce qui lui permet de libérer sa tante et de s'installer là-bas (le sultan étant intéressé par sa richesse). Le fils de Soliman le fera duc. Il soutient les souverains tolérants Sigismond II Auguste et Maximilien II (ils n'y voyaient pas de problème, mais Joseph lui y voyait une opportunité) et encourage la révolte des Pays-Bas face à l'Espagne (1566, conseil des protestants d'Anvers), qui propagera la légende noire de l’Inquisition espagnole, puis converse avec Guillaume d’Orange. Coligny, proche de Jeanne, voulait s'allier avec les Hollandais protestants (bourgeois en quête d’autonomie politique donc calviniste pour ne pas avoir le frein qu’est l’Église), donc Catherine lui propose d'aller combattre avec eux pour l'éloigner de Jeanne, pendant qu’Élisabeth Ier et Louis de Nassau (comte hollandais, frère de Guillaume d’Orange, ami de Jeanne avec qui elle a intercepté des navires espagnols à La Rochelle et à qui elle offre une horloge avant de mourir), ce dernier exploité par Médicis, soutiennent le mariage Marguerite–Henri pour une coalition anti-espagnole aux Pays-Bas (contrairement à la France, l’Espagne défend le catholicisme face au libéralisme), mais Jeanne a peur d’une ruse (comme avec son mari, presque tué par les Guise). Coligny (allié de Nassau et Orange avec Condé, icelui mort au combat, depuis 1568) préférait avec Élisabeth Ier mais s’y soumet. Au surplus, Joseph saisit des navires français car la France (1569) ne lui paye pas sa dette (au motif qu'il avait menti en ne se déclarant pas juif) et provoque la guerre contre Venise, qui mènera à la bataille de Lépante où les chrétiens l'emportent (par l'intercession de la Vierge Marie selon le pape Pie V), tout en avançant un projet sioniste. 

     </p>
          </div>
        )
      },
    ]
  },
  'calviniste': {
     titre: "Les Protestants",
    periode: "Renaissance",
    resume: "Une hérésie se disperse à travers l'Europe",
    introduction: "De la France à l'Espagne en passant par Genève...",
    image: "/images/histoire/antiquite.jpg",
    sections: [


     
      {
        titre: "L'Autorité de la Reine-Mère",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
À l'âge de onze ans, Catherine de Médicis voit des républicains florentins vouloir attenter à sa vie. Elle prend alors le voile dans un couvent, ce qui lui sauve la vie. Issue d'une célèbre famille de banquiers dont certains membres deviennent papes — qui féliciteront Marguerite de Navarre, alors protectrice des hérétiques, mais par la prière du Christ à Pierre, excommunient l’hérétique (comme il y en a et aura plein) Luther, marionnette instrumentalisée par les princes allemands opportunistes financiers (s'inspirant de la saisie de terres de l'Église et des adultères (la “liberté”) d’Henri VIII, en aversion pour Philippe Auguste qui a dû reprendre sa femme car le pape avait lancé un interdit sur la France, les bourgeois peuvent faire ce qu’ils veulent sans l’Église) —, Catherine monte très bien à cheval, aime la pêche à la carpe ainsi que la chasse au sanglier, au cerf et à l’ours. Elle est profondément amoureuse de son mari, le roi Henri II. Après la mort de ce dernier, la reine se vêtira toujours de noir en signe de deuil perpétuel. Ses enfants craignent beaucoup Catherine, qui les protège avec ferveur. Pendant le siège de Rouen, en tant que reine-mère et en vertu du quatrième commandement, elle s'impose comme la seule dirigeante légitime au nom de la France et n'hésite pas à se promener jusque sous les tirs de canons face aux troupes protestantes. Cependant, sa politique de tolérance et de compromis vaut à la France de traverser huit guerres civiles en l'espace de trente ans, contrairement à l’Espagne sous le régime de l’Inquisition qui n'en connaît aucune durant plusieurs siècles (la guerre d’Espagne n'éclatant qu'après l’abolition définitive de celle-ci par les ésotéristes). Nonobstant cela, sous le gouvernement de Catherine, la France impose la très juste peine de mort pour apologie et réalisation d’un l’avortement (Tu veux occire un innocent ? Tu meurs !), protégeant ainsi ses sujets les plus faibles.

   </p>
          </div>
        )
      },
      {
        titre: "De Médicis aux Idéologies Modernes",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>

Catherine de Médicis, qui a donné la lieutenance générale à Bourbon (le mari de Jeanne) en le forçant à redevenir catholique (comploteur contre le Royaume avec l’Espagne, il changeait de religion politiquement face aux Guise et à l'Espagne), explique à sa fille que « toutes les choses du monde ont deux faces », faisant écho à Plutarco Elías Calles lorsqu'il parle de « tequila à la place du vin » alors qu'il veut simplement détruire l'Église au Mexique. Elle anticipe ainsi les logiques de la République, qui utilise le concept de « divorce entre mari et femme » pour masquer la légalisation de l'adultère (favorisant sa pratique et l'expansion du marché immobilier via le concubinage ou la perversion de l'institution du mariage). Aucun seigneur de Béarn n'autorisera de telles dérives, car ils désirent ardemment le salut de ses sujets (ainsi que le sien) et ne se soumet aucunement aux banques. Ce système repose sur des doubles pétitions de principe et sur l'usage de mots-valises, l’homosexualité dissimulant la fornication (péché mortel, péché de scandale et péché de coopération) ainsi que la contraception (réifier les êtres humains), une pratique historiquement condamnée de mort par les chefs d’État soucieux de protéger leur peuple. Cette logique se retrouve également dans la novlangue contemporaine, où le fait d'être opposé à l'envoi d'un homme à la guerre pourrait se voir tautologiquement qualifié de « misandre » (le besoin de le qualifier montrant que le pléonasme est inopérant), sans nuance de “prétexte rétrospectif”, par des organismes comme la LICRA du GODF (qui condamnerait encore le Christ). Pourtant, si l’on considère qu'un homme ne doit pas faire la guerre, la véritable misandrie consiste précisément à l’y envoyer, ce qui conteste ce concept dans son essence même (sophisme de définition). En réalité, la situation s'avère très simple : Dieu aime les humains, donc s'opposer à la volonté de Dieu revient à détester les humains et Dieu aime la vérité. C'est le même principe que l’oxymore du « milliardaire philanthrope », utilisé pour désigner ceux qui propagent la culture de la mort, à l’instar de George Soros et de ses fondations anti-vie.

  </p>
          </div>
        )
      },
       {
        titre: "Les Coulisses de la Diplomatie Anglaise",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Dans son discours à Tilbury face à l’Armada espagnole, Élisabeth Iʳᵉ — qui, par ailleurs, reproche à Henri IV d’avoir sauvé les femmes et les enfants lors du siège de Paris — déclare : « Je ne saurais me méfier de mon peuple bien-aimé. Ma confiance est en Dieu. Malgré la faiblesse de mon corps de femme, je suis résolue à vivre ou mourir à vos côtés, au milieu de la bataille ». Nonobstant ces paroles, la Reine catholique Stuart (sa cousine) et environ 40 000 catholiques meurent sous le règne d’Élisabeth Iʳᵉ, dont le gouvernement s’appuie sur un espion issu de la famille Dee, liée à un courant ésotérique, ce dernier demeurant par ailleurs proche des Russes. Grâce à l’action décisive de ses conseillers, avertis par le réseau espagnol du médecin juif Hector Nuñez, la Couronne anglaise parvient à repousser les Espagnols. Au milieu du XVIIᵉ siècle, un autre ésotériste, Oliver Cromwell, député du Parlement (où la féministe McAliskey ira frapper le ministre Maudling, lequel manquera ensuite de s'en prendre au Premier ministre, et regrettera plus tard de ne pas l'avoir frappé plus fort, sans jamais s'excuser ni faire l'objet d'une condamnation pénale) et pro-Torah, gouverne l’Angleterre après la décapitation du roi Charles Iᵉʳ. Cromwell permet aussi le retour des Juifs dans le pays par l’intermédiaire des démarches de Menasseh ben Israël. La Banque d’Angleterre (calquée sur celle d’Amsterdam, précurseure des banques centrales, fondée après le déplacement juif d'Anvers à Amsterdam, plus tolérante envers eux, pour fuir l’Inquisition espagnole) est ensuite créée en 1694 après l’union sous Orange ; elle stabilise les finances, est destinée aux emprunts et permet le financement de longues guerres (la dette soumet le chef de l'État aux riches au détriment des plus faibles). Cette gouvernance se déroule durant la période du « Collège invisible », un groupe composé de savants, d’alchimistes et de biblistes puritains. Au retour de la monarchie, ce Collège invisible devient la Royal Society. Elle compte notamment Isaac Newton, qui rencontre le Tsar et se montre proche du protestant Jean Théophile Désaguliers, ce dernier, après avoir été expulsé par Louis XIV, fondant plus tard la franc-maçonnerie aux côtés de James Anderson. Henry Oldenburg, de confession protestante, en devient le premier secrétaire et correspond directement avec le rabbin Jacob Abendana, grand rabbin séfarade d’Amsterdam puis de Londres. Plus tard, Louis XIV reçoit Jacques II après la chute de ce dernier face au protestant libéral Guillaume d'Orange, ce dernier étant surtout soutenu par le banquier juif Suasso et appelé par le Parlement protestant anglais à monter sur le trône d’Angleterre à la place de Jacques le catholique (la tolérance... tant qu'il ne s'agit pas de catholiques). Louis XIV — appelé Louis-Dieudonné, sa naissance faisant suite au vœu de son père Louis XIII, qui avait officiellement confié la France à la Vierge Marie — fait face aux forces anglaises, elles-mêmes soutenues par le banquier Solomon de Medina. Robert Moray (membre fondateur de la Royal Society, proche des rois Charles Iᵉʳ et Charles II, ainsi que de Gilbert Burnet, un anti-catholique attaché à la cause de Guillaume d'Orange) s'impose comme l’un des premiers maçons reconnus selon les statuts Schaw, tout en servant dans l’armée du roi de France.

 </p>
          </div>
        )
      },
       {
        titre: "Madeleine de Miremont au Combat",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
        Madeleine de Miremont, veuve protestante partageant la rigueur morale de Jeanne d’Albret — l'éthique calviniste, par principe opposée à celle de la République actuelle, se transmet souvent par les femmes avec un pasteur qui ne se donne pas totalement dans sa « charge » en autorisant son mariage, contrairement aux décrets du concile d'Elvire en 306 —, doit défendre ses terres, situées dans un pays catholique, face à François de Montal. Elle marche à la tête d'une troupe et lance à ses soldats : « Faites comme moi !... ». Mais se retrouvant bloquée à l'extérieur de sa place forte, elle part chercher du secours à Turenne et ne réussit à obtenir que quelques arquebusiers. Après une escarmouche, Madeleine charge elle-même la cavalerie ennemie et la met en déroute. François de Montal périt finalement, blessé de la main même de Madeleine.

  </p>
          </div>
        )
      },
       {
        titre: "Le Scandale de Madame de Montespan",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Gabriel Nicolas de La Reynie, père de la police moderne, est chargé de l’enquête sur Catherine Deshayes (dite La Voisin), une avorteuse qui utilise un fourneau pour brûler les restes des nouveau-nés et des fœtus, et qui frappe par ailleurs son mari Antoine. Marguerite, la fille de Catherine, accuse Madame de Montespan d'avoir commandé, avec le concours de l'abbé Guibourg, des messes noires et des cérémonies impliquant du sang d'enfants afin de garantir sa réussite terrestre auprès du roi. À la suite de ces révélations, Catherine Deshayes est brûlée vive sur la place de Grève en 1680.
       </p>
          </div>
        )
      },
      {
        titre: "De l'Esclavage à la Mission",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Saint Vincent de Paul naît en 1581 à Pouy, dans une famille de paysans modestes, et se fait ordonner prêtre à l'âge de dix-neuf ans, en 1600. Plus tard, Vincent prend un bateau vers Narbonne et tombe dans une embuscade menée par des pirates barbaresques africains. Arrivé à Tunis, il est vendu sur le marché aux esclaves. Il est revendu plusieurs fois avant qu'un de ses maîtres ne décide de le ramener en France. Durant cette période, il cherche avant tout la sécurité matérielle et tente de « réussir » au sein de l'institution de l'Église. En 1613, il entre au service de la puissante famille de Gondi. Cependant, à Folleville, il entend la confession d'un paysan mourant et réalise que celui-ci n'a jamais osé avouer ses fautes auparavant par honte. Bouleversé par cette expérience, Vincent se détache des gens aisés et fonde la Congrégation de la Mission (les Lazaristes) pour évangéliser les pauvres dans les campagnes. Par la suite, il crée également la compagnie des Filles de la Charité. Enfin, face aux abandons massifs de nouveau-nés dans les rues de Paris, il organise activement leur accueil et leur sauvetage. À la fin de sa vie, il déclarera regretter de n’avoir pas fait plus.

       </p>
          </div>
        )
      },
       
{
        titre: "Deux visions coloniales",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Les Anglais, protestants, possédaient les Treize Colonies et Terre-Neuve, tandis que les Français contrôlaient la Nouvelle-France. Les Français, catholiques, avaient compris qu’il fallait respecter les Autochtones, ne pas les traiter comme un bloc uniforme, avec leurs distinctions et leurs protocoles propres à chaque nation (Hurons, Algonquins, Iroquois…), respectant le principe catholique que le cultuel n’écrase pas le culturel, à l'instar des provinces de France (c'est pourquoi les Basques, les Béarnais et les Bretons se distinguent les uns des autres, possédant même des différences internes), tout l’inverse des protestants ou républicains qui imposent leur culture “meilleure” et “moderne” (qualificatifs relevant du sophisme de l'anachronisme ou du glissement sémantique). Ils recherchaient avant tout le commerce des fourrures. Même s’ils revendiquaient la souveraineté politique face aux autres puissances européennes, ils laissaient les Autochtones maîtres de leurs territoires et cohabitaient avec eux (“c’est un scandale de braver les coutumes” St Augustin). Les Autochtones n’étaient donc pas « soumis » à la France, mais constituaient des alliés stratégiques et commerciaux ; lorsqu’ils n’étaient pas d’accord avec les Français, ils refusaient simplement de faire campagne avec eux ou changeaient de camp. À l’inverse, les Britanniques pratiquaient une colonisation de peuplement : ils achetaient — ou prenaient — les terres, les déboisaient pour l’agriculture et en excluaient les Autochtones. Les officiers des troupes de la Marine et les miliciens canadiens français vivaient au contact des Autochtones, allant jusqu’à se mettre en pagne, parfois torse nu, à se peindre le visage et à se tatouer.

   
     </p>
          </div>
        )
      },
      {
        titre: "La résistance de Pontiac face aux Anglais",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
  Après la bataille des Plaines d'Abraham (1759), la France signe le traité de Paris et laisse le territoire aux Anglais. Après la défaite des Français, Pontiac (chef des Outaouais) refuse de se soumettre aux Anglais. Il lève une immense coalition autochtone et mène une guerre terrible contre les Britanniques (la rébellion de Pontiac, 1763-1766). Faute d'aide de la part de la France (qui avait abandonné le territoire car elle respectait les traités), il doit signer un traité de paix en 1766. Resté fidèle au souvenir des Français, il est assassiné en 1769 par un Autochtone d'une autre tribu (les Illinois), possiblement payé par les Anglais. Les « tuniques rouges » (les soldats britanniques) finissent par reprendre le contrôle. Les populations autochtones et les communautés de « sang-mêlé » (les premiers Métis) sont décimées par les combats et Jeffery Amherst, général britannique, envoie des couvertures infectées par la variole aux Autochtones (rébellion de Pontiac en 1763). Les autorités britanniques vont favoriser l'immigration anglophone et protestante (surtout irlandaise) et refuser des terres aux Canadiens français catholiques qui en manquent dans les seigneuries du Saint-Laurent et doivent émigrer vers les États-Unis.
    </p>
          </div>
        )
      }
    ]
  },
   'paris': {
    titre: "La Révolution", 
    periode: "Renaissance",
     resume: "Ésotérisme, Pouvoir et Argent face au Roi",
    introduction: "Les Républicains prennent Paris......",
    image: "/images/histoire/antiquite.jpg",
    sections: [
{
        titre: "Les Réseaux d'Influence Européens",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Les princes du Saint-Empire s'entourent de « juifs de cour » à l'instar de Samuel Oppenheimer (dont le fils David, grand-rabbin, se marie avec la fille de Behrens), de la famille Rothschild pour la maison de Hesse-Kassel, ou encore de Leffmann Behrens lui-même (petit-fils de l'érudit talmudique Isaac Cohen de Borkum, et dont le fils Moses Jacob devient un érudit et un philanthrope), qui sert la maison de Hanovre. En Angleterre, les partisans des Stuart, proches de Louis XIV (catholiques et traditionalistes), affrontent les protestants de la maison de Hanovre. Ces derniers s'appuient sur la puissance de la Banque d’Angleterre (fondement d'un système économique libéral), la confiance des marchés financiers et l'instauration d'une monarchie parlementaire. Dans ce contexte, Samson Gideon lève des fonds au sein de la communauté financière juive pour financer l'armée britannique contre les rebelles jacobites. Il apporte ainsi une aide décisive au régime whig-hanovrien en place contre les Jacobites, eux-mêmes alliés des Bourbons. Parallèlement, le franc-maçon John Montagu épouse lady Mary Churchill ; il est reçu en 1718 à la Royal Society puis fait appel à James Anderson pour rédiger ses célèbres constitutions. Plus tard, Charles Darwin (dont le grand-père Erasmus et l'oncle Josiah Wedgwood, membres de la Royal Society et de la Lunar Society, sont francs-maçons) voit ses thèses défendues par Thomas Henry Huxley, membre de la Royal Society. Ce dernier est le grand-père de Julian Huxley, premier directeur général de l'UNESCO et cofondateur du WWF aux côtés du prince Bernhard de Lippe-Biesterfeld. Ce prince est également le cofondateur du groupe Bilderberg (où se croisent des figures comme David Rockefeller, Emmanuel Macron ou Larry Fink, partisans des critères ESG), le créateur du prix Érasme et le président de la Fédération équestre internationale.
      </p>
          </div>
        )
      }
      ,
      
        {
        titre: "La Révolte des Femmes pour le Pain",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Turgot, profondément influencé par les physiocrates, fait libéraliser le commerce des grains sous le règne de Louis XVI. Avant cette réforme, les grains ne peuvent être vendus qu’à des moments précis et réglementés sur les marchés, une politique de subsistance conçue afin de permettre d’abord au peuple de se nourrir à un prix juste. Mais avec cette libéralisation économique, des spéculateurs achètent le blé à l’avance, et une grande quantité de grains quitte le royaume vers des régions étrangères où les prix s'avèrent plus élevés, dans le but de maximiser les profits. En conséquence, les prix augmentent fortement à l'intérieur du pays, ce qui déclenche la « guerre des farines ». Le peuple réclame alors avec force le retour de la taxation des grains. Lors de ces émeutes, les femmes qui se lèvent en premier, considérant que l’honneur de leur famille et la survie de leur maison sont bien plus grands que leur propre vie.
  </p>
          </div>
        )
      },

       {
        titre: "L'Influence des Banques sur la Société",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le divorce est autorisé par la Révolution, ce qui retire toute valeur au mariage et encourage le crime d'adultère (de retour en l’an 250). Cette mesure permet notamment aux femmes de royalistes de prouver leur attachement à la République sous peine d'être guillotinées, comme l'illustrent les arrêtés de Joseph Le Bon. Monestier de Pau (ancien prêtre), qui met en place beaucoup de fêtes républicaines (comme celle du 9 novembre à Salies pour la victoire face aux Vendéens) pour, est surnommé « le père des veuves » : avec les nouvelles lois républicaines, il suffit d'éliminer le père pour faire perdre toute identité juridique à la famille. Par la suite, la République avantage les métiers ne nécessitant pas de force physique, dans le but, encore une fois, de soumettre les femmes. Pendant ce temps, la mortalité masculine augmente et la vie se déplace massivement vers les villes afin d'avantager le système bancaire sans subsidiarité (grandes écoles, épiceries, sport business), puisque des libertés communales seraient contraires à l’hégémonie républicaine, mais avec des intermédiaires (il ne suffit plus que le seigneur d’Audaux converse avec Bourbon pour le village d’Audaux, il faudra passer par Navarrenx, Orthez, Pau, Bordeaux… au nom de l'Égalité entre villes) centralisées à Paris (condamnant Bretons, Labourdins ou Béarnais à une union forcée paralysés par un système du "diviser pour régner" qui leur ôte tout pouvoir de décision, le Béarn n’imposera pas son système de maison aux par démocratie, ni ne le gardera pour lui seul par égalité). Plus tard, des figures politiques comme Naquet, puis Hollande ou Macron, ridiculisent ce sacrement au nom de la France et du Béarn, en se justifiant par des discours lénifiants qui utilisent des concepts abstraits face à la populace pour camoufler leurs réelles intentions et détruire l’ordre naturel où l’homme est le chef de famille. Désormais, ce sont les banquiers qui occupent ce rôle de direction, entraînant le peuple vers un nihilisme moral au sein d’une société de consommation, système qui fait par exemple du concubinage un véritable business tout en l’idéalisant dans l’espace public, à l’image de Merlin. À ce sujet, le franc-maçon Voltaire écrit à Jean-Jacques Rousseau, perçu comme le précurseur de la République : « Il prend envie de marcher à quatre pattes quand on lit votre ouvrage ». Finalement, le concept de nation française est mis en avant pour masquer, par principe, le Béarn, tout comme le changement de nom des Basses-Pyrénées sert à masquer le problème qu'était le département. 

  
     </p>
          </div>
        )
      },

       {
        titre: "Le Martyre du Frère Salomon",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
  Guillaume-Nicolas-Louis Leclercq (en religion Frère Salomon), naît à Boulogne-sur-Mer dans une famille commerçante aisée et choisit la vie religieuse au sein des Frères des Écoles chrétiennes. Devenu procureur et enseignant, il forme activement ses confrères. En 1790, il est appelé à Paris pour devenir le secrétaire du Supérieur général, le Frère Agathon. Face aux exigences de la Révolution, il suit les directives du pape et refuse catégoriquement de prêter serment à la Constitution civile du clergé. En 1791, le port de l'habit religieux est interdit, les écoles ferment et la Révolution disperse les frères. Le Frère Salomon fait alors le choix du courage et reste clandestinement sur place pour poursuivre sa mission. Le 15 août 1792, il est dénoncé et arrêté à son domicile parisien, alors même que sa sœur lui rend visite. Il est conduit et incarcéré au couvent des Carmes, transformé pour l'occasion en prison pour les prêtres et religieux réfractaires. Après un jugement sommaire lors des massacres de septembre, il est exécuté à coups de sabre et de pique dans le jardin du couvent.

   </p>
          </div>
        )
      },
      {
        titre: "La Fidélité de l'Abbé Pinot",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Noël Pinot est ordonné prêtre à l'âge de vingt-trois ans. Sous la République, il refuse le serment constitutionnel, estimant fermement que l'autorité spirituelle ne doit pas être soumise à une loi civile, un acte qui le rend immédiatement passible de la peine de mort. Malgré le danger, il choisit de rester clandestinement auprès de ses paroissiens en Anjou pour continuer à leur administrer les sacrements et à célébrer la messe. Début février 1794, alors qu'il se trouve dans une ferme au hameau de La Milandrie, chez la veuve Peltier, il est aperçu puis dénoncé aux autorités républicaines. Arrêté, il marche vers l'échafaud à Angers revêtu de ses habits de célébrant, montant les marches de la guillotine en prononçant les premiers mots de la messe.

  </p>
          </div>
        )
      },
      {
        titre: "Céleste Bulkeley au Combat",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
     Née à Angers le 14 mai 1753, Céleste Bulkeley épouse en secondes noces William de Bulkeley, un officier tout juste âgé de vingt ans. Lors de la Révolution, Céleste fréquente activement des réseaux de bourgeois et de nobles catholiques qui organisent des messes clandestines et aident les prêtres réfractaires à se cacher. Après la mort du roi, l'insurrection vendéenne éclate : Céleste prend le commandement d'un détachement d'amazones et participe aux combats de l'été 1793. Après la bataille de Cholet, le général Bonchamps épargnera plusieurs milliers de soldats républicains. Elle est finalement arrêtée par les troupes républicaines. Cependant, grâce à une fausse déclaration de grossesse de son mari, elle échappe à la guillotine. La République, alors engagée dans le blocus contre les Anglais, n'exécute pas les femmes enceintes, considérant l'enfant dans le ventre comme innocent. Son mari, en revanche, est condamné et guillotiné.

   </p>
          </div>
        )
      },  {
        titre: "Il Faut Raser la Véndée",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Le 1er août 1793, la République naissante est en danger. ”On ne peut pas changer le peuple (l’école du maçon Ferry) donc changeons de peuple” (Bertinotti, actuel GM du GODF — GODF qui félicite la Ve République à chacune de ses décisions morales — dit en 2026 : “On veut changer l'homme pour changer la société”, c'est donc toujours leur projet, c'est jamais assez la modération se déplace comme avec Merlin). Barère, le franc-maçon tarbais, ordonne d'exterminer les catholiques vendéens, affirmant que « l’humanité ne se plaindra pas, c’est bien d’extirper le mal jusque dans les demeures des royalistes » et décrète la levée en masse de 300 000 hommes sans privilège, seulement au nom de la Nation (alors que les doléances de 1789 critiquaient les milices depuis Louis XIV, qui n’ont compté que 60 000 hommes disponibles maximum recevant des privilèges, l’opposé de la loi Jourdan). Les biens des rebelles de Vendée sont déclarés à la République. Le général Westermann confirme que « les femmes n’enfanteront plus de brigands ». Hommes (pendus et éventrés aux portes), femmes (brûlées vives dans des fours à pain), embryons (empilés), enfants, vieillards, fermes, champs : tout est détruit sans discrimination. Pendant ce temps, la féministe Théroigne de Méricourt est déshabillée, battue et fouettée par d’autres féministes ; Françoise Dupont s’introduit dans des maisons hospitalières pour dénoncer les religieuses (tout signe d’attachement à la religion catholique étant assimilé à un refus de la modernité révolutionnaire) ; et les Bretonnes de toutes classes sociales caillassent des prêtres républicains et se traînent pour faire baptiser leurs enfants par un prêtre réfractaire, à l’instar de Sainte Philippine Duchesne, qui se dévoue auprès des prisonniers et des prêtres réfractaires.

    </p>
          </div>
        )
      }
      

    ]
  },
   'revolution-france': {
     titre: "Sous la Terreur",
    periode: "Époque Moderne",
    resume: "Les Deux France",
    introduction: "La République s'impose en France....",
    image: "/images/histoire/antiquite.jpg",
    sections: [
      
      {
        titre: "Militantes Chrétiennes sous la Révolution",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
    Dans une ambiance fortement anticatholique, l'abbé Jacques Linsolas lance en 1788 la Société des demoiselles (faisant suite à celle des jeunes hommes). Cette organisation est composée de jeunes filles chrétiennes dont l'objectif est de rechristianiser la société par l'éducation, tout en prémunissant ces jeunes femmes du libertinage et de l'incrédulité. Pendant la Révolution, ces jeunes filles deviennent des militantes actives de l'Église réfractaire. Elles visitent notamment les prisonniers pour les convaincre de rester fidèles à Rome. En mars 1791, au sein de l'église Saint-Nizier de Lyon, elles agressent physiquement les colons révolutionnaires qui perturbent le prône de l'abbé Linsolas. Arrêtée plus tard par les autorités républicaines, Françoise Michallet, déclare fermement : « Je ne suis pas fanatique, mais catholique ; la guillotine me rendra libre ».

         </p>
          </div>
        )
      },  {
        titre: "La Section Féminine de l'Espagne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La chute de l'Inquisition espagnole survient lorsque le maçon Joseph Bonaparte prend le contrôle de l'Espagne. Il place alors le comte François Cabarrus (également franc-maçon et père de Thérésa Tallien, figure du complot contre Robespierre) au poste de ministre, fonction qu'il occupait déjà sous le règne de Charles IV. Juan Bautista Cabrera, lui aussi franc-maçon, veut unifier le protestantisme espagnol — reconnaissant que leur doctrine n'est pas la vraie pour former un front commun face à l'Église catholique (entrave à la maçonnerie) — au sein de l'IEE (Église évangélique espagnole). Cependant, en raison de désaccords avec les autres leaders, il fonde finalement l'IERE (Église espagnole réformée épiscopale) et devient le premier évêque anglican — qui ont retiré 7 livres de la Bible pour qu'elle soit moins chère et plus vendue — d'Espagne. Parallèlement, le pasteur et franc-maçon José Alhama Teba, membre de la loge Lux, s'impose comme le pionnier du protestantisme à Grenade, tandis que Cipriano Tornos y Blasco, ancien prêtre catholique et également maçon, devient le pasteur principal de l'église de la rue Leganitos à Madrid. Par la suite, Madame Pilar Primo de Rivera dédie sa vie à la Section féminine de l’Espagne franquiste, qui fait face aux forces protestantes, communistes et républicaines unies contre leur adversaire commun, l’Église de Dieu. Les féministes (débauchées, anticléricales et donc misogynes puisqu’elles veulent détruire leurs âmes), élues par des hommes (pluralisme encadré), ne voulaient pas donner le droit de vote (selon les consignes) aux femmes espagnoles car elles étaient trop catholiques (la barrière à leurs vains plaisirs), mais les hommes le leur accordèrent, persuadés que leur apostasie se ferait par la “future subversion” (mutatisme des dérives, causewatching…). Plus de 6 800 religieux catholiques (prêtres, moines, religieuses) ont été tués dans les premiers mois de la Guerre Civile espagnole pour leur soutien présumé au seul camp qui respectait le catholicisme, avec des profanations de tombes et de couvents. Sous la direction de cette section, l’Espagne se relève sans aucune aide extérieure, à une époque où l'Église n’exerce plus son rôle traditionnel d'arbitre international (comme lors du traité de Tordesillas ou lorsque le pape intervenait face à Philippe II d'Espagne), laissant place à la loi du plus fort/méchant. Pilar Primo de Rivera voit ensuite tout son travail détruit et sa section dissoute par l’avènement du système démocratique incarné par le maçon José Maldonado González (anti-Église, le même projet de 1789 à nos jours), qui continue l’agenda républicain stoppé par Franco, où le retour du catholicisme (l’autre camp, celui de la Vérité révélée) est présenté dans l'espace public comme une imposition face à la "tolérance" (ses mouvements internes autorisés) du camp maçonnique (anti-vérité “révélée”) qui évoluera via ses mouvements internes toujours plus loin sans renier son principe (Merlin/Jeanne). Il réifie les êtres humains en légalisant l’adultère (son mari ou sa femme devient comme un vêtement), la contraception (l’humain devient un objet) et l’avortement (qui donnera un milliard de mort dans le monde, la première cause de mort) au sein d’une Espagne catholique à 90 %, marquant ainsi le triomphe de l’ésotérisme (faire péché son prochain si il a la chance de naître) où l’homme prétend se faire Dieu (maitre de la vie) et avec le démon cherchant toujours à banaliser le péché mortel (retour en l’an 300). Jésus, Jeanne d'Arc et les martyrs de la Révolution — le progrès étant de suivre les saints par le catéchisme et non de faire de la cueillette de cerises dans leurs écrits selon nos sentiments du moment, on peut préférer que 2+2 fasse 22, mais on voit que c’est faux après une étude qui nous permettra donc d’avoir des bases solides ; « la Vérité (elle est dans l’Église) vous rendra libres (on ne débat pas sur l’adultère, on sait désormais que c’est un péché mortel, par exemple, ce qui permet donc le progrès constant, en place en France depuis les martyrs de Lyon) » (Jean 8,32), « mon peuple, faute de connaissance, sera réduit au silence » (Osée 4,6)  — sont morts pour que vive la Vie (Dieu), ceux qui défendent l’injuste peine de mort pour l’innocent (vivre pour que vive la mort) et se considèrent "coupables d'exister" devraient passer par le martyre pour prouver la force de leur cause : éliminer le plus faible (l’opposé du christianisme, où on a le devoir de le protéger, lui, et sa volonté téléonomique) par pure haine de sa différence (et non pour des raisons religieuses comme les Amérindiens) et du paradis (on aide pas le salut de quelqu’un en le tuant avant la naissance), à coup de sophismes, c’est consentir à se faire agresser par les plus puissants que soi dont .. Dieu (si on accueille pas la vie pourquoi nous accorderait-il la vie éternelle ? l’enfer étant la séparation de Dieu). Franco avait réalisé la Vallée des Déchus pour les morts des deux camps de la guerre civile, il y avait été enterré, et les socialistes l'en ont sorti en 2019. 


</p>
          </div>
        )
      },  {
        titre: "Le Calvaire de Marie-Antoinette",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Neuvième fille de l'impératrice Marie-Thérèse d'Autriche, Marie-Antoinette devient reine de France. Au cours de sa vie, elle adopte un enfant noir qu’elle fait baptiser sous le nom de Jean Amilcar, et elle paie sa pension de ses propres deniers jusqu’à sa mort. Parmi ses proches, la princesse de Lamballe — qui finit par être massacrée et mutilée par la foule jusque sous les fenêtres de la reine — s’engage en franc-maçonnerie. Marie-Antoinette l’exhorte fermement à s’en éloigner, car elle juge cette influence trop féministe (qu'elle perçoit comme une forme d’impérialisme), souhaitant avant tout la protéger des dérives de son temps. La République lui arrache successivement son mari, le roi Louis XVI (avec appel au peuple refusé car la “Convention représente le Peuple” pour les montagnards, l’élite = le peuple, vu que ce n'est ni le clergé ni la noblesse), puis ses enfants, dont le jeune Louis XVII. Ce dernier, manipulé par le tribunal républicain sous l'effet d'une loi modifiée auparavant, est contraint d'accuser sa propre mère de viol, avant d’être séquestré et laissé pour mort dans une cellule. Le 16 octobre 1793, Marie-Antoinette est conduite à la guillotine (invention du très franc-maçon Joseph Guillotin). Dans sa toute dernière lettre elle accorde son pardon à tous ceux qui lui ont fait du mal et prie Dieu de leur accorder Sa miséricorde.


   </p>
          </div>
        )
      },
       {
        titre: "La Loire, Baignoire Nationale Républicaine",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La Loire a servi de « baignoire nationale » pour la « race maudite » vendéenne (menée par Carrier), avec des desquamations de peau. Les prêtres et religieuses étaient accrochés et noyés nus ; des milliers de Vendéens étaient jetés à l’eau depuis le bord des navires, sans distinction, y compris des nourrissons et des femmes enceintes (alors interdits par Paris, car l’embryon n’est pas coupable). Pour cette dernière raison, le président de la commission militaire demanda quartier pour les femmes enceintes ; Goullin répliqua que les enfants dans le ventre de leurs mères pouvaient être des vipères ! Robespierre rappellera donc Carrier. Carrier expliquera que, si on lui reproche des choses, c’est à la République elle-même qu’il faut le reprocher ; lui applique seulement les ordres (« exterminer cette race maudite », de Barrère), mais la République (Robespierre étant déjà exécuté) ne remettra ces crimes que sur sa seule personne (Goullin est amnistié). 

  </p>
          </div>
        )
      },
       {
        titre: "Mourir plutôt que la République",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
       Après le départ de ses maîtres, Madeleine Virol, simple femme de chambre et coiffeuse de 25 ans, était restée à Paris avec Mélanie Lunouf (21 ans), où la misère qu’elles subissent et le souvenir des bontés de leurs anciens maîtres les poussent à écrire aux Feuillants : « La République est un tas de salopards (“jeanfoutres”) qui a tué notre pauvre roi qui faisait le bonheur de la France ! Il faut balayer ces canailles de députés qui mentent au pauvre peuple. Vive Louis XVII, et non ces cochons de députés qui ont fait la République. J’ai le portrait de la famille de Louis XVI dans mon sein, je le conserverai jusqu’à la mort. Je ne suis point citoyenne, je suis royaliste ». Le 5 mai 1794, devant Dobsent, juge, et Fouquier-Tinville, elle dit qu’elle préférait mourir plutôt que de vivre sous la République et bénira la main de son bourreau qui la délivre de la République. Madame Lavergne (refusant le divorce imposé par la République), en entendant la condamnation à mort de son mari, criera : « Oui, il faut un roi ! Ils assassinent tout le monde ! » pour s’assurer d’être exécutée avec lui ».  
          </p>
          </div>
        )
      },
       {
        titre: "Élisabeth de France, servante de Dieu",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Sœur cadette de Louis XVI, Élisabeth de France perd ses parents très jeune et développe dès l’enfance un profond attachement à la foi catholique ainsi qu'à son frère. Elle refuse tous les projets de mariage proposés afin de se consacrer pleinement à Dieu, tout en demeurant auprès de Louis XVI dont elle veut partager la mission et les épreuves, y compris sous la Révolution. Installée dans son domaine de Montreuil, elle soigne les malades, distribue des repas, visite les pauvres et soutient personnellement les familles en détresse. Sa vie quotidienne s’organise rigoureusement autour de la messe, de la prière et du service des plus faibles. Sous la Révolution, lors de la journée du 20 juin 1792, elle propose de se faire passer pour la reine afin de détourner le danger de la foule déchaînée, estimant que sa propre vie a moins de valeur que celle de la souveraine ; mais ce subterfuge ne reste qu'éphémère. Par la suite, elle endure l’emprisonnement au Temple et la perte successive de tous ses proches exécutés par la République. Malgré la détention, elle obtient clandestinement le soutien d’un prêtre réfractaire pour recevoir les sacrements. Le 10 mai 1794, malgré l’opposition initiale de Robespierre, Élisabeth est condamnée à mort. Elle réconforte les autres condamnés, affirmant qu’ils doivent se réjouir de quitter un monde de souffrances. Ce comportement fait écho à la théologie de saint Marcellin, qui explique que la souffrance, même injustement reçue, permet la purgation de ses péchés dès la vie terrestre (on peut toujours demander à Dieu d’en faire fi pour son prochain, si c’est Sa Volonté). Avant l'exécution, les hommes condamnés s’agenouillent devant elle et les femmes l’embrassent en signe de respect. Arrivée sur l’échafaud, son voile s’envole ; elle demande alors au bourreau de le replacer sur sa poitrine au nom de la pudeur. Elle unit son sacrifice à celui du Christ et meurt en paix à l’âge de trente ans, en portant une médaille de l’Immaculée Conception. Elle est aujourd'hui déclarée servante de Dieu par l'Église.
 </p>
          </div>
        )
      },
     
        {
        titre: "Le Coup d'État Anti-Royaliste",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Après la mort du gouvernement de Robespierre, les royalistes et les républicains modérés (la « droite ») étaient devenus majoritaires au Parlement, le catholicisme faisait son retour. Ne pouvant s'y opposer légalement, les gauchistes mènent le coup d'État du 18 fructidor an V (approuvé par les députés béarnais Pémartin et Laussat) : ils déportent leurs opposants (parlementaires, journalistes) et condamnent à la peine de mort les émigrés royalistes revenus en France. Pour contrer ce réveil catholique, le Directoire tente d'imposer des religions alternatives comme la théophilanthropie (un déisme moral) ou le culte décadaire, une religion civique dont les cérémonies se déroulent le dixième jour de la semaine au sein des églises réquisitionnées. 

   </p>     
          </div>
        )
      },
     
     
      {
        titre: "La Commune et la Semaine Sanglante",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
  Henri Planchat est le premier prêtre à rejoindre la jeune congrégation des Religieux de Saint-Vincent-de-Paul. Il dédie sa vie aux quartiers ouvriers et populaires, visite les malades, apporte son aide aux enfants et gère de nombreuses œuvres sociales. Lors des événements de la Commune de Paris en 1871, il est arrêté par les insurgés communards, puis exécuté lors du massacre de la rue Haxo. Parallèlement, la jeune Troisième République réprime l'insurrection à travers la Semaine sanglante, entraînant la mort de dizaines de milliers de Parisiens (bien plus que les Inquisitions en 9 siècles… mais sans jugement).


   </p>
          </div>
        )
      },
    ]
  },



  
     'technologie': {
 titre: "Le Monde des Banques",
    periode: "Époque Moderne",
    resume: "Les Sacrilèges s'abattent sur le Monde",
    introduction: "Des Peuplicides se mettent en place au nom de la Tolérance",  image: "/images/histoire/antiquite.jpg",
    sections: [
     
      {
        titre: "L'Alliance Israélite et la Franc-Maçonnerie",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Par leur idéologie commune (anticléricale, laïque et patriotique), la franc-maçonnerie et l’Alliance israélite universelle (AIU) — liées aux obédiences du Grand Orient de France ou d’Italie et proches de la presse européenne — diffusent des idées libérales dans plusieurs régions (comme l’idée de « choisir une religion — généralement par inversion méthodologique — correspondant à l'idolâtrie du veau d’or (transformer Dieu selon ses sentiments), ou choisir un groupe politique selon ses émotions du moment (ils feront de la démagogie dessus) pour s'auto-justifier (une inclinaison davantage féminine en raison de leur forte imagination, ste Thérèse) », une forme de consumérisme irrationnel (« Quand on ne sait pas, on se tait », Père Ménas), lucrative pour les élites). C'est le cas d'Emmanuel Nahon à Oran, qui crée l'école de l'Alliance et fonde la loge maçonnique Union du Maroc. Installé à Alger, Élie Théodore Zerbib est initié aux côtés de cinq autres israélites et fonde la loge Woodrow Wilson. Il devient le conseiller politique du consul et reçoit, le 28 janvier 1884, le père Charles de Foucauld. Zerbib, converti au protestantisme, remplace ensuite le pasteur Ginsburg à la tête de la section marocaine de la London Society for Promoting Christianity Amongst the Jews. Haïm Benchimol — drogman de la légation de France, directeur de l’influent journal Le Réveil du Maroc, directeur de la banque Transat, membre fondateur de l’Alliance israélite universelle et de l’Alliance française au Maroc, correspondant des compagnies maritimes et de l’agence Havas — devient le président fondateur de la loge maçonnique de Tanger, instituée par des Juifs marocains bénéficiant du statut de « protégés » ou naturalisés français. Cette loge salue l’élection d'Adolphe Crémieux (l'un des fondateurs de l'AIU, auteur de la formule : « Employez les Juifs pour amener à vous les Arabes » présent au balcon lors de la proclamation de la Troisième République, franc-maçon et juif du sud-est — grand réseau qui s'unit même par mariage avec les Rothschild (ont résidé au château de la Muette — où Catherine de Bourbon a chassé — et se sont opposés à Napoléon, tout en finançant plus tard Macron et Pompidou à l'époque de l’avorteur Pierre Simon), permettant de délaisser la maçonnerie une fois l'ascension sociale accomplie. La loge connaît un grand succès dans les milieux israélites tangérois. Elle agit comme un puissant facteur d’européanisation aux côtés des loges espagnoles, qui se multiplient jusqu'à susciter la venue du sultan en 1892. D'autres fondateurs de l'AIU, à l'instar de Narcisse Leven ou d'Isidore Cahen, sont profondément marqués par l'enseignement du philosophe Jules Simon, lui-même franc-maçon et républicain affirmé. Enfin, certaines figures religieuses, comme le rabbin Élie Aristide Astruc, sont également membres de la franc-maçonnerie.

 </p>
          </div>
        )
      },
      {
        titre: "La Guerre des Cristeros au Mexique",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Dans le même temps où les Roc**eller finançaient Sanger (création du féminisme moderne) qui voulait tuer les enfants des pauvres afin de propager, par la propagande (comme le maçon gourou de Simone Vieil et idole de Macron, Pierre Simon qui affabulait publiquement un mimétisme des dérives, pour que la majorité croie que la minorité affichée est la norme (illusionnisme social), pour s'autovalider et faire valider des crimes lucratifs) les pires horreurs de l’histoire de l’humanité en faveur des banques (réifiant les gens et soi-même). Élisabeth Báthory, comtesse se faisant livrer des jeunes filles pour les violer et les tuer, a subi une mort sociale mais Macron, censé protéger son peuple devant Dieu, a fait mourir des millions de Français avant leur naissance (toutes les femmes “un minimum nationaliste” avaient voté contre), en plus de faire l'éloge de la perverse narcissique contraception. Pourtant, lui a le droit de vivre. À ce compte-là, il aurait fallu récompenser Élisabeth de ne pas être aussi monstrueuse ! La maçonnerie française, par des sophismes et des hommes de paille (comme le sophisme du pseudo-impérialisme féminin bâti sur la continuité d'un sexe, alors qu'un homme a autant d'ancêtres féminins que masculins), se bat contre ce qui ne vient pas d’elle (Boulanger, catholicisme, etc.) avec des propagandes bourrées de signifiants flottants et de généralités scintillantes, ignorant sciemment la complexité de l’humain (pendant mille ans, les Béarnais ont traité les Bigourdans de "crapauds", les deux territoires ont connu là leur période la plus pacifique). Le Mexique fait, lui, face à des révolutions maçonniques. La maçonnerie, à l’origine de nombreuses structures (rugby, basket, associations “philanthropiques”…), a subi l'influence des milieux financiers et oriente les humains vers le sport fédéral (devenu nouvelle culture dans l’espace public, pas catholique et lucratif) — détournant cette ancienne préparation militaire (loi Jourdan de 1798 obligeant les Français, surtout les pauvres, à défendre leur patrie, mettant ainsi fin à l'élite guerrière noble pour une inversion sociale où le puissant, rempli de vaine gloire, ne défend plus le faible et ouvre la voie à 2 guerres mondiales) en un business lucratif (en aversion avec le “salaire modéré sans encouragement” proposé par St Thomas tant qu’il n’y a pas de vice), où le sport devient une fin, axé sur la diversification des championnats (handisport, féminin…) via des lois les protégeant de toute critique (comme l’antiracisme de Mitterrand) et des jours spéciaux (sophistique), tirant vers l'androgynie ésotérique de Comenius (protestant liée à l’Unesco qui a influencé le collège invisible) niant sciemment la polarisation des genres (à l’instar des frankistes des massacres de septembre 1792) et même de concert avec de petits médias — qui acceptent par vaine gloire ou crédulité (même domaine) — pour que même eux psittacent les mêmes antiennes, créant une nouvelle norme (le peuple entend toujours les mêmes dires) qui lance des débats voire soumet (concept de la téléréalité) — tout en imposant une “orthodoxie” discursive (disqualification par l'étiquette, caricaturant une position complexe ignorant sciemment la complexité de l'humain) par une politique de “causewatching” fondée sur un mimétisme des dérives, à l’instar de l’espace public mis en scène de façon subjective par une sélection typologique — entraînant surtout les femmes dans des péchés mortels par un endoctrinement mené par des psittacistes pour des intérêts mercantiles (faisant d’un sport une pseudo-finalité). Ces révolutions qui interdisent même la messe (bienheureux Miguel Pro en mourra comme plein de prêtres missionnaires dans le monde), empêchent l’arrivée de vin car ils « ont de la tequila » (mot-écran) et font exploser de la dynamite sous un cadre de la Vierge, qui ne se brise même pas. Les chrétiens mexicains se rebellent, comme le Christ au Temple face aux marchands : c’est la Guerre des Cristeros ».

 
 
   </p>
          </div>
        )
      },
      {
        titre: "La Mission de Mère Teresa",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Mère Teresa entre à l'âge de dix-huit ans chez les Sœurs de Lorette en Irlande, avant d’être envoyée en Inde. En 1946, au cours d'un voyage en train, Jésus lui demande de quitter son couvent pour se consacrer au service des plus pauvres parmi les pauvres (“le nécessiteux est une occasion de charité pour le riche”, Saint Augustin). Elle fonde alors les Missionnaires de la Charité, ouvre des foyers pour les mourants et recueille les malades, les lépreux ainsi que les orphelins, tout en soutenant les plus démunis. Pour Mère Teresa, chaque personne, en particulier la plus abandonnée, porte le visage même du Christ (“ce que vous avez fait au plus petit (embryon) de mes frères c’est à moi que vous l’avez fait et réciproquement”, Mathieu 25,40-45). Malgré une longue période de sécheresse spirituelle et un profond sentiment d’absence de Dieu qui dure des décennies, elle demeure indéfectiblement fidèle à sa mission de charité. En 1979, elle reçoit le prix Nobel de la paix, une distinction qu’elle accepte solennellement au nom des pauvres et des enfants qui ne sont pas encore nés. Lors de son discours, elle rappelle avec force que la paix commence au sein de la famille et dans le respect absolu de toute vie humaine, en particulier dès la conception (aimer son prochain inconditionnellement).


 </p>
          </div>
        )
      },


  {
        titre: "Chute de la Monarchie au Portugal",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Après le retour de sa famille au Portugal, Pedro reste au Brésil. À l’instar de son ministre, il devient franc-maçon et se voit proclamé « par le peuple » (sophisme désignant la presse tenue par une poignée d’individus, tel le révolutionnaire Jean-Paul Marat condamnant Louis XVI alors que c’est lui le voleur) premier empereur du Brésil. Pour poursuivre le projet libéral colonisateur, intérieur et extérieur, actif depuis la Société des Amis des Noirs (Noirs qui ne leur ont rien demandé, comme le peuple français au demeurant) de l’abbé-maçon Grégoire (qui détruira les langues de France), du banquier Clavière ou encore de Pétion, maire de Paris (appelant les brigands marseillais pour renverser le roi), il mènera une bataille au Portugal pour mettre fin à la monarchie absolue et établir un régime plus libéral (à l’image de Pombal de la Royal Society, le « sauveur de Lisbonne »), fondé non plus sur la vérité (qui devient opinion, sans preuve de sa fausseté juste pour masquer l’absence d’argument de la République, après 15 siècles d’apologie  ; la Révélation est mise au même niveau que leurs sectes ésotériques), mais sur des gens plus éloquents, beaux et mieux vêtus, imposant de force la tolérance à l’avantage des banques, bourrées de novlangue (niveler par le bas le langage dans l’espace public pour que le peuple s’y cantonne et soit manipulable, en imposant une langue commune, une mesure qu’aucun roi n’a prise mais basée sur François Ier) et de définitions sur mesure, pour permettre la fenêtre d’Overton qui solidifie l’avancée de la tactique du salami (un clan du changement et un de la conservation de ce qui est fait, saturant l’espace public, comme Merlin/Jeanne). La République sera proclamée après l’assassinat de Charles Ier de Portugal par des républicains de la Carbonaria — mouvement initiatique allié à la franc-maçonnerie, qui a permis la réunification italienne par les idées du démocrate franc-maçon Giuseppe Garibaldi (le révolutionnaire maçon français Pierre-Joseph Briot, avec l’ésotériste Philippe Buonarroti, l’a introduite à Naples) —, et le maçon Braga sera le premier président. Dans d’autres pays, comme en Arménie, ce sera plus rapide : après le rapprochement avec les Allemands, par aversion envers les Franco-Britanniques, les progressistes turcs lancent le génocide des chrétiens d’Arménie, mené par le maçon dönme (juif feignant la conversion) Bey, le juif maçon Emmanuel Carasso, neveu du fondateur de Danone, ou encore les maçons Pacha (« tuer tous les hommes, femmes et enfants arméniens sans exception »).  De 1915 à 1920, entre 1 et 1,5 million d'Arméniens périssent sur une population arménienne de l'Empire ottoman estimée à environ 1,5 à 2 millions de personnes.



</p>
          </div>
        )
      },



       {
        titre: "L'Éducation face à l'État Moderne",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
Après les apparitions et les prophéties de Fatima (Amélia 19 ans est au purgatoire jusqu’à la fin du monde), sœur Lucie confie que « la bataille finale entre le Seigneur et Satan portera sur le mariage et la famille pour détruire l'ensemble de l'œuvre de Dieu et la société humaine, car ils sont le pilier de la création, mais Notre-Dame lui a déjà écrasé la tête ». C’est précisément ce qu’il se passe désormais sous divers prétextes (souvent voulus) — qui se transforment ensuite en lois — afin d'éloigner les enfants de leurs familles et de les « former », ou plutôt de les déformer selon cette logique d'inversion, au sein d'écoles laïques qui mettent sur un même plan la vérité et le mensonge. Selon Pie XI, ce processus s'apparente à un massacre des innocents plus horrible encore que le premier, car il corrompt directement les âmes pour l'éternité (Saintes de Compiègne). Cette situation n'est rendue possible au sein de l'époque contemporaine que parce que les laïcs catholiques, dont la mission est de travailler à leur propre salut et à celui d'autrui pour faire des saints, baissent les bras devant la débauche anti-civilisationnelle. Par exemple, l'Irlande voit sa langue et sa culture historique balayées par les courants laïcards, alors que l'Église catholique les avait initialement transfigurées, mettant aujourd'hui en avant un péché social qui obscurcit les âmes et la vision morale. Face à cela, il convient de toujours privilégier le principe de subsidiarité (protéger la vie des gens près de soi) contre l'uniformité républicaine (qu'ils masquent par l’UE, la subsidiarité étant désormais parisienne dans l'espace public avec une modération mouvante), qualifiée par Paul VI d'anti-progrès, et perçue comme intrinsèquement discriminatoire. L'histoire en donne l'exemple avec les Sœurs des Saints Noms de Jésus et de Marie, qui parviennent à faire annuler une loi d’éducation uniforme et anticatholique portée conjointement par la Grande Loge maçonnique et le Ku Klux Klan de l'Oregon pour agresser l’âme des gens (Pie XI). Cet arrêt historique de la Cour suprême des États-Unis (Pierce v. Society of Sisters) consacre le principe fondamental selon lequel les enfants ne sont pas des créatures de l’État, marquant une époque où il était encore possible de mener une résistance efficace. Désormais, l’Église ne la valide pas mais la permet, car la maçonnerie s’est imposée (à l'instar du mariage qui était interdit jusqu’au 7ᵉ degré, et est désormais accepté jusqu’au 4ᵉ, mais ça peut changer). Yuriy Kosiuk et son MHP (volaille) coté à la Bourse de Londres, ayant bénéficié de centaines de millions d’euros de prêts de la BERD (sa présidente, Odile Renaud-Basso, était membre du Dîner du Siècle en 2020), font pression sur l'agriculture béarnaise. 


 </p>
          </div>
        )
      }
      ,



       {
        titre: "Démocratie en Bas, Monarchie en Haut",
        contenu: (
          <div className="space-y-4 font-corps text-gray-700 leading-relaxed">
            <p>
La logique républicaine (approuvée par 4 % des Parisiens en 1789) centralise et étouffe les libertés locales pour survivre, sans respecter le principe de subsidiarité (ce qui, hors cas d'abus, constitue la norme au sein de la monarchie, Bourbon octroyait des privilèges à Salies par connaissance réelle du terrain et pour l'honneur de sa famille, elle n’aurait jamais oser les tuer dès leur conception par amour et pour son salut). Elle formate les hommes autour d’une construction intellectuelle artificielle et anthropocentrique — le vote individuel ne menant à rien (même l’altruisme est vain sans coordination), désunissant les familles — culture commune détruite par la centralisation laissant place à une pluralité encadré par la République (inventions) Une et Indivisible  délimitant la liberté de pensée dans le nouvel état (à l’instar de demander “on va à la mer ou à la montagne? Je choisis la mer.” c’est une illusion de choix on aurait pu aller voir des châteaux) — quand l’argent rassemble les élites (“le riche aide le pauvre, le pauvre éprouve le riche”, Saint Augustin) — qui évolue au gré des intérêts lucratifs du moment (la liberté pour les riches, les ésotéristes) autour de la Marianne, de la sanguinaire Marseillaise imposée au peuple (pas besoin de chant, ni d’impérialisme avant), du bleu-blanc-rouge et dans le monde avec des “guerres publicitaires” (suivisme de marché et dénigrement de marque réifiant l’être humain). Elle transforme le citoyen en débiteur de l’État (psittaciste ignorant avec antiennes, diviser pour mieux régner), souvent par démagogie envers lui : si les corporations géraient elles-mêmes l’assurance et l’assistance, les citoyens dépendraient moins du gouvernement ce qui affaiblirait la République et son clientélisme électoral basé sur un problème sociétal (il faut qu'il y en ait toujours pour que vivent les partis, qui sont là pour “régler se problème” au lieu d’éradiquer la cause du désordre, comme une âme dans le péché) avec une justice quasi exclusivement féminine. Les problèmes de la France servent donc les intérêts privés des financeurs des partis (qui occupent l’espace public avec des sophismes de la pente glissante) et de leurs membres (la vaine gloire), et non ceux du peuple. Faisant fi de son existence, ils s'autorisent à l'anéantir dès sa conception (aux antipodes des droits de l'homme) en défendant les pédomeurtières ou à l'entraîner dans des guerres mondiales au nom d’une Nation alors qu’il faut protéger les plus fragiles (embryons, handicapés…). Une dictature lucrative (tous les 5 ans les loges nous demandent de choisir entre 10 vainqueurs de la Révolution, une illusion de choix) où « nul n'est censé ignorer la loi » (loi élaborée en loge selon leurs propres justifications de luxurieux et non issue de l'usage d'un peuple précis), avec des cc de but sophistique et du paternalisme à l'image des calvinistes qui détruisaient les églises pour "lutter contre l'idolâtrie, pour le bien du peuple, pour être heureux" (retirer et tuer un handicapé, qui ne péchera que peu si il a la chance de naître, à ses parents “pour son bien”), et où l’expropriation pour cause d'utilité publique est possible (appuyée par le fils du maçon Égalité). À l’inverse, la Monarchie de droit divin française (pouvoir temporel au service du spirituel) peut laisser une large autonomie aux familles, métiers et communes, en respectant la diversité vivante des régions et des corps intermédiaires grâce aux corporations et à la démocratie locale (on ne s’occupe que de ce qui nous regarde directement). Le pouvoir royal n’intervient pas dans les choix locaux concernant l’enseignement, la protection sociale ou la gestion communale, chaque province ou commune pouvant organiser librement ses ressources et ses responsabilités, sans qu’une loi votée à Paris n'impose ou n'interdise tout (Paris ne décide pas ce qu’un Saint-Palaisien doit penser). Le roi est ainsi déchargé des tâches locales pour se consacrer aux fonctions régaliennes : démocratie dans la commune, aristocratie dans la province et monarchie dans l’État. Par le pouvoir du sang, son intérêt personnel tend alors à se confondre avec l’intérêt général à l’instar du Béarn où nos Seigneurs ont toujours respecté la multiculturalité béarnaise (droits spécifiques des vallées, des plaines…) de manière empirique (adaptée aux circonstances comme l’évolution de l’être humain) et pragmatique plutôt qu’idéologique (ou lucrative) car il ne tient pas sa légitimité des lobbies bancaires, il peut s’en affranchir tout en encerclant les aristocrates.



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

export default async function HistoireDetailPage(
  props: {
    params: Promise<{
      categorie: string;
      slug: string;
    }>
  }
) {
const { categorie, slug } = await props.params;

const dataSource =
  categorie === 'monde'
    ? worldData
    : histoireData;

const pageData =
  dataSource[slug as keyof typeof dataSource];
  console.log("categorie =", categorie);
  console.log("slug =", slug);
  console.log("categorie =", categorie);
  console.log("slug =", slug);
  console.log("histoireData =", histoireData);
  console.log("worldData =", worldData);
  console.log("dataSource =", dataSource);
  console.log("pageData =", pageData);
  console.log("dataSource =", dataSource);
  console.log("pageData =", pageData);
  if (!pageData) notFound();


  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="relative h-96 bg-gray-900">
        
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
          {pageData.sections?.map((section, index) => (
  section && (
    <ExpandableSection
      key={index}
      titre={section.titre}
      enfants={section.contenu}
      defaultOpen={index === 0}
    />
  )
))}

          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-parchemin-fonce">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <a
            href="/histoire-condense"
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

    // Béarn
    ...Object.keys(histoireData).map((slug) => ({
      categorie: 'bearn',
      slug,
    })),

    // Monde
    ...Object.keys(worldData).map((slug) => ({
      categorie: 'monde',
      slug,
    })),
  ];
}
