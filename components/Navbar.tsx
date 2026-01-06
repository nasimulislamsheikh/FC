
import React, { useState, useEffect, useCallback } from 'react';
import { SERVICES } from '../constants';

interface NavbarProps {
  currentView: 'home' | 'about' | 'services' | 'projects' | 'contact' | 'service-detail';
  setView: (view: 'home' | 'about' | 'services' | 'projects' | 'contact') => void;
  onServiceSelect?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, onServiceSelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Using passive: true is critical for scroll performance on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (view: string) => {
    const target = view.toLowerCase() as any;
    setView(target);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (id: string) => {
    if (onServiceSelect) {
      onServiceSelect(id);
      setIsMobileMenuOpen(false);
      setIsMobileServicesOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'About', view: 'about' },
    { name: 'Services', view: 'services', hasSubmenu: true },
    { name: 'Projects', view: 'projects' },
    { name: 'Contact', view: 'contact' },
  ];

  const socialIcons = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'X',
      href: 'https://x.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
        </svg>
      )
    }
  ];

  const textContrastClass = isScrolled || currentView !== 'home' ? 'text-slate-900' : 'text-white';
  const bgContrastClass = isScrolled || currentView !== 'home' ? 'bg-slate-900' : 'bg-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'glass-nav py-2 shadow-lg' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-[1440px]">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer relative z-[110]" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-orange-600 rounded flex items-center justify-center transform rotate-45 shadow-md group">
              <span className="text-white font-black text-lg transform -rotate-45 group-hover:scale-110 transition-transform">F</span>
            </div>
            <span className={`text-lg md:text-xl font-black tracking-tighter transition-colors duration-300 ${isMobileMenuOpen ? 'text-slate-900' : textContrastClass}`}>
              FAWZAN
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group py-4">
                <button 
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center space-x-1 text-[13px] font-bold tracking-widest uppercase hover:text-orange-600 transition-all relative ${
                    (item.view === currentView || (item.view === 'services' && currentView === 'service-detail'))
                    ? 'text-orange-600' 
                    : isScrolled || currentView !== 'home' ? 'text-slate-600' : 'text-white/90'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasSubmenu && (
                    <svg className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${item.view === currentView ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </button>

                {/* Desktop Dropdown */}
                {item.hasSubmenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                    <div className="bg-white rounded-lg shadow-2xl border border-slate-100 overflow-hidden py-3">
                      <div className="max-h-[60vh] overflow-y-auto px-2 space-y-1 custom-scrollbar">
                        {SERVICES.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleServiceClick(service.id)}
                            className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center space-x-3 group/item"
                          >
                            <div className={`w-8 h-8 rounded-md ${service.color} bg-opacity-10 flex items-center justify-center text-slate-700 group-hover/item:text-orange-600 transition-colors`}>
                              <div className="scale-75">{service.icon}</div>
                            </div>
                            <span className="text-xs font-bold text-slate-700 group-hover/item:text-orange-600 transition-colors line-clamp-1">{service.title}</span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100 px-4">
                        <button 
                          onClick={() => handleNavClick('services')}
                          className="w-full text-center text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 hover:text-slate-900 transition-colors"
                        >
                          View All Services
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-orange-600 hover:bg-slate-900 text-white px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-[110] p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 transition-all duration-300 transform origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-1 bg-slate-900' : bgContrastClass}`}></span>
              <span className={`w-full h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -translate-x-full' : bgContrastClass}`}></span>
              <span className={`w-full h-0.5 transition-all duration-300 transform origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-1 bg-slate-900' : bgContrastClass}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Off-Canvas Mobile Menu Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[120] transition-opacity duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Off-Canvas Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[300px] sm:w-[350px] bg-white z-[130] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24 overflow-y-auto no-scrollbar">
          <div className="flex flex-col space-y-6">
            {navLinks.map((item, idx) => (
              <div key={item.name} className={`transform transition-all duration-700 delay-[${idx * 75}ms] ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavClick(item.view)}
                    className={`text-lg font-black uppercase tracking-tighter text-left hover:text-orange-600 transition-colors ${item.view === currentView ? 'text-orange-600' : 'text-slate-900'}`}
                  >
                    {item.name}
                  </button>
                  {item.hasSubmenu && (
                    <button 
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`p-2 rounded-lg transition-all ${isMobileServicesOpen ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-400'}`}
                    >
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.hasSubmenu && (
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col space-y-4 pl-4 border-l-2 border-slate-100">
                      {SERVICES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleServiceClick(service.id)}
                          className="text-left text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors"
                        >
                          {service.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-10 pt-10 border-t border-slate-100 transform transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Need Assistance?</p>
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-orange-600 text-white py-4 rounded-lg text-sm font-black uppercase tracking-widest shadow-xl shadow-orange-600/20 active:scale-95 transition-transform"
            >
              Get a Quote
            </button>
            
            {/* Real Social Media Icons in Mobile Menu */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
