import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SEO } from '@/components/seo/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Softsmartz - Digital Solutions & Software Development"
        description="Transform your vision into powerful reality with our innovative software solutions, stunning designs, and AI-powered applications."
        canonical="https://softsmartz.com/"
      />
      <Navbar />
      <main>
        {/* 1. Hero — strong first impression with headline + stats + marquee */}
        <HeroSection />

        {/* 2. Value Proposition — "Typical vs Softsmartz Way" contrast */}
        <ValuePropositionSection />

        {/* 3. How We Work — 4-step approach */}
        <ApproachSection />

        {/* 4. Why Choose Us — 6 advantage cards on dark background */}
        <WhyUsSection />

        {/* 5. Services — full service catalog */}
        <ServicesSection />

        {/* 6. Industries — domain expertise */}
        <IndustriesSection />

        {/* 7. Technologies — tech stack */}
        <TechnologiesSection />

        {/* 8. Portfolio — selected work */}
        <PortfolioSection />

        {/* 9. Testimonials — social proof */}
        <TestimonialsSection />

        {/* 10. Contact — conversion */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
