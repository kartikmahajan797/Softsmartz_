import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding section-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Committed To Innovation & Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/80"
          >
            As Your Trusted Partner
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* AI Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-display font-bold text-white">AI</span>
              </div>
              {/* Connection lines */}
              <div className="absolute top-1/2 -left-16 w-16 h-0.5 bg-primary/50" />
              <div className="absolute top-1/2 -right-16 w-16 h-0.5 bg-primary/50" />
              <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-primary/50" />
              <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary/50" />
              
              {/* Corner elements */}
              <motion.div 
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-1/2 -left-20 -translate-y-1/2 w-2 h-2 bg-white/50 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Empower Your Business With Our AI-Driven Approach
            </h3>
            <div className="space-y-4 text-white/70">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
