import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 这里的逻辑已经改为适配 Netlify Forms，不需要复杂的 API 调用
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        alert("Submission failed, please try again.");
        setLoading(false);
      });
    
    e.preventDefault();
  };

  if (submitted) {
    return (
      <section className="py-24 bg-brightBlue">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="bg-white/10 backdrop-blur-lg inline-block p-12 rounded-3xl border border-white/20">
            <h2 className="text-4xl font-black mb-4">Request Sent!</h2>
            <p className="text-xl font-medium opacity-90">Thank you for choosing MapleKing. We will contact you soon.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-sm underline opacity-70 hover:opacity-100"
            >
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
  <section id="contact-form" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-brightBlue p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-6">Get a Free Estimate</h2>
            <p className="text-lg opacity-90 mb-8">Start your basement transformation today with Toronto's specialist team.</p>
          </div> 
          
          <div className="md:w-1/2 p-12">
            {/* 这里的 name="contact" 和 data-netlify="true" 是 Netlify 识别表单的关键 */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" required className="w-full p-3 border rounded-xl" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phone" required className="w-full p-3 border rounded-xl" placeholder="(647) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required className="w-full p-3 border rounded-xl" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Project Details</label>
                <textarea name="message" rows={3} className="w-full p-3 border rounded-xl" placeholder="Tell us about your basement..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brightBlue text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>
            </form> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
