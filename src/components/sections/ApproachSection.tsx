import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description:
      'Deep domain immersion. We learn your vertical, your users, your constraints — before writing a single line of code. No generic solutions.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Architect',
    description:
      'System design that scales. We craft architectures that align with your business goals, your team, and your long-term roadmap.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description:
      'Senior engineers, clean code, rigorous reviews. Backend logic, frontend velocity, and mobile excellence — all under one roof.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deliver',
    description:
      'Production-grade systems that are scalable, maintainable, and built to evolve — with post-launch support baked in.',
    color: 'from-orange-600 to-red-500',
  },
];

export const ApproachSection = () => {
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
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Ship faster without scaling
            <br />
            <span className="gradient-text">your team linearly</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Our proven 4-step process means a lean team delivers what traditionally requires twice the headcount.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-border z-0" style={{ width: 'calc(100% - 4rem)', left: '80%' }} />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:-translate-y-1 z-10">
                {/* Step number */}
                <div className="text-5xl font-display font-black text-border/60 mb-4 leading-none group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={22} className="text-white" />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
