export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-parchemin">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-4">
              Politique de confidentialité
            </h1>
            <p className="font-corps text-lg text-brun-terre">
              Protection des données personnelles et respect de votre vie privée.
            </p>
          </div>

          <div className="bg-pierre rounded-lg p-6 md:p-10 space-y-10">
            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Responsable du traitement
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Le responsable du traitement des données personnelles collectées
                sur ce site est :
              </p>
              <p className="font-corps text-lg text-brun-terre mt-3">
                <strong>L'éditeur du site Histoire du Béarn</strong>
              </p>
              <p className="font-corps text-lg text-brun-terre mt-2">
                Contact : <strong>tairevate@gmail.com</strong>
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Données susceptibles d&apos;être traitées
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Selon votre utilisation du site, certaines données techniques
                peuvent être traitées, notamment des informations relatives à
                la navigation et à l&apos;utilisation du site.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Mesure d&apos;audience
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Le site utilise Google Analytics 4 afin de mesurer son audience
                et de comprendre la manière dont les visiteurs utilisent le
                site.
              </p>
              <p className="font-corps text-lg text-brun-terre leading-relaxed mt-4">
                Google Analytics est intégré au site par l&apos;intermédiaire
                de Google Tag Manager. Les traceurs concernés sont utilisés
                conformément aux choix exprimés par l&apos;utilisateur lorsque
                le consentement est requis.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Vercel Analytics
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Le site utilise également Vercel Analytics pour obtenir des
                informations statistiques sur la fréquentation et les
                performances du site.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Finalités des traitements
              </h2>
              <ul className="font-corps text-lg text-brun-terre leading-relaxed list-disc pl-6 space-y-2">
                <li>assurer le fonctionnement et la sécurité du site ;</li>
                <li>mesurer et comprendre la fréquentation du site ;</li>
                <li>améliorer les contenus et l&apos;expérience de navigation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Vos droits
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Conformément à la réglementation applicable en matière de
                protection des données, vous disposez notamment, selon les
                conditions prévues par la réglementation, de droits d&apos;accès,
                de rectification, d&apos;effacement, de limitation et
                d&apos;opposition au traitement de vos données.
              </p>
              <p className="font-corps text-lg text-brun-terre leading-relaxed mt-4">
                Vous pouvez exercer vos droits en contactant :
              </p>
              <p className="font-corps text-lg text-brun-terre mt-3">
                <strong>tairevate@gmail.com</strong>
              </p>
            </section>

       
            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Mise à jour
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Cette politique peut être mise à jour afin de tenir compte de
                l&apos;évolution du site, de ses services ou de la réglementation
                applicable.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}