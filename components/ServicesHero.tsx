
import React from 'react';

const ServicesHero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
          alt="Engineering blueprints" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-[1.5px] w-8 bg-orange-600"></div>
            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px]">Technical Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            OUR <span className="text-orange-500">SERVICES</span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 max-w-xl font-medium leading-relaxed">
            Quality Construction & Engineering Solutions. We combine technical mastery to deliver industry-leading results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
