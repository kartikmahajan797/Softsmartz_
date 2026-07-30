import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
};

/**
 * Cards render one of two ways:
 *  - client work ships with a screenshot and an outbound link
 *  - SaaS / AI platform work is private, so it gets a generated gradient
 *    cover and a "Private build" badge instead of a link.
 */
export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const Icon = project.icon;
  const gradient = project.gradient ?? 'from-orange-500 via-amber-500 to-rose-500';

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.06 }}
      className="premium-card group flex flex-col h-full"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 text-slate-900 px-5 py-2.5 text-sm font-semibold shadow-xl translate-y-3 group-hover:translate-y-0 transition-transform duration-400 hover:bg-primary hover:text-white"
                >
                  Visit live site
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </>
        ) : (
          <div className={`relative w-full h-full bg-gradient-to-br ${gradient}`}>
            {/* Faint blueprint grid over the gradient */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)',
                backgroundSize: '38px 38px',
              }}
            />
            <div className="absolute -right-10 -bottom-12 w-52 h-52 rounded-full bg-white/15 blur-2xl" />

            <div className="relative h-full flex flex-col justify-between p-7">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {Icon && <Icon size={26} className="text-white" />}
              </div>

              {project.metrics && (
                <div className="flex gap-7">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-display font-bold text-white leading-none">
                        {metric.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-white/75 mt-1.5">
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
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-white">
            <Lock size={11} />
            Private build
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
          {project.category}
        </span>

        <h3 className="font-display font-bold text-xl text-foreground mt-3 mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer action — never an outbound link for private builds */}
        <div className="mt-6 pt-5 border-t border-border">
          {project.confidential ? (
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Request a walkthrough
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              View project
              <ExternalLink size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Talk to the team
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};
