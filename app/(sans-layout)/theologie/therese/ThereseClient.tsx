"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const intro1 = {
  fr: {
    title: 'Première demeure',
    subtitle: "Connaissance de soi & humilité",
    content:  "Fausse perfeccioû : peniténce de trop (qui bache la santat), arzéc daban-hèyt (s'aucupa de las ahas dous àutes destruisech la noùste pats e l'amou tau prouchén). Lou demoun qu'emplegue soubén l'arzéc ta la règle ou l'enquietè daban lous pecats dous àutes ta troubla l'amne. Thérèse hìque en goarde coùntre lou hèyt de debisa d'aquéstes sudyèts enter se, permou qu'aco mie l’abitude de la malì. chéns umilitat (se béde coum qu'em daban la grandou de Diu), ne-s pot pas en-daban. L'amne déu ha coum l'abelhe déns lou soû abelhè : que hè lou soû mèu (la counechénce de Diu) mé que sourtech tabé de l'abelhè ta tribalha (la counechénce de la soûe pròpi misèri). ",

 
  },
  be: {
    title: 'Purmère demoure',
    subtitle: 'Counechénce de sé e umilitat',
    content: 'Fausse perfecciou : penitence de trop (qui desbarate la santat), arséc indiscrèt (s\'aucupa de las mantes dous àutes que desrùye la noùste pats e l\'amou tau prouchén). Lou demoun qu\'emplegue soubén l\'arséc ta la règle ou l\'enquietè daban lous pecats dous àutes ta troubla l\'amne. Que hìque en goarde coùntre lou hèyt de debisa d\'aquéstes sudyèts enter se, permou qu\'aco qu\'atrena l’abitude de la malì. Chéns umilitat (se béde tau coum qu\'em daban la granesse de Diu), ne-s pot pas en-daban. L\'amne que déu ha coum l\'abelhe déns lou soû abelhè : que hè lou soû mèu (la counechénce de Diu) mé que sourtech tabé de l\'abelhè ta tribalha (la counechénce de la soûe pròpi dèche).',

  },
}

const intro2 = {
   fr: {
    title: 'Deuxième demeure',
    subtitle: "Persévérance & combat intérieur",
     content:
      "Pour contrer les difficultés, Dieu utilise des intermédiaires (paroles de gens de bien, sermons, lectures de bons livres, des épreuves comme la maladie ou la douleur). Il faut persévérer, Dieu sait attendre des années s'il voit un désir sincère. Le démon présente les plaisirs terrestres comme éternels. Il rappelle l'estime sociale et l'affection des proches que l'âme pourrait perdre. Il fait craindre pour la santé à cause des pénitences. Il faut utiliser la raison (les biens du monde ne sont que « pur néant » face au bonheur espéré), la foi (seul ce bonheur divin rassasie), la mémoire (se rappeler la fin inévitable de toute chose terrestre), la volonté (attiré par cet Dieu qui nous quitte jamais) et l'entendement (hors du château ni sécurité et paix). Il faut fréquenter de bonnes personnes. Le but ultime de ce chemin n'est pas d'obtenir des faveurs extraordinaires, mais de conformer sa volonté à celle de Dieu ! Il ne faut pas vouloir que Dieu fasse notre volonté et nous conduise par le chemin qui nous plaît. Dieu peut faire tourner une chute à l'avantage de l'âme pour la rendre plus vigilante. L'oraison est la seule porte pour entrer dans le château. Vouloir entrer au ciel sans entrer en soi-même pour se connaître et voir sa propre misère est une folie.",

  },
  be: {
    title: 'Dusau demeure',
    subtitle: 'Perseberénce e coumbat de-dehéns',
    content: "Ta lutar coùntre las dificultats, Diu emplegue entermediàris (paraules de moùnde de bês, predics, lectures de boûs lìbes, esprabes coum la malaudie ou la doulou). Que cau persebera, Diu sap aténde anades si bét û desi sincère. Lou demoun amuche lous plasés de la tèrre coum eternaus. Que mustre l'estimacioû souciale e l'affecioû dous tagnéns qui l'amne pouderé pèrde. Que hè cràgne ta la santat dap las peniténces. Que cau emplega la resoû (lous bés dou moùnde soun « arré » daban lou bounur esperat), la fè (soul aquéth bounur harte), la memoère (que-s bremba la fî oubligat de toute cause de la tèrre), la boulentat (tirat per aquéth Diu qui ne-ns quìte pas jaméy) e l'entenède (hore dou castèth ni securitat ni pats). Que cau frequenta bounes persounes. Lou but finau d'aquéth camì n'éy pas d'obtiéne enòrmes fabous, mé de counfourma la soûe boulentat à la de Diu ! Ne cau pas boulé que Diu hesqui la noùste boulentat e qui-ns mìe p'ou camì qui-ns plats. Diu pot ha bira ûe cadude à l'abantàdye de l'amne ta la rénde méy abisade. La pregari qu’éy la soule porte ta entra déns lou castèth. Boulé entra au cèu chéns entra en se-medich ta-s counéche e béde la soûe pròpi misèri qu'éy ûe houlie. ",

  },
}

