import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'TypeScript', icon: 'TS', category: 'Language' },
  { name: 'JavaScript', icon: 'JS', category: 'Language' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'Java', icon: '☕', category: 'Backend' },
  { name: 'Flutter', icon: '💙', category: 'Mobile' },
  { name: 'React Native', icon: '📱', category: 'Mobile' },
  { name: 'Swift', icon: '🍎', category: 'Mobile' },
  { name: 'Kotlin', icon: '🟣', category: 'Mobile' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Firebase', icon: '🔥', category: 'Cloud' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Kubernetes', icon: '⛵', category: 'DevOps' },
  { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
  { name: 'OpenAI', icon: '🤖', category: 'AI/ML' },
  { name: 'Figma', icon: '🎨', category: 'Design' },
];

const categories = ['Frontend', 'Backend', 'Mobile', 'Cloud', 'Database', 'DevOps', 'AI/ML', 'Design'];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            Tools & Frameworks We Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Our development team uses industry-leading tools and frameworks to ensure quality, speed, and scalability.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-background text-sm font-medium text-muted-foreground border border-border"
            >
              {category}
            </span>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              className="group"
            >
              <div className="bg-background rounded-xl p-4 flex flex-col items-center justify-center aspect-square border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <span className="text-2xl md:text-3xl mb-2">{tech.icon}</span>
                <span className="text-xs font-medium text-foreground text-center">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
