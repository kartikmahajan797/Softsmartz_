import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ServiceLogosSection } from '@/components/sections/ServiceLogosSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechSection } from '@/components/sections/TechSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServiceLogosSection />
        <AboutSection />
        <ServicesSection />
        <TechSection />
        <TechnologiesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
