import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';


const clients = [
  { name: 'TechCorp', initials: 'TC', color: 'text-blue-600',image: '' },
  { name: 'InnovateLabs', initials: 'IL', color: 'text-purple-600' },
  { name: 'Digital First', initials: 'DF', color: 'text-emerald-600' },
  { name: 'CloudBase', initials: 'CB', color: 'text-cyan-600' },
  { name: 'StartupX', initials: 'SX', color: 'text-orange-600' },
  { name: 'FutureTech', initials: 'FT', color: 'text-pink-600' },
  { name: 'DataDrive', initials: 'DD', color: 'text-indigo-600' },
  { name: 'AppWorks', initials: 'AW', color: 'text-amber-600' },
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-white border-y border-slate-100">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-wider font-medium"
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="group"
            >
              <div className="w-28 h-14 md:w-36 md:h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center hover:from-slate-100 hover:to-slate-200 transition-all duration-300 border border-slate-100 group-hover:border-slate-200 group-hover:shadow-md">
                <span className={`font-display font-bold text-xl md:text-2xl ${client.color}`}>
                  {client.initials}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
