
import React from 'react';

const steps = [
  { id: "01", title: "Inquiry", desc: "Share your vision with our consultants via form or phone." },
  { id: "02", title: "On-site Measurement", desc: "Precise digital mapping of your current basement space." },
  { id: "03", title: "3D Design", desc: "Visualize your dream basement with photorealistic renders." },
  { id: "04", title: "Contract", desc: "Transparent pricing with no hidden fees and clear timelines." },
  { id: "05", title: "Construction", desc: "Expert craftsmanship using premium moisture-resistant materials." },
  { id: "06", title: "Delivery", desc: "Final inspection and walkthrough of your brand new space." },
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Seamless Workflow</h2>
          <p className="text-gray-500 font-medium text-lg">From initial dream to final key delivery in 6 simple steps.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-brightBlue rounded-full flex items-center justify-center text-xl font-black text-brightBlue mb-6 group-hover:bg-brightBlue group-hover:text-white transition-all shadow-lg">
                  {step.id}
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 mb-2 uppercase tracking-tighter">{step.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-tight px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
