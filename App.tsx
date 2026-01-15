
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Language, TranslationSet } from './types';
import { translations, faqs } from './translations';
import { GoogleGenAI } from "@google/genai";

// --- Components ---

const BrandLogo = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
    <path d="M20 2L38 11V29L20 38L2 29V11L20 2Z" fill="#1A2A44"/>
    <path d="M20 6L34 13V27L20 34L6 27V13L20 6Z" stroke="#D4AF37" strokeWidth="1.5"/>
    <path d="M20 12V28M12 20H28" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <circle cx="20" cy="20" r="5" fill="#D4AF37" className="animate-pulse"/>
  </svg>
);

const Navbar = ({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) => {
  const t = translations[lang].nav;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: 'KR' },
    { code: 'en', label: 'EN' },
    { code: 'jp', label: 'JP' },
    { code: 'zh', label: 'CN' },
    { code: 'es', label: 'ES' },
  ];

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDrawerOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] apple-blur border-b border-black/5 h-20 flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsDrawerOpen(false)}>
            <BrandLogo />
            <div className="flex flex-col">
              <span className="text-[17px] font-black tracking-tight text-[#1A2A44] leading-tight">ONIONS</span>
              <span className="text-[11px] font-bold text-[#D4AF37] tracking-[0.2em]">BUSINESS</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex space-x-8 items-center">
            <div className="flex space-x-8 mr-4">
              <Link to="/" className="text-[13px] font-bold text-[#1A2A44]/60 hover:text-[#1A2A44] transition">{t.home}</Link>
              <Link to="/services" className="text-[13px] font-bold text-[#1A2A44]/60 hover:text-[#1A2A44] transition">{t.services}</Link>
              <Link to="/about" className="text-[13px] font-bold text-[#1A2A44]/60 hover:text-[#1A2A44] transition">{t.about}</Link>
              <Link to="/blog" className="text-[13px] font-bold text-[#1A2A44]/60 hover:text-[#1A2A44] transition">{t.blog}</Link>
              <Link to="/faq" className="text-[13px] font-bold text-[#1A2A44]/60 hover:text-[#1A2A44] transition">{t.faq}</Link>
            </div>
            
            <Link to="/contact" className="bg-[#1A2A44] text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:shadow-xl transition-all hover:-translate-y-0.5">{t.contact}</Link>
            
            <div className="flex space-x-1 bg-black/5 p-1 rounded-full border border-black/5 ml-4">
               {languages.map(l => (
                 <button 
                  key={l.code} 
                  onClick={() => setLang(l.code)} 
                  className={`px-3 py-1.5 rounded-full text-[10px] font-black transition-all ${lang === l.code ? 'bg-white text-[#1A2A44] shadow-sm scale-105' : 'text-[#1A2A44]/40 hover:text-[#1A2A44]'}`}
                 >
                   {l.label}
                 </button>
               ))}
            </div>
          </div>

          <button 
            onClick={() => setIsDrawerOpen(true)} 
            className="lg:hidden p-3 -mr-3 text-[#1A2A44] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Open Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-white z-[120] shadow-2xl transition-transform duration-500 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <BrandLogo />
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-[#1A2A44]/40 hover:text-[#1A2A44] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-[22px] font-black tracking-tight text-[#1A2A44]">
            <Link to="/" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#D4AF37] transition-colors">{t.home}</Link>
            <Link to="/services" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#D4AF37] transition-colors">{t.services}</Link>
            <Link to="/about" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#D4AF37] transition-colors">{t.about}</Link>
            <Link to="/blog" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#D4AF37] transition-colors">{t.blog}</Link>
            <Link to="/faq" onClick={() => setIsDrawerOpen(false)} className="hover:text-[#D4AF37] transition-colors">{t.faq}</Link>
            <Link to="/contact" onClick={() => setIsDrawerOpen(false)} className="text-[#D4AF37] pt-4 border-t border-black/5">{t.contact}</Link>
          </nav>

          <div className="mt-auto">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A2A44]/30 mb-4">Select Language</p>
             <div className="grid grid-cols-5 gap-2">
                {languages.map(l => (
                  <button 
                    key={l.code} 
                    onClick={() => { setLang(l.code); setIsDrawerOpen(false); }} 
                    className={`aspect-square rounded-xl text-[11px] font-black transition-all ${lang === l.code ? 'bg-[#1A2A44] text-white shadow-lg' : 'bg-black/5 text-[#1A2A44]/50 active:scale-95'}`}
                  >
                    {l.label}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-white text-[#1A2A44]/60 py-24 border-t border-black/5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-[13px] mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-[#1A2A44] font-bold">
               <BrandLogo />
               <div className="flex flex-col">
                  <span className="text-[17px] font-black tracking-tight">ONIONS</span>
                  <span className="text-[11px] font-bold text-[#D4AF37] tracking-[0.2em]">BUSINESS</span>
                </div>
            </div>
            <p className="leading-relaxed">Trusted Korean Export Partner. Built on military-grade integrity and mechanical expertise.</p>
          </div>
          <div>
            <h4 className="text-[#1A2A44] font-black mb-6 uppercase tracking-widest text-[11px]">Core Services</h4>
            <ul className="space-y-4 font-medium">
              <li>{t.services.items.tires.title}</li>
              <li>{t.services.items.cars.title}</li>
              <li>{t.services.items.machinery.title}</li>
              <li>{t.services.items.appliances.title}</li>
              <li>{t.services.items.clothing.title}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1A2A44] font-black mb-6 uppercase tracking-widest text-[11px]">Connect</h4>
            <ul className="space-y-4 font-medium">
              <li className="text-[#1A2A44]">onionsbusiness2@gmail.com</li>
              <li className="text-[#1A2A44]">+82 10-5772-5362</li>
              <li>5,000-Pyeong Proprietary Yard</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1A2A44] font-black mb-6 uppercase tracking-widest text-[11px]">Global</h4>
            <div className="flex flex-wrap gap-4 font-black">
               {['KR', 'EN', 'JP', 'CN', 'ES'].map(l => (
                  <span key={l} className="hover:text-[#D4AF37] cursor-pointer text-[11px]">{l}</span>
               ))}
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-[#1A2A44]/5 text-[12px] flex flex-col md:flex-row justify-between items-center opacity-40">
           <p>© 2024 Onions Business. All rights reserved.</p>
           <p className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Active</p>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-20">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 hero-gradient overflow-hidden">
        <div className="z-10 max-w-[1000px] pt-10">
           <span className="section-tag animate-bounce">{t.hero.tag}</span>
           <h1 className="text-[44px] md:text-[88px] font-black tracking-[-0.04em] leading-[1.05] text-[#1A2A44] text-balance mb-8 whitespace-pre-line">
             {t.hero.title}
           </h1>
           <p className="text-[18px] md:text-[24px] text-[#1A2A44]/50 max-w-[750px] mx-auto leading-relaxed font-medium mb-12">
             {t.hero.subtitle}
           </p>
           <div className="flex flex-col sm:flex-row gap-5 justify-center mb-24">
             <Link to="/contact" className="bg-[#1A2A44] text-white px-12 py-5 rounded-full font-black text-[18px] hover:shadow-2xl hover:scale-[1.05] transition-all active:scale-95">
               {t.hero.cta}
             </Link>
             <a href="https://wa.me/821057725362" className="bg-white text-[#1A2A44] px-12 py-5 rounded-full font-black text-[18px] border border-[#1A2A44]/10 hover:bg-[#FAF9F6] transition-all flex items-center justify-center hover:shadow-xl">
               <svg className="w-6 h-6 mr-3 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
               {t.hero.cta_whatsapp}
             </a>
           </div>
        </div>
        
        <div className="w-full max-w-[1200px] px-6 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent z-10 pointer-events-none"></div>
           <img 
             src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
             alt="Global Logistics Center" 
             className="w-full h-[350px] md:h-[650px] object-cover rounded-[40px] md:rounded-[60px] shadow-3xl brightness-[0.9] saturate-[1.1] transition-all hover:saturate-[1.2] bg-gray-100"
             loading="eager"
             onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad55?auto=format&fit=crop&q=80&w=2000'; }}
           />
           <div className="absolute -bottom-8 right-16 bg-white/95 backdrop-blur-xl p-10 rounded-[35px] shadow-2xl z-20 hidden lg:block max-w-[320px] warm-card">
              <p className="text-[16px] font-bold italic leading-relaxed text-[#1A2A44] mb-4">
                "{t.hero.quote}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-black text-white shadow-sm">O</div>
                <p className="text-[12px] font-black text-[#1A2A44] uppercase tracking-widest">{t.hero.representative}</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-28">
             <span className="section-tag">{t.foundations.tag}</span>
             <h2 className="text-[40px] md:text-[60px] font-black tracking-tight text-[#1A2A44]">{t.foundations.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { ...t.foundations.items.military, icon: "🎖️" },
              { ...t.foundations.items.technical, icon: "🔧" },
              { ...t.foundations.items.infrastructure, icon: "🏗️" },
              { ...t.foundations.items.network, icon: "🌐" }
            ].map((benefit, i) => (
              <div key={i} className="warm-card p-12 rounded-[45px] flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-[#FAF9F6] rounded-[28px] flex items-center justify-center text-4xl mb-10 border border-[#D4AF37]/10 shadow-sm group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-[22px] font-bold mb-5">{benefit.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#1A2A44]/60 font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];

  // Verified IDs for service items
  const serviceItemImages: Record<string, string> = {
    tires: "https://images.unsplash.com/photo-1544215891-ceb1ac432d97?auto=format&fit=crop&q=80&w=1200",
    cars: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbac0?auto=format&fit=crop&q=80&w=1200",
    machinery: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?auto=format&fit=crop&q=80&w=1200",
    appliances: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    clothing: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200"
  };

  return (
    <div className="pt-28 pb-40 bg-[#FAF9F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-36">
          <span className="section-tag">{t.services.tag}</span>
          <h1 className="text-[48px] md:text-[72px] font-black tracking-tight mb-8 leading-none">{t.services.title}</h1>
          <p className="text-[22px] text-[#1A2A44]/40 font-medium max-w-[800px] mx-auto">{t.services.description}</p>
        </div>

        <div className="mb-48">
           <h2 className="text-[36px] font-black text-center mb-20 text-[#1A2A44]">{t.services.process_title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {t.services.process_steps.map((step, i) => (
                <div key={i} className="warm-card p-12 rounded-[50px] relative overflow-hidden group">
                  <div className="text-[120px] font-black text-[#D4AF37]/5 absolute -right-6 -bottom-10 select-none group-hover:text-[#D4AF37]/10 transition-all">0{i+1}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#1A2A44] text-white rounded-2xl flex items-center justify-center text-[16px] font-black mb-10 shadow-xl group-hover:scale-110 transition-transform">0{i+1}</div>
                    <h3 className="font-black text-[19px] mb-5 text-balance leading-tight">{step.title}</h3>
                    <p className="text-[14px] text-[#1A2A44]/60 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {Object.entries(t.services.items).map(([key, item]) => (
             <div key={key} className="warm-card rounded-[60px] flex flex-col group overflow-hidden">
                <div className="h-[300px] overflow-hidden bg-gray-200">
                   <img 
                    src={serviceItemImages[key]} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={item.title} 
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1200'; }}
                   />
                </div>
                <div className="p-10 lg:p-14 flex flex-col flex-1">
                  <div className="w-16 h-16 bg-[#1A2A44] text-white rounded-[24px] flex items-center justify-center mb-10 shadow-lg group-hover:bg-[#D4AF37] transition-all transform group-hover:rotate-6">
                    <BrandLogo />
                  </div>
                  <h3 className="text-[28px] font-black mb-5">{item.title}</h3>
                  <p className="text-[#1A2A44]/60 text-[17px] leading-relaxed mb-12 font-medium">{item.desc}</p>
                  <div className="mt-auto pt-10 border-t border-[#1A2A44]/5 flex justify-between items-center">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#D4AF37]">{t.services.moq_label}</span>
                        <span className="text-[15px] font-black text-[#1A2A44]">{t.services.moq_value}</span>
                     </div>
                     <Link to="/contact" className="bg-[#FAF9F6] border border-[#1A2A44]/10 px-10 py-3.5 rounded-full font-black text-[14px] hover:bg-[#1A2A44] hover:text-white transition-all shadow-sm active:scale-95">{translations[lang].nav.contact}</Link>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const BlogPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-28 pb-48 bg-[#FAF9F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-36">
           <span className="section-tag">{t.blog.tag}</span>
           <h1 className="text-[56px] md:text-[80px] font-black tracking-tight mb-6 leading-none">{t.blog.title}</h1>
           <p className="text-[22px] text-[#1A2A44]/40 font-medium">{t.blog.subtitle}</p>
        </div>

        <div className="mb-40">
           <div className="flex justify-between items-end mb-16 border-b border-[#1A2A44]/10 pb-8">
              <h2 className="text-[36px] font-black tracking-tight">{t.blog.sections.inventory}</h2>
              <div className="flex items-center text-[13px] font-black text-green-600 uppercase tracking-widest bg-green-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-ping"></span>
                {t.blog.live_tag}
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                "https://images.unsplash.com/photo-1544215891-ceb1ac432d97",
                "https://images.unsplash.com/photo-1567808291548-fc3ee04dbac0",
                "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4"
              ].map((img, i) => (
                <div key={i} className="warm-card rounded-[55px] overflow-hidden group">
                   <div className="aspect-[5/4] bg-gray-200 overflow-hidden">
                      <img src={`${img}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt="Inventory Item" />
                   </div>
                   <div className="p-10 lg:p-12">
                      <div className="flex justify-between mb-6">
                         <span className="text-[11px] font-black bg-[#FAF9F6] border border-[#D4AF37]/20 text-[#D4AF37] px-5 py-2 rounded-full uppercase">Verified A+</span>
                         <span className="text-[12px] font-black text-[#1A2A44]/20 tracking-widest">ID: {2024001 + i}</span>
                      </div>
                      <h3 className="text-[24px] font-black mb-4">{keyNames[i]}</h3>
                      <p className="text-[16px] text-[#1A2A44]/50 mb-10 font-medium">Stock available in our proprietary yard.</p>
                      <button className="w-full bg-[#1A2A44] text-white py-5 rounded-[25px] font-black text-[16px] hover:shadow-2xl transition-all active:scale-95">{t.blog.inventory_btn}</button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-[#FAF9F6] border border-[#D4AF37]/10 rounded-[70px] p-12 lg:p-28 overflow-hidden relative shadow-sm">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none grayscale">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover" alt="Yard Background" />
           </div>
           <div className="relative z-10 max-w-[700px]">
              <span className="section-tag">{t.blog.tag}</span>
              <h2 className="text-[44px] md:text-[68px] font-black tracking-tight mb-10 leading-[1]">{t.blog.sections.tour}</h2>
              <p className="text-[21px] text-[#1A2A44]/50 leading-relaxed mb-14 font-medium italic">"We manage dedicated logistics space to ensure your containers are packed with absolute precision."</p>
              <button className="bg-[#D4AF37] text-white px-14 py-6 rounded-full font-black text-xl hover:shadow-2xl transition-all hover:scale-105">Book Yard Tour</button>
           </div>
        </div>
      </div>
    </div>
  );
};

const keyNames = ["Premium Tires", "SUV Fleet Mix", "Heavy Excavators"];

const AboutPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="pt-28 bg-[#FAF9F6]">
      <div className="max-w-[1200px] mx-auto px-6 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48">
           <div className="order-2 lg:order-1">
              <span className="section-tag">{t.about.tag}</span>
              <h1 className="text-[56px] md:text-[80px] font-black tracking-tight leading-[1] mb-14">{t.about.title}</h1>
              <h2 className="text-[32px] font-black mb-10 text-[#D4AF37] leading-tight">{t.about.story_title}</h2>
              <div className="text-[19px] text-[#1A2A44]/70 leading-relaxed space-y-10 font-medium">
                 {t.about.story_content}
              </div>
           </div>
           {/* Verified CEO image ID */}
           <div className="order-1 lg:order-2 rounded-[50px] md:rounded-[70px] overflow-hidden shadow-3xl h-[500px] lg:h-[800px] relative border-[10px] md:border-[12px] border-white group bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1519085115968-39902309a797?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                alt="Representative Onion" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'; }}
              />
              <div className="absolute bottom-10 left-10 md:bottom-12 md:left-12 bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-[40px] shadow-2xl">
                 <div className="text-[12px] font-black text-[#D4AF37] tracking-[0.3em] mb-2 uppercase">Representative CEO</div>
                 <div className="text-[28px] font-black text-[#1A2A44]">Officer Lee (Onion)</div>
              </div>
           </div>
        </div>
        
        <div className="bg-white rounded-[60px] md:rounded-[70px] p-12 lg:p-32 shadow-sm border border-[#D4AF37]/5 mb-48 text-center">
           <h3 className="text-[42px] font-black tracking-tight mb-28">{t.about.expertise_title}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.about.expertise_list.map((exp, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-[#FAF9F6] text-[#D4AF37] rounded-[30px] flex items-center justify-center mb-10 text-[24px] font-black group-hover:bg-[#1A2A44] group-hover:text-white transition-all duration-700 shadow-sm border border-[#D4AF37]/10">0{i+1}</div>
                <p className="text-[19px] font-black leading-tight px-6">{exp}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-48">
           <div className="text-center mb-28">
              <span className="section-tag">Infrastructure</span>
              <h2 className="text-[44px] md:text-[68px] font-black tracking-tight">Global Logistics Hub</h2>
              <p className="mt-8 text-[21px] text-[#1A2A44]/40 font-medium max-w-[800px] mx-auto">Take a visual tour of our nationwide network and dedicated logistics center.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", title: "Global Logistics Hub", span: "md:col-span-2 md:row-span-2" },
                { url: "https://images.unsplash.com/photo-1590674899484-d5640e854abe", title: "Inspection Zone", span: "" },
                { url: "https://images.unsplash.com/photo-1579412691525-2d7f939ff7a3", title: "Smart Inventory", span: "" },
                { url: "https://images.unsplash.com/photo-1494412574743-0194849a6431", title: "Global Shipments", span: "md:col-span-3 h-[450px]" }
              ].map((img, i) => (
                <div key={i} className={`relative overflow-hidden rounded-[55px] group shadow-2xl ${img.span} bg-gray-200`}>
                   <img src={`${img.url}?auto=format&fit=crop&q=80&w=1500`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={img.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                      <span className="text-[#D4AF37] font-black text-[11px] tracking-[0.3em] uppercase mb-2">Facility Section {i+1}</span>
                      <h3 className="text-white font-black text-[26px] tracking-tight">{img.title}</h3>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-[#1A2A44] rounded-[60px] md:rounded-[75px] p-16 lg:p-32 text-white text-center shadow-3xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <h2 className="text-[36px] md:text-[56px] font-black tracking-tight mb-10 leading-none relative z-10">{t.about.cta_title}</h2>
           <p className="text-[20px] text-white/50 mb-16 max-w-[700px] mx-auto font-medium relative z-10">{t.about.cta_desc}</p>
           <Link to="/contact" className="bg-[#D4AF37] text-white px-16 py-6 rounded-full font-black text-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 relative z-10 inline-block">{t.about.cta_btn}</Link>
        </div>
      </div>
    </div>
  );
};

const FAQPage = ({ lang }: { lang: Language }) => {
  const f = faqs[lang];
  return (
    <div className="pt-28 bg-[#FAF9F6] min-h-screen pb-48">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-32">
           <span className="section-tag">FAQ</span>
           <h1 className="text-[56px] md:text-[80px] font-black tracking-tight leading-none text-balance">Frequently Asked Questions</h1>
        </div>
        <div className="space-y-8">
          {f.map((item, i) => (
            <details key={i} className="group warm-card rounded-[40px] overflow-hidden border border-[#D4AF37]/5">
              <summary className="px-10 lg:px-12 py-10 cursor-pointer list-none flex justify-between items-center text-[22px] font-black text-[#1A2A44] leading-tight">
                {item.question}
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-open:rotate-180 transition-transform bg-white shadow-sm shrink-0 ml-4">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </summary>
              <div className="px-10 lg:px-12 pb-12 text-[#1A2A44]/50 text-[18px] leading-relaxed font-medium border-t border-[#1A2A44]/5 pt-8 mx-10 lg:mx-12 mb-4">
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
    <div className="pt-28 bg-[#FAF9F6] min-h-screen pb-48">
       <div className="max-w-[1200px] mx-auto px-6">
         <div className="text-center mb-36">
           <span className="section-tag">{t.contact.tag}</span>
           <h1 className="text-[56px] md:text-[88px] font-black tracking-tight mb-6 leading-none">{t.contact.title}</h1>
           <p className="text-[24px] text-[#1A2A44]/40 font-medium max-w-[700px] mx-auto">{t.contact.subtitle}</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-10">
               <div className="warm-card p-12 rounded-[50px]">
                  <div className="text-[12px] font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-4">Email</div>
                  <div className="text-[24px] font-black break-words">onionsbusiness2@gmail.com</div>
               </div>
               <div className="warm-card p-12 rounded-[50px]">
                  <div className="text-[12px] font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-4">WhatsApp</div>
                  <div className="text-[26px] font-black text-[#1A2A44]">+82 10-5772-5362</div>
               </div>
               <div className="bg-[#1A2A44] p-12 lg:p-16 rounded-[60px] text-white shadow-3xl relative overflow-hidden group">
                  <div className="text-[12px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Global Hub</div>
                  <div className="text-[26px] font-black mb-6">Logistics Center</div>
                  <p className="text-white/40 text-[15px] font-bold leading-relaxed">Direct appointments required for site visits.</p>
               </div>
            </div>

            <div className="lg:col-span-7">
               <div className="bg-white p-10 lg:p-20 rounded-[60px] lg:rounded-[75px] shadow-3xl border border-[#D4AF37]/5">
                  <form className="space-y-12" onSubmit={(e) => {e.preventDefault(); alert("Inquiry Sent Successfully.");}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="relative group">
                         <label className="block text-[11px] font-black mb-5 text-[#D4AF37] uppercase tracking-[0.2em]">{t.contact.form_name}</label>
                         <input type="text" className="w-full border-b-2 border-[#1A2A44]/10 py-5 outline-none focus:border-[#D4AF37] transition-all bg-transparent text-[20px] font-black placeholder:text-[#1A2A44]/10" placeholder="Name" required />
                       </div>
                       <div className="relative group">
                         <label className="block text-[11px] font-black mb-5 text-[#D4AF37] uppercase tracking-[0.2em]">{t.contact.form_email}</label>
                         <input type="email" className="w-full border-b-2 border-[#1A2A44]/10 py-5 outline-none focus:border-[#D4AF37] transition-all bg-transparent text-[20px] font-black placeholder:text-[#1A2A44]/10" placeholder="email@domain.com" required />
                       </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-[11px] font-black mb-5 text-[#D4AF37] uppercase tracking-[0.2em]">{t.contact.form_message}</label>
                      <textarea rows={5} className="w-full border-b-2 border-[#1A2A44]/10 py-5 outline-none focus:border-[#D4AF37] transition-all bg-transparent resize-none text-[20px] font-black placeholder:text-[#1A2A44]/10" placeholder="Details..." required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#1A2A44] text-white py-8 rounded-full font-black text-[22px] hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl">
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
      <div className="min-h-screen flex flex-col selection:bg-[#D4AF37] selection:text-white">
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/blog" element={<BlogPage lang={lang} />} />
            <Route path="/faq" element={<FAQPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </HashRouter>
  );
};

export default App;
