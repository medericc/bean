// app/lignees/[slug]/page.tsx
export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  const data = ligneesData[slug as keyof typeof ligneesData];

  if (!data) {
    return {
      title: "Page non trouvée – Mémoire du Béarn",
    };
  }

  return {
    title: `${data.titre} – ${data.periode} | Mémoire du Béarn`,
  };
}
interface Props {
  params: {
    slug: string;
  };
}

const ligneesData = {
  centulle: {
    titre: "Maison de Centulle",
    periode: "Xe - XIIe siècle",
    description: "Première grande lignée vicomtale du Béarn, la Maison de Centulle naît dans le Vic-Bilh au cœur du Moyen Âge gascon. Héritière d’une noblesse locale enracinée, elle incarne la lente construction d’un pouvoir territorial indépendant face aux ducs d’Aquitaine et aux comtes de Bigorre. Sous les règnes de Centulle IV, Centulle V et Gaston IV, la dynastie transforme un fief montagnard en une principauté organisée autour de Morlaàs et Lescar. Fidèles à la réforme grégorienne et alliés à Cluny, les Centulle instaurent un gouvernement original mêlant foi, droit et autonomie. Par leurs mariages avec la noblesse aragonaise et bigourdane, ils projettent le Béarn au-delà des Pyrénées, affirmant une identité à la fois gasconne et transfrontalière.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Gaston Ier", "Centulle III", "Gaston II", "Centulle IV","Gaston III", "Centulle V","Gaston IV","Talèse d'Aragon","Centule VI","Guiscarde"],
    faitsMarquants: [
      "Fondation de la vicomté de Béarn",
      "Unification du Béarn avec Oloron",
      "Établissement des Fors de Béarn",
      "Mise en place d'un pouvoir régalier",
       "Gaston IV héros de la Première Croisade et de la Reconquista en Aragon",
      "Extension territoriale vers l'Aragon",
       
      
    ],
    descriptionCourte: "Pionniers du Béarn, entre foi et pouvoir",
    heritage: "La Maison de Centulle a donné au Béarn sa première véritable souveraineté politique et spirituelle. En posant les bases d’un pouvoir régalien, elle a façonné un territoire libre, gouverné selon ses propres lois (les Fors), doté d’une monnaie et d’institutions locales solides. Leur alliance avec Rome et Cluny a ancré le Béarn dans le grand mouvement réformateur de la chrétienté, tandis que leurs liens avec l’Aragon ont ouvert la voie à une diplomatie pyrénéenne originale. Héritiers d’une tradition de liberté communautaire, les Centulle ont transmis à leurs successeurs un Béarn cohérent, stable et fier de son indépendance — un modèle d’équilibre entre foi, coutume et souveraineté."
  },
   gabarret: {
    titre: "Maison de Gabarret",
    periode: "XIIe siècle",
    description: "La lignée béarnaise, issue des Gabarret et unie aux maisons de Barcelone et de Moncade, s’est formée au XIIᵉ siècle dans un contexte de luttes entre Aragon, Toulouse et l’Aquitaine. Par alliances et fidélités successives, elle passa de la mouvance aragonaise à la gasconne, tout en préservant son autonomie politique.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Pierre de Béarn", "Gaston V", "Marie de Béarn"],
    faitsMarquants: [
      "Intégration du Béarn dans la mouvance aragonaise",
      "Hommage scellant la tutelle aragonaise",
      "Alliances du Béarn, du Marsan et de la Bigorre",
      
    ],
    descriptionCourte: "Lignée née des rivalités pyrénéennes",
    heritage: "Cette lignée a transmis un héritage d’indépendance politique et d’équilibre entre les puissances voisines. Elle a ancré le Béarn dans une identité fière, autonome et tournée vers la diplomatie plutôt que la conquête. Le système féodal local, fondé sur la Cout Majour et le serment collectif, a laissé une trace durable dans l’histoire institutionnelle du Sud-Ouest."
  },
    moncade: {
    titre: "Maison de Moncade",
    periode: "XIIe - XIIIe siècle",
    description: "Issue d’une illustre lignée catalane apparentée aux comtes de Barcelone, la Maison de Moncade s’impose au Béarn par le mariage de Guillaume-Raymond avec Guillemette de Castelviel et par la succession de Gaston VI le Bon. À partir de la fin du XIIe siècle, elle incarne une nouvelle ère pour la vicomté : celle d’un pouvoir féodal trans-pyrénéen, partagé entre fidélité à la Couronne d’Aragon, négociation avec les Plantagenêts et résistance à l’emprise capétienne. Les Moncade font du Béarn un acteur diplomatique de premier plan, tout en consolidant ses institutions internes. Sous Gaston VII le Grand, Orthez devient capitale politique, administrative et militaire, symbole d’un pouvoir centralisé et indépendant.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Gaston VI", "Guillaume-Raymond", "Guillaume II","Gaston VII","Marguerite de Béarn"],
    faitsMarquants: [
      "Réformation des Fors de Morlaàs et d’Ossau (1220–1221)",
      "Orthez devient la capitale du Béarn",
      "Jeu diplomatique avec les Capétiens et les Plantagenêts",
      "Marguerite résiste devant la France",
      
    ],
   descriptionCourte: "Pouvoir catalan forgeant l’État béarnais",
    heritage: "Les Moncade lèguent un Béarn autonome, administrativement structuré et jaloux de ses libertés féodales. Leur politique prépare la montée d’une identité béarnaise forte, indépendante du roi de France"
  },
   foix: {
    titre: "Maison de Foix-Béarn",
    periode: "XIIIe - XVe siècle",
    description: "Issue de l’union de Marguerite de Moncade et de Roger-Bernard III de Foix, la maison de Foix-Béarn marque l’entrée du Béarn dans une nouvelle ère politique. Héritière des Moncade, elle conserve l’esprit d’indépendance féodale tout en s’affirmant face aux grandes puissances du temps, Capétiens, Plantagenêts et Aragonais. De Gaston VIII à Gaston IV (dit Gaston XI dans ta numérotation), les vicomtes de cette lignée transforment le Béarn en un véritable petit État souverain, administré, diplomatique et culturellement brillant. Sous Gaston Fébus, la vicomté atteint son apogée : puissance militaire, prospérité économique et prestige littéraire font du Béarn une principauté respectée dans toute l’Europe médiévale.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Gaston VIII", "Gaston IX","Gaston X","Mathieu de Castelbon","Isabelle de Castetbon","Jean de Grailly","Gaston XI"],
    faitsMarquants: [
      "Luttes internes mais aussi l’ancrage féodal du pouvoir",
      "Souveraineté affirmée en pleine Guerre de 100 ans",
      "Pau devient capitale du Béarn",
      "Union Béarn-Navarre",
      
    ],
    descriptionCourte: "Maison unifiant Béarn et puissance féodale",
    heritage: "La maison de Foix-Béarn lègue un Béarn politiquement autonome, administrativement organisé et profondément enraciné dans une culture de liberté. Sa diplomatie prudente, son équilibre entre neutralité et affirmation souveraine, ainsi que son sens de la centralisation préparent la transition vers une principauté moderne. Par l’union dynastique avec la Navarre, le Béarn devient un acteur incontournable entre France, Gascogne et péninsule Ibérique, jetant les bases du futur royaume de Navarre-Béarn. Cette lignée incarne la maturité politique du Béarn, capable de résister aux rois de France tout en tissant des alliances durables."
  },
   navarre: {
    titre: "Maison de Navarre",
    periode: "XVe - XVIe siècle",
    description: "Dernière grande dynastie souveraine du Béarn, la Maison de Navarre hérite à la fois de l’esprit des Foix-Béarn et de la légitimité royale issue de la Navarre pyrénéenne. Sous Catherine de Foix, Henri II d’Albret et Jeanne d’Albret, cette lignée défend avec acharnement l’indépendance du Béarn face aux ambitions des royaumes de France et de Castille. Tout en affirmant une autorité monarchique propre, elle consolide les institutions locales, modernise l’administration et fait du Béarn un État de droit reconnu pour sa neutralité et son rayonnement culturel.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["François Fébus", "Catherine de Foix", "Henri Ie de Béarn","Jeanne d'Albret"],
    faitsMarquants: [
   "1512 : Invasion de la Haute-Navarre par la Castille ; maintien de la souveraineté béarnaise",
    "1519 : Création du Conseil souverain et de la Chambre des comptes à Pau par Henri II",
    "1538-1547 : Fortification de Navarrenx, bastion symbolique de l’autonomie béarnaise",
    "1560 : Jeanne d’Albret introduit la Réforme Protestante",
      
    ],
   descriptionCourte: "Dynastie garante de l’autonomie du Béarn",
    heritage: "La Maison de Navarre marque l’apogée politique et culturelle du Béarn médiéval devenu principauté souveraine. Elle laisse un héritage de fermeté politique, d’humanisme et d’autonomie, qui fera du Béarn un modèle unique de souveraineté."
  },
  // ... autres lignees
};
// Liste des vicomtes ayant une page dédiée dans /vicomtes/[slug]
const vicomtesExistants: Record<string, string> = {
  "centulle iv": "centulle-iv",
  "centulle v": "centulle-v",
  "gaston iv": "gaston-iv",
 
  "talese d'aragon": "talese-d-aragon",
  "marie de bearn": "marie",
  "gaston vi": "gaston-vi",
  "guillaume-raymond": "guillaume-raymond",
  "guillaume ii": "guillaume-ii",
  "gaston vii": "gaston-vii",
  "marguerite de bearn": "marguerite",
  "gaston fébus": "gaston-febus",
  "mathieu de castelbon": "mathieu",
   "isabelle de castetbon": "isabelle",
    "jean de grailly": "jean",
     "gaston xi": "gaston-xi",
      "catherine de foix": "catherine",
       "henri ie de bearn": "henri",
  "jeanne d'albret": "jeanne-dalbret",
  
  // tu peux compléter ici à mesure que tu crées les pages
};
function normalizeName(name: string) {
  return name.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // supprime les accents
}

