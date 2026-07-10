import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Contact Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Column 1: Contact Details */}
          <div className="bg-white p-5 sm:p-8 rounded border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-[15px] text-gray-900 mb-6 tracking-tight">Contact Info</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#fafafa] border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-extrabold text-gray-900 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-gray-500 text-[12px]">Surat, Gujarat</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#fafafa] border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-extrabold text-gray-900 uppercase tracking-wider mb-1">Phone</h4>
                    <a href="tel:+919824338383" className="text-gray-500 text-[12px] hover:text-primary transition-colors block">
                      98243 38383
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#fafafa] border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-extrabold text-gray-900 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:sarvamangalinterior@gmail.com" className="text-gray-500 text-[12px] hover:text-primary transition-colors block">
                      sarvamangalinterior@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-[#fafafa] border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-extrabold text-gray-900 uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-gray-500 text-[12px]">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {['facebook', 'instagram', 'whatsapp'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded bg-[#fafafa] border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    {social === 'facebook' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    )}
                    {social === 'instagram' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    )}
                    {social === 'whatsapp' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Google Map */}
          <div className="bg-white rounded overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] h-full min-h-[250px] sm:min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709428784!2d72.7316314815413!3d21.159345828557997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718160000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '250px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Surat Map"
            ></iframe>
          </div>

          {/* Column 3: Contact Form */}
          <div className="bg-white p-5 sm:p-8 rounded border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <h3 className="font-extrabold text-[15px] text-gray-900 mb-6 tracking-tight">Send Us A Message</h3>
            {submitted ? (
              <div className="bg-emerald-50 text-emerald-800 p-4 rounded text-[11px] font-semibold mb-6 border border-emerald-100">
                Thank you! Your message has been sent successfully.
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800"
                />
              </div>

              <div>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-500"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Residential">Residential Interior</option>
                  <option value="Commercial">Commercial Interior</option>
                  <option value="Kitchen">Modular Kitchen</option>
                  <option value="Wardrobe">Wardrobe Design</option>
                  <option value="Ceiling">False Ceiling</option>
                  <option value="Wall">Wall Decor</option>
                  <option value="3D">3D Visualization</option>
                  <option value="Renovation">Renovation</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#703b1a] hover:bg-[#572e14] text-white font-bold text-[12px] uppercase py-3.5 rounded tracking-wider transition-all duration-300 shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
