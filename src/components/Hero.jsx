import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    subtitle: 'Transforming Spaces,',
    title: 'TRANSFORMING\nLIVES',
    desc: 'We create beautiful, functional & luxurious\ninteriors tailored to your lifestyle.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    subtitle: 'Luxury Designs,',
    title: 'CREATING\nCOMFORT',
    desc: 'Experience the ultimate harmony of aesthetics,\nutility and custom craftsmanship.'
  },
  {
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1600',
    subtitle: 'Personalized Spaces,',
    title: 'INSPIRED\nLIVING',
    desc: 'Crafting modern bedrooms and private\nsanctuaries that feel uniquely yours.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen min-h-[500px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')`, backgroundColor: '#4a3b32' }}
        />
      ))}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Slide Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-left">
          <p className="text-primary text-2xl sm:text-3xl md:text-4xl mb-2 font-cursive" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-white text-2xl sm:text-5xl md:text-[5.5rem] font-extrabold leading-[1.1] mb-4 md:mb-6 tracking-tight whitespace-normal md:whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-200 text-[13px] sm:text-[15px] md:text-xl max-w-lg mb-7 md:mb-10 leading-relaxed whitespace-normal md:whitespace-pre-line">
            {slides[currentSlide].desc}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded text-[13px] sm:text-sm font-bold hover:bg-primary-dark transition-all"
            >
              Our Services <ArrowRight size={16} />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 border border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded text-[13px] sm:text-sm font-bold hover:bg-white hover:text-dark transition-all"
            >
              View Our Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation chevrons */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 border border-white/50 hover:bg-white hover:text-dark text-white rounded-full items-center justify-center transition-all focus:outline-none"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 border border-white/50 hover:bg-white hover:text-dark text-white rounded-full items-center justify-center transition-all focus:outline-none"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full h-2.5 focus:outline-none ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;