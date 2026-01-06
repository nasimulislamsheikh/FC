
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ServicesHero from './components/ServicesHero';
import ProjectGallery from './components/ProjectGallery';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import FloatingContactButtons from './components/FloatingContactButtons';
import Testimonials from './components/Testimonials';
import ServiceDetailPage from './components/ServiceDetailPage';
import { SERVICES } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'services' | 'projects' | 'contact' | 'service-detail'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('active');
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [view]);

  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    setView('service-detail');
    window.scrollTo({ top: 0, behavior: 'auto' }); 
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen selection:bg-orange-600 selection:text-white">
      <Navbar 
        currentView={view === 'service-detail' ? 'services' : view as any} 
        setView={(v) => { setView(v as any); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
        onServiceSelect={handleServiceClick}
      />
      
      {view === 'home' && (
        <main className="overflow-x-hidden">
          <div className="perf-section"><Hero 
            onContactClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            onServicesClick={() => { setView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          /></div>
          
          <div className="perf-section reveal"><Stats /></div>
          
          <section id="about" className="py-16 md:py-20 bg-white perf-section">
            <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                <div className="w-full lg:w-1/2 order-2 lg:order-1 reveal">
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[16/10] sm:aspect-[4/3] bg-slate-100">
                      <video 
                        src="https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Video-2025-01-18-at-01.39.39_b22630d7.mp4" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-orange-600 px-5 py-5 md:px-6 md:py-6 rounded-lg md:rounded-xl text-white shadow-xl z-20">
                      <div className="text-2xl md:text-3xl font-black mb-1">10+</div>
                      <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-80 whitespace-nowrap">Years Success</div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 order-1 lg:order-2 reveal">
                  <h2 className="text-orange-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3">Who We Are</h2>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">A Legacy Built on Quality</h3>
                  <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed font-medium">
                    Fawzan Contracting stands as Qatar's premier firm for engineering precision. We manage every build with rigorous professional standards.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      </div>
                      <span className="font-bold text-slate-900 text-xs md:text-sm">Civil Engineering</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      </div>
                      <span className="font-bold text-slate-900 text-xs md:text-sm">Advanced MEP</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="group mt-8 inline-flex items-center space-x-2 text-orange-600 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-colors"
                  >
                    <span>Read Our Story</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="perf-section"><Services onServiceClick={handleServiceClick} /></div>
          
          <div className="perf-section reveal"><WhyChooseUs /></div>

          <div className="perf-section reveal"><QuoteSection /></div>

          <div className="perf-section"><Projects onShowAll={() => { setView('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} /></div>

          <div className="perf-section reveal"><Testimonials /></div>

          <div className="perf-section reveal"><ClientLogos /></div>

          <div className="perf-section reveal"><CTASection onContactClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} /></div>
        </main>
      )}

      {view === 'about' && (
        <AboutPage onBack={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      )}

      {view === 'services' && (
        <div className="animate-in fade-in duration-700">
          <ServicesHero />
          <Services onServiceClick={handleServiceClick} />
        </div>
      )}

      {view === 'projects' && (
        <ProjectGallery onBack={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      )}

      {view === 'contact' && (
        <ContactPage onBack={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      )}

      {view === 'service-detail' && selectedService && (
        <ServiceDetailPage 
          service={selectedService} 
          onBack={() => { setView('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          onQuoteClick={() => { setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
        />
      )}

      <Footer onNavClick={(v) => { setView(v as any); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
      
      {/* Contact buttons outside of potentially transformed parent containers */}
      <FloatingContactButtons />
    </div>
  );
};

// Sub-components
const WhyChooseUs = () => (
  <section className="py-16 md:py-20 bg-slate-50 gpu">
    <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-orange-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3">Value Proposition</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">Why Choose Us</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { title: 'Quality First', desc: 'Every project undergoes rigorous inspection and premium material checks.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
          { title: 'Expert Engineering', desc: 'Our technical team comprises industry-leading engineers with local expertise.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
          { title: 'Rigorous Safety', desc: 'We maintain a gold-standard HSE policy for zero-accident records.', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
          { title: 'Time Precision', desc: 'Our methodologies guarantee delivery on schedule every time.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white rounded-xl shadow-md border border-slate-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon}/></svg>
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tighter">{item.title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="py-20 md:py-24 bg-slate-900 overflow-hidden relative perf-section gpu">
    <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-[1440px]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight italic mb-10">
          "Workmanship of the highest caliber and delivery with absolute precision are the hallmarks of our firm."
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-16 h-[1.5px] bg-orange-600 mb-4"></div>
          <div className="font-black text-orange-500 uppercase tracking-[0.2em] text-sm md:text-base">Ahmed Fawzan</div>
          <div className="text-slate-500 font-bold uppercase tracking-widest text-[9px]">Managing Director</div>
        </div>
      </div>
    </div>
  </section>
);

const ClientLogos = () => (
  <section className="py-8 md:py-10 bg-white border-y border-slate-100 perf-section">
    <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-30 grayscale">
        {['Constructo', 'BuildIt', 'SteelCore', 'MetroDesign', 'UrbanLink'].map(client => (
          <span key={client} className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">
            {client.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = ({ onContactClick }: { onContactClick: () => void }) => (
  <section id="contact" className="py-16 md:py-20 bg-white perf-section">
    <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
      <div className="bg-orange-600 rounded-2xl p-10 sm:p-14 md:p-16 text-center relative overflow-hidden shadow-xl gpu">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Build the Future?</h2>
          <p className="text-base md:text-lg text-white/90 mb-10 font-medium leading-relaxed">
            Partner with technical specialists. Reach out for a consultation.
          </p>
          <button 
            onClick={onContactClick}
            className="bg-white text-orange-600 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-lg transition-all"
          >
            Start Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default App;
