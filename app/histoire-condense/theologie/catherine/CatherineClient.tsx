'use client'

import Link from 'next/link'
import { useState } from 'react'

import styles from './catherine.module.css'
import Image from 'next/image'

const teachingsF = [
  `L'amour-propre est le poison du monde et produit tous les péchés. Ne pas corriger un pécheur par peur ou polir ses phrases par confort social, c'est comme un médecin qui met un pansement sur une plaie purulente sans la nettoyer. On peut même accomplir soi-même sa pénitence car ce péché est seulement endormi en nous.`,


  `Les pécheurs en tentant les hommes deviennent les instruments qui éprouvent et renforcent la vertu des serviteurs de Dieu. La vertu dans la difficulté a + de valeur que dans la joie, comme un jardinier qui perd son jardin et continue de travailler la terre (il aime vraiment). Un laïc qui obéit avec un immense amour a plus de mérite qu'un religieux qui obéit par simple habitude.`,

  `On ne peut pas suivre le Christ à notre convenance il faut suivre son chemin d'humilité. Les pécheurs souffrent comme les saints mais leur souffrance est inutile. Un petit acte fait avec charité a + de poids que des souffrances subies sans amour. On souffre non pas pour soi, mais par amour pour Dieu et par douleur de voir les autres s'égarer.`,

  `Ne jamais juger la volonté des autres et ne se sentir offensé que par celui qui offense Dieu. Si Dieu te fait sentir la souffrance de cette âme, c'est pour que tu l'aides. Même une pensée égoïste nuit au prochain, tu le prives d'une prière. Il faut vouloir le salut des âmes et faire la volonté de Dieu, pas la sienne. `,

  `Dieu veut que le riche ait besoin du pauvre et que le savant ait besoin de l'ignorant. Pour nous forcer à la charité. Si tu avais tous les talents, tu n'aurais pas besoin des autres et tu tomberais dans l'orgueil. Dieu nous utilise comme ses mains (ministres) pour distribuer ses dons. Si tu as quelque chose, c'est pour le donner à celui qui ne l'a pas.`,

  `Si tu n'utilises pas ta raison pour chercher la Vérité, tu marches à l'aveugle et tu finis par aimer le mal en croyant que c'est un bien. Si tu sors le vase (ton âme) de la fontaine (Dieu) pour donner à boire aux autres, il se vide vite. Si tu es triste car on ne te rend pas ton amour, c'est que ton amour est encore "imparfait" et centré sur toi.`,

  `Dans la vie spirituelle, celui qui n'avance pas recule. Il faut passer de la peur du châtiment à l'amour de la vertu. Personne ne peut "sortir" de la main de Dieu. Soit on y demeure par la miséricorde (en l'aimant), soit on y demeure sous sa justice (en subissant les conséquences de ses actes). Si la tentation te déplaît, c'est la preuve que Dieu est en toi.`,

  `Dieu retire le sentiment de sa présence pour nous empêcher de devenir des "enfants gâtés" qui ne cherchent que les bonbons spirituels (chrétiens mercenaires) pour qu'on comprenne que le péché est un néant et qu'on retourne à lui. Comme une mère qui arrête d'allaiter son enfant pour qu'il commence à manger de la nourriture solide (la "chair" du Christ crucifié). Ne pas s'aimer soi-même à travers Dieu.`,

  `Un chrétien qui pèche est plus coupable qu'un païen car + on reçoit, + on est redevable. Le démon ne peut nous faire tomber que si nous donnons notre consentement. Dieu permet la tentation pour qu'on prouve notre amour et grandisse en connaissance de nous. Il faut vider ses attachements mondains pour que Dieu entre.`,

  `Pour ceux qui ne peuvent pas pleurer physiquement (Dieu le fait pour t'empêcher de devenir orgueilleux ou de te satisfaire de ta propre émotion), c'est le désir ardent du cœur qui compte autant que l'eau des yeux (l'œil traduit ce que le cœur ressent, un cœur plein d'amour-propre donne des larmes égoïstes). La perfection, c'est de pleurer sur les péchés du monde et la perte des âmes.`,

  `Ceux qui attaquent l'Église ne peuvent pas atteindre Dieu, mais ils perdent la "grâce", ce qui les mène à la damnation s'ils ne se repentent pas. Toucher à un prêtre (ou par mépris), c'est offenser Dieu directement. Le prêtre est un trésor dans un vase d'argile. Tout le bien et le mal se font par l'intermédiaire du prochain.`,

  `Dieu donne à chacun les secours dont il a besoin, c'est le bon et vrai médecin. S'il permet une épreuve c'est pour ta sanctification. La faim, la soif, la perte d'argent, les insultes, le froid permettent un but précis : le salut. La sodomie ou la masturbation sont des abominations, même les démons (par noblesse de nature angélique) en sont horrifiés.`
]

