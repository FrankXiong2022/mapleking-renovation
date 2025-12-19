
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AISmartConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResponse(""); // Reset response
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the AI Assistant for MapleKing Renovation, a specialist in basement renovations in the Greater Toronto Area (GTA). Your tone is professional, helpful, and concise. You provide general advice on basement remodeling, common GTA building codes (like egress window requirements), and separate entrances. Encourage the user to fill out the estimate form if they need a specific quote.",
        }
      });
      
      setResponse(result.text || "I'm sorry, I couldn't process that. Please try again.");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Our AI is currently resting. Please fill out our contact form for a human consultant!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [response, loading]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 bg-white border border-gray-100 rounded-3xl shadow-2xl mb-4 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-brightBlue p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <span className="text-white font-bold">MapleKing Smart Consultant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 rounded p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4 text-sm bg-gray-50">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-gray-700">
              Hi there! I'm MapleKing's AI. Want to know about basement costs in the GTA, legal entrance requirements, or our process? Ask me anything!
            </div>
            
            {response && (
              <div className="bg-brightBlue text-white p-3 rounded-2xl rounded-tr-none shadow-sm ml-8">
                {response}
              </div>
            )}
            
            {loading && (
              <div className="flex space-x-1 p-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              type="text" 
              placeholder="How much for a walk-out?" 
              className="flex-grow px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:border-brightBlue"
            />
            <button 
              onClick={handleAsk}
              className="p-2 bg-brightBlue text-white rounded-xl hover:bg-blue-600 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-mapleRed text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
        {isOpen ? (
           <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>
    </div>
  );
};

export default AISmartConsultant;
