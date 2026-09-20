// app/page.tsx
import Hero from '@/components/Hero';
import CarteBearn from '@/components/CarteBearn';
import Card from '@/components/Card';

export default function Home() {
  const highlights = [
    {
      titre: "Histoire Chronologique",
      description: "Parcourez les grandes périodes du Béarn",
      image: "/histoire-cover.jpg",
      lien: "/histoire-condensee",
      badge: "Timeline"
    },
    {
      titre: "Lignées Vicomtales",
      description: "Découvrez les grandes familles qui ont façonné le Béarn",
      image: "/lignee-cover.jpg",
      lien: "/lignees",
      badge: "Familles"
    },
    {
      titre: "Les Vicomtes",
      description: "Explorez les biographies des vicomtes de Béarn",
      image: "/vicomtes-coverx.jpg", 
      lien: "/vicomtes",
      badge: "Biographies"
    }
  ];

  return (
    <div className="min-h-screen bg-parchemin">
      {/* Section Hero */}
      <Hero />
      
      {/* Section Carte Interactive */}
      {/* <section className="py-16 bg-pierre">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl md:text-4xl text-vert-mousse mb-4">
              Explorez le Béarn Historique
            </h2>
            <p className="font-corps text-xl text-brun-terre max-w-2xl mx-auto">
              Naviguez sur la carte pour découvrir les lieux emblématiques de l'histoire béarnaise
            </p>
          </div>
          <CarteBearn />
        </div>
      </section> */}
      
      {/* Section Highlights */}
      <section className="py-16 bg-pierre">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-titre text-3xl md:text-4xl text-vert-mousse mb-4">
              Parcours de Découverte
            </h2>
            <p className="font-corps text-xl text-brun-terre">
              Choisissez votre angle d'exploration de l'histoire du Béarn
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                titre={item.titre}
                description={item.description}
                image={item.image}
                lien={item.lien}
                badge={item.badge}
              />
            ))}
          </div>
        </div>
      </section>
       {/* Section Histoire, Vérité et transmission */}
    {/* Section Histoire, Vérité et transmission */}
