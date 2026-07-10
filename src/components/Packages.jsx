import React from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { Home, Building, Castle, Crown, Map, CheckCircle2, ChevronRight } from 'lucide-react';

const packagesList = [
  {
    name: '1 BHK PACKAGE',
    price: '₹ 3.68 Lakh',
    desc: 'Smart & stylish interiors\nfor comfortable living.',
    icon: <Home size={26} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400&h=300',
    inclusions: [
      'Space Planning & Furniture Layout',
      '3D Design & Visualization (Selected Rooms)',
      'Modular Kitchen (L-shaped or Straight, Basic Accessories)',
      '1 Bedroom Wardrobe (Hinged, up to 7ft height)',
      'Living Room TV Unit (Sleek, wall-mounted)',
      'False Ceiling in Living Room (Basic design with LED strip)',
      'Standard Wall Painting (Asian Paints Tractor Emulsion)',
      '10-Year Warranty on Modular Woodwork',
      'Execution time: 45 working days'
    ]
  },
  {
    name: '2 BHK PACKAGE',
    price: '₹ 4.68 Lakh',
    desc: 'Elegant & functional\ndesign for families.',
    icon: <Building size={26} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400&h=300',
    inclusions: [
      'Space Planning & Complete 2D Furniture Layout',
      '3D Design & Color Consultation',
      'Modular Kitchen (Premium Acrylic finishes, Soft-close channels)',
      'Master Bedroom Wardrobe (Sliding, up to 8ft height)',
      'Kids/Guest Bedroom Wardrobe (Hinged, premium laminate)',
      'Living Room TV Unit & Shoe Rack',
      'False Ceiling in Living & Dining Area',
      'Premium Wall Painting & 1 Accent Wallpaper Wall',
      '10-Year Warranty on Modular Woodwork',
      'Execution time: 45-50 working days'
    ]
  },
  {
    name: '3 BHK PACKAGE',
    price: '₹ 6.68 Lakh',
    desc: 'Spacious interiors with\npremium comfort.',
    icon: <Map size={26} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400&h=300',
    inclusions: [
      'Comprehensive Space Planning & 3D Renderings',
      'Modular Kitchen with Tall Unit & Chimney area provision',
      'Master Bedroom Wardrobe (Sliding with dresser attachment)',
      'Bedroom 2 Wardrobe (Hinged, premium gloss finish)',
      'Bedroom 3 Wardrobe (Sleek laminate finish)',
      'Living Room TV Unit, Accent Panel & Foyer Shoe Unit',
      'Designer False Ceiling in Living, Dining & Master Bedroom',
      'Premium Paints (Asian Paints Royal) & 2 Wallpaper Walls',
      '10-Year Warranty & 3 Years Free Maintenance Support',
      'Execution time: 55 working days'
    ]
  },
  {
    name: '4 BHK PACKAGE',
    price: '₹ 9.68 Lakh',
    desc: 'Luxury designs for a\ngrand lifestyle.',
    icon: <Castle size={26} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=400&h=300',
    inclusions: [
      'Full-Home 3D Visualizations & Professional Space Curation',
      'Super Luxury Modular Kitchen (PU Finish/Glass shutters, Profile lighting)',
      'Master Suite Wardrobe with Integrated LED & Walk-in Feel',
      '3 Guest/Kids Bedrooms Wardrobes with premium custom hardware',
      'Grand TV Panel, Foyer Console, and Bar Area Woodwork',
      'Custom False Ceiling across all rooms with Ambient Lighting',
      'Premium Texture Paints, Custom Wallpapers, and Louver Panels',
      'Bathroom Vanities & Balcony wall paneling details',
      '10-Year Warranty & Dedicated Project Manager support',
      'Execution time: 65 working days'
    ]
  },
  {
    name: '5 BHK PACKAGE',
    price: '₹ 16.29 Lakh',
    desc: 'Exclusivity, elegance &\nunmatched quality.',
    icon: <Crown size={26} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=400&h=300',
    inclusions: [
      'End-to-End Bespoke Interior Design (Unlimited 3D Revisions)',
      'Ultra-Luxury Modular Kitchen with Island Counter & Pantry Unit',
      'All 5 Bedrooms with Customized High-End Wardrobes & Dressers',
      'Custom Veneer Panels, Charcoal louvers, and Italian Marble finishes',
      'Designer TV Lounge paneling, Bar Cabinets, and Mandir Unit',
      'Full False Ceiling with Magnetic Track lights & Smart lighting integration',
      'Premium Imported Wallpapers & Custom Texture/Metallic Paints',
      'Integrated Automation (Smart lighting, curtains provision)',
      'Lifetime After-Sales Support & dedicated supervisor',
      'Execution time: 75 working days'
    ]
  }
];

