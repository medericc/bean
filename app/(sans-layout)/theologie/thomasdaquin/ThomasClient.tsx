'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './thomas.module.css'
import Image from 'next/image'
// ── Données structurées ──────────────────────────────────────────
const sections = [
  {
    id: 'introduction',
    title: 'Foi, Espérance, Charité',
    subtitle: 'Pour « porter la foudre », savoir « rester nuage »',
    content: [
      'Les vertus théologales structurent la vie de l\'âme : la Foi permet de connaître la vérité, l\'Espérance oriente le désir vers la vraie fin, et la Charité rectifie totalement l’amour. Le croyant dispose d\'une intuition spirituelle suffisante pour savoir exactement ce qu\'il doit croire et faire pour être sauvé. Cette mesure de grâce lui permet d\'éviter l\'orgueil qui naîtrait de la prétention à une connaissance totale. ',
      'L’intelligence humaine est naturellement ordonnée à la recherche de la vérité. Dans cette optique, le travail intellectuel constitue un rempart indispensable contre l’oisiveté. Il représente aussi une responsabilité sacrée devant l’Église, où le savoir est conçu comme une œuvre de charité directement mise au service de la prédication.',
    'La syndérèse est la disposition naturelle de la raison qui nous fait connaître les premiers principes moraux. Elle se heurte principalement à trois grosses entraves. L\'ignorance est un défaut de connaissance par manque de préceptes, un manque de sagacité ou à cause de la luxure. La passion, les émotions et les désirs (comme la peur, la colère, le dégoût ou la fatigue) qui viennent perturber la raison. La malice, le fait pour la volonté de choisir le mal en totale connaissance de cause, sous l\'effet de la cupidité, du ressentiment ou d\'une mauvaise habitude.',
      'Face à cela, il faut faire preuve de circonspection. De plus, il faut se méfier des petits péchés répétés : semblables à une maladie qui fatigue le corps sans encore nuire gravement à la santé globale, ils nous préparent ou nous "disposent" à commettre un péché grave qui, lui, causera la perte de l\'âme.',
  
    'Exemple du désir mimétique : Si je veux absolument la même voiture que mon voisin par pur mimétisme, l\'analyse de ma faute dépend de la cause profonde. Si je suis sérieux dans ma démarche, c\'est de l\'ignorance, car cette voiture n\'est pas nécessaire à mon bonheur. Si c\'est simplement l\'envie et l\'émotion qui m\'entraînent, cela relève de la passion. Enfin, si j\'avais clairement remarqué que ce désir est mauvais et que je persiste, il s\'agit de malice.',
  
    'Le précepte "Tu aimeras ton prochain comme toi-même" signifie que l\'on doit aimer de la même manière, c\'est-à-dire en vérité et pour Dieu. Il s\'agit d\'aimer la part de Dieu qui est en nous et de vouloir notre union avec Lui ; ainsi, on aime le prochain pour Dieu, tout comme on s\'aime soi-même pour Dieu. Cela implique deux règles majeures : On ne s\'accorde avec le prochain que dans le bien, et jamais dans le mal. On aime le prochain pour son bien véritable, et non pour un avantage personnel ou pour son plaisir propre.',
      'La "sottise" est un vice qui rend l\'homme moins capable de juger sainement des choses morales et spirituelles, et elle découle principalement de la luxure. Par ailleurs, l\'acception des personnes est un péché qui consiste à honorer quelqu\'un pour des motifs illégitimes, comme ses richesses. En revanche, lors des élections, il est tout à fait légitime de ne pas choisir le meilleur dans l\'absolu, mais plutôt de désigner celui qui est le plus apte à servir le bien commun.'
  
  
  
  
  
  
    ]
  },
  {
    id: 'synderese',
    title: 'Les Biens Temporels',
    subtitle: 'Les ennemis de la pauvreté sont aussi les « ennemis de la croix du Christ »',
    content: [
    'Le souci des biens temporels est licite en lui-même, à condition de ne pas en faire sa fin ultime et de ne pas y mettre une application excessive au détriment des biens spirituels. Cet excès vient souvent de l\'avarice ou de la luxure, qui y contribue également en étouffant la raison. De leur côté, l\'envie et la colère causent l\'inconstance en détournant la raison vers un autre objet. La luxure, quant à elle, provoque cette même inconstance en éteignant totalement le jugement de la raison ; elle entraîne aussi la duplicité de l\'âme, qui passe alors sans cesse d\'un objet à l\'autre. Dans les relations, le but véritable doit toujours être le bien de l\'autre, et non le fait de plaire à ses sentiments du moment.',
    'Pour que la vie en société humaine fonctionne, il faut de l\'ordre. L\'adulation est un péché parce qu\'elle brise la vérité et la juste mesure dans les relations humaines, que ce soit pour flatter l\'ego de l\'autre ou par intérêt personnel. Ainsi, louer ce qui est mal, louer trop vite sans connaître la personne, ou louer pour nourrir l\'orgueil de quelqu\'un relève de la flatterie et constitue un péché.',
    'Le discernement repose sur l\'intention : vouloir plaire pour faire grandir la charité chrétienne est bon, tandis que vouloir plaire pour obtenir de la gloire humaine est mauvais. Il existe d\'ailleurs un devoir moral envers soi-même : pour être un homme vertueux, je me dois d\'être agréable avec les autres. Si l\'on flatte simplement pour « être agréable », par politesse, pour éviter un conflit ou par nécessité, ce n\'est pas contraire à la charité ; il s\'agit alors d\'un péché véniel (léger).',
    'En revanche, la flatterie devient grave lorsqu\'on flatte volontairement pour tromper et nuire à quelqu\'un, ou lorsqu\'on loue le péché de quelqu\'un (par exemple, en applaudissant une mauvaise action). Cela offense Dieu et encourage le mal chez le prochain. Cette flatterie, que l\'on dit pire qu\'un glaive, donne une occasion directe et grave à l\'autre de pécher, ce qui relève du principe du scandale.',
    'Regarder la vie des autres n\'est une bonne chose que si cela est fait avec une bonne intention, comme pour les aider ou pour corriger un problème. À l\'inverse, il est mauvais de regarder une personne par convoitise (désir impur) ou d\'épier la vie des autres pour pouvoir les critiquer, les dénigrer ou se moquer d\'eux.',
    'Par exemple, regarder une bête courir après une autre dans un champ par pur hasard et s\'arrêter pour observer, au lieu de continuer sa route ou sa méditation, constitue de la badauderie inutile. De même, regarder des spectacles ou passer son temps à examiner les défauts d\'autrui relève bien d\'un vice de curiosité qui passe par les sens. En somme, notre comportement extérieur ne doit jamais choquer, blesser ou scandaliser notre entourage.'
   
    ]
  },
  {
    id: 'intelligence',
    title: 'Le Péché Impardonnable',
    subtitle: 'On n\'est pas fait pour le confort mais pour la Grandeur',
    content: [
   'La notion de péché impardonnable reçoit différentes interprétations selon les Pères de l\'Église : attribuer au diable une œuvre qui est manifestement divine (Saint Hilaire), la persévérance finale dans le péché, c\'est-à-dire le fait de mourir sans vouloir demander pardon (Saint Augustin) ou le péché de malice (on pêche contre le Père par faiblesse car le Père est associé à la puissance, par ignorance face au fils car c\'est la sagesse et par malice face au Saint-Esprit, la bonté) qui détruit les freins naturels qui nous empêchent normalement de succomber au péché.',
'Commettre ce dernier péché, c\'est faire le mal en repoussant délibérément tout ce qui pourrait nous en détourner. On peut le commettre par présomption (en ne craignant plus la justice de Dieu (le manque de crainte divine), par attaque directe (en s\'en prenant à la vérité connue ou en enviant la grâce reçue par les autres), par impénitence (en ne pensant plus à la laideur du péché pour s\'en détacher) ou par obstination (en refusant de voir le vide du péché, ce qui empêche de s\'en détourner). C’est comparable à un patient qui rejetterait absolument tous les médicaments : son mal ne vient ni de la faiblesse ni de l\'ignorance, mais d\'un refus de guérir. Pour autant, l\'intervention divine peut toujours sauver un tel pécheur, même si cela dépasse totalement les forces humaines.',
'Les péchés les plus graves s\'attaquent à des ordres précis : l\'atteinte à la vie (comme l\'avortement), l\'atteinte à l\'ordre de la famille et du mariage (comme l\'adultère), l\'atteinte à la réputation (essentielle pour vivre en société), et enfin l\'atteinte aux richesses et aux biens matériels (comme le vol). Les pécheurs pensent à tort que leur être se résume à leurs désirs corporels, à l\'argent ou au pouvoir matériel. En agissant ainsi, ils détruisent leur propre âme : ils se laissent aller et ne s\'aiment qu\'à travers une illusion d\'eux-mêmes.'
,'Nous devons haïr ce qui fait nos ennemis nos ennemis, c\'est-à-dire leur péché (cette haine du mal découlant naturellement de l\'amour du bien) et nous devons les aimer en Dieu pour ce qui fait d\'eux des hommes, c\'est-à-dire leur nature créée par Dieu. La charité nous impose de les aider en cas de besoin extrême, sans qu\'il soit obligatoire d\'aller au-delà pour assurer leur salut.'
,'L\'amour de charité veut le bien et le salut éternel de l\'autre. Cet amour exclut toutefois les démons qui, étant déjà damnés, ne peuvent plus être aimés ainsi, sous peine d\'aller contre la justice de Dieu. Dans l\'ordre de la charité, le salut de l\'âme du prochain prime largement sur notre propre confort ou sur notre vie corporelle. Parfois même, la mise à mort d\'un criminel peut être un moyen de stopper son escalade dans le mal. '
,'Cet amour s\'adresse à tout le monde, mais selon des niveaux différents, car l\'action s\'exerce d\'abord sur ce qui est le plus proche, conformément à l\'ordre de la nature. Ainsi, les liens du sang (l\'affection pour sa mère, le respect dû à son père, l\'assistance apportée à son fils) ou le mariage créent des devoirs qui ne changent pas, contrairement aux relations contextuelles comme le travail avec des collègues. De plus, les personnes spirituellement faibles doivent éviter de s\'exposer au mal et veiller à ne pas conforter les schismatiques dans leur erreur.'
,'Notre relation à Dieu doit évoluer. Si l\'on commence par aimer Dieu pour ses bienfaits, il faut progresser vers un amour de Dieu pour lui-même. S\'arrêter aux bienfaits reviendrait à aimer les dons plutôt que le Donateur. On aime un remède en vue de la santé ; de la même manière, Dieu étant la fin ultime de toute chose, il doit être aimé pour lui-même.'
,'Les joies de l\'esprit sont intrinsèquement supérieures aux plaisirs du corps (la délectation). Alors que les plaisirs corporels sont précaires et corruptibles, les joies de l\'esprit — comme la joie de comprendre, la science ou la vertu — sont stables, durables et conduisent naturellement à la modération et à la sobriété.'
,'Le bien moral consiste pour l\'homme à agir conformément à sa nature d\'être doué de raison. La loi suprême de l\'homme est : « Deviens ce que tu es : homme, actualise jusqu\'à leurs plus extrêmes limites les virtualités de l\'être intelligent que tu es. » Faire le bien, c\'est donc développer pleinement ses capacités d\'intelligence et de sagesse. Cependant, tout ce qui arrive dans la nature n\'est pas forcément « normal » au sens moral ou biologique. La nature n\'est pas un chaos, mais une architecture de structures bien définies. Un « monstre » biologique ou une maladie s\'expliquent parfaitement par les lois de la physique et de la biologie (ils sont donc naturels dans leur mécanisme), mais ils constituent une corruption ou une anomalie par rapport au type idéal de l\'espèce (ils ne sont donc pas normaux).'
,'Cette distinction s\'applique également aux penchants humains. Pour un individu donné, ressentir des désirs envers une personne du même sexe peut être qualifié de naturel à son échelle individuelle, car cela répond à son organisation propre et à son idiosyncrasie (sa constitution particulière). Néanmoins, si l\'on se place du point de vue de l\'espèce humaine globale et de sa finalité intrinsèque (la reproduction), cela est comme une « inversion » ou une déviation de la règle générale. C\'est en ce sens que le « sophisme de Corydon » est ici rejeté.'


]
  },
  {
    id: 'amour-prochain',
    title: 'Aimer le Prochain',
    subtitle: '« Tout ce que vous voulez que les hommes vous fassent, faites-le aussi pour eux »',
    content: [
  'Corriger fraternellement son prochain est une obligation de charité. Il ne faut pas, cependant, reprendre un vieillard avec rudesse. Un péché passé n\'annule pas le droit de corriger autrui ; il peut même rendre la démarche plus crédible si le pécheur corrige avec humilité, en reconnaissant sa propre faute. Sur le plan spirituel, certains en viennent à haïr Dieu à cause de ses effets qui contrarient leurs désirs mauvais : ils détestent sa justice qui punit ou sa loi qui interdit le péché, car elle s\'oppose à leur volonté déréglée.',
  'Par ailleurs, nous avons tendance à aimer davantage les personnes dans lesquelles nous avons investi quelque chose de nous-mêmes, car elles deviennent en quelque sorte notre œuvre et nous rappellent le bien que nous avons accompli. De plus, aimer et donner sont des actes plus nobles que recevoir, et nous valorisons naturellement davantage ce qui nous a coûté un effort. Pour autant, aimer une personne bonne et qui vous aime en retour est objectivement supérieur à aimer son ennemi (dans ce dernier cas, on surmonte un obstacle, mais on n\'atteint pas le sommet de l\'amour de bienveillance).',
  'Concernant l\'ordre social et ecclésial, les excommuniés et les ennemis de l\'État ne doivent pas recevoir de bienfaits qui les aideraient à persévérer dans le mal, sauf en cas de nécessité vitale. De même, si un péché secret nuit gravement au bien commun (comme une trahison ou une hérésie), on doit le dénoncer immédiatement. En revanche, blâmer le mal peut aussi devenir un péché si on le fait n\'importe comment, sans respecter les circonstances ou les personnes. On n\'est pas moralement obligé de révéler une faute secrète qui n\'a causé aucun bruit public, sauf sur injonction d\'une autorité légitime ; mais si un innocent est accusé à tort, on a alors le devoir absolu de témoigner pour le décharger.',
  'Semer la discorde est intrinsèquement mauvais. Cela devient un péché mortel si l\'on se sépare sciemment du bien divin et du bien commun, mais la faute est moindre si l\'on défend un bien réel face à la résistance d\'autrui. En revanche, supprimer une mauvaise concorde fondée sur le mal n\'est pas un péché. Dans la même lignée, l\'acédie est un péché contre la joie que Dieu mérite, tandis que la dispute devient un péché lorsqu\'elle combat la vérité ou manque de mesure par vaine gloire. Il demeure néanmoins tout à fait légitime de combattre pour instaurer une paix véritable.'
 ]
  },
  {
    id: 'sottise',
    title: 'Avec les Autres',
    subtitle: '« Je ne recherche pas ce qui m\'est utile, mais ce qui l\'est au grand nombre »',
    content: [
     'Pendant une pause, on ne doit pas détruire l’harmonie intérieure ni les bonnes mœurs. Le jeu doit ainsi être utilisé comme le sommeil : un repos nécessaire après avoir accompli ses obligations sérieuses. En revanche, l\'excès de jeu se rattache directement aux péchés capitaux : il découle de la « joie inepte » (la fausse joie), qui est elle-même une fille de la gourmandise, entendue ici comme la recherche désordonnée du plaisir physique et sensoriel. De même, gaspiller ses biens pour encourager des comédiens surpayés ou qui jouent des spectacles immoraux constitue un vice. Pour autant, se priver totalement de jeu est contre-nature (notre âme est comme un arc, trop bandé il casse).',
      'Dans le même esprit de juste mesure, l\'homme doit s\'adapter vestimentairement aux usages du milieu où il vit afin de ne pas choquer. Briser les conventions locales par pur caprice ou par provocation est une faute, car il faut éviter le scandale. De plus, chercher à attirer l\'attention ou à paraître plus riche est un mal, tout comme le fait de donner une importance démesurée et une angoisse disproportionnée à sa toilette extérieure. Il convient plutôt de se contenter de peu. En effet, se négliger volontairement est aussi un défaut, qu\'il s\'agisse de paresse ou d\'un orgueil caché, comme lorsqu\'on s\'enorgueillit de porter des vêtements tristes et sales pour afficher une fausse piété (la vanité sous le prétexte de servir Dieu). Nos vêtements doivent, au contraire, refléter honnêtement et sobrement ce que nous sommes, dans un souci de vérité. À cet égard, porter les habits du sexe opposé est grave si cela est fait pour des raisons de débauche ou d\'idolâtrie ; en revanche, si cela arrive par nécessité absolue, l\'acte est bon. Il faut se contenter de peu (simplicité) sans porter de vêtements pour flatter le corps.',
      'Sur le plan moral et spirituel, la crainte mondaine est mauvaise car elle fait passer le regard des autres avant la vérité ou la justice, alors qu\'il faudrait affirmer la primauté de la vérité sur la réputation ou la paix apparente. Par cette crainte, on participe au mal simplement pour s\'intégrer, illustrant ainsi la banalité du mal par lâcheté et conformisme social. Il faut la distinguer des autres formes de crainte : la crainte servile consiste à obéir aveuglément à une autorité uniquement pour ne pas commettre de faute ; la crainte initiale est la peur de souffrir et de mal agir, ce qui pousse à commencer à faire le bien autour de soi, même si cette peur du chagrin ou de la douleur physique peut parfois freiner l\'individu ; et enfin, la crainte filiale, qui est la peur de décevoir l\'être aimé, et qui permet d\'agir de façon droite sans craindre le rejet du monde.',
    ]
  },
  {
    id: 'pauvrete',
    title: 'Le Bien ou Mal',
    subtitle: 'La Source des Actes Humains',
    content: [
      'L\'animal est entièrement guidé par l\'instinct, tandis que l\'homme possède une plasticité unique, portée par son intellect et sa volonté, qui lui permet d\'évoluer. Dans cette dynamique, l\'habitus — défini comme une disposition permanente et stable à agir conformément à la raison — est une qualité durable que l\'esprit humain acquiert par la répétition d\'actes analogues (même si un choc unique, comme la compréhension d\'une proposition évidente, peut parfois suffire). Cet habitus vient s\'ajouter aux propensions naturelles de l\'individu, telles que son tempérament particulier. Il agit comme une structure interne qui nous incline à bien agir (la vertu) ou à mal agir (le vice), transformant ainsi nos facultés brutes en outils d\'action précis. Toutefois, cet habitus peut s\'affaiblir par la simple cessation de ses actes ou par l\'accomplissement d\'actes contraires.',
      'Le bien se définit par sa conformité à la raison et à l\'ordre, à l\'inverse du mal. Une action est ainsi dite bonne si son objet convient à la situation (par exemple : donner à quelqu\'un ce qui lui est dû). L\'évaluation d\'un acte dépend également du but recherché par son auteur, car les circonstances peuvent à elles seules rendre une action mauvaise. Ainsi, donner de l\'argent (un acte extérieur bon) dans le seul but de flatter son ego rend l\'acte mauvais ; de même, une bonne intention combinée à des moyens choisis qui sont mauvais gâte la moralité de l\'action.',
      'Sur le plan juridique et moral, la Loi Éternelle, qui est la sagesse même de Dieu, se reflète dans l\'homme sous la forme de la loi naturelle — c\'est-à-dire la raison humaine qui cherche spontanément le bien —, excluant ainsi tout désir arbitraire ou l\'usage de la pure force. L\'homme traduit ensuite cette loi naturelle en lois humaines pour organiser la société. Cette démarche se rattache à la raison pratique, qui ordonne les actions humaines vers une fin dernière : le bonheur individuel (la béatitude) et le bien de la communauté. Pour être valides, ces lois humaines doivent impérativement être justes et rationnelles. Si les dirigeants promulguent des lois par « cupidité », par « soif de gloire » ou s\'ils répartissent iniquement les charges, ces lois deviennent injustes, et il vaut alors mieux obéir à Dieu qu\'aux hommes.',
        ' L\'accomplissement suprême de l\'homme ne réside pas dans une soumission forcée sous le coup de la sanction, mais dans l\'adhésion libre et aimante au Bien et à l\'Ordre universel. Les peines et les récompenses ne sont que des adjuvants destinés à éduquer l\'homme ou à réparer l\'ordre rompu. La liberté humaine authentique s\'accomplit pleinement lorsque l\'homme embrasse volontairement l\'ordre universel et la loi divine, non pas comme une contrainte extérieure, mais comme l\'expression d\'une « loi d\'amour », comparable à celle d\'un père envers ses enfants.',
    ]
  },
  {
    id: 'flatterie',
    title: 'L\'Amour',
    subtitle: 'Racine de toutes les passions',
    content: [
      'La passion est une modification de l’âme qui résulte de son union avec le corps, provoquée par la perception d’un objet extérieur (par exemple, la vision d\'un danger provoque la crainte). Face à ces perceptions, l’appétit sensitif — également présent chez les animaux — réagit de deux par le concupiscible (la recherche des objets utiles ou agréables comme la nourriture) ou l\'irascible  (la réaction face aux obstacles ou aux objets nuisibles, qui se traduit par la colère ou la fuite). Toutes les passions découlent d’une seule et même racine : l’amour. De cet amour s\'ensuit le désir d’atteindre l’objet, puis enfin la joie (ou le repos) lorsque cet objet est possédé. On distingue cet appétit sensitif de l’appétit naturel, qui est la tendance inconsciente d’une chose à suivre sa propre nature, à l\'image d\'une pierre qui tombe vers le sol ; il s\'agit là d\'un amour inconscient. L’homme, quant à lui, possède en plus l’appétit rationnel : chez lui, la complaisance envers un objet passe par un libre jugement de la raison, ce qui fonde la moralité. Alors que pour Aristote la morale vise à faire un bon citoyen, Thomas d’Aquin la conçoit comme ce qui lie l’individu à Dieu. La dignité de l’homme vient précisément du fait qu’il est maître de ses actes. Bien qu’il ressente les passions animales, sa raison lui permet de les dominer et de décider librement de sa conduite.',
      
      
      'Pour qu’il y ait amour, il faut d’abord une connaissance de l’objet. Le bien satisfait le désir de possession (le côté pratique et utile), tandis que le beau apporte une joie purement intellectuelle ou sensible par sa simple contemplation, sans qu’on ait besoin de « consommer » l’objet.',
      
      'Lorsque l\'homme, de manière raisonnable, choisit librement d’aimer un être en raison de sa haute valeur, on parle de dilection. Lorsque cet amour dure et devient une habitude permanente de l’âme, il prend le nom d\'amitié. Il y a l\'amour de convoitise qui consiste à aimer quelque chose ou quelqu\'un non pas pour ce qu\'il est en soi, mais pour le bien ou le plaisir qu\'il nous procure. C\'est un amour basé sur le manque, comme l’amour des biens matériels, ou une relation où l’autre n’est qu’un moyen de satisfaire un besoin personnel (on aime le vin pour le plaisir qu’il donne, mais on n’a pas d\'« amitié » pour le vin) et l\'amour d’amitié (le vrai) qui  consiste à aimer quelqu\'un pour elle-même, pour sa dignité propre, en voulant le bien de l’autre de manière totalement désintéressée. Il est toutefois possible d\'aimer ses amis pour eux-mêmes tout en trouvant du plaisir et des avantages dans cette relation, sans que cela ne détruise complètement l’amitié. Cet amour d\'amitié naît souvent d’une ressemblance, à l\'instar de deux artistes ou de deux savants qui se reconnaissent. Dans l’amitié, l’ami est traité comme un « autre soi-même ». Les deux volontés fusionnent alors pour avoir les mêmes désirs et les mêmes refus, ce qui constitue le sommet de l’amour.',
     
      'Par définition, l’amour est extatique, c\'est-à-dire qu\'il fait sortir de soi mais dans  l’amour de convoitise, l’extase est limitée (la volonté sort d’elle-même pour aller chercher l’objet convoité, mais c’est pour le ramener à soi) contrairement à l\'amour d\'amitié où l’extase est totale, l’aimant sort complètement de soi pour vivre dans l’aimé, oubliant ses propres intérêts pour ne se soucier que de ceux de son ami.',
    
    
      'Puisque l’amour cherche naturellement l’union avec l’objet aimé, il engendre une réaction de défense si cette union est menacée : la jalousie.  Il y a la jalousie de convoitise (refus du partage) comme un mari jaloux qui veut sa femme pour lui seul et exclut tout rival (nuance de haine qui naît de la peur de perdre sa possession) et la jalousie d\'amitié ("Sainte Jalousie") qui est l’indignation face à ce qui pourrait nuire à l’ami ou à Dieu. Ici, la jalousie n’est pas de l’égoïsme, mais une force qui pousse à corriger le mal fait à l’être aimé, ou à pleurer s’il échoue. L’amour pris en lui-même n\'est pas une passion destructrice ; il est naturel et bienfaisant. S’il cause des ravages (comme dans la mauvaise jalousie), c’est soit parce qu\'il se trompe d’objet en prenant un mal pour un bien, soit parce que l’intensité de la passion physique et les troubles organiques menacent l’équilibre du corps.',
      'L’amour est la force universelle de la nature qui pousse vers un but ou vers un bien. La haine en est le strict contraire : elle est le refus ou le désaccord face à ce qui est nuisible. En réalité, si l’on hait quelque chose, c’est parce que l’on aime le bien que cette chose détruit ; l’amour reste donc toujours la cause première. Il y a d\'autres passions comme le désir (la forme que prend l’amour lorsque l’objet aimé est absent), l\'aversion (la répulsion face à un mal futur, ce qui la rend proche de la crainte), la concupiscence ( le désir des biens de la vie animale comme la nourriture ou la sexualité) et la cupidité, en revanche, est propre à l’homme car elle passe par l’esprit. Comme la raison humaine peut concevoir une infinité de choses, la cupidité — qui est le désir d’accumuler de l’argent, du pouvoir ou du savoir de manière déréglée — devient infinie et sans limites naturelles.'
    ]
  },
  {
    id: 'curiosite',
    title: 'La Morale',
    subtitle: 'L\'Économie des Passions',
    content: [
      'La nature humaine aime le changement ; ainsi, le souvenir d\'un plaisir passé (et même d\'une peine passée, en se réjouissant d\'y avoir survécu) ou l\'espoir d\'un plaisir futur provoquent du plaisir. Le plaisir en soi n\'est ni bon ni mauvais : il le devient selon qu\'il s\'accorde ou non avec la raison. Par exemple, l\'usage des organes sexuels est naturel si sa fin est la reproduction et l\'éducation des enfants. C\'est pourquoi le mariage n\'est pas vu uniquement comme un lien sexuel, mais comme la plus intime et la plus solide des amitiés humaines.',
      'À l\'inverse, une tristesse profonde peut paralyser l\'esprit, provoquant la stupeur et une impression de « stupidité » temporaire, tout en affectant directement le corps par la fatigue et la lassitude physique. Pour lutter contre cette diminution des forces vitales, on peut pleurer pour extérioriser sa peine, la partager avec un ami, ou encore recourir au sommeil, aux bains et aux sédatifs. Par ailleurs, si l\'on éprouve de la tristesse face à un vrai mal, cette tristesse est moralement louable : elle agit alors comme une protestation de l\'âme et une invitation à fuir ce mal.',
      'En ce qui concerne les passions de l\'irascible, qui sont les forces de l\'âme face aux obstacles, on distingue d\'abord l\'espoir : il naît du désir d\'un bien futur, mais d\'un bien difficile à obtenir. C\'est une force positive qui pousse à l\'action. Le désespoir, quant à lui, survient lorsque l\'obstacle paraît totalement insurmontable. L\'esprit abandonne alors la poursuite du bien et ressent une forme de rancune contre ce qu\'il ne peut pas avoir. Ce désespoir peut d\'ailleurs se transformer en une force brutale, à l\'image d\'un soldat acculé qui va se battre comme un héros parce qu\'il n\'a plus rien à perdre. La vie morale est l\'art d\'agir au quotidien en vue du bonheur et de la perfection humaine.'
    ]
  },
  {
    id: 'peche-impardonnable',
    title: 'La Prudence',
    subtitle: '« Le prudent est celui qui voit loin »',
    content: [
  'La prudence est la vertu de la « raison pratique », c\'est-à-dire qu\'elle sert à choisir les bons moyens pour atteindre une bonne fin, et elle exige de ce fait une liberté totale d\'esprit. Loin d\'être innée, elle ne se résume pas non plus à la simple expérience que l\'on accumule au hasard des rencontres. Au contraire, elle demande de faire revivre ses souvenirs et d\'analyser chaque cas particulier.','Pour être véritablement prudent, il faut savoir être docile en suivant l\'enseignement des anciens, tout en se montrant prompt d\'esprit pour trouver rapidement par soi-même ce qu\'il convient de faire. Cela implique également de peser minutieusement les circonstances à travers la précaution, la circonspection et la prévoyance.','L\'ennemie jurée de la prudence est la luxure, car elle aveugle notre faculté de juger et s\'impose comme la mère de l\'imprudence. Il ne faut pas non plus confondre la vraie prudence avec les « fausses prudences », comme celle qui consiste à organiser toute sa vie autour des biens matériels et charnels (la prudence de la chair).',' La passion la plus difficile à maîtriser et qui trouble le plus le jugement reste la peur. Pour la surmonter, il faut faire preuve de courage — qui renvoie à la force, une vertu cardinale (du latin cardo, le gond sur lequel tout tourne) — et de tempérance. Pour autant, ce courage ne doit pas dériver vers un excès d\'optimisme, vers l\'inconscience ou vers la colère.'
 ]
  },
  {
    id: 'peches-gravite',
    title: 'La Force',
    subtitle: 'Patience, persévérance, tempérance',
    content: [
 
 'L\'homme fort ressent la douleur et la peur, mais il ne se laisse pas absorber par elles. Il peut même utiliser la colère comme une auxiliaire de sa force, en la transformant en un moyen au service de la vertu.', 'L\'homme magnanime connaît sa grandeur, mais il la conçoit comme un don divin. Ainsi, plus il se sait grand par la grâce de Dieu, plus il s\'honore lui-même en honorant ce qui est grand chez les autres, et plus il se fait petit face à Dieu. La vraie grandeur d\'âme a pour compagne fidèle l\'humilité.','Pour rester dans cette juste mesure, il faut éviter la pusillanimité (le refus de tendre vers le grand), la présomption (se croire plus capable qu\'on ne l\'est en réalité) ou encore l\'ambition ( recherche l\'honneur pour le plaisir de la distinction et non comme la simple conséquence du bien). Cette recherche de vaine gloire se manifeste par la jactance, la volonté de se singulariser, l\'hypocrisie et l\'esprit de contention (le refus de céder dans une discussion par manque d\'intelligence).', 
 'À l\'inverse, la magnificence consiste à faire et à produire quelque chose de grand, au moins dans la mesure de ses moyens, à l\'image de la création divine, et non pas simplement à le vouloir. Le magnifique est celui qui ne recule pas devant la dépense nécessaire pour accomplir de grands projets ; il s\'oppose à la mesquinerie, qui rend toute grande œuvre impossible. Dans ce combat spirituel, la patience empêche l\'âme de se laisser écraser par la tristesse, tandis que la persévérance (le fait de persévérer aussi longtemps qu\'il le faut dans une action vertueuse) combat à la fois la mollesse (le manque de force) et l\'obstination.','La tempérance, quant à elle, consiste à régler sa sensibilité et non à être totalement insensible au plaisir, notamment ceux liés à la conservation de l\'individu par la nourriture et à la conservation de l\'espèce par la reproduction. Elle est le fondement de toutes les autres vertus cardinales, car sans elle, le contrôle de soi s\'effondre face aux désirs sensibles.','L\'intempérance est un vice doublement déshonorant et exécrable qui ravale l\'homme au niveau de la brute. Les excès de table (amène l\'hébétude mentale, la sottise ou une loquacité intarissable) ou de plaisirs charnels (rend incapable de réfléchir mûrement ou de tenir ses promesses, et s\'exprime de manière grossière) embrument l\'esprit et empêchent l\'exercice de l\'intelligence et de la pensée supérieure. Si le viol, l\'adultère ou l\'inceste sont des fautes extrêmement graves, saint Thomas considère que la sodomie et l\'onanisme constituent les pires des dérèglements, car ils refusent le principe même et l\'ordre établi par la nature.','La colère en soi n\'est ni bonne ni mauvaise. La mansuétude et la patience permettent de la modérer et de la maîtriser, tandis que la clémence permet de modérer le châtiment ou le désir de vengeance en le soumettant à la raison. L\'orgueil, de son côté, est dans l\'irascible intellectuel (les anges peuvent l\'avoir) et est lié au désir d\'indépendance absolue et au refus d\'accepter ses propres limites (premier pas hors de Dieu), il en découle la vaine gloire (étaler cette supériorité). Son remède est l\'humilité, qui consiste à connaître ses propres limites et à attribuer à Dieu ce que l\'on a de bon (elle sert de frein) sans se rabaisser (magnanimité, l\'accélérateur) devant un grand but (entre excès et découragement). La vaine curiosité (apprendre pour se croire supérieur, étudier des choses inutiles ou des créatures de Dieu sans les relier à leur fin) est un vice. Elle s\'oppose à la studiosité qui la tempère sans tomber dans la paresse (fatigue de l\'étude) et permet chercher la vérité convenablement, d\'observer les autres pour s\'inspirer d\'eux ou de les corriger sans être détourner d\'une méditation profitable (s\'arrêter pour regarder un chien qui est une perte de temps, ou dénigrer quelqu\'un).'
 
    ]
  },
  {
    id: 'joies-esprit',
    title: 'La Justice',
    subtitle: 'Droit, honneur, réputation',
    content: [
      'Le droit conçoit une égalité pour ajuster les rapports entre les hommes à travers trois dimensions : le droit naturel (qui établit une équivalence stricte, comme donner une somme d\'argent pour recevoir un bien de valeur équivalente), le droit positif (qui découle d\'une convention, comme décider par contrat qu\'une propriété vaut telle somme) et le droit des gens (qui pose des principes universels, comme l\'interdiction de ôter la vie sans raison légitime).'
      ,'Sur le plan moral, commettre une action injuste par ignorance ou sous le coup de la colère ne fait pas instantanément de vous un « homme injuste ». L\'injustice ne devient un vice profondément ancré que lorsque l\'on choisit de commettre des actes injustes de manière délibérée et habituelle. Face à cela, l\'autorité légitime doit toujours se rappeler qu\'il vaut mieux absoudre un coupable que de condamner un innocent.',
      'Le népotisme est clairement défini comme un vice, puisqu\'il consiste à choisir une personne uniquement parce qu\'elle appartient à notre famille, et non en fonction de ses compétences pour le travail à accomplir. Concernant les peines, la peine de mort est considérée comme justifiée pour éviter qu\'un individu corrompu ne contamine le reste de la société (propager un péché mortel). Quant à l\'honneur, il doit être réservé à la vertu ou à l\'exercice d\'une charge publique, et non à la fortune personnelle.',
      'Le suicide est une faute majeure pour trois raisons : d\'abord, c\'est usurper un droit de vie et de mort qui n\'appartient qu\'à Dieu ; ensuite, la loi naturelle veut que tout être vivant s\'aime lui-même et cherche à se conserver ; enfin, se donner la mort revient à priver la communauté des services qu\'on lui doit. À l\'inverse, le meurtre n\'est excusable que s\'il survient de manière accidentelle, alors que l\'intention initiale était strictement de sauver sa propre vie.'
   ,      'La parole engage une lourde responsabilité. Dire « Un tel a volé » au bistrot du coin dans le but de détruire la réputation de quelqu\'un constitue une diffamation, même si le fait est avéré. De plus, si l\'on écoute ces propos avec plaisir par animosité envers la personne critiquée, ou si l\'on pousse le diffamateur à continuer par nos questions, on participe alors pleinement au péché.'
    ]
  },
  {
    id: 'correction',
    title: 'Le Commerce et la Politique',
    subtitle: 'Juste prix, propriété, régime',
    content: [

    'Le riche qui accumule du superflu sans le distribuer commet une faute, même si la propriété privée reste nécessaire pour garantir la paix sociale. Dans le cadre des relations quotidiennes, si un vendeur propose un produit défectueux, il convient d\'aller le voir directement pour régler le problème en privé plutôt que de s\'en prendre à lui sur la place publique. Par ailleurs, l\'affront (la diffamation ou l\'atteinte à la réputation) constitue un péché grave, tout à fait comparable au vol, car l\'honneur a une valeur bien supérieure aux biens matériels. Face à une telle offense, il ne faut pas répliquer par esprit de vengeance, mais on peut agir dans le but de corriger les mœurs de l\'offenseur. Quant à la taquinerie, elle n\'est pas un péché en soi, sauf si elle est animée par l\'intention de blesser volontairement.',
        'Sur le plan économique, Saint Thomas d\'Aquin développe la notion de « juste prix » et considère qu\'il est illicite de vendre un bien plus cher que sa valeur réelle. Le besoin propre du vendeur peut justifier une majoration du prix (si le produit lui est particulièrement utile), mais le besoin pressant de l\'acheteur (une situation d\'urgence) ne saurait justifier une hausse des tarifs. Si la concurrence influence naturellement les prix, elle ne crée pas pour autant une obligation stricte d\'information de la part du vendeur. Enfin, le profit est légitime s\'il est conçu comme un moyen – un instrument – pour servir l\'État, entretenir son activité, aider les pauvres ou faire vivre sa famille ; en revanche, chercher à accumuler toujours plus d\'argent, sans autre but que l\'enrichissement personnel, est moralement désordonné.',
            'En matière politique, la monarchie est considérée comme le meilleur régime en soi en raison de l\'unité qu\'elle procure. À l\'inverse, la tyrannie issue d\'un gouvernement collectif est pire et s\'avère plus fréquente. Sur le plan de la foi, on ne doit jamais conférer une nouvelle autorité à un non-chrétien sur des chrétiens, sauf si cette autorité existe déjà historiquement et qu\'elle ne met pas en danger la foi des croyants. Enfin, les rites des autres religions sont tolérés par simple pragmatisme politique, afin de maintenir la paix sociale.'
       
       


       
        ]
  },
  {
    id: 'haine-discorde',
    title: 'Le Souverain Bien',
    subtitle: 'L\'âme, le péché',
    content: [
      'Les sciences basées sur le monde sensible — ce que l\'on voit, touche et ressent — sont intrinsèquement limitées. Dans la nature, rien ne se fait au hasard : chaque chose est guidée vers un but précis, une fin, comme la pierre qui tombe ou la flamme qui s\'élève.',
      'De la même manière, le corps est subordonné à l\'âme, à l\'image de la matière qui est subordonnée à la forme. Dès lors, le but de l\'homme ne peut pas simplement être de préserver son enveloppe corporelle. En effet, dès que nous possédons un bien créé, nous en désirons toujours un autre. Notre âme n\'est pas sa propre fin dernière ; notre esprit est souvent « en puissance » — c\'est-à-dire qu\'il a seulement le potentiel d\'apprendre —, ce qui démontre qu\'il est incomplet par lui-même. C\'est le Souverain Bien (Dieu), en tant que désir infini, qui vient combler infiniment le cœur de l\'homme.',
      'Sur le plan moral, la gravité d\'un péché se mesure à la distance qu\'il instaure entre l\'homme et Dieu. Ainsi, l\'infidélité est le pire des péchés par sa nature même, même si les circonstances peuvent parfois atténuer les choses. Enfin, celui qui meurt en état de péché mortel — semblable à l\'arbre qui tombe — emporte avec lui une volonté qui déteste la justice divine. C\'est cette même volonté, restée intacte, qui produit le blasphème dans l\'au-delà.'
        ]
  },
  {
    id: 'jeu-vetements',
    title: 'Le Mensonge',
    subtitle: 'Dissimuler vs simuler',
    content: [
  'Si le mensonge porte sur des choses insignifiantes qui ne nuisent ni à la foi ni au salut de quiconque (comme mentir sur l\'heure qu\'il est ou exagérer un exploit pour s\'amuser), il s\'agit d\'un péché véniel. En revanche, le mensonge pernicieux, commis par orgueil ou par vaine gloire dans le but de porter atteinte à autrui, est grave. De même, lorsqu\'il est dicté par la cupidité (l\'appétit du lucre), le mensonge devient généralement un péché mortel : se vanter en se faisant passer pour un médecin ou un devin dans le but de tromper les gens et de leur extorquer de l\'argent cause un préjudice direct et volontaire au prochain.',
  'Les actes extérieurs, tout comme les mots, ont pour but naturel de manifester notre intériorité ; détourner leur sens pour tromper autrui constitue donc une perversion. À cet égard, il existe une immense différence entre dissimuler et simuler : dissimuler (taire ou cacher une vérité) est souvent permis pour éviter un scandale ou pour protéger son âme, alors que simuler (inventer une fausse réalité par des actes) est un péché.',
  'L\'hypocrisie est mortelle si elle est utilisée pour nuire ou pour frauder gravement la religion et le prochain ; elle reste cependant vénielle si elle ne naît que d\'une petite vanité ou du simple plaisir puéril de paraître meilleur qu\'on ne l\'est. Par ailleurs, si l\'on s\'attribue des défauts que l\'on sait pertinemment ne pas avoir, ou si l\'on nie posséder de grandes qualités que l\'on a manifestement, on commet un péché car cela reste un mensonge. On ne doit jamais commettre un péché (le mensonge) pour en éviter un autre (l\'orgueil), car l\'humilité ne doit jamais détruire la vérité. C\'est pourquoi il est encore pire de parler ainsi lorsque cette fausse humilité est calculée et feint la misère dans le seul but de manipuler les gens.',
    'L’infidélité détruit la grâce (laquelle permet de réaliser des œuvres méritoires pour le salut), mais elle ne détruit pas la nature humaine : les infidèles peuvent donc toujours accomplir des actions bonnes. Concernant la gravité des fautes, l\'hérétique (qui détruit la foi qu\'il a reçue) pèche plus gravement que le juif (qui rejette l\'accomplissement des promesses), qui lui-même pèche plus gravement que le païen (qui n\'a jamais rien reçu). Certes, le païen se trompe sur un plus grand nombre de choses que l\'hérétique, mais en théologie, l\'intention de s\'opposer à la vérité connue est un critère plus lourd.',
        'Si des paroles répréhensibles sortent par surprise, sous le coup de la passion ou de la colère, sans que l\'on réalise la portée de ses mots, il s\'agit d\'un péché véniel car il n\'y a pas de réelle intention. En revanche, si l\'on est pleinement conscient de ce que l\'on dit, même sous le coup de la colère, la gravité du péché mortel demeure entière, tout comme un meurtre commis sous le coup de la colère reste un meurtre. De manière générale, un péché est mortel s\'il détruit la charité (c\'est-à-dire l\'amour et l\'amitié avec Dieu). Blasphémer contre un saint revient, par extension, à blasphémer contre Dieu lui-même.'
    ]
  },










  {
    id: 'craintes',
    title: 'L\'Hérésie',
    subtitle: 'Primauté de la vérité',
    content: [
      'L\'hérésie est une « œuvre de la chair », non pas parce qu\'elle tire son origine du corps physique, mais parce que la « chair » désigne ici le fait de vivre selon ses propres désirs humains plutôt que selon l\'Esprit de Dieu.  Il faut distinguer l\'hérésie du schisme : le schisme est un péché contre le prochain, ce qui le rend moindre que l\'infidélité, laquelle constitue un péché direct contre Dieu.',
      'Concernant l\'attitude de l\'Église face aux non-baptisés, aucune mesure coercitive ne doit jamais être exercée pour les forcer à se convertir. Agir autrement créerait un grave danger d\'apostasie et violerait le droit naturel, voulu par Dieu, qui veut que les parents s\'occupent de leur enfant tant qu\'il n\'est pas autonome ; on ne peut en effet commettre un mal – une injustice envers les parents – pour obtenir un bien comme le baptême. En revanche, la situation est différente pour l\'hérétique, qui est tenu de respecter la foi qu\'il a librement juré de garder. Face à lui, l\'Église peut prononcer des punitions, l\'excommunier et le laisser seul.',
      'Si l\'hérétique s\'obstine à falsifier la foi et à déranger la communauté – ce qui constitue un crime trois fois plus horrible puisque la communauté fait vivre l\'âme pour l\'éternité –, l\'Église perd l\'espoir de le voir se convertir. Elle se doit alors de protéger les autres fidèles de sa « contagion », car l\'absence de sanction donnerait une impression d\'impunité qui encouragerait d\'autres personnes à tomber à leur tour dans l\'hérésie. Dans ce cas, si l\'Église accepte la confession de l\'hérétique pour sauver son âme, elle ne le protège plus de la peine de mort civile. En effet, alors que Dieu lit directement dans les cœurs et sait si un repentir est sincère, l\'Église, par sa nature humaine, ne peut pas sonder les cœurs. Quant au commandement du Christ de pardonner soixante-dix-sept fois, il s\'applique aux offenses personnelles commises contre un frère, et non à ce type de crime. Néanmoins, si les hérétiques sont trop nombreux, il convient de ne pas appliquer ces sanctions afin d\'éviter une guerre civile. De la même manière, il est risqué d\'aller débattre avec un infidèle si l\'on est soi-même influençable.'
        ]
  },
  {
    id: 'bien-mal',
    title: 'Le Pêcheur',
    subtitle: 'Médisance, moquerie, malédiction',
    content: [
  
  'La gravité d\'un péché dépend fondamentalement de son but (sa fin) et non des mots utilisés, car, dans le domaine de la morale, c\'est la fin d\'une action qui lui donne sa forme propre. Par exemple, si vous donnez de l\'argent par justice, votre acte prend la « forme » de la justice. Or, la charité oriente toutes les actions humaines vers la fin ultime et suprême qui est Dieu. C\'est à la lumière de ce principe qu\'on peut évaluer la gravité des fautes contre le prochain : ainsi, le but du médisant, qui cherche à diviser, est pire que celui du diffamateur, qui cherche à noircir une réputation. L\'amitié étant le bien le plus précieux, l\'acte de médisance qui veut la détruire s\'avère particulièrement grave.',
  'Cette question de l\'intention et de la fin se retrouve également dans la moquerie. On peut rire d\'un petit défaut sans gravité chez quelqu\'un, ce qui ne constitue qu\'un péché véniel. En revanche, la véritable moquerie contient un mépris total du prochain ; elle se réjouit du malheur ou du défaut d\'une personne parce qu\'elle l\'estime si peu qu\'elle ne s\'en soucie pas.',
  'De même, l\'intention redéfinit la portée de ce qui ressemble à un souhait de malheur. On peut en effet souhaiter à un pécheur une épreuve pour qu\'il se corrige : souhaiter un mal pour obtenir un bien — en l\'occurrence la correction du pécheur — ne s\'oppose pas à la charité, mais constitue au contraire une forme de sollicitude rigoureuse. Ainsi, même si l\'on ne connaît pas le destin éternel et secret d\'un homme devant Dieu, on peut légitimement le maudire, au sens de le châtier, en fonction des fautes visibles et manifestes qu\'il commet ici-bas. La faute reste également mineure si le mal souhaité est minuscule et sans réelle gravité, ou encore si les paroles sont prononcées à la légère, pour plaisanter, ou sous le coup d\'une colère passagère, sans que le cœur ne désire véritablement le malheur de l\'autre par manque d\'intention.',
  'La comparaison entre la diffamation et la malédiction dépend elle aussi de la nature de l\'acte et de sa fin. La diffamation est généralement plus grave que la malédiction si cette dernière n\'est qu\'un simple souhait, car le désir d\'un malheur physique est moins grave que la destruction délibérée de la réputation morale d\'un homme. Toutefois, la malédiction devient plus grave que la diffamation si elle prend la forme d\'un commandement impératif visant à ordonner le malheur, ou si le préjudice physique souhaité est gigantesque, comme lorsqu\'on souhaite la mort de quelqu \'un.',
  
    ]
  }
  
  
  
  




]

