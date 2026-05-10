import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, ShoppingCart, TrendingUp, Plane, Truck, Building, Cpu, Home, Film } from 'lucide-react';

const industries = [
  { icon: Heart, label: 'Healthcare', description: 'Compliant, secure digital health platforms and patient management systems.' },
  { icon: ShoppingCart, label: 'E-Commerce', description: 'High-converting storefronts, inventory systems and seamless checkout experiences.' },
  { icon: TrendingUp, label: 'Fintech', description: 'Secure payment solutions, digital banking and financial analytics platforms.' },
  { icon: Plane, label: 'Travel & Tourism', description: 'Booking engines, itinerary tools and real-time travel management platforms.' },
  { icon: Truck, label: 'Logistics', description: 'Fleet management, route optimization and supply chain tracking solutions.' },
  { icon: Building, label: 'Real Estate', description: 'Property listing platforms, CRM tools and smart lease management systems.' },
  { icon: Cpu, label: 'Software & IT', description: 'SaaS products, internal tooling and custom enterprise-grade applications.' },
  { icon: Home, label: 'Retail', description: 'Omnichannel retail platforms, POS systems and loyalty program solutions.' },
  { icon: Film, label: 'Media & Entertainment', description: 'Content platforms, streaming apps and audience engagement tools.' },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">

        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Deep domain expertise
            <br />
            <span className="gradient-text">across every vertical</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            We've built production-grade software across diverse industries, so we understand the regulatory, technical, and UX nuances that matter most.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
              className="group flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <industry.icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {industry.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