const teachingsB = [
  `L'amou-pròpi qu'éy lou pousoû dou moùndẹ e que produsech touts lous pecats. Ne pas courridya û pecadou per pòu ou dousseya las soûes frases per counfòrt souciau, qu'éy coum û medecî qui hique û pansamén sus ûe plague pudentisse chéns la neteya. Que poudém médich ha nous-medich la soûe penitence permou qu'aquéste pecat qu'éy soulamen adroumit déns nous.`,


  `Lous pecadous en tentan lous òmis que debiénen lous utìs qui hìquen à l'espròbe e qu'agalharden la bertut dous serbitous de Diu. La bertut déns lou mauaysit qu'a méy de balou que déns la gauyou, coum û yardinè qui pèr lou soû casau e countinue de tribalha la tèrre. Û laïque qui aubedi dap û gran amou qu'a méy de merite qu'û reliyious qui aubedi per abitude.`,

  `Ne-s pot pas segui lou Crist au noùste coumbenénce, que cau segui lou soû camì d'umilitat. Lous pecadous soufèren coum lous sènts mé la loue soufrence n'éy pas utìlẹ. Û petit àctẹ hèyt dap caritat qu'a méy de pés qui doulous subi chéns amou. Ne soufrim pas ta nous-medich, mé per amou ta Diu e per la doulou de bédẹ lous àutẹs-s pèrdẹ.`,

 
 
 
  `Ne pas jaméy yudyat la boulentat dous àutẹs e ne-s senti aufensat soùnquẹ p'ou qui aufénse Diu. Si Diu que-t hè senti la doulou d'aquére àmne, qu'éy ta que-t l'àydis. Medich ûe pensade egoïste que hè dou mau au prouchén, qu'ou pribes d'ûe pregàri. Que cau boulé lou salut de las àmnes e ha la boulentat de Diu, noû pas la soûe.`,

  `Diu bòu que lou rìche àyi besougn dou pràubẹ e qu'ou saben àyi besougn de l'ignouren. Ta-ns hourça à la caritat. Si abès touts lous talénts, ne-t caleré pas lou moùndẹ e que caderés héns l'ourgul. Diu que-ns emplegue coum las soûes mâs ta desparti lous soûs dats. Si qu'as quàuqu'arré, qu'éy ta-u da au qui n'a pas.`,

  `Si ne-t sèrbes pas de la toûe resoû ta cerca la Bertat, que marches à l'abùglẹ e que bas ayma lou mau en credén qu'éy û bê. Si tournes sourti lou bachèth de la houn ta da à bébẹ aus àutẹs, que-s boéyte bìstẹ. Si qu'ès trìste permou qui ne-t rendém pas lou toû amou, qu'éy qui lou toû amou n'éy pas encoère perfèyt e qu'éy en-clabat sus tu.`,

  `Héns la bite spirituau, lou qui n'abance pas recule. Que cau passa de la pòu dou castic à l'amou de la bertut. Arré ne pot sourti de la mâ de Diu. Que demouren aciu per la misericorde ou debath la soûe yustìci. Si la tentacioû ne-t plats pas, qu'éy la probe de que Diu qu'éy déns tu.`,

  `Diu retìre lou sentimén de la soûe presénce ta-ns empecha de debiénẹ "maynats gastats" qui ne cèrcan soùnquẹ lous douçous spirituaus ta que coumprenìm qui lou pecat qu'éy boéyt e que-ns ne toùrnim ta lou. Coum ûe may qu'arreste d'apoupa lou soû maynat ta qui couménce à minya mascadure. Ne pas s'ayma nous-medich à trabèrs Diu.`,

  
  
  
  `Û crestia qui pechque qu'éy méy coupàble qu'û pagâ permou que méy que recebèm, méy que debem réndẹ. Lou demoun que-ns pot ha càdẹ soùnquẹ si dam lou noùstẹ counsentimen. Diu permet la tentacioû ta que-n proùbim lou noùstẹ amou e grandìm en counechénce de nousàutẹs. Que cau tira lous soûs ligames dou moùndẹ ta que Diu entre.`,

  `Taus qui ne pòdẹn pas ploura (Diu qu'at hè ta-t empecha de debiénẹ orgulhous ou de-t acountenta de la toûe emoucioû), qu'éy lou desi ardent dou co qui coùmpte autâ que l'aygue dous oélhs (l'oélh qu'arrebire ço qui lou co sen, û co plé d'amou-pròpi da larmes egoïstes). La perfeccioû qu'éy de ploura sus lous pecats dou moùndẹ e la pèrtẹ de las àmnes.`,

  `Lous qui atàquen la Glèyse ne pòdẹn pas touca Diu, mé que pèrden la gràci, ço qu'ous mie ta la pèrtẹ si ne-s repénten pas. Touca a û prèste (ou per despudi), qu'éy aufensat Diu directamén. Lou prèste qu'éy û tresor héns û bachèth de tèrre. Tout lou bê e lou mau que-s hèn per lou prouchén.`,

  `Diu da à chacû lous secours doun a besougn, qu'éy lou boû e beritàblẹ medecî. Si permé ûe espròbe qu'éy ta la toûe santificacioû. La hàmi, la sét, la pèrte de mounéde, las enhountes, lou rét que pèrmetẹn û but precis : lou salut. La sodomie ou la masturbacioû que soun hàstis, medich lous demouns (per noublesse de nature anyoulique) que-n soun espaurits.`



]

