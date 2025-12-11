import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, User, Quote, MapPin } from 'lucide-react';

export const AboutPage = ({ setPage }) => {
  return (
    <div className="pt-32 pb-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro - "More than a startup" [cite: 12] */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <span className="text-[#FEC300] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-light text-[#135E73] mb-8 leading-tight">
            More than a startup. <br/>
            We are a <span className="font-bold">strategic ecosystem.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed border-l-4 border-[#2FA8C7] pl-8">
            Kuros’ Consult Limited is a multi-disciplinary innovation and digital solutions company. We serve as the umbrella for multiple business units—unifying talent, technology, and strategy to advance businesses, institutions, and communities in the digital age. [cite: 11, 15]
          </p>
        </motion.div>

        {/* Vision & Mission Cards  */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#135E73]/5 rounded-bl-[2.5rem] transition-colors group-hover:bg-[#135E73]/10" />
            <Target className="text-[#135E73] w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-[#135E73] mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              To become Africa’s leading youth-driven innovation and digital transformation company that delivers products, services, and programs to empower organizations, strengthen industries, and elevate communities. [cite: 25]
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#135E73] p-12 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#2FA8C7] rounded-full blur-[80px] opacity-30" />
            <Compass className="text-[#FEC300] w-12 h-12 mb-6 relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-white/80 leading-relaxed font-light relative z-10">
              To build a multi-sector ecosystem where young professionals collaborate to deliver world-class services, develop breakthrough ideas, and power businesses with the tools needed to thrive. 
            </p>
          </motion.div>
        </div>

        {/* VALUES - GEOID & STIPE [cite: 99] */}
        <div className="mb-32">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-light text-[#135E73]">Our Core <span className="font-bold">DNA</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* GEOID - The Model */}
            <div>
              <h3 className="text-[#2FA8C7] font-bold tracking-widest uppercase mb-8 border-b border-gray-200 pb-4">GEOID (Our Model)</h3>
              <div className="space-y-4">
                {[
                  { l: 'G', t: 'Growth', d: 'Scalable progress' },
                  { l: 'E', t: 'Experience', d: 'User-centric delivery' },
                  { l: 'O', t: 'Orientation', d: 'Strategic direction' },
                  { l: 'I', t: 'Innovation', d: 'Forward thinking' },
                  { l: 'D', t: 'Discipline', d: 'Operational excellence' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-4xl font-black text-[#135E73]/10 w-12">{item.l}</span>
                    <div>
                      <h4 className="text-[#135E73] font-bold text-lg">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

             {/* STIPE - Reproduce */}
             <div>
              <h3 className="text-[#FEC300] font-bold tracking-widest uppercase mb-8 border-b border-gray-200 pb-4">STIPE (We Reproduce)</h3>
              <div className="space-y-4">
                {[
                  { l: 'S', t: 'Solution', d: 'Answers to challenges' },
                  { l: 'T', t: 'Teamwork', d: 'Collective brilliance' },
                  { l: 'I', t: 'Integrity', d: 'Transparency first' },
                  { l: 'P', t: 'Partnership', d: 'Shared success' },
                  { l: 'E', t: 'Effectiveness', d: 'Measurable impact' }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-4xl font-black text-[#FEC300]/20 w-12">{item.l}</span>
                    <div>
                      <h4 className="text-[#135E73] font-bold text-lg">{item.t}</h4>
                      <p className="text-sm text-gray-500">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section [cite: 119-122] */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-[#135E73]/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#135E73] via-[#2FA8C7] to-[#FEC300]" />
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
               <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[#135E73] flex items-center justify-center text-white/20">
                    <User size={80} />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg">
                    <p className="text-[#135E73] font-bold">Becky Clement</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Founder & Visionary</p>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Quote className="text-[#FEC300] w-16 h-16 mb-8 opacity-50" />
              <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-[#2FA8C7]" />
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Port Harcourt, Nigeria</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-[#135E73] mb-8 leading-tight">
                Empowering decisions drive <br/><span className="font-bold">sustainable success.</span>
              </h2>
              <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                <p>
                  Founded in Port Harcourt, Kuros' Consult was born from a deep passion for innovation and youth-driven excellence. [cite: 119]
                </p>
                <p>
                  We are not just a service provider; we are a hub of strategic excellence dedicated to equipping clients with the insights, strategies, and digital tools they need to thrive. Under my leadership, we share a singular mission: to deliver exceptional, client-centered services that inspire transformation. [cite: 122]
                </p>
                <p className="font-medium text-[#135E73]">
                  "Welcome to Kuros’ Consult, where vision meets execution." [cite: 136]
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};