import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            We Build Digital
            <br />
            <span className="text-primary">Products</span> That Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Software development, UI/UX design, and digital solutions 
            for businesses ready to grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View Work
              </Link>
            </Button>
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
          >
            {[
              { value: '50+', label: 'Projects' },
              { value: '30+', label: 'Clients' },
              { value: '1+', label: 'Years' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Global Clients Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-border/50 relative overflow-hidden"
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
              Trusted by global clients from
            </p>
            
            {/* Fade masks for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none mt-16" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none mt-16" />

            <div className="flex w-full">
              <motion.div 
                className="flex items-center gap-12 md:gap-20 px-6 whitespace-nowrap w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {[
                  ...[
                    { country: 'USA', code: 'us' },
                    { country: 'UK', code: 'gb' },
                    { country: 'Dubai', code: 'ae' },
                    { country: 'India', code: 'in' },
                    { country: 'Australia', code: 'au' },
                    { country: 'France', code: 'fr' },
                    { country: 'South Korea', code: 'kr' },
                    { country: 'Brazil', code: 'br' },
                    { country: 'Canada', code: 'ca' },
                    { country: 'Germany', code: 'de' },
                  ],
                  ...[ /* Duplicate array for seamless infinite looping */
                    { country: 'USA', code: 'us' },
                    { country: 'UK', code: 'gb' },
                    { country: 'Dubai', code: 'ae' },
                    { country: 'India', code: 'in' },
                    { country: 'Australia', code: 'au' },
                    { country: 'France', code: 'fr' },
                    { country: 'South Korea', code: 'kr' },
                    { country: 'Brazil', code: 'br' },
                    { country: 'Canada', code: 'ca' },
                    { country: 'Germany', code: 'de' },
                  ]
                ].map((location, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 flex-shrink-0 group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${location.code}.png`}
                      srcSet={`https://flagcdn.com/w160/${location.code}.png 2x`}
                      alt={`${location.country} flag`}
                      className="w-14 md:w-16 h-auto object-cover rounded-[4px] shadow-sm transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-semibold text-xl md:text-2xl text-muted-foreground group-hover:text-foreground transition-colors">
                      {location.country}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
