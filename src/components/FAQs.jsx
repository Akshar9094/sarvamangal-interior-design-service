import React, { useState } from 'react';

const faqItems = [
  {
    q: 'How long does an interior project take?',
    a: 'Depending on the scope of work and design complexity, a standard residential interior project takes about 45 to 60 days from design sign-off to final handover.'
  },
  {
    q: 'Do you provide 3D design before execution?',
    a: 'Yes! We provide realistic 3D designs and visualization before starting execution so you can see and refine exactly how your space will look.'
  },
  {
    q: 'Can I customize a package as per my needs?',
    a: 'Absolutely. Our packages are 100% customizable. You can add, remove, or modify items to fit your budget and lifestyle preferences.'
  },
  {
    q: 'Do you use branded materials?',
    a: 'Yes, we use only high-quality, certified materials and hardware from trusted brands like Greenply, Century, Hettich, and Hafele.'
  },
  {
    q: 'Is site visit chargeable?',
    a: 'No, our initial site visit, measurements, and design consultation in Surat are completely free of charge.'
  },
  {
    q: 'Do you provide after-sales support?',
    a: 'Yes, we offer dedicated after-sales support and reliable warranties on materials and workmanship for peace of mind.'
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Image - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2 flex-shrink-0">
            <div className="rounded overflow-hidden h-full relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                alt="Cozy interior room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-6 sm:mb-8">
              <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">FAQs</p>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-primary rounded"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-1"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center text-left py-3 group focus:outline-none"
                    >
                      <span className={`text-[12px] sm:text-[13px] font-bold transition-colors duration-300 pr-3 ${isOpen ? 'text-primary' : 'text-gray-800 group-hover:text-primary'}`}>
                        {item.q}
                      </span>
                      <span className="relative flex items-center justify-center w-5 h-5 ml-2 flex-shrink-0">
                        {/* Horizontal bar */}
                        <span className={`absolute w-3.5 h-[2px] bg-gray-400 group-hover:bg-primary transition-colors duration-300`} />
                        {/* Vertical bar */}
                        <span className={`absolute w-[2px] h-3.5 bg-gray-400 group-hover:bg-primary transition-all duration-300 ${isOpen ? 'rotate-90 scale-y-0 opacity-0' : ''}`} />
                      </span>
                    </button>
                    <div
                      className={`faq-content-wrapper ${isOpen ? 'open' : ''}`}
                    >
                      <div className="faq-content">
                        <p className="text-gray-500 text-[11px] leading-relaxed pb-3 pr-6">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
