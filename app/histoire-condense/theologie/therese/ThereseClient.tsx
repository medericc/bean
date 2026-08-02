"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const intro1 = {
  fr: {
    title: 'Première demeure',
    subtitle: "Connaissance de soi & humilité",
    content:  "Fausse perfection : pénitence excessive (ruine santé), zèle indiscret (s'occuper des fautes des autres détruit notre paix et amour anvers le prochain). Le démon utilise souvent le zèle pour la règle ou l'inquiétude face aux péchés des autres pour troubler l'âme. Elle met en garde contre le fait de s'entretenir de ces sujets entre soi, car cela introduit l'habitude de la médisance. Sans humilité (se voir tel qu'on est face à la grandeur de Dieu), on ne peut pas avancer. L'âme doit agir comme l'abeille dans sa ruche : elle fait son miel (la connaissance de Dieu) mais sort aussi de la ruche pour butiner (la connaissance de sa propre misère).",
 
 
  },
  be: {
    title: 'Purmère demoure',
    subtitle: 'Counechénce de sé e umilitat',
    content: 'Fausse perfecciou : penitence de trop (qui desbarate la santat), arséc indiscrèt (s\'aucupa de las mantes dous àutẹs que desrùye la noùstẹ pats e l\'amou tau prouchén). Lou demoun qu\'emplegue soubén l\'arséc ta la règle ou l\'enquietè daban lous pecats dous àutẹs ta troubla l\'àmne. Que hìque en goarde coùntre lou hèyt de debisa d\'aquéstẹs sudyèts enter se, permou qu\'aco qu\'atrena l’abitude de la malì. Chéns umilitat (se bédẹ tau coum qu\'em daban la granesse de Diu), ne-s pot pas en-daban. L\'àmne que déu ha coum l\'abelhe déns lou soû abelhè : que hè lou soû mèu (la counechénce de Diu) mé que sourtech tabé de l\'abelhè ta tribalha (la counechénce de la soûe pròpi dèche).',

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
    content: "Ta lutar coùntre las dificultats, Diu qu'emplegue entermediàris (paraules de moùndẹ de bês, predics, lectures de boûs lìbẹs, esprabes coum la malaudie ou la doulou). Que cau persebera, Diu sap aténdẹ anades si bét û desi sincè. Lou demoun qu'amuche lous plasés de la tèrre coum eternaus. Que mustre l'estimacioû souciale e l'affecioû dous tagnéns qui l'àmne e pouderé pèrdẹ. Que hè cràgnẹ ta la santat dap las penitences. Que cau emplega la resoû (lous bés dou moùndẹ ne soun soùnquẹ « pur arré » daban lou bounur esperat), la fè (soul aquéth bounur  hàrte), la memoère (se remembra la fì oubliga de toute cause de la tèrre), la boulentat (tirat per aquéth Diu qui ne-ns quìte pas jaméy) e l'entenède (hore dou castèth ni seguretat ni pats). Que cau frequenta bounes persounes. Lou but finau d'aquéth camì n'éy pas d'oubtiéne fabous enòrmẹs, mé de counfourma la soûe boulentat à la de Diu ! Ne cau pas boulé que Diu hesqui la noùstẹ boulentat e qui-ns mìẹ p'ou camì qui-ns plats. Diu pot ha bira ûe cadude à l'abantàdye de l'àmne ta la réndẹ méy abisade. La pregari éy la soule porte ta entra déns lou castèth. Boulé entra tau cèu chéns entra en se-medich ta-s counéche e bédẹ la soûe pròpi dèche qu'éy ûe houlie.",

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
    subtitle: 'Bertut stàblẹ mé encoère emperfèyte',
    content: "L’àmne pot manca d’umilitat, que-s crét merita méy per las soûes obres mé que-s cau bédẹ coum gouyes chic utìlẹs. L’àmne ùmblẹ trobe méy de pats héns la soumìssiou e la bigou dous sequères qui d’àutẹs héns lous bounics spirituaus. Diu retìre bèth cop las soûes gràcies ta que l’àmne sènte la soûe pròpi dèche e qui sàpi couneche-s. Aquére esprabe qu’éy ûe misericorde permou qui mène l’umilitat. Per exémple, ûe persoune rìchẹ qui pèrdẹ û tros dou soû bé (en goardan toutû proû) e qui se-n tesique, que proùbe qui n’éy pas prèste à tout quita tau Segnou. Boulé aumenta la soûe fourtune, medich dap bounes entencioûs, qu'empache d'atégnẹ las demoures méy tagnénes dou gran Réy (ayda lous pràubẹs). Si ûe leuyère mauheyte a l'aunou e produsech û souci qui ne-s pot pas mata, qu'éy lou sìnnẹ qui n'èm pas encoère tout à fèyt mèstẹ de las soûes passioûs. Que tirem en daban per aquéth camì per ûe pregounde umilitat meylèu que per las hòrtes penitences dou cos, qui soun dou darrè.",

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
    content: "Deranyeméns que hìquen l’àmne à lutar e dounc à merita méy. Las noùstẹs obres, dap l’ayde de la gràci, que couméncẹn déns nousàutẹs e que s’acàben déns Diu. Que soun dats de Diu, e que cau demoura ùmblẹ, ne-s pas credẹ miélhẹ. Lou but n’éy pas de pensa hère, mé de pensa à ayma hère. Ayma n’éy pas abé granes emoucioûs ni counsoulacioûs. Qu'éy esta desidat à countenta Diu en tout, ha efòrs ta n’ou pas offensa e desira la soûe gloère. L’imayinaciou pot biadya mé que cau countinua la soûe meditacioû dap la boulentat e l'entenède, chens escouta las pensades escoumìnyẹs. Ne coumba pas las toûes bìci de cap, aco que las neure. Dèche l’imayinaciou que-s desplaçat coum ûe bèsti beremiouse aus alentours dou castèth chens te troubla. Que-s credém esta perdut permou qu’abèm pensades qui s'espartẹn, quoan l’àmne éy lhèu hère tagnéne de Diu (la soufrence que biéne de l’ignourence). Que cau da las soûes soufrences à Yésus Crist. Tout en sàbiẹn qui las soûes gràcies ne-s pòdẹn pas croumpa per l’efòr. Mé ne cau pas cerca de coélhẹ aquéts estats per la hòrce ! Que cau ayma Diu ta éth-medich, ne pas per l’enterès dous plasés qui da. Pensa que lous noùstẹs pràubẹs serbìcis pòdẹn croumpa ûe gràci qu’éy û manque d’umilitat. La bertadère preparacioû qu’éy de boulé soufri ta éth meylèu que cerca counsoulacioûs. Diu n’éy pas oubligat de-ns da aquéres gràcies aciu-bach ta-ns sauba ; Que da ço qui coumbiéne à chacû. Coum l'aygue qui biéne de la houn e noû pas de pouns, fatiga-s per meditacioûs ou larmes ta la coélhẹ qu'éy pèrdẹ dou téms. Diu la da quoan y pensém lou ménch. La clau ta recébẹ aquéres gràcies qu’éy d’esta ùmblẹ e destaca de tout, mé héns la bertat. Toutû, si Diu n’at a pas encoère hèyt, ne cau pas essaya d’arresta de pensa per se-medich. Aco que produsech méy de doumau que de bê (sequère, atisacioû de l'imayinaciou). L'efòr ta ne pas pensa que hè soubén pensa méy. Que poudém tabé medita en presentàn Diu déns nousàutẹs (ço qui éy beroy), mé qu’éy ûe accioû umàne aydade per la gràci. S'esta daban Diu coum û pràubẹ, dap umilitat. Si Diu que traùque l’àmne, que-s ére dèchẹ ha. Sinoû, que demoùre sìmplẹ yuntade per la boulentat, chens ha arrut de-dehéns. L'àmne éy coum û petit maynat au co de la soûe may. Si que s'aloegne de Diu (la houn), que se-n ba mouri. Que cau de segu esbita las aucasioûs de pecat, permou qui lou demoun pìque especiaumén aquéres àmnes ta ha càdẹ las àutẹs p'ou lou exémple. Quoan la briaguère biéne de Diu, l’àmne que demoùre hòrte e l'estat que dures chic de téms. Si l'estat que produsech ûe roéyne de las hòrces dou cos, que cau estanqua la pregari perloungade (sustout tau sèxe féblẹ, las hémbles).",

  },
}