export default async function LigneeDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const lignee = ligneesData[slug as keyof typeof ligneesData];

  if (!lignee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête avec image */}
    <section className="bg-pierre py-16">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-4">
        {lignee.titre}
      </h1>
      <p className="font-corps text-2xl text-brun-terre mb-2">
        {lignee.periode}
      </p>
      <p className="font-corps text-lg text-gray-700">
        {lignee.descriptionCourte}
      </p>
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
                <h2 className="font-titre text-3xl text-vert-mousse mb-6">Histoire de la lignée</h2>
                <p className="font-corps text-gray-700 leading-relaxed mb-6">
                  {lignee.description}
                </p>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Faits marquants</h3>
                <ul className="font-corps text-gray-700 space-y-2 mb-8">
                  {lignee.faitsMarquants.map((fait, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-or-patine mr-3">•</span>
                      {fait}
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-titre text-2xl text-brun-terre mb-4">Héritage</h3>
                <p className="font-corps text-gray-700 leading-relaxed">
                  {lignee.heritage}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Vicomtes de la lignée */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Vicomtes de cette lignée</h3>
               <ul className="font-corps text-gray-700 space-y-2">
  {lignee.vicomtes.map((vicomte, index) => {
    const slug = vicomtesExistants[normalizeName(vicomte)];

    const isLink = Boolean(slug);

    return (
      <li key={index}>
        {isLink ? (
          <a
            href={`/vicomtes/${slug}`}
            className="hover:text-or-patine transition-colors"
          >
            {vicomte}
          </a>
        ) : (
          <span className="cursor-default">{vicomte}</span>
        )}
      </li>
    );
  })}
</ul>

              </div>
              
              {/* Période */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-2">Période</h3>
                <p className="font-corps text-gray-700">{lignee.periode}</p>
              </div>
              
              {/* Navigation */}
              <div className="bg-parchemin-fonce p-6 rounded-lg border border-or-patine">
                <h3 className="font-titre text-xl text-vert-mousse mb-4">Explorer</h3>
                <div className="space-y-2">
                  <a href="/lignees" className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    ← Retour aux lignées
                  </a>
                  <a href="/vicomtes" className="block font-corps text-gray-700 hover:text-or-patine transition-colors">
                    Voir tous les vicomtes →
                  </a>
                </div>
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
    { slug: 'centulle' },
    { slug: 'gabarret' },
    { slug: 'moncade' },
    { slug: 'foix' },
    { slug: 'navarre' }
  ];
}