import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image Layer: Modern Basement/Living Area */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // I updated the photo URL here to a high-end modern interior
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay: Ensuring white text is readable */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm px-4 py-1 rounded-full text-blue-400 font-medium mb-6">
            Serving GTA & Surrounding Areas
          </div>
          
          <div className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase mb-4 opacity-80">
            <span>Quality Renovation</span>
            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            <span>Honest Work</span>
            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            <span>Real Results</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Bright <span className="text-white/50">•</span> Faster <span className="text-white/50">•</span>
            <br />
            <span className="text-blue-500">Affordable</span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
            Transform your basement into a bright, functional living space. 
            Professional basement renovation specialists serving the GTA.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20">
              Get a Free 3D Design & Free Estimate
            </button>
          </div>
        </div>

        {/* Right Side Feature Card */}
        <div className="absolute right-4 bottom-10 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-6">Why Choose MapleKing?</h3>
            <ul className="space-y-4">
              {[
                'Free 3D Design Preview',
                'Fixed Timeline Guarantee',
                'Premium Quality Materials'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="bg-blue-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;