import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Privacy Policy"
        description="Review MetaForgeAI's privacy policy to understand how we collect, use, and protect your data."
        canonical="https://metaforgeai.vercel.app/privacy-policy"
      />
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      
      <Navigation />
      
      <main className="pt-32 pb-24 container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-secondary hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> 
            Back to Home
          </Link>

          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-aurora opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h1 className="display-lg text-foreground">Privacy Policy</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary font-medium mb-8">Last updated: March 2026</p>
                
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">01.</span> Information We Collect
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      We collect information that you provide directly to us when you use our services, including contact information, business details, and any other information you choose to provide during consultations or service delivery. This ensures we can tailor our AI solutions perfectly to your needs.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">02.</span> How We Use Your Information
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      We use the information we collect to provide, maintain, and improve our AI solutions, as well as to communicate with you about our services, updates, and relevant industry insights. Your data helps us train better models and provide more accurate predictive analytics.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">03.</span> Information Sharing
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      We do not share your personal or proprietary business information with third parties except as described in this privacy policy, with your explicit consent, or as required by law. We maintain strict confidentiality agreements with all our partners.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">04.</span> Data Retention
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      We retain your information only for as long as necessary to fulfill the purposes outlined in this privacy policy and to comply with our legal obligations. Once data is no longer needed, it is securely and permanently deleted from our systems.
                    </p>
                  </section>
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

export default PrivacyPolicy;
