import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web Development', 'Mobile App', 'UI/UX Design', 'AI/ML', 'Shopify'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with advanced filtering and payment integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Healthcare App',
    category: 'Mobile App',
    description: 'Patient management system with real-time appointment scheduling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['React Native', 'Firebase', 'AI'],
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    description: 'Comprehensive financial analytics dashboard with real-time data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'Mobile App',
    description: 'Full-featured food delivery platform with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    tags: ['Flutter', 'Firebase', 'Maps'],
  },
  {
    id: 7,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Multi-tenant SaaS application with advanced analytics.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 8,
    title: 'Brand Identity',
    category: 'UI/UX Design',
    description: 'Complete brand identity design for a tech startup.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    tags: ['Branding', 'Illustrator', 'Motion'],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-card/50">
          <div className="container-custom text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-medium mb-4"
            >
              Our Portfolio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our latest work and see how we've helped businesses 
              achieve their digital goals.
            </motion.p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b border-border">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="card-elevated rounded-2xl overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <Button variant="hero" size="sm">
                          View Project <ExternalLink size={14} />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-foreground mt-2 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