const intro5 = {
   fr: {
       title: "Cinquième demeure",
    subtitle: "Union intérieure & amour du prochain",
    content:
      "Il faut trouver le trésor caché qui se trouve au-dedans de nous-mêmes. Tout ce qu'il voyait sur terre lui déplaît désormais. La paix profonde que l'âme y trouve naît justement de l'acceptation de porter sa croix. L'âme souffre intensément de voir Dieu offensé et de voir des âmes se perdre. Ste Thérèse compare la douleur de l'âme à celle de Jésus voyant la multitude des péchés commis contre son Père. Malgré la violence de ces tourments, l'âme ressent un plaisir ineffable à souffrir pour faire la volonté de Dieu. Elle considère ses propres maux comme rien en comparaison de son désir de sauver des âmes. (l'amour plus fort que la mort). L'âme ne doit pas rester passive ; elle doit travailler sans cesse à la connaissance d'elle-même et à l'observation des préceptes divins. Puisque nous ne pouvons pas mesurer avec certitude notre amour pour Dieu, notre conduite envers le prochain sert de miroir ! Une personne qui se croit sainte en prière mais qui ne peut supporter la moindre petite humiliation ou critique montre que sa volonté n'est pas déterminée, mais simplement séduite par l'imagination. C’est l'oubli de soi, faire la volonté des autres plutôt que la sienne, même au prix de ses propres droits ou au prix de la fatigue. L’âme ne trouve de repos ni dans les plaisirs terrestres, ni même dans les goûts spirituels simples ; son vol est plus élevé, elle cherche continuellement à faire du bien aux autres et à elle-même. Dieu peut permettre des épreuves pour tester l'âme. Ne jamais mettre sa confiance en soi-même, ce serait une folie. Il faut demander sans cesse à Dieu de nous soutenir par la main. Vérifier si l'on avance ou si l'on recule, notamment dans l'amour des uns pour les autres. Une âme qui a reçu de telles faveurs ne peut pas rester inactive, oisive ou endormie ; elle doit faire de nouveaux efforts pour avancer.",
  
 
  },
  be: {
    title: 'Cincau demoure',
    subtitle: 'Unioû de-dehéns e amou dou prouchén',
    content: "Que cau trouba lou tresor escounut qui-s trobe de-dehéns de nous-medichs. Tout ço qui bedè sus tèrre que l'y desgrat d'are-enlà. La pats pregounde qui l’àmne y trobe que biéne yùstamén de l'acceptacioû de pourta la soûe crouts. L’àmne que soufère hòrtamén de bédẹ Diu mancat e de bédẹ àmnes pèrdẹ-s. Sénte Thérèse coumpare la doulou de l’àmne à la de Yésus bedén hère de pecats hèyts coùntrẹ lou soû Pay. À maugrat de la bioulénce d'aquéts turméns, l’àmne que sénte û gran plasé à soufri ta ha la boulentat de Diu. Que counsìdere lous soûs pròpis maus coum arré en coumparacioû dou soû desi de sauba àmnes (l’amou méy hort qui la mort). L’àmne ne déu pas demoura passibe ; que déu tribalha chéns estanca à la counechénce de se-mediche e à l’ouserbacacioû dous preceptes de Diu. Pùchquẹ ne poudém pas mesura dap securitat lou noùstẹ amou ta Diu, la noùstẹ coundùyte de cap tau prouchén que sèrbe de miralh ! Ûe persoune qui-s crét sénte déns la pregari mé qui ne pot pas supourta la méndrẹ petite umiliacioû ou critique qu’amuche qui la soûe boulentat n'éy pas desidade, mé soulamén mia per l'imayinacioû. Qu’éy lou desbroumbe de se-medich, ha la boulentat dous àutẹs meylèu que la soûe, medich au prèts dous soûs pròpis dréts ou au prèts de la fatigue. L’àmne ne trobe pas nade repaus ni déns lous plasés dou moùndẹ, ni médich déns lous dousseùs spirituaus sìmplẹs ; lou soû bol qu'éy méy haut. Que cèrque toustém à ha lou bê aus àutẹs e à se-mediche. Diu pot permetẹ esprabes ta testa l'àmne. Ne pas jaméy hica la soûe ahide en se-medich, que seré ûe houlie. Que cau demanda chéns estanca à Diu de-ns tiénẹ per la mâ. Berifia si tiram en daban ou si  hèm pè-arrè, especiaumén déns l'amou dous ûs ta lous àutẹs. Ûe àmne qu’a recebut aquères gràcies ne pot pas demoura chéns arré ha, feniànte ou adroumide ; que déu ha nabèts efòrs ta tira en daban.",

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
    content: "Que y a mouméns oun l’àmne sén abé perdut lou soubeni de Diu. L’entenède qu'éy assoumbrit, l'imayinacioû debiene mestrésse e lou soulatàdye, àutẹs-cops aymat, debiene penìble. Lou soul remèri qu'éy d’espera héns la misericorde dibîne e de s'aucupa a obres de-dehore de caritat. L’àmne sera criticade per moùndẹs disen de qu’ére que bòu paréchẹ sénte. Lou méy doulourous qu'éy de bédẹ lous soûs pròpis amics s'aloegna dap paraules mechantes. Recébẹ aumàdyẹs qu’éy quàuquẹ cop pìri que d'esta enhountit. L’àmne soufre de s’enténẹ lauda permou qui sap que tout lou bê biéne de Diu. Que déu aprénẹ à councentra-s soulamen sus la gloère dou soû Mèstẹ. Ne cau pas ha arré d'impourtén chéns l'abis d'û couhessou saben e bertuous. S'aloegna d'aquéth abis ta segui lou soû sentiment pròpi qu’éy û perilh. La bertadère sentetat que demoùre déns la bertut e l'umilitat, noû pas déns las bisioûs. Lou demoun, éth, dèche l’àmne déns lou troùblẹ, lou souci e qu’amistouse l'estimacioû de se. L'imayinacioû produsech causes mesclades, rètes e chéns esfèyts qui duren. Ne cau pas jaméy s'aloegna de la Sénte Umanitat de Yésus. Boulé la coùntemplacioû pure en desbroumban lou Crist qu’éy ûe fausse briaguère. Tout medich si ne poudém pas méy resouna, que cau goarda lou soubeni de la soûe Passioû (coum la soûe sudou de sanc au casau). Aloegna-s-en, qu'éy afebli las soûes bertuts pròpis. Méy l’àmne counéch la granesse de Diu, méy que soufre d'esta-n desseparade. Lou moùndẹ n'enteresse pas méy l’àmne mé n'a pas encoère l’entrade au cèu. Qu’éy û enòrmẹ prèts acceptat dap bounur permou qui purifie l’àmne coum û fenix héns las eslames. L’umilitat, qu’éy marcha suban la bertat. La bertat qu’éy qu’èm miseres e arré. Diu ayme l'umilitat permou qu’ayme la bertat. Ne cau pas jaméy demanda d'esta miat p’ou camì de las bisioûs, permou qu'aco mancaré d’umilitat e qu’ourbiré la porte au demoun per la presoumpcioû.",

  },
}

