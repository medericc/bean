'use client';

import { useState, useMemo } from 'react';
import Card from '@/components/Card';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const vicomtes = [
  {
    slug: "centulle-iv",
    titre: "Centulle IV le Vieux",
    description: "Vicomte de 1020 à 1058, il consolide le pouvoir béarnais et étend l'influence de la vicomté.",
    image: "/centulle.webp",
    periode: "1020-1058",
    lignee: "Centulle",
    badge: "Bâtisseur"
  },



   {
    slug: "centulle-v",
    titre: "Centulle V le Jeune",
    description: "Successeur de Centulle le Vieux, il réforme et bâtit l’indépendance béarnaise",
    image: "/centulle2.webp",
    periode: "1058–1090",
    lignee: "Centulle",
    badge: "Réformateur"
  },



  {
    slug: "gaston-iv",
    titre: "Gaston IV le Croisé",
    description: "Héros de la première croisade, il renforce les institutions et développe l'administration.",
    image: "/croise.webp",
    periode: "1090-1131",
    lignee: "Centulle",
    badge: "Croisé"
  },
   {
    slug: "talese-d-aragon",
    titre: "Talèse d'Aragon",
    description: "Princesse d’Aragon, elle renforça durablement les liens avec l’Aragon par la diplomatie.",
    image: "/talese.webp",
    periode: "1090-1137",
    lignee: "Centulle",
    badge: "Pieuse"
  },



  {
    slug: "marie",
    titre: "Marie de Béarn",
    description: "Humble femme de devoir et de piété, elle servit de lien décisif entre Béarn et Aragon.",
    image: "/mariebe.webp",
    periode: "1170-1173",
    lignee: "Gabarret",
    badge: "Religieuse"
  },






  {
    slug: "gaston-vi",
    titre: "Gaston VI",
    description: "Il place le Béarn au cœur des enjeux pyrénéens tout en préservant son autonomie.",
    image: "/sixe.webp",
    periode: "1173-1214",
    lignee: "Moncade",
    badge: "Fidèle"
  },



  {
    slug: "guillaume-raymond",
    titre: "Guillaume-Raymond",
    description: "Seigneur parfois brutal, il marque la vicomté par des réformes institutionnelles.",
    image: "/guilhem.webp",
    periode: "1214-1224",
    lignee: "Moncade",
    badge: "Pénitent"
  },

  {
    slug: "guillaume-ii",
    titre: "Guillaume II",
    description: "Élevé à la cour d’Aragon, il incarna la double identité pyrénéenne de sa lignée.",
    image: "/guillaumedeux.webp",
    periode: "1224-1229",
    lignee: "Moncade",
    badge: "Chevalier"
  },



  {
    slug: "gaston-vii",
    titre: "Gaston VII",
    description: "Il consolida le pouvoir béarnais tout en jonglant entre Angleterre, Castille et Aragon.",
    image: "/gastonanglais.webp",
    periode: "1229-1290",
    lignee: "Moncade",
    badge: "Indomptable"
  },






  {
    slug: "marguerite",
    titre: "Marguerite",
    description: "Elle unit Foix-Béarn, en maintenant l'indépendance du Béarn face aux anglais et français.",
    image: "/marguerite.webp",
    periode: "1290–1319",
    lignee: "Moncade",
    badge: "Stratège"
  },


  {
    slug: "gaston-febus",
    titre: "Gaston Fébus",
    description: "Prince emblématique, auteur du Livre de la Chasse, il incarne l'apogée culturel du Béarn.",
    image: "/febus.webp",
    periode: "1343-1391",
    lignee: "Foix-Béarn",
    badge: "Mécène"
  },




   {
    slug: "mathieu",
    titre: "Mathieu de Castelbon",
    description: "Son règne, bref, permit de consolider l’indépendance et les institutions du Béarn.",
    image: "/matieu.webp",
    periode: "1391-1398",
    lignee: "Foix-Béarn",
    badge: "Gardien"
  },
   {
    slug: "isabelle",
    titre: "Isabelle de Castelbon",
    description: "Elle préserve la neutralité et la prospérité du Béarn durant une période troublée.",
    image: "/jsp.webp",
    periode: "1398-1412",
    lignee: "Foix-Béarn",
    badge: "Majoresse"
  },
   {
    slug: "jean",
    titre: "Jean de Grailly",
    description: "Il maintient la neutralité du Béarn en étendant son influence diplomatique dans le sud de la France.",
    image: "/jeangrailly.webp",
    periode: "1412-1436",
    lignee: "Foix-Béarn",
    badge: "Tacticien"
  },
   {
    slug: "gaston-xi",
    titre: "Gaston XI",
    description: "Il participe activement à la guerre de Cent Ans et renforce les alliances avec la France et la Navarre.",
    image: "/gastonfb.webp",
    periode: "1436-1472",
    lignee: "Foix-Béarn",
    badge: "Forgeur"
  },
  
    {
    slug: "catherine",
    titre: "Catherine de Foix",
    description: "Elle défend vigoureusement la souveraineté du Béarn affirmant son pouvoir royal propre.",
    image: "/cat.webp",
    periode: "1483-1517",
    lignee: "Navarre",
    badge: "Résiliente"
  },
    {
    slug: "henri",
    titre: "Henri d'Albret",
    description: "Il introduit des réformes administratives et fait un refuge pour les réformés, en restant dans la cour française.",
    image: "/henri-1.webp",
    periode: "1517-1555",
    lignee: "Navarre",
    badge: "Architecte"
  },
  {
    slug: "jeanne",
    titre: "Jeanne d'Albret",
    description: "Dernier vicomte souverain de Béarn avant l'accession d'Henri IV au trône de France.",
    image: "/jeannedal.webp",
    periode: "1555-1572",
    lignee: "Navarre",
    badge: "Réformatrice"
  },
   {
    slug: "bourbon",
    titre: "Catherine de Bourbon",
    description: "Nommé par son frère Henri III de Navarre, elle assure la régence et gouvernance du Béarn.",
    image: "/bourbon.webp",
    periode: "1577-1592",
    lignee: "Navarre",
    badge: "Vertueuse"
  }
];

