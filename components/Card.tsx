// components/Card.tsx
interface CardProps {
  titre: string;
  description: string;
  image: string;
  lien: string;
  badge?: string;
}

export default function Card({ titre, description, image, lien, badge }: CardProps) {
  return (
    <div className="bg-parchemin rounded-lg overflow-hidden shadow-lg border border-or-patine transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={titre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-vert-mousse text-white px-2 py-1 rounded text-xs font-corps">
            {badge}
          </span>
        )}
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <h3 className="font-titre text-xl text-vert-mousse mb-3 group-hover:text-brun-terre transition-colors">
          {titre}
        </h3>
        <p className="text-gray-700 font-corps mb-4 leading-relaxed">
          {description}
        </p>
        <a 
          href={lien} 
          className="inline-flex items-center bg-brun-terre text-white px-4 py-2 rounded hover:bg-or-patine transition-colors font-corps"
        >
          Découvrir
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}