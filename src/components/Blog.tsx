import { Calendar, Clock, ArrowRight, TrendingUp, Brain, Zap, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Your Business Needs AI Automation in 2026: From Cost Center to Profit Driver",
      excerpt: "Discover how intelligent process automation is no longer just a luxury, but a necessity for survival. Learn how our clients are turning operational bottlenecks into competitive advantages.",
      author: "Dr. Sarah Chen",
      role: "AI Strategy Director",
      date: "Mar 25, 2026",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["Automation", "Business Strategy", "ROI"],
      icon: TrendingUp,
      featured: true
    },
    {
      title: "The Future of E-commerce Intelligence: Hyper-Personalization at Scale",
      excerpt: "Generic recommendations are dead. See how MetaForgeAI's predictive intelligence models are helping retailers anticipate customer needs before they even click 'Search'.",
      author: "Marcus Rodriguez",
      role: "E-commerce AI Lead",
      date: "Mar 20, 2026",
      readTime: "6 min read",
      category: "Future Trends",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Predictive AI", "Retail"],
      icon: Zap
    },
    {
      title: "Computer Vision Revolution: How AI Eyes Are Seeing the Unseen",
      excerpt: "Explore breakthrough computer vision applications detecting microscopic defects with 99.97% accuracy and revolutionizing quality control in manufacturing.",
      author: "Dr. Alex Kim",
      role: "Computer Vision Lead",
      date: "Mar 15, 2026",
      readTime: "7 min read",
      category: "Technology Deep-dive",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop",
      tags: ["Computer Vision", "Quality Control", "Innovation"],
      icon: Brain
    },
    {
      title: "Don't Get Left Behind: The Hidden Cost of Ignoring Generative AI",
      excerpt: "While some companies wait and see, industry leaders are using Generative AI to 10x their content output and code generation. Here is why you need to act now.",
      author: "Jennifer Park",
      role: "Generative AI Specialist",
      date: "Mar 10, 2026",
      readTime: "5 min read",
      category: "Strategic Advice",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Generative AI", "Competitive Edge", "Growth"],
      icon: Users
    },
    {
      title: "Conversational AI in 2027: Beyond Simple Chatbots",
      excerpt: "The next generation of conversational AI doesn't just answer FAQs—it negotiates, empathizes, and closes sales. A look at the upcoming trends in NLP.",
      author: "Dr. Michael Zhang",
      role: "NLP Research Scientist",
      date: "Mar 5, 2026",
      readTime: "9 min read",
      category: "Future Trends",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      tags: ["Conversational AI", "NLP", "Customer Experience"],
      icon: Brain
    },
    {
      title: "Predictive Analytics: Forecasting the Future with 87% Accuracy",
      excerpt: "Behind the scenes of our financial prediction models that accurately forecasted market trends and generated $50M+ in client value.",
      author: "Lisa Thompson",
      role: "Data Science Director",
      date: "Feb 28, 2026",
      readTime: "6 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Predictive Analytics", "Financial AI", "Data Science"],
      icon: TrendingUp
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Industry Insights", count: 8 },
    { name: "Future Trends", count: 6 },
    { name: "Strategic Advice", count: 5 },
    { name: "Case Studies", count: 5 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Industry Insights": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Future Trends": return "text-purple-400 bg-purple-400/10 border-purple-400/20";
      case "Strategic Advice": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "Technology Deep-dive": return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
      case "Case Study": return "text-green-400 bg-green-400/10 border-green-400/20";
      default: return "text-primary bg-primary/10 border-primary/20";
    }
  };

  return (
    <section id="blog" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="overline mb-6">AI Insights & Innovation</div>
          <h2 className="display-lg mb-8">
            <span className="block">Latest from</span>
            <span className="block text-primary">MetaForgeAI Labs</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the AI revolution with cutting-edge insights, breakthrough research, 
            and real-world case studies from our team of AI experts and industry leaders.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                category.active 
                  ? 'glass-strong text-primary border border-primary/30' 
                  : 'glass text-secondary hover:text-foreground hover:bg-white/5'
              }`}
            >
              {category.name} <span className="text-xs opacity-60">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts[0] && (
          <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-aurora text-white">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-aurora flex items-center justify-center">
                      {(() => {
                        const IconComponent = blogPosts[0].icon;
                        return <IconComponent className="w-4 h-4 text-white" />;
                      })()}
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(blogPosts[0].category)}`}>
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4 text-foreground leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-secondary mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-secondary">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors group">
                      <span className="font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => {
            const IconComponent = post.icon;
            
            return (
              <article
                key={post.title}
                className="glass rounded-2xl overflow-hidden card-hover animate-fade-up group"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-aurora flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-secondary">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-3 text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full glass text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="font-medium text-foreground text-sm">{post.author}</div>
                      <div className="text-xs text-secondary">{post.role}</div>
                    </div>
                    <div className="text-xs text-secondary flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Blog;