const Packages = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const isDetailedPage = location.pathname === '/packages';

  // Get active package from search parameters
  const pkgParam = searchParams.get('pkg') || searchParams.get('id');
  let activePkgIndex = pkgParam ? parseInt(pkgParam, 10) : 0;
  if (isNaN(activePkgIndex) || activePkgIndex < 0 || activePkgIndex >= packagesList.length) {
    activePkgIndex = 0;
  }

  if (isDetailedPage) {
    return (
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Packages</p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">Choose The Best Package For You</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded"></div>
            <p className="text-gray-500 text-[13px] mt-4 max-w-xl mx-auto leading-relaxed">
              We have a range of packages designed to suit every need and budget.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Package List Selector */}
            <div className="lg:w-[55%] w-full space-y-3 sm:space-y-4">
              {packagesList.map((pkg, i) => {
                const isSelected = i === activePkgIndex;
                return (
                  <div
                    key={pkg.name}
                    onClick={() => setSearchParams({ pkg: i })}
                    className={`w-full bg-white rounded-lg border p-4 flex items-center justify-between gap-3 cursor-pointer hover:shadow-md transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-primary bg-[#fdfaf7] shadow-[0_4px_20px_rgba(166,89,41,0.06)]'
                        : 'border-gray-100 hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Image Thumbnail */}
                      <div className="w-14 h-12 sm:w-20 sm:h-16 rounded overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Package Info */}
                      <div className="min-w-0">
                        <h3 className="font-extrabold text-[13px] sm:text-[14px] text-gray-900 mb-0.5 truncate">{pkg.name}</h3>
                        <p className="text-gray-500 text-[10.5px] sm:text-[11.5px] leading-relaxed max-w-sm line-clamp-1">
                          {pkg.desc.replace('\n', ' ')}
                        </p>
                      </div>
                    </div>

                    {/* Package Price */}
                    <div className="flex flex-col items-end flex-shrink-0 text-right">
                      <span className="text-primary font-extrabold text-[14px] sm:text-[15px] whitespace-nowrap">
                        {pkg.price}
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-gray-400 font-semibold uppercase tracking-wider">Starting Price</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Checklist Inclusions */}
            <div className="lg:w-[45%] w-full bg-[#fdfaf8] border border-[#f5ece6] p-5 sm:p-8 rounded-lg flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.01)] text-left">
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#d6c5b9] flex items-center justify-center text-primary bg-white shadow-sm">
                    {packagesList[activePkgIndex].icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[16px] text-gray-900 tracking-tight">
                      {packagesList[activePkgIndex].name} Includes
                    </h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mt-0.5">Comprehensive Inclusions</p>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-3.5 mb-8">
                  {packagesList[activePkgIndex].inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5 fill-primary/10" />
                      <span className="text-gray-700 text-[12.5px] font-medium leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Custom CTA */}
              <div className="border-t border-[#f5ece6] pt-6">
                <h4 className="text-[13px] font-extrabold text-gray-900 mb-1.5">Need a Custom Package?</h4>
                <p className="text-gray-500 text-[11.5px] leading-relaxed mb-5">
                  We also provide fully customized interior solutions as per your layout and requirements.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#703b1a] hover:bg-[#572e14] text-white font-bold text-[12px] uppercase py-3 rounded tracking-wider transition-all duration-300 shadow-sm"
                >
                  Contact Us Now <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Home Page Static Grid View - Matches reference design, removing slider
  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Packages</p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight">Choose The Best Package For You</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded"></div>
        </div>

        {/* 5-Column static Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {packagesList.map((pkg, i) => (
            <Link 
              key={pkg.name} 
              to={`/packages?pkg=${i}`}
              className="bg-white rounded-lg border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] p-4 sm:p-6 pb-4 sm:pb-5 flex flex-col items-center text-center group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Centered Circular Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#d6c5b9] flex items-center justify-center text-primary bg-[#fdfaf7] mb-3 sm:mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                {pkg.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-extrabold text-[12px] sm:text-[14px] text-gray-900 mb-1.5 sm:mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mb-4 sm:mb-6 whitespace-pre-line">{pkg.desc}</p>
              
              {/* Bottom Solid Price Tag */}
              <div className="w-full bg-[#a65929] group-hover:bg-[#8a471f] text-white font-extrabold text-[11px] sm:text-[13px] py-2 sm:py-2.5 rounded tracking-wide transition-colors mt-auto shadow-sm">
                {pkg.price}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;