import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Terms of Service"
        description="Review the terms of service for using MetaForgeAI's website and enterprise AI services."
        canonical="https://metaforgeai.com/terms-of-service"
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
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h1 className="display-lg text-foreground">Terms of Service</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary font-medium mb-8">Last updated: March 2026</p>
                
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">01.</span> Acceptance of Terms
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">02.</span> Use License
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, or use them for any commercial purpose.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">03.</span> Disclaimer
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      The materials on our website and our AI solutions are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">04.</span> Limitations
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      In no event shall MetaForgeAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or our AI services.
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

export default TermsOfService;
