import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { services } from '@/components/sections/ServicesSection';

const serviceDetails: Record<string, { features: string[]; process: string[]; technologies: string[] }> = {
  'shopify': {
    features: ['Custom theme development', 'App integration', 'Payment gateway setup', 'Inventory management', 'SEO optimization'],
    process: ['Discovery & Planning', 'Design & Prototyping', 'Development', 'Testing & QA', 'Launch & Support'],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'REST APIs', 'GraphQL'],
  },
  'graphic-design': {
    features: ['Brand identity design', 'Logo creation', 'Marketing materials', 'Social media graphics', 'Print design'],
    process: ['Brand Discovery', 'Concept Development', 'Design Execution', 'Revisions', 'Final Delivery'],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign', 'After Effects'],
  },
  'ui-ux': {
    features: ['User research', 'Wireframing', 'Prototyping', 'Usability testing', 'Design systems'],
    process: ['Research', 'Information Architecture', 'Wireframes', 'Visual Design', 'User Testing'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
  },
  'software-development': {
    features: ['Custom software', 'Enterprise solutions', 'API development', 'Database design', 'Cloud integration'],
    process: ['Requirements Analysis', 'Architecture Design', 'Agile Development', 'Testing', 'Deployment'],
    technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'AWS'],
  },
  'ai-ml': {
    features: ['Machine learning models', 'Natural language processing', 'Computer vision', 'Predictive analytics', 'AI chatbots'],
    process: ['Data Collection', 'Model Training', 'Validation', 'Integration', 'Monitoring'],
    technologies: ['TensorFlow', 'PyTorch', 'Python', 'OpenAI', 'Scikit-learn'],
  },
  'app-development': {
    features: ['iOS development', 'Android development', 'Cross-platform apps', 'App store optimization', 'Push notifications'],
    process: ['Concept', 'UI/UX Design', 'Development', 'Testing', 'Launch'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  'web-development': {
    features: ['Progressive web apps', 'E-commerce platforms', 'CMS development', 'Performance optimization', 'API integration'],
    process: ['Planning', 'Design', 'Frontend Development', 'Backend Development', 'Deployment'],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  const details = serviceId ? serviceDetails[serviceId] : null;

  if (!service || !details) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom section-padding text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={18} />
              Back to Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="text-white" size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.description}
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-elevated p-8 rounded-2xl"
              >
                <h3 className="text-xl font-display font-semibold mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium mb-4 block">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                How We <span className="gradient-text">Deliver Results</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {details.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-6 rounded-xl text-center relative"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-display font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium mb-4 block">Technologies</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Tools We <span className="gradient-text">Use</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {details.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 rounded-full bg-secondary border border-border text-foreground font-medium"
                >
                  {tech}
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

export default ServiceDetail;
