import React, { useState, useEffect } from 'react';

const Hero = () => {
  // 核心逻辑：地下室即时估价器状态
  const [sqft, setSqft] = useState<number>(0);
  const [style, setStyle] = useState<string>('mid');
  const [hasBathroom, setHasBathroom] = useState<boolean>(false);
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);

  // 价格配置：您可以根据多伦多行情随时修改这些数字
  const rates = {
    standard: { min: 35, max: 45 },
    mid: { min: 50, max: 65 },
    luxury: { min: 75, max: 100 }
  };

  // 计算逻辑
  useEffect(() => {
    if (sqft > 0) {
      const rate = rates[style as keyof typeof rates];
      let min = sqft * rate.min;
      let max = sqft * rate.max;
      
      if (hasBathroom) {
        min += 10000;
        max += 15000;
      }
      
      setEstimate({ min, max });
    } else {
      setEstimate(null);
    }
  }, [sqft, style, hasBathroom]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20">
      {/* 背景图片层：使用您指定的明亮地下室图片 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.ibb.co/fdzwJvbz/basement-bright.jpg')`, // 您的背景图 Direct Link
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 半透明遮罩层：设为 0.3 确保图片明亮且文字清晰 */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* 内容容器：左对齐，不遮挡右侧图片主体 */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* 左侧：文案部分 */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Bright · Faster · <span className="text-blue-400">Affordable</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg drop-shadow-md">
            Professional Basement Renovation Specialists in GTA. 
            Transform your space into a beautiful living area.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl">
              Get Free 3D Design
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white/20">
              Our Process
            </button>
          </div>
        </div>

        {/* 右侧：即时估价计算器卡片 */}
        <div className="w-full lg:w-[400px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Instant Quote Tool</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Area (Square Footage)</label>
              <input 
                type="number" 
                placeholder="e.g. 800"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                onChange={(e) => setSqft(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/70">Finishing Style</label>
              <select 
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option value="standard" className="text-black">Standard (Basic)</option>
                <option value="mid" className="text-black">Modern (Mid-range)</option>
                <option value="luxury" className="text-black">Luxury (Premium)</option>
              </select>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input 
                type="checkbox" 
                id="bath"
                className="w-5 h-5 rounded border-white/20 accent-blue-500"
                onChange={(e) => setHasBathroom(e.target.checked)}
              />
              <label htmlFor="bath" className="text-sm font-medium text-white/70">Add a New Bathroom?</label>
            </div>

            {/* 计算结果展示 */}
            {estimate && (
              <div className="mt-6 p-4 bg-blue-600/30 border border-blue-400/50 rounded-2xl text-center">
                <p className="text-sm text-blue-200 mb-1">Estimated Project Range</p>
                <p className="text-3xl font-bold text-white">
                  ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                </p>
                <p className="text-[10px] text-white/50 mt-2 uppercase tracking-widest">*Rough estimate for GTA area</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;