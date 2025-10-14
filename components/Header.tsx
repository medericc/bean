'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🧠 Liste des éléments de menu + slugs personnalisés
  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Histoire', href: '/histoire' },
    { label: 'Lignées', href: '/lignees' }, // <-- ici la correction
    { label: 'Vicomtes', href: '/vicomtes' },
    { label: 'À propos', href: '/a-propos' },
  ];

  return (
    <header className="bg-parchemin-fonce border-b-2 border-or-patine sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
            <a 
            href="/" 
            className="font-titre text-2xl md:text-3xl text-vert-mousse hover:text-or-patine transition-colors"
          >
            Mémoire du Béarn
          </a>
          
          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-corps text-brun-terre hover:text-or-patine transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </nav>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brun-terre p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-or-patine/30">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-corps text-brun-terre hover:text-or-patine transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
