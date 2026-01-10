
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Language } from './types';
import { translations, faqs } from './translations';
import { getAIResponse } from './services/geminiService';

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) => {
  const t = translations[lang].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] apple-blur border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between h-14 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center text-white font-bold text-xs transition group-hover:bg-blue-600">O</div>
            <span className="text-[17px] font-semibold tracking-tight text-black">onions.business</span>
          </Link>
          
          <div className="hidden md:flex space-x-10 items-center">
            <Link to="/" className="text-[12px] font-normal text-black/70 hover:text-black transition uppercase tracking-widest">{t.home}</Link>
            <Link to="/services" className="text-[12px] font-normal text-black/70 hover:text-black transition uppercase tracking-widest">{t.services}</Link>
            <Link to="/about" className="text-[12px] font-normal text-black/70 hover:text-black transition uppercase tracking-widest">{t.about}</Link>
            <Link to="/faq" className="text-[12px] font-normal text-black/70 hover:text-black transition uppercase tracking-widest">{t.faq}</Link>
            <Link to="/contact" className="bg-black text-white px-5 py-1.5 rounded-full text-[12px] font-medium hover:bg-zinc-800 transition tracking-tight">{t.contact}</Link>
            
            <div className="relative group">
               <span className="text-[12px] font-bold text-black/40 cursor-pointer">{lang.toUpperCase()}</span>
               <div className="absolute top-full right-0 mt-2 hidden group-hover:block apple-blur border border-black/5 rounded-xl p-2 shadow-2xl">
                 {(['ko', 'en', 'jp', 'es'] as Language[]).map(l => (
                   <button key={l} onClick={() => setLang(l)} className="block w-full text-left px-4 py-2 text-[12px] hover:bg-black/5 rounded-lg">{l.toUpperCase()}</button>
                 ))}
               </div>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" /></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-white z-[90] px-8 py-10 space-y-6 flex flex-col text-[24px] font-bold">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>{t.services}</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t.about}</Link>
          <Link to="/faq" onClick={() => setIsMenuOpen(false)}>{t.faq}</Link>
          <Link to="/contact" className="text-blue-600" onClick={() => setIsMenuOpen(false)}>{t.contact}</Link>
          <div className="flex space-x-4 pt-8 border-t border-black/5">
            {(['ko', 'en', 'jp', 'es'] as Language[]).map(l => (
              <button key={l} onClick={() => {setLang(l); setIsMenuOpen(false);}} className={`text-[14px] ${lang === l ? 'text-black' : 'text-black/30'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-[#f5f5f7] text-black/50 py-20 border-t border-black/5">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[12px] mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-black font-bold">
               <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-[10px]">O</div>
               <span>Onions Business</span>
            </div>
            <p className="leading-relaxed">Export excellence powered by military integrity. Global sourcing of used vehicles and parts.</p>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-4 uppercase tracking-widest">{t.nav.services}</h4>
            <ul className="space-y-3">
              <li>{t.services.items.tires.title}</li>
              <li>{t.services.items.cars.title}</li>
              <li>{t.services.items.machinery.title}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-4 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-3">
              <li>Email: tjdgus5362@naver.com</li>
              <li>WhatsApp: +82 10-5362-XXXX</li>
              <li>Incheon / Pyeongtaek</li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-semibold mb-4 uppercase tracking-widest">Language</h4>
            <div className="flex flex-wrap gap-2">
               {(['ko', 'en', 'jp', 'es'] as Language[]).map(l => (
                  <span key={l} className="hover:text-black cursor-pointer uppercase">{l}</span>
               ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-black/10 text-[11px] leading-relaxed">
           <p>Copyright © 2024 Onions Business Inc. All rights reserved.</p>
           <p className="mt-2">Operating from Pyeongtaek Global Yard. Certified Automotive Maintenance License Holder.</p>
        </div>
      </div>
    </footer>
  );
};

const ChatAssistant = ({ lang }: { lang: Language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg, lang);
    setMessages(prev => [...prev, { role: 'ai', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      {isOpen ? (
        <div className="bg-white/80 backdrop-blur-3xl w-[340px] h-[500px] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border border-black/10">
          <div className="p-6 pb-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[13px] font-semibold text-black/80">Onion Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-black/5 p-1 rounded-full hover:bg-black/10 transition">
              <svg className="w-4 h-4 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4 text-[14px]">
            {messages.length === 0 && (
              <div className="text-black/40 leading-relaxed font-medium">Hello, I'm your Onion Business assistant. How can I help with your global sourcing today?</div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-[18px] ${m.role === 'user' ? 'bg-black text-white' : 'bg-[#f5f5f7] text-black/80'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[10px] text-black/30 font-bold tracking-widest uppercase">Analyzing Market...</div>}
          </div>
          <div className="p-4 border-t border-black/5 flex space-x-2 bg-white/40">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent border-none rounded-lg px-2 py-2 text-[13px] outline-none"
              placeholder="Ask for shipping or quote..."
            />
            <button onClick={handleSend} className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition active:scale-95 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </button>
      )}
    </div>
  );
};

// --- Pages ---

const HomePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-14">
      {/* Hero: Apple Style (Large Text, High Quality Product Shot) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
        <div className="z-10 max-w-[900px]">
           <div className="inline-block px-4 py-1.5 bg-[#f5f5f7] rounded-full text-[12px] font-bold text-black/50 tracking-tight mb-8">
             ONION EXPORT AGENCY
           </div>
           <h1 className="text-[52px] md:text-[84px] font-bold tracking-[-0.03em] leading-[1.05] text-black text-balance">
             {t.hero.title}
           </h1>
           <p className="mt-8 text-[19px] md:text-[24px] text-black/50 max-w-[600px] mx-auto leading-relaxed text-balance font-medium">
             {t.hero.subtitle}
           </p>
           <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
             <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold text-[17px] hover:bg-zinc-800 transition tracking-tight">
               {t.hero.cta}
             </Link>
             <button className="text-blue-600 px-8 py-4 rounded-full font-semibold text-[17px] hover:bg-blue-50 transition flex items-center justify-center">
               {t.hero.cta_whatsapp} 
               <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
             </button>
           </div>
        </div>
        
        {/* Cinematic Imagery (Car focused) */}
        <div className="mt-20 w-full max-w-[1400px] px-6">
           <img 
             src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
             alt="Luxury Vehicles" 
             className="w-full h-[600px] object-cover rounded-[40px] shadow-2xl brightness-[0.9]"
           />
        </div>
      </section>

      {/* Stats: Minimalist */}
      <section className="py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="text-center">
            <div className="text-[48px] font-bold text-black tracking-tight">100k+</div>
            <div className="text-[14px] font-bold text-black/30 uppercase tracking-widest mt-2">{t.stats.label1}</div>
          </div>
          <div className="text-center">
            <div className="text-[48px] font-bold text-black tracking-tight">30+</div>
            <div className="text-[14px] font-bold text-black/30 uppercase tracking-widest mt-2">{t.stats.label2}</div>
          </div>
          <div className="text-center">
            <div className="text-[48px] font-bold text-black tracking-tight">99%</div>
            <div className="text-[14px] font-bold text-black/30 uppercase tracking-widest mt-2">{t.stats.label3}</div>
          </div>
        </div>
      </section>

      {/* Services Grid: Apple-style Glass Cards */}
      <section className="py-40 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-4">{t.services.title}</h2>
          <p className="text-[19px] text-black/40 mb-20 max-w-[600px] mx-auto font-medium">{t.services.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t.services.items).map(([key, item]) => (
              <div key={key} className="glass-card bg-white p-10 rounded-[32px] text-left flex flex-col">
                <div className="w-12 h-12 bg-black text-white rounded-[14px] flex items-center justify-center mb-10 text-[20px] font-bold">
                  {key[0].toUpperCase()}
                </div>
                <h3 className="text-[21px] font-bold mb-4">{item.title}</h3>
                <p className="text-black/50 text-[15px] leading-relaxed mb-10 font-medium">{item.desc}</p>
                <div className="mt-auto pt-6 border-t border-black/5 text-[12px] font-bold text-black uppercase tracking-widest">{t.services.moq}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section: Apple "Meet the Expert" */}
      <section className="py-40 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="bg-black rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center">
              <div className="p-12 lg:p-24 lg:w-3/5 text-white">
                 <div className="text-blue-500 font-bold tracking-widest uppercase text-[12px] mb-6">Built with Integrity</div>
                 <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.1] mb-10">
                   {t.about.story_title}
                 </h2>
                 <p className="text-[17px] md:text-[20px] text-white/60 leading-relaxed font-light mb-12 italic">
                   "{t.about.story_content}"
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1519085115968-39902309a797?q=80&w=1974&auto=format&fit=crop" alt="CEO" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <div className="font-bold">Onion</div>
                       <div className="text-[12px] text-white/40 uppercase tracking-widest">CEO | Former Air Force Captain</div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-2/5 w-full h-[400px] lg:h-full">
                 <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop" alt="Integrity" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-28 pb-40 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-32">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-[12px] mb-6">Expertise</div>
          <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight mb-6">{t.services.title}</h1>
          <p className="text-[21px] text-black/40 font-medium max-w-[600px] mx-auto">{t.services.description}</p>
        </div>

        <div className="space-y-40">
           {/* Tires Detail */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <h2 className="text-[36px] font-bold tracking-tight">{t.services.items.tires.title}</h2>
               <div className="text-[16px] text-black/60 leading-relaxed space-y-4 font-medium">
                  <p>Korean used tires are worldwide known for their tread durability and modern compounds. We leverage a nationwide network to source specific sizes and grades.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Grade A: Above 80% tread life remaining</span></li>
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Strictly 5 years or younger age guarantee</span></li>
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Moisture-proof container packing</span></li>
                  </ul>
               </div>
               <Link to="/contact" className="inline-block bg-[#f5f5f7] px-8 py-3 rounded-full font-bold text-[14px] hover:bg-black hover:text-white transition">Request Catalog</Link>
             </div>
             <div className="rounded-[40px] overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Tire Inspection" className="w-full aspect-square object-cover" />
             </div>
           </div>

           {/* Vehicles Detail */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="md:order-2 space-y-8">
               <h2 className="text-[36px] font-bold tracking-tight">{t.services.items.cars.title}</h2>
               <div className="text-[16px] text-black/60 leading-relaxed space-y-4 font-medium">
                  <p>From luxury sedans to heavy-duty construction excavators. Every vehicle undergoes a 150-point inspection by certified mechanics.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Accident-free history verification</span></li>
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Engine & Transmission stress tests</span></li>
                    <li className="flex items-center space-x-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> <span>Global shipping via Incheon Port</span></li>
                  </ul>
               </div>
               <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-zinc-800 transition">Get Vehicle List</Link>
             </div>
             <div className="md:order-1 rounded-[40px] overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" alt="Premium Cars" className="w-full aspect-square object-cover" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-28 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-6 pb-40">
        <div className="text-center mb-32">
          <h1 className="text-[48px] md:text-[72px] font-bold tracking-tight leading-[1.05]">{t.about.title}</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
           <div className="bg-white p-12 rounded-[48px] shadow-sm border border-black/5">
              <h2 className="text-[28px] font-bold mb-8">{t.about.story_title}</h2>
              <div className="text-[17px] text-black/60 leading-relaxed space-y-6 font-medium">
                 {t.about.story_content.split('.').map((p, i) => p.trim() && <p key={i}>{p}.</p>)}
              </div>
           </div>
           <div className="bg-black p-12 rounded-[48px] text-white flex flex-col justify-center">
              <div className="text-blue-500 font-bold uppercase text-[12px] tracking-widest mb-4">Our Vision</div>
              <p className="text-[32px] font-bold tracking-tight leading-tight">{t.about.mission_content}</p>
           </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-[32px] font-bold tracking-tight mb-20">{t.about.expertise_title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.expertise_list.map((exp, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-black/5 text-left group hover:bg-black hover:text-white transition-colors duration-500">
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-lg flex items-center justify-center mb-6 text-[14px] font-bold text-black group-hover:bg-white/10 group-hover:text-white">0{i+1}</div>
                <p className="text-[15px] font-bold leading-relaxed">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQPage = ({ lang }: { lang: Language }) => {
  const f = faqs[lang];
  return (
    <div className="pt-28 bg-white min-h-screen pb-40">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-24">
           <h1 className="text-[48px] font-bold tracking-tight">Questions. Answered.</h1>
        </div>
        <div className="space-y-4">
          {f.map((item, i) => (
            <details key={i} className="group border-b border-black/5 pb-4">
              <summary className="py-6 cursor-pointer list-none flex justify-between items-center text-[19px] font-bold text-black">
                {item.question}
                <svg className="w-5 h-5 text-black/30 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="pb-8 text-black/50 text-[16px] leading-relaxed font-medium">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-28 bg-[#f5f5f7] min-h-screen pb-40">
       <div className="max-w-[1100px] mx-auto px-6">
         <div className="text-center mb-20">
           <h1 className="text-[48px] md:text-[64px] font-bold tracking-tight mb-4">{t.contact.title}</h1>
           <p className="text-[21px] text-black/40 font-medium">{t.contact.subtitle}</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
               <div className="bg-white p-8 rounded-[32px] border border-black/5">
                  <div className="text-[12px] font-bold text-black/30 uppercase tracking-widest mb-2">Global Inquiry</div>
                  <div className="text-[19px] font-bold">tjdgus5362@naver.com</div>
               </div>
               <div className="bg-white p-8 rounded-[32px] border border-black/5">
                  <div className="text-[12px] font-bold text-black/30 uppercase tracking-widest mb-2">Messenger</div>
                  <div className="text-[19px] font-bold">WhatsApp: +82 10-5362-XXXX</div>
               </div>
               <div className="bg-black p-8 rounded-[32px] text-white">
                  <div className="text-[12px] font-bold text-white/40 uppercase tracking-widest mb-2">Headquarters</div>
                  <div className="text-[19px] font-bold">Pyeongtaek Global Logistic Center</div>
               </div>
            </div>

            <div className="lg:col-span-7">
               <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-black/5">
                  <form className="space-y-8" onSubmit={(e) => {e.preventDefault(); alert("Inquiry Submitted.");}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div>
                         <label className="block text-[13px] font-bold mb-3 text-black/40 uppercase tracking-widest">{t.contact.form_name}</label>
                         <input type="text" className="w-full border-b border-black/10 py-3 outline-none focus:border-black transition bg-transparent" placeholder="John Doe" required />
                       </div>
                       <div>
                         <label className="block text-[13px] font-bold mb-3 text-black/40 uppercase tracking-widest">{t.contact.form_email}</label>
                         <input type="email" className="w-full border-b border-black/10 py-3 outline-none focus:border-black transition bg-transparent" placeholder="email@example.com" required />
                       </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold mb-3 text-black/40 uppercase tracking-widest">{t.contact.form_message}</label>
                      <textarea rows={4} className="w-full border-b border-black/10 py-3 outline-none focus:border-black transition bg-transparent resize-none" placeholder="Item details, Qty, Destination..." required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-5 rounded-full font-bold text-[17px] hover:bg-zinc-800 transition shadow-xl active:scale-95">
                      {t.contact.form_submit}
                    </button>
                  </form>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

// --- App Root ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [lang, setLang] = useState<Language>('ko');

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/faq" element={<FAQPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
        <ChatAssistant lang={lang} />
      </div>
    </HashRouter>
  );
};

export default App;
