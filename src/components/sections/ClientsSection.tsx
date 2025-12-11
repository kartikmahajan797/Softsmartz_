import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLabs', logo: 'IL' },
  { name: 'Digital First', logo: 'DF' },
  { name: 'CloudBase', logo: 'CB' },
  { name: 'StartupX', logo: 'SX' },
  { name: 'FutureTech', logo: 'FT' },
  { name: 'DataDrive', logo: 'DD' },
  { name: 'AppWorks', logo: 'AW' },
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-background border-y border-border">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider"
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="group"
            >
              <div className="w-24 h-12 md:w-32 md:h-14 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors group-hover:bg-primary/5">
                <span className="font-display font-bold text-xl md:text-2xl">{client.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
