import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technologies = [
  { name: 'React', color: 'bg-cyan-500 dark:bg-cyan-400', textColor: 'text-cyan-500 dark:text-cyan-300' },
  { name: 'Next.js', color: 'bg-slate-900 dark:bg-slate-300', textColor: 'text-slate-900 dark:text-slate-300' },
  { name: 'TypeScript', color: 'bg-blue-600 dark:bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400' },
  { name: 'JavaScript', color: 'bg-yellow-500 dark:bg-yellow-400', textColor: 'text-yellow-600 dark:text-yellow-400' },
  { name: 'Node.js', color: 'bg-green-600 dark:bg-green-500', textColor: 'text-green-600 dark:text-green-400' },
  { name: 'Python', color: 'bg-blue-500 dark:bg-blue-400', textColor: 'text-blue-500 dark:text-blue-300' },
  { name: 'Java', color: 'bg-red-500 dark:bg-red-400', textColor: 'text-red-500 dark:text-red-300' },
  { name: 'Flutter', color: 'bg-sky-500 dark:bg-sky-400', textColor: 'text-sky-500 dark:text-sky-300' },
  { name: 'Swift', color: 'bg-orange-500 dark:bg-orange-400', textColor: 'text-orange-500 dark:text-orange-300' },
  { name: 'Kotlin', color: 'bg-purple-500 dark:bg-purple-400', textColor: 'text-purple-500 dark:text-purple-300' },
  { name: 'AWS', color: 'bg-amber-500 dark:bg-amber-400', textColor: 'text-amber-600 dark:text-amber-400' },
  { name: 'Firebase', color: 'bg-yellow-500 dark:bg-yellow-400', textColor: 'text-yellow-600 dark:text-yellow-400' },
  { name: 'MongoDB', color: 'bg-green-500 dark:bg-emerald-400', textColor: 'text-green-600 dark:text-emerald-400' },
  { name: 'PostgreSQL', color: 'bg-blue-700 dark:bg-blue-600', textColor: 'text-blue-700 dark:text-blue-500' },
  { name: 'Docker', color: 'bg-blue-500 dark:bg-blue-400', textColor: 'text-blue-500 dark:text-blue-300' },
  { name: 'TensorFlow', color: 'bg-orange-500 dark:bg-orange-400', textColor: 'text-orange-500 dark:text-orange-300' },
  { name: 'Figma', color: 'bg-pink-500 dark:bg-pink-400', textColor: 'text-pink-500 dark:text-pink-300' },
  { name: 'Vue.js', color: 'bg-emerald-500 dark:bg-emerald-400', textColor: 'text-emerald-500 dark:text-emerald-300' },
  { name: 'Angular', color: 'bg-red-600 dark:bg-red-500', textColor: 'text-red-600 dark:text-red-400' },
  { name: 'GraphQL', color: 'bg-pink-600 dark:bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400' },
  { name: 'Wordpress', color: 'bg-pink-600 dark:bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400' },
  { name: 'Shopify', color: 'bg-blue-500 dark:bg-blue-400', textColor: 'text-blue-500 dark:text-blue-300' },
  { name: 'Wix', color: 'bg-emerald-500 dark:bg-emerald-400', textColor: 'text-emerald-500 dark:text-emerald-300' },



];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
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
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
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
