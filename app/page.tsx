
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import FAQSection from "../components/FAQSection";
import ExpertiseSection from "../components/ExpertiseSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-sans overflow-hidden relative selection:bg-orange-500 selection:text-white">

      
      <div className="sticky top-0 z-[100] w-full flex flex-col">
        <TopBanner />
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col relative z-0">
        <HeroSection />

        
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(40,40,40,0.4),transparent_70%)] z-[-1]" />
      </div>

      <AboutSection />

      <ServicesSection />

      <WhyChooseUsSection />

      <FAQSection />

      <ExpertiseSection />

      <CTASection />

      <Footer />
    </main>
  );
}
