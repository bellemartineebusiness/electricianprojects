"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Vänligen fyll i alla obligatoriska fält.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2234] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Logo size={40} />
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">ElektroProff</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Vi svarar på alla förfrågningar inom 24 timmar. Beskriv ditt projekt så tar vi fram en offert.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Kontaktuppgifter</h2>
              <div className="space-y-6">
                {[
                  {
                    label: "Telefon",
                    value: "070-123 45 67",
                    href: "tel:+46701234567",
                    icon: (
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    label: "E-post",
                    value: "info@elektroproff.se",
                    href: "mailto:info@elektroproff.se",
                    icon: (
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Adress",
                    value: "Elgatan 12, 123 45 Stockholm",
                    href: undefined,
                    icon: (
                      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#1a3a5c] font-medium hover:text-amber-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#1a3a5c] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-[#1a3a5c] mb-2 text-sm">Öppettider</h3>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Mandag – Fredag</span>
                    <span className="font-medium text-[#1a3a5c]">07:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lördag</span>
                    <span className="font-medium text-[#1a3a5c]">08:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Söndag</span>
                    <span className="font-medium text-gray-400">Stängt</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-100 pt-2 mt-2">
                    <span className="text-amber-600 font-medium">Jour (akut)</span>
                    <span className="font-medium text-amber-600">Dygnet runt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Skicka ett meddelande</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Meddelandet skickat!</h3>
                  <p className="text-green-700 text-sm">
                    Tack för ditt meddelande. Vi återkommer till dig inom 24 timmar.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Namn <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                        placeholder="Ditt namn"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                        placeholder="070-XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      E-postadress <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                      placeholder="din@epost.se"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Typ av ärende
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
                    >
                      <option value="">Välj tjänst...</option>
                      <option value="installation">Elinstallation</option>
                      <option value="repair">Felsökning / Reparation</option>
                      <option value="lighting">Belysning / Smarthem</option>
                      <option value="ev">Laddbox för elbil</option>
                      <option value="panel">Proppskåp / Säkringar</option>
                      <option value="commercial">Kommersiellt uppdrag</option>
                      <option value="other">Övrigt</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Meddelande <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white resize-none"
                      placeholder="Beskriv ditt projekt eller fråga..."
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Genom att skicka detta formulär godkänner du vår{" "}
                    <a href="/privacy-policy" className="text-amber-600 hover:underline">
                      integritetspolicy
                    </a>
                    . Dina uppgifter används enbart för att besvara din förfrågan.
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-bold py-3 rounded-lg transition-colors text-sm"
                  >
                    Skicka meddelande
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
