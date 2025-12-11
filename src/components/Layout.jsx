import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/kuro.png'; 
import logowhite from '../assets/kurowhite.png'; 

export const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Who We Are' },
    { id: 'services', label: 'What We Do' },
    { id: 'impact', label: 'Impact' },
    { id: 'portfolio', label: 'Works' },
    { id: 'contact', label: 'Let\'s Talk' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center">
          {/* Brand Identity */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
            whileHover={{ x: 2 }}
          >
            {/* Logo Image Container */}
            <div className="w-52 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105">
              <img src={logo} alt="Kuros' Consult Logo" className="w-full h-full object-contain" />
            </div>
           
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center bg-white/60 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/40 shadow-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 relative overflow-hidden group ${
                  currentPage === item.id 
                    ? 'text-white shadow-md' 
                    : 'text-gray-500 hover:text-[#135E73]'
                }`}
              >
                {currentPage === item.id && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#135E73] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <button className="lg:hidden p-2 text-[#135E73]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-white z-40 lg:hidden flex flex-col pt-24 px-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }}
                className={`text-3xl font-light text-left py-4 border-b border-gray-100 ${
                  currentPage === item.id ? 'text-[#135E73] font-bold' : 'text-gray-400'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = ({ setPage }) => (
  <footer className="bg-[#135E73] text-white pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2FA8C7] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-12 gap-12 mb-20 pb-16">
        <div className="md:col-span-5">
          <div className="flex items-start mb-6">
             <div className="w-50 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logowhite} alt="KC Logo" className="w-full h-full object-contain" />
             </div>
            
          </div>
          <p className="text-white/70 font-light leading-relaxed mb-8 max-w-md text-lg">
            The engine room of creativity, technology, and opportunity. We connect youth talent with meaningful work and empower brands with transformative digital solutions.
          </p>
          <div className="flex gap-4">
            {[<Instagram size={20} />, <Facebook size={20} />, <Linkedin size={20} />].map((icon, i) => (
              <button key={i} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#FEC300] hover:border-[#FEC300] hover:text-[#135E73] transition-all duration-300">
                {icon}
              </button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="text-[#FEC300] font-bold mb-8 uppercase tracking-widest text-xs">Ecosystem</h4>
          <ul className="space-y-4 text-white/60 font-light">
            {['Tech Them Young', 'Baby Step Program', 'Project 200', 'Digital Real Estate'].map(item => (
              <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-[#FEC300] font-bold mb-8 uppercase tracking-widest text-xs">Headquarters</h4>
          <ul className="space-y-6 text-white/80 font-light">
            <li className="flex items-start gap-4">
              <MapPin className="text-[#FEC300] shrink-0" size={20} />
              <span>11 Tombia Street, GRA Phase 2,<br/>Port Harcourt, Rivers State.</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-[#FEC300] shrink-0" size={20} />
              <span>0705 878 3742</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-[#FEC300] shrink-0" size={20} />
              <span>info@kurosconsult.com.ng</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-light uppercase tracking-widest">
        <p>© 2024 Kuros' Consult Limited. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/2347058783742"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-green-900/20 hover:shadow-2xl hover:bg-green-500 transition-all flex items-center justify-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
  >
    <MessageCircle size={28} />
  </motion.a>
);