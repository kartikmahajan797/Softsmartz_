import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink, ArrowRight, AlignEndVerticalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/seo/SEO';
import dolchi from '../assets/dolchi.png';
import buyYourWish from '../assets/buyYourWish.png';
import veda from '../assets/veda.png';
import brown from '../assets/brown.png';
import gym from '../assets/gym.png';
import heritaze from '../assets/heritaze.png';
import angel from '../assets/angel.png';
import musafir from '../assets/musafir.png';
import ratan from '../assets/ratan.png'
import urban from '../assets/urban.png'
import camp from '../assets/camp.png'
import fire from '../assets/fire.png'
import tridenity from '../assets/tridenity.png'
import trycelivida from '../assets/trycelivida.png'
import elixer from '../assets/elixer.png'
import darmor from '../assets/darmor.png'
import borcelle from '../assets/borcelle.png'
import glowing from '../assets/glowing.png'
import atlinex from '../assets/atlinex.png'
import warehouse from '../assets/warehouse.png'
import kaizgar from '../assets/kaizgar.png'
import seoul from '../assets/seoul.png'
import molana from '../assets/molana.png'
import ferno from '../assets/ferno.png'

const projects = [
  {
    id: 1,
    title: 'Dolchico – Fashion E-Commerce Platform',
    category: 'MERN Stack Development',
    description: 'A full-featured fashion e-commerce platform with product listings, advanced filtering, secure authentication, cart management, and online payment integration.',
    image: dolchi,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe'],
    liveUrl: 'https://dolchico.com/',
  },

  {
    id: 2,
    title: 'buyYourWish',
    category: 'E-Commerce Website',
    description: 'A fully functional Shopify-based e-commerce store with product listings, secure checkout, payment gateway integration, and a responsive user-friendly shopping experience.',
    image: buyYourWish,
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'Payment Gateway', 'UI/UX'],
    liveUrl: 'https://buyyourwish.com/',
  },

  {
    id: 3,
    title: 'Veda Box',
    category: 'E-Commerce (Shopify)',
    description: 'A Shopify-based wellness & healthcare e-commerce store offering Ayurvedic supplements and natural health products with a clean and user-friendly shopping experience.',
    image: veda,
    liveUrl: 'https://vedabox.in/',
    tags: ['Shopify', 'Liquid', 'UI/UX', 'Figma', 'Payment Gateway'],
  }
  ,
  {
    id: 4,
    title: 'Brownkudi',
    category: 'Next.js & React',
    description: 'A profile and brand site celebrating Harpal Kaur Dhanjal — popularly known as Brown Kudi — Punjab’s pioneering female welder and inspirational social media influencer. The site highlights her journey of hard work in a male-dominated field, her rise to fame through authentic content, and her impact on empowering young women.',
    liveUrl: 'https://www.brownkudi.com/',
    image: brown,
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  },

  {
    id: 5,
    title: 'Strength Gym Phillaur',
    category: 'Next.js Web App',
    description: 'A modern fitness website built using Next.js and Tailwind CSS, featuring a clean and responsive UI, optimized performance, and an engaging user experience for showcasing gym services, memberships, and fitness programs.',
    image: gym,
    liveUrl: 'https://www.strengthgymphillaur.in/',
    tags: ['Next.js', 'Tailwind CSS', 'Modern UI', 'Responsive Design'],
  },

  {
    id: 6,
    title: 'Heritage Panjab',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based food e-commerce website offering authentic Punjabi food products, featuring a clean UI, smooth checkout experience, and optimized product browsing.',
    image: heritaze,
    liveUrl: 'https://heritagepanjab.com/',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'Payment Gateway'],
  },

  {
    id: 7,
    title: 'Angel Assistance Care',
    category: 'MERN Web Application',
    description: 'A MERN-based healthcare and disability support website designed to showcase compassionate, personalized NDIS services. The platform highlights a holistic care approach focused on physical, emotional, and social well-being, helping participants and families navigate support services with trust, clarity, and ease.',
    image: angel,
    liveUrl: 'https://angelassistancecare.co/',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Healthcare'],
  },

  {
    id: 8,
    title: 'Musafir Films',
    category: 'React Web App',
    description: 'A modern, visually rich website built using React and Tailwind CSS for Musafir Films, focused on emotional storytelling and cinematic presentation. The platform captures timeless wedding moments and transforms memories into beautifully crafted visual narratives.',
    image: musafir,
    liveUrl: 'https://www.musafirfilm.in/',
    tags: ['React', 'Tailwind CSS', 'UI/UX Design', 'Branding'],
  },

  {
    id: 9,
    title: 'Ratanmaa – Organic',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based organic food brand website for Ratanmaa, showcasing a homegrown legacy of homemade Khajur Pak. The platform reflects tradition, family values, and authentic taste, offering a smooth shopping experience for customers seeking healthy, artisanal sweets.',
    image: ratan,
    liveUrl: 'https://ratanmaa.com/',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'Payment Gateway'],
  },

  {
    id: 10,
    title: 'Urban Drip',
    category: 'Shopify E-Commerce',
    description: 'A modern Shopify-based T-shirt e-commerce store featuring a bold streetwear aesthetic, clean UI, and seamless shopping experience tailored for contemporary fashion lovers.',
    image: urban,
    liveUrl: 'https://urbandrip.net/',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'Payment Gateway'],
  }
  ,
  {
    id: 10,
    title: 'Campnai',
    category: 'AI / Web App',
    description: 'An AI-powered platform serving as your virtual employee for influencer marketing. Built with generative AI and LLMs, Campnai streamlines collaboration, automates manual tasks, and provides clear control over end-to-end AI-powered workflows for marketing teams.',
    image: camp,
    liveUrl: 'https://campnai.vercel.app/',
    tags: ['AI', 'LLM', 'React', 'Web App', 'Generative AI'],
  }
  ,
  {
    id: 10,
    title: 'FireApp',
    category: 'SaaS Web App',
    description: 'A modern SaaS platform designed for software product management, helping teams plan, track, and collaborate efficiently. FireApp streamlines workflows, enhances productivity, and provides insights to optimize product development cycles.',
    image: fire,
    liveUrl: '#', // Add live URL if available
    tags: ['SaaS', 'Product Management', 'React', 'UI/UX', 'Collaboration'],
  }
  ,
  {
    id: 11,
    title: 'Tridenity',
    category: 'Agency Website',
    description: 'A modern agency website built with Next.js, Tailwind CSS, Node.js, and PostgreSQL. Tridenity designs custom websites and digital solutions that enhance brand presence, engage users, and drive measurable business growth.',
    image: tridenity,
    liveUrl: 'https://www.tridenity.com/',
    tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'UI/UX', 'Agency'],
  }
  // New Project
  ,
  {
    id: 12,
    title: 'Trycelivida',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based health and wellness e-commerce store for Celivida, offering clinically backed NAD+ supplements designed to boost energy, support cellular health, and promote longevity — featuring a clean UI, product showcases, and a seamless shopping experience.',
    image: trycelivida,
    liveUrl: 'https://trycelivida.com/',
    tags: ['Shopify', 'E-Commerce', 'Health & Wellness', 'UI/UX', 'Payment Gateway'],
  }
  ,
  {
    id: 13,
    title: 'Elixer',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based health and wellness e-commerce store for ELIXER, a UK-based brand offering CBD oils, NMN supplements, and wellness products for pain relief, anxiety management, longevity, and performance — with clean sourcing, BRCGS-certified manufacturing, and a seamless shopping experience.',
    image: elixer,
    liveUrl: 'https://www.elixer.co.uk/',
    tags: ['Shopify', 'E-Commerce', 'Health & Wellness', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 14,
    title: '3-D Armor',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based e-commerce store for 3-D Armor, offering an engineered padded bass drum harness designed to reduce strain and boost comfort for marching band percussionists — featuring a clean product-focused UI, risk-free trial offer, and a seamless checkout experience.',
    image: darmor,
    liveUrl: 'https://3-darmor.com/',
    tags: ['Shopify', 'E-Commerce', 'Product Store', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 15,
    title: 'Ecomency Sites',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based dropshipping store for Ecomency Sites, featuring the LED Pear Fruit Silicone Night Light — a 7-color, touch-controlled, USB rechargeable sleep aid. The store showcases a conversion-optimized product page with science-backed copy, customer testimonials, and a seamless checkout experience.',
    image: borcelle,
    liveUrl: 'https://ecomencysites.myshopify.com/',
    tags: ['Shopify', 'E-Commerce', 'Dropshipping', 'UI/UX', 'Payment Gateway'],
  },
  {
    id: 16,
    title: 'Glowing Anime',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based dropshipping store for Glowing Anime, offering anime-themed LED lighting and neon decor products. The store features a vibrant, fan-focused UI with conversion-optimized product pages, customer testimonials, and a seamless checkout experience.',
    image: glowing,
    liveUrl: 'https://glowinganime.com/',
    tags: ['Shopify', 'E-Commerce', 'Dropshipping', 'Anime', 'UI/UX'],
  }
  ,
  {
    id: 17,
    title: 'Atlinex',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based health and wellness e-commerce store for Atlinex, a premier USA-based supplement brand delivering science-backed vitamins and supplements crafted with premium ingredients. The store features a clean, trust-focused UI with curated product collections, customer reviews, and a 60-day money-back guarantee.',
    image: atlinex,
    liveUrl: 'https://atlinex.com/',
    tags: ['Shopify', 'E-Commerce', 'Health & Wellness', 'Supplements', 'UI/UX'],
  },
  {
    id: 18,
    title: 'Infinity Warehouse',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based beauty and gifting e-commerce store for Infinity Warehouse, an Australian brand offering skincare, makeup, fragrances, jewelry, and curated gift sets. The store features a clean, product-rich UI with brand collections, best sellers, new arrivals, and a seamless shopping experience.',
    image: warehouse,
    liveUrl: 'https://infinitywarehouse.com.au/',
    tags: ['Shopify', 'E-Commerce', 'Beauty', 'Gifting', 'UI/UX'],
  },
  {
    id: 19,
    title: 'Kaizgar',
    category: 'Shopify E-Commerce',
    description: 'A multi-product Shopify e-commerce store for Kaizgar, serving as an online bazaar and discounter. The platform features an extensive catalog across various categories with a focus on affordable pricing, worldwide shipping, 24/7 support, and a user-friendly browsing experience.',
    image: kaizgar,
    liveUrl: 'https://kaizgar.fr/#',
    tags: ['Shopify', 'E-Commerce', 'Multi-brand', 'Disccounter', 'UI/UX'],
  },
  {
    id: 20,
    title: 'Seoul Luma',
    category: 'Shopify E-Commerce',
    description: 'A dedicated Shopify e-commerce store for Seoul Luma, specializing in 100% authentic Korean skincare products. The platform offers a clean, beauty-focused shopping experience featuring top K-beauty brands like COSRX, LANEIGE, and Anua, with direct shipping from South Korea.',
    image: seoul,
    liveUrl: 'https://seoul-luma.com/',
    tags: ['Shopify', 'E-Commerce', 'Skincare', 'K-Beauty', 'UI/UX'],
  }
  ,
  {
    id: 21,
    title: 'Mo’Lanna',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based e-commerce store for Mo’Lanna, a premier fragrance house dedicated to celebrating individuality through scent. The platform features an elegant and immersive shopping experience for discovering unique, memory-evoking perfumes and exploring the art of fragrance.',
    image: molana,
    liveUrl: 'https://molanna.com/',
    tags: ['Shopify', 'E-Commerce', 'Fragrances', 'Beauty', 'UI/UX'],
  },
  {
    id: 22,
    title: 'FerNo Fashion & Lifestyle',
    category: 'Shopify E-Commerce',
    description: 'A Shopify-based fashion and lifestyle e-commerce store for FerNo, offering a curated collection of men\'s, women\'s, and children\'s apparel, footwear, and accessories. The Dutch platform features a clean, categorized shopping experience with seamless navigation for discovering trendy clothing and vintage-style caps.',
    image: ferno,
    liveUrl: 'https://fernofashionlifestyle.com/',
    tags: ['Shopify', 'E-Commerce', 'Fashion', 'Apparel', 'UI/UX'],
  }


];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Portfolio - Featured Projects & Case Studies"
        description="Explore our latest work and see how we've helped businesses achieve their digital goals through innovative software solutions."
        canonical="https://softsmartz.com/portfolio"
      />
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-orange-50/30 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-orange-500 font-semibold text-sm md:text-base mb-4 uppercase tracking-wider"
            >
              Our Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            >
              Featured <span className="text-orange-500">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our latest work and see how we've helped businesses
              achieve their digital goals.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredId === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredId === project.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: hoveredId === project.id ? 0 : 20,
                            opacity: hoveredId === project.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {project.liveUrl ? (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                              <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2.5 text-sm font-medium flex items-center gap-2 shadow-lg"
                              >
                                View Project
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </a>
                          ) : (
                            <Button
                              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2.5 text-sm font-medium flex items-center gap-2 shadow-lg"
                              aria-disabled
                            >
                              View Project
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                          )}
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7">
                      <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                        {project.category}
                      </span>

                      <h3 className="font-bold text-xl md:text-2xl text-gray-900 mt-3 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Let's discuss how we can help bring your vision to life with cutting-edge technology and creative solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
                Let's talk <ArrowRight size={18} />
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