import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmotionalBreak from "@/components/EmotionalBreak";
import Philosophy from "@/components/Philosophy";
import Stories from "@/components/Stories";
import AboutKeli from "@/components/AboutKeli";
import Testimonials from "@/components/Testimonials";
import OnlineCare from "@/components/OnlineCare";
import OnlineContact from "@/components/OnlineContact";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

// Dados estruturados (Schema.org) — apenas informações presentes no site.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kelizeferino.com.br/#person",
      name: "Keli Zeferino",
      jobTitle: "Nutricionista especialista em fertilidade",
      url: "https://kelizeferino.com.br",
      telephone: "+5569984928759",
      knowsAbout: [
        "Nutrição e fertilidade",
        "Preparação nutricional para gestação",
        "Saúde reprodutiva feminina",
        "Fertilidade do casal",
        "Suplementação individualizada",
        "Alimentação e estilo de vida",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://kelizeferino.com.br/#service",
      name: "Acompanhamento nutricional para fertilidade",
      serviceType: "Acompanhamento nutricional online para fertilidade",
      description:
        "Acompanhamento nutricional online para mulheres e casais que desejam se preparar para a gestação, com estratégias individualizadas e baseadas em evidências.",
      url: "https://kelizeferino.com.br",
      provider: {
        "@id": "https://kelizeferino.com.br/#person",
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
    },
  ],
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
        <Testimonials />
        <OnlineCare />
        <OnlineContact />
        <FinalCTA />
      </main>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}