
import React from 'react';
import { ServiceItem, ProjectItem, StatItem, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 's-gypsum',
    title: 'Gypsum Board Design',
    description: 'Enhance your interiors with our bespoke gypsum design services. Our expert team creates stunning ceiling and wall designs tailored to your style and needs. Whether you’re looking for intricate patterns or modern minimalistic styles, our designs will add elegance and sophistication to any space.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/Untitled-design.png',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3V3z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeOpacity="0.5" strokeDasharray="2 2"/>
      </svg>
    ),
    color: 'bg-slate-600'
  },
  {
    id: 's-paint',
    title: 'Outside Paint & GRC Work',
    description: 'Give your space a fresh and vibrant look with our professional painting services. We offer a wide range of colors and finishes to match your vision, ensuring a flawless and long-lasting result. Our experienced painters use high-quality materials to deliver outstanding results that will transform your home or office.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-24-at-11.18.00_355e8f31-900x536.jpg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 11V5a2 2 0 00-2-2H7a2 2 0 00-2 2v6" strokeLinecap="round"/>
        <path d="M21 12H3v4a2 2 0 002 2h14a2 2 0 002-2v-4z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 18v3" strokeLinecap="round"/>
      </svg>
    ),
    color: 'bg-blue-500'
  },
  {
    id: 's-furniture',
    title: 'Furniture',
    description: 'We specialize in designing and manufacturing high-quality cane furniture that combines elegance, comfort, and durability. Our collection includes handcrafted pieces such as chairs, sofas, and tables designed to enhance your home or office with a touch of natural sophistication.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.20_04933c13-1170x536.jpg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 18v3M20 18v3M4 11h16M4 11v7h16v-7M7 11V4a1 1 0 011-1h8a1 1 0 011 1v7" fill="currentColor" fillOpacity="0.1"/>
      </svg>
    ),
    color: 'bg-amber-700'
  },
  {
    id: 's-steel',
    title: 'Steel Work',
    description: 'We provide professional steelwork solutions in Qatar, specializing in fabrication, installation, and repair. Our services cover gates, railings, staircases, and custom designs. With a focus on quality and precision, we ensure every project meets the highest standards.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-24-at-11.18.01_24289918-450x536.jpg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v4m0 0l8 4m-8-4L4 7m8 4v10M4 7v10l8 4" fill="currentColor" fillOpacity="0.1"/>
      </svg>
    ),
    color: 'bg-gray-700'
  },
  {
    id: 's-graffiti',
    title: 'Graphiti Design',
    description: 'Transforming walls and spaces into unique works of art in Qatar. Our skilled artists bring creativity to every project, from bold murals to artistic expressions for homes, businesses, or events that leave a lasting impression.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/s351108049999434943_p2619_i33_w1200.webp',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" strokeOpacity="0.5"/>
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
    color: 'bg-pink-600'
  },
  {
    id: 's-glass',
    title: 'Glass Design',
    description: 'Professional custom glass solutions for residential, commercial, and decorative projects. Our expertise includes glass partitions, doors, windows, mirrors, and intricate decorative designs with a commitment to aesthetics.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_2599e89c-1170x536.jpg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 3h10l3 18H4L7 3z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M8 8l8 8" strokeOpacity="0.5"/>
      </svg>
    ),
    color: 'bg-cyan-400'
  },
  {
    id: 's-exhibition-stands',
    title: 'Exhibition Stands',
    description: 'Custom-designed exhibition stands that capture your brand identity and engage visitors. We handle full fabrication and installation for trade shows and corporate exhibitions.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-3.55.11-PM.jpeg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" fill="currentColor" fillOpacity="0.1"/>
      </svg>
    ),
    color: 'bg-indigo-600'
  },
  {
    id: 's-kiosk',
    title: 'Kiosk Outlets',
    description: 'Professional design and manufacturing of retail kiosk outlets. Optimized for malls and high-traffic areas, combining aesthetic appeal with functional retail space.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.47.47_0e62ca74.jpg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M4 14h16M9 14v6M15 14v6" />
      </svg>
    ),
    color: 'bg-teal-600'
  },
  {
    id: 's-display',
    title: 'Display Units',
    description: 'Custom display units for product showcases and luxury retail environments. We create eye-catching fixtures that highlight your products effectively.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/Display-Units-480x480-1.jpeg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.1"/>
        <path d="M4 10h16M10 4v16" />
      </svg>
    ),
    color: 'bg-rose-600'
  },
  {
    id: 's-wedding',
    title: 'Wedding Events',
    description: 'Expert planning and structural setup for luxury wedding events. From grand stages to intricate decor installations, we create memorable environments.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/Wedding-Events-480x480-1.jpeg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" fill="currentColor" fillOpacity="0.1"/>
      </svg>
    ),
    color: 'bg-pink-400'
  },
  {
    id: 's-launches',
    title: 'Product Launches',
    description: 'Dynamic setups for corporate product launches. We provide the structural and decorative elements needed to make your brand debut spectacular.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/Product-Launches-480x480-1.png',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" fill="currentColor" fillOpacity="0.1"/>
      </svg>
    ),
    color: 'bg-yellow-600'
  },
  {
    id: 's-shows',
    title: 'Shows & Ceremonies',
    description: 'Comprehensive solutions for fashion shows, TV roadshows, and award ceremonies. We deliver professional stages and technical setups for large-scale events.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.48.05_4cfb69e5.jpg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 2v2M12 20v2M2 12h2m16 0h2" />
      </svg>
    ),
    color: 'bg-purple-600'
  },
  {
    id: 's-printing',
    title: 'Indoor & Outdoor Printing',
    description: 'High-quality large format printing services for all your marketing and decorative needs. Durable outdoor banners and high-resolution indoor graphics.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/Indoor-Outdoor-Printing-480x480-1.jpeg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
        <path d="M18 14H6v8h12v-8z" fill="currentColor" fillOpacity="0.1"/>
      </svg>
    ),
    color: 'bg-emerald-600'
  },
  {
    id: 's-signs',
    title: 'Internal External Signs',
    description: 'Professional signage solutions for wayfinding, branding, and safety. We design and install high-visibility signs for both interior and exterior environments.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/Internal-External-Signs-scaled-480x480-1.webp',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v10H3V3z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 13v8M8 21h8" />
      </svg>
    ),
    color: 'bg-orange-700'
  },
  {
    id: 's-mural',
    title: 'Wall Graphics (Mural)',
    description: 'Custom murals and wall graphics that transform ordinary walls into extraordinary artistic focal points for commercial and residential spaces.',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/wall.jpeg',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v14H3V3z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M3 10h18M7 3v14M17 3v14" strokeOpacity="0.3"/>
      </svg>
    ),
    color: 'bg-violet-600'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Luxury Villa Gypsum Mastery',
    category: 'Residential',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.31_d342d381.jpg'
  },
  {
    id: 2,
    title: 'Commercial Mall Kiosk',
    category: 'Commercial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.47.47_0e62ca74.jpg'
  },
  {
    id: 3,
    title: 'Large-Scale Civil Foundation',
    category: 'Infrastructure',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.41_cbb6181e.jpg'
  },
  {
    id: 4,
    title: 'Structural Steel Fabrication',
    category: 'Industrial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.41.50_1e0cced0.jpg'
  },
  {
    id: 5,
    title: 'Modern Office Glass Partition',
    category: 'Commercial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.43.48_2599e89c.jpg'
  },
  {
    id: 6,
    title: 'Premium Handcrafted Furniture',
    category: 'Residential',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.23_f900e024.jpg'
  },
  {
    id: 7,
    title: 'Bespoke Exhibition Pavilion',
    category: 'Commercial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-3.55.11-PM.jpeg'
  },
  {
    id: 8,
    title: 'Urban Infrastructure Site',
    category: 'Infrastructure',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-14.44.42_1fc5b03a.jpg'
  },
  {
    id: 9,
    title: 'Luxury Villa Ceiling Design',
    category: 'Residential',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.37.26_2d38af3e.jpg'
  },
  {
    id: 10,
    title: 'Event Stage & Technical Setup',
    category: 'Commercial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-04-at-3.49.10-PM-1.jpeg'
  },
  {
    id: 11,
    title: 'Heavy Duty Support Steel',
    category: 'Industrial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.41.49_709a2218.jpg'
  },
  {
    id: 12,
    title: 'Architectural Wall Graphics',
    category: 'Commercial',
    imageUrl: 'https://fawzancontracting.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-18-at-01.48.05_4cfb69e5.jpg'
  }
];

