import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import OurWork from './components/OurWork';
import OurProcess from './components/OurProcess';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

// New components
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import NotFound from './components/NotFound';
import Brands from './components/Brands';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col justify-between">
        <Header />
        
        <main className="flex-grow pt-[86px] sm:pt-[92px] lg:pt-20">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={
              <>
                <Hero />
                <Packages />
                <Features />
                <AboutUs />
                <OurWork />
                <OurProcess />
                <Testimonials />
              </>
            } />

            {/* About Us Page */}
            <Route path="/about" element={
              <>
                <div className="py-8">
                  <AboutUs />
                </div>
                <OurWork />
              </>
            } />

            {/* Services Page */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Services />} />

            {/* Packages Page */}
            <Route path="/packages" element={<Packages />} />

            {/* Our Work Page */}
            <Route path="/our-work" element={<OurWork />} />

            {/* Testimonials Page */}
            <Route path="/testimonials" element={
              <>
                <Testimonials />
                <Brands />
              </>
            } />

            {/* Contact Us Page */}
            <Route path="/contact" element={<ContactUs />} />

            {/* FAQs Page */}
            <Route path="/faqs" element={<FAQs />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <CTA />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
