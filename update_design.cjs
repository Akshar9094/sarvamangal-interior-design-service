const fs = require('fs');
const path = require('path');

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a65929',
        'primary-dark': '#8a471f',
        dark: '#2a1f1b',
        light: '#f9f9f9',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}`;

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <title>Sarvamangal Interior Choice</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

const headerJsx = `import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Clock, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'About Us', 'Services', 'Packages', 'Our Work', 'Testimonials', 'Contact Us'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-dark text-[#e0d6ce] text-[11px] py-2 px-4 flex justify-between items-center lg:px-12 font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><MapPin size={12} /> Surat, Gujarat</span>
          <span className="hidden sm:flex items-center gap-2"><Mail size={12} /> sarvamangalinterior@gmail.com</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:flex items-center gap-2"><Clock size={12} /> Mon - Sat: 10:00 AM - 8:00 PM</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={\`transition-all duration-300 \${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'}\`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-[3px] border-dark rounded-full flex flex-col items-center justify-center relative">
               <span className="text-dark font-extrabold text-xl leading-none" style={{ fontFamily: 'serif' }}>S</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-extrabold text-dark text-[18px] leading-none tracking-tight">SARVAMANGAL</div>
              <div className="text-[9px] text-dark font-semibold tracking-[0.2em] mt-0.5">INTERIOR CHOICE</div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={\`#\${link.toLowerCase().replace(/ /g, '-')}\`}
                  className={\`text-[13px] font-bold transition-colors \${link === 'Home' ? 'text-primary' : 'text-gray-800 hover:text-primary'}\`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Phone */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+919824338383"
              className="flex items-center gap-2 bg-dark text-white px-5 py-2.5 rounded text-[13px] font-bold hover:bg-black transition-colors"
            >
              <Phone size={14} className="text-primary fill-primary" /> 98243 38383
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;`;

const heroJsx = `import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: \`url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000')\` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <p className="text-primary text-3xl md:text-4xl mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>Transforming Spaces,</p>
          <h1 className="text-white text-5xl md:text-[5.5rem] font-extrabold leading-[1.05] mb-6 tracking-tight">
            TRANSFORMING<br/>LIVES
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            We create beautiful, functional & luxurious<br/>interiors tailored to your lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded text-sm font-bold hover:bg-primary-dark transition-all"
            >
              Our Services <ArrowRight size={16} />
            </a>
            <a
              href="#our-work"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-3.5 rounded text-sm font-bold hover:bg-white hover:text-dark transition-all"
            >
              View Our Work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/50 hover:bg-white hover:text-dark text-white rounded-full flex items-center justify-center transition-all">
        <ChevronLeft size={20} />
      </button>
      <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/50 hover:bg-white hover:text-dark text-white rounded-full flex items-center justify-center transition-all">
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        <button className="w-8 h-2.5 rounded-full bg-primary transition-all"></button>
        <button className="w-2.5 h-2.5 rounded-full bg-white/50 transition-all"></button>
        <button className="w-2.5 h-2.5 rounded-full bg-white/50 transition-all"></button>
      </div>
    </section>
  );
};
export default Hero;`;

const packagesJsx = `import React from 'react';
import { ChevronLeft, ChevronRight, Home, Building, Castle, Crown, Map } from 'lucide-react';

const packages = [
  { name: '1 BHK PACKAGE', price: '₹ 3.68 Lakh', desc: 'Smart & stylish interiors\\nfor comfortable living.', icon: <Home size={28} strokeWidth={1.5} /> },
  { name: '2 BHK PACKAGE', price: '₹ 4.68 Lakh', desc: 'Elegant & functional\\ndesign for families.', icon: <Building size={28} strokeWidth={1.5} /> },
  { name: '3 BHK PACKAGE', price: '₹ 6.68 Lakh', desc: 'Spacious interiors with\\npremium comfort.', icon: <Map size={28} strokeWidth={1.5} /> },
  { name: '4 BHK PACKAGE', price: '₹ 9.68 Lakh', desc: 'Luxury designs for a\\ngrand lifestyle.', icon: <Castle size={28} strokeWidth={1.5} /> },
  { name: '5 BHK PACKAGE', price: '₹ 16.29 Lakh', desc: 'Exclusivity, elegance &\\nunmatched quality.', icon: <Crown size={28} strokeWidth={1.5} /> },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-12">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Packages</p>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">Choose The Best Package For You</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded"></div>
        </div>

        <div className="relative">
          <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
            <ChevronLeft size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {packages.map((pkg, i) => (
              <div key={pkg.name} className="bg-white rounded border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col items-center pt-8 text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-[60px] h-[60px] rounded-full border-2 border-primary flex items-center justify-center mb-5 text-primary bg-white group-hover:bg-primary group-hover:text-white transition-colors">
                  {pkg.icon}
                </div>
                <div className="px-4 pb-6 flex-grow flex flex-col items-center">
                  <h3 className="font-extrabold text-[14px] text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed whitespace-pre-line">{pkg.desc}</p>
                </div>
                <div className="w-full bg-primary py-3 text-center text-white font-bold text-[14px]">
                  {pkg.price}
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Packages;`;

const featuresJsx = `import React from 'react';
import { MonitorPlay, ShieldCheck, Clock, Users, Headset } from 'lucide-react';

const features = [
  { icon: <MonitorPlay size={28} strokeWidth={1} />, title: '3D Design', desc: 'Visualize your space\\nbefore execution' },
  { icon: <ShieldCheck size={28} strokeWidth={1} />, title: 'Quality Material', desc: 'Premium quality\\nmaterials used' },
  { icon: <Clock size={28} strokeWidth={1} />, title: 'Timely Delivery', desc: 'On-time project\\ncompletion' },
  { icon: <Users size={28} strokeWidth={1} />, title: 'Expert Team', desc: 'Skilled & experienced\\nprofessionals' },
  { icon: <Headset size={28} strokeWidth={1} />, title: 'Customer Support', desc: 'Dedicated support\\nthroughout' },
];

const Features = () => (
  <section className="bg-white pb-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-wrap justify-between items-center gap-6 border-y border-gray-100 py-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-4 group">
            <div className="text-primary">{f.icon}</div>
            <div>
              <h4 className="font-extrabold text-[13px] text-gray-900 leading-tight mb-0.5">{f.title}</h4>
              <p className="text-gray-500 text-[11px] leading-snug whitespace-pre-line">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Features;`;

const aboutUsJsx = `import React from 'react';
import { Clock, ClipboardList, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: <Clock size={24} strokeWidth={1.5} />, value: '9+', label: 'Years Experience' },
  { icon: <ClipboardList size={24} strokeWidth={1.5} />, value: '500+', label: 'Projects Completed' },
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, value: '100%', label: 'Client Satisfaction' },
  { icon: <Users size={24} strokeWidth={1.5} />, value: '50+', label: 'Expert Team' },
];

const AboutUs = () => (
  <section id="about-us" className="py-10 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Image */}
        <div className="lg:w-[45%] flex-shrink-0">
          <div className="rounded overflow-hidden h-full">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000"
              alt="Interior Design"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-[35%] flex flex-col justify-center py-4">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-[32px] font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
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
            <a
              href="#contact-us"
              className="inline-flex items-center gap-2 bg-dark text-white px-7 py-3 rounded text-[13px] font-bold hover:bg-black transition-all"
            >
              Know More About Us <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:w-[20%] flex-shrink-0">
          <div className="bg-white rounded shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-50 p-8 h-full flex flex-col justify-between gap-6">
            {stats.map((s, index) => (
              <div key={s.label} className="flex items-center gap-4">
                <div className="text-primary flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gray-900 leading-none mb-1">{s.value}</div>
                  <div className="text-gray-500 text-[11px] font-medium leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutUs;`;

const ourWorkJsx = `import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Commercial'];

const projects = [
  { id: 1, img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
  { id: 2, img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600' },
  { id: 3, img: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600' },
  { id: 5, img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
];

const OurWork = () => {
  const [active, setActive] = useState('All');

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">Explore Our Creative Work</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={\`px-6 py-2 rounded text-[13px] font-bold transition-all duration-200 \${
                active === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:text-primary'
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="overflow-hidden rounded group cursor-pointer">
              <img
                src={p.img}
                alt="Project"
                className="w-full h-48 md:h-[280px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact-us"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded text-[13px] font-bold hover:bg-primary-dark transition-all"
          >
            View More Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default OurWork;`;

const ourProcessJsx = `import React from 'react';
import { ClipboardEdit, PencilRuler, Layers, Hammer, Home } from 'lucide-react';

const steps = [
  { num: '01', icon: <ClipboardEdit size={28} strokeWidth={1.5} />, title: 'Consultation', desc: 'We understand your\\nneeds & preferences.' },
  { num: '02', icon: <PencilRuler size={28} strokeWidth={1.5} />, title: 'Design Planning', desc: 'Our team creates 3D\\ndesigns & layouts.' },
  { num: '03', icon: <Layers size={28} strokeWidth={1.5} />, title: 'Material Selection', desc: 'Choose from our wide range\\nof quality materials.' },
  { num: '04', icon: <Hammer size={28} strokeWidth={1.5} />, title: 'Execution', desc: 'We execute the project\\nwith perfection.' },
  { num: '05', icon: <Home size={28} strokeWidth={1.5} />, title: 'Handover', desc: 'On-time delivery with\\ncomplete satisfaction.' },
];

const OurProcess = () => (
  <section id="our-process" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Process</p>
        <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">From Concept To Creation</h2>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] border-t-[2px] border-dashed border-[#e6dcd4] z-0"></div>

        <div className="flex flex-wrap justify-between gap-8 relative z-10">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center w-full md:w-[15%] bg-white pt-2">
              <div className="w-[90px] h-[90px] rounded-full bg-primary text-white flex items-center justify-center mb-5 border-[8px] border-[#fafafa] shadow-sm">
                {step.icon}
              </div>
              <span className="text-primary font-bold text-[13px] mb-1">{step.num}</span>
              <h4 className="font-extrabold text-[14px] text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-500 text-[11px] leading-snug whitespace-pre-line">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default OurProcess;`;

const testimonialsJsx = `import React from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Nilesh Patel',
    location: 'Surat',
    stars: 5,
    text: 'Very professional team and innovative designs. They made our dream home a reality. Highly recommended!',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'Heena Shah',
    location: 'Surat',
    stars: 5,
    text: 'Excellent service, quality work and on-time delivery. Our experience with Sarvamangal Interior was great.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
  },
  {
    name: 'Kiran Desai',
    location: 'Surat',
    stars: 5,
    text: 'They understood our requirements perfectly and delivered beyond our expectations.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
            <ChevronLeft size={20} />
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative">
                <Quote size={40} className="absolute top-6 right-6 text-gray-200 fill-current opacity-40" />
                
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="text-[#f59e0b] fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-[13px] leading-relaxed mb-8 min-h-[60px]">"{t.text}"</p>
                
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-gray-900 text-[13px]">{t.name}</div>
                    <div className="text-gray-500 text-[11px]">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;`;

const ctaJsx = `import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const CTA = () => (
  <section className="py-12 bg-dark">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white">
          <Phone size={24} strokeWidth={1.5} className="fill-white/10" />
        </div>
        <div>
          <h3 className="text-white text-xl font-extrabold tracking-tight mb-1">Let's Design Your Dream Space</h3>
          <p className="text-gray-400 text-[13px]">Get a free consultation today!</p>
        </div>
      </div>
      <a
        href="#contact-us"
        className="inline-flex items-center gap-2 bg-white text-dark px-8 py-3.5 rounded text-[13px] font-bold hover:bg-gray-100 transition-all shadow-md whitespace-nowrap"
      >
        Contact Us Now <ArrowRight size={16} />
      </a>
    </div>
  </section>
);
export default CTA;`;

const footerJsx = `import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => (
  <footer id="contact-us" className="bg-[#1c1c1c] text-gray-400">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border-[3px] border-white rounded-full flex flex-col items-center justify-center relative">
               <span className="text-white font-extrabold text-xl leading-none" style={{ fontFamily: 'serif' }}>S</span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-extrabold text-white text-[18px] leading-none tracking-tight">SARVAMANGAL</div>
              <div className="text-[9px] text-white font-semibold tracking-[0.2em] mt-0.5">INTERIOR CHOICE</div>
            </div>
          </div>
          <p className="text-[12px] leading-relaxed mb-6 text-gray-400">
            We are committed to delivering beautiful, functional & luxurious interiors that enhance your lifestyle.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-extrabold mb-6 text-[13px]">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Services', 'Packages', 'Our Work', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href={\`#\${link.toLowerCase().replace(/ /g, '-')}\`} className="text-[12px] hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-extrabold mb-6 text-[13px]">Our Services</h4>
          <ul className="space-y-3">
            {['Residential Interior', 'Commercial Interior', 'Modular Kitchen', 'Wardrobe Design', 'False Ceiling', 'Wall Decor'].map((s) => (
              <li key={s}>
                <a href="#" className="text-[12px] hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-extrabold mb-6 text-[13px]">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-[12px]">Surat, Gujarat</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <a href="mailto:sarvamangalinterior@gmail.com" className="text-[12px] hover:text-white transition-colors break-all">
                sarvamangalinterior@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <a href="tel:+919824338383" className="text-[12px] hover:text-white transition-colors block">
                  98243 38383
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-[12px]">Mon - Sat: 10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 py-6 text-center text-[11px]">
      © 2024 Sarvamangal Interior Choice. All Rights Reserved.
    </div>
  </footer>
);
export default Footer;`;

fs.writeFileSync(path.join('f:/furniture', 'tailwind.config.js'), tailwindConfig);
fs.writeFileSync(path.join('f:/furniture', 'index.html'), indexHtml);
fs.writeFileSync(path.join('f:/furniture', 'src/components/Header.jsx'), headerJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/Hero.jsx'), heroJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/Packages.jsx'), packagesJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/Features.jsx'), featuresJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/AboutUs.jsx'), aboutUsJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/OurWork.jsx'), ourWorkJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/OurProcess.jsx'), ourProcessJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/Testimonials.jsx'), testimonialsJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/CTA.jsx'), ctaJsx);
fs.writeFileSync(path.join('f:/furniture', 'src/components/Footer.jsx'), footerJsx);

console.log('Design perfectly updated.');