import { TrendingUp, ShieldCheck, Users } from 'lucide-react';

const CTABannerSection = () => (
  <section className="py-24 bg-white px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
    <style>{`
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
      .animate-float-medium { animation: float-medium 3.5s ease-in-out infinite; }
    `}</style>
    
    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      
      {/* Text on the Left */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] uppercase tracking-widest leading-tight">
          Ready To <span className="text-lime-500">Evolve?</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Join the ranks of industry leaders who have successfully navigated the digital landscape with our proven methodologies and cutting-edge solutions.
        </p>
        
        {/* Animated Glowing Stroke Button */}
        <button className="relative inline-flex overflow-hidden rounded-lg p-[2px] mt-4 shadow-[0_0_15px_rgba(132,204,22,0.4)] hover:shadow-[0_0_25px_rgba(132,204,22,0.6)] transition-shadow duration-300 group">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#84cc16_50%,transparent_100%)]"></span>
          <span className="relative flex h-full w-full items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#003366] transition-colors group-hover:bg-lime-50">
            Start Your Digital Transformation
          </span>
        </button>
      </div>

      {/* Visuals on the Right */}
      <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center order-1 md:order-2">
        {/* Main Image */}
        <div className="relative z-10 w-[80%] h-[95%] flex items-center justify-center">
           <img 
            src="https://res.cloudinary.com/dcjufshrh/image/upload/v1772453621/Layer_0_xv4kgp.png" 
            alt="Professional holding laptop" 
            className="w-full h-full object-contain drop-shadow-2xl" 
          />
        </div>
        
        {/* Dynamic Pop-ups */}
        <div className="absolute top-4 right-0 md:-right-4 bg-white p-4 rounded-xl shadow-xl z-20 animate-float-slow border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-blue-50 rounded-full">
              <TrendingUp className="w-6 h-6 text-[#005599]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#003366]">Digital Growth</div>
              <div className="text-xs font-semibold text-lime-500">+45% ROI</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 md:-left-8 bg-white p-4 rounded-xl shadow-xl z-20 animate-float-medium border border-gray-100" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-lime-50 rounded-full">
              <ShieldCheck className="w-5 h-5 text-lime-500" />
            </div>
            <div className="text-sm font-bold text-[#003366]">Secure Solutions</div>
          </div>
        </div>

        <div className="absolute top-1/2 left-4 md:-left-2 bg-white p-3 rounded-xl shadow-xl z-20 animate-float-slow border border-gray-100" style={{ animationDelay: '2s' }}>
           <div className="flex items-center gap-2">
             <Users className="w-5 h-5 text-[#005599]"/>
             <span className="text-sm font-bold text-[#003366]">Industry Leaders</span>
           </div>
        </div>

        {/* Background decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-lime-200 to-blue-200 rounded-full blur-3xl -z-10 opacity-60"></div>
      </div>

    </div>
  </section>
);

export default CTABannerSection;
