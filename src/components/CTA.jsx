import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Dark Teal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900" />
      
      {/* Animated Mesh Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-cyan-400/15 to-teal-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
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
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-teal-300/30 font-mono text-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
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

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to get started?
            <motion.span
              className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Let's Transform Your Vision
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with Kuros Consult for world-class technology and design. 
            Let's build something extraordinary together.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              className="group relative bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#services"
              className="group relative border-2 border-teal-400/30 text-teal-400 text-sm px-6 py-3 rounded-full font-medium hover:border-teal-400/60 hover:bg-teal-400/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ↗
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-teal-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: "24h", label: "Response Time" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "150+", label: "Projects Delivered" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.p
                  className="text-2xl font-bold text-teal-400 mb-1"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}