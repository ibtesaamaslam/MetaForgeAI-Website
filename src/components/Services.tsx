import { 
  Globe, 
  MessageCircle, 
  TrendingUp, 
  Eye, 
  Cog, 
  Sparkles 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Smart Websites & Personalization",
      description: "AI-driven personalization and automation that adapts to every visitor",
      tags: ["Personalization", "Analytics", "UX Optimization"]
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots & Conversational Agents",
      description: "24/7 intelligent support and lead capture systems that understand context",
      tags: ["Natural Language", "Lead Generation", "Customer Support"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced trend detection and forecasting to stay ahead of the market",
      tags: ["Machine Learning", "Forecasting", "Business Intelligence"]
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Intelligent recognition and automated inspection systems",
      tags: ["Image Recognition", "Quality Control", "Automation"]
    },
    {
      icon: Cog,
      title: "Business Process Automation",
      description: "Automate invoices, approvals, and onboarding with intelligent workflows",
      tags: ["Workflow Automation", "Process Optimization", "Integration"]
    },
    {
      icon: Sparkles,
      title: "Generative Content & Brand Assistants",
      description: "Scale your brand voice with AI-crafted content that maintains authenticity",
      tags: ["Content Generation", "Brand Consistency", "Creative AI"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="overline mb-6">Our Services</div>
          <h2 className="display-lg mb-8">
            <span className="block">Intelligent Solutions</span>
            <span className="block text-primary">for Every Challenge</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Transform your business with AI-powered services designed to automate, 
            optimize, and accelerate your growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-8 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-aurora flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full glass text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Strip */}
        <div className="mt-24 grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Seamless API Integrations",
              description: "Connect with your existing tools and platforms effortlessly",
              keywords: ["REST APIs", "Webhooks", "Data Sync"]
            },
            {
              title: "Trusted Authentication",
              description: "Enterprise-grade security with multi-factor authentication",
              keywords: ["OAuth 2.0", "SSO", "Security"]
            },
            {
              title: "AI-Speech Recognition",
              description: "Natural language processing for voice-driven interactions",
              keywords: ["Voice AI", "NLP", "Speech-to-Text"]
            },
            {
              title: "Real-time Analytics",
              description: "Live insights and performance monitoring dashboards",
              keywords: ["Real-time Data", "Dashboards", "Monitoring"]
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center animate-fade-up ${
                index % 2 === 0 ? 'glass rounded-2xl p-6' : 'p-6'
              }`}
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <h4 className="font-display font-semibold text-lg mb-3 text-foreground">
                {feature.title}
              </h4>
              <p className="text-secondary text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex flex-wrap justify-center gap-1">
                {feature.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;