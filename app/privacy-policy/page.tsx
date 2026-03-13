import React from "react";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy – ElektroProff",
  description:
    "Läs om hur ElektroProff hanterar dina personuppgifter i enlighet med GDPR.",
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Integritetspolicy</h1>
          <p className="text-gray-300 text-sm">Senast uppdaterad: {updated}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-sm max-w-none">

            <p className="text-gray-600 leading-relaxed mb-8">
              ElektroProff AB (&ldquo;vi&rdquo;, &ldquo;oss&rdquo;, &ldquo;Företaget&rdquo;) värnar om din personliga integritet.
              I denna integritetspolicy förklarar vi hur vi samlar in, använder, delar och skyddar
              dina personuppgifter i enlighet med Europaparlamentets och rådets förordning (EU)
              2016/679 (GDPR) samt tillämplig svensk dataskyddslagstiftning.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">1. Personuppgiftsansvarig</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ElektroProff AB<br />
              Org.nr: 556XXX-XXXX<br />
              Elgatan 12, 123 45 Stockholm<br />
              E-post: <a href="mailto:info@elektroproff.se" className="text-amber-600 hover:underline">info@elektroproff.se</a><br />
              Telefon: <a href="tel:+46701234567" className="text-amber-600 hover:underline">070-123 45 67</a>
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">2. Vilka uppgifter samlar vi in?</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Vi kan samla in följande kategorier av personuppgifter:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
              <li><strong>Kontaktuppgifter:</strong> namn, e-postadress, telefonnummer, postadress</li>
              <li><strong>Kommunikationsdata:</strong> meddelanden du skickar via kontaktformulär</li>
              <li><strong>Tekniska data:</strong> IP-adress, webbläsartyp, operativsystem och besöktid (via loggar)</li>
              <li><strong>Cookie-data:</strong> se vår <a href="/cookie-policy" className="text-amber-600 hover:underline">cookiepolicy</a> för mer information</li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">3. Ändamål och rättslig grund</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm text-gray-600 border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 border border-gray-200 font-semibold text-gray-700">Ändamål</th>
                    <th className="text-left py-2 px-3 border border-gray-200 font-semibold text-gray-700">Rättslig grund</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Besvara förfrågningar och ge offert", "Avtal / berättigat intresse"],
                    ["Utföra och administrera tjänsteuppdrag", "Avtal"],
                    ["Fakturering och bokföring", "Rättslig förpliktelse (bokföringslagen)"],
                    ["Förbättra webbplatsen (anonym statistik)", "Berättigat intresse"],
                    ["Marknadsföring (nyhetsbrev)", "Samtycke"],
                  ].map(([purpose, basis]) => (
                    <tr key={purpose} className="border-b border-gray-100">
                      <td className="py-2 px-3 border border-gray-200">{purpose}</td>
                      <td className="py-2 px-3 border border-gray-200">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">4. Hur länge sparar vi dina uppgifter?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi behåller dina personuppgifter bara så länge som det är nödvändigt för ändamålen
              de samlades in för. Kontaktformulärsdata sparas i 24 månader. Räkenskapsinformation
              sparas i enlighet med bokföringslagen (7 år). Du kan när som helst begära att vi
              raderar dina uppgifter, förutsatt att det inte finns lagliga skäl att behålla dem.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">5. Dina rättigheter</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
              <li><strong>Tillgång:</strong> begära ett utdrag av de uppgifter vi har om dig</li>
              <li><strong>Rättelse:</strong> begära att felaktiga uppgifter korrigeras</li>
              <li><strong>Radering:</strong> begära att dina uppgifter raderas (&ldquo;rätten att bli glömd&rdquo;)</li>
              <li><strong>Begränsning:</strong> begära att behandlingen av dina uppgifter begränsas</li>
              <li><strong>Dataportabilitet:</strong> begära en kopia av dina uppgifter i ett strukturerat format</li>
              <li><strong>Invändning:</strong> invända mot behandling baserad på berättigat intresse</li>
              <li><strong>Återkallelse av samtycke:</strong> när som helst återkalla ett lämnat samtycke</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              För att utöva dina rättigheter, kontakta oss på{" "}
              <a href="mailto:info@elektroproff.se" className="text-amber-600 hover:underline">info@elektroproff.se</a>.
              Vi svarar inom 30 dagar. Du har också rätt att lämna klagomål till
              Integritetsskyddsmyndigheten (IMY) på{" "}
              <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">www.imy.se</a>.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">6. Delning av uppgifter</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi säljer aldrig dina personuppgifter. Vi kan dela uppgifter med följande parter,
              enbart i den utsträckning det är nödvändigt:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-4">
              <li>Underleverantörer som hjälper oss utföra uppdrag (under tystnadsplikt)</li>
              <li>Bokförings- och faktureringssystem</li>
              <li>Myndigheter när vi är rättsligt skyldiga att lämna ut uppgifter</li>
            </ul>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">7. Säkerhet</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda
              dina personuppgifter mot obehörig åtkomst, förlust eller förstörelse. Alla
              dataöverföringar på denna webbplats sker via krypterad anslutning (HTTPS/TLS).
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">8. Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi använder cookies och liknande teknik. Läs mer i vår{" "}
              <a href="/cookie-policy" className="text-amber-600 hover:underline">cookiepolicy</a>.
            </p>

            <h2 className="text-xl font-bold text-[#1a3a5c] mb-3 mt-8">9. Ändringar</h2>
            <p className="text-gray-600 leading-relaxed">
              Vi kan uppdatera denna integritetspolicy vid behov. Senaste versionen finns alltid
              på denna sida. Väsentliga ändringar meddelas via e-post om du är kund hos oss.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
