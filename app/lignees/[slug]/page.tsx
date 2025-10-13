// app/lignees/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const ligneesData = {
  centulle: {
    titre: "Maison de Centulle",
    periode: "Xe - XIIe siècle",
    description: "La première lignée des vicomtes de Béarn, issue du Vic-Bilh, remontant au Xe siècle. Sous Centulle IV et V, puis Gaston IV, elle étend son influence du Béarn à la Bigorre et jusqu’aux Pyrénées aragonaises. Par alliances, réformes et fidélités croisées entre Aquitaine, Aragon et Rome, cette dynastie transforme le Béarn en un état structuré autour de Morlaàs et Lescar.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Gaston Ier", "Centulle III", "Gaston II", "Centulle IV","Gaston III", "Centulle V","Gaston IV","Talèse d'Aragon","Centule VI","Guiscarde"],
    faitsMarquants: [
      "Fondation de la vicomté de Béarn",
      "Établissement des Fors de Béarn",
      "Extension territoriale vers l'Aragon",
      "Unification du Béarn avec Oloron",
      "Mise en place d'un pouvoir régalier"
    ],
    heritage: "Les Centulle et Gaston ont fait du Béarn un territoire à part, souverain dans les faits, structuré par ses lois (les Fors), sa monnaie et ses institutions locales. Leur politique d’équilibre entre Aquitaine, Rome et Aragon a ancré durablement l’identité béarnaise. Héritiers d’une tradition casalère et d’une autonomie ancienne, ils ont posé les bases de la liberté et de la cohésion du Béarn médiéval."
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
    heritage: "Cette lignée a transmis un héritage d’indépendance politique et d’équilibre entre les puissances voisines. Elle a ancré le Béarn dans une identité fière, autonome et tournée vers la diplomatie plutôt que la conquête. Le système féodal local, fondé sur la Cout Majour et le serment collectif, a laissé une trace durable dans l’histoire institutionnelle du Sud-Ouest."
  },
    moncade: {
    titre: "Maison de Moncade",
    periode: "XIIe - XIIIe siècle",
    description: "La dynastie des Moncade, d’origine catalane, s’impose au Béarn au XIIᵉ siècle par alliance avec la lignée des vicomtes de Béarn. Elle joue un rôle majeur entre la France, l’Aragon et l’Angleterre. La lignée s’éteint avec Marguerite de Moncade, qui transmet ses droits à la maison de Foix, unissant ainsi Béarn et Foix.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Gaston VI", "Guillaume-Raymond", "Guillaume II","Gaston VII","Marguerite de Béarn"],
    faitsMarquants: [
      "Orthez devient la capitale du Béarn",
      "Jeu diplomatique avec les Capétiens et les Plantagenêts",
      "Marguerite résiste devant la France",
      
    ],
    heritage: "Les Moncade lèguent un Béarn autonome, administrativement structuré et jaloux de ses libertés féodales. Leur politique prépare la montée d’une identité béarnaise forte, indépendante du roi de France"
  },
   foix: {
    titre: "Maison de Foix-Béarn",
    periode: "XIIIe - XVe siècle",
    description: "La lignée des Foix-Béarn, issue de Gaston VII, s’impose au tournant du XIVᵉ siècle avec une consolidation du pouvoir face aux Armagnac et aux Capétiens. Après de violents conflits familiaux et politiques, le Béarn sous Fébus devient un État indépendant, riche et centralisé,qui s'étendra sur la Navarre.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["Roger-Bernard de Béarn", "Gaston VIII", "Gaston IX","Gaston X","Mathieu de Castelbon","Archambaud de Grailly","Jean de Grailly","Gaston XI"],
    faitsMarquants: [
      "Luttes internes mais aussi l’ancrage féodal du pouvoir",
      "Souveraineté affirmée en pleine Guerre de 100 ans",
      "Pau devient capitale du Béarn",
      "Union Béarn-Navarre",
      
    ],
    heritage: "La lignée des Foix-Béarn laisse un territoire politiquement autonome, solidement administré et culturellement rayonnant. Elle incarne la résistance à la domination capétienne et la naissance d’une identité béarnaise affirmée. Par son union avec la maison de Navarre, le Béarn devient un pivot entre France, Gascogne et Pyrénées."
  },
   navarre: {
    titre: "Maison de Navarre",
    periode: "XVe - XVIe siècle",
    description: "La lignée béarnaise, issue des Gabarret et unie aux maisons de Barcelone et de Moncade, s’est formée au XIIᵉ siècle dans un contexte de luttes entre Aragon, Toulouse et l’Aquitaine. Par alliances et fidélités successives, elle passa de la mouvance aragonaise à la gasconne, tout en préservant son autonomie politique.",
    image: "/images/lignees/centulle-detail.jpg",
    vicomtes: ["François Fébus", "Catherine de Navarre", "Henri Ie de Béarn","Jeanne d'Albret"],
    faitsMarquants: [
      "Intégration du Béarn dans la mouvance aragonaise",
      "Hommage scellant la tutelle aragonaise",
      "Alliances du Béarn, du Marsan et de la Bigorre",
      
    ],
    heritage: "Cette lignée a transmis un héritage d’indépendance politique et d’équilibre entre les puissances voisines. Elle a ancré le Béarn dans une identité fière, autonome et tournée vers la diplomatie plutôt que la conquête. Le système féodal local, fondé sur la Cout Majour et le serment collectif, a laissé une trace durable dans l’histoire institutionnelle du Sud-Ouest."
  },
  // ... autres lignees
};

export default function LigneeDetailPage({ params }: Props) {
  const lignee = ligneesData[params.slug as keyof typeof ligneesData];
  
  if (!lignee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-parchemin">
      {/* En-tête avec image */}
      <section className="relative h-96 bg-gray-800">
        <img 
          src={lignee.image} 
          alt={lignee.titre}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="font-titre text-4xl md:text-5xl mb-2">{lignee.titre}</h1>
          <p className="font-corps text-xl">{lignee.periode}</p>
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
                  {lignee.vicomtes.map((vicomte, index) => (
                    <li key={index}>
                      <a href={`/vicomtes/${vicomte.toLowerCase().replace(' ', '-')}`} 
                         className="hover:text-or-patine transition-colors">
                        {vicomte}
                      </a>
                    </li>
                  ))}
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