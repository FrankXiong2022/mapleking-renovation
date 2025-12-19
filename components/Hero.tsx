import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=2000" 
          alt="MapleKing Bright Basement Renovation"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/15"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl text-left">
          <div className="p-6 md:p-10 rounded-3xl backdrop-blur-[3px] bg-black/10 border border-white/10 shadow-sm inline-block">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-xl">
              Bright · Faster · <span className="text-brightBlue">Affordable</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/95 mb-10 font-bold drop-shadow-lg max-w-lg">
              Your Basement. Done Beautifully.
            </p>
            
            {/* --- 修改后的 Netlify 表单开始 --- */}
            <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4">
              <input type="hidden" name="form-name" value="contact" />
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name (姓名)" 
                required 
                className="p-3 rounded-lg bg-white/90 text-black"
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number (电话)" 
                required 
                className="p-3 rounded-lg bg-white/90 text-black"
              />
              <button 
                type="submit" 
                className="bg-brightBlue text-white text-lg font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all"
              >
                Get a Free Estimate
              </button>
            </form>
            {/* --- 修改后的 Netlify 表单结束 --- */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;