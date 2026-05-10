import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

const typicalApproach = [
  'Generic solutions applied to unique problems',
  'Slow iteration cycles with misaligned teams',
  'Technology chosen before understanding the problem',
  'Bloated teams, ballooning costs',
  'Ship fast, fix quality later',
];

const softsmartzWay = [
  'Deep domain immersion before a single line of code',
  'Agile sprints with clear milestones and accountability',
  'Architecture designed around your business goals first',
  'Lean, senior-heavy teams that move faster and smarter',
  'Engineering rigor baked in from day one',
];

export const ValuePropositionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-padding bg-secondary/40">
      <div className="container-custom">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">The Problem</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center mb-4 max-w-3xl mx-auto"
        >
          Most agencies deliver software.
          <br />
          <span className="gradient-text">We engineer solutions.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14"
        >
          Bolting a new tool onto an old workflow isn't transformation — it's decoration.
          We operate at the next level: engineering software that actually fits your business.
        </motion.p>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Typical Approach */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X size={16} className="text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-muted-foreground">Typical Approach</h3>
            </div>
            <ul className="space-y-4">
              {typicalApproach.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                  <X size={14} className="mt-0.5 shrink-0 text-muted-foreground/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Softsmartz Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="relative bg-foreground rounded-2xl p-8 overflow-hidden"
          >
            {/* Orange glow accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">The Softsmartz Way</h3>
              </div>
              <ul className="space-y-4">
                {softsmartzWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                    <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
