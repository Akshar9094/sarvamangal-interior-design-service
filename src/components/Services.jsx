import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';

const servicesList = [
  {
    title: 'Residential Interior',
    slug: 'residential-interior',
    desc: 'Designing beautiful homes that blend comfort, luxury, and functionality tailored to your lifestyle.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'Transform your house into a warm, inviting, and luxurious home. Our residential interior design service covers everything from concept to completion, ensuring every corner matches your aesthetic and lifestyle.',
    inclusions: [
      'Custom living room furniture, TV panels & sofa styling',
      'Master bedroom and kids room bed design & wardrobes',
      'Dining table, foyer consoles & shoe cabinets',
      'Curtains, wallpapers, textures & false ceiling work',
      'Ambient LED lighting layout & color consultation',
      'Veneer paneling, charcoal louvers & metallic wall highlights'
    ]
  },
  {
    title: 'Commercial Interior',
    slug: 'commercial-interior',
    desc: 'Creating professional, stylish, and highly productive office spaces and retail showrooms.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'Design workspaces that inspire productivity and reflect your brand identity. We craft ergonomic, contemporary, and highly functional office layouts, retail outlets, and corporate spaces.',
    inclusions: [
      'Office workstation layouts and executive desks',
      'Ergonomic seating & acoustical paneling solutions',
      'Bespoke reception desks & brand wall designs',
      'Integrated cabling, lighting and HVAC planning',
      'Conference room audio-visual backdrops & decor',
      'Retail product display racks & showroom visual merchandising'
    ]
  },
  {
    title: 'Modular Kitchen',
    slug: 'modular-kitchen',
    desc: 'Sleek, modern, and highly efficient kitchen layouts with premium modular fittings.',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'A perfect blend of style and efficiency. Our modular kitchen designs maximize space utilization, provide smart storage options, and use premium materials to withstand daily utility.',
    inclusions: [
      'Custom layouts (L-shaped, U-shaped, Parallel or Island)',
      'High-quality BWR ply structures with acrylic or laminate wrap',
      'Hafele, Hettich or Blum drawers & lift-up shutter systems',
      'Dedicated tall units, pantry pull-outs & built-in cutlery trays',
      'Profile lighting under overhead cabinets for workspace utility',
      'Premium quartz or granite countertops selection support'
    ]
  },
  {
    title: 'Wardrobe Design',
    slug: 'wardrobe-design',
    desc: 'Customized storage solutions, built-in wardrobes, and elegant walk-in closets.',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'Elegant storage solutions designed for organization and style. From space-saving sliding wardrobes to luxurious walk-in closets, we customize closets to your lifestyle.',
    inclusions: [
      'Precision-crafted wardrobes with custom storage divisions',
      'Soft-close sliding channel systems (Hafele or equivalent)',
      'Integrated tie racks, jewelry drawers & electronic lock boxes',
      'Premium glass shutters or textured laminates & veneer finishes',
      'Profile LED lighting in hangers & shelving sections',
      'Dedicated vanity desks & dressing mirrors integration'
    ]
  },
  {
    title: 'False Ceiling',
    slug: 'false-ceiling',
    desc: 'Modern drop ceilings integrated with ambient LED strip lights and premium finishes.',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'Enhance the vertical aesthetic of your home. A professionally designed false ceiling adds depth, conceals electrical wiring, and provides beautiful ambient LED lighting.',
    inclusions: [
      'Saint-Gobain gypsum boards and metal channel framing',
      'Sleek cove designs for indirect warm LED strip lighting',
      'Integrated spotlight cutouts & magnetic track light systems',
      'Custom veneer panels or wallpaper overlays for a premium look',
      'Acoustic insulation panels for home theaters or bedrooms',
      'Precision painting and seamless edge finishing'
    ]
  },
  {
    title: 'Wall Decor',
    slug: 'wall-decor',
    desc: 'Sophisticated wall panels, custom wallpaper, textured paint, and stone cladding.',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'Transform blank walls into stunning visual features. We offer sophisticated wall paneling, charcoal louvers, custom wallpapers, stone cladding, and textured paints.',
    inclusions: [
      'Fluted panels, MDF shapes and copper/brass profile trims',
      'Eco-friendly, scratch-resistant wallpapers from international designs',
      'Royal Play textures, stucco, and metallic paint effects',
      'Custom stone cladding for TV walls or foyer spaces',
      'Acoustic fabric paneling & designer wall molding lines',
      'Custom artwork, framing and display wall curation'
    ]
  },
  {
    title: '3D Visualization',
    slug: '3d-visualization',
    desc: 'High-quality 3D pre-renders and walk-throughs to visualize your space before execution.',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: "See your space before it's built. Our advanced 3D renders and walk-through animations let you refine every color, texture, and furniture layout in detail.",
    inclusions: [
      'High-fidelity rendering of living, dining, and bedrooms',
      'Accurate lighting simulations matching daylight & night settings',
      'Real material texture application (veneer, laminates, fabrics)',
      'Quick revision cycles to finalize the project design',
      '360° panoramic virtual tour of selected rooms',
      'Color combination schemes options for walls and woodwork'
    ]
  },
  {
    title: 'Renovation',
    slug: 'renovation',
    desc: 'Complete transformation of old or outdated rooms into elegant, contemporary spaces.',
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600&h=400',
    detailedDesc: 'Give your old spaces a fresh, modern life. We dismantle, replan, and execute complete transformations of bedrooms, bathrooms, kitchens, or your entire home.',
    inclusions: [
      'Safe demolition & debris disposal as per municipal standards',
      'Re-tiling of floors and walls with premium vitrified tiles',
      'Upgradation of plumbing fixtures and bathroom wet areas',
      'Modernization of old furniture, doors, windows & painting',
      'Rewiring and modular switches installation layout overhaul',
      'Waterproofing solutions for toilets, balconies, and outer walls'
    ]
  }
];

