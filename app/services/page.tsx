import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjänster – ElektroProff",
  description:
    "Översikt över alla tjänster som ElektroProff erbjuder – elinstallationer, felsökning, belysning, laddboxar och mer.",
};

const servicesList = [
  {
    title: "Elinstallationer",
    description:
      "Vi utför nyinstallationer och ombyggnationer i bostäder, villor och fastigheter. Arbetet sker alltid enligt gällande normer och besiktigas av behörig installatör.",
    details: [
      "Nybyggnation och renovering",
      "Uttag, strömbrytare och ledningsdragning",
      "Elmätarbyten och inkommande kabel",
      "Dokumentation och slutbesiktning",
    ],
  },
  {
    title: "Felsökning och Reparationer",
    description:
      "Elektriska fel kan vara farliga. Vi erbjuder snabb och professionell felsökning för att identifiera och åtgärda problem på ett säkert sätt.",
    details: [
      "Felsökning av kortslutningar",
      "Byte av säkringar och jordfelsbrytare",
      "Reparation av skadade ledningar",
      "Termografering för dolda fel",
    ],
  },
  {
    title: "Belysning och Smarthem",
    description:
      "Moderna belysningslösningar och automatiserade smarthemssystem som gör ditt hem både snyggare och mer energieffektivt.",
    details: [
      "LED-belysning och armaturer",
      "Dimrar och rörelsesensorer",
      "Smarthemssystem (KNX, Z-Wave, Zigbee)",
      "Utomhusbelysning och markbelysning",
    ],
  },
  {
    title: "Laddboxar för Elbil",
    description:
      "Auktoriserad installation av laddboxar för elbilar. Vi installerar lösningar för hemmabruk och arbetsplatser från ledande tillverkare.",
    details: [
      "Hemmaladdning – villor och lägenheter",
      "Gemensamma laddplatser för fastigheter",
      "Lastbalansering för flera fordon",
      "EVSE-certifierat installationsarbete",
    ],
  },
  {
    title: "Proppskåp och Jordfelsbrytare",
    description:
      "Gamla eller underdimensionerade säkringsgrupper utgör en risk. Vi uppgraderar och moderniserar din elcentral enligt nuvarande krav.",
    details: [
      "Byte av gammalt proppskåp",
      "Installation av jordfelsbrytare (RCD)",
      "Utökning av säkringsgrupper",
      "Kabeldragning och märkning",
    ],
  },
  {
    title: "Kommersiella Installationer",
    description:
      "Från kontor till industrilokaler – vi hanterar elarbeten i alla storlekar för företagskunder med fokus på effektivitet och minimalt produktionsstopp.",
    details: [
      "Kontors- och lokalinstallationer",
      "Industriel el och trefas",
      "Nödbelysning och brandlarm",
      "Regelbunden service och underhåll",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2234] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Logo size={40} />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">ElektroProff</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Våra Tjänster</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Vi erbjuder ett komplett utbud av elektrikertjänster för privatkunder och företag.
            Allt arbete utförs av certifierade installatörer.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-bold text-[#1a3a5c] mb-3">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3a5c] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Har du frågor om våra tjänster?</h2>
          <p className="text-gray-300 mb-8">
            Vi svarar gärna på dina frågor och tar fram en skräddarsydd offert för ditt projekt.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-bold px-8 py-3 rounded transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}
