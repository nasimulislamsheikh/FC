
import React from 'react';

const PROJECT_IMAGES = [
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.48.05_4cfb69e5.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.47.47_0e62ca74.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.45.22_da80e6fc.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_f2d70e9d.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_c666849d.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_39800185.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_2599e89c.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_95ad3ad5.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_8e434544.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_2f113c59.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.47_3084337c.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.42.30_f072ec51.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.41.50_1e0cced0.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.41.49_709a2218.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.39.37_e5e7334f.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.31_d342d381.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.31_9fee172d.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.31_3c9a32fb.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.30_cf2e91d6.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.30_3a458711.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.29_2f4a9c66.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.26_27a192a9.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.26_2d38af3e.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.26_1cadabcc.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.25_ab9946ff.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.25_a8077dfd.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.25_4546e7b7.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.24_f74d1c6a.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.24_59088e2f.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.24_3b12d2ac.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.23_f900e024.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.23_5b3e61ba.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.22_f706e680.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.22_85ef6830.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.21_b6cb0405.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.21_1a0c3bdb.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.20_d781283c.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.20_04933c13.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.19_14d75acf.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.18_1769c152.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.18_97f4854e.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.18_4dac359a.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.18_1df83acc.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-3.49.10-PM-1.jpeg",
  "https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-3.55.11-PM.jpeg",
  "https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.41_cbb6181e.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.42_1fc5b03a.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.41_df212628.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/Untitled-design.png",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-24-at-11.18.00_355e8f31-900x536.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.20_04933c13-1170x536.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-24-at-11.18.01_24289918-450x536.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/s351108049999434943_p2619_i33_w1200.webp",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_2599e89c-1170x536.jpg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/Display-Units-480x480-1.jpeg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/Wedding-Events-480x480-1.jpeg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/Product-Launches-480x480-1.png",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/Indoor-Outdoor-Printing-480x480-1.jpeg",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/Internal-External-Signs-scaled-480x480-1.webp",
  "https://fawzancontracting.com/wp-content/uploads/2025/01/wall.jpeg"
];

const UNIQUE_IMAGES = Array.from(new Set(PROJECT_IMAGES));

interface ProjectGalleryProps {
  onBack: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-1000">
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
            PROJECT <span className="text-orange-600">GALLERY</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            A comprehensive look at our diverse expertise across Qatar. From civil works to bespoke furniture.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {UNIQUE_IMAGES.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl bg-slate-100 break-inside-avoid shadow-sm group">
                <img 
                  src={img} 
                  alt={`Project ${idx + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button onClick={onBack} className="inline-flex items-center space-x-2 bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-orange-600 transition-all">
              <span>Back Home</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectGallery;
