import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen } from 'lucide-react';

export const ImpactPage = ({ setPage }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
       <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-light text-[#135E73] mb-6">Empowering the <span className="font-bold">Next Gen</span></h1>
          <p className="text-xl text-gray-500 font-light">
             We inspire, educate, and innovate. Our initiatives are designed to bridge the digital divide and provide inclusive education.
          </p>
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
          {/* Tech Them Young */}
          <div className="col-span-1 lg:col-span-2 bg-[#135E73] text-white rounded-[2.5rem] p-12 relative overflow-hidden group">
             <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                   <Users size={32} className="text-[#FEC300]" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Tech Them Young</h2>
                <p className="text-white/70 text-lg font-light mb-8 max-w-md">
                   Our flagship EdTech and Digital Empowerment program. We equip young minds with coding, robotics, and digital literacy skills to prepare them for the future of work.
                </p>
                <button onClick={() => setPage('contact')} className="bg-[#FEC300] text-[#135E73] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                   Partner With Us
                </button>
             </div>
             <div className="absolute right-0 top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070')] bg-cover opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Baby Step */}
          <div className="bg-[#FAFAD2] rounded-[2.5rem] p-10 flex flex-col justify-between">
             <div>
                <div className="w-14 h-14 bg-[#FEC300] text-[#135E73] rounded-full flex items-center justify-center mb-6">
                   <Heart size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#135E73] mb-4">Baby Step Program</h3>
                <p className="text-[#135E73]/70 font-light leading-relaxed">
                   An early learning innovation program focused on special needs education and technology integration, ensuring no child is left behind.
                </p>
             </div>
          </div>

          {/* Project 200 */}
          <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 flex flex-col justify-between">
             <div>
                <div className="w-14 h-14 bg-[#2FA8C7] text-white rounded-full flex items-center justify-center mb-6">
                   <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#135E73] mb-4">Project 200</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                   A dedicated Skill & Leadership Development initiative aimed at upskilling 200 youths annually in high-demand digital competences.
                </p>
             </div>
          </div>

          {/* CSR */}
          <div className="col-span-1 lg:col-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-12 flex items-center justify-between">
             <div>
                <h3 className="text-2xl font-bold text-[#135E73] mb-2">Corporate Social Responsibility</h3>
                <p className="text-gray-500 font-light">Community projects driving lasting positive impact.</p>
             </div>
             <div className="w-16 h-16 bg-[#135E73]/5 rounded-full flex items-center justify-center">
                <Users className="text-[#135E73]" />
             </div>
          </div>
       </div>
    </div>
  );
};