// ── Composant Carte ──────────────────────────────────────────────
function SectionCard({
  title,
  subtitle,
  content,
  delay,
}: {
  title: string
  subtitle: string
  content: string[]
  delay: number
}) {
  const [expanded, setExpanded] = useState(false)
  const previewLength = 1
  const isLong = content.length > previewLength
  const displayed = expanded || !isLong ? content : content.slice(0, previewLength)

  return (
    <article
      className="animate-fade-up"
      style={{
        animationDelay: `${delay}s`,
        background: 'var(--blanc-pur)',
        borderRadius: '20px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        border: '1px solid var(--violet-tres-clair)',
        transition: 'all 0.3s',
        boxShadow: '0 5px 20px rgba(75, 30, 109, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--jaune-vif)'
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(75, 30, 109, 0.12)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--violet-tres-clair)'
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(75, 30, 109, 0.05)'
      }}
    >
      <p style={{
        fontSize: 'var(--fs-xs)',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: 'var(--violet-clair)',
        marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
        fontWeight: '600'
      }}>
        {subtitle}
      </p>

      <h3 style={{
        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
        color: 'var(--violet-profond)',
        marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
        fontWeight: '700',
        lineHeight: 1.3
      }}>
        {title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
        {displayed.map((paragraph, i) => (
          <p key={i} style={{
            fontSize: 'var(--fs-base)',
            color: 'var(--texte-principal)',
            lineHeight: 1.7
          }}>
            {paragraph}
          </p>
        ))}
      </div>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: 'clamp(1rem, 2vw, 1.5rem)',
            background: 'none',
            border: 'none',
            color: 'var(--violet-clair)',
            cursor: 'pointer',
            fontSize: 'var(--fs-sm)',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--jaune-vif)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--violet-clair)' }}
        >
          {expanded ? '↑ Voir moins' : `↓ Lire la suite (${content.length - previewLength} paragraphes)`}
        </button>
      )}

      <div style={{
        marginTop: 'clamp(1.5rem, 3vw, 2rem)',
        height: '1px',
        background: 'linear-gradient(to right, var(--jaune-vif), transparent)'
      }} />
    </article>
  )
}

