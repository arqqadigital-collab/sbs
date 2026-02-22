const logos = [
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752219/LuxTech_rjuwvl.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752218/Hiroll_xfsrou.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752218/Logo-on-wood_vi5ogu.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752218/Layer_1_q4tkeh.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752217/gest_pgbctj.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Boss_pnkmjq.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752213/Future_Group_yjy26p.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752213/Eventive_zuiglc.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752213/etal_eg_logo_oaongs.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Dazzle_Advertising_xe3ede.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Arab_Medical_uhiqya.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/Debacker_s_n74nwz.png",
  "https://res.cloudinary.com/dcjufshrh/image/upload/v1771752212/DSF_yk7rsv.png"
];

const TrustedSection = () => (
  <section className="py-20 bg-gray-50 overflow-hidden">
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 50s linear infinite;
        display: flex;
        width: max-content;
      }
      .animate-marquee:hover {
        animation-play-state: paused;
      }
      .logo-track {
        display: flex;
        align-items: center;
        gap: 4rem;
        padding: 0 2rem;
      }
    `}</style>
    
    <div className="max-w-6xl mx-auto text-center px-4 mb-12">
      <h2 className="text-3xl font-bold text-[#003366] mb-4">
        Trusted by <br/>
        <span className="text-lime-500">Leading Organizations</span>
      </h2>
      <p className="text-gray-500 max-w-3xl mx-auto">
        Partnering with enterprises and healthcare institutions to deliver impactful digital transformation solutions across the MENA region and the United States
      </p>
    </div>
    
    <div className="w-full relative">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="animate-marquee">
        {/* First Track */}
        <div className="logo-track">
          {logos.map((logo, index) => (
            <img 
              key={`logo-1-${index}`} 
              src={logo} 
              alt="Client Logo" 
              className="h-16 md:h-20 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
        {/* Duplicate Track for seamless loop */}
        <div className="logo-track">
          {logos.map((logo, index) => (
            <img 
              key={`logo-2-${index}`} 
              src={logo} 
              alt="Client Logo" 
              className="h-16 md:h-20 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedSection;
