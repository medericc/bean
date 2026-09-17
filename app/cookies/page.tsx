export default function Cookies() {
  return (
    <main className="min-h-screen bg-parchemin">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-4">
              Cookies et traceurs
            </h1>
            <p className="font-corps text-lg text-brun-terre">
              Informations sur les cookies et les outils de mesure utilisés
              sur Histoire du Béarn.
            </p>
          </div>

          <div className="bg-pierre rounded-lg p-6 md:p-10 space-y-10">
            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Qu&apos;est-ce qu&apos;un cookie ?
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Un cookie est un petit fichier ou identifiant susceptible
                d&apos;être enregistré ou lu sur votre appareil lors de la
                consultation d&apos;un site internet. Les cookies et autres
                traceurs peuvent notamment permettre de conserver certaines
                informations ou de mesurer la fréquentation d&apos;un site.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Google Analytics
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Histoire du Béarn utilise Google Analytics 4 pour mesurer la
                fréquentation du site et analyser son utilisation.
              </p>
              <p className="font-corps text-lg text-brun-terre leading-relaxed mt-4">
                Google Analytics est installé par l&apos;intermédiaire de
                Google Tag Manager.
              </p>
              <p className="font-corps text-lg text-brun-terre leading-relaxed mt-4">
                Lorsque le consentement est requis, les traceurs concernés ne
                doivent être activés qu&apos;après le choix de l&apos;utilisateur.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Vercel Analytics
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Le site utilise Vercel Analytics afin de disposer de données
                statistiques sur sa fréquentation et ses performances.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Votre choix
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Lorsque votre consentement est requis, vous pouvez accepter ou
                refuser les traceurs concernés au moyen du dispositif de
                consentement proposé sur le site.
              </p>
              <p className="font-corps text-lg text-brun-terre leading-relaxed mt-4">
                Vous devez également pouvoir modifier ou retirer votre
                consentement ultérieurement.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Gérer les cookies depuis votre navigateur
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Vous pouvez également configurer votre navigateur afin de
                contrôler ou supprimer certains cookies. La désactivation de
                certains cookies peut toutefois modifier le fonctionnement de
                certains sites.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                En savoir plus
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Pour plus d&apos;informations sur les cookies et les droits des
                internautes, vous pouvez consulter les recommandations de la
                Commission nationale de l&apos;informatique et des libertés
                (CNIL).
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}