import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Clock, HeadphonesIcon, Shield, Zap, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We deliver projects on time without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Security-first approach in all our development processes.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock support to address your concerns anytime.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Solutions designed to grow with your business needs.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assured',
    description: 'Rigorous testing ensures bug-free, reliable products.',
  },
  {
    icon: Clock,
    title: 'Agile Process',
    description: 'Flexible methodology adapting to changing requirements.',
  },
];

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium mb-4"
            >
              Why Choose Us
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
            >
              We Help Achieve{' '}
              <span className="gradient-text">Mutual Goals</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              Our commitment to excellence, innovation, and client satisfaction 
              sets us apart. We don't just build software; we build lasting 
              partnerships that drive success.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-4xl font-display font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention Rate</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-4xl font-display font-bold gradient-text mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
