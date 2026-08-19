import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmotionalBreak from "@/components/EmotionalBreak";
import Philosophy from "@/components/Philosophy";
import Stories from "@/components/Stories";
import AboutKeli from "@/components/AboutKeli";
import FinalCTA from "@/components/FinalCTA";
import LocationContact from "@/components/LocationContact";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

// Dados estruturados (Schema.org) — apenas informações presentes no site.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Keli Zeferino - Nutricionista",
  description:
    "Acompanhamento nutricional individualizado, humano e cuidadoso para mulheres em Cacoal - Rondônia. Escuta, respeito e acolhimento em cada etapa da sua jornada de saúde.",
  url: "https://kelizeferino.com.br",
  telephone: "+5569984928759",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Antonio de Paula Nunes, 1685",
    addressLocality: "Cacoal",
    addressRegion: "RO",
    addressCountry: "BR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <EmotionalBreak />
        <Philosophy />
        <Stories />
        <AboutKeli />
        <FinalCTA />
        <LocationContact />
      </main>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}