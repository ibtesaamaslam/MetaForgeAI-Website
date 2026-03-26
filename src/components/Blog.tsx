import { Calendar, Clock, ArrowRight, TrendingUp, Brain, Zap, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise: 2024 Trends That Will Transform Business",
      excerpt: "Discover the 5 revolutionary AI trends that are reshaping how enterprises operate, from autonomous decision-making to hyper-personalized customer experiences.",
      author: "Dr. Sarah Chen",
      role: "AI Research Director",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["Enterprise AI", "Business Transformation", "Future Tech"],
      icon: TrendingUp,
      featured: true
    },
    {
      title: "Breaking: GPT-5 Integration Increases Client ROI by 340%",
      excerpt: "Case study reveals how our latest GPT-5 powered solutions delivered unprecedented returns for Fortune 500 clients in Q4 2024.",
      author: "Marcus Rodriguez",
      role: "Senior AI Engineer",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tags: ["GPT-5", "ROI", "Case Study"],
      icon: Zap
    },
    {
      title: "Computer Vision Revolution: How AI Eyes Are Seeing the Unseen",
      excerpt: "Explore breakthrough computer vision applications detecting microscopic defects with 99.97% accuracy and revolutionizing quality control.",
      author: "Dr. Alex Kim",
      role: "Computer Vision Lead",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Technology Deep-dive",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop",
      tags: ["Computer Vision", "Quality Control", "Innovation"],
      icon: Brain
    },
    {
      title: "AI Automation Success: From 40 Hours to 4 Minutes",
      excerpt: "Real-world transformation story: How intelligent automation reduced invoice processing time by 99% while maintaining 100% accuracy.",
      author: "Jennifer Park",
      role: "Automation Specialist",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Automation", "Efficiency", "Success Story"],
      icon: Users
    },
    {
      title: "Conversational AI: Building Human-Like Interactions at Scale",
      excerpt: "Technical deep-dive into creating AI assistants that handle 10,000+ daily interactions with 95% customer satisfaction rates.",
      author: "Dr. Michael Zhang",
      role: "NLP Research Scientist",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Technical Guide",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      tags: ["Conversational AI", "NLP", "Customer Experience"],
      icon: Brain
    },
    {
      title: "Predictive Analytics: Forecasting the Future with 87% Accuracy",
      excerpt: "Behind the scenes of our financial prediction models that accurately forecasted market trends and generated $50M+ in client value.",
      author: "Lisa Thompson",
      role: "Data Science Director",
      date: "Dec 2, 2024",
      readTime: "6 min read",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Predictive Analytics", "Financial AI", "Data Science"],
      icon: TrendingUp
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Industry Insights", count: 8 },
    { name: "Case Studies", count: 6 },
    { name: "Technical Guides", count: 5 },
    { name: "Success Stories", count: 5 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Industry Insights": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Case Study": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "Technology Deep-dive": return "text-purple-400 bg-purple-400/10 border-purple-400/20";
      case "Success Story": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "Technical Guide": return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
      case "Data Science": return "text-pink-400 bg-pink-400/10 border-pink-400/20";
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

        {/* Newsletter CTA */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '1.2s' }}>
          <div className="glass rounded-3xl p-8 lg:p-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-aurora flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              Get exclusive AI insights, breakthrough research, and industry predictions delivered weekly. 
              Join 10,000+ AI enthusiasts and business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl glass border border-white/20 text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="btn-primary px-8 py-3 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-secondary mt-4">
              No spam. Unsubscribe anytime. Privacy policy applies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;