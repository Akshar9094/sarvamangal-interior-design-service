import React from 'react';
import { MonitorPlay, ShieldCheck, Clock, Users, Headset } from 'lucide-react';

const features = [
  { icon: <MonitorPlay size={28} strokeWidth={1.2} />, title: '3D Design', desc: 'Visualize your space\nbefore execution' },
  { icon: <ShieldCheck size={28} strokeWidth={1.2} />, title: 'Quality Material', desc: 'Premium quality\nmaterials used' },
  { icon: <Clock size={28} strokeWidth={1.2} />, title: 'Timely Delivery', desc: 'On-time project\ncompletion' },
  { icon: <Users size={28} strokeWidth={1.2} />, title: 'Expert Team', desc: 'Skilled & experienced\nprofessionals' },
  { icon: <Headset size={28} strokeWidth={1.2} />, title: 'Customer Support', desc: 'Dedicated support\nthroughout' },
];

const Features = () => (
  <section className="bg-white pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 justify-items-start border-y border-dashed border-gray-200 py-8 sm:py-10">
        {features.map((f, i) => (
          <div key={f.title} className="flex items-center gap-3 sm:gap-4 group w-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
              {f.icon}
            </div>
            <div>
              <h4 className="font-extrabold text-[12px] sm:text-[13px] text-gray-900 leading-tight mb-0.5">{f.title}</h4>
              <p className="text-gray-500 text-[10px] sm:text-[11px] leading-snug whitespace-pre-line">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Features;