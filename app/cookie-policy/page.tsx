import React from "react";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiepolicy – ElektroProff",
  description: "Information om hur ElektroProff använder cookies och hur du hanterar dina inställningar.",
};

export default function CookiePolicyPage() {
  const updated = "2024-01-01";

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2234] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Logo size={40} />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">ElektroProff</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookiepolicy</h1>
          <p className="text-gray-300 text-sm">Senast uppdaterad: {updated}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Denna cookiepolicy förklarar vad cookies är, vilka cookies vi använder på
              elektroproff.se och hur du kan hantera dina inställningar.
              Policyn gäller i kombination med vår{" "}
              <a href="/privacy-policy" className="text-amber-600 hover:underline">integritetspolicy</a>.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3">1. Vad är cookies?</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Cookies är små textfiler som lagras på din enhet (dator, mobil eller surfplatta)
              när du besöker en webbplats. De hjälper webbplatsen att komma ihåg dina preferenser,
              förbättra prestanda och ge dig en personligare upplevelse. Cookies kan inte köra
              program eller leverera virus och innehåller inte känslig personlig information
              som lösenord.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-4">2. Vilka cookies använder vi?</h2>

            <div className="space-y-6 mb-8">
              {[
                {
                  category: "Nödvändiga cookies",
                  required: true,
                  description:
                    "Dessa cookies är absolut nödvändiga för att webbplatsen ska fungera korrekt. De kan inte inaktiveras. De lagrar t.ex. ditt cookiesamtycke.",
                  examples: [
                    { name: "ep_cookie_consent", purpose: "Sparar ditt val för cookie-samtycke", duration: "1 år", type: "Lokal lagring" },
                  ],
                },
                {
                  category: "Analys-cookies",
                  required: false,
                  description:
                    "Dessa cookies hjälper oss förstå hur besökare interagerar med webbplatsen (anonymiserad statistik). De aktiveras bara om du godkänner alla cookies.",
                  examples: [
                    { name: "_ga", purpose: "Registrerar ett unikt ID för att generera statistik", duration: "2 år", type: "Tredjepart (Google Analytics)" },
                    { name: "_gid", purpose: "Registrerar ett unikt ID per session", duration: "24 timmar", type: "Tredjepart (Google Analytics)" },
                  ],
                },
              ].map((cat) => (
                <div key={cat.category} className="border border-gray-100 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
                    <h3 className="font-semibold text-[#1a3a5c] text-sm">{cat.category}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.required ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
                      {cat.required ? "Alltid aktiv" : "Valfri"}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-gray-600 border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left py-2 px-3 border border-gray-200 font-semibold">Namn</th>
                            <th className="text-left py-2 px-3 border border-gray-200 font-semibold">Syfte</th>
                            <th className="text-left py-2 px-3 border border-gray-200 font-semibold">Giltighetstid</th>
                            <th className="text-left py-2 px-3 border border-gray-200 font-semibold">Typ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.examples.map((ex) => (
                            <tr key={ex.name} className="border-b border-gray-100">
                              <td className="py-2 px-3 border border-gray-200 font-mono">{ex.name}</td>
                              <td className="py-2 px-3 border border-gray-200">{ex.purpose}</td>
                              <td className="py-2 px-3 border border-gray-200">{ex.duration}</td>
                              <td className="py-2 px-3 border border-gray-200">{ex.type}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3">3. Hur hanterar du dina cookie-inställningar?</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              Du kan när som helst hantera dina cookie-inställningar på följande sätt:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-6">
              <li>
                <strong>Rensa localStorage:</strong> Öppna webbläsarens utvecklarverktyg och rensa
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs mx-1">ep_cookie_consent</code>
                från localStorage för att återställa cookie-bannern.
              </li>
              <li>
                <strong>Webbläsarinställningar:</strong> De flesta webbläsare låter dig blockera eller
                ta bort cookies via inställningar. Observera att detta kan påverka webbplatsens funktion.
              </li>
              <li>
                <strong>Google Analytics:</strong> Du kan avanmäla dig från Google Analytics via{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3">4. Tredjepartscookies</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              Vi kan använda tjänster från tredje part (t.ex. Google Analytics) som sätter sina
              egna cookies. Dessa tredjeparter har sina egna integritetspolicyer och vi ansvarar
              inte för deras behandling av personuppgifter.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3">5. Ändringar i denna policy</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Vi kan uppdatera denna cookiepolicy vid behov. Den senaste versionen finns alltid
              på denna sida. Kontakta oss på{" "}
              <a href="mailto:info@elektroproff.se" className="text-amber-600 hover:underline">info@elektroproff.se</a>{" "}
              om du har frågor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
