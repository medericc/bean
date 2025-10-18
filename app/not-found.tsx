// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-parchemin flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        
        {/* Version Mobile/Tablette */}
        <div className="md:hidden">
          {/* [Le code mobile précédent reste identique] */}
          <div className="flex flex-col items-center">
            
            {/* Illustration */}
            <div className="mb-6 sm:mb-8 relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-pierre rounded-full flex items-center justify-center border-4 border-or-patine shadow-lg">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-brun-terre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="bg-white rounded-xl border-2 border-or-patine shadow-lg p-6 w-full text-center">
              <h1 className="font-titre text-3xl sm:text-4xl text-vert-mousse mb-2">Page Évanouie</h1>
              <p className="font-corps text-lg text-brun-terre mb-4">Parchemin introuvable</p>
              <p className="font-corps text-base text-gray-600 mb-4">La chronique que vous recherchez semble s'être égarée...</p>
            </div>

            {/* Actions */}
            <div className="mt-6 w-full space-y-3">
              <Link href="/" className="block w-full bg-or-patine text-white font-corps font-medium py-3 px-6 rounded-lg hover:bg-brun-terre transition-colors text-center">
                🏰 Retour au Château Principal
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/histoire" className="border-2 border-vert-mousse text-vert-mousse font-corps font-medium py-3 px-4 rounded-lg hover:bg-vert-mousse hover:text-white transition-colors text-center">
                  📜 Chroniques
                </Link>
                <Link href="/lignees" className="border-2 border-brun-terre text-brun-terre font-corps font-medium py-3 px-4 rounded-lg hover:bg-brun-terre hover:text-white transition-colors text-center">
                  👑 Lignées
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Version Desktop/4K - Layout vertical centré */}
        <div className="hidden md:flex flex-col items-center justify-center min-h-[80vh]">
          
          {/* Container principal centré */}
          <div className="flex flex-col items-center w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            
            {/* Illustration centrée */}
            <div className="mb-8 lg:mb-12 xl:mb-16 relative ">
              <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 
                            bg-pierre rounded-full flex items-center justify-center 
                            border-4 border-or-patine shadow-2xl lg:mt-10">
                <svg 
                  className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 text-brun-terre" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20a8 8 0 100-16 8 8 0 000 16z" 
                  />
                </svg>
              </div>
              
              {/* Éléments décoratifs */}
              
            </div>

            {/* Message principal - Bloc unique centré */}
            <div className="bg-white rounded-2xl lg:rounded-3xl border-2 border-or-patine 
                          shadow-2xl p-8 lg:p-10 xl:p-12 w-full text-center relative overflow-hidden">
              
              {/* Texture de fond */}
              <div className="absolute inset-0 bg-[url('/textures/papier-ancien.jpg')] opacity-5"></div>
              
              {/* Bordure décorative */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-vert-mousse via-or-patine to-brun-terre"></div>
              
              {/* Titre principal */}
              <h1 className="font-titre text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                           text-vert-mousse mb-4 lg:mb-6">
                Page Évanouie
              </h1>
              
              {/* Code 404 */}
              <div className="mb-4 lg:mb-6">
                <span className="font-titre text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 
                               text-or-patine block">404</span>
                <p className="font-corps text-xl lg:text-2xl xl:text-3xl text-brun-terre">
                  Parchemin introuvable
                </p>
              </div>

              {/* Message descriptif */}
              <p className="font-corps text-lg lg:text-xl xl:text-2xl text-brun-terre 
                          mb-6 lg:mb-8 leading-relaxed">
                La chronique que vous recherchez semble s'être égarée<br className="hidden lg:block" />
                dans les méandres du temps...
              </p>

              {/* Citation du scribe */}
              <div className="bg-parchemin-fonce rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-or-patine/30">
                <p className="font-corps text-base lg:text-lg xl:text-xl text-gray-700 mb-2 lg:mb-3">
                  Le scribe royal rapporte :
                </p>
                <p className="font-corps text-lg lg:text-xl xl:text-2xl text-gray-600 italic">
                  "Nulle trace de ce parchemin dans le grand registre des vicomtés"
                </p>
              </div>
            </div>

            {/* Actions en COLONNE VERTICALE centrée */}
            <div className="mt-8 lg:mt-12 xl:mt-16 w-full max-w-md lg:max-w-lg xl:max-w-xl space-y-4 lg:space-y-6">
              
              {/* Bouton principal */}
              <Link
                href="/"
                className="block w-full bg-or-patine text-white font-corps font-medium 
                         py-4 lg:py-5 xl:py-6 px-8 rounded-xl lg:rounded-2xl
                         hover:bg-brun-terre transition-colors 
                         shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform 
                         text-center text-xl lg:text-2xl xl:text-3xl"
              >
                🏰 Retour au Château Principal
              </Link>
              
              {/* Boutons secondaires en colonne */}
              <div className="space-y-4 lg:space-y-5">
                <Link
                  href="/histoire"
                  className="block w-full border-2 border-vert-mousse text-vert-mousse font-corps font-medium 
                           py-3 lg:py-4 xl:py-5 px-8 rounded-xl lg:rounded-2xl
                           hover:bg-vert-mousse hover:text-white transition-colors 
                           text-center flex items-center justify-center space-x-4
                           text-lg lg:text-xl xl:text-2xl"
                >
                  <span className="text-2xl lg:text-3xl xl:text-4xl">📜</span>
                  <span>Explorer les Chroniques Historiques</span>
                </Link>
                
                <Link
                  href="/lignees"
                  className="block w-full border-2 border-brun-terre text-brun-terre font-corps font-medium 
                           py-3 lg:py-4 xl:py-5 px-8 rounded-xl lg:rounded-2xl
                           hover:bg-brun-terre hover:text-white transition-colors 
                           text-center flex items-center justify-center space-x-4
                           text-lg lg:text-xl xl:text-2xl"
                >
                  <span className="text-2xl lg:text-3xl xl:text-4xl">👑</span>
                  <span>Découvrir les Lignées Royales</span>
                </Link>
              </div>
            </div>

            {/* Citation en bas */}
            <div className="mt-8 lg:mt-12 xl:mt-16 bg-parchemin-fonce rounded-xl lg:rounded-2xl 
                          border border-or-patine/30 p-6 lg:p-8 text-center max-w-2xl">
              <blockquote className="font-titre text-lg lg:text-xl xl:text-2xl 
                                   text-brun-terre italic leading-relaxed">
                "Mieux vaut suivre le sentier connu que de s'égarer dans la forêt des incertitudes."
              </blockquote>
              <p className="font-corps text-gray-600 mt-3 lg:mt-4 text-base lg:text-lg xl:text-xl">
                - Sagesse Béarnaise, Chronique du XIVᵉ siècle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}