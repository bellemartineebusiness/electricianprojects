import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const services = [
  {
    title: "Elinstallationer",
    description:
      "Nyinstallationer och ombyggnationer av el i hem och fastigheter. Vi installerar säkert och enligt gällande normer.",
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Felsökning och Reparationer",
    description:
      "Snabb och effektiv felsökning av elektriska problem. Vi löser allt från säkringar till komplexa installationsfel.",
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Belysning och Smarthem",
    description:
      "Montering av belysningslösningar och smarthemssystem. Vi installerar LED-belysning, dimrar och automatiserade system.",
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Laddboxar för Elbil",
    description:
      "Installation av laddboxar för elbilar hemma eller på arbetsplatsen. Vi erbjuder EVSE-installationer från ledande märken.",
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11h4l-4 8V13H8l4-8v6z" />
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
      </svg>
    ),
  },
  {
    title: "Säkrings- och Jordfelsbrytare",
    description:
      "Uppgradering av proppskåp och installation av jordfelsbrytare. Säkerhet i första hand för dig och din familj.",
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Kommersiella Installationer",
    description:
      "Vi utför elarbeten för företag, kontor och industrilokaler. Certifierade och erfarna för projekt i alla storlekar.",
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "15+", label: "Års erfarenhet" },
  { value: "500+", label: "Genomförda projekt" },
  { value: "100%", label: "Certifierat arbete" },
  { value: "24/7", label: "Jour tillgänglig" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a3a5c] via-[#1e4470] to-[#0f2234] text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <Logo size={56} />
                <div>
                  <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
                    Certifierad Elektriker
                  </p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professionella
                <br />
                <span className="text-amber-400">Elektrikertjänster</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                Vi erbjuder säkra, effektiva och certifierade elinstallationer för hem och
                företag. Mer än 15 års erfarenhet i branschen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-bold px-8 py-3 rounded text-base transition-colors"
                >
                  Begär kostnadsfri offert
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-400 hover:border-amber-400 hover:text-amber-400 text-gray-200 font-medium px-8 py-3 rounded text-base transition-colors"
                >
                  Se alla tjänster
                </Link>
              </div>
            </div>
            {/* Hero graphic */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="140" cy="140" r="130" fill="#ffffff08" stroke="#f59e0b" strokeWidth="1" strokeDasharray="8 4" />
                <circle cx="140" cy="140" r="90" fill="#ffffff06" />
                <path d="M140 50L60 100v90c0 44 36 75 80 80 44-5 80-36 80-80V100L140 50z" fill="#1e4a7a" stroke="#2a6496" strokeWidth="1.5" />
                <path d="M155 80l-40 60h35l-10 60 45-70h-35l5-50z" fill="#f59e0b" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1a3a5c] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-amber-400">{s.value}</p>
                <p className="text-sm text-gray-300 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Logo size={28} />
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Vad vi erbjuder</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c]">Våra Tjänster</h2>
            <div className="mt-3 w-16 h-1 bg-amber-500 mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all group"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#1a3a5c] hover:bg-[#1e4470] text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              Alla tjänster
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Logo size={28} />
                <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Varför välja oss</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-6">
                Säkerhet och kvalitet i varje uppdrag
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vi är ett certifierat elföretag med behörig installatör. Allt arbete utförs
                enligt gällande Elsäkerhetsverkets föreskrifter och branschstandarder.
                Våra kunder kan alltid lita på att arbetet är korrekt utfört och dokumenterat.
              </p>
              <ul className="space-y-3">
                {[
                  "Behörig installatör med giltig legitimation",
                  "Alla jobb dokumenteras och besiktigas",
                  "10 års garanti på utfört arbete",
                  "F-skattsedel och försäkrad verksamhet",
                  "Snabb återkoppling och tydliga offerter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0f7ff] rounded-xl p-8 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <Logo size={48} />
                <div>
                  <p className="text-2xl font-bold text-[#1a3a5c]">ElektroProff</p>
                  <p className="text-amber-600 text-sm font-medium">Behörig Installatör</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Certifiering", value: "Elsäkerhetsverket" },
                  { label: "Ansvarsförsäkring", value: "5 MSEK täckning" },
                  { label: "Garantitid", value: "10 år" },
                  { label: "Jourservice", value: "Dygnet runt, 365 dagar" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-blue-100 pb-3 last:border-0">
                    <span className="text-gray-500 text-sm">{item.label}</span>
                    <span className="font-semibold text-[#1a3a5c] text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1a3a5c] to-[#1e4470] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Logo size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Redo att komma igång?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för en kostnadsfri offert. Vi svarar vanligtvis inom ett par timmar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-bold px-8 py-3 rounded text-base transition-colors"
            >
              Kontakta oss
            </Link>
            <a
              href="tel:+46701234567"
              className="border border-gray-400 hover:border-amber-400 hover:text-amber-400 text-gray-200 font-medium px-8 py-3 rounded text-base transition-colors"
            >
              070-123 45 67
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
