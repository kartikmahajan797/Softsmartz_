import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-background overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Your Trusted Software Engineering Partner</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.08] tracking-tight mb-6"
          >
            Product Engineering
            <br />
            <span className="gradient-text">Powered by Innovation</span>
            <br />
            That Drives Growth
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We combine deep domain expertise with architectural excellence to create
            custom digital platforms that compress timelines and drive measurable business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="btn-gradient rounded-full px-8 h-12 text-base" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base group" asChild>
              <Link to="/portfolio">
                <Play size={16} className="mr-2 group-hover:text-primary transition-colors" />
                See Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-16 pt-10 border-t border-border/40"
          >
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '30+', label: 'Happy Clients' },
                { value: '10+', label: 'Countries Served' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.07 }}
                  className="text-center group"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Global Clients Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14 pt-10 border-t border-border/30 relative overflow-hidden"
          >
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
              Trusted by global clients from
            </p>
            {/* Fade masks */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none mt-14" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none mt-14" />

            <div className="flex w-full overflow-hidden">
              <motion.div
                className="flex items-center gap-12 md:gap-20 px-6 whitespace-nowrap w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
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
                  ]
                ].map((location, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 flex-shrink-0 group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${location.code}.png`}
                      srcSet={`https://flagcdn.com/w160/${location.code}.png 2x`}
                      alt={`${location.country} flag`}
                      className="w-10 md:w-12 h-auto object-cover rounded-[4px] shadow-sm group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-semibold text-lg md:text-xl text-muted-foreground group-hover:text-foreground transition-colors">
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
