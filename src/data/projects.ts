import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  BrainCircuit,
  Boxes,
  Gauge,
  Workflow,
  Wallet,
  Stethoscope,
  Truck,
  MessageSquareText,
  ScanEye,
  PenLine,
  PhoneCall,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';

import dolchi from '../assets/dolchi.png';
import buyYourWish from '../assets/buyYourWish.png';
import veda from '../assets/veda.png';
import brown from '../assets/brown.png';
import gym from '../assets/gym.png';
import heritaze from '../assets/heritaze.png';
import angel from '../assets/angel.png';
import musafir from '../assets/musafir.png';
import ratan from '../assets/ratan.png';
import urban from '../assets/urban.png';
import camp from '../assets/camp.png';
import fire from '../assets/fire.png';
import tridenity from '../assets/tridenity.png';
import trycelivida from '../assets/trycelivida.png';
import elixer from '../assets/elixer.png';
import darmor from '../assets/darmor.png';
import borcelle from '../assets/borcelle.png';
import glowing from '../assets/glowing.png';
import atlinex from '../assets/atlinex.png';
import warehouse from '../assets/warehouse.png';
import kaizgar from '../assets/kaizgar.png';
import seoul from '../assets/seoul.png';
import molana from '../assets/molana.png';
import ferno from '../assets/ferno.png';
import desidaharah from '../assets/desidaharah.png';
import sg from '../assets/sg.png';

/** Filter buckets shown as tabs on the Portfolio page. */
export type ProjectGroup = 'saas' | 'ai' | 'ecommerce' | 'web';

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  /** Short label rendered above the title. */
  category: string;
  group: ProjectGroup;
  description: string;
  tags: string[];
  /** Screenshot — present for public client work. */
  image?: string;
  /** Public URL — intentionally absent for SaaS & AI platform work. */
  liveUrl?: string;
  /** Icon + gradient used to render cards that have no screenshot. */
  icon?: LucideIcon;
  gradient?: string;
  /** Headline numbers rendered inside the card. */
  metrics?: ProjectMetric[];
  /** Renders a "Private build" badge instead of a live link. */
  confidential?: boolean;
  featured?: boolean;
};

export const projectGroups: { id: ProjectGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'saas', label: 'SaaS Platforms' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'web', label: 'Web & Product' },
];

/* ---------------------------------------------------------------------------
   SaaS platforms — multi-tenant products engineered end to end.
   These are private builds, so they carry no outbound link by design.
   --------------------------------------------------------------------------- */
