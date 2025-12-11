import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "They got the job done quickly as part of a multi-step process I had designed with the team to match my budget. We worked in phases to roll out updates for my application. Great job as always!",
    author: "Brent Hagel",
    role: "CEO, Epic Voicemails",
    rating: 5,
    label: "Design Quality",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    content: "Softsmartz delivered exceptional quality work on time. Their attention to detail and commitment to our vision exceeded all expectations. Highly recommended for any tech project!",
    author: "Sarah Chen",
    role: "Founder, TechStart",
    rating: 5,
    label: "Technical Excellence",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    content: "Working with Softsmartz was a game-changer for our business. Their AI solutions helped us automate processes and increase efficiency by 300%. Truly transformative!",
    author: "Michael Roberts",
    role: "CTO, InnovateCorp",
    rating: 5,
    label: "Innovation",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-sm uppercase tracking-wider mb-2"
          >
            Who we've served
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            We help achieve mutual goals.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-foreground">{testimonials[currentIndex].label}</span>
              <div className="flex gap-1 ml-auto">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
