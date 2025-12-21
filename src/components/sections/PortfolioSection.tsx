import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import dolchi from '../../assets/dolchi.png';
import buyYourWish from '../../assets/buyYourWish.png';
import veda from '../../assets/veda.png';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with advanced filtering and payment integration.',
    image: dolchi,
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Healthcare App',
    category: 'Mobile App',
    description: 'Patient management system with real-time appointment scheduling.',
    image: buyYourWish,
    tags: ['React Native', 'Firebase', 'AI'],
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    description: 'Comprehensive financial analytics dashboard with real-time data.',
    image: veda,
    tags: ['Figma', 'React', 'D3.js'],
  },
  {
    id: 4,
    title: 'AI Chatbot System',
    category: 'AI/ML',
    description: 'Intelligent customer support chatbot with natural language processing.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    id: 5,
    title: 'Retail Management',
    category: 'Shopify',
    description: 'Custom Shopify store with inventory management and analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['Shopify', 'Liquid', 'APIs'],
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, projects.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, projects.length - 2)) % Math.max(1, projects.length - 2));
  };

  const getVisibleProjects = () => {
    return projects.slice(currentIndex, currentIndex + 3);
  };

  return (
    <section ref={ref} className="section-padding section-dark">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium mb-4 uppercase tracking-wider text-sm"
            >
              Our Portfolio
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Featured Projects
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3"
          >
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-primary transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleProjects().map((project, index) => (
            <motion.div
              key={`${project.id}-${currentIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    // className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    className="w-full h-full object-cover"

                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="primary" size="sm">
                      View Project <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-white mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-dark" asChild>
            <Link to="/portfolio">View All Projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