const Services = () => {
  const { serviceId } = useParams();
  const currentService = serviceId ? servicesList.find(s => s.slug === serviceId) : null;

  // Contact form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // If detailed subpage route is matched
  if (serviceId && currentService) {
    return (
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumb Back Link */}
          <div className="text-left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-extrabold text-[12px] uppercase tracking-wider mb-8 sm:mb-10 transition-colors"
            >
              <ArrowLeft size={14} /> Back To All Services
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column: Image & Details */}
            <div className="lg:w-[60%] w-full text-left">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight mb-4">
                {currentService.title}
              </h2>
              <div className="w-16 h-1 bg-primary mb-5 sm:mb-6 rounded"></div>
              
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 sm:mb-8">
                {currentService.detailedDesc}
              </p>

              {/* Large Image */}
              <div className="rounded-lg overflow-hidden h-[220px] sm:h-[300px] md:h-[360px] shadow-sm mb-8 sm:mb-10">
                <img
                  src={currentService.img}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inclusions */}
              <div>
                <h3 className="font-extrabold text-[15px] sm:text-[16px] text-gray-900 mb-5 sm:mb-6">
                  What We Deliver Under {currentService.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentService.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5 fill-primary/10" />
                      <span className="text-gray-700 text-[12.5px] font-semibold leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Quote Request Form */}
            <div className="lg:w-[40%] w-full bg-[#fdfaf8] border border-[#f5ece6] p-5 sm:p-8 rounded-lg shadow-[0_4px_25px_rgba(0,0,0,0.01)] text-left lg:sticky lg:top-28">
              <h3 className="font-extrabold text-[16px] text-gray-900 mb-1.5 tracking-tight">
                Request a Free Quote
              </h3>
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-6">
                Consultation on {currentService.title}
              </p>

              {submitted && (
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded text-[11px] font-semibold mb-6 border border-emerald-100">
                  Thank you! Your quote request has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800"
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
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800"
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
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800"
                  />
                </div>

                <div>
                  {/* Read-only service field */}
                  <input
                    type="text"
                    readOnly
                    value={`${currentService.title} Details`}
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-[12px] text-gray-400 font-bold focus:outline-none cursor-not-allowed"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your design needs or room dimensions..."
                    rows="4"
                    required
                    className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-[12px] focus:outline-none focus:border-primary transition-colors text-gray-800 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#703b1a] hover:bg-[#572e14] text-white font-bold text-[12px] uppercase py-3.5 rounded tracking-wider transition-all duration-300 shadow-sm"
                >
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback to overview of all services
  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Services</p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">What We Offer</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded"></div>
          <p className="text-gray-500 text-[13px] mt-4 max-w-xl mx-auto leading-relaxed">
            We provide end-to-end interior design solutions for residential and commercial spaces.
          </p>
        </div>

        {/* 2-col on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {servicesList.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.1)] group hover:-translate-y-2 transition-all duration-300 flex flex-col text-left"
            >
              <div className="h-32 sm:h-48 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-primary/20 transition-colors duration-300" />
              </div>
              <div className="p-3 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] sm:text-[15px] text-gray-900 mb-1.5 sm:mb-2.5 tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mb-2 sm:mb-4">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary tracking-wider uppercase group-hover:gap-2 transition-all">
                    Know More <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
