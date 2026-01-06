
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-orange-600 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1440px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/70 font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
