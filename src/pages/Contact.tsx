import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';
import { motion } from 'framer-motion';
import { SEO } from '@/components/seo/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Let's Start a Conversation"
        description="Ready to transform your business? Get in touch with Softsmartz for your software development, AI, and digital needs."
        canonical="https://softsmartz.com/contact"
      />
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-card/50">
          <div className="container-custom text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium mb-4"
            >
              Get in Touch
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Let's Start a <span className="gradient-text">Conversation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Ready to transform your business? We'd love to hear about your project
              and how we can help you achieve your goals.
            </motion.p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
