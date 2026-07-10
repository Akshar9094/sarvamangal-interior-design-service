import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#1c1c1c] text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1 text-left">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/images/logo-white.svg" 
              alt="Sarvamangal Interior Choice" 
              className="h-12 w-auto"
            />
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

        {/* Quick Links */}
        <div className="text-left">
          <h4 className="text-white font-extrabold mb-6 text-[13px]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Packages', path: '/packages' },
              { label: 'Our Work', path: '/our-work' },
              { label: 'Testimonials', path: '/testimonials' },
              { label: 'Contact Us', path: '/contact' },
              { label: 'FAQs', path: '/faqs' }
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-[12px] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-left">
          <h4 className="text-white font-extrabold mb-6 text-[13px]">Our Services</h4>
          <ul className="space-y-3">
            {[
              { name: 'Residential Interior', slug: 'residential-interior' },
              { name: 'Commercial Interior', slug: 'commercial-interior' },
              { name: 'Modular Kitchen', slug: 'modular-kitchen' },
              { name: 'Wardrobe Design', slug: 'wardrobe-design' },
              { name: 'False Ceiling', slug: 'false-ceiling' },
              { name: 'Wall Decor', slug: 'wall-decor' }
            ].map((s) => (
              <li key={s.name}>
                <Link to={`/services/${s.slug}`} className="text-[12px] hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-2 md:col-span-1 text-left">
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

    <div className="border-t border-gray-800 py-5 sm:py-6 text-center text-[11px] px-4">
      © 2025 Sarvamangal Interior Choice. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
