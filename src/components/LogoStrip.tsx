const LogoStrip = () => {
  const partners = [
    { name: 'TechCorp', width: 120 },
    { name: 'InnovateLab', width: 140 },
    { name: 'FutureAI', width: 100 },
    { name: 'CloudSync', width: 130 },
    { name: 'DataFlow', width: 110 },
    { name: 'SmartTech', width: 125 },
    { name: 'NextGen', width: 115 },
    { name: 'AlphaCore', width: 135 },
  ];

  return (
    <section className="py-16 border-y border-white/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="overline mb-4">Trusted by Industry Leaders</p>
          <h2 className="text-2xl font-display font-semibold text-foreground">
            Powering Innovation Across Industries
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 glass rounded-xl hover:glass-strong transition-all duration-300 animate-fade-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                width: `${partner.width}px`,
                height: '80px'
              }}
            >
              <div className="text-secondary font-display font-semibold text-lg opacity-60 hover:opacity-100 transition-opacity duration-300">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;