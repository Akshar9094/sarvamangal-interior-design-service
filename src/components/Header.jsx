import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Clock, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Packages', path: '/packages' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const getActiveItem = () => {
    const path = location.pathname;
    const item = menuItems.find(m => m.path === path);
    return item ? item.label : 'Home';
  };

  const activeItem = getActiveItem();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-dark text-[#e0d6ce] text-[11px] py-1.5 px-3 flex justify-between items-center lg:px-12 font-medium tracking-wide">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] flex-shrink-0"><MapPin size={11} /> <span className="hidden xs:inline">Surat, Gujarat</span><span className="xs:hidden">Surat</span></span>
          <span className="hidden sm:flex items-center gap-2"><Mail size={12} /> sarvamangalinterior@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2"><Clock size={12} /> Mon - Sat: 10:00 AM - 8:00 PM</span>
          <div className="flex gap-3">
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
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12 flex justify-between items-center py-2.5 sm:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.svg" 
              alt="Sarvamangal Interior Choice" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`text-[13px] font-bold transition-colors ${
                    activeItem === item.label ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Phone (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+919824338383"
              className="flex items-center gap-2 bg-[#703b1a] text-white px-5 py-2.5 rounded text-[13px] font-bold hover:bg-[#572e14] transition-colors"
            >
              <Phone size={14} className="text-primary fill-primary" /> 98243 38383
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-800 hover:text-primary transition-colors focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col`}
        >
          {/* Header inside drawer */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 shadow-sm">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="Sarvamangal Interior Choice" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-800 hover:text-primary transition-colors focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 py-6 overflow-y-auto flex-grow">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-[14px] font-bold transition-colors border-b border-gray-50 ${
                    activeItem === item.label ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+919824338383"
                className="flex items-center justify-center gap-2 bg-[#703b1a] text-white px-5 py-3 rounded text-[13px] font-bold w-full"
              >
                <Phone size={14} /> Call: 98243 38383
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;