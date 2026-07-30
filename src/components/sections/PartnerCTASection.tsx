import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Users, LineChart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const models = [
  {
    icon: Layers,
    name: 'Feature-Based Delivery',
    detail: 'Fixed scope, fixed price, fixed date.',
  },
  {
    icon: Users,
    name: 'Dedicated Product Squad',
    detail: 'A senior team working only on your product.',
  },
  {
    icon: LineChart,
    name: 'Strategic Partnership',
    detail: 'Long-term ownership with flexible commercials.',
  },
];

const promises = [
  'Free 30-minute strategy session',
  'Architecture sketch and honest estimate',
  'NDA before anything sensitive is shared',
];

export const PartnerCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_70%)]" />
      <div className="aurora bg-primary/25 w-[420px] h-[420px] -bottom-40 left-10" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="eyebrow"
            >
              Partner With Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            >
              Pay for delivery,
              <br />
              <span className="gradient-text">not engineering hours</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 text-muted-foreground text-lg leading-relaxed"
            >
              Startups, enterprises, agencies, and SaaS companies partner with us in whichever shape
              fits their roadmap — and can move between models as the engagement grows.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 space-y-3.5"
            >
              {promises.map((promise) => (
                <li key={promise} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-primary" />
                  </span>
                  <span className="text-foreground">{promise}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/partner">
                  Explore partnership models <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">See our case studies</Link>
              </Button>
            </motion.div>
          </div>

          <div className="space-y-4">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to="/partner"
                  className="premium-card group flex items-center gap-5 p-6 md:p-7"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <model.icon
                      size={22}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{model.detail}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
