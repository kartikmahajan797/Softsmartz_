import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag, Palette, Layout, Code, Brain, Smartphone, Globe, TrendingUp, Package, Search } from 'lucide-react';

export const services = [
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'AI/ML solutions, intelligent chatbots, and automation systems designed to understand your business and boost customer experience.',
    tag: 'AI / ML',
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for Android & iOS — from concept to deployment, testing, and post-launch maintenance.',
    tag: 'iOS & Android',
  },
  {
    id: 'software-development',
    icon: Code,
    title: 'Software Development',
    description: 'Custom static and dynamic software solutions built with modern frameworks, engineered for performance and scale.',
    tag: 'Full-Stack',
  },
  {
    id: 'shopify',
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify stores with seamless checkout, inventory management, and powerful conversion-optimized e-commerce solutions.',
    tag: 'E-Commerce',
  },
  {
    id: 'ui-ux',
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered designs that create intuitive, engaging, and delightful digital experiences using research-driven modern aesthetics.',
    tag: 'Design',
  },
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Graphic Design',
    description: 'Stunning visual identities, logos, and marketing materials that capture your brand essence and stand out in the crowd.',
    tag: 'Branding',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web App Development',
    description: 'Modern web applications with cutting-edge frameworks, responsive designs, and performant architecture that scales.',
    tag: 'Web',
  },
  {
    id: 'branding-marketing',
    icon: TrendingUp,
    title: 'Branding & Marketing',
    description: 'End-to-end branding and digital marketing: brand strategy, content, social media, and performance-driven campaigns.',
    tag: 'Marketing',
  },
  {
    id: 'seo-services',
    icon: Search,
    title: 'SEO Services',
    description: 'Data-driven SEO — on-page, off-page, technical, and content optimization — to improve rankings and organic traffic.',
    tag: 'SEO',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-secondary/40">
      <div className="container-custom">

        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Services built for
            <br />
            <span className="gradient-text">every stage of growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Full-cycle development services designed to meet your business needs — from idea to launch and beyond.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="relative z-10 flex-1">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  Learn more
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
