
import React, { useEffect, useRef } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Coordinate for Birkat al Awame industrial area in Doha
    const officeLocation: [number, number] = [25.1185, 51.5264];

    // Initialize map if it hasn't been already
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // @ts-ignore - L is provided by global script in index.html
      const L = window.L;
      
      if (L) {
        mapInstanceRef.current = L.map(mapContainerRef.current, {
          scrollWheelZoom: false,
          zoomControl: false // Custom placement or just disabled for cleaner look
        }).setView(officeLocation, 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstanceRef.current);

        // Custom icon to match brand colors
        const customIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #ea580c; width: 28px; height: 28px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);"></div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 28]
        });

        const marker = L.marker(officeLocation, { icon: customIcon }).addTo(mapInstanceRef.current);
        
        marker.bindPopup(`
          <div style="width: 240px; overflow: hidden; border-radius: 12px; font-family: 'Inter', sans-serif;">
            <div style="height: 80px; background: url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=400') center/cover no-repeat;"></div>
            <div style="padding: 16px;">
              <h5 style="margin: 0 0 4px 0; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 15px; color: #0f172a;">Fawzan Contracting HQ</h5>
              <p style="margin: 0 0 16px 0; font-size: 12px; color: #64748b; font-weight: 500;">Birkat al Awame, Industrial Zone<br/>Doha, Qatar</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=25.1185,51.5264" 
                 target="_blank" 
                 style="display: block; width: 100%; text-align: center; background: #ea580c; color: white; padding: 10px; border-radius: 10px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none; transition: background 0.3s;">
                 Open in Google Maps
              </a>
            </div>
          </div>
        `, {
          maxWidth: 300,
          className: 'fawzan-popup'
        }).openPopup();
      }
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Contact Hero */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Business Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 backdrop-blur-md border border-orange-600/30 px-4 py-2 rounded-full mb-8">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Connect With Us</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8">
            GET IN <span className="text-orange-600">TOUCH</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We're ready to bring our expertise to your vision. Reach out today for inquiries, quotes, or consultations.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-orange-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Contact Details</h2>
                <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Visit Our Office <br/> in Qatar</h3>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Our headquarters are located in the heart of the Birkat al Awame industrial zone. We welcome visitors for scheduled consultations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 group hover:border-orange-600/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-orange-600/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-500">+974 5592 2249</p>
                </div>

                <div className="p-8 bg-slate-50 rounded-xl border border-slate-100 group hover:border-orange-600/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-orange-600/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-500">contact@fawzancontracting.com</p>
                </div>
              </div>

              {/* Interactive Map Wrapper */}
              <div className="relative group overflow-hidden rounded-xl border border-slate-100 shadow-2xl">
                <div 
                  id="office-map" 
                  ref={mapContainerRef} 
                  className="w-full bg-slate-200"
                />
                <div className="absolute top-4 left-4 z-[20] pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-slate-200">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Live Office Location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:sticky lg:top-32 bg-slate-50 p-10 md:p-14 rounded-xl border border-slate-100 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-4">Service Required</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all appearance-none">
                    <option>Gypsum Board Design</option>
                    <option>MEP Services</option>
                    <option>General Contracting</option>
                    <option>Interior Fit-out</option>
                    <option>Other Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-4">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-xl text-lg font-bold shadow-xl shadow-orange-600/30 transition-all transform hover:-translate-y-1 active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-24 text-center">
            <button 
              onClick={onBack}
              className="inline-flex items-center space-x-3 text-slate-500 hover:text-orange-600 font-semibold transition-colors"
            >
              <span>← Back to Home</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
