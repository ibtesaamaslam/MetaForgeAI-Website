import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-background border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="animate-fade-up">
            <div className="flex items-center space-x-2 mb-6">
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
            <p className="text-secondary leading-relaxed mb-6 max-w-sm">
              Redefining the future with intelligent AI solutions that transform 
              businesses and accelerate growth in the digital age.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
              Quick Links
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: '#blog' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-secondary hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:you@domain.com" 
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  you@domain.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-secondary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-secondary">San Francisco, CA</span>
              </div>
            </div>

            {/* CTA in Footer */}
            <div className="mt-8 p-6 glass rounded-xl">
              <h4 className="font-display font-semibold mb-3 text-foreground">
                Ready to Start?
              </h4>
              <p className="text-secondary text-sm mb-4">
                Book a free consultation and discover how AI can transform your business.
              </p>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary w-full"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-secondary text-sm">
            © {currentYear} MetaForgeAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;