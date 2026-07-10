import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="py-24 bg-[#f9f9f9] min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-primary text-6xl md:text-8xl lg:text-[9.5rem] font-extrabold leading-none tracking-tight mb-2">
              404
            </h1>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Page Not Found
            </h2>
            <p className="text-gray-500 text-[13px] md:text-sm mb-10 leading-relaxed max-w-md">
              Oops! The page you are looking for doesn't exist. Let's get you back on track.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#703b1a] hover:bg-[#572e14] text-white px-8 py-3.5 rounded text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <ArrowLeft size={14} /> Back To Home
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-100 max-h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000"
                alt="Aesthetic lounge chair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;