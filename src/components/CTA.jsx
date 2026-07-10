import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTA = () => (
  <section className="py-8 sm:py-10 bg-dark">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left w-full sm:w-auto">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary bg-primary/10 flex-shrink-0">
          <Phone size={22} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-white text-lg sm:text-xl font-extrabold tracking-tight mb-1">Let's Design Your Dream Space</h3>
          <p className="text-gray-400 text-[12px] sm:text-[13px]">Get a free consultation today!</p>
        </div>
      </div>
      <Link
        to="/contact"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-dark px-8 py-3.5 rounded text-[13px] font-bold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
      >
        Contact Us Now <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

export default CTA;