// ── Page Principale ──────────────────────────────────────────────
export default function SaintThomasAquinPage() {
 const [langue, setLangue] =
  useState<'fr' | 'be'>('fr')

    return (
    <>
    
      <style jsx global>{`
        :root {
          --violet-profond: #4B1E6D;
          --violet-clair: #9B6BB7;
          --violet-tres-clair: #E9DDF2;
          --jaune-vif: #FFD700;
          --jaune-pastel: #FFF4CC;
          --blanc: #FDFBF7;
          --blanc-pur: #FFFFFF;
          --texte-principal: #2D0A45;
          --texte-secondaire: #6B4B7A;
          --fs-xs: clamp(0.75rem, 1.5vw, 0.875rem);
          --fs-sm: clamp(0.875rem, 2vw, 1rem);
          --fs-base: clamp(1rem, 2.5vw, 1.125rem);
          --fs-md: clamp(1.25rem, 3vw, 1.5rem);
          --fs-lg: clamp(1.5rem, 4vw, 2.5rem);
          --fs-xl: clamp(2rem, 5vw, 3.5rem);
          --fs-xxl: clamp(2.5rem, 6vw, 4.5rem);
          --space-xs: clamp(0.5rem, 1vw, 0.75rem);
          --space-sm: clamp(0.75rem, 1.5vw, 1rem);
          --space-md: clamp(1rem, 2vw, 1.5rem);
          --space-lg: clamp(1.5rem, 3vw, 2.5rem);
            --space-lgg: clamp(1.5rem, 0vw, 2.5rem);
          --space-xl: clamp(2rem, 4vw, 4rem);
          --space-xxl: clamp(3rem, 6vw, 6rem);
        }

        * { box-sizing: border-box; padding: 0; margin: 0; }
        html, body { max-width: 100vw; overflow-x: hidden; background-color: var(--blanc); color: var(--texte-principal); font-family: system-ui, -apple-system, 'Segoe UI', Roboto, serif; }
        body { -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        .container { width: 100%; max-width: 1000px; margin-left: auto; margin-right: auto; padding-left: var(--space-md); padding-right: var(--space-md); }
        @media (min-width: 1920px) { .container { max-width: 1400px; } }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease-out forwards; }
      `}</style>

      <main >
        
        {/* Hero PAS MONTER SAUF MOBILE */}
        <header style={{
          padding: 'var(--space-xxl) 0 var(--space-xl)',
          background: 'linear-gradient(180deg, var(--violet-tres-clair) 0%, var(--blanc) 100%)'
        }}>
          <div className="container">

<div className={styles.catherineHeaderContent2}>
   
   
    <Link
            href="/apprendre/culture"
            style={{
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                background: '#fff',
                color: '#2a0c45',
                border: '2px solid var(--jaune-vif)',
                borderRadius: 999,
                padding: '.75rem 1.25rem',
                fontWeight: 700,
                marginBottom: '2rem',
              }}
            >
              ← Retour
            </div>
          </Link>

   
    

    </div>





            <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>
              <p style={{
                fontSize: 'var(--fs-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: 'var(--violet-clair)',
                marginBottom: 'var(--space-md)',
                fontWeight: '600'
              }}>
                Docteur angélique • Somme théologique
              </p>
              <h2 style={{
                fontSize: 'var(--fs-xxl)',
                color: 'var(--violet-profond)',
                fontWeight: '800',
                lineHeight: 1.2,
                marginBottom: 'var(--space-sm)',
                maxWidth: '800px',
                margin: '0 auto var(--space-lgg)'
              }}>
                Saint Thomas d&lsquo;Aquin
              </h2>
         
            </div>

            {/* Sommaire rapide */}
     
          </div>
        </header>

        {/* Sections */}
        <section style={{
          padding: '0 0 var(--space-xxl)',
          background: 'var(--blanc)'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-lg)'
            }}>
              {sections.map((section, index) => (
                <div key={section.id} id={section.id}>
                  <SectionCard
                    title={section.title}
                    subtitle={section.subtitle}
                    content={section.content}
                    delay={index * 0.03}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>
    </>
  )
}