const intro3 = {
  fr: {
    title: "Troisième demeure",
    subtitle: "Vertu stable mais encore imparfaite",
    content:
      "L’âme peut manquer d'humilité, elle croit mériter plus par leurs actions mais il faut se regarder comme des serviteurs inutiles. L'âme véritablement humble trouve plus de paix dans la soumission et la vigueur des sécheresses que d'autres dans les délices spirituels. Dieu retire parfois ses faveurs pour que l'âme sente sa propre misère et apprenne à se connaître réellement. Cette épreuve est une miséricorde car elle apporte l'humilité. Par exemple, une personne riche qui perd une partie de son bien (tout en en gardant assez) et qui s'en inquiète prouve qu'elle n'est pas prête à tout quitter pour le Seigneur. Vouloir augmenter sa fortune, même avec de bonnes intentions, empêche d'atteindre les demeures plus proches du grand Roi (aider les pauvres). Si une légère atteinte à l'honneur provoque une inquiétude que l'on ne peut maîtriser, c'est le signe que l'on n'est pas encore totalement maître de ses passions. On avance dans ce chemin par une humilité profonde plutôt que par les austérités du corps, qui sont secondaires. ",
  
 
  },
  be: {
    title: 'Tresau demoure',
    subtitle: 'Bertut stàble mé encoère emperfèyte',
    content: "L’amne pot manca d’umilitat, que crét merita méy per las soûes obres mé que-s cau béde coum gouyes chic utìles. L’amne ùmble trobe méy de pats déns la soumìssiou e la sequère qui d’àutes déns las sabous spirituales. Diu tire cops las soûes gràcies ta qui l’amne sént la soûe pròpi misèri e qui sapi couneche-s. Aquére esprabe qu’éy ûe misericorde permou qui amie l’umilitat. Per exémple, ûe persoune rìche qui pér û tros dou soû bé (en en goardan toutû proû) e qui-s-n enquiete, que proube qui n’éy pas prèste à tout quita tau Segnou. Boulé aumenta la soûe fourtune, medich dap bounes entencioûs, qu'empache d'atégne las demoures méy pròchẹs dou gran Réy (ayda lous pràubes). Si ûe leuyère aufénse a l'aunou produisech ûe enquietè qui ne poudem pas amatiga, qu'éy lou sìnne qui n'èm pas encoère tout à fèyt mèste de las soûes passioûs. Qu’abancem per aquéth camì per ûe pregounde umilitat. ",


  },
}

