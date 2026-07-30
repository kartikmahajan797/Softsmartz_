import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Send,
  Rocket,
  Building2,
  Handshake,
  Boxes,
  Layers,
  Users,
  ShieldCheck,
  Clock,
  LineChart,
  Lightbulb,
  CalendarCheck,
  Compass,
  Wrench,
  Gauge,
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEO } from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/* --------------------------------------------------------------------------
   Content
   -------------------------------------------------------------------------- */

const partnerTypes = [
  {
    icon: Rocket,
    title: 'Founders & Startups',
    description:
      'You need a production-ready MVP, not a prototype. We take you from idea to launched product with a senior team and a fixed delivery plan.',
    points: ['MVP in 8–12 weeks', 'Investor-ready architecture', 'Fractional CTO support'],
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description:
      'Modernise legacy systems, add an AI layer, or extend your engineering capacity without a hiring cycle. We plug into your process, not the other way around.',
    points: ['Legacy modernisation', 'DevOps & platform engineering', 'Security-first delivery'],
  },
  {
    icon: Handshake,
    title: 'Agencies (White-Label)',
    description:
      'Take on work you would otherwise turn down. We build under your brand, in your repos, and stay invisible to your client.',
    points: ['NDA-backed anonymity', 'Your process & tooling', 'Flexible bench capacity'],
  },
  {
    icon: Boxes,
    title: 'SaaS & Product Companies',
    description:
      'A dedicated squad that owns a module, a platform layer, or an entire product line — with roadmap accountability, not just ticket throughput.',
    points: ['Owned product modules', 'Multi-tenant expertise', 'Ongoing SRE & support'],
  },
];

const engagementModels = [
  {
    name: 'Feature-Based Delivery',
    tagline: 'Pay for outcomes, not hours',
    description:
      'Scoped features delivered on a fixed price and fixed date. Best when the requirements are clear and you want budget certainty.',
    features: [
      'Fixed price, fixed timeline',
      'Milestone-based invoicing',
      'Full QA + deployment included',
      'Post-release warranty window',
    ],
    icon: Layers,
    accent: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Dedicated Product Squad',
    tagline: 'Most popular',
    description:
      'A cross-functional team — engineers, QA, DevOps, and a lead — working only on your product, in your sprint cadence and your tools.',
    features: [
      'Senior, hand-picked engineers',
      'Your rituals, standups, and board',
      'Scale the squad up or down monthly',
      'Direct access, no account-manager wall',
    ],
    icon: Users,
    accent: 'from-orange-500 to-amber-500',
    highlighted: true,
  },
  {
    name: 'Strategic Partnership',
    tagline: 'Long-term, shared upside',
    description:
      'A long-horizon relationship covering product strategy, architecture ownership, and continuous delivery — with commercial models that can include equity or revenue share.',
    features: [
      'CTO-level product strategy',
      'Architecture & platform ownership',
      '24/7 monitoring and on-call',
      'Flexible commercial structures',
    ],
    icon: LineChart,
    accent: 'from-violet-500 to-purple-600',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Speed you can plan around',
    description:
      'AI-assisted engineering compresses six-month roadmaps into two or three months — through smarter workflows, not corner-cutting.',
  },
  {
    icon: ShieldCheck,
    title: 'Senior-only review',
    description:
      'Every line that ships is reviewed by a senior engineer. Automated tests, security scanning, and CI gates run on every commit.',
  },
  {
    icon: Gauge,
    title: 'Production-grade by default',
    description:
      'Observability, CI/CD, infrastructure-as-code, and rollback plans are part of the build — not a phase-two invoice.',
  },
  {
    icon: Compass,
    title: 'Domain fluency',
    description:
      'Healthcare, fintech, commerce, logistics, and edtech. We arrive already speaking your industry’s language and constraints.',
  },
  {
    icon: Wrench,
    title: 'You own everything',
    description:
      'Your repositories, your cloud accounts, your IP, your documentation. No lock-in, no proprietary black boxes.',
  },
  {
    icon: Users,
    title: 'One team, one channel',
    description:
      'A shared Slack channel with the people actually building your product. No layers between you and the engineers.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery call',
    description:
      'A free 30-minute session where we pressure-test the idea, surface risks, and tell you honestly whether we are the right fit.',
  },
  {
    step: '02',
    title: 'Solution blueprint',
    description:
      'Within a week you get an architecture sketch, a delivery plan broken into milestones, and a transparent estimate.',
  },
  {
    step: '03',
    title: 'Pilot sprint',
    description:
      'We start with a paid two-week sprint that ships something real, so you can judge us on working software rather than a pitch.',
  },
  {
    step: '04',
    title: 'Scale the partnership',
    description:
      'Once the fit is proven, we scale the squad, formalise SLAs, and move into a continuous delivery cadence.',
  },
];

