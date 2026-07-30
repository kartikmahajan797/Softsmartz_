import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Cpu, Rocket } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEO } from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { projects, projectGroups, projectCounts, type ProjectGroup } from '@/data/projects';

const stats = [
  { icon: Layers, value: `${projectCounts.total}+`, label: 'Products shipped' },
  { icon: Cpu, value: `${projectCounts.saas + projectCounts.ai}`, label: 'SaaS & AI platforms' },
  { icon: Rocket, value: '8+', label: 'Industries served' },
  { icon: Sparkles, value: '100%', label: 'Client retention' },
];

const Portfolio = () => {
  const [activeGroup, setActiveGroup] = useState<ProjectGroup | 'all'>('all');

  const visibleProjects = useMemo(
    () => (activeGroup === 'all' ? projects : projects.filter((p) => p.group === activeGroup)),
    [activeGroup]
  );

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Work — SaaS Platforms, AI Agents & Digital Products"
        description="Explore SaaS platforms, AI agents and bots, e-commerce builds, and web products engineered by Softsmartz — with the architecture, stack, and outcomes behind each one."
        canonical="https://softsmartz.com/portfolio"
      />
      <Navbar />

      <main className="pt-20">
        {/* ---------------------------------------------------------------
            Hero
            --------------------------------------------------------------- */}
        <section className="relative overflow-hidden py-20 md:py-28 px-6">
          <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
          <div className="aurora bg-primary/35 w-[420px] h-[420px] -top-24 -left-24" />
          <div className="aurora bg-blue-500/25 w-[380px] h-[380px] top-10 right-0" />

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Selected Work
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.08]"
            >
              SaaS platforms, AI agents,
              <br />
              and products that <span className="gradient-text">ship fast</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              From multi-tenant SaaS and autonomous agent systems to high-converting commerce —
              every build below is engineered for scale, observability, and a real business outcome.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/case-studies">
                  Read the case studies <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/partner">Partner with us</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-6 text-center">
                  <stat.icon size={20} className="text-primary mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Filters + grid
            --------------------------------------------------------------- */}
        <section className="pb-20 md:pb-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="sticky top-[72px] z-30 -mx-6 px-6 py-4 mb-10 bg-background/85 backdrop-blur-xl border-y border-border">
              <div className="flex flex-wrap justify-center gap-2">
                {projectGroups.map((group) => {
                  const isActive = activeGroup === group.id;
                  return (
                    <button
                      key={group.id}
                      onClick={() => setActiveGroup(group.id)}
                      className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-muted-foreground hover:text-foreground border border-border'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="portfolio-filter-pill"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/25"
                        />
                      )}
                      <span className="relative z-10">{group.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mb-10">
              Showing <span className="font-semibold text-foreground">{visibleProjects.length}</span>{' '}
              {visibleProjects.length === 1 ? 'project' : 'projects'}
            </p>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                  <motion.div key={project.id} layout exit={{ opacity: 0, scale: 0.96 }}>
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ---------------------------------------------------------------
            Closing CTA
            --------------------------------------------------------------- */}
        <section className="relative overflow-hidden section-dark py-20 md:py-28 px-6">
          <div className="aurora bg-primary/40 w-[460px] h-[460px] -bottom-40 left-1/2 -translate-x-1/2" />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Let's Build
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              Have a product in mind?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto"
            >
              Bring us the problem — we'll come back with an architecture, a delivery plan, and a
              timeline. Most engagements start with a free 30-minute technical session.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">
                  Start a conversation <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white hover:text-dark"
                asChild
              >
                <Link to="/partner">Explore partnership models</Link>
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
