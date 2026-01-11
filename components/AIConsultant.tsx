
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Welcome to SM TECH. I am your Engineering Assistant. How can I help you with our automation, fabrication, or SAP solutions today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a professional engineering consultant for "SM TECH Engineering Works" based in Rawang, Selangor, Malaysia. 
          Your specialties are: 
          1. Engineering Automation (PLC, SCADA, Industry 4.0).
          2. Fabrication Works (Steel structures, pressure vessels).
          3. Mechanical Works (Machinery maintenance, installation).
          4. Civil Works (Industrial construction).
          5. SAP Software Solutions (SAP S/4HANA, Business One).
          
          Always be professional, technical yet accessible, and encourage the user to book a consultation or contact the office at 012-295 8924. 
          Keep answers concise and focus on SM TECH's capabilities.`,
        }
      });

      const aiText = response.text || "I apologize, but I encountered an error. Please contact our office directly at 012-295 8924.";
      setMessages(prev => [...prev, { role: 'ai', content: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting to my brain right now. Please call us for immediate assistance!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-40">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="absolute left-full ml-4 bg-white text-slate-900 px-4 py-2 rounded font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm pointer-events-none shadow-xl">
          AI Engineering Consultant
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-80 sm:w-96 h-[500px] bg-[#0A2540] border-2 border-slate-700 shadow-2xl flex flex-col animate-slideUp">
          <div className="p-4 bg-slate-900 border-b border-slate-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold technical-font uppercase tracking-widest text-xs">AI Technical Advisor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 blueprint-grid bg-opacity-10">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm ${
                  m.role === 'user' 
                  ? 'bg-cyan-500 text-slate-900 font-medium ml-4' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700 mr-4'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start italic text-slate-500 text-xs technical-font animate-pulse">
                Advisor is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-grow bg-[#0D1117] border border-slate-800 p-3 text-sm focus:border-cyan-500 outline-none text-white"
              />
              <button type="submit" className="bg-cyan-500 p-3 text-slate-900 hover:bg-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
