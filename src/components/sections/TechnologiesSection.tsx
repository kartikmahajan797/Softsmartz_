import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'React', color: 'bg-cyan-500', textColor: 'text-cyan-500' },
  { name: 'Next.js', color: 'bg-slate-900', textColor: 'text-slate-900' },
  { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-blue-600' },
  { name: 'JavaScript', color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  { name: 'Node.js', color: 'bg-green-600', textColor: 'text-green-600' },
  { name: 'Python', color: 'bg-blue-500', textColor: 'text-blue-500' },
  { name: 'Java', color: 'bg-red-500', textColor: 'text-red-500' },
  { name: 'Flutter', color: 'bg-sky-500', textColor: 'text-sky-500' },
  { name: 'Swift', color: 'bg-orange-500', textColor: 'text-orange-500' },
  { name: 'Kotlin', color: 'bg-purple-500', textColor: 'text-purple-500' },
  { name: 'AWS', color: 'bg-amber-500', textColor: 'text-amber-600' },
  { name: 'Firebase', color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  { name: 'MongoDB', color: 'bg-green-500', textColor: 'text-green-600' },
  { name: 'PostgreSQL', color: 'bg-blue-700', textColor: 'text-blue-700' },
  { name: 'Docker', color: 'bg-blue-500', textColor: 'text-blue-500' },
  { name: 'TensorFlow', color: 'bg-orange-500', textColor: 'text-orange-500' },
  { name: 'Figma', color: 'bg-pink-500', textColor: 'text-pink-500' },
  { name: 'Vue.js', color: 'bg-emerald-500', textColor: 'text-emerald-500' },
  { name: 'Angular', color: 'bg-red-600', textColor: 'text-red-600' },
  { name: 'GraphQL', color: 'bg-pink-600', textColor: 'text-pink-600' },
];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            Tools & Frameworks We Use
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Industry-leading technologies to ensure quality, speed, and scalability
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.02 * index }}
              className="group"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className={`w-2.5 h-2.5 ${tech.color} rounded-full`} />
                <span className={`text-sm font-medium ${tech.textColor}`}>{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
