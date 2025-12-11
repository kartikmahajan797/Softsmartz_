import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroIllustration from '@/assets/hero-illustration.png';

const floatingFeatures = [
  { icon: Zap, label: 'Fast Delivery', color: 'bg-amber-500' },
  { icon: Shield, label: 'Secure', color: 'bg-emerald-500' },
  { icon: Globe, label: 'Global Reach', color: 'bg-blue-500' },
];

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-100/20 to-transparent rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 text-primary text-sm font-semibold">
              <Sparkles size={16} className="text-orange-500" />
              Trusted by 50+ Companies Worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Building Future Ready
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We craft innovative software solutions, stunning designs, and AI-powered 
            applications that transform your business and deliver exceptional results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="xl" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Floating Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {floatingFeatures.map((feature, index) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100"
              >
                <div className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center`}>
                  <feature.icon size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={heroIllustration}
              alt="Software development illustration"
              className="w-full max-w-4xl mx-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '200+', label: 'Projects Delivered', color: 'text-orange-500' },
            { value: '50+', label: 'Happy Clients', color: 'text-blue-500' },
            { value: '10+', label: 'Years Experience', color: 'text-emerald-500' },
            { value: '99%', label: 'Client Satisfaction', color: 'text-purple-500' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl md:text-4xl font-display font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