// 👇 petits outils de parsing pour comparer les périodes
const getYears = (periode: string) => {
  const [start, end] = periode.split('-').map(Number);
  return { start, end };
};

// bornes de siècles pour le filtre
const periodeRanges: Record<string, [number, number]> = {
  "X-XIe siècle": [900, 1099],
  "XIIe siècle": [1100, 1199],
  "XIIIe-XIVe siècle": [1200, 1399],
  "XV-XVIe siècle": [1400, 1599],
};

export default function VicomtesPage() {
  const [search, setSearch] = useState('');
  const [lignee, setLignee] = useState('Toutes les lignées');
  const [periode, setPeriode] = useState('Toutes les périodes');

  // Filtrage intelligent
  const filteredVicomtes = useMemo(() => {
    return vicomtes.filter((v) => {
      const matchesSearch =
        v.titre.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase());

      const matchesLignee =
        lignee === 'Toutes les lignées' || v.lignee === lignee;

      const matchesPeriode =
        periode === 'Toutes les périodes' ||
        (() => {
          const range = periodeRanges[periode];
          if (!range) return true;
          const { start, end } = getYears(v.periode);
          return (
            (start >= range[0] && start <= range[1]) ||
            (end >= range[0] && end <= range[1])
          );
        })();

      return matchesSearch && matchesLignee && matchesPeriode;
    });
  }, [search, lignee, periode]);

  return (   <>  <Header />
    <div className="min-h-screen bg-parchemin">
      {/* En-tête */}
      <section className="bg-pierre py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-6">
              Les Vicomtes de Béarn
            </h1>
            <p className="font-corps text-xl text-brun-terre leading-relaxed">
              Découvrez les grandes personnalités qui ont gouverné le Béarn, de 
              ses origines à son rattachement à couronne la France.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filtres et recherche */}
   <section className="py-8 bg-parchemin-fonce">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <select
          value={lignee}
          onChange={(e) => setLignee(e.target.value)}
          className="font-corps bg-white border border-or-patine rounded px-4 py-2 w-full sm:w-auto"
        >
          <option>Toutes les lignées</option>
          <option>Centulle</option>
          <option>Gabarret</option>
          <option>Moncade</option>
          <option>Foix-Béarn</option>
          <option>Navarre</option>
        </select>
        <select
          value={periode}
          onChange={(e) => setPeriode(e.target.value)}
          className="font-corps bg-white border border-or-patine rounded px-4 py-2 w-full sm:w-auto"
        >
          <option>Toutes les périodes</option>
          <option>X-XIe siècle</option>
          <option>XIIe siècle</option>
          <option>XIIIe-XIVe siècle</option>
          <option>XV-XVIe siècle</option>
        </select>
      </div>

      <div className="relative w-full md:w-auto">
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un vicomte..."
          className="font-corps bg-white border border-or-patine rounded pl-10 pr-4 py-2 w-full sm:w-64"
        />
        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
</section>

      
      {/* Grille des vicomtes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredVicomtes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredVicomtes.map((vicomte, index) => (
                <Card
                  key={index}
                  titre={vicomte.titre}
                  description={vicomte.description}
                  image={vicomte.image}
                  lien={`/vicomtes/${vicomte.slug}`}
                  badge={vicomte.badge}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-brun-terre font-corps text-lg">
              Aucun vicomte ne correspond à votre recherche.
            </div>
          )}
        </div>
      </section>
    </div> <Footer /> 
</>  );
}
