import React from 'react';
import { ClipboardEdit, PencilRuler, Layers, Hammer, Home } from 'lucide-react';

const steps = [
  { num: '01', icon: <ClipboardEdit size={28} strokeWidth={1.5} />, title: 'Consultation', desc: 'We understand your\nneeds & preferences.' },
  { num: '02', icon: <PencilRuler size={28} strokeWidth={1.5} />, title: 'Design Planning', desc: 'Our team creates 3D\ndesigns & layouts.' },
  { num: '03', icon: <Layers size={28} strokeWidth={1.5} />, title: 'Material Selection', desc: 'Choose from our wide range\nof quality materials.' },
  { num: '04', icon: <Hammer size={28} strokeWidth={1.5} />, title: 'Execution', desc: 'We execute the project\nwith perfection.' },
  { num: '05', icon: <Home size={28} strokeWidth={1.5} />, title: 'Handover', desc: 'On-time delivery with\ncomplete satisfaction.' },
];

const OurProcess = () => (
  <section id="our-process" className="py-12 sm:py-16 md:py-20 bg-[#faf8f6]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Process</p>
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">From Concept To Creation</h2>
      </div>

      <div className="relative">
        {/* Connecting dotted line - only on md+ where 5-col layout shows */}
        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] border-t-[2px] border-dashed border-[#ddd0c5] z-0"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 relative z-10">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center bg-[#faf8f6] pt-2 group">
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-primary text-white flex items-center justify-center mb-4 sm:mb-5 border-[6px] sm:border-[8px] border-[#f0ebe6] shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                {step.icon}
              </div>
              <span className="text-primary font-bold text-[12px] sm:text-[13px] mb-1">{step.num}</span>
              <h4 className="font-extrabold text-[13px] sm:text-[14px] text-gray-900 mb-1.5 sm:mb-2">{step.title}</h4>
              <p className="text-gray-500 text-[10px] sm:text-[11px] leading-snug whitespace-pre-line">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default OurProcess;