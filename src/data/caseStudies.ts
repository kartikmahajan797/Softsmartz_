import type { LucideIcon } from 'lucide-react';
import { Bot, Gauge, Wallet, ShoppingCart, Stethoscope, Workflow } from 'lucide-react';

import dolchi from '../assets/dolchi.png';
import camp from '../assets/camp.png';

export type CaseStudyResult = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  engagement: string;
  timeline: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  results: CaseStudyResult[];
  stack: string[];
  icon: LucideIcon;
  gradient: string;
  image?: string;
  liveUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'realtime-analytics-saas',
    title: 'Turning raw product events into sub-second answers',
    client: 'PulseGrid',
    industry: 'SaaS · Data & Analytics',
    engagement: 'Dedicated product team',
    timeline: '14 weeks to first release',
    summary:
      'A B2B analytics product was buckling under its own growth — dashboards timed out, and every new customer made the problem worse. We re-architected the data path end to end.',
    challenge:
      'The original stack ran analytical queries directly against an OLTP database. As event volume crossed a million a day, dashboard loads regularly exceeded 30 seconds and onboarding a new tenant risked degrading service for everyone else.',
    approach: [
      'Split ingestion from serving with a Kafka event backbone and idempotent consumers',
      'Moved analytical storage to ClickHouse with per-tenant partitioning and incremental materialised views',
      'Added a natural-language query layer so non-technical users could ask questions in plain English',
      'Instrumented everything with OpenTelemetry, Prometheus, and Grafana SLO dashboards',
      'Shipped on Kubernetes with autoscaling, blue-green deploys, and automated rollback',
    ],
    outcome:
      'Dashboards now render in under a second at ten times the previous volume, and the team can onboard a new enterprise tenant without touching infrastructure.',
    results: [
      { value: '<800ms', label: 'Dashboard p95' },
      { value: '10x', label: 'Event throughput' },
      { value: '99.9%', label: 'Uptime SLO' },
      { value: '−45%', label: 'Infra cost / tenant' },
    ],
    stack: ['React', 'Go', 'ClickHouse', 'Kafka', 'Kubernetes', 'Terraform', 'Grafana'],
    icon: Gauge,
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
  },
  {
    id: 'multi-agent-operations',
    title: 'A multi-agent system that runs back-office operations',
    client: 'Atlas',
    industry: 'AI · Agentic Systems',
    engagement: 'Fixed-scope build',
    timeline: '10 weeks',
    summary:
      'Six specialised AI agents — research, planning, execution, QA, reporting, and a supervisor — replaced a queue of repetitive operational tasks that used to eat an entire team’s week.',
    challenge:
      'Operations staff spent most of their day on repeatable research-and-update work across five internal tools. Off-the-shelf automation could not handle the judgement calls, and a single monolithic prompt was too unreliable to trust in production.',
    approach: [
      'Decomposed the workflow into narrow, single-responsibility agents with explicit tool permissions',
      'Built a supervisor agent that routes tasks, tracks state, and enforces budget and rate limits',
      'Grounded every agent in company data through a retrieval layer with source citations',
      'Added a confidence threshold that escalates to a human reviewer instead of guessing',
      'Full evaluation harness — golden test cases run on every prompt or model change',
    ],
    outcome:
      'Roughly seven in ten routine operational tasks now complete without human touch, with a reviewable audit trail on every action the system takes.',
    results: [
      { value: '70%', label: 'Tasks automated' },
      { value: '6', label: 'Specialist agents' },
      { value: '4x', label: 'Throughput per head' },
      { value: '100%', label: 'Actions audited' },
    ],
    stack: ['Claude API', 'LangGraph', 'Python', 'pgvector', 'FastAPI', 'Redis'],
    icon: Bot,
    gradient: 'from-violet-500 via-indigo-600 to-blue-600',
  },
  {
    id: 'ai-marketing-platform',
    title: 'An AI virtual employee for influencer marketing',
    client: 'Campnai',
    industry: 'AI · Marketing Technology',
    engagement: 'Product partnership',
    timeline: 'Ongoing',
    summary:
      'Campnai gives marketing teams an AI collaborator that handles the manual half of influencer campaigns — discovery, outreach drafting, and campaign coordination — while keeping humans in control.',
    challenge:
      'Influencer marketing teams lose most of their time to coordination: finding creators, drafting personalised outreach, chasing responses, and reconciling deliverables across spreadsheets and inboxes.',
    approach: [
      'Modelled the campaign lifecycle as structured workflows an LLM could reason over',
      'Built generative drafting with brand-tone controls and a human approval step before anything sends',
      'Created a unified campaign workspace replacing scattered spreadsheets and threads',
      'Designed clear control surfaces so marketers can inspect and override every AI decision',
    ],
    outcome:
      'Campaign teams run more collaborations in parallel with the same headcount, and every AI-generated action stays visible and reversible.',
    results: [
      { value: '60%', label: 'Less manual admin' },
      { value: '3x', label: 'Campaigns in parallel' },
      { value: 'Human', label: 'In the loop' },
      { value: 'LLM', label: 'Native workflows' },
    ],
    stack: ['React', 'Node.js', 'Generative AI', 'LLM Orchestration', 'Vercel'],
    icon: Bot,
    gradient: 'from-purple-500 via-violet-600 to-fuchsia-600',
    image: camp,
    liveUrl: 'https://campnai.vercel.app/',
  },
  {
    id: 'fashion-commerce-platform',
    title: 'A fashion commerce platform built to convert',
    client: 'Dolchico',
    industry: 'E-Commerce · Fashion',
    engagement: 'Full-stack build',
    timeline: '12 weeks',
    summary:
      'A complete MERN commerce platform — catalog, faceted search, authentication, cart, and payments — designed around a fast, frictionless path from browse to checkout.',
    challenge:
      'The brand needed a storefront it fully owned rather than a rented template: custom merchandising rules, its own checkout logic, and room to grow a catalog without slowing the browse experience down.',
    approach: [
      'Built a catalog service with indexed faceted filtering across size, colour, price, and collection',
      'Implemented secure JWT authentication with session-persistent carts across devices',
      'Integrated Stripe for payments with resilient webhook handling and order reconciliation',
      'Optimised images, routes, and bundles for fast first loads on mobile networks',
    ],
    outcome:
      'The team now owns its entire commerce stack, ships merchandising changes in hours instead of sprints, and serves a growing catalog without performance regressions.',
    results: [
      { value: 'Owned', label: 'End-to-end stack' },
      { value: 'Fast', label: 'Mobile-first loads' },
      { value: 'Secure', label: 'Payments & auth' },
      { value: '100%', label: 'Custom checkout' },
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe', 'AWS'],
    icon: ShoppingCart,
    gradient: 'from-orange-500 via-amber-500 to-rose-500',
    image: dolchi,
    liveUrl: 'https://dolchico.com/',
  },
  {
    id: 'fintech-reconciliation',
    title: 'Closing the books in hours, not weeks',
    client: 'LedgerIQ',
    industry: 'SaaS · Fintech',
    engagement: 'Dedicated team',
    timeline: '16 weeks',
    summary:
      'An automated reconciliation platform that matches payouts, settlements, and bank statements across multiple gateways — with an immutable audit ledger behind every adjustment.',
    challenge:
      'Finance teams reconciled thousands of transactions by hand each month across gateways that all formatted data differently. Month-end close took weeks, and every manual correction was a compliance risk.',
    approach: [
      'Normalised gateway feeds into a single canonical transaction model',
      'Layered deterministic matching with an ML model for fuzzy, many-to-many records',
      'Built an append-only audit ledger so every adjustment is attributable and immutable',
      'Hardened the platform for SOC 2 readiness: encryption, least-privilege IAM, and full access logging',
    ],
    outcome:
      'Nearly all transactions now match automatically, and finance teams close the month in a fraction of the time with an audit trail regulators can follow.',
    results: [
      { value: '98%', label: 'Auto-matched' },
      { value: '10x', label: 'Faster close' },
      { value: '0', label: 'Untracked edits' },
      { value: 'SOC 2', label: 'Ready controls' },
    ],
    stack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AWS', 'Terraform'],
    icon: Wallet,
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
  },
  {
    id: 'healthcare-practice-saas',
    title: 'One workspace for scheduling, tele-consults, and records',
    client: 'CareSync',
    industry: 'SaaS · Healthcare',
    engagement: 'Product build + DevOps',
    timeline: '18 weeks',
    summary:
      'A practice management suite that brings appointments, video consults, prescriptions, and patient records into a single privacy-first workspace.',
    challenge:
      'Clinics juggled a booking tool, a separate video service, and paper records. Patient data crossed systems with no consistent consent model, and no-shows were eroding daily capacity.',
    approach: [
      'Unified scheduling, consults, and records behind one role-aware application',
      'Built WebRTC tele-consults with waiting rooms and automatic session records',
      'Implemented granular consent and access controls, encrypted at rest and in transit',
      'Added automated multi-channel reminders to reduce no-shows',
      'Shipped a FHIR-compatible integration layer for lab and pharmacy partners',
    ],
    outcome:
      'Clinics run their entire day from one screen, recover a meaningful share of previously lost appointment slots, and can demonstrate exactly who accessed which record.',
    results: [
      { value: '−30%', label: 'No-show rate' },
      { value: '3→1', label: 'Tools replaced' },
      { value: 'E2E', label: 'Encryption' },
      { value: 'FHIR', label: 'Interoperable' },
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'Docker', 'AWS'],
    icon: Stethoscope,
    gradient: 'from-rose-500 via-pink-600 to-red-500',
  },
  {
    id: 'workflow-automation-saas',
    title: 'Durable automation that survives failure',
    client: 'FlowForge',
    industry: 'SaaS · Automation',
    engagement: 'Fixed-scope build',
    timeline: '12 weeks',
    summary:
      'A visual automation studio where teams connect triggers, conditions, and 120+ services — backed by an execution engine that guarantees retries, idempotency, and replay.',
    challenge:
      'Existing scripts silently failed halfway through long-running jobs, leaving records half-updated with no way to see what happened or safely re-run it.',
    approach: [
      'Adopted a durable execution engine so every workflow step is checkpointed and replayable',
      'Designed a canvas editor that compiles visual flows into versioned, testable definitions',
      'Built a connector SDK so new integrations ship without touching the core engine',
      'Added per-run observability: step timelines, payload inspection, and one-click replay',
    ],
    outcome:
      'Teams automate processes they previously did not trust to a script, and failed runs are diagnosed and replayed in minutes rather than rebuilt from scratch.',
    results: [
      { value: '120+', label: 'Connectors' },
      { value: '−65%', label: 'Manual work' },
      { value: 'Exactly', label: 'Once semantics' },
      { value: '1-click', label: 'Replay' },
    ],
    stack: ['Next.js', 'TypeScript', 'Temporal', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    icon: Workflow,
    gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
  },
];
