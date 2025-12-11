import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceLogos = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'E-commerce Solutions',
    color: 'from-green-500 to-emerald-600',
    icon: '🛒',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX',
    description: 'User Experience',
    color: 'from-violet-500 to-purple-600',
    icon: '🎨',
  },
  {
    id: 'graphic-design',
    name: 'Graphics',
    description: 'Visual Design',
    color: 'from-pink-500 to-rose-600',
    icon: '✨',
  },
  {
    id: 'software-development',
    name: 'Software',
    description: 'Custom Solutions',
    color: 'from-blue-500 to-indigo-600',
    icon: '💻',
  },
  {
    id: 'ai-ml',
    name: 'AI/ML',
    description: 'Smart Systems',
    color: 'from-orange-500 to-amber-600',
    icon: '🤖',
  },
  {
    id: 'app-development',
    name: 'Mobile',
    description: 'App Development',
    color: 'from-cyan-500 to-teal-600',
    icon: '📱',
  },
];

export const ServiceLogosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Our Core Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {serviceLogos.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block group h-full"
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full border border-slate-100 group-hover:border-slate-200">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all group"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
