
import React from 'react';

interface HeroProps {
  onContactClick?: () => void;
  onServicesClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, onServicesClick }) => {
  return (
    <section id="home" className="relative min-h-[500px] h-[85vh] w-full flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/40 z-10" />
      
      {/* High-quality Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.41_df212628.jpg" 
          alt="Fawzan Construction Site" 
          className="w-full h-full object-cover transform scale-105"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 max-w-[1440px]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></span>
            <span className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Engineering Excellence</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6 drop-shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Fawzan Contracting: <br className="hidden sm:block" />
            <span className="text-orange-500">Building Quality</span> with Trust
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mb-10 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Leading Civil Engineering, MEP, and General Contracting in Qatar. We turn visions into realities through engineering mastery.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <button 
              onClick={onContactClick}
              className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 px-7 py-3 rounded-lg text-xs md:text-sm font-black uppercase tracking-widest shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              Get a Quote
            </button>
            <button 
              onClick={onServicesClick}
              className="group bg-transparent border border-white/40 hover:border-white text-white px-7 py-3 rounded-lg text-xs md:text-sm font-black uppercase tracking-widest backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Our Services</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
