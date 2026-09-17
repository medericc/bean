export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-parchemin">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="font-titre text-4xl md:text-5xl text-vert-mousse mb-4">
              Mentions légales
            </h1>
            <p className="font-corps text-lg text-brun-terre">
              Informations relatives à l&apos;éditeur et à l&apos;hébergement
              du site Histoire du Béarn.
            </p>
          </div>

          <div className="bg-pierre rounded-lg p-6 md:p-10 space-y-10">
            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Éditeur du site
              </h2>
              <div className="font-corps text-lg text-brun-terre leading-relaxed space-y-2">
                <p><strong>Nom :</strong> À REMPLIR</p>
                <p><strong>Statut :</strong> À REMPLIR</p>
                <p><strong>Adresse :</strong> À REMPLIR</p>
                <p><strong>E-mail :</strong> À REMPLIR</p>
              </div>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Hébergement
              </h2>
              <div className="font-corps text-lg text-brun-terre leading-relaxed">
                <p>
                  Le site est hébergé par <strong>Vercel Inc.</strong>
                </p>
                <p>
                  340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </p>
                <p>
                  Site : vercel.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Directeur de la publication
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Le directeur de la publication est : <strong>À REMPLIR</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Propriété intellectuelle
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Sauf mention contraire, les textes, éléments graphiques,
                photographies et autres contenus présents sur ce site sont
                protégés par les dispositions applicables en matière de
                propriété intellectuelle.
              </p>
              <p className="font-corps text-lg text-brun-terre leading-relaxed mt-4">
                Toute reproduction, représentation ou réutilisation d&apos;un
                contenu du site nécessite l&apos;autorisation de son titulaire
                lorsque celle-ci est requise par la loi.
              </p>
            </section>

            <section>
              <h2 className="font-titre text-2xl md:text-3xl text-vert-mousse mb-4">
                Contact
              </h2>
              <p className="font-corps text-lg text-brun-terre leading-relaxed">
                Pour toute question concernant le site, vous pouvez contacter
                l&apos;éditeur à l&apos;adresse suivante :
              </p>
              <p className="font-corps text-lg text-brun-terre mt-3">
                <strong>À REMPLIR</strong>
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}