const saasProjects: Project[] = [
  {
    id: 'fireapp',
    title: 'FireApp — Product Delivery Cloud',
    category: 'SaaS · Product Management',
    group: 'saas',
    description:
      'A multi-tenant SaaS workspace for software product teams: roadmap planning, sprint tracking, capacity forecasting, and delivery analytics in one place. Built on an event-driven core with role-based access, audit trails, and usage-based billing.',
    image: fire,
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Stripe Billing', 'Multi-tenant'],
    icon: Boxes,
    gradient: 'from-orange-500 via-amber-500 to-rose-500',
    metrics: [
      { value: '40+', label: 'Workspaces' },
      { value: '99.9%', label: 'Uptime SLO' },
    ],
    confidential: true,
    featured: true,
  },
  {
    id: 'pulsegrid',
    title: 'PulseGrid — Realtime Analytics SaaS',
    category: 'SaaS · Data & Analytics',
    group: 'saas',
    description:
      'A streaming analytics platform that ingests millions of product events per day and renders sub-second dashboards. Columnar storage, incremental materialised views, and a natural-language query layer let non-technical teams ask questions in plain English.',
    tags: ['React', 'Go', 'ClickHouse', 'Kafka', 'Kubernetes', 'LLM Query Layer'],
    icon: Gauge,
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    metrics: [
      { value: '2M+', label: 'Events / day' },
      { value: '<800ms', label: 'Query p95' },
    ],
    confidential: true,
    featured: true,
  },
  {
    id: 'flowforge',
    title: 'FlowForge — Workflow Automation SaaS',
    category: 'SaaS · Automation',
    group: 'saas',
    description:
      'A no-code automation studio where teams wire together triggers, conditions, and 120+ connectors on a visual canvas. A durable execution engine guarantees retries, idempotency, and replay for every long-running workflow.',
    tags: ['Next.js', 'TypeScript', 'Temporal', 'PostgreSQL', 'Docker', 'Webhooks'],
    icon: Workflow,
    gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
    metrics: [
      { value: '120+', label: 'Connectors' },
      { value: '65%', label: 'Manual work cut' },
    ],
    confidential: true,
  },
  {
    id: 'ledgeriq',
    title: 'LedgerIQ — Fintech Reconciliation SaaS',
    category: 'SaaS · Fintech',
    group: 'saas',
    description:
      'An automated reconciliation platform for finance teams that matches payouts, settlements, and bank statements across gateways. ML-assisted matching resolves fuzzy records, while an immutable audit ledger keeps every adjustment compliance-ready.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AWS', 'SOC 2 Ready'],
    icon: Wallet,
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    metrics: [
      { value: '98%', label: 'Auto-matched' },
      { value: '10x', label: 'Faster close' },
    ],
    confidential: true,
  },
  {
    id: 'caresync',
    title: 'CareSync — Healthcare Practice SaaS',
    category: 'SaaS · Healthcare',
    group: 'saas',
    description:
      'A HIPAA-conscious practice management suite covering scheduling, e-prescriptions, tele-consults, and patient records. Encrypted at rest and in transit, with granular consent controls and a FHIR-compatible integration layer.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'WebRTC', 'FHIR', 'HIPAA-aligned'],
    icon: Stethoscope,
    gradient: 'from-rose-500 via-pink-600 to-red-500',
    metrics: [
      { value: '30%', label: 'Fewer no-shows' },
      { value: 'E2E', label: 'Encryption' },
    ],
    confidential: true,
  },
  {
    id: 'shipstack',
    title: 'ShipStack — Logistics Visibility SaaS',
    category: 'SaaS · Logistics',
    group: 'saas',
    description:
      'A control tower for freight operators: live shipment tracking, carrier integrations, exception alerts, and predictive ETAs. Geospatial pipelines and route models turn raw telemetry into decisions dispatchers can act on immediately.',
    tags: ['React', 'Node.js', 'TimescaleDB', 'MapLibre', 'Kubernetes', 'ML ETA'],
    icon: Truck,
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    metrics: [
      { value: '±12min', label: 'ETA accuracy' },
      { value: '24/7', label: 'Live tracking' },
    ],
    confidential: true,
  },
  {
    id: 'skillforge',
    title: 'SkillForge — Learning Platform SaaS',
    category: 'SaaS · EdTech',
    group: 'saas',
    description:
      'A white-label learning platform with adaptive learning paths, cohort management, proctored assessments, and revenue sharing for creators. Video delivery runs on an edge CDN with per-tenant theming and SSO.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Mux', 'SSO / SAML', 'Multi-tenant'],
    icon: GraduationCap,
    gradient: 'from-indigo-500 via-blue-600 to-sky-500',
    metrics: [
      { value: '4.8/5', label: 'Learner CSAT' },
      { value: 'White', label: 'Label ready' },
    ],
    confidential: true,
  },
];

/* ---------------------------------------------------------------------------
   AI, agents & bots.
   --------------------------------------------------------------------------- */
