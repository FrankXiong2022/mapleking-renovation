
import React from 'react';

const Entrances: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1635108201275-f2858f087bd9?auto=format&fit=crop&w=400&q=80",
    "/images/entrance-01.jpg.jpg",
    "/images/entrance-02.jpg.jpg",
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

      <div className="flex flex-col items-center mb-10">

        <div className="w-full max-w-[360px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="640"
            src="https://www.youtube.com/embed/YojGd3GwOQo"
            title="MapleKing Renovation Bathroom Project"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full max-w-2xl mt-6 text-left">

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            项目说明
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            这个项目位于多伦多地区，是一个地下室出租房装修工程，包括两个卫生间一起翻新。
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            竹木纤维墙板装修的优势主要有以下几点：
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            第一，装修速度快，节省材料。<br/>
            第二，材料本身具有防水和阻燃性能。<br/>
            第三，作为一种现代装修材料，可以减少人工投入。<br/>
            第四，它减少了很多施工流程，大大缩短了工作时间。<br/>
            第五，施工过程中没有灰尘，整体非常干净。
          </p>


          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Project Description
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            This project is located in Toronto and is part of a basement rental renovation project,
            including the renovation of two washrooms.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Bamboo-fiber wall panels have several advantages in renovation projects:
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            First, the installation is fast and reduces material waste.<br/>
            Second, the material itself has waterproof and fire-resistant properties.<br/>
            Third, as a modern renovation material, it can reduce labor requirements.<br/>
            Fourth, it simplifies many construction steps and greatly shortens project time.<br/>
            Fifth, the construction process produces almost no dust and keeps the site clean.
          </p>


          <a
            href="https://www.youtube.com/shorts/YojGd3GwOQo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            ▶ Watch on YouTube
          </a>

        </div>

      </div>

        
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[360px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="640"
            src="https://www.youtube.com/embed/YojGd3GwOQo"
            title="MapleKing Renovation Short Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
