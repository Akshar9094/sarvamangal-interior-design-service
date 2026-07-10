import React from 'react';

const brands = [
  { name: 'Reliance', logo: 'RELIANCE' },
  { name: 'Shaligram', logo: 'SHALIGRAM' },
  { name: 'Maruti Suzuki', logo: 'MARUTI SUZUKI' },
  { name: 'Sangini', logo: 'SANGINI' },
  { name: 'Kalyan', logo: 'KALYAN' },
  { name: 'PVR Cinemas', logo: 'PVR CINEMAS' }
];

const Brands = () => {
  return (
    <section className="py-16 bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Our Clients</p>
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">Brands Who Trust Us</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-gray-400 font-extrabold text-[11px] sm:text-[14px] md:text-[16px] tracking-[0.1em] hover:text-primary transition-colors duration-300 select-none border border-dashed border-gray-200 py-3 px-3 sm:px-6 rounded bg-white w-full text-center shadow-sm hover:shadow"
              style={{ fontFamily: 'sans-serif' }}
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
