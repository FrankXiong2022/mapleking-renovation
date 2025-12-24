
import React from 'react';

const Entrances: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1635108201275-f2858f087bd9?auto=format&fit=crop&w=400&q=80",
    "/images/entrance-01.jpg.jpg",
    "https://images.unsplash.com/photo-1628592102751-ba83b035e450?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1592595894519-32b569d15d27?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Separate Basement Entrance Specialist
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Maximize your property value and privacy with our professional walk-out entrance solutions. We handle everything from excavation to finishing.
            </p>
          </div>
          <div className="flex items-center text-mapleRed font-bold border-2 border-mapleRed px-6 py-3 rounded-xl">
            Legal & Permitted Solutions
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-gray-100 hover:ring-4 hover:ring-brightBlue transition-all cursor-zoom-in">
              <img src={img} alt="Basement Walk-out Entrance" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Entrances;
