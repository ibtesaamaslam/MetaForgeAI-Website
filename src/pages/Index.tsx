import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <LogoStrip />
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
