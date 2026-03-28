import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Video, Mail, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      
      <Navigation />
      
      <main className="pt-32 pb-24 container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-secondary hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> 
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="display-lg text-foreground mb-4">Book a Call</h1>
                <p className="text-secondary text-lg leading-relaxed">
                  Schedule a free 15-minute discovery call to discuss how MetaForgeAI can transform your business with intelligent solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 text-foreground">15 Minutes</h3>
                    <p className="text-secondary">Quick, focused discussion about your needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1 text-foreground">Video Conference</h3>
                    <p className="text-secondary">Google Meet link provided upon booking.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-3">
              <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-aurora opacity-10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-display font-semibold mb-8 text-foreground">Your Details</h2>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary flex items-center gap-2">
                          <User className="w-4 h-4" /> Name
                        </label>
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary flex items-center gap-2">
                          <Mail className="w-4 h-4" /> Email
                        </label>
                        <input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> How can we help?
                      </label>
                      <textarea 
                        rows={5}
                        placeholder="Tell us a bit about your project or business needs..." 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 mt-4">
                      <Calendar className="w-5 h-5" />
                      Request Consultation
                    </button>
                    
                    <p className="text-xs text-secondary text-center mt-6">
                      By submitting this form, you agree to our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
