import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Palette, 
  Layout, 
  Code, 
  Brain, 
  Smartphone, 
  Globe,
  ArrowRight 
} from 'lucide-react';

export const services = [
  {
    id: 'shopify',
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify stores with seamless checkout experiences and powerful e-commerce solutions.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Graphic Designing',
    description: 'Stunning visual identities, logos, and marketing materials that capture your brand essence.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'ui-ux',
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered designs that create intuitive, engaging, and delightful digital experiences.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'software-development',
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies for scalability and performance.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI/ML Solutions',
    description: 'Intelligent systems powered by machine learning and AI to automate and optimize processes.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with exceptional user experiences.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web App Development',
    description: 'Modern web applications with cutting-edge frameworks and responsive, performant designs.',
    color: 'from-primary to-accent',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-medium mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Meet Your Business Needs With{' '}
            <span className="gradient-text">Our Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We aim to provide comprehensive digital solutions that help businesses 
            thrive in the modern technological landscape.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block card-elevated p-6 rounded-xl h-full group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={26} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
