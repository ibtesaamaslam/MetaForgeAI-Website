import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="MetaForgeAI | Enterprise AI Solutions & Automation"
        description="Transform your enterprise with MetaForgeAI. We specialize in custom AI solution development, intelligent automation, and predictive analytics."
        canonical="https://metaforgeai.vercel.app"
      />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
