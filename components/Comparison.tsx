
import React from 'react';

const Comparison: React.FC = () => {
  const rows = [
    { metric: "Completion Speed", traditional: "Slow (2-3 Months)", maple: "Fast (4-6 Weeks)" },
    { metric: "Maintenance", traditional: "Prone to Mold & Dampness", maple: "Moisture & Mildew Resistant" },
    { metric: "Visual Aesthetics", traditional: "Dull & Standard Look", maple: "Bright, Modern & High-End" },
    { metric: "3D Planning", traditional: "Rarely Offered / Extra Cost", maple: "Free Custom 3D Design" },
    { metric: "Workflow", traditional: "Disconnected Sub-contractors", maple: "Managed In-house Excellence" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Why Choose Us?</h2>
          <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">The MapleKing Difference</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl bg-white border border-gray-100">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-bold border-b">
                <th className="px-6 py-6 md:px-10">Feature</th>
                <th className="px-6 py-6 text-gray-400">Traditional</th>
                <th className="px-6 py-6 text-brightBlue">MapleKing</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-6 md:px-10 font-bold text-gray-900">{row.metric}</td>
                  <td className="px-6 py-6 text-gray-500 font-medium italic">{row.traditional}</td>
                  <td className="px-6 py-6 text-gray-900 font-extrabold">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-brightBlue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {row.maple}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
