import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Code2,
  Server,
  Smartphone,
  Infinity as InfinityIcon,
  Cloud,
  BrainCircuit,
  Database,
  Palette,
  GitBranch,
  Hammer,
  FlaskConical,
  ShieldCheck,
  Rocket,
  Radar,
  type LucideIcon,
} from 'lucide-react';

type Tech = {
  name: string;
  color: string;
  textColor: string;
  logo?: string;
};

type Category = {
  label: string;
  icon: LucideIcon;
  blurb: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    label: 'Frontend',
    icon: Code2,
    blurb:
      'Interfaces that stay fast on real devices — server components, streaming, and accessible design systems.',
    techs: [
      { name: 'React 19', color: 'bg-cyan-500', textColor: 'text-cyan-600 dark:text-cyan-400', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js 15', color: 'bg-slate-800', textColor: 'text-slate-800 dark:text-slate-200', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
      { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Vue.js', color: 'bg-emerald-500', textColor: 'text-emerald-600 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
      { name: 'Angular', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
      { name: 'Svelte', color: 'bg-orange-600', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/svelte/FF3E00' },
      { name: 'Remix', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/remix/000000' },
      { name: 'Astro', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/astro/FF5D01' },
      { name: 'Tailwind CSS', color: 'bg-teal-500', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Vite', color: 'bg-purple-600', textColor: 'text-purple-600 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/vite/646CFF' },
      { name: 'Framer Motion', color: 'bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
      { name: 'Three.js', color: 'bg-slate-600', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/threedotjs/000000' },
      { name: 'Storybook', color: 'bg-pink-600', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/storybook/FF4785' },
      { name: 'Playwright', color: 'bg-emerald-600', textColor: 'text-emerald-600 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/playwright/2EAD33' },
    ],
  },
  {
    label: 'Backend & APIs',
    icon: Server,
    blurb:
      'Service architectures built for throughput, idempotency, and clean contracts between teams.',
    techs: [
      { name: 'Node.js', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'NestJS', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'Python', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'FastAPI', color: 'bg-teal-600', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'Django', color: 'bg-green-700', textColor: 'text-green-700 dark:text-green-400', logo: 'https://cdn.simpleicons.org/django/092E20' },
      { name: 'Go', color: 'bg-cyan-600', textColor: 'text-cyan-600 dark:text-cyan-400', logo: 'https://cdn.simpleicons.org/go/00ADD8' },
      { name: 'Rust', color: 'bg-orange-700', textColor: 'text-orange-700 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/rust/000000' },
      { name: 'Java / Spring', color: 'bg-green-600', textColor: 'text-green-700 dark:text-green-400', logo: 'https://cdn.simpleicons.org/spring/6DB33F' },
      { name: '.NET', color: 'bg-purple-700', textColor: 'text-purple-700 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/dotnet/512BD4' },
      { name: 'GraphQL', color: 'bg-pink-600', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/graphql/E10098' },
      { name: 'tRPC', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/trpc/2596BE' },
      { name: 'gRPC', color: 'bg-sky-600', textColor: 'text-sky-600 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/grpc/2DA6B0' },
      { name: 'Temporal', color: 'bg-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/temporal/000000' },
      { name: 'Prisma', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/prisma/2D3748' },
    ],
  },
  {
    label: 'DevOps & SRE',
    icon: InfinityIcon,
    blurb:
      'Everything between a merged pull request and a healthy production system — automated, observable, and reversible.',
    techs: [
      { name: 'Docker', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Kubernetes', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
      { name: 'Terraform', color: 'bg-purple-600', textColor: 'text-purple-600 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/terraform/7B42BC' },
      { name: 'Pulumi', color: 'bg-violet-600', textColor: 'text-violet-600 dark:text-violet-400', logo: 'https://cdn.simpleicons.org/pulumi/8A3391' },
      { name: 'Ansible', color: 'bg-red-700', textColor: 'text-red-700 dark:text-red-400', logo: 'https://cdn.simpleicons.org/ansible/EE0000' },
      { name: 'Helm', color: 'bg-sky-700', textColor: 'text-sky-700 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/helm/0F1689' },
      { name: 'Argo CD', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/argo/EF7B4D' },
      { name: 'GitHub Actions', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'GitLab CI', color: 'bg-orange-600', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
      { name: 'Jenkins', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/jenkins/D24939' },
      { name: 'Prometheus', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/prometheus/E6522C' },
      { name: 'Grafana', color: 'bg-amber-500', textColor: 'text-amber-600 dark:text-amber-400', logo: 'https://cdn.simpleicons.org/grafana/F46800' },
      { name: 'OpenTelemetry', color: 'bg-indigo-500', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/opentelemetry/000000' },
      { name: 'Datadog', color: 'bg-purple-700', textColor: 'text-purple-700 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/datadog/632CA6' },
      { name: 'Sentry', color: 'bg-fuchsia-700', textColor: 'text-fuchsia-700 dark:text-fuchsia-400', logo: 'https://cdn.simpleicons.org/sentry/362D59' },
      { name: 'SonarQube', color: 'bg-sky-600', textColor: 'text-sky-600 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/sonarqube/4E9BCD' },
      { name: 'Snyk', color: 'bg-purple-800', textColor: 'text-purple-700 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/snyk/4C4A73' },
      { name: 'HashiCorp Vault', color: 'bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/vault/FFEC6E' },
      { name: 'Nginx', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/nginx/009639' },
      { name: 'Linux', color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/linux/FCC624' },
    ],
  },
  {
    label: 'Cloud & Platform',
    icon: Cloud,
    blurb:
      'Multi-cloud and edge deployments with infrastructure-as-code, cost guardrails, and least-privilege IAM.',
    techs: [
      { name: 'AWS', color: 'bg-amber-500', textColor: 'text-amber-600 dark:text-amber-400', logo: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' },
      { name: 'Google Cloud', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
      { name: 'Microsoft Azure', color: 'bg-blue-700', textColor: 'text-blue-700 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
      { name: 'Cloudflare', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/cloudflare/F38020' },
      { name: 'Vercel', color: 'bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/vercel/000000' },
      { name: 'Netlify', color: 'bg-teal-500', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/netlify/00C7B7' },
      { name: 'DigitalOcean', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/digitalocean/0080FF' },
      { name: 'Firebase', color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
      { name: 'Supabase', color: 'bg-emerald-600', textColor: 'text-emerald-600 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
      { name: 'Serverless / Edge', color: 'bg-red-500', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/awslambda/FF9900' },
    ],
  },
  {
    label: 'AI, ML & LLMs',
    icon: BrainCircuit,
    blurb:
      'Agents, retrieval pipelines, and production ML — with evaluation harnesses and guardrails, not just prompts.',
    techs: [
      { name: 'Claude API', color: 'bg-orange-600', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/anthropic/191919' },
      { name: 'OpenAI API', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/openai/412991' },
      { name: 'Google Gemini', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
      { name: 'LangChain', color: 'bg-teal-600', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
      { name: 'LangGraph', color: 'bg-emerald-700', textColor: 'text-emerald-700 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/langgraph/1C3C3C' },
      { name: 'LlamaIndex', color: 'bg-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/llamaindex/000000' },
      { name: 'MCP Servers', color: 'bg-amber-600', textColor: 'text-amber-600 dark:text-amber-400', logo: 'https://cdn.simpleicons.org/modelcontextprotocol/000000' },
      { name: 'RAG Pipelines', color: 'bg-cyan-600', textColor: 'text-cyan-600 dark:text-cyan-400' },
      { name: 'AI Agents & Bots', color: 'bg-violet-600', textColor: 'text-violet-600 dark:text-violet-400' },
      { name: 'Hugging Face', color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
      { name: 'PyTorch', color: 'bg-orange-600', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
      { name: 'TensorFlow', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'scikit-learn', color: 'bg-amber-600', textColor: 'text-amber-600 dark:text-amber-400', logo: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
      { name: 'OpenCV', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
      { name: 'Ollama', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/ollama/000000' },
      { name: 'MLflow', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/mlflow/0194E2' },
      { name: 'n8n', color: 'bg-rose-600', textColor: 'text-rose-600 dark:text-rose-400', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    ],
  },
  {
    label: 'Data & Databases',
    icon: Database,
    blurb:
      'Transactional, analytical, and vector stores — modelled for the query patterns your product actually has.',
    techs: [
      { name: 'PostgreSQL', color: 'bg-blue-700', textColor: 'text-blue-700 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'MongoDB', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'MySQL', color: 'bg-sky-700', textColor: 'text-sky-700 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { name: 'Redis', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
      { name: 'ClickHouse', color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/clickhouse/FFCC01' },
      { name: 'Apache Kafka', color: 'bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/apachekafka/231F20' },
      { name: 'Elasticsearch', color: 'bg-amber-500', textColor: 'text-amber-600 dark:text-amber-400', logo: 'https://cdn.simpleicons.org/elasticsearch/005571' },
      { name: 'Snowflake', color: 'bg-sky-500', textColor: 'text-sky-600 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/snowflake/29B5E8' },
      { name: 'pgvector', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Pinecone', color: 'bg-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/pinecone/000000' },
      { name: 'Qdrant', color: 'bg-rose-600', textColor: 'text-rose-600 dark:text-rose-400', logo: 'https://cdn.simpleicons.org/qdrant/DC244C' },
      { name: 'Apache Airflow', color: 'bg-teal-600', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/apacheairflow/017CEE' },
    ],
  },
  {
    label: 'Mobile',
    icon: Smartphone,
    blurb:
      'Cross-platform and native apps with over-the-air updates, offline support, and store-ready pipelines.',
    techs: [
      { name: 'React Native', color: 'bg-cyan-500', textColor: 'text-cyan-600 dark:text-cyan-400', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Expo', color: 'bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/expo/000020' },
      { name: 'Flutter', color: 'bg-sky-500', textColor: 'text-sky-600 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'Swift', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/swift/F05138' },
      { name: 'Kotlin', color: 'bg-purple-600', textColor: 'text-purple-600 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
      { name: 'Capacitor', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/capacitor/119EFF' },
      { name: 'Fastlane', color: 'bg-emerald-600', textColor: 'text-emerald-600 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/fastlane/00F200' },
    ],
  },
  {
    label: 'Design & CMS',
    icon: Palette,
    blurb:
      'Design systems and content platforms that let marketing move without waiting on an engineering sprint.',
    techs: [
      { name: 'Figma', color: 'bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Framer', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
      { name: 'Shopify', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/shopify/96BF48' },
      { name: 'WordPress', color: 'bg-blue-700', textColor: 'text-blue-700 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/wordpress/21759B' },
      { name: 'Sanity', color: 'bg-red-500', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/sanity/F03E2F' },
      { name: 'Contentful', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/contentful/2478CC' },
      { name: 'Strapi', color: 'bg-indigo-500', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/strapi/4945FF' },
      { name: 'Webflow', color: 'bg-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/webflow/4353FF' },
    ],
  },
];

/** The DevOps loop we run on every engagement, rendered as a pipeline strip. */
const pipeline: { icon: LucideIcon; stage: string; detail: string }[] = [
  { icon: GitBranch, stage: 'Commit', detail: 'Trunk-based, PR reviewed' },
  { icon: Hammer, stage: 'Build', detail: 'Containerised, cached' },
  { icon: FlaskConical, stage: 'Test', detail: 'Unit, E2E, coverage gate' },
  { icon: ShieldCheck, stage: 'Scan', detail: 'SAST, deps, secrets' },
  { icon: Rocket, stage: 'Deploy', detail: 'Blue-green, auto-rollback' },
  { icon: Radar, stage: 'Observe', detail: 'Traces, alerts, SLOs' },
];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState(0);

  const totalTechs = categories.reduce((sum, c) => sum + c.techs.length, 0);
  const active = categories[activeTab];

  return (
    <section ref={ref} className="section-padding bg-secondary/40 relative overflow-hidden">
      <div className="aurora bg-primary/20 w-[420px] h-[420px] -top-40 left-1/3" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Modern engineering,
            <br />
            <span className="gradient-text">end to end</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Frontend to infrastructure, AI agents to DevOps pipelines — battle-tested tools chosen
            for the problem in front of us, never for the résumé.
          </motion.p>
        </div>

        {/* DevOps pipeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-14 rounded-3xl border border-border bg-card/70 backdrop-blur p-6 md:p-8"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <InfinityIcon size={18} className="text-primary" />
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">
              Our DevOps pipeline
            </span>
            <span className="hidden sm:inline text-sm text-muted-foreground">
              — runs on every commit, in every engagement
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {pipeline.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.07 }}
                className="group relative rounded-2xl border border-border bg-background p-4 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <stage.icon size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-foreground">{stage.stage}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{stage.detail}</p>
                <span className="absolute top-3 right-4 text-[10px] font-mono text-muted-foreground/50">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat, i) => {
            const isActive = activeTab === i;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-tab-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/25"
                  />
                )}
                <cat.icon size={15} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Category blurb */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`blurb-${activeTab}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-center text-muted-foreground max-w-2xl mx-auto mb-9"
          >
            {active.blurb}
          </motion.p>
        </AnimatePresence>

        {/* Tech pills */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {active.techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.025 }}
              className="group"
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card rounded-full border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 cursor-default">
                {tech.logo && (
                  <img
                    src={tech.logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const dot = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (dot) dot.style.display = 'block';
                    }}
                  />
                )}
                {/* Fallback dot — shown when a logo is missing or fails to load */}
                <div
                  className={`w-2.5 h-2.5 ${tech.color} rounded-full ${tech.logo ? 'hidden' : ''}`}
                />
                <span className={`text-sm font-semibold ${tech.textColor}`}>{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          {totalTechs}+ technologies across {categories.length} disciplines
        </motion.p>
      </div>
    </section>
  );
};