export const STATS: StatItem[] = [
  { label: 'Projects Completed', value: '250', suffix: '+' },
  { label: 'Years of Experience', value: '10', suffix: '+' },
  { label: 'Client Satisfaction', value: '100', suffix: '%' },
  { label: 'Skilled Engineers', value: '50', suffix: '+' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote: "Fawzan Contracting transformed our retail space with their incredible gypsum and lighting work. Their attention to detail is unmatched in Doha.",
    author: "Fahad Al-Khalifa",
    role: "Project Manager",
    company: "Pearl Luxury Retail",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    quote: "Professionalism from start to finish. Their steel fabrication team delivered complex structures for our warehouse expansion ahead of schedule.",
    author: "Mark Richardson",
    role: "Operations Director",
    company: "Global Logistics Hub",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    quote: "The best civil engineering partner we've had. They handle site challenges with technical mastery and maintain safety at every level.",
    author: "Sarah Al-Thani",
    role: "Lead Architect",
    company: "Qatar Vision Design",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 4,
    quote: "Highly impressed with their interior fit-out work. They managed to blend modern aesthetics with functional engineering perfectly.",
    author: "James Wilson",
    role: "Managing Director",
    company: "Doha Business Center",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 5,
    quote: "The MEP team is top-tier. They streamlined our complex ventilation systems during the stadium renovations. Highly recommended.",
    author: "Khalid Mansour",
    role: "Facility Manager",
    company: "Sport City Doha",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 6,
    quote: "Reliability is rare in construction, but Fawzan Contracting delivered our housing complex 2 weeks early without any quality compromises.",
    author: "Fatima Al-Jaber",
    role: "CEO",
    company: "Jaber Real Estate",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 7,
    quote: "From the initial GRC work to the final structural steel, their team showed passion and precision. A standard for the industry.",
    author: "Robert Brown",
    role: "Chief Architect",
    company: "Urban Link Designs",
    avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 8,
    quote: "Truly exceptional service. Their commitment to safety and quality during our high-rise project in West Bay was exemplary.",
    author: "Yousef Al-Baker",
    role: "Development Lead",
    company: "West Bay Tower Group",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
  }
];
