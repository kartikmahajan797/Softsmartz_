import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import buy from '../../assets/buy.png';
import rt from '../../assets/rt.png';
import brow from '../../assets/brow.png';
import vl from '../../assets/vl.png';
import gy from '../../assets/gy.png';
import trlogo from '../../assets/trlogo.png';
import camplogo from '../../assets/camplogo.png';
import dolchilogo from '../../assets/dolchilogo.png';
import herlogo from '../../assets/herlogo.png';
import urblogo from '../../assets/urblogo.png';
import angLogo from '../../assets/angLogo.png';
import dam from '../../assets/dam.png';
// import knot from '../../assets/knot.png';

const clients = [
  { name: 'TechCorp', initials: 'TC', image: rt, color: 'text-blue-600' },
  { name: 'InnovateLabs', initials: 'IL', image: brow, color: 'text-green-600' },
  { name: 'Digital First', initials: 'DF', image: vl, color: 'text-purple-600' },
  { name: 'CloudBase', initials: 'CB', image: buy, color: 'text-red-600' },
  { name: 'StartupX', initials: 'SX', image: gy, color: 'text-orange-600' },
  { name: 'StartupX', initials: 'SX', image: trlogo, color: 'text-pink-600' },
  { name: 'StartupX', initials: 'SX', image: camplogo, color: 'text-indigo-600' },
  { name: 'StartupX', initials: 'SX', image: dolchilogo, color: 'text-cyan-600' },
  { name: 'StartupX', initials: 'SX', image: herlogo, color: 'text-teal-600' },
  { name: 'StartupX', initials: 'SX', image: urblogo, color: 'text-yellow-600' },
  { name: 'StartupX', initials: 'SX', image: angLogo, color: 'text-lime-600' },
  { name: 'StartupX', initials: 'SX', image: dam, color: 'text-rose-600' },
  // { name: 'StartupX', initials: 'SX', image: knot, color: 'text-violet-600' },
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
              <div className="w-28 h-14 md:w-36 md:h-16  from-slate-50 to-slate-100 rounded-xl flex items-center justify-center hover:from-slate-100 hover:to-slate-200 transition-all duration-300 border border-slate-100 group-hover:border-slate-200 group-hover:shadow-md">
                {client.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.image} alt={client.name} className="max-w-[80%] max-h-[70%] object-contain" />
                ) : (
                  <span className={`font-display font-bold text-xl md:text-2xl ${client.color}`}>
                    {client.initials}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
