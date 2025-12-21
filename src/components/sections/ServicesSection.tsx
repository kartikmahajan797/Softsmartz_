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
  Globe
  
} from 'lucide-react';

export const services = [
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'With AI solutions and machine learning, our websites and apps are designed to understand your business needs. AI Chatbots help improve customer experiences.',
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'Mobile app development',
    description: 'We build Intelligent mobile apps for Android & iOS platforms, handling everything from scratch to deployment, testing, and post-launch maintenance.',
  },
  {
    id: 'software-development',
    icon: Code,
    title: 'Software development',
    description: 'We are experts at showing our creativity and delivering solutions for static & dynamic websites and software to bring them to the top position.',
  },
  {
    id: 'shopify',
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify stores with seamless checkout experiences, inventory management, and powerful e-commerce solutions for your business.',
  },
  {
    id: 'ui-ux',
    icon: Layout,
    title: 'UI/UX Design',
    description: 'User-centered designs that create intuitive, engaging, and delightful digital experiences with modern aesthetics.',
  },
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Graphic Designing',
    description: 'Stunning visual identities, logos, and marketing materials that capture your brand essence and stand out.',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web App Development',
    description: 'Modern web applications with cutting-edge frameworks, responsive designs, and performant architecture.',
  },
  {
  id: 'branding-marketing',
  icon: ShoppingBag,
  title: 'Branding & Marketing',
  description: 'Professional branding and digital marketing services including brand strategy, logo design, content marketing, social media marketing, and performance-driven campaigns to grow brand awareness and customer engagement.',
},
{
  id: 'packaging-design',
  icon: Palette,
  title: 'Packaging Design',
  description: 'Custom packaging design services focused on product branding, creative packaging, label design, and print-ready solutions that enhance shelf impact, brand recognition, and customer experience.',
},
{
  id: 'seo-services',
  icon: Globe,
  title: 'SEO Services',
  description: 'Result-driven SEO services including on-page SEO, off-page SEO, technical SEO, keyword research, content optimization, and performance tracking to improve website rankings, organic traffic, and online visibility.',
}

];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            Our Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Meet your business needs with our wide range of IT services. We aim to 
            provide full-cycle development services to fulfill your requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="block service-card h-full group"
              >
                <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