const sessionPromises = [
  { icon: Lightbulb, label: 'Idea validation' },
  { icon: Compass, label: 'Actionable insights' },
  { icon: ShieldCheck, label: 'Industry best practices' },
  { icon: CalendarCheck, label: 'Estimate & timeline' },
];

const faqs = [
  {
    q: 'How quickly can a team start?',
    a: 'For most stacks we can have a squad onboarded within 5–10 business days. If the requirement is niche — say, a specific ML framework or a regulated domain — allow two to three weeks so we can staff it properly rather than approximately.',
  },
  {
    q: 'Who owns the code and the IP?',
    a: 'You do, entirely and from day one. We work inside your repositories and cloud accounts wherever possible, and every engagement includes a full IP assignment plus handover documentation.',
  },
  {
    q: 'Can you work with our existing in-house team?',
    a: 'Yes — a large share of our work is embedded alongside client engineers. We adopt your board, branching strategy, code standards, and review process instead of imposing ours.',
  },
  {
    q: 'What does the white-label agency partnership look like?',
    a: 'We operate under your brand and your NDA. Your client sees your team, your deliverables, and your invoices. We stay entirely behind the scenes, including in calls if you prefer.',
  },
  {
    q: 'How do you price engagements?',
    a: 'Feature-based work is fixed price against a fixed scope. Dedicated squads are billed monthly per role. Strategic partnerships can be structured as retainers, and in select cases as equity or revenue-share arrangements. Every model is quoted up front with no hidden line items.',
  },
  {
    q: 'What happens if we want to stop?',
    a: 'Dedicated squad contracts run month to month after the initial term, with a 30-day notice period. We hand over documentation, runbooks, and a knowledge-transfer session as standard — never as a paid extra.',
  },
];

/* --------------------------------------------------------------------------
   Page
   -------------------------------------------------------------------------- */

type PartnerForm = {
  name: string;
  email: string;
  company: string;
  partnershipType: string;
  budget: string;
  message: string;
};

const emptyForm: PartnerForm = {
  name: '',
  email: '',
  company: '',
  partnershipType: 'Dedicated Product Squad',
  budget: '',
  message: '',
};