const intro4 = {
  fr: {
     title: "Quatrième demeure",
    subtitle: "Le commencement de l’oraison profonde",
    content:
      "Des dérangements obligent l'âme à lutter et donc à mériter davantage. Nos œuvres, avec l'aide de la grâce, commencent en nous et finissent en Dieu. Ce sont des dons de Dieu, et il faut rester humble, ne pas se croire meilleur. L'essentiel n'est pas de penser beaucoup, mais de penser à aimer beaucoup. Aimer n'est pas avoir de grandes émotions ou des consolations. C'est être résolu à contenter Dieu en tout, faire des efforts pour ne pas l'offenser et désirer sa gloire. L’imagination peut divaguer mais il faut poursuivre sa méditation avec la volonté et l'entendement, sans prêter attention aux pensées parasites. Ne combats pas tes distractions de front, cela les nourrit. Laisse l'imagination errer comme une bête venimeuse aux abords du château sans te troubler. On croit être perdu parce qu'on a des pensées instables, alors que l'âme est peut-être très proche de Dieu (souffrance vient de l'ignorance). Il faut donner ses souffrances à Jésus Christ. Tout en sachant que ses faveurs ne peuvent pas être acquises par l'effort. Mais il ne faut pas chercher à obtenir ces états par la force ! Il faut aimer Dieu pour Lui-même, pas pour l'intérêt des plaisirs qu'il donne. Penser que nos misérables services peuvent acheter une telle grâce est un manque d'humilité. La vraie préparation consiste à désirer souffrir pour Lui plutôt que de chercher des consolations. Dieu n'est pas obligé de nous donner ces grâces ici-bas pour nous sauver ; Il donne ce qui convient à chacun. Comme l'eau vient de la source et non d'aqueducs, se fatiguer par des méditations ou des larmes pour l'obtenir est vain. Dieu la donne quand on y pense le moins. La clé pour recevoir ces faveurs est d'être humble et détachée de tout, mais dans la vérité. Toutefois, si Dieu ne l'a pas encore fait, il ne faut pas essayer d'arrêter de penser par soi-même. Cela cause plus de dommage que de bien (sécheresse, agitation de l'imagination). L'effort pour ne pas penser fait souvent penser davantage. On peut aussi méditer en se représentant Dieu en nous (ce qui est excellent), mais c'est une action humaine aidée par la grâce. Se tenir devant Dieu comme un pauvre, humblement. Si Dieu ravit l'âme, qu'elle se laisse faire. Sinon, elle reste simplement unie par la volonté, sans faire de bruit intérieur. L'âme est comme un petit enfant au sein de sa mère. Si elle s'éloigne de Dieu (la source), elle périra. Il faut absolument éviter les occasions de péché, car le démon cible particulièrement ces âmes pour faire chuter les autres par leur exemple. Quand l'ivresse vient de Dieu, l'âme reste forte et l'état dure peu de temps. Si l'état cause une ruine des forces physiques, il faut arrêter l'oraison prolongée (surtout pour le sexe faible, les femmes).",
  
 
  },
  be: {
    title: 'Quatau demoure',
    subtitle: 'Lou coumencemén de la pregàri pregoundou',
    content: "Deranyeméns oubligen l’amne à lutar e dounc à merita méy. Las noùstes obres, dap l’ayde de la gràci, couméncen déns nous e que-s acaben déns Diu. Que soun dats de Diu, e que cau demoura ùmble, ne-s pas crede miélhe. Lou but n’éy pas de pensa hère, mé de pensa à ayma hère. Ayma n’éy pas abé granes emoucioûs ni counsoulacioûs. Qu'éy esta decidat à countenta Diu en tout, ha efòrs ta n’ou pas offensa e desira la soûe gloère. L’imayinaciou pot biadya mé que cau countinua la soûe meditacioû dap la boulentat e l'entenède, chéns escouta las pensades escoumìnyes. Ne coumba pas las toûes bìci de cap, aco las neuri. Dèche l’imayinaciou que-s desplaçat coum ûe bèsti beremiouse aus alentours dou castèth chéns te troubla. Que credém esta perdut permou qu’abèm pensades enstàble, alabets qui l’amne éy lhèu tagnén de Diu (la soufrénce bién de l’ignourénce). Que cau da las soûes soufrénces à Yésu Christ. Tout en saben qui las soûes gràcies ne-s pòden pas croumpa per l’efòr. Mé ne cau pas cerca aquéste estats per la force ! Que cau ayma Diu ta éth-medich, noû pas per l’enterès dous plasés qui da. Pensa qu’ous noùstes pràubes serbìcis pòden croumpa ûe gràci qu’éy û manque d’umilitat. La bertadère preparacioû qu’éy de boulé soufri ta éth meylèu qui cerca counsoulacioûs. Diu n’éy pas oubligat de-ns da aquéres gràcies aciu-bach ta-ns sauba, que da ço qui coumbiéne à chacû. Coum l'aygue qui bién de la houn e noû pas de pouns, fatiga-s per meditacioûs ou larmes ta l’abé qu'éy pèrde dou téms. Diu la da quoan y pensem lou ménch. La clau ta recébe aquéres gràcies qu’éy d’esta ùmble e destaca de tout, mé déns la bertat. Toutû, si Diu n’at a pas encoère hèyt, ne cau pas essaya d’arresta de pensa per se-medich. Aco produisech méy de doumau que de bê (sequère, ayitacioû de l'imayinaciou). L'efòr ta ne pas pensa hè soubén pensa méy. Que poudém tabé medita en-s presentan Diu déns nous (ço qu’éy beroy), mé qu’éy ûe accioû umàne aydade per la gràci. Tiéne-s daban Diu coum û pràube, dap umilitat. Si Diu countente l’amne, que-s dèche ha. Sinoû, que demoure yuste yuntade per la boulentat, chéns ha arrut de-dehéns. L'amne qu’éy coum û petit maynat à la poupe de la soûe may. Si que-s aloegne de Diu (la houn), que ba mouri. Que cau de segu esbita las aucasioûs de pecat, permou qu’ou demoun seleccioune especiaumén aquéres amnes ta ha càde las àutes p'ou lou exémple. Quoan la briaguère biéne de Diu, l’amne demoùre hòrte e l'estat dure chic de téms. Si l'estat produisech ûe roéyne de las forces dou cos, que cau estanqua la pregàri perloungade (sustout tau sèxe féble, las hémbles). ",

  },
}

