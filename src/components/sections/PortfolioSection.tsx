import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { featuredProjects, projectCounts, type Project } from '@/data/projects';

/** Dark-surface variant of the portfolio card, tuned for this section's background. */
const FeaturedCard = ({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) => {
  const Icon = project.icon;
  const gradient = project.gradient ?? 'from-orange-500 via-amber-500 to-rose-500';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-400 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`relative w-full h-full bg-gradient-to-br ${gradient}`}>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />
            <div className="relative h-full flex flex-col justify-between p-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                {Icon && <Icon size={22} className="text-white" />}
              </div>
              {project.metrics && (
                <div className="flex gap-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-display font-bold text-white leading-none">
                        {metric.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-white/75 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {project.confidential && (
          <span className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 px-2.5 py-1 text-[10px] font-semibold text-white">
            <Lock size={10} />
            Private build
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <span className="text-[11px] text-primary font-bold uppercase tracking-[0.14em]">
          {project.category}
        </span>
        <h3 className="font-display font-semibold text-lg text-white mt-2.5 mb-2.5">
          {project.title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1 line-clamp-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/70">
              {tag}
            </span>
          ))}
        </div>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-primary transition-colors"
          >
            View project <ExternalLink size={14} />
          </a>
        ) : (
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-primary transition-colors"
          >
            Read the case study <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </motion.article>
  );
};

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding section-dark relative overflow-hidden">
      <div className="aurora bg-primary/25 w-[440px] h-[440px] -top-40 right-0" />

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Our Portfolio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white"
            >
              SaaS platforms, AI agents,
              <br />
              and products in <span className="gradient-text">production</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-5 text-white/60 text-lg"
            >
              {projectCounts.saas} SaaS platforms, {projectCounts.ai} AI systems, and{' '}
              {projectCounts.ecommerce + projectCounts.web} client products shipped — here's a
              selection.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Button variant="primary" size="lg" asChild>
              <Link to="/case-studies">
                Read case studies <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white hover:text-dark"
            asChild
          >
            <Link to="/portfolio">View all {projectCounts.total} projects</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
