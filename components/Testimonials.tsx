
import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update visible items based on screen width
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(4);
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleItems);

  // Clamp current index when visible items count changes (resize guard)
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleItems, maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px] relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left items-center md:items-start">
          <div className="max-w-2xl w-full">
            <h2 className="text-orange-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3">Client Feedback</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Built on Trust</h3>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              We take pride in our reputation for quality. Hear directly from our partners and clients about their experience with Fawzan Contracting.
            </p>
          </div>
          
          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all shadow-sm active:scale-95"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-visible" ref={containerRef}>
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="px-3 flex-shrink-0"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="h-full bg-white p-8 rounded-xl shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col group hover:border-orange-600/20 transition-all duration-300">
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-1 text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-orange-600/10 group-hover:text-orange-600/20 transition-colors">
                      <svg className="w-8 h-8 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-700 text-sm md:text-base font-bold italic leading-relaxed mb-8 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                    {testimonial.avatarUrl ? (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author} 
                        className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 group-hover:border-orange-600/20 transition-all"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-black text-sm uppercase tracking-tighter group-hover:bg-orange-600 group-hover:text-white transition-all">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                    <div className="text-left">
                      <h4 className="text-slate-900 font-black text-xs md:text-sm">{testimonial.author}</h4>
                      <p className="text-orange-600 text-[10px] font-black uppercase tracking-widest leading-none mt-1">
                        {testimonial.role}
                      </p>
                      <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mt-0.5">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots & Mobile Navigation */}
        <div className="flex flex-col items-center mt-12 space-y-8">
          {/* Dots */}
          <div className="flex justify-center space-x-2.5">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 transition-all duration-500 rounded-full ${
                  index === currentIndex ? 'w-10 bg-orange-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile Arrows */}
          <div className="flex md:hidden items-center space-x-6">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 shadow-md active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-900 shadow-md active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
