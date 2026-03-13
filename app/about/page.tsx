import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss – ElektroProff",
  description:
    "Läs om ElektroProff – vår historia, våra certifieringar och teamet bakom företaget.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2234] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Logo size={40} />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">ElektroProff</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Om oss</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Vi är ett familjeägt elföretag grundat 2009 med fokus på hög kvalitet, säkerhet och personlig service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size={28} />
                <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Vår historia</p>
              </div>
              <h2 className="text-3xl font-bold text-[#1a3a5c] mb-6">
                Mer än 15 års erfarenhet inom elbranschen
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  ElektroProff grundades 2009 av Simon Eriksson, en certifierad elektriker med passion för
                  säkra och effektiva elinstallationer. Det som började som ett enmansföretag har växt
                  till ett team på 8 medarbetare.
                </p>
                <p>
                  Vi arbetar med allt från enkla reparationer i villor till komplexa installationer
                  i industrilokaler. Gemensamt för alla uppdrag är att vi alltid sätter säkerheten
                  och kundens nöjdhet i centrum.
                </p>
                <p>
                  Vårt team är fullt certifierat och vi innehar alla nödvändiga behörigheter för
                  att utföra elarbeten i enlighet med Elsäkerhetsverkets krav. Alla uppdrag
                  dokumenteras och avslutas med en besiktning.
                </p>
              </div>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-8 border border-blue-100">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: "2009", label: "Grundat" },
                  { value: "8", label: "Medarbetare" },
                  { value: "500+", label: "Projekt" },
                  { value: "4.9/5", label: "Kundbetyg" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white rounded-lg border border-blue-50 shadow-sm">
                    <p className="text-2xl font-bold text-amber-500">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Logo size={44} />
                <div>
                  <p className="font-bold text-[#1a3a5c]">Simon Eriksson</p>
                  <p className="text-sm text-gray-500">Grundare och Behörig Installatör</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Logo size={28} />
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Vår filosofi</p>
            </div>
            <h2 className="text-3xl font-bold text-[#1a3a5c]">Våra värderingar</h2>
            <div className="mt-3 w-16 h-1 bg-amber-500 mx-auto rounded" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Säkerhet först",
                body: "Alla installationer utförs enligt gällande normer. Säkerhet är inte förhandlingsbart – varken för våra kunder eller medarbetare.",
                icon: (
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Transparens",
                body: "Vi ger tydliga offerter utan dolda avgifter. Du vet alltid vad du betalar för, och vi kommunicerar proaktivt under projektets gång.",
                icon: (
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                title: "Kvalitet",
                body: "Vi använder enbart godkänt material och certifierade metoder. Alla jobb dokumenteras och vi lämnar 10 års garanti på utfört arbete.",
                icon: (
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#1a3a5c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Behörigheter och certifieringar</h2>
            <p className="text-gray-300 text-sm">Vi innehar alla nödvändiga tillstånd för att utföra elarbeten i Sverige.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Behörig Installatör (Elsäkerhetsverket)",
              "F-skattsedel",
              "ISO 9001 Kvalitetscertifiering",
              "Ansvarsförsäkring 5 MSEK",
              "ROT-avdrag godkänd",
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-2 bg-[#1e4a7a] px-5 py-3 rounded-full text-sm">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] mb-4">Vill du arbeta med oss?</h2>
          <p className="text-gray-600 mb-8">
            Kontakta oss för att diskutera ditt projekt. Vi återkommer med en offert inom 24 timmar.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-bold px-8 py-3 rounded transition-colors"
          >
            Kom i kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
