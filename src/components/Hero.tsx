import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="aurora-bg w-[600px] h-[400px] rounded-full animate-aurora"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>

      <div className="container-custom relative z-10 text-center pt-20">
        {/* Overline */}
        <div className="overline mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          2025 / Next-Gen AI Studio
        </div>

        {/* Main Heading */}
        <h1 className="display-xl mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="block">AI-Driven Success</span>
          <span className="block text-primary">Redefining the Future.</span>
        </h1>

        {/* Subheading */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl text-secondary leading-relaxed mb-4">
            Creating latest solutions that redefine innovation.
          </p>
          <p className="text-lg text-secondary">
            Stay ahead with AI-powered technology for the future.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-up" 
             style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            Book a 15-min Call
          </button>
          <button 
            onClick={scrollToAbout}
            className="btn-secondary"
          >
            What is MetaForgeAI?
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-up" style={{ animationDelay: '1s' }}>
          <button 
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center p-3 rounded-full glass hover:glass-strong transition-all duration-300 animate-float"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;