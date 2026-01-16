import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Softsmartz - Digital Solutions & Software Development',
  description = 'Softsmartz delivers innovative software development, AI/ML solutions, UI/UX design, and web & mobile app development services to transform your business.',
  keywords = 'software development, web development, app development, AI, machine learning, UI/UX design, Shopify, digital solutions',
  author = 'Softsmartz',
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage = '/og-image.jpg', // Default OG image path
  twitterCard = 'summary_large_image',
  twitterSite = '@Softsmartz',
  twitterCreator = '@Softsmartz',
  canonical = 'https://softsmartz.com',
}) => {
  const siteTitle = title.includes('Softsmartz') ? title : `${title} | Softsmartz`;
  
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || siteTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={ogTitle || siteTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
