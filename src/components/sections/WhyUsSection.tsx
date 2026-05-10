import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Target, TrendingUp, Users, Award } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: 'Speed Advantage',
    description:
      'Smart workflows compress 6-month timelines into 2–3 months. Not through shortcuts — through smarter engineering and lean execution.',
    accent: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Target,
    title: 'Domain Advantage',
    description:
      `Deep expertise across Healthcare, E-Commerce, Fintech, and Enterprise. We speak your industry's language fluently from day one.`,
    accent: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Productivity Advantage',
    description:
      'Increase engineering output without proportionally increasing team size. Our approach changes the math — you get more, for less.',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Shield,
    title: 'Quality Advantage',
    description:
      'Every system is reviewed, tested, and architected by senior engineers. We never sacrifice long-term quality for short-term velocity.',
    accent: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Users,
    title: 'Engineering Advantage',
    description:
      'We know which tools and frameworks work best for which language, architecture, and development scenario. This expertise compounds.',
    accent: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Award,
    title: 'Competitive Advantage',
    description:
      `Partner with Softsmartz before your competitors catch up. The gap between those who move fast and those who don't is widening every quarter.`,
    accent: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-padding bg-foreground">
      <div className="container-custom">

        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            Why Softsmartz
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white"
          >
            Six reasons we're the
            <br />
            <span className="gradient-text">partner you've been looking for</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-white/60 text-lg max-w-xl mx-auto"
          >
            Every engagement is built on trust, transparency, and a relentless focus on your business outcomes.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className={`w-12 h-12 rounded-xl ${adv.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <adv.icon size={22} className={adv.accent} />
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {adv.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
