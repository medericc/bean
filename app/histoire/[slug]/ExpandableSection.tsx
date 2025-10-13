'use client';

import { useState } from 'react';

interface ExpandableSectionProps {
  titre: string;
  enfants: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableSection({ titre, enfants, defaultOpen = false }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-or-patine rounded-lg mb-6 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 bg-parchemin-fonce hover:bg-parchemin transition-colors text-left"
      >
        <h3 className="font-titre text-xl text-vert-mousse">{titre}</h3>
        <svg
          className={`w-5 h-5 text-brun-terre transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-6 bg-white">
          {enfants}
        </div>
      )}
    </div>
  );
}
