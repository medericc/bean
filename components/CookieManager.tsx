"use client";

import { useEffect, useState } from "react";

type Consent = "accepted" | "refused" | null;

const CONSENT_KEY = "bearn-cookie-consent";
const GTM_ID = "GTM-MQX52KCG";

export default function CookieManager() {
  const [consent, setConsent] = useState<Consent>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY) as Consent;

    if (saved === "accepted" || saved === "refused") {
      setConsent(saved);
      setShowBanner(false);

      if (saved === "accepted") {
        loadGoogleTagManager();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const loadGoogleTagManager = () => {
    if (document.getElementById("google-tag-manager")) {
      return;
    }

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });

    const script = document.createElement("script");

    script.id = "google-tag-manager";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

    document.head.appendChild(script);
  };

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setShowBanner(false);

    loadGoogleTagManager();

    window.dispatchEvent(
      new CustomEvent("cookie-consent", {
        detail: { analytics: true },
      })
    );
  };

  const refuseCookies = () => {
    localStorage.setItem(CONSENT_KEY, "refused");
    setConsent("refused");
    setShowBanner(false);

    window.dispatchEvent(
      new CustomEvent("cookie-consent", {
        detail: { analytics: false },
      })
    );
  };

  const manageCookies = () => {
    setShowBanner(true);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[9999] p-4">
          <div className="mx-auto max-w-4xl rounded-lg border border-brun-terre/20 bg-parchemin p-6 shadow-2xl">
            <div className="mb-5">
              <h2 className="mb-2 font-titre text-2xl text-vert-mousse">
                Votre vie privée
              </h2>

              <p className="font-corps text-base leading-relaxed text-brun-terre">
                Histoire du Béarn utilise des cookies et traceurs afin de
                mesurer la fréquentation du site et d&apos;améliorer son
                fonctionnement. Vous pouvez accepter ou refuser les traceurs
                non nécessaires.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={acceptCookies}
                className="rounded-md bg-vert-mousse px-5 py-3 font-corps font-semibold text-white transition hover:opacity-90"
              >
                Tout accepter
              </button>

              <button
                onClick={refuseCookies}
                className="rounded-md border border-brun-terre/40 bg-transparent px-5 py-3 font-corps font-semibold text-brun-terre transition hover:bg-brun-terre/10"
              >
                Tout refuser
              </button>

              <a
                href="/cookies"
                className="rounded-md border border-brun-terre/20 px-5 py-3 text-center font-corps text-brun-terre transition hover:bg-brun-terre/10"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      )}

      {!showBanner && consent !== null && (
        <button
          onClick={manageCookies}
          className="fixed bottom-4 left-4 z-[9998] rounded-md border border-brun-terre/20 bg-parchemin px-4 py-2 font-corps text-sm text-brun-terre shadow-md transition hover:bg-pierre"
          aria-label="Gérer les cookies"
        >
          Gérer mes cookies
        </button>
      )}
    </>
  );
}