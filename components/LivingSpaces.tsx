
import React from 'react';

const spaces = [
  { 
    label: "Modern Living Area", 
    img: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    label: "Basement Kitchen", 
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    label: "A Cozy Bedroom", 
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    label: "Modern Bathroom", 
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    label: "Entertainment Space", 
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    label: "Home Office", 
    // FIXED: Bright basement office with authentic high-set window near the ceiling
    img: "https://images.unsplash.com/photo-1512918766755-ee50f14d9b4c?q=80&w=800&auto=format&fit=crop" 
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
