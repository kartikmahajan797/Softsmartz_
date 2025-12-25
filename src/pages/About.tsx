import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Users, Award, Briefcase, Globe } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '15+', label: 'Team Members' },
  { icon: Globe, value: '5+', label: 'Countries Served' },
  { icon: Award, value: '1+', label: 'Years Experience' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-card/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-medium mb-4"
              >
                About Softsmartz
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                Building Tomorrow's{' '}
                <span className="gradient-text">Digital Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground"
              >
                We're a passionate team of developers, designers, and innovators 
                dedicated to transforming businesses through technology.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-primary" size={28} />
                  </div>
                  <div className="text-4xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-medium mb-4 block">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  A Journey of <span className="gradient-text">Innovation</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded with a vision to bridge the gap between technology and business needs, 
                    Softsmartz has grown from a small startup to a leading digital solutions provider.
                  </p>
                  <p>
                    We believe in the power of technology to transform businesses. Our team of 
                    experts works tirelessly to deliver solutions that not only meet but exceed 
                    our clients' expectations.
                  </p>
                  <p>
                    Today, we're proud to have served clients across 30+ countries, delivering 
                    over 200 successful projects that have helped businesses scale and succeed.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Our team collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        <WhyChooseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
