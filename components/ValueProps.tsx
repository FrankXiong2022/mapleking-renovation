
import React from 'react';

const props = [
  {
    icon: (
      <svg className="w-12 h-12 text-brightBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Bright",
    desc: "Professional lighting & materials designed to maximize reflectiveness and eliminate standard basement darkness."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-mapleRed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Faster",
    desc: "Our efficient workflow and advanced pre-fabricated panels ensure your project is completed in record time."
  },
  {
    icon: (
      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Affordable",
    desc: "Unbeatable value-for-money through optimized labor costs and long-term relationships with material suppliers."
  }
];

const ValueProps: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {props.map((p, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-50 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