<section className="py-16 md:py-20 lg:py-24 bg-parchemin">

  <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">

    <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16">

      <span className="inline-block text-or-patine font-corps font-semibold tracking-widest uppercase text-sm mb-4">
        Histoire, religion et société
      </span>

      <h2 className="font-titre text-3xl md:text-4xl lg:text-5xl text-vert-mousse mb-6 leading-tight">
        Le Béarn dans l'histoire de la Vérité
      </h2>

      <div className="w-20 h-1 bg-or-patine mx-auto rounded-full" />

    </div>

    <article className="bg-parchemin-fonce/40 border border-brun-terre/20 rounded-2xl shadow-lg overflow-hidden">

      <div className="p-6 sm:p-8 md:p-12 lg:p-16">

        <div className="max-w-[1300px] mx-auto space-y-8">
                <p className="font-corps text-lg md:text-xl text-brun-terre leading-relaxed">
                  L’Église catholique (le phare du monde) constitue le fil conducteur de l’histoire du Béarn : depuis les premiers siècles du christianisme, les mêmes tentations réapparaissent face à elle sous des formes renouvelées. La gnose initiatique — de Simon le Magicien au catharisme et à la franc-maçonnerie — illustre cette volonté récurrente de s’affranchir de la vérité en s'éloignant du Vicaire du Christ pour lui substituer une doctrine personnelle, à l’image des mythologies où l'homme cherche à se faire Dieu, à l'opposé de l'humilité de Marie.
                </p>

                <p className="font-corps text-lg md:text-xl text-brun-terre leading-relaxed">
                  Sa perspective permet de saisir les prises de pouvoir, les conflits religieux et politiques, ainsi que les bouleversements imposés d’abord par la force, puis par l’influence de l’idéologie de ces nouveaux régimes dans l'espace public (France, Portugal, Espagne, Mexique...). Ces derniers ambitionnent de changer la société pour réinventer l'homme (anti-empirisme), portées désormais par des foules grégaires et béotiennes, soumises à des études sur elles-mêmes plutôt que sur les saints, validant leur déviance. Le chef d'État ne protège plus son peuple (auquel il devrait assurer le salut), mais recherche une simple popularité. Placé au-dessus des lois par des décideurs plutôt que soutenu par sa conception (unissant intérêt propre et général), il fait désormais ouvertement fi de son peuple.
                </p>

                <p className="font-corps text-lg md:text-xl text-brun-terre leading-relaxed">
                  Pour se justifier, ce pouvoir divise son propre régime en mouvements en apparence opposés (des leurres), mais issus d'une même dynamique — saint Cyrille d'Alexandrie juge absurde de faire dépendre l'intelligence d'un trait physique (deux personnes disposant de 4 doigts peuvent manifester un avis divergent juste à l'acquisition d'un cinquième). Il recourt à des définitions absconses taillées sur mesure pour désigner des ennemis, où le développement devient une conclusion sans nuance. Il confond sciemment l'accident et la substance pour médire, au lieu de considérer les hommes comme des instruments de Dieu appelés à la sainteté. Il occulte le fait que le régime lui-même — création artificielle, anthropocentrique et éphémère à travers une pléthore de constitutions rédigées par les mêmes acteurs — constitue le problème central pour ses peuples. Ces peuples subissent un colonialisme intérieur au service d'un agenda (Azaña), où le fort ne défend plus le faible mais se prévaut d'une fausse bienveillance incarnée par de pseudo-héros aux yeux bandés, sous le règne de lois cauteleuses (dogmes maçonniques) où l'avoir écrase l'être (mauvais par principe).
                </p>

                <p className="font-corps text-lg md:text-xl text-brun-terre leading-relaxed">
                  Si les méthodes évoluent — actuellement par le sophisme autophage du relativisme —, les mécanismes demeurent, soutenus par des instances s'accordant sur les règles du jeu à la manière d'adversaires sportifs, face à l'ordre naturel et catholique, multipliant les justifications par compléments circonstanciels de but frappées d’inanité.
                </p>

                <p className="font-corps text-lg md:text-xl text-brun-terre leading-relaxed">
                  Connaître l’histoire de ses ancêtres (saint Paul adaptait son discours), leurs institutions et leurs combats offre au Béarnais le discernement nécessaire pour ne pas se perdre dans la novlangue, la vacuité des prolégomènes et les inversions sémantiques non définies. Diffusés par les médias et des débats stériles, ces artifices cherchent à pervertir le catholique moyen tout en poussant, par orgueil, les plus crédules au schisme. Ces débats mettent en scène de faux catholiques et préconditionnent le jugement (films et séries légitimant des crimes et pseudo-solutions lucratives) en présentant comme excessif ce qui n'est qu'une pratique tiède, plaçant les foucades au-dessus de la vérité — à l'image des Israélites critiquant le Seigneur en circuit fermé, sans jamais l'interroger (comme Job), préférant la spéculation (ou le discours officiel) à la vérité.
                </p>

                <div className="border-l-4 border-or-patine bg-parchemin/70 rounded-r-xl p-6 md:p-8 my-10">
                  <p className="font-titre text-xl md:text-2xl lg:text-3xl text-vert-mousse leading-relaxed italic">
                    L’histoire, envisagée sous le prisme catholique (la vérité), constitue le seul moyen de comprendre les erreurs contemporaines.
                  </p>
                </div>

                <p className="font-corps text-lg md:text-xl text-brun-terre leading-relaxed">
                  Il convient de suivre les Pères, les Docteurs et les Saints (éprouvés par les erreurs de leur temps comme un papa éprouve son enfant pour qu’il progresse ; ils n’ont pas cédé comme leurs accointances) de l'Église et de consacrer ses dons à Dieu afin de promouvoir un espace public chaste, conscient que ce qui nous entoure façonne notre âme. Enfin, il importe de ne pas ajouter aux malheurs venus des autres un plus grand malheur (la damnation), en orientant toujours nos décisions selon ce que nous souhaitons présenter à Dieu lors de notre jugement individuel — guidant ainsi autrui vers le bien, car approuver un péché (fût-il cautionné par l'État, il n'a aucune valeur juridique) engage notre propre responsabilité.
                </p>

              </div>

            </div>

          </article>

        </div>
      </section>
      {/* Section Citation */}
      <section className="py-16 bg-parchemin-fonce">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-titre text-2xl md:text-3xl text-brun-terre italic max-w-4xl mx-auto leading-relaxed">
            "La hargne de Gaston IV le Croisé, la rigueur morale
      de Jeanne d&apos;Albret, la foi de Saint Gontran, la
      défense de Catherine de Béarn, la pragmaticité
      d&apos;Henri d&apos;Albret, la ténacité de Catherine de
      Bourbon et, si possible, le génie de Fébus."
          </blockquote>
          <p className="font-corps text-lg text-vert-mousse mt-6">
            - Un vrai Béarnais
          </p>
        </div>
      </section>
    </div>
  );
}