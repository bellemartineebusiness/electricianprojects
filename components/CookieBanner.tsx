"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "ep_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-samtycke"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f2234] border-t border-[#2a5080] shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-1">Vi använder cookies</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Denna webbplats använder cookies for att förbättra din upplevelse och analysera trafik
              i enlighet med vår{" "}
              <Link href="/cookie-policy" className="text-amber-400 hover:underline">
                cookiepolicy
              </Link>{" "}
              och{" "}
              <Link href="/privacy-policy" className="text-amber-400 hover:underline">
                integritetspolicy
              </Link>
              . Du kan välja att godkänna alla cookies eller endast nödvändiga.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:shrink-0">
            <button
              onClick={acceptNecessary}
              className="px-5 py-2.5 text-sm font-medium border border-gray-500 text-gray-300 hover:border-gray-300 hover:text-white rounded transition-colors"
            >
              Endast nödvändiga
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] rounded transition-colors"
            >
              Godkänn alla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
