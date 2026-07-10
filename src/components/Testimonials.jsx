import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Nilesh Patel',
    location: 'Surat',
    stars: 5,
    text: 'Very professional team and innovative designs. They made our dream home a reality. Highly recommended!',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Heena Shah',
    location: 'Surat',
    stars: 5,
    text: 'Excellent service, quality work and on-time delivery. Our experience with Sarvamangal Interior was great.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Kiran Desai',
    location: 'Surat',
    stars: 5,
    text: 'They understood our requirements perfectly and delivered beyond our expectations.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get 3 visible testimonials (circular)
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return result;
  };

  const visible = getVisible();

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:-left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:text-primary transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 px-10 sm:px-12 md:px-0">
            {visible.map((t, i) => (
              <div 
                key={`${t.name}-${i}`} 
                className={`bg-white border border-gray-100 rounded-lg p-5 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative text-left hover:shadow-lg transition-shadow duration-300 ${
                  i > 0 ? 'hidden md:block' : ''
                }`}
              >
                <Quote size={36} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary/10 fill-current" />
                
                <div className="flex gap-1 mb-4 sm:mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={13} className="text-[#f59e0b] fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-[12px] sm:text-[13px] leading-relaxed mb-6 sm:mb-8 min-h-[50px] sm:min-h-[60px]">"{t.text}"</p>
                
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-50">
                  {t.img ? (
                    <img src={t.img} alt={t.name} className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover bg-gray-200 border-2 border-primary/20" />
                  ) : (
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-gray-900 text-[12px] sm:text-[13px]">{t.name}</div>
                    <div className="text-gray-500 text-[10px] sm:text-[11px]">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 sm:-right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:text-primary transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;