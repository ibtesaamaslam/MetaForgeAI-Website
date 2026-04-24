import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "MetaForgeAI | Enterprise AI Solutions & Automation",
  description = "MetaForgeAI provides cutting-edge enterprise AI solutions, intelligent process automation, and predictive analytics to transform your business operations in 2026.",
  canonical = "https://metaforgeai.com",
  ogType = "website",
  ogImage = "https://metaforgeai.com/og-image.png",
  twitterHandle = "@metaforgeai",
}: SEOProps) => {
  const siteTitle = title.includes("MetaForgeAI") ? title : `${title} | MetaForgeAI`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MetaForgeAI",
          "url": "https://metaforgeai.com",
          "logo": "https://metaforgeai.com/logo.png",
          "sameAs": [
            "https://twitter.com/metaforgeai",
            "https://linkedin.com/company/metaforgeai"
          ],
          "description": "Enterprise AI Solutions & Automation Agency"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
