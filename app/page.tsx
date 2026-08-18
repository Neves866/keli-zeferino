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

export default function Home() {
  return (
    <>
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