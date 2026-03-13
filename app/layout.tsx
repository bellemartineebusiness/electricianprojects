import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "ElektroProff – Certifierad Elektriker",
  description:
    "ElektroProff erbjuder professionella elektrikertjänster för hem och företag. Certifierad installatör med lång erfarenhet. Kontakta oss för en kostnadsfri offert.",
  keywords: "elektriker, elinstallation, elarbeten, certifierad elektriker, elinstallation Stockholm",
  authors: [{ name: "ElektroProff AB" }],
  robots: "index, follow",
  openGraph: {
    title: "ElektroProff – Certifierad Elektriker",
    description: "Professionella elektrikertjänster för hem och företag.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
