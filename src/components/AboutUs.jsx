import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ClipboardList, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: <Clock size={24} strokeWidth={1.5} />, value: '9+', label: 'Years Experience' },
  { icon: <ClipboardList size={24} strokeWidth={1.5} />, value: '500+', label: 'Projects Completed' },
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, value: '100%', label: 'Client Satisfaction' },
  { icon: <Users size={24} strokeWidth={1.5} />, value: '50+', label: 'Expert Team' },
];

const AboutUs = () => (
  <section id="about-us" className="py-12 sm:py-16 md:py-20 bg-[#faf8f6]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
        {/* Image */}
        <div className="lg:w-[45%] flex-shrink-0">
          <div className="rounded-lg overflow-hidden h-full shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
              alt="Interior TV Console Unit Design"
              className="w-full h-full object-cover min-h-[280px] sm:min-h-[360px] md:min-h-[400px] bg-gray-200"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-[35%] w-full flex flex-col justify-center py-0 sm:py-4 text-left">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">About Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
            Designing Interiors,<br />
            Creating Happiness
          </h2>
          <p className="text-gray-500 text-[13px] mb-6 leading-relaxed">
            Sarvamangal Interior Choice is a trusted name in the world of interior design in Surat. We believe in blending creativity with functionality to deliver spaces that reflect your personality and lifestyle.
          </p>
          <ul className="space-y-3.5 mb-8">
            {[
              'Customized designs as per your needs',
              'High-quality materials & finish',
              'Timely delivery with perfect execution',
              'Affordable pricing with transparent deals',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-primary flex-shrink-0 fill-primary/10" />
                <span className="text-gray-700 text-[13px] font-semibold">{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-dark text-white px-7 py-3 rounded text-[13px] font-bold hover:bg-black transition-all shadow-md hover:shadow-lg"
            >
              Know More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:w-[20%] flex-shrink-0">
          <div className="bg-white rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-50 p-5 sm:p-6 md:p-8 h-full grid grid-cols-2 lg:flex lg:flex-col justify-between gap-4 sm:gap-6 text-left">
            {stats.map((s, index) => (
              <div key={s.label} className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none mb-1">{s.value}</div>
                  <div className="text-gray-500 text-[10px] sm:text-[11px] font-medium leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;