import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const DataSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO 
        title="Data Security"
        description="Learn about MetaForgeAI's enterprise-grade data security measures and how we protect your proprietary business information."
        canonical="https://metaforgeai.vercel.app/data-security"
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
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h1 className="display-lg text-foreground">Data Security</h1>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-primary font-medium mb-8">Last updated: March 2026</p>
                
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">01.</span> Our Commitment
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      At MetaForgeAI, we take the security of your proprietary data and business information seriously. We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">02.</span> Security Measures
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      Our security practices include end-to-end encryption of data in transit and at rest, regular security audits, strict access controls, and continuous monitoring of our AI systems and infrastructure.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">03.</span> Compliance
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      We adhere to relevant data protection regulations and industry best practices to ensure your data is handled with the utmost care and security. Our team is trained on data privacy and security protocols.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span className="text-primary">04.</span> Incident Response
                    </h2>
                    <p className="text-secondary leading-relaxed">
                      In the unlikely event of a data breach, we have a comprehensive incident response plan in place to immediately contain the issue, notify affected parties, and prevent future occurrences.
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

export default DataSecurity;
