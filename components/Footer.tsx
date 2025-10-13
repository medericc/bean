// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-parchemin-fonce border-t-2 border-or-patine mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-titre text-xl text-vert-mousse mb-4">Mémoire du Béarn</h3>
            <p className="font-corps text-gray-700 text-sm leading-relaxed">
              Découvrez l&apos;histoire fascinante du Béarn, de ses origines antiques 
              à son rattachement à la France.
            </p>
          </div>
          
          {/* Navigation rapide */}
          <div>
            <h4 className="font-titre text-lg text-brun-terre mb-4">Explorer</h4>
            <nav className="flex flex-col space-y-2">
              {['Histoire', 'Lignées', 'Vicomtes', 'À propos'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase().replace('à ', 'a-')}`}
                  className="font-corps text-gray-700 hover:text-or-patine transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-titre text-lg text-brun-terre mb-4">Contact</h4>
            <p className="font-corps text-gray-700 text-sm mb-2">
              Suggestions ou questions ?
            </p>
            <a 
              href="/a-propos" 
              className="inline-flex items-center bg-vert-mousse text-white px-4 py-2 rounded hover:bg-or-patine transition-colors text-sm font-corps"
            >
              Nous contacter
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-or-patine/30 mt-8 pt-6 text-center">
          <p className="font-corps text-gray-600 text-sm">
            © {new Date().getFullYear()} Mémoire du Béarn - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}