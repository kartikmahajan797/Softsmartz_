import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Check, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEO } from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { caseStudies, type CaseStudy } from '@/data/caseStudies';

const CaseStudyBlock = ({ study, index }: { study: CaseStudy; index: number }) => {
  const Icon = study.icon;
  const flipped = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      id={study.id}
      className="scroll-mt-28 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
    >
      {/* Visual panel */}
      <div className={`lg:col-span-5 ${flipped ? 'lg:order-2' : ''}`}>
        <div className="lg:sticky lg:top-28">
          <div
            className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${study.gradient} p-8 md:p-10 min-h-[320px] flex flex-col justify-between`}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)',
                backgroundSize: '42px 42px',
              }}
            />
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/15 blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-6">
                <Icon size={26} className="text-white" />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
                {study.industry}
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold text-white mt-2">
                {study.client}
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-2 gap-5">
              {study.results.map((result) => (
                <div key={result.label}>
                  <div className="text-2xl font-display font-bold text-white leading-none">
                    {result.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/75 mt-1.5">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {study.image && (
            <div className="mt-5 rounded-2xl overflow-hidden border border-border">
              <img
                src={study.image}
                alt={study.client}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="mt-5 glass-card p-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">Engagement</div>
              <div className="font-semibold text-foreground mt-1">{study.engagement}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Timeline</div>
              <div className="font-semibold text-foreground mt-1">{study.timeline}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div className={`lg:col-span-7 ${flipped ? 'lg:order-1' : ''}`}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
          {study.title}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{study.summary}</p>

        <div className="mt-10 space-y-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                <Target size={16} className="text-rose-500" />
              </span>
              <h3 className="font-display font-bold text-lg text-foreground">The challenge</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-[42px]">{study.challenge}</p>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb size={16} className="text-primary" />
              </span>
              <h3 className="font-display font-bold text-lg text-foreground">What we did</h3>
            </div>
            <ul className="space-y-3 pl-[42px]">
              {study.approach.map((step) => (
                <li key={step} className="flex items-start gap-3 text-muted-foreground">
                  <Check size={17} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp size={16} className="text-emerald-500" />
              </span>
              <h3 className="font-display font-bold text-lg text-foreground">The outcome</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-[42px]">{study.outcome}</p>
          </div>
        </div>

        <div className="mt-9 pt-7 border-t border-border">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3.5">
            Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3.5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="primary" size="default" asChild>
              <Link to="/contact">
                Discuss a similar build <ArrowRight size={15} />
              </Link>
            </Button>
            {study.liveUrl && (
              <Button variant="outline" size="default" asChild>
                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit live site <ExternalLink size={15} />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies — How We Build SaaS, AI & Commerce Products"
        description="In-depth case studies from Softsmartz: the challenge, the architecture, and the measurable outcome behind SaaS platforms, AI agent systems, fintech, healthcare, and e-commerce builds."
        canonical="https://softsmartz.com/case-studies"
      />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28 px-6">
          <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_70%)]" />
          <div className="aurora bg-primary/30 w-[440px] h-[440px] -top-32 right-0" />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Case Studies
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.08]"
            >
              The engineering behind
              <br />
              <span className="gradient-text">the outcomes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              No vague claims — here is the problem we were handed, the architecture we chose, and
              what changed for the business once it shipped.
            </motion.p>
          </div>

          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="relative mt-12 max-w-5xl mx-auto flex flex-wrap justify-center gap-2.5"
          >
            {caseStudies.map((study) => (
              <a
                key={study.id}
                href={`#${study.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                {study.client}
              </a>
            ))}
          </motion.div>
        </section>

        {/* Studies */}
        <section className="pb-20 md:pb-28 px-6">
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
            {caseStudies.map((study, index) => (
              <CaseStudyBlock key={study.id} study={study} index={index} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden section-dark py-20 md:py-28 px-6">
          <div className="aurora bg-primary/40 w-[460px] h-[460px] -bottom-44 left-1/2 -translate-x-1/2" />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Your project could be the next one here
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              Tell us what you're trying to build. We'll come back with an architecture sketch, a
              delivery plan, and an honest estimate — free, in 30 minutes.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">
                  Book a technical session <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white hover:text-dark"
                asChild
              >
                <Link to="/portfolio">Browse all work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