const aiProjects: Project[] = [
  {
    id: 'campnai',
    title: 'Campnai — AI Marketing Employee',
    category: 'AI · Generative Platform',
    group: 'ai',
    description:
      'An AI-powered platform that acts as a virtual employee for influencer marketing. Generative models draft outreach, negotiate collaborations, and automate campaign busywork, while marketers keep clear control of every AI-driven workflow.',
    image: camp,
    liveUrl: 'https://campnai.vercel.app/',
    tags: ['LLM', 'Generative AI', 'React', 'Node.js', 'Prompt Orchestration'],
    icon: BrainCircuit,
    gradient: 'from-purple-500 via-violet-600 to-indigo-600',
    featured: true,
  },
  {
    id: 'atlas-agents',
    title: 'Atlas — Multi-Agent Operations Suite',
    category: 'AI · Agentic Systems',
    group: 'ai',
    description:
      'A multi-agent system where specialised agents research, plan, execute, and review business operations autonomously. A supervisor agent routes tasks, enforces tool permissions, and escalates to a human whenever confidence drops below threshold.',
    tags: ['Claude API', 'LangGraph', 'Python', 'Vector DB', 'Tool Calling', 'MCP'],
    icon: Bot,
    gradient: 'from-violet-500 via-indigo-600 to-blue-600',
    metrics: [
      { value: '6', label: 'Specialist agents' },
      { value: '70%', label: 'Tasks automated' },
    ],
    confidential: true,
    featured: true,
  },
  {
    id: 'documind',
    title: 'DocuMind — RAG Knowledge Assistant',
    category: 'AI · RAG & Search',
    group: 'ai',
    description:
      'An enterprise knowledge assistant that reads contracts, SOPs, and policy documents, then answers with citations back to the source paragraph. Hybrid retrieval plus a re-ranking layer keeps answers grounded and hallucination-resistant.',
    tags: ['RAG', 'LangChain', 'pgvector', 'FastAPI', 'Embeddings', 'Citations'],
    icon: MessageSquareText,
    gradient: 'from-teal-500 via-emerald-600 to-green-600',
    metrics: [
      { value: '95%', label: 'Answer precision' },
      { value: '1M+', label: 'Pages indexed' },
    ],
    confidential: true,
  },
  {
    id: 'voxdesk',
    title: 'VoxDesk — AI Voice & Chat Support Bot',
    category: 'AI · Conversational Bots',
    group: 'ai',
    description:
      'An omnichannel support bot handling voice calls, WhatsApp, and web chat in multiple languages. It resolves routine tickets end to end, performs live CRM actions through tools, and hands off to an agent with full conversation context.',
    tags: ['Realtime Voice', 'LLM', 'Twilio', 'WhatsApp API', 'CRM Tools', 'Multilingual'],
    icon: PhoneCall,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    metrics: [
      { value: '68%', label: 'Auto-resolved' },
      { value: '<2s', label: 'Voice latency' },
    ],
    confidential: true,
  },
  {
    id: 'visionqc',
    title: 'VisionQC — Computer Vision Inspection',
    category: 'AI · Computer Vision',
    group: 'ai',
    description:
      'A defect detection system for production lines that scores every unit from camera streams on edge hardware. Continuous retraining pipelines improve the model as new defect classes appear, with a dashboard for line supervisors.',
    tags: ['PyTorch', 'YOLO', 'Edge Inference', 'MLOps', 'Python', 'Grafana'],
    icon: ScanEye,
    gradient: 'from-cyan-500 via-sky-600 to-blue-700',
    metrics: [
      { value: '99.2%', label: 'Detection rate' },
      { value: '30fps', label: 'On-edge' },
    ],
    confidential: true,
  },
  {
    id: 'salespilot',
    title: 'SalesPilot — AI SDR Agent',
    category: 'AI · Sales Automation',
    group: 'ai',
    description:
      'An autonomous sales development agent that enriches leads, writes personalised sequences, books meetings, and updates the CRM. Guardrails, tone controls, and an approval queue keep every outbound message on-brand.',
    tags: ['LLM Agents', 'Next.js', 'Node.js', 'CRM Integrations', 'Guardrails'],
    icon: PenLine,
    gradient: 'from-fuchsia-500 via-pink-600 to-rose-600',
    metrics: [
      { value: '3.4x', label: 'Meetings booked' },
      { value: '24/7', label: 'Pipeline motion' },
    ],
    confidential: true,
  },
  {
    id: 'sentryai',
    title: 'SentryAI — Fraud & Risk Intelligence',
    category: 'AI · Risk & Security',
    group: 'ai',
    description:
      'A real-time risk engine scoring transactions and account behaviour with a blend of gradient-boosted models and graph features. Analysts get explainable reason codes for every decision plus a rules studio for instant policy changes.',
    tags: ['Python', 'XGBoost', 'Graph Features', 'Kafka', 'Explainable AI'],
    icon: ShieldCheck,
    gradient: 'from-slate-600 via-slate-700 to-zinc-800',
    metrics: [
      { value: '−42%', label: 'Fraud losses' },
      { value: '<100ms', label: 'Decision time' },
    ],
    confidential: true,
  },
];

