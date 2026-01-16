import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { services } from '@/components/sections/ServicesSection';
import { SEO } from '@/components/seo/SEO';

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
        <div className="container-custom section-padding text-center pt-32">
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
      <SEO
        title={service.title}
        description={service.description}
        canonical={`https://softsmartz.com/services/${serviceId}`}
      />
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-secondary">
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
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
                  <service.icon className="text-white" size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.description}
                </p>
                <Button variant="dark" size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-background to-secondary p-8 rounded-2xl shadow-2xl border border-primary/10"
              >
                <h3 className="text-xl font-display font-semibold mb-6 text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {details.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-default group"
                    >
                      <CheckCircle className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-foreground group-hover:text-primary transition-colors">{feature}</span>
                    </motion.li>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                How We Deliver Results
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
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-secondary to-background p-6 rounded-xl text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-xl cursor-default relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white font-display font-bold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{step}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies - Enhanced Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            />
          </div>

          <div className="container-custom relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30 backdrop-blur-sm">
                  Our Tech Stack
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                Tools We Use
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              />
            </motion.div>

            {/* Technologies Grid */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {details.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="group relative cursor-default"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  />

                  {/* Main pill */}
                  <div className="relative px-8 py-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-slate-500 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25 backdrop-blur-sm">
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />

                    {/* Inner gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Text */}
                    <span className="relative text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {tech}
                    </span>
                  </div>

                  {/* Floating particles on hover */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                We leverage cutting-edge technologies to build scalable, high-performance solutions tailored to your needs
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;