const intro5 = {
   fr: {
       title: "Cinquième demeure",
    subtitle: "Union intérieure & amour du prochain",
    content:
      "Il faut trouver le trésor caché qui se trouve au-dedans de nous-mêmes. Tout ce qu'il voyait sur terre lui déplaît désormais. La paix profonde que l'âme y trouve naît justement de l'acceptation de porter sa croix. L'âme souffre intensément de voir Dieu offensé et de voir des âmes se perdre. Ste Thérèse compare la douleur de l'âme à celle de Jésus voyant la multitude des péchés commis contre son Père. Malgré la violence de ces tourments, l'âme ressent un plaisir ineffable à souffrir pour faire la volonté de Dieu. Elle considère ses propres maux comme rien en comparaison de son désir de sauver des âmes (l'amour plus fort que la mort). L'âme ne doit pas rester passive ; elle doit travailler sans cesse à la connaissance d'elle-même et à l'observation des préceptes divins. Puisque nous ne pouvons pas mesurer avec certitude notre amour pour Dieu, notre conduite envers le prochain sert de miroir ! Une personne qui se croit sainte en prière mais qui ne peut supporter la moindre petite humiliation ou critique montre que sa volonté n'est pas déterminée, mais simplement séduite par l'imagination. C’est l'oubli de soi, faire la volonté des autres plutôt que la sienne, même au prix de ses propres droits ou au prix de la fatigue. L’âme ne trouve de repos ni dans les plaisirs terrestres, ni même dans les goûts spirituels simples ; son vol est plus élevé, elle cherche continuellement à faire du bien aux autres et à elle-même. Dieu peut permettre des épreuves pour tester l'âme. Ne jamais mettre sa confiance en soi-même, ce serait une folie. Il faut demander sans cesse à Dieu de nous soutenir par la main. Vérifier si l'on avance ou si l'on recule, notamment dans l'amour des uns pour les autres. Une âme qui a reçu de telles faveurs ne peut pas rester inactive, oisive ou endormie ; elle doit faire de nouveaux efforts pour avancer.",
  
 
  },
  be: {
    title: 'Cincau demoure',
    subtitle: 'Unioû de-dehéns e amou dou prouchén',
    content: "Que cau trouba lou tresor escounut qui-s trobe de-dehéns de nous-medichs. Tout ço qui bedè sus tèrre qu’ou desgrat d'are-enlà. La pats pregounde qui l’amne y trobe bién yùstamén de la boulentat de pourta la soûe crouts. L’amne soufre hòrtamén de béde Diu aufensat e de béde amnes pèrde-s. Sénte Thérèse coumpare la doulou de l’amne à la de Yésu beden lous pecats hèyts coùntre lou soû Pay. Maugrat la bioulénce d'aquéts turméns, l’amne sént û gran plasé à soufri ta ha la boulentat de Diu. Que counsidere lous soûs pròpis maus coum arré en coumparacioû dou soû desi de sauba amnes (l’amou méy hort qui la mort). L’amne ne déu pas demoura enanibe ; que déu tribalha chéns estanca à la counechénce de se-mediche e à l’espiade dous preceptes de Diu. Pùchque ne poudém pas mesura dap securitat lou noùste amou ta Diu, la noùste combersacioû de cap au prouchén sér de miralh ! Ûe persoune qui-s crét sénte déns la pregari mé qui ne pot pas supourta la méndre petite umiliacioû ou critique amuche qui la soûe boulentat n'éy pas determinade, mé soulamén mia per l'imayinacioû. Qu’éy lou desbroumbe de se-medich, ha la boulentat dous autes meylèu que la soûe, medich au prèts dous soûs pròpis dréts ou au prèts de la fatigue. L’amne ne troube pas nade repaus ni déns lous plasés dou moùnde, ni médich déns las doussous spirituales sìmples ; lou soû bol qu'éy méy haut. Que cèrque toustém à ha lou bê aus àutes e à se-mediche. Diu pot permete esprabes ta testa l'amne. Ne pas jaméy hica la soûe ahide en se-medich, que seré ûe houlie. Que cau demanda chéns estanca à Diu de-ns tiéne per la mâ. Berifia si abancem ou si hèm pè-arrè, especiaumén déns l'amou dous ûs ta lous àutes. Ûe amne qu’a recebut aquères gràcies ne pot pas demoura chéns arré ha, feniante ou adroumide ; que déu ha nabèths efòrs ta abança. ",


  },
}

const intro6 = {
   fr: {
     title: "Sixième demeure",
    subtitle: "Purifications & souffrances",
    content:
      "Il y a des périodes où l’âme a l'impression d'avoir perdu le souvenir de Dieu. L’entendement est obscurci, l’imagination devient maîtresse et la solitude, autrefois aimée, devient pénible. Le seul remède est d’espérer en la miséricorde divine et de s'occuper à des œuvres extérieures de charité. L'âme sera critiquée par des personnes disant qu'elle veut passer pour sainte. Le plus douloureux est de voir ses propres amis s'éloigner avec des propos mordants.  Recevoir des louanges est parfois pire que d'être blâmé. L’âme souffre de s’entendre louer car elle sait que tout le bien vient de Dieu. Elle doit apprendre à se concentrer uniquement sur la gloire de son Maître. Il ne faut absolument rien faire d'important sans l'avis d'un confesseur savant et vertueux. S'écarter de cet avis pour suivre son propre sentiment est un péril. La vraie sainteté réside dans la vertu et l'humilité, non dans les visions.  Le démon, lui, laisse l'âme dans le trouble, l'inquiétude et flatte l'estime de soi. L'imagination produit des choses confuses, froides et sans effets durables. Il ne faut jamais s'éloigner de la Sainte Humanité de Jésus. Vouloir la contemplation pure en oubliant le Christ est une fausse ivresse. Même si l'on ne peut plus raisonner, il faut garder le souvenir de sa Passion (comme sa sueur de sang au jardin). S'en éloigner, c'est affaiblir ses propres vertus. Plus l'âme connaît la grandeur de Dieu, plus elle souffre d'en être séparée.  Le monde n'intéresse plus l'âme mais elle n'a pas encore accès au ciel. C'est un prix inestimable accepté avec bonheur car il purifie l'âme comme un phénix dans les flammes. L’humilité, c’est marcher selon la vérité. La vérité est que nous sommes misère et néant. Dieu aime l'humilité parce qu'il aime la vérité. Il ne faut jamais demander à être conduit par la voie des visions, car cela manquerait d'humilité et ouvrirait la porte au démon par la présomption.",
 
  },
  be: {
    title: 'Cheysau demoure',
    subtitle: 'Purificacioûs e douléncis',
    content: "Que y a mouméns oun l’amne sént abé perdut lou soubeni de Diu. L’entenède qu'éy assoumbrit, l'imayinacioû debiene mestrésse e la souletat, àutes-cops aymade, debiene penìble. Lou soul remèri qu'éy d’espera héns la misericorde dibîne e de-s aucupa dap obres de caritat. L’amne sera criticade per moùndes disen d’ère que bòu paréche sénte. Lou méy doulourous qu'éy de béde lous soûs pròpis amics aloegna-s dap paraules mechantes. Recébe aumàdyes qu’éy quàuque cop pìri que d'esta enhountit. L’amne soufre de-s enténe lauda permou qui sap que tout lou bê bién de Diu. Que déu apréne à councentra-s soulamen sus la gloère dou soû Mèste. Ne cau pas ha arré d'impourtén chéns l'abis d'û couhessou bertuous. Aloegna-s d'aquéth abis ta segui lou soû sentimén pròpi qu’éy û danyè. La bertadère sentetat demoùre déns la bertut e l'umilitat, noû pas déns las bisioûs. Lou demoun, éth, dèche l’amne déns lou troùble, lou souci e flate l’estime de se. L'imayinacioû produisech causes mesclades, rètes e chéns esfèyts duràble. Ne cau pas jaméy aloegna-s de la Sénte Umanitat de Yésu. Boulé la coùntemplacioû pure en desbroumban lou Crist qu’éy ûe fausse briaguère. Tout medich si ne poudém pas méy resouna, que cau goarda lou soubeni de la soûe Passioû (coum la soûe sudou de sanc au casau). Aloegna-s-en, qu'éy aflaqui las soûes bertuts pròpis. Méy l’amne counéch la grandou de Diu, méy que soufre d'esta-n separade. Lou moùnde n'enteresse pas méy l’amne mé n'a pas encoère l’entrade au cèu. Qu’éy û enòrme prèts acceptat dap bounur permou qui purifie l’amne coum û fenix déns las eslames. L’umilitat, qu’éy marcha suban la bertat. La bertat qu’éy qu’èm misèris e arré. Diu ayme l'umilitat permou qu’ayme la bertat. Ne cau pas jaméy demanda d'esta miat p’ou camì de las bisioûs, permou qu'aco manqueré d’umilitat e qu’ourbiré la porte au demoun per la presoumpcioû. ",



  },
}