/* ---------------------------------------------------------------------------
   Client work — public, linkable builds.
   --------------------------------------------------------------------------- */
const clientProjects: Project[] = [
  {
    id: 'dolchico',
    title: 'Dolchico — Fashion E-Commerce Platform',
    category: 'MERN Stack Development',
    group: 'ecommerce',
    description:
      'A full-featured fashion e-commerce platform with product listings, advanced filtering, secure authentication, cart management, and online payment integration.',
    image: dolchi,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe'],
    liveUrl: 'https://dolchico.com/',
    featured: true,
  },
  {
    id: 'buyyourwish',
    title: 'buyYourWish',
    category: 'E-Commerce Website',
    group: 'ecommerce',
    description:
      'A fully functional Shopify-based e-commerce store with product listings, secure checkout, payment gateway integration, and a responsive user-friendly shopping experience.',
    image: buyYourWish,
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'Payment Gateway', 'UI/UX'],
    liveUrl: 'https://buyyourwish.com/',
  },
  {
    id: 'vedabox',
    title: 'Veda Box',
    category: 'E-Commerce (Shopify)',
    group: 'ecommerce',
    description:
      'A Shopify-based wellness & healthcare e-commerce store offering Ayurvedic supplements and natural health products with a clean and user-friendly shopping experience.',
    image: veda,
    liveUrl: 'https://vedabox.in/',
    tags: ['Shopify', 'Liquid', 'UI/UX', 'Figma', 'Payment Gateway'],
  },
  {
    id: 'brownkudi',
    title: 'Brownkudi',
    category: 'Next.js & React',
    group: 'web',
    description:
      'A profile and brand site celebrating Harpal Kaur Dhanjal — popularly known as Brown Kudi — Punjab’s pioneering female welder and inspirational social media influencer. The site highlights a journey of hard work in a male-dominated field, a rise to fame through authentic content, and real impact on empowering young women.',
    liveUrl: 'https://www.brownkudi.com/',
    image: brown,
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'strength-gym',
    title: 'Strength Gym Phillaur',
    category: 'Next.js Web App',
    group: 'web',
    description:
      'A modern fitness website built using Next.js and Tailwind CSS, featuring a clean and responsive UI, optimized performance, and an engaging user experience for showcasing gym services, memberships, and fitness programs.',
    image: gym,
    liveUrl: 'https://www.strengthgymphillaur.in/',
    tags: ['Next.js', 'Tailwind CSS', 'Modern UI', 'Responsive Design'],
  },
  {
    id: 'heritage-panjab',
    title: 'Heritage Panjab',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based food e-commerce website offering authentic Punjabi food products, featuring a clean UI, smooth checkout experience, and optimized product browsing.',
    image: heritaze,
    liveUrl: 'https://heritagepanjab.com/',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 'angel-assistance',
    title: 'Angel Assistance Care',
    category: 'MERN Web Application',
    group: 'web',
    description:
      'A MERN-based healthcare and disability support website designed to showcase compassionate, personalized NDIS services. The platform highlights a holistic care approach focused on physical, emotional, and social well-being, helping participants and families navigate support services with trust, clarity, and ease.',
    image: angel,
    liveUrl: 'https://angelassistancecare.co/',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Healthcare'],
  },
  {
    id: 'musafir-films',
    title: 'Musafir Films',
    category: 'React Web App',
    group: 'web',
    description:
      'A modern, visually rich website built using React and Tailwind CSS for Musafir Films, focused on emotional storytelling and cinematic presentation. The platform captures timeless wedding moments and transforms memories into beautifully crafted visual narratives.',
    image: musafir,
    liveUrl: 'https://www.musafirfilm.in/',
    tags: ['React', 'Tailwind CSS', 'UI/UX Design', 'Branding'],
  },
  {
    id: 'ratanmaa',
    title: 'Ratanmaa — Organic',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based organic food brand website for Ratanmaa, showcasing a homegrown legacy of homemade Khajur Pak. The platform reflects tradition, family values, and authentic taste, offering a smooth shopping experience for customers seeking healthy, artisanal sweets.',
    image: ratan,
    liveUrl: 'https://ratanmaa.com/',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 'urban-drip',
    title: 'Urban Drip',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A modern Shopify-based T-shirt e-commerce store featuring a bold streetwear aesthetic, clean UI, and seamless shopping experience tailored for contemporary fashion lovers.',
    image: urban,
    liveUrl: 'https://urbandrip.net/',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 'tridenity',
    title: 'Tridenity',
    category: 'Agency Website',
    group: 'web',
    description:
      'A modern agency website built with Next.js, Tailwind CSS, Node.js, and PostgreSQL. Tridenity designs custom websites and digital solutions that enhance brand presence, engage users, and drive measurable business growth.',
    image: tridenity,
    liveUrl: 'https://www.tridenity.com/',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'UI/UX', 'Agency'],
  },
  {
    id: 'trycelivida',
    title: 'Trycelivida',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based health and wellness e-commerce store for Celivida, offering clinically backed NAD+ supplements designed to boost energy, support cellular health, and promote longevity — featuring a clean UI, product showcases, and a seamless shopping experience.',
    image: trycelivida,
    liveUrl: 'https://trycelivida.com/',
    tags: ['Shopify', 'E-Commerce', 'Health & Wellness', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 'elixer',
    title: 'Elixer',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based health and wellness e-commerce store for ELIXER, a UK-based brand offering CBD oils, NMN supplements, and wellness products for pain relief, anxiety management, longevity, and performance — with clean sourcing, BRCGS-certified manufacturing, and a seamless shopping experience.',
    image: elixer,
    liveUrl: 'https://www.elixer.co.uk/',
    tags: ['Shopify', 'E-Commerce', 'Health & Wellness', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: '3d-armor',
    title: '3-D Armor',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based e-commerce store for 3-D Armor, offering an engineered padded bass drum harness designed to reduce strain and boost comfort for marching band percussionists — featuring a clean product-focused UI, risk-free trial offer, and a seamless checkout experience.',
    image: darmor,
    liveUrl: 'https://3-darmor.com/',
    tags: ['Shopify', 'E-Commerce', 'Product Store', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 'ecomency',
    title: 'Ecomency Sites',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based dropshipping store for Ecomency Sites, featuring the LED Pear Fruit Silicone Night Light — a 7-color, touch-controlled, USB rechargeable sleep aid. The store showcases a conversion-optimized product page with science-backed copy, customer testimonials, and a seamless checkout experience.',
    image: borcelle,
    liveUrl: 'https://ecomencysites.myshopify.com/',
    tags: ['Shopify', 'E-Commerce', 'Dropshipping', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 'glowing-anime',
    title: 'Glowing Anime',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based dropshipping store for Glowing Anime, offering anime-themed LED lighting and neon decor products. The store features a vibrant, fan-focused UI with conversion-optimized product pages, customer testimonials, and a seamless checkout experience.',
    image: glowing,
    liveUrl: 'https://glowinganime.com/',
    tags: ['Shopify', 'E-Commerce', 'Dropshipping', 'Anime', 'UI/UX'],
  },
  {
    id: 'atlinex',
    title: 'Atlinex',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based health and wellness e-commerce store for Atlinex, a premier USA-based supplement brand delivering science-backed vitamins and supplements crafted with premium ingredients. The store features a clean, trust-focused UI with curated product collections, customer reviews, and a 60-day money-back guarantee.',
    image: atlinex,
    liveUrl: 'https://atlinex.com/',
    tags: ['Shopify', 'E-Commerce', 'Health & Wellness', 'Supplements', 'UI/UX'],
  },
  {
    id: 'infinity-warehouse',
    title: 'Infinity Warehouse',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based beauty and gifting e-commerce store for Infinity Warehouse, an Australian brand offering skincare, makeup, fragrances, jewelry, and curated gift sets. The store features a clean, product-rich UI with brand collections, best sellers, new arrivals, and a seamless shopping experience.',
    image: warehouse,
    liveUrl: 'https://infinitywarehouse.com.au/',
    tags: ['Shopify', 'E-Commerce', 'Beauty', 'Gifting', 'UI/UX'],
  },
  {
    id: 'kaizgar',
    title: 'Kaizgar',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A multi-product Shopify e-commerce store for Kaizgar, serving as an online bazaar and discounter. The platform features an extensive catalog across various categories with a focus on affordable pricing, worldwide shipping, 24/7 support, and a user-friendly browsing experience.',
    image: kaizgar,
    liveUrl: 'https://kaizgar.fr/#',
    tags: ['Shopify', 'E-Commerce', 'Multi-brand', 'Discounter', 'UI/UX'],
  },
  {
    id: 'seoul-luma',
    title: 'Seoul Luma',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A dedicated Shopify e-commerce store for Seoul Luma, specializing in 100% authentic Korean skincare products. The platform offers a clean, beauty-focused shopping experience featuring top K-beauty brands like COSRX, LANEIGE, and Anua, with direct shipping from South Korea.',
    image: seoul,
    liveUrl: 'https://seoul-luma.com/',
    tags: ['Shopify', 'E-Commerce', 'Skincare', 'K-Beauty', 'UI/UX'],
  },
  {
    id: 'molanna',
    title: 'Mo’Lanna',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A Shopify-based e-commerce store for Mo’Lanna, a premier fragrance house dedicated to celebrating individuality through scent. The platform features an elegant and immersive shopping experience for discovering unique, memory-evoking perfumes and exploring the art of fragrance.',
    image: molana,
    liveUrl: 'https://molanna.com/',
    tags: ['Shopify', 'E-Commerce', 'Fragrances', 'Beauty', 'UI/UX'],
  },
  {
    id: 'ferno',
    title: 'FerNo Fashion & Lifestyle',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      "A Shopify-based fashion and lifestyle e-commerce store for FerNo, offering a curated collection of men's, women's, and children's apparel, footwear, and accessories. The Dutch platform features a clean, categorized shopping experience with seamless navigation for discovering trendy clothing and vintage-style caps.",
    image: ferno,
    liveUrl: 'https://fernofashionlifestyle.com/',
    tags: ['Shopify', 'E-Commerce', 'Fashion', 'Apparel', 'UI/UX'],
  },
  {
    id: 'desidhara',
    title: 'DesiDhara Naturals',
    category: 'Shopify E-Commerce',
    group: 'ecommerce',
    description:
      'A premium Shopify-based natural wellness and organic products e-commerce platform for DesiDhara. The website showcases traditionally crafted products including A2 Desi Ghee, Raw Forest Honey, and Organic Jaggery, emphasizing purity, sustainability, and authentic Indian traditions — with detailed product storytelling, transparent sourcing, and lab reports.',
    image: desidaharah,
    liveUrl: 'https://www.desidhara.org/',
    tags: ['Shopify', 'E-Commerce', 'Organic Products', 'Health & Wellness', 'UI/UX'],
    featured: true,
  },
  {
    id: 'sg-premium',
    title: 'SG Premium Properties',
    category: 'Real Estate Website',
    group: 'web',
    description:
      'A modern real estate platform designed for SG Premium Properties, helping buyers, investors, and property seekers discover premium residential and commercial properties. The website features detailed property listings, project showcases, investment opportunities, location insights, and streamlined inquiry management.',
    image: sg,
    liveUrl: 'https://www.sgpremiumproperties.com/',
    tags: ['Real Estate', 'Property Listings', 'CRM Integration', 'Lead Generation', 'UI/UX'],
  },
];

/** SaaS and AI work leads the grid — it is the most representative of how we build today. */
export const projects: Project[] = [...saasProjects, ...aiProjects, ...clientProjects];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCounts = {
  total: projects.length,
  saas: saasProjects.length,
  ai: aiProjects.length,
  ecommerce: clientProjects.filter((p) => p.group === 'ecommerce').length,
  web: clientProjects.filter((p) => p.group === 'web').length,
};
