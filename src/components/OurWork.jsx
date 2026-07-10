import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office', 'Commercial'];

const projects = [
  { id: 1, category: 'Living Room', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 2, category: 'Bedroom', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 3, category: 'Kitchen', img: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-2' },
  { id: 4, category: 'Living Room', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 5, category: 'Living Room', img: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 6, category: 'Office', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 7, category: 'Commercial', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 8, category: 'Kitchen', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 9, category: 'Bedroom', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' },
  { id: 10, category: 'Office', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 row-span-1' }
];

const OurWork = () => {
  const [active, setActive] = useState('All');
  const location = useLocation();
  const isWorkPage = location.pathname === '/our-work';

  const filteredProjects = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="our-work" className="py-12 sm:py-16 md:py-20 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="text-2xl sm:text-[28px] md:text-[34px] font-extrabold text-gray-900 tracking-tight">Explore Our Creative Work</h2>
        </div>

        {/* Categories filters - scrollable on mobile */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-10 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:text-primary hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-3">
          {filteredProjects.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-lg group cursor-pointer relative shadow-sm hover:shadow-lg transition-all duration-300">
              <img
                src={p.img}
                alt={`${p.category} Project`}
                className="w-full h-36 sm:h-48 md:h-[260px] object-cover transform group-hover:scale-110 transition-transform duration-700 bg-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <span className="text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-primary px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                  {p.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        {!isWorkPage && (
          <div className="text-center mt-10">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded text-[13px] font-bold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg"
            >
              View More Projects <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {isWorkPage && (
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-3.5 rounded text-[13px] font-bold hover:bg-black transition-all"
            >
              Let's Discuss Your Project <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurWork;