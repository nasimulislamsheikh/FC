
import React from 'react';
import { ServiceItem } from '../types';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onQuoteClick?: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onBack, onQuoteClick }) => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={service.imageUrl || "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000"} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-md border border-orange-600/30 px-4 py-2 rounded-full mb-8">
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Specialized Service</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            {service.title.split(' ').map((word, i) => (
              <span key={i} className={i === service.title.split(' ').length - 1 ? "text-orange-600" : ""}>{word} </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column: Image/Visual */}
            <div className="lg:w-1/2 w-full">
              <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={service.imageUrl || "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"} 
                  alt={service.title}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className={`absolute top-6 right-6 w-16 h-16 ${service.color} rounded-lg flex items-center justify-center text-white shadow-xl transform rotate-3`}>
                  <div className="scale-125">{service.icon}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-orange-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Service Overview</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">Excellence in Every Detail</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>{service.description}</p>
                <p>
                  At Fawzan Contracting, we approach every project with a commitment to technical precision and aesthetic harmony. Our {service.title} service is designed to meet the highest standards of safety and sustainability in Qatar's dynamic construction market.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-2">Technical Precision</h4>
                  <p className="text-slate-500 text-xs">Standardized engineering methodologies for optimal results.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-2">Safety Certified</h4>
                  <p className="text-slate-500 text-xs">Strict adherence to international and local safety codes.</p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center">
                <button 
                  onClick={onBack}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-slate-900/10 active:scale-95"
                >
                  Back to Services
                </button>
                <button 
                  onClick={onQuoteClick}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-900 hover:text-white transition-all text-center"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-slate-900 font-black text-2xl mb-8">Need more than one solution?</h4>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Fawzan Contracting offers integrated construction management. We can combine our expertise to deliver a turn-key solution for your project.
          </p>
          <button 
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-orange-600 font-black uppercase tracking-[0.2em] text-xs group"
          >
            <span>Browse All Services</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
