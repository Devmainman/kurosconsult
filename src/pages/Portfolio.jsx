import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Smartphone, Globe, Layout, Monitor } from 'lucide-react';

export const PortfolioPage = ({ setPage }) => {
  const [filter, setFilter] = useState('all');

  // Projects derived from PDF content [cite: 50-55, 145]
  const projects = [
    {
      id: 1,
      title: "Sparkxy Wash",
      category: "impact",
      type: "Service Platform",
      desc: "A digital solution streamlining service delivery for the cleaning industry, demonstrating our capability in creating end-user digital experiences.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070", // Placeholder abstract tech image
      tags: ["Mobile App", "Logistics", "Consumer Tech"]
    },
    {
      id: 2,
      title: "Sparkxy Fix",
      category: "products",
      type: "Utility App",
      desc: "Connecting users with skilled artisans. Part of our initiative to use technology to solve everyday logistics and service problems.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070",
      tags: ["Utility", "Marketplace", "Deployment"]
    },
    {
      id: 3,
      title: "Digital Real Estate Hub",
      category: "products",
      type: "Web Platform",
      desc: "A dedicated platform supporting land and property transactions, increasing transparency and ease of business in the property sector.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973",
      tags: ["Real Estate", "Transactions", "Web Platform"]
    },
    {
      id: 4,
      title: "Corporate CRM Suite",
      category: "products",
      type: "Enterprise Software",
      desc: "Custom CRM dashboards designed to boost productivity and sales for corporate clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      tags: ["B2B", "Dashboard", "Data"]
    },
    {
      id: 5,
      title: "Tech Them Young Portal",
      category: "impact",
      type: "EdTech Platform",
      desc: "The learning management interface for our flagship digital empowerment program.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132",
      tags: ["Education", "Portal", "Youth"]
    },
    {
      id: 6,
      title: "Kuros Brand Identity",
      category: "branding",
      type: "Corporate Branding",
      desc: "Our own comprehensive brand overhaul, establishing the 'Digital Ecosystem' visual language.",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000",
      tags: ["Identity", "Strategy", "Design"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA] min-h-screen">
       <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div className="max-w-2xl">
                <span className="text-[#FEC300] font-bold tracking-widest uppercase text-sm mb-2 block">Our Work</span>
                <h1 className="text-5xl font-light text-[#135E73]">
                   Innovation in <span className="font-bold">Action.</span>
                </h1>
                <p className="text-gray-500 mt-6 font-light text-lg">
                   From enterprise ERPs to social impact platforms like Sparkxy, we build solutions that drive growth. 
                </p>
             </div>
             
             {/* Filter Tabs */}
             <div className="flex flex-wrap gap-2 bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                {['all', 'products', 'branding', 'impact'].map((f) => (
                   <button
                     key={f}
                     onClick={() => setFilter(f)}
                     className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                        filter === f 
                        ? 'bg-[#135E73] text-white shadow-md' 
                        : 'text-gray-500 hover:text-[#135E73] hover:bg-gray-50'
                     }`}
                   >
                     {f}
                   </button>
                ))}
             </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             <AnimatePresence>
                {filteredProjects.map((project) => (
                   <motion.div
                     layout
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.3 }}
                     key={project.id}
                     className="group cursor-pointer"
                   >
                      <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative mb-6 shadow-md">
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10" />
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                         />
                         <div className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowUpRight />
                         </div>
                         <div className="absolute bottom-6 left-6 z-20">
                            <span className="bg-[#FEC300] text-[#135E73] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                               {project.type}
                            </span>
                         </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#135E73] mb-2 group-hover:text-[#2FA8C7] transition-colors">
                         {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">
                         {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                         {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded-md">
                               #{tag}
                            </span>
                         ))}
                      </div>
                   </motion.div>
                ))}
             </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <div className="mt-24 bg-[#135E73] rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl font-light mb-6">Have a project in mind?</h2>
                <button onClick={() => setPage('contact')} className="bg-[#FEC300] text-[#135E73] px-10 py-4 rounded-full font-bold hover:bg-white transition-colors">
                   Start Your Project
                </button>
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          </div>
       </div>
    </div>
  );
};