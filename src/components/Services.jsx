import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Tech consultation",
      desc: "Strategic insights and digital transformation planning.",
      icon: "💼",
    },
    {
      title: "Web & app development",
      desc: "Custom responsive solutions with modern architecture.",
      icon: "🌐",
    },
    {
      title: "Graphic design",
      desc: "Modern branding and UI/UX that makes an impact.",
      icon: "🎨",
    },
    {
      title: "Tech tutorials",
      desc: "Practical training and hands-on workshops.",
      icon: "📘",
    },
    {
      title: "IT solutions",
      desc: "Automation and optimization for productivity.",
      icon: "⚙️",
    },
    {
      title: "Ongoing support",
      desc: "Reliable 24/7 maintenance and support.",
      icon: "🛠️",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-blue-900/20" />
      
      {/* Animated Mesh Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tech Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 184, 166, 1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(20, 184, 166, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Code Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-teal-300/30 font-mono text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          {['</>','{}','[]','()','♠','♣','♥','♦'][Math.floor(Math.random() * 8)]}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our services
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive digital solutions tailored to elevate your business.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 sm:p-8 rounded-xl hover:shadow-2xl transition-all cursor-pointer hover:border-teal-400/40 hover:bg-slate-800/80 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-teal-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5"
                transition={{ duration: 0.5 }}
              />
              
              {/* Floating Icon Container */}
              <motion.div
                className="relative z-10 mb-4"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 0.5,
                  rotate: { duration: 0.3 }
                }}
              >
                <div className="text-3xl sm:text-4xl">{service.icon}</div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p
                  className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed"
                  whileHover={{ x: 1 }}
                >
                  {service.desc}
                </motion.p>

                {/* Animated CTA */}
                <motion.div
                  className="inline-flex items-center text-teal-400 text-xs font-medium"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>Learn more</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5 + i * 0.1
                    }}
                  >
                    <ChevronRight size={14} className="ml-1" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-teal-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-teal-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20"
                initial={false}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Floating Elements */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 text-sm font-medium"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(20, 184, 166, 0.5)',
              backgroundColor: 'rgba(30, 41, 59, 0.7)'
            }}
            transition={{ duration: 0.3 }}
          >
            <span>Ready to transform your business?</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronRight size={16} className="text-teal-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}