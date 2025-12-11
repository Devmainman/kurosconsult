import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, ShoppingCart, Layout, TrendingUp, Users } from 'lucide-react';

export const ServicesPage = ({ setPage }) => {
  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-20">
           <h1 className="text-5xl font-light text-[#135E73] mb-6">Our <span className="font-bold">Core Offerings</span></h1>
           <p className="text-xl text-gray-500 font-light">
             We develop scalable digital products and provide strategic solutions tailored for modern businesses.
           </p>
        </div>

        {/* 1. Digital Products */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-[#2FA8C7]"></span>
            <h2 className="text-2xl font-bold text-[#135E73] uppercase tracking-widest">Scalable Products</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone />, title: 'Mobile Applications', desc: 'Native and cross-platform apps designed for seamless user experiences.' },
              { icon: <ShoppingCart />, title: 'E-Commerce Systems', desc: 'Robust online store platforms with integrated payment gateways.' },
              { icon: <Monitor />, title: 'CRM & ERP', desc: 'Custom dashboards and workflow systems to manage business operations.' },
              { icon: <Layout />, title: 'Digital Real Estate', desc: 'Platforms supporting secure land and property transactions.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA8C7]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#135E73]/5 rounded-2xl flex items-center justify-center text-[#135E73] mb-6 group-hover:bg-[#135E73] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#135E73] mb-3">{item.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Business Solutions */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-[#FEC300]"></span>
            <h2 className="text-2xl font-bold text-[#135E73] uppercase tracking-widest">Business Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-[#135E73] text-white p-10 rounded-[2rem] relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-light mb-6">Creative Branding & <br/><span className="font-bold">Visibility</span></h3>
                  <ul className="space-y-4 font-light text-white/80">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FEC300] rounded-full"/>Marketing Strategy</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FEC300] rounded-full"/>Visual Identity Design</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#FEC300] rounded-full"/>Creative Production</li>
                  </ul>
                </div>
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#2FA8C7] opacity-20 blur-3xl rounded-full"></div>
             </div>

             <div className="bg-white p-10 rounded-[2rem] border border-gray-200 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-light text-[#135E73] mb-6">Project Management & <br/><span className="font-bold">Strategy</span></h3>
                  <ul className="space-y-4 font-light text-gray-500">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#135E73] rounded-full"/>Agile Execution</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#135E73] rounded-full"/>Corporate Strategy</li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#135E73] rounded-full"/>Operational Efficiency</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>

        {/* 3. Learning & Development */}
        <div className="bg-[#FEC300]/10 p-12 rounded-[3rem] text-center">
           <div className="w-16 h-16 bg-[#FEC300] text-[#135E73] rounded-full flex items-center justify-center mx-auto mb-6">
             <TrendingUp size={32} />
           </div>
           <h2 className="text-3xl font-bold text-[#135E73] mb-4">Learning & Capacity Development</h2>
           <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
             We focus on workplace improvement and human capacity development through skill-based training and digital upskilling.
           </p>
           <button onClick={() => setPage('impact')} className="text-[#135E73] font-bold border-b border-[#135E73] pb-1 hover:text-[#2FA8C7] hover:border-[#2FA8C7] transition-all">
             View Our Programs
           </button>
        </div>

      </div>
    </div>
  );
};