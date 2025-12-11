import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-400 font-medium mb-4 uppercase tracking-wider text-sm"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Committed To Innovation & Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-slate-300"
          >
            As Your Trusted Partner
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* AI Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main hexagon */}
              <div className="w-52 h-52 md:w-64 md:h-64 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl rotate-45 flex items-center justify-center shadow-2xl shadow-orange-500/30">
                <span className="-rotate-45 text-4xl md:text-5xl font-display font-bold text-white">AI</span>
              </div>
              
              {/* Orbiting elements */}
              <motion.div 
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-1/2 -left-6 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-1/2 -right-6 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
              
              {/* Connection lines */}
              <div className="absolute top-1/2 -left-16 w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500/50" />
              <div className="absolute top-1/2 -right-16 w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500/50" />
              <div className="absolute -top-16 left-1/2 w-0.5 h-12 bg-gradient-to-t from-orange-500/50 to-transparent" />
              <div className="absolute -bottom-16 left-1/2 w-0.5 h-12 bg-gradient-to-b from-orange-500/50 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Empower Your Business With Our{' '}
              <span className="text-orange-400">AI-Driven</span> Approach
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                At Softsmartz, we offer comprehensive, end-to-end custom web development 
                and software development services. Partner with us to bring your goals to life!
              </p>
              <p>
                We are leveraging advanced technologies to launch your brand and transform 
                business overall. Till now we have served numerous clients and built over 
                200 applications. We are continuously evolving to help startups, mid-scale, 
                and large-scale businesses.
              </p>
            </div>
            
            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">200+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-slate-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">10+</div>
                <div className="text-xs text-slate-400">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
