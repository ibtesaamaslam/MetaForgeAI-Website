import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
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
            <svg 
              viewBox="0 0 100 100" 
              className="w-10 h-10 text-primary"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="50,4 90,27 90,73 50,96 10,73 10,27" />
              <polygon points="50,18 58,23 58,33 50,38 42,33 42,23" />
              <path d="M 38,28 C 24,28 22,38 22,48 L 22,52 L 26,56 L 26,66 L 36,76 L 36,84 L 50,91 L 64,84 L 64,76 L 74,66 L 74,56 L 78,52 L 78,48 C 78,38 76,28 62,28" />
              <path d="M 34,46 L 50,56 L 66,46 L 66,58 L 56,68 L 56,80 L 50,84 L 44,80 L 44,68 L 34,58 Z" />
            </svg>
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