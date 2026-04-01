import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Calendar, ArrowRight, User, Loader2, BookOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/seo/SEO';
import { fetchBlogs, type BlogPost } from '@/lib/blogService';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { toast } from 'sonner';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Latest Articles on Software Development & Technology"
        description="Read the latest articles about web development, AI, design, and technology trends from the Softsmartz blog."
        canonical="https://softsmartz.com/blog"
      />
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground"
            >
              Blog
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Insights, tips, and articles about software development and technology
            </motion.p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-muted-foreground text-lg">Loading articles...</p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-destructive" />
                </div>
                <p className="text-muted-foreground text-lg">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && posts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xl font-display font-bold text-foreground">No articles yet</p>
                <p className="text-muted-foreground">Check back soon — new content is on the way!</p>
              </div>
            )}

            {/* Blog Cards */}
            {!loading && !error && posts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group h-full"
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex flex-col h-full bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="space-y-3 border-t border-border pt-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar size={16} />
                            <span>{formatDate(post.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>

                          <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2 group-hover:gap-3 transition-all">
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground"
            >
              Subscribe to Our Newsletter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Get the latest articles, insights, and updates delivered directly to your inbox.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-2"
            >
              {subscribed ? (
                <div className="flex items-center justify-center gap-2 w-full py-3 text-green-600">
                  <CheckCircle2 size={20} />
                  <span className="font-medium">You're subscribed! 🎉</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={subscribing}
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary disabled:opacity-50"
                  />
                  <button
                    disabled={subscribing}
                    onClick={async () => {
                      const trimmed = email.trim().toLowerCase();
                      if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
                        toast.error('Please enter a valid email address.');
                        return;
                      }
                      setSubscribing(true);
                      try {
                        // Use email as doc ID — naturally prevents duplicates, no read needed
                        const docRef = doc(db, 'newsletter', trimmed);
                        await setDoc(docRef, {
                          email: trimmed,
                          subscribedAt: Timestamp.now(),
                        });
                        toast.success('Subscribed successfully!');
                        setSubscribed(true);
                        setEmail('');
                      } catch (err) {
                        console.error('Newsletter subscribe error:', err);
                        toast.error('Something went wrong. Please try again.');
                      } finally {
                        setSubscribing(false);
                      }
                    }}
                    className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    {subscribing ? (
                      <><Loader2 size={16} className="animate-spin" /> Subscribing...</>
                    ) : (
                      <>Subscribe <ArrowRight size={16} /></>
                    )}
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
