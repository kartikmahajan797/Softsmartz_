import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cloud, Smartphone, Eye, Blocks, Cpu } from 'lucide-react';

const techFeatures = [
  {
    icon: Cpu,
    title: 'Generative AI',
    description: 'We develop apps that use generative AI to produce human-like conversations, text, and visuals. This technology adds creativity, personalization, and natural interaction.',
  },
  {
    icon: Cloud,
    title: 'Cloud',
    description: 'Our cloud solutions assist apps in learning from data and user behavior over time. This improves accuracy, efficiency, and personalization in every digital interaction.',
  },
  {
    icon: Brain,
    title: 'ML',
    description: 'Our machine learning solutions enable smarter recommendations, automated actions, fraud detection, and better decision-making for your business.',
  },
  {
    icon: Smartphone,
    title: 'IoT',
    description: 'We develop IoT-enabled applications that link to smart devices in workplaces, automobiles, and homes through device management and real-time updates.',
  },
  {
    icon: Eye,
    title: 'AR/VR',
    description: 'We design interactive AR/VR applications that offer engaging virtual experiences, simulations, and product demos. These technologies boost user engagement.',
  },
  {
    icon: Blocks,
    title: 'Blockchain',
    description: 'We use blockchain technology to secure and verify data transactions with transparency and trust. From safe payments to smart contracts.',
  },
];

export const TechSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            AI-Powered Digital Products With Advanced Tech Innovations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Building smart apps powered by AI and advanced technology solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group"
            >
              <div className="mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="text-muted-foreground group-hover:text-white transition-colors" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
