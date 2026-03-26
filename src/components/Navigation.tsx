import { useState, useEffect } from 'react';

import metaforgeLogo from '@/assets/metaforge-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 glass-strong backdrop-blur-glass-strong' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={metaforgeLogo} 
              alt="MetaForgeAI Logo" 
              className="w-10 h-10 rounded-xl"
            />
            <span className="font-display font-bold text-2xl text-foreground">
              MetaForgeAI
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-3">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 border border-transparent hover:border-primary/30 ${
                  index === 0 
                    ? 'glass-strong text-foreground hover:bg-primary/10 hover:text-primary' 
                    : 'glass text-secondary hover:text-foreground hover:bg-white/5'
                } backdrop-blur-md hover:shadow-glow hover:scale-105`}
              >
                <span className="relative z-10">{item.label}</span>
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-aurora opacity-10 rounded-xl"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="relative px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-aurora text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300 border border-primary/30"
            >
              <span className="relative z-10">Book a 15-min Call</span>
              <div className="absolute inset-0 bg-gradient-aurora opacity-80 rounded-xl"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;