import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink, ArrowRight, AlignEndVerticalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dolchi from '../assets/dolchi.png';
import buyYourWish from '../assets/buyYourWish.png';
import veda from '../assets/veda.png';
import brown from '../assets/brown.png';
import gym from '../assets/gym.png';
import heritaze from '../assets/heritaze.png';
import angel from '../assets/angel.png';
import musafir from '../assets/musafir.png';
import ratan from  '../assets/ratan.png'
import urban from '../assets/urban.png'
import camp from '../assets/camp.png'
import fire from '../assets/fire.png'

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
    title: 'buyYourWish',
    category: 'Mobile App',
    description: 'Patient management system with real-time appointment scheduling.',
    image: buyYourWish,
    tags: ['React Native', 'Firebase', 'AI'],
  },
  {
    id: 3,
    title: 'veda',
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
    image: brown,
    tags: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    id: 5,
    title: 'Retail Management',
    category: 'Shopify',
    description: 'Custom Shopify store with inventory management and analytics.',
    image: gym,
    tags: ['Shopify', 'Liquid', 'APIs'],
  },
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'Mobile App',
    description: 'Full-featured food delivery platform with real-time tracking.',
    image: heritaze,
    tags: ['Flutter', 'Firebase', 'Maps'],
  },
  {
    id: 7,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Multi-tenant SaaS application with advanced analytics.',
    image: angel,
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 8,
    title: 'Brand Identity',
    category: 'UI/UX Design',
    description: 'Complete brand identity design for a tech startup.',
    image: musafir,
    tags: ['Branding', 'Illustrator', 'Motion'],
  },
  {
    id: 9,
    title: 'Brand Identity',
    category: 'UI/UX Design',
    description: 'Complete brand identity design for a tech startup.',
    image: ratan,
    tags: ['Branding', 'Illustrator', 'Motion'],
  },
  {
    id: 10,
    title: 'Brand Identity',
    category: 'UI/UX Design',
    description: 'Complete brand identity design for a tech startup.',
    image: urban,
    tags: ['Branding', 'Illustrator', 'Motion'],
  },
  {
    id: 10,
    title: 'Brand Identity',
    category: 'UI/UX Design',
    description: 'Complete brand identity design for a tech startup.',
    image: camp,
    tags: ['Branding', 'Illustrator', 'Motion'],
  },
   {
    id: 10,
    title: 'Brand Identity',
    category: 'UI/UX Design',
    description: 'Complete brand identity design for a tech startup.',
    image: fire,
    tags: ['Branding', 'Illustrator', 'Motion'],
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-orange-50/30 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-orange-500 font-semibold text-sm md:text-base mb-4 uppercase tracking-wider"
            >
              Our Portfolio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            >
              Featured <span className="text-orange-500">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our latest work and see how we've helped businesses 
              achieve their digital goals.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredId === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredId === project.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ 
                            y: hoveredId === project.id ? 0 : 20,
                            opacity: hoveredId === project.id ? 1 : 0 
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Button 
                            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2.5 text-sm font-medium flex items-center gap-2 shadow-lg"
                          >
                            View Project 
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7">
                      <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      <h3 className="font-bold text-xl md:text-2xl text-gray-900 mt-3 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300"
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

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Let's discuss how we can help bring your vision to life with cutting-edge technology and creative solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
                Let's talk <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;