import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2234] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={36} />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white">ElektroProff</span>
                <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Elektriker</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Certifierad elektriker med över 15 års erfarenhet. Vi utför alla typer av
              elarbeten för privata och kommersiella kunder.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Snabblänkar</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Hem" },
                { href: "/services", label: "Tjänster" },
                { href: "/about", label: "Om oss" },
                { href: "/contact", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Information</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-amber-400 transition-colors">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm hover:text-amber-400 transition-colors">
                  Cookiepolicy
                </Link>
              </li>
            </ul>
            <div className="text-sm space-y-1 text-gray-400">
              <p>Tel: <a href="tel:+46701234567" className="hover:text-amber-400 transition-colors">070-123 45 67</a></p>
              <p>E-post: <a href="mailto:info@elektroproff.se" className="hover:text-amber-400 transition-colors">info@elektroproff.se</a></p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1e3a54] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {currentYear} ElektroProff AB. Alla rättigheter förbehållna.</p>
          <p>Org.nr: 556XXX-XXXX &nbsp;|&nbsp; F-skatt &nbsp;|&nbsp; Behörig installatör</p>
        </div>
      </div>
    </footer>
  );
}
