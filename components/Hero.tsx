import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 背景图片层 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Modern Renovated Basement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* 左侧文字信息区 */}
          <div className="md:w-1/2 text-white">
            <div className="inline-block px-4 py-2 bg-brightBlue/20 backdrop-blur-md rounded-full text-brightBlue font-semibold mb-6">
              Serving GTA & Surrounding Areas
            </div>

            {/* 这里加入了你要求的信任标签 */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm font-bold uppercase tracking-widest text-gray-300">
              <span>Quality Renovation</span>
              <span className="text-brightBlue">•</span>
              <span>Honest Work</span>
              <span className="text-brightBlue">•</span>
              <span>Real Results</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Bright · Faster · <br />
              <span className="text-brightBlue">Affordable</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              Transform your basement into a bright, functional living space. 
              Professional basement renovation specialists serving the GTA.
            </p>

            {/* 蓝色按钮：已修改为你要的长标题，并指向底部表单 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact-section"
                className="px-8 py-4 bg-brightBlue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-center"
              >
                Get a Free 3D Design & Free Estimate
              </a>
            </div>
          </div>

          {/* 右侧业务亮点展示 */}
          <div className="md:w-1/2 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose MapleKing?</h3>
              <ul className="space-y-4">
                {[
                  'Free 3D Design Preview',
                  'Licensed & Insured Experts',
                  'Fixed Timeline Guarantee',
                  'Premium Quality Materials'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white text-lg">
                    <span className="w-6 h-6 bg-brightBlue rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;