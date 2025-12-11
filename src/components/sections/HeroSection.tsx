import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroIllustration from '@/assets/hero-illustration.png';

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            BUILDING FUTURE READY APPS & PLATFORMS WITH{' '}
            <span className="text-primary">AI SOLUTIONS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Enter the world of brands with our tailor-made solutions for your business. 
            We assist our clients by delivering consulting, development and marketing services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="dark" size="xl" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <div className="relative">
            <img
              src={heroIllustration}
              alt="Software development illustration"
              className="w-full max-w-3xl mx-auto"
            />
            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-primary/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/4 -right-8 w-2 h-2 rounded-full bg-muted-foreground/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-8 -left-12 w-4 h-4 rounded-full border-2 border-muted-foreground/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
