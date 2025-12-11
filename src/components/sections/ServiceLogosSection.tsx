import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceLogos = [
  {
    id: 'shopify',
    name: 'Shopify Development',
    icon: (
      <svg viewBox="0 0 109 124" className="w-12 h-12" fill="currentColor">
        <path d="M74.7 14.8c-.1-.1-1.4-.1-1.4-.1s-11.4-11.4-12.5-12.5c-1.1-1.1-3.2-.8-4-.6 0 0-2.1.6-5.5 1.7-3.3-9.5-9.1-18.2-19.3-18.2-.3 0-.6 0-.9 0C28.3-17.7 25.5-15 23-15c-19.4 0-28.8 24.3-31.7 36.6-7.5 2.3-12.8 4-13.5 4.2-4.2 1.3-4.3 1.4-4.9 5.4-.4 3-11.7 90-11.7 90l87.5 16.4 47.4-11.8S75 15.1 74.7 14.8zM49.1 7.9c-2.6.8-5.5 1.7-8.7 2.7 0-7.1-1-12-2.6-15.6C42.5-3.8 46.8.5 49.1 7.9zm-14.7 4.5c-5.9 1.8-12.3 3.8-18.8 5.8 1.8-7 5.2-14 9.4-18.6 1.6-1.7 3.8-3.6 6.3-4.7 2.5 5.1 3.2 12.4 3.1 17.5zm-9.7-21.6c2.1 0 3.8.4 5.3 1.3-2.4 1.2-4.6 3-6.6 5.2-5.5 5.9-9.7 15-11.4 23.8-5.4 1.7-10.7 3.3-15.5 4.8C0.7.8 9.8-9.2 24.7-9.2z"/>
      </svg>
    ),
    description: 'E-commerce Excellence',
    color: 'bg-[#96bf48]',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    description: 'User-Centered Design',
    color: 'bg-violet-500',
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
    description: 'Visual Identity',
    color: 'bg-pink-500',
  },
  {
    id: 'software-development',
    name: 'Software Dev',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
    description: 'Custom Solutions',
    color: 'bg-blue-500',
  },
  {
    id: 'ai-ml',
    name: 'AI/ML Solutions',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M12 11v6" />
        <path d="M8 17l4 4 4-4" />
        <circle cx="12" cy="6" r="2" />
      </svg>
    ),
    description: 'Intelligent Systems',
    color: 'bg-emerald-500',
  },
  {
    id: 'app-development',
    name: 'App Development',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    description: 'Mobile First',
    color: 'bg-orange-500',
  },
];

export const ServiceLogosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-medium mb-4 uppercase tracking-wider text-sm"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {serviceLogos.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block group"
              >
                <div className="bg-secondary rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
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
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
