import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, Video, Mail, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent("Consultation Request");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info.metaforgeai@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
    
    toast.success("Opening Gmail to send your request...");
    setFormData({ name: "", email: "", message: "" });
  };

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
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary flex items-center gap-2">
                          <User className="w-4 h-4" /> Name
                        </label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="John Doe" 
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary flex items-center gap-2">
                          <Mail className="w-4 h-4" /> Email
                        </label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="john@example.com" 
                          className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> How can we help?
                      </label>
                      <textarea 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us a bit about your project or business needs..." 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 mt-4"
                    >
                      <Calendar className="w-5 h-5" />
                      Book a 15-min Call
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
