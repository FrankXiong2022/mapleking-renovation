
import React from 'react';

const spaces = [
  { 
    label: "Modern Living Area", 
    img: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    label: "Basement Kitchenette", 
    img: "https://images.unsplash.com/photo-1505773508401-e26ca9845131?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    label: "Cozy Guest Bedroom", 
    img: "https://images.unsplash.com/photo-1512918583167-02bd09b3f681?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    label: "Modern Bathroom", 
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    label: "Entertainment Space", 
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    label: "Home Office", 
    img: "https://images.unsplash.com/photo-1539632346654-dd4c3cffad8c?q=80&w=2070&auto=format&fit=crop" 
  },
];

const LivingSpaces: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Transform Your Basement into a Beautiful Living Space
          </h2>
          <div className="w-24 h-1 bg-mapleRed mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, idx) => (
            <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white">
              <img 
                src={space.img} 
                alt={space.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-2xl font-bold tracking-tight">{space.label}</p>
                <div className="w-12 h-1 bg-brightBlue mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivingSpaces;