const intro7 = {
  fr: {
    title: "Septième demeure",
    subtitle: "Union transformante",
    content:
      "L'âme voit les trois Personnes de la Sainte Trinité comme un rayonnement de flammes. Elle comprend qu'elles sont une seule substance, puissance et sagesse. L'âme est si soumise à la volonté de Dieu que si Dieu veut qu'elle souffre, elle est contente ; s'il ne le veut pas, elle ne s'en tourmente plus. Elle ressent un amour immense pour ses persécuteurs et serait prête à perdre ses propres grâces pour les donner à ceux qui offensent Dieu. Auparavant, l'âme désirait mourir pour être avec Dieu. Désormais, elle souhaite vivre de longues années au milieu des plus grandes souffrances pour être utile à Dieu et faire bénir son nom. Elle ne cherche plus son propre bonheur au ciel, mais veut servir le divin Crucifié. L'âme se sent petite et craint d'offenser Dieu. L'âme peut encore commettre des péchés véniels (non délibérés), même si elle est préservée des péchés mortels par un secours spécial de Dieu. Le but ultime des grâces n'est pas le plaisir personnel, mais de rendre notre vie semblable à celle du Christ. La véritable vie spirituelle consiste à porter la marque de la croix et à devenir l'esclave de Dieu, en sacrifiant sa propre liberté pour le salut du monde; Thérèse insiste, sans humilité, l'édifice s'écroule. Il faut s'efforcer d'être la plus petite de toutes et l'esclave de ses sœurs. Le progrès spirituel ne se mesure pas à l'intensité de l'amour ressenti, mais à la pratique des vertus et au service rendu aux autres. Si l'amour n'avance pas par les œuvres, il recule. Dieu ne regarde pas la grandeur des œuvres, mais l'amour avec lequel elles sont accomplies.",
  
  },
  be: {
    title: 'Setau demoure',
    subtitle: 'Unioû qui transfourme',
    content: "L’amne bét las trés Persounes de la Sénte Trinitat coum û arrayòu d'eslames. Que coumprén qui soun ûe soule substance, puchànce e sayésse. L’amne qu’éy tâ soumìsse à la boulentat de Diu qui si Diu bòu que soufre, qu’éy counténte ; si Diu ne bòu pas, ne se-n tourménte pas méy. Que sént û amou gran taus soûs persecutadous e seré prèste à pèrde las soûes pròpis gràcis ta las da aus qui offènsen Diu. Aban, l’amne soetabe mouri ta esta dap Diu. D’are-en-aban, que boù bìbe loungues anades au miéy de las méy granes soufrénces ta esta utìle à Diu e ha benadìse lou soû noum. Ne cèrque pas méy lou soû pròpì bounur au cèu, mé que bòu serbi lou dibî Crucifica. L’amne que-s sént petite e cràgn d'aufensa Diu. L’amne pot encoère ha pecats beniels (noû decidats), medich si qu’éy proutedyade dous pecats mortèus per û secours especiau de Diu. Lou but de las gràcis n’éy pas lou plasé persounau, mé de rénde la noùste bite semblable à la dou Crist. La bertadère bite spirituale counsiste à pourta la mèrque de la crouts e à debiéne l’esclabe de Diu, en sacrifian la soûe pròpì libertat tau salut dou moùnde. Thérèse ensiste, chéns umilitat, la bastìsse cat. Que cau essaya d'esta la méy petite de toutes e l’esclabe de las soûes surs. Lou prougrès spirituau ne-s mesure pas à la force de l'amou sentit, mé à la pratique de las bertuts e au serbìci rendut aus àutes. Si l'amou n’abance pas dap las obres, que recule. Diu n’espie pas la grandou de las obres, mé l’amou dap louquoau que soun hèytes. ",



  },
}


