import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type Tech = {
  name: string;
  color: string;
  textColor: string;
  logo?: string;
};

type Category = {
  label: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    label: 'Frontend',
    techs: [
      { name: 'React', color: 'bg-cyan-500', textColor: 'text-cyan-600 dark:text-cyan-400', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', color: 'bg-slate-800', textColor: 'text-slate-800 dark:text-slate-200', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
      { name: 'Vue.js', color: 'bg-emerald-500', textColor: 'text-emerald-600 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
      { name: 'Angular', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
      { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'JavaScript', color: 'bg-yellow-400', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'Tailwind CSS', color: 'bg-teal-500', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Vite', color: 'bg-purple-600', textColor: 'text-purple-600 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/vite/646CFF' },
      { name: 'Remix', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/remix/000000' },
      { name: 'Astro', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/astro/FF5D01' },
      { name: 'Framer Motion', color: 'bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
      { name: 'Three.js', color: 'bg-slate-600', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/threedotjs/000000' },
    ],
  },
  {
    label: 'Backend',
    techs: [
      { name: 'Node.js', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Python', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/python/3776AB' },
      { name: 'FastAPI', color: 'bg-teal-600', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/fastapi/009688' },
      { name: 'Django', color: 'bg-green-700', textColor: 'text-green-700 dark:text-green-400', logo: 'https://cdn.simpleicons.org/django/092E20' },
      { name: 'Express.js', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/express/000000' },
      { name: 'NestJS', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'Java', color: 'bg-red-500', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/openjdk/437291' },
      { name: 'Go', color: 'bg-cyan-600', textColor: 'text-cyan-600 dark:text-cyan-400', logo: 'https://cdn.simpleicons.org/go/00ADD8' },
      { name: 'GraphQL', color: 'bg-pink-600', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/graphql/E10098' },
      { name: 'REST API', color: 'bg-indigo-500', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
      { name: 'tRPC', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/trpc/2596BE' },
      { name: 'Prisma', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/prisma/2D3748' },
    ],
  },
  {
    label: 'Mobile',
    techs: [
      { name: 'React Native', color: 'bg-cyan-500', textColor: 'text-cyan-600 dark:text-cyan-400', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Flutter', color: 'bg-sky-500', textColor: 'text-sky-600 dark:text-sky-400', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'Swift', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/swift/F05138' },
      { name: 'Kotlin', color: 'bg-purple-600', textColor: 'text-purple-600 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/kotlin/7F52FF' },
      { name: 'Expo', color: 'bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/expo/000020' },
      { name: 'Capacitor', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/capacitor/119EFF' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    techs: [
      { name: 'AWS', color: 'bg-amber-500', textColor: 'text-amber-600 dark:text-amber-400', logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
      { name: 'Google Cloud', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
      { name: 'Azure', color: 'bg-blue-700', textColor: 'text-blue-700 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
      { name: 'Docker', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'Kubernetes', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
      { name: 'Terraform', color: 'bg-purple-600', textColor: 'text-purple-600 dark:text-purple-400', logo: 'https://cdn.simpleicons.org/terraform/7B42BC' },
      { name: 'GitHub Actions', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'Vercel', color: 'bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/vercel/000000' },
      { name: 'Nginx', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/nginx/009639' },
      { name: 'Linux', color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/linux/FCC624' },
    ],
  },
  {
    label: 'Database & AI',
    techs: [
      { name: 'PostgreSQL', color: 'bg-blue-700', textColor: 'text-blue-700 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'MongoDB', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'Firebase', color: 'bg-yellow-500', textColor: 'text-yellow-600 dark:text-yellow-400', logo: 'https://cdn.simpleicons.org/firebase/FFCA28' },
      { name: 'Redis', color: 'bg-red-600', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
      { name: 'Supabase', color: 'bg-emerald-600', textColor: 'text-emerald-600 dark:text-emerald-400', logo: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
      { name: 'TensorFlow', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
      { name: 'PyTorch', color: 'bg-orange-600', textColor: 'text-orange-600 dark:text-orange-400', logo: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
      { name: 'OpenAI API', color: 'bg-slate-700', textColor: 'text-slate-700 dark:text-slate-300', logo: 'https://cdn.simpleicons.org/openai/412991' },
      { name: 'LangChain', color: 'bg-teal-600', textColor: 'text-teal-600 dark:text-teal-400', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
      { name: 'Pinecone', color: 'bg-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/pinecone/000000' },
    ],
  },
  {
    label: 'Design & CMS',
    techs: [
      { name: 'Figma', color: 'bg-pink-500', textColor: 'text-pink-600 dark:text-pink-400', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Framer', color: 'bg-blue-600', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
      { name: 'WordPress', color: 'bg-blue-700', textColor: 'text-blue-700 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/wordpress/21759B' },
      { name: 'Shopify', color: 'bg-green-600', textColor: 'text-green-600 dark:text-green-400', logo: 'https://cdn.simpleicons.org/shopify/96BF48' },
      { name: 'Contentful', color: 'bg-blue-500', textColor: 'text-blue-600 dark:text-blue-400', logo: 'https://cdn.simpleicons.org/contentful/2478CC' },
      { name: 'Sanity', color: 'bg-red-500', textColor: 'text-red-600 dark:text-red-400', logo: 'https://cdn.simpleicons.org/sanity/F03E2F' },
      { name: 'Webflow', color: 'bg-indigo-600', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/webflow/4353FF' },
      { name: 'Strapi', color: 'bg-indigo-500', textColor: 'text-indigo-600 dark:text-indigo-400', logo: 'https://cdn.simpleicons.org/strapi/4945FF' },
    ],
  },
];

export const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="section-padding bg-secondary/40">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-widest text-primary"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Tools &amp; Frameworks
            <br />
            <span className="gradient-text">We Build With</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Industry-leading, battle-tested technologies to ensure quality, speed, and long-term scalability across every layer of your product.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeTab === i
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Tech Pills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {categories[activeTab].techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group"
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card rounded-full border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 cursor-default">
                {/* Logo image */}
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-4 h-4 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const dot = e.currentTarget.nextElementSibling as HTMLElement;
                    if (dot) dot.style.display = 'block';
                  }}
                />
                {/* Fallback dot */}
                <div className={`w-2.5 h-2.5 ${tech.color} rounded-full hidden`} />
                <span className={`text-sm font-semibold ${tech.textColor}`}>{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          {categories.reduce((sum, c) => sum + c.techs.length, 0)}+ technologies across{' '}
          {categories.length} categories
        </motion.p>

      </div>
    </section>
  );
};
