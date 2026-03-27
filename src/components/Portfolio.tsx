import { ExternalLink, Zap, Brain, Sparkles, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "NeuralCommerce AI",
      category: "E-commerce Intelligence",
      description: "Revolutionary AI-powered platform that increased client revenue by 340% through predictive customer behavior analysis and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      technologies: ["Machine Learning", "Computer Vision", "NLP", "Real-time Analytics"],
      results: ["+340% Revenue", "99.7% Uptime", "2.3s Response Time"],
      link: "#"
    },
    {
      title: "VisionGuard Pro",
      category: "Computer Vision",
      description: "Advanced quality control system using deep learning to detect microscopic defects with 99.97% accuracy, saving manufacturers $2M+ annually.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      technologies: ["TensorFlow", "OpenCV", "Edge Computing", "IoT Integration"],
      results: ["99.97% Accuracy", "60% Cost Reduction", "24/7 Operation"],
      link: "#"
    },
    {
      title: "ConversaBot Enterprise",
      category: "Conversational AI",
      description: "Multi-lingual AI assistant handling 10,000+ customer interactions daily with human-like understanding and 95% customer satisfaction.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["GPT-4", "Voice Recognition", "Sentiment Analysis", "Multi-modal AI"],
      results: ["95% Satisfaction", "10K+ Daily Users", "40+ Languages"],
      link: "#"
    },
    {
      title: "PredictIQ Analytics",
      category: "Predictive Intelligence",
      description: "Financial forecasting platform that predicted market trends with 87% accuracy, helping clients make data-driven investment decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Time Series Analysis", "Deep Learning", "Financial APIs", "Real-time Data"],
      results: ["87% Accuracy", "$50M+ Managed", "0.2s Predictions"],
      link: "#"
    },
    {
      title: "AutoFlow Pro",
      category: "Process Automation",
      description: "Intelligent workflow automation that reduced manual processing time by 85% while maintaining 100% accuracy in document handling.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["RPA", "Document AI", "OCR", "Workflow Engine"],
      results: ["85% Time Saved", "100% Accuracy", "$1.2M Savings"],
      link: "#"
    },
    {
      title: "ContentForge AI",
      category: "Generative AI",
      description: "Brand-consistent content generation platform producing 1000+ pieces daily while maintaining authentic brand voice and SEO optimization.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      technologies: ["GPT-4", "Brand Analysis", "SEO AI", "Content Pipeline"],
      results: ["1000+ Daily Posts", "300% Engagement", "SEO Optimized"],
      link: "#"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "E-commerce Intelligence": return TrendingUp;
      case "Computer Vision": return Brain;
      case "Conversational AI": return Sparkles;
      case "Predictive Intelligence": return Zap;
      case "Process Automation": return Brain;
      case "Generative AI": return Sparkles;
      default: return Zap;
    }
  };

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="overline mb-6">Our Portfolio</div>
          <h2 className="display-lg mb-8">
            <span className="block">Transformative AI Solutions</span>
            <span className="block text-primary">Delivering Real Impact</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge AI implementations that have revolutionized 
            businesses across industries with measurable results and breakthrough innovations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden card-hover animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.link}
                      className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full glass text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full glass text-tertiary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "AI Projects Delivered", sublabel: "Across 6 Industries" },
            { number: "99.7%", label: "Client Satisfaction", sublabel: "Proven Track Record" },
            { number: "PKR 500K+", label: "Revenue Generated", sublabel: "For Our Clients" },
            { number: "24/7", label: "AI Systems Running", sublabel: "Zero Downtime" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`animate-fade-up ${index % 2 === 0 ? 'glass rounded-2xl p-6' : 'p-6'}`}
              style={{ animationDelay: `${1.5 + index * 0.1}s` }}
            >
              <div className="text-4xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-secondary">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;