function DemeureCard({
  number,
  title,
  subtitle,
  content,
  
  delay,
}: {
  number: string
  title: string
  subtitle: string
  content: string
  delay: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-10"
    >
      <span className="absolute right-4 top-2 text-7xl font-bold text-white/[0.04] md:text-9xl">
        {number}
      </span>

      <div className="relative z-10 max-w-3xl">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
          {subtitle}
        </p>

        <h3 className="mb-5 text-2xl font-semibold text-[#f5efe0] md:text-4xl">
          {title}
        </h3>

        <p className="leading-8 text-[#cfc7b6] md:text-lg">
          {content}
        </p>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-[#c6a972]/40 to-transparent" />
      </div>
    </motion.article>
  )
}

export default function SevenMansionsPage() {
  const [langue, setLangue] = useState<'fr' | 'be'>('fr')
 const demeures = [
  intro1[langue],
  intro2[langue],
  intro3[langue],
  intro4[langue],
  intro5[langue],
  intro6[langue],
  intro7[langue],
]
 
  return (
    <main className="relative overflow-hidden bg-[#070707] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.14),transparent_45%)]" />

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
       
       {/* TOP BAR */}
<div className="absolute left-0 top-0 z-50 w-full px-6 pt-8 md:px-12 md:pt-10">
  <div className="mx-auto flex max-w-6xl items-center justify-between">

    <Link
      href="/histoire-condensee"
      className="group inline-flex items-center gap-2 rounded-full border border-[#c6a972]/25 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#f5efe0] transition-all hover:border-[#c6a972]/50 hover:bg-white/[0.06]"
    >
      <span className="transition-transform group-hover:-translate-x-1">
        ←
      </span>
      Retour
    </Link>

    <div className="flex items-center rounded-full border border-[#c6a972]/30 bg-white/[0.03] p-1">
      <button
        onClick={() => setLangue('fr')}
        className={`rounded-full px-4 py-2 transition-all ${
          langue === 'fr'
            ? 'bg-[#c6a972] text-[#070707]'
            : 'text-[#c6a972]'
        }`}
      >
         <Image
  src="/fra.webp"
alt="Drapeau de la France"
  width={24}
  height={24}
  style={{
    objectFit: "contain",
  }}
/>
      </button>

      <button
        onClick={() => setLangue('be')}
        className={`rounded-full px-4 py-2 transition-all ${
          langue === 'be'
            ? 'bg-[#c6a972] text-[#070707]'
            : 'text-[#c6a972]'
        }`}
      >
       <Image
  src="/bearn.png"
 alt="Drapeau du Béarn"
  width={24}
  height={24}
  style={{
    objectFit: "contain",
  }}
/>
      </button>
    </div>

  </div>
</div>
       
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-xs uppercase tracking-[0.4em] text-[#c6a972]"
          >
      
      
{langue === 'fr' ? (
<>
      
            Sainte Thérèse d’Avila

            </>
            ) : (  
 <>  Sénte Thérèse d’Avila
 </>
            )}

          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-5xl text-5xl font-semibold leading-tight text-[#f8f3e7] md:text-7xl xl:text-8xl"
          >


{langue === 'fr' ? (
<>
            Les 7 demeures
            <br />
            du Château intérieur
</>
            ) : (  
 <> <span className="text-[0.9em]">
  Las 7 demoures
            <br />
            dou Castèth de-dehéns</span>
 
 </>
            )}



          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#bdb4a2] md:text-xl"
          >
        {langue === 'fr' ? (
<> 
        
            Une ascension intérieure vers Dieu à travers les profondeurs
            de l’âme, depuis les premières conversions jusqu’à l’union
            transformante.
        
        </>
            ) : (  
 <>   
 Ûe assenciou de-dehéns de cap à Diu à trubès las pregoundous de l’amne, despuch las purmères coumbercioûs dinco l’unioû qui transfourme.
 </>  )}
        
        
          </motion.p>
        </div>
      </section>

      {/* EXPLICATION */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-[#c6a972]/20 bg-[#111111] p-8 md:p-14">
          <div className="mb-8 h-px w-24 bg-[#c6a972]" />

          <h2 className="mb-8 text-3xl font-semibold text-[#f5efe0] md:text-5xl">
          
              {langue === 'fr' ? (
<> 
        
          
            Le Château intérieur
          
        </>
            ) : (  
 <>    Lou Castèth de-dehéns
          </>  )}
         
         
          </h2>

          <div className="space-y-6 text-lg leading-9 text-[#cfc7b6]">
        
         {langue === 'fr' ? (
<> 
        
        
            <p>
              Nous pouvons considérer notre âme comme un château, fait d’un seul diamant où y a beaucoup d’appartements, 
              comme dans le ciel il y a bien des demeures.
            </p>

            <p>
              L&apos;âme du juste n’est pas autre chose qu’un paradis où le Seigneur prend ses délices.
            </p>

            <p>
              Thérèse propose une ascension avec des étapes successives (l’âme pouvant circuler librement dans le château).

            </p>
</>
            ) : (  
 <>   
  <p>
       Que poudém counsidera la noùste amne coum û castèth, hèyt d’û soul diamant oun que y a hère d&apos;aparteméns, coum héns lou cèu que y a demoures.
           </p>

            <p>
         L’amne dou yuste n’éy pas àute cause qu’û paradis oun lou Segnou prén lous soûs sabous.
            </p>

            <p>
        Thérèse perpause ûe assenciou dap estanquéts qui-s succeden (l’amne poudén camina libramén déns lou castèth).

            </p>
 
    </>  )}
          
          </div>
        </div>
      </section>

      {/* DEMEURES */}
      <section className="relative px-6 pb-32 md:px-12">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 lg:block" />

        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          {demeures.map((demeure, index) => (
            <DemeureCard
            key={index}
      number={String(index + 1)}
              title={demeure.title}
              subtitle={demeure.subtitle}
              content={demeure.content}
              delay={index * 0.08}
            />
          ))}
        </div>
      </section>

      {/* FINAL WARNING */}
      <section className="px-6 pb-40 md:px-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-red-500/10 bg-gradient-to-b from-[#140f0f] to-[#090909] p-8 md:p-16">
          <div className="mb-10 inline-flex rounded-full border border-red-400/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-200/70">
        
          {langue === 'fr' ? (
<> 
        
        
        
            Mise en garde spirituelle
       
       </>
            ) : (  
 <>       Hicade en goarde spirituau  </>  )}
          
       
       
          </div>

          <h2 className="mb-10 text-3xl font-semibold leading-tight text-[#f8f3e7] md:text-5xl">
         
            {langue === 'fr' ? (
<> 
        
         
            Quand l’âme
            <br />
            se détourne de Dieu
    </>
            ) : (  
 <>     
 Quoan l’amne
            <br />
            que-s bire de Diu

</>  )}


          </h2>

          <div className="space-y-8 text-lg leading-9 text-[#c9bfb0]">
         
            {langue === 'fr' ? (
<> 
        
            <p>
          Thérèse compare l&apos;âme en état de péché mortel à une prison obscure, aveugle et muette. Un pécheur est comme lié à un poteau, mourant de faim à côté de nourriture qu&apos;il ne peut pas atteindre.
            </p>

            <p>
           Elle exhorte donc à prier pour ces âmes. Pour une âme en état de pêche mortel, Dieu est toujours au centre de l&apos;âme, mais le péché agit comme un voile noir, la lumière ne peut plus être réfléchie ni reçue.
            </p>

            <p>
      Au lieu de puiser sa sève dans une fontaine limpide, l&apos;âme se transplante dans des eaux noires et infectes (le démon). Donc aucune de ses œuvres ne porte de fruit pour le salut.

     </p>
 </>
            ) : (  
 <>       
            <p>
      Thérèse que coumpare l’amne en estat de pecat mortèu a ûe presoû escure, abùgle e mude. Û pecadou éy coum ligat a û pau, en mourin de hàmi au ras de la maschacûre qui ne pot pas touca.
           </p>

            <p>
       Que dit dounc de prega ta aquéres amnes. Ta ûe amne en estat de pecat mortèu, Diu éy toustém au miéy de l’amne, mé lou pecat qu’ayi coum û boèle négre, la luts ne-s pot pas méy béde ni esta recebude.
           </p>

            <p>
   Au loc de putsa la soûe sape héns ûe houn clare, l’amne que-s tresplante héns aygues négres e pudéntes (lou demoun). Dounc pas nade de las soûes obres ne porte de frut tau salut.

     </p>
        
        
        
           </>  )}

            <div className="mt-14 rounded-[24px] border border-[#c6a972]/20 bg-white/[0.02] p-6 md:p-10">
              <p className="text-xl italic leading-10 text-[#f1e7d2]">
              
                {langue === 'fr' ? (
<> 
        
        
              
                “L’oraison est la porte du château intérieur.”

</>
            ) : (  
 <>   

                “La pregari qu’éy la porte dou castèth de-dehéns.”
             </>  )}
              </p>

              <div className="mt-6 h-px w-24 bg-[#c6a972]" />

              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[#c6a972]">
               
           {langue === 'fr' ? (
<> 
        
        
              
               Sainte Thérèse d’Avila

</>
            ) : (  
 <>   
Sénte Thérèse d’Avila
             </>  )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}