export default function CatherinePage() {
const [langue, setLangue] =
  useState<'fr' | 'be'>('fr')

const teachings =
  langue === 'fr'
    ? teachingsF
    : teachingsB
  return (
  <main className={styles.catherinePage}>
  {/* HEADER */}
  <header className={styles.catherineHeader}>
    <div className={`container ${styles.catherineHeaderContent}`}>
      <Link
        href="/apprendre/culture"
        className={styles.backLink}
      >
        ← Retour
      </Link>

      <h1 className={styles.catherineTitle}>
       
        <span>Catherine de Sienne</span>
      </h1>
    
     <div
    style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '2px solid #f3c623',
      borderRadius: '999px',
      padding: '4px',
    }}
  >
  <button
      onClick={() => setLangue('fr')}
      style={{
        border: 'none',
        background:
          langue === 'fr'
            ? '#2a0c45'
            : 'transparent',
        color:
          langue === 'fr'
            ? '#fff'
            : '#2a0c45',
        fontWeight: 700,
        padding: '.65rem 1rem',
        borderRadius: '999px',
        cursor: 'pointer',
        zIndex: 9999,
      }}
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
      style={{
        border: 'none',
        background:
          langue === 'be'
            ? '#2a0c45'
            : 'transparent',
        padding: '.65rem 1rem',
        
        borderRadius: '999px',
        cursor: 'pointer',
        zIndex: 9999,
      }}
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
     
  </header>

  {/* HERO */}
  <section className={styles.heroSection2}>
  
   <div className={styles.catherineHeaderContent2}>
      <Link
        href="/apprendre/culture"
        className={styles.backLink2}
      >
        ← Retour
      </Link>

    
    
     <div
    style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      border: '2px solid #f3c623',
      borderRadius: '999px',
      padding: '4px',
    }}
  >
    <button
      onClick={() => setLangue('fr')}
      style={{
        border: 'none',
        background:
          langue === 'fr'
            ? '#2a0c45'
            : 'transparent',
        color:
          langue === 'fr'
            ? '#fff'
            : '#2a0c45',
        fontWeight: 700,
        padding: '.65rem 1rem',
        borderRadius: '999px',
        cursor: 'pointer',
        zIndex: 9999,
      }}
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
      style={{
        border: 'none',
        background:
          langue === 'be'
            ? '#2a0c45'
            : 'transparent',
        padding: '.65rem 1rem',
        
        borderRadius: '999px',
        cursor: 'pointer',
        zIndex: 9999,
      }}
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
  
  
  
    <div className="container">
      <div className={styles.heroContent}>
        <h2> {langue === 'fr' ? (
    <>Une femme simple
          <br />
          qui parla aux puissants</>
            ) : (  
 <>
 Ûe hémble sìmple
          <br />
          qui parlè aus pouchans 

</>
            )}
        </h2>

        <p>  {langue === 'fr'  ?
          'Sainte Catherine de Sienne, simple religieuse laïque dominicaine du XIVe siècle, fut le personnage politique majeur qui fit revenir le pape à Rome.' : 
          'Sénte Catherine de Sienne, sìmple reliyiouse laïque dominicane dou sècle quatoùrzau, qu\'estou lou persounàdyẹ poulitique màyẹ qui hesou tourna biénẹ lou pape ta Roume.'}
        </p>
      </div>
    </div>
  </section>

  {/* QUOTE */}
  <section className={styles.quoteSection}>
    <div className="container">
      <div className={styles.quoteCard}>
        <div className={styles.quoteEmoji}>
          ✉️
        </div>

        <p className={styles.quoteText}>


            {langue === 'fr'  ?
          '« Vous n’avez pas été bien ferme. Je prie pour que vous agissiez en homme viril. Ayez faim du salut de vos brebis. »' :
           '« Ne p\'èt pas estats proû rèdẹs. Que prègui ta qui pouchquiats ha coum û Òmi. Ayìt hami dou salut de las bòstẹs aulhes. »'}
        </p>

        <span className={styles.quoteAuthor}>
          {langue === 'fr'  ?
          '  — Sainte Catherine au pape' : '  — Sénte Catherine au pape' }
        </span>
      </div>
    </div>
  </section>

  {/* DOCTOR */}
  <section className={styles.doctorSection}>
    <div className="container">
      <div className={styles.doctorCard}>
        <h3> {langue === 'fr'  ?
          'Docteur de l’Église' : 'Douctur de la Glèyse' }
        </h3>

        <p>  {langue === 'fr' ? (  <>
          Une femme sans instruction universitaire, n’ayant jamais étudié dans une école de théologie ni ouvert de manuel de droit canon, fut pourtant reconnue comme parfaitement conforme à l’orthodoxie après examen de ses écrits.

          <br />
          <br />

          L’Église l’a proclamée
          Docteur de l’Église,
          reconnaissant dans ses paroles
          une sagesse inspirée
          par l’Esprit Saint. </>   ) : (  
 <>  
    Ûe hémble chéns enstruccioû unibersitàri, chéns n’abé pas jaméy estudiat héns ûe escole de theoulouyìe ni oubèrt de manuau de drét canoun, qu’estou toutû recounéchude coum tout à fèyt counfourme à l’ourtoudoussìe après l’enspeccioû dous soûs escriuts.
          <br />
          <br />

    La Glèyse que la prouclamade
          Douctur de la Glèyse,
          recounéchén héns las soûes paraules
          ûe sayesse enspirade
          per l’Esprit Sén.   </>  )}
        </p>
      </div>
    </div>
  </section>

  {/* LEARNING */}
  <section className={styles.learningSection}>
    <div className="container">
      <h2 className={styles.sectionTitle}> {langue === 'fr'  ?
        'Enseignements spirituels' :   'Ensegnaméns spirituèls' }
      </h2>

      <div className={styles.learningGrid}>
       {teachings.map((text, index) => (
          <article
            key={index}
            className={`${styles.learningCard} ${
              index % 2 === 0
                ? styles.white
                : styles.purple
            }`}
          >
          <div className={styles.cardNumber}>
  {String(index + 1).padStart(2,'0')}
</div>

            <p>
              {text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* FINAL */}
  <section className={styles.finalSection}>
    <div className="container">
      <div className={styles.quoteCard}>
        <div className={styles.quoteEmoji}>
          🔥
        </div>

        <p className={styles.quoteText}>
         
         
      {langue === 'fr'  ?    
         
          '« La Vierge Marie à Sainte Bernadette (souvent malade) : Je ne vous promets pas de vous rendre heureuse dans ce monde, mais dans l’autre. »' : '« La Bièrye Marie à Sénte Bernadette (soubén malaude) : Ne-p prouméti pas de-p réndẹ urouse héns aquéstẹ moùndẹ, mé héns l\'àutẹ. »'
  }  </p>
      </div>
    </div>
  </section>

</main>
  )
}