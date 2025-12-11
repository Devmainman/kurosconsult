import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Layers, Smartphone, ShoppingCart, Layout, TrendingUp, 
  Anchor, CheckCircle, Users, Zap, Globe, Cpu, ChevronRight 
} from 'lucide-react';

// FIX: Changed 'whileInView' back to 'animate' so it triggers immediately on load
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

// Separate variant for scroll-triggered elements further down the page
const scrollFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const HomePage = ({ setPage }) => {
  return (
    <div className="overflow-hidden bg-[#FAFAFA]">
      
      {/* --- 1. HERO SECTION: The Engine Room --- */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#2FA8C7]/10 to-transparent rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="initial" animate="animate" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FEC300] animate-pulse" />
              <span className="text-[#135E73] text-xs font-bold tracking-[0.2em] uppercase">Multi-Disciplinary Innovation</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-light text-[#135E73] leading-[1.1] mb-6 tracking-tight">
              The Engine Room of <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#135E73] to-[#2FA8C7]">Creativity & Tech.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 font-light leading-relaxed max-w-lg mb-10">
              We connect youth talent with meaningful work, empower brands with transformative digital solutions, and build a future where innovation knows no limits.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button onClick={() => setPage('services')} className="bg-[#135E73] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0f4c5e] transition-all flex items-center gap-2 shadow-lg shadow-[#135E73]/20">
                Explore Ecosystem
                <ArrowRight size={18} />
              </button>
              <button onClick={() => setPage('portfolio')} className="px-8 py-4 rounded-full font-medium text-[#135E73] bg-white border border-gray-200 hover:border-[#FEC300] transition-all">
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* Abstract Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#135E73] to-[#0f4c5e] rounded-[3rem] overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover opacity-10 mix-blend-overlay"></div>
               
               {/* Floating Data Card */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }} 
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="absolute top-16 left-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-72"
               >
                 <Smartphone className="text-[#FEC300] mb-3" />
                 <h3 className="text-white font-bold">Scalable Products</h3>
                 <p className="text-white/60 text-xs mt-1">Mobile apps & Enterprise ERPs tailored for modern business.</p>
               </motion.div>

               {/* Floating Data Card */}
               <motion.div 
                 animate={{ y: [0, 20, 0] }} 
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-16 right-12 bg-white p-6 rounded-2xl shadow-xl w-72"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="text-xs font-bold text-gray-400 uppercase">Live Systems</span>
                 </div>
                 <h3 className="text-[#135E73] font-bold text-lg">Digital Real Estate</h3>
                 <p className="text-gray-500 text-xs mt-1">Supporting land & property transactions securely.</p>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. INTRO: The Strategic Partner --- */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={scrollFadeIn}>
              <span className="text-[#FEC300] font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-light text-[#135E73] mb-8 leading-tight">
                More than a startup. <br/>
                We are a <span className="font-bold">Strategic Partner.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                We act as the umbrella company for multiple business units and programs.  We build an ecosystem designed to support digital transformation, empower youth talent, and deliver impactful solutions that shape the future of work. [cite: 12, 15]
              </p>
           </motion.div>
        </div>
      </section>

      {/* --- 3. DIGITAL PRODUCTS SHOWCASE --- */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-3xl font-light text-[#135E73]">Scalable <span className="font-bold">Digital Products</span></h2>
               <p className="text-gray-500 mt-2">Tailored for modern businesses.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: 'Mobile Applications', icon: <Smartphone />, desc: 'Native & Cross-platform apps.' },
                 { title: 'E-Commerce Systems', icon: <ShoppingCart />, desc: 'Online stores & payment systems.' },
                 { title: 'CRM Dashboards', icon: <Layout />, desc: 'Customer relationship management.' },
                 { title: 'ERP Systems', icon: <Cpu />, desc: 'Workflow & business management.' },
                 { title: 'Digital Real Estate', icon: <Globe />, desc: 'Property transaction platforms.' },
                 { title: 'Corporate Tools', icon: <Layers />, desc: 'Business automation tools.' }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   whileHover={{ y: -10 }}
                   className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                 >
                    <div className="w-12 h-12 bg-[#2FA8C7]/10 rounded-xl flex items-center justify-center text-[#135E73] mb-6 group-hover:bg-[#135E73] group-hover:text-white transition-colors">
                       {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#135E73] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm font-light">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 4. BUSINESS SOLUTIONS --- */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
               <motion.div initial="initial" whileInView="whileInView" variants={scrollFadeIn}>
                  <div className="w-16 h-16 bg-[#FEC300] rounded-full flex items-center justify-center text-[#135E73] mb-6">
                     <Users size={32} />
                  </div>
                  <h2 className="text-4xl font-light text-[#135E73] mb-6">Business <span className="font-bold">Solutions</span></h2>
                  <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                     Our professional service offerings are designed to elevate brand presence and accelerate growth. We provide strategic digital and operational solutions.
                  </p>
                  <ul className="space-y-4">
                     {['Creative Branding & Design', 'Marketing & Digital Visibility', 'Deployment & Execution Support'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-[#135E73] font-medium">
                           <CheckCircle size={20} className="text-[#FEC300]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button onClick={() => setPage('services')} className="mt-8 text-[#135E73] font-bold border-b-2 border-[#FEC300] pb-1 hover:text-[#2FA8C7] transition-colors">
                     Explore Services
                  </button>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative h-[500px] bg-gray-100 rounded-[3rem] overflow-hidden"
               >
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" alt="Team meeting" />
                  <div className="absolute inset-0 bg-[#135E73]/60 mix-blend-multiply"></div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- 5. METHODOLOGY: People, Process, Systems --- */}
      <section className="py-24 bg-[#135E73] text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-light mb-16">
               Our <span className="font-bold text-[#FEC300]">Holistic Approach</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { title: 'People', desc: 'Bringing youth talent together to build and innovate.' },
                  { title: 'Processes', desc: 'Improving operational efficiency and workflow.' },
                  { title: 'Systems', desc: 'Developing the digital tools needed to thrive.' }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10"
                  >
                     <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                     <p className="text-white/70 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
            <p className="mt-12 text-white/50 text-sm">Ensuring that people, processes, and systems evolve together.</p>
         </div>
      </section>

      {/* --- 6. IMPACT: Tech Them Young --- */}
      <section className="py-24 bg-[#FAFAFA]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#FEC300] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
               
               <div className="grid md:grid-cols-2 gap-12 relative z-10 items-center">
                  <div>
                     <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-[#135E73] font-bold text-xs uppercase tracking-widest mb-6">
                        Flagship Initiative
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold text-[#135E73] mb-6">Tech Them Young</h2>
                     <p className="text-[#135E73] text-lg mb-8 leading-relaxed max-w-md">
                        We empower the next generation through education, mentorship, and structured programs.  We inspire, educate, and innovate. [cite: 82]
                     </p>
                     <button onClick={() => setPage('impact')} className="bg-[#135E73] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all">
                        View Our Impact
                     </button>
                  </div>
                  <div className="relative">
                     <div className="bg-white/30 backdrop-blur-md p-8 rounded-[2rem] border border-white/40">
                        <div className="flex items-center gap-4 mb-6">
                           <TrendingUp className="text-[#135E73]" size={32} />
                           <div>
                              <h4 className="font-bold text-[#135E73]">Project 200</h4>
                              <p className="text-xs text-[#135E73]/70">Skill & Leadership Development</p>
                           </div>
                        </div>
                        <div className="h-2 bg-white/40 rounded-full overflow-hidden mb-2">
                           <div className="h-full w-[75%] bg-[#135E73]"></div>
                        </div>
                         <p className="text-xs text-[#135E73]">Upskilling youth in digital competence. [cite: 83]</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 7. WHY CHOOSE US: Values --- */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-light text-[#135E73]">Driven by <span className="font-bold">Values</span></h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
               {['Growth', 'Experience', 'Orientation', 'Innovation', 'Discipline'].map((val, i) => (
                  <motion.div 
                     key={i}
                     whileHover={{ y: -10, backgroundColor: '#FAFAFA' }}
                     className="p-8 rounded-2xl border border-gray-100 transition-all cursor-default"
                  >
                     <div className="text-4xl font-black text-[#2FA8C7]/20 mb-4">{val[0]}</div>
                     <h3 className="text-[#135E73] font-bold">{val}</h3>
                  </motion.div>
               ))}
            </div>
            <p className="text-center mt-8 text-gray-400 text-sm">The GEOID Model</p>
         </div>
      </section>

      {/* --- 8. STRATEGIC DIRECTION --- */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <Zap className="w-12 h-12 text-[#FEC300] mx-auto mb-8" />
           <h2 className="text-3xl md:text-5xl font-light mb-8">Strategic <span className="font-bold text-[#FEC300]">Direction</span></h2>
           <p className="text-white/60 text-xl leading-relaxed mb-12">
              Over the next five years, we aim to deepen our presence in enterprise-level digital solutions, deployment support, and end-user digital experiences. [cite: 27-30]
           </p>
           <button onClick={() => setPage('contact')} className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-[#FEC300] transition-colors flex items-center gap-2 mx-auto">
             Partner With Us <ChevronRight />
           </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;