const Partner = () => {
  const [formData, setFormData] = useState<PartnerForm>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof PartnerForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next: Partial<Record<keyof PartnerForm, string>> = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) next.email = 'Enter a valid email';
    if (!formData.company.trim()) next.company = 'Company is required';
    if (!formData.message.trim()) next.message = 'Tell us a little about the project';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);
    try {
      await addDoc(collection(db, 'partnerEnquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus({
        type: 'success',
        message: "Thanks — we've received your enquiry and will reply within one business day.",
      });
      setFormData(emptyForm);
    } catch (err) {
      console.error('Error saving partner enquiry:', err);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please email info@softsmartz.com and we will pick it up.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition';

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Partner With Us — Engagement Models & Technology Partnerships"
        description="Partner with Softsmartz as a startup, enterprise, agency, or SaaS company. Feature-based delivery, dedicated product squads, white-label engineering, and long-term strategic partnerships."
        canonical="https://softsmartz.com/partner"
      />
      <Navbar />

      <main className="pt-20">
        {/* -------------------------------------------------------------
            Hero
            ------------------------------------------------------------- */}
        <section className="relative overflow-hidden py-20 md:py-28 px-6">
          <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
          <div className="aurora bg-primary/35 w-[440px] h-[440px] -top-28 left-0" />
          <div className="aurora bg-violet-500/25 w-[380px] h-[380px] top-16 right-0" />

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Partner With Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.08]"
            >
              Let's build something
              <br />
              <span className="gradient-text">extraordinary together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Whether you're a founder with a first version to ship, an enterprise modernising a
              platform, or an agency that needs engineering depth — we structure the partnership
              around your outcome, not our billable hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <Button variant="primary" size="lg" asChild>
                <a href="#partner-form">
                  Start the conversation <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">See how we work</Link>
              </Button>
            </motion.div>

            {/* Free session promises */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-14"
            >
              <p className="text-sm text-muted-foreground mb-5">
                Every partnership starts with a free 30-minute strategy session:
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {sessionPromises.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card p-4 flex items-center gap-3 text-left"
                  >
                    <item.icon size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* -------------------------------------------------------------
            Who we partner with
            ------------------------------------------------------------- */}
        <section className="section-padding px-6 bg-secondary/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="eyebrow">Who We Work With</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Four ways teams partner with us
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Different problems need different shapes of collaboration. Find the one that matches
                where you are today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="premium-card group p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <type.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{type.description}</p>
                  <ul className="space-y-2.5">
                    {type.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-foreground">
                        <Check size={15} className="text-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------
            Engagement models
            ------------------------------------------------------------- */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="eyebrow">Engagement Models</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Pay for delivery,
                <br className="hidden md:block" /> <span className="gradient-text">not engineering hours</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Pick the commercial structure that fits your risk appetite and roadmap. You can move
                between models as the engagement matures.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 items-start">
              {engagementModels.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-3xl border p-8 transition-all duration-400 hover:-translate-y-1.5 ${
                    model.highlighted
                      ? 'border-primary/60 bg-card shadow-2xl shadow-primary/10 lg:-mt-4 lg:pb-12'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  {model.highlighted && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                      {model.tagline}
                    </span>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.accent} flex items-center justify-center mb-6`}
                  >
                    <model.icon size={22} className="text-white" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-foreground">{model.name}</h3>
                  {!model.highlighted && (
                    <p className="text-sm text-primary font-semibold mt-1.5">{model.tagline}</p>
                  )}

                  <p className="text-muted-foreground leading-relaxed mt-4 mb-7">
                    {model.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={model.highlighted ? 'primary' : 'outline'}
                    size="default"
                    className="w-full"
                    asChild
                  >
                    <a href="#partner-form">
                      Choose this model <ArrowRight size={15} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------
            Why partner with us
            ------------------------------------------------------------- */}
        <section className="section-padding px-6 section-dark relative overflow-hidden">
          <div className="aurora bg-primary/30 w-[420px] h-[420px] -top-32 right-0" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="eyebrow">Why Softsmartz</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                What you actually get
              </h2>
              <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
                Six commitments that hold on every engagement, whichever model you choose.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------
            Process
            ------------------------------------------------------------- */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="eyebrow">How It Starts</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                From first call to shipped software
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative"
                >
                  <div className="glass-card h-full p-7">
                    <span className="text-4xl font-display font-bold text-primary/25 leading-none">
                      {phase.step}
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground mt-4 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------
            Enquiry form
            ------------------------------------------------------------- */}
        <section id="partner-form" className="section-padding px-6 bg-secondary/40 scroll-mt-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">Start Here</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-foreground">
                Tell us what you want to build
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Share a few details and we'll come back within one business day with initial
                thoughts and a proposed structure — no sales script, just engineers who have built
                this before.
              </p>

              <ul className="mt-9 space-y-4">
                {[
                  'A reply from an engineer, not a sales rep',
                  'A free 30-minute technical session',
                  'An architecture sketch and honest estimate',
                  'NDA signed before anything sensitive is shared',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={13} className="text-primary" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 glass-card p-6">
                <p className="text-sm text-muted-foreground">Prefer email?</p>
                <a
                  href="mailto:info@softsmartz.com"
                  className="text-lg font-display font-bold text-foreground hover:text-primary transition-colors"
                >
                  info@softsmartz.com
                </a>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-7 md:p-9 space-y-5 shadow-xl"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="p-name" className="block text-sm font-medium text-foreground mb-2">
                    Your name
                  </label>
                  <input
                    id="p-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jordan Mehta"
                    className={inputClass}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="p-email" className="block text-sm font-medium text-foreground mb-2">
                    Work email
                  </label>
                  <input
                    id="p-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jordan@company.com"
                    className={inputClass}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="p-company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    id="p-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                  {errors.company && (
                    <p className="text-destructive text-sm mt-1.5">{errors.company}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="p-budget" className="block text-sm font-medium text-foreground mb-2">
                    Indicative budget <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <select
                    id="p-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Not sure yet</option>
                    <option value="<$10k">Under $10k</option>
                    <option value="$10k–$25k">$10k – $25k</option>
                    <option value="$25k–$50k">$25k – $50k</option>
                    <option value="$50k–$100k">$50k – $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="p-type"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Partnership type
                </label>
                <select
                  id="p-type"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {engagementModels.map((model) => (
                    <option key={model.name} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                  <option value="White-Label Agency Partnership">
                    White-Label Agency Partnership
                  </option>
                  <option value="Not sure yet">Not sure yet — advise me</option>
                </select>
              </div>

              <div>
                <label htmlFor="p-message" className="block text-sm font-medium text-foreground mb-2">
                  What are you building?
                </label>
                <textarea
                  id="p-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A short description of the product, where you are today, and what success looks like in six months."
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1.5">{errors.message}</p>
                )}
              </div>

              {status && (
                <div
                  role="status"
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25'
                      : 'bg-destructive/10 text-destructive border border-destructive/25'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send partnership enquiry'}
                <Send size={17} />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We reply within one business day. Your details are never shared with anyone.
              </p>
            </motion.form>
          </div>
        </section>

        {/* -------------------------------------------------------------
            FAQ
            ------------------------------------------------------------- */}
        <section className="section-padding px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-foreground">
                Questions partners usually ask
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-5">Still have a question?</p>
              <Button variant="dark" size="lg" asChild>
                <Link to="/contact">
                  Talk to us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partner;