const intro7 = {
  fr: {
    title: "Septième demeure",
    subtitle: "Union transformante",
    content:
      "L'âme voit les trois Personnes de la Sainte Trinité comme un rayonnement de flammes. Elle comprend qu'elles sont une seule substance, puissance et sagesse. L'âme est si soumise à la volonté de Dieu que si Dieu veut qu'elle souffre, elle est contente ; s'il ne le veut pas, elle ne s'en tourmente plus. Elle ressent un amour immense pour ses persécuteurs et serait prête à perdre ses propres grâces pour les donner à ceux qui offensent Dieu. Auparavant, l'âme désirait mourir pour être avec Dieu. Désormais, elle souhaite vivre de longues années au milieu des plus grandes souffrances pour être utile à Dieu et faire bénir son nom. Elle ne cherche plus son propre bonheur au ciel, mais veut servir le divin Crucifié. L'âme se sent petite et craint d'offenser Dieu. L'âme peut encore commettre des péchés véniels (non délibérés), même si elle est préservée des péchés mortels par un secours spécial de Dieu. Le but ultime des grâces n'est pas le plaisir personnel, mais de rendre notre vie semblable à celle du Christ. La véritable vie spirituelle consiste à porter la marque de la croix et à devenir l'esclave de Dieu, en sacrifiant sa propre liberté pour le salut du monde; Thérèse insiste. Sans humilité, l'édifice s'écroule. Il faut s'efforcer d'être la plus petite de toutes et l'esclave de ses sœurs. Le progrès spirituel ne se mesure pas à l'intensité de l'amour ressenti, mais à la pratique des vertus et au service rendu aux autres. Si l'amour n'avance pas par les œuvres, il recule. Dieu ne regarde pas la grandeur des œuvres, mais l'amour avec lequel elles sont accomplies.",
  
  },
  be: {
    title: 'Setau demoure',
    subtitle: 'Unioû qui transfourme',
    content: "L’àmne bét las trés Persounes de la Sénte Trinitat coum û arrayòu d'eslames. Que coumprén qui soun ûe soule substance, puchànce e sayésse. L’àmne qu’éy tâ soumìssẹ à la boulentat de Diu qui si Diu bòu que soufre, qu’éy counténte ; si Diu ne bòu pas, ére ne se-n tourménte pas méy. Que sén û amou gran taus soûs persecutous e seré prèste à pèrdẹ las soûes pròpis gràcis ta da-las aus qui offènsẹn Diu. Au daban, l’àmne souhetabe mouri ta esta dap Diu. D’are-en-aban, que boù bìbẹ loungues anades au miéy de las méy granes soufrences ta esta utìlẹ à Diu e ha benadìsẹ lou soû noum. Ne cèrque pas méy lou soû pròpì bounur au cèu, mé que bòu serbi lou dibî Crucificat. L’àmne que-s sén petite e cràgn d'offensa Diu. L’àmne pot encoère ha pecats beniels (noû decidats), medich si qu’éy proutedyade dous pecats mortèus per û secours especiau de Diu. Lou darrè cap de las gràcis n’éy pas lou dou plasé persounau, mé de réndẹ la noùstẹ bite menat à la dou Crist. La bertadère bite spirituau counsìste à pourta la marque de la crouts e à debiénẹ l’esclabe de Diu, en sacrifian la soûe pròpì libertat tau salut dou moùndẹ. Thérèse ensìste. Chéns umilitat, la bastìssẹ que-s arroulha. Que cau essaya d'esta la méy petite de toutes e l’esclabe de las soûes surs. Lou prougrès spirituau ne-s mesure pas à la hòrce de l'amou sentit, mé à la pratique de las bertuts e au serbìci rendut aus àutẹs. Si l'amou ne tire pas en daban p'as obres, que tire en darrè. Diu n’espì pas la granesse de las obres, mé l’amou dap louquoau que soun hèytes.",

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
      href="/apprendre/culture"
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
 Ûe assenciou de-dehéns de cap à Diu à trabèrs las pregoundous de l’àmne, despuch las purmères coumbercioûs dinco l’unioû qui transfoùrme.
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
       Que poudém counsidera la noùstẹ àmne coum û castèth, hèyt d’û soul diamant oun y a hère d&apos;apartamens, coum héns lou cèu que y a demoures.
           </p>

            <p>
         L’àmne dou yuste n’éy pas àutẹ cause qu’û paradis oun lou Segnou e prén lous soûs bounics.
            </p>

            <p>
        Thérèse que perpause ûe assenciou dap granchots qui-s seguéchen (l’àmne poudén camina libramén déns lou castèth).

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
 Quoan l’àmne
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
      Thérèse que coumpare l’àmne en estat de pecat mortèu a ûe presoû escure, abùglẹ e mude. Û pecadou éy coum ligat a û pau, en mourin de hàmi au ras de la maschacûre qui ne pot pas touca.
           </p>

            <p>
       Que dit dounc de prega ta aquéres àmnes. Ta ûe àmne en estat de pecat mortèu, Diu éy toustém au miéy de l’àmne, mé lou pecat qu’ayi coum û boèle négrẹ, la luts ne-s pot pas méy bédẹ ni esta recebude.
           </p>

            <p>
   Au loc de putsa la soûe sape héns ûe houn clare, l’àmne que-s tresplante héns aygues négres e pudéntes (lou demoun). Dounc pas nade de las soûes obres ne porte de frut tau salut.

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