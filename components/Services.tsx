
import React, { useState, useRef, useEffect } from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onServiceClick?: (id: string) => void;
}

const Interactive3DIcon: React.FC<{ icon: React.ReactNode; color: string }> = ({ icon, color }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10; 
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={iconRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center will-change-transform"
      style={{ perspective: '800px' }}
    >
      {/* Base Layer - Glass Container */}
      <div 
        className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg transition-transform duration-200 ease-out"
        style={{ 
          transform: isTouchDevice ? 'none' : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(0px)`,
        }}
      />
      
      {/* Accent Layer */}
      <div 
        className={`absolute inset-1.5 rounded-lg ${color} opacity-85 transition-transform duration-200 ease-out shadow-inner`}
        style={{ 
          transform: isTouchDevice ? 'none' : `rotateX(${rotate.x * 1.1}deg) rotateY(${rotate.y * 1.1}deg) translateZ(10px)`,
        }}
      />

      {/* Icon Content - Ensuring high visibility */}
      <div 
        className="relative z-10 text-white flex items-center justify-center transition-transform duration-200 ease-out"
        style={{ 
          transform: isTouchDevice ? 'scale(1)' : `rotateX(${rotate.x * 1.3}deg) rotateY(${rotate.y * 1.3}deg) translateZ(20px) scale(1.1)`,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
        }}
      >
        <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-20 md:py-36 bg-white relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 max-w-[1440px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-28 reveal">
          <div className="inline-flex items-center space-x-3 px-4 py-2 mb-6 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
            <h2 className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              Our Expertise
            </h2>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Comprehensive Engineering <br className="hidden md:block" /> & Design Excellence
          </h3>
          <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            From industrial steel structures to luxury interior designs, we provide precision-led contracting solutions across Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => onServiceClick?.(service.id)}
              className="reveal group relative flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-visible cursor-pointer transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] active:scale-[0.98] will-change-transform"
              style={{ transitionDelay: `${(index % 4) * 40}ms` }}
            >
              {/* Media Container with clean rounded-t-2xl */}
              <div className="relative h-60 sm:h-64 overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {service.imageUrl ? (
                   <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full ${service.color} opacity-20`} />
                )}
                
                {/* 3D Icon - Balanced Position */}
                <div className="absolute -bottom-7 left-6 z-20">
                  <Interactive3DIcon icon={service.icon} color={service.color} />
                </div>
              </div>
              
              <div className="p-6 md:p-8 pb-10 pt-12 flex flex-col flex-grow relative bg-white rounded-b-2xl">
                <span className="absolute top-4 right-6 text-slate-100 font-black text-4xl md:text-5xl select-none group-hover:text-orange-600/10 transition-colors duration-500">
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                <div className="mb-4 relative z-10">
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h4>
                </div>
                
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-3 text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all">
                  <span className="relative">
                    View Specifications
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Subtle accent bar */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-slate-100 group-hover:bg-orange-600 transition-colors duration-300 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
