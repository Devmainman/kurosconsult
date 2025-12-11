// src/pages/OtherPages.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const ImpactPage = () => (
  <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
    <h1 className="text-5xl font-thin text-[#135E73] mb-12">Social <span className="font-bold">Impact</span></h1>
    <div className="grid lg:grid-cols-2 gap-12">
        {['Tech Them Young', 'Baby Step Program'].map((title, i) => (
            <div key={i} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${i === 0 ? 'from-[#135E73] to-[#2FA8C7]' : 'from-[#FEC300] to-[#d4a000]'}`}></div>
                <div className="relative z-10 p-12 h-full flex flex-col justify-end">
                    <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-white/80 font-light">Empowering the next generation through digital literacy and inclusive education.</p>
                </div>
            </div>
        ))}
    </div>
  </div>
);

export const PortfolioPage = () => (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-thin text-[#135E73] mb-16">Selected <span className="font-bold">Works</span></h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-100 aspect-[4/5] rounded-2xl relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-[#135E73] opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white font-light text-lg tracking-widest border border-white/30 px-6 py-2 rounded-full">VIEW CASE</span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-[#135E73] font-bold text-xl group-hover:text-white transition-colors">Project Name</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white/70 transition-colors">Web Development</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const ContactPage = () => (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
            <div>
                <h1 className="text-6xl font-thin text-[#135E73] mb-8">Let's <span className="font-bold">Talk.</span></h1>
                <p className="text-xl text-gray-500 font-light mb-12">Have a project in mind? We'd love to hear from you.</p>
                
                <div className="space-y-8">
                    {[
                        { icon: <Phone size={20}/>, text: "+234 705 878 3742" },
                        { icon: <Mail size={20}/>, text: "info@kurosconsult.com.ng" },
                        { icon: <MapPin size={20}/>, text: "11 Tombia St, GRA Phase 2, PH" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-gray-600 font-light">
                            <div className="w-12 h-12 bg-[#2FA8C7]/10 rounded-full flex items-center justify-center text-[#135E73]">{item.icon}</div>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

            <form className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#135E73] mb-2 uppercase tracking-wide">Name</label>
                        <input className="w-full bg-gray-50 border-0 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] transition-all" placeholder="Your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#135E73] mb-2 uppercase tracking-wide">Email</label>
                        <input className="w-full bg-gray-50 border-0 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] transition-all" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#135E73] mb-2 uppercase tracking-wide">Message</label>
                        <textarea rows="4" className="w-full bg-gray-50 border-0 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] transition-all" placeholder="Tell us about your project"></textarea>
                    </div>
                    <button className="w-full bg-[#135E73] text-white py-4 rounded-xl font-bold tracking-wide hover:bg-[#0f4c5e] transition-colors flex items-center justify-center gap-2">
                        SEND MESSAGE <Send size={18} />
                    </button>
                </div>
            </form>
        </div>
    </div>
);