import React from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
            <div>
                <span className="text-[#FEC300] font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                <h1 className="text-5xl md:text-6xl font-light text-[#135E73] mb-8">Let's build your <br/><span className="font-bold">Digital Future.</span></h1>
                <p className="text-xl text-gray-500 font-light mb-12">
                   Whether you need a digital product, corporate strategy, or want to support our youth initiatives, we are ready to listen.
                </p>
                
                <div className="space-y-8">
                    {[
                        { icon: <Phone size={20}/>, title: "Call Us", text: "0705 878 3742" },
                        { icon: <Mail size={20}/>, title: "Email Us", text: "info@kurosconsult.com.ng" },
                        { icon: <MapPin size={20}/>, title: "Visit HQ", text: "11 Tombia Street, GRA Phase 2, Port Harcourt, Rivers State" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-6 text-gray-600 font-light group">
                            <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-[#135E73] group-hover:bg-[#135E73] group-hover:text-white transition-all duration-300 shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#135E73] text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                                <p className="text-lg">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <form className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-[#135E73]/5 border border-gray-100">
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">First Name</label>
                            <input className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">Last Name</label>
                            <input className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">Email Address</label>
                        <input className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">Service Interest</label>
                        <select className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all text-gray-600">
                           <option>Select a service...</option>
                           <option>Digital Product Development</option>
                           <option>Branding & Marketing</option>
                           <option>EdTech / Training</option>
                           <option>Consulting</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">Message</label>
                        <textarea rows="4" className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all" placeholder="Tell us about your project or inquiry..."></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#135E73] to-[#1B7F9E] text-white py-5 rounded-xl font-bold tracking-wide hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                        SEND MESSAGE 
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};