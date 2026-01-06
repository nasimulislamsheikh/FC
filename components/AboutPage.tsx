
import React from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-1000">
      {/* About Hero Section */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.41_df212628.jpg" 
            alt="Fawzan Infrastructure Project" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-md border border-orange-600/30 px-4 py-2 rounded-full mb-8">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Est. 2015</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
            OUR <span className="text-orange-600">STORY</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Building the foundations of modern Qatar with integrity, innovation, and unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* The Fawzan Legacy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <img 
                src="https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.31_d342d381.jpg" 
                alt="Fawzan Construction Site" 
                className="rounded-xl shadow-2xl relative z-10 w-full object-cover"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Fawzan Legacy</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">Over a Decade of Engineering Excellence</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2015, Fawzan Contracting emerged from a vision to provide specialized, reliable contracting services in the rapidly evolving landscape of Doha, Qatar. What began as a dedicated team of engineers has grown into a premier multi-disciplinary firm.
                </p>
                <p>
                  Today, we are recognized as a leader in Civil Works, MEP services, and high-end Interior Fit-outs. Our journey has been defined by a relentless pursuit of perfection and a deep understanding of the local market's unique challenges.
                </p>
                <p>
                  At Fawzan, we don't just build structures; we craft environments that inspire. Every project is an opportunity to prove that reliability and innovation can go hand-in-hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 md:p-16 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-10 shadow-lg shadow-orange-600/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Our Vision</h4>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                To be the most trusted name in the Middle Eastern construction industry, known for setting the gold standard in technical innovation, sustainability, and architectural integrity. We aim to shape the skylines of tomorrow with structures that endure for generations.
              </p>
            </div>

            <div className="bg-slate-900 p-12 md:p-16 rounded-xl shadow-2xl text-white hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-10 shadow-lg shadow-orange-600/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white mb-6">Our Mission</h4>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Our mission is to deliver comprehensive, high-quality contracting solutions through professional project management, superior workmanship, and a focus on safety. We are committed to exceeding client expectations while fostering a culture of continuous learning and growth for our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Pillars of Our Success</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Our Core Values</h3>
            <p className="text-slate-500 text-lg">
              The principles that guide every decision we make, from the boardroom to the construction site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Integrity', 
                desc: 'We operate with complete transparency and honesty in all our business dealings.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              },
              { 
                title: 'Innovation', 
                desc: 'Embracing modern technologies and non-traditional methods to solve complex problems.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 1.417l-1.885 1.885a1 1 0 01-1.414 0l-1.885-1.885a6 6 0 00-3.86-1.417l-2.387.477a2 2 0 00-1.022.547l-1.162 1.162a1 1 0 01-1.414 0l-1.162-1.162a2 2 0 00-.547-1.022l-.477-2.387a6 6 0 001.417-3.86l1.885-1.885a1 1 0 010-1.414l-1.885-1.885a6 6 0 001.417-3.86l2.387-.477a2 2 0 001.022-.547l1.162-1.162a1 1 0 011.414 0l1.162 1.162a2 2 0 00.547 1.022l2.387.477a6 6 0 003.86-1.417l1.885-1.885a1 1 0 011.414 0l1.885 1.885a6 6 0 003.86 1.417l2.387-.477a2 2 0 001.022-.547l1.162-1.162a1 1 0 011.414 0l1.162 1.162a2 2 0 00.547 1.022l.477 2.387a6 6 0 00-1.417 3.86l-1.885 1.885a1 1 0 010 1.414l1.885 1.885a6 6 0 00-1.417 3.86l-2.387.477z"/></svg>
              },
              { 
                title: 'Quality', 
                desc: 'A commitment to using only the best materials and employing the most skilled craftsmen.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              },
              { 
                title: 'Safety', 
                desc: 'Zero-compromise approach to the well-being of our workforce and the public.',
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-white text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-8 shadow-md border border-slate-100">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Leadership</h2>
             <h3 className="text-3xl md:text-4xl font-black text-white mb-16">Driven by Expertise</h3>
             <div className="flex flex-col md:flex-row justify-center items-center gap-12">
               <div className="group text-center">
                 <div className="w-40 h-40 bg-slate-800 rounded-full mx-auto mb-6 overflow-hidden border-4 border-orange-600 transition-transform group-hover:scale-105 duration-500">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-1">Ahmed Fawzan</h4>
                 <p className="text-orange-500 text-sm font-medium">Founder & Managing Director</p>
               </div>
               <div className="group text-center">
                 <div className="w-40 h-40 bg-slate-800 rounded-full mx-auto mb-6 overflow-hidden border-4 border-slate-700 transition-transform group-hover:border-orange-600 group-hover:scale-105 duration-500">
                   <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" alt="Technical Director" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <h4 className="text-xl font-bold text-white mb-1">Eng. Sarah Al-Dossari</h4>
                 <p className="text-slate-400 text-sm font-medium group-hover:text-orange-500 transition-colors">Technical Director</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      <div className="text-center py-12">
        <button 
          onClick={onBack}
          className="group flex items-center mx-auto space-x-3 text-slate-500 hover:text-orange-600 font-semibold transition-colors"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
