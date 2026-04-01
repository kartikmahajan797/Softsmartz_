import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Calendar, ArrowLeft, User, Loader2, Share2, Twitter, Linkedin } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { fetchBlogBySlug, type BlogPost } from '@/lib/blogService';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      try {
        const data = await fetchBlogBySlug(slug);
        if (!data) {
          setNotFound(true);
        } else {
          setPost(data);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({ title: post.title, url: shareUrl });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <div className="container-custom max-w-4xl py-20">
            <div className="flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-muted-foreground text-lg">Loading article...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 404 state
  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Article Not Found" description="The requested blog article could not be found." />
        <Navbar />
        <main className="pt-24">
          <div className="container-custom max-w-4xl py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-display font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">
                The article you're looking for doesn't exist or has been removed.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`https://softsmartz.com/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero / Header */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>

              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container-custom max-w-4xl -mt-2"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/5 border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              {/* Article Body */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-li:text-muted-foreground
                  prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  {/* Share */}
                  <div className="p-4 rounded-lg border border-border bg-card">
                    <h4 className="font-display font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
                      Share
                    </h4>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={handleShare}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                      >
                        <Share2 size={16} />
                        Copy Link
                      </button>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                      >
                        <Twitter size={16} />
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground"
            >
              Want to learn more?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              Get in touch with our team to discuss how we can help your business grow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="px-6 py-3 bg-background text-foreground font-medium rounded-lg border border-border hover:border-primary transition-colors"
              >
                More Articles
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
