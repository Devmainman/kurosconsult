import { motion } from "framer-motion";

export default function About() {
  const values = [
    { icon: "⚡", title: "Fast delivery", desc: "High-quality projects on time, every time." },
    { icon: "🎯", title: "Client-focused", desc: "Your success is our priority." },
    { icon: "🔒", title: "Secure", desc: "Industry-leading security practices." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
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

      {/* Floating Gradient Orbs - Light version */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
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
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-cyan-100 to-teal-100 rounded-full blur-3xl opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About us
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A forward-thinking digital agency that blends technology and creativity.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-6"
          >
            <motion.p
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Kuros Consult empowers businesses with tailored tech solutions, branding, and continuous learning through professional tutorials. We believe in creating digital experiences that not only meet but exceed expectations.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our team of experts combines technical expertise with creative vision to deliver solutions that drive real business results.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {["Innovation", "Quality", "Reliability"].map((value, index) => (
                <motion.span
                  key={value}
                  className="px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 rounded-full text-xs font-medium border border-teal-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "rgba(20, 184, 166, 0.1)"
                  }}
                >
                  {value}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="relative"
          >
            {/* Image Container with Floating Effect */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Team"
                className="w-full h-auto"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100"
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", duration: 3, repeat: Infinity, ease: "easeInOut" }}
              animate={{
                y: [0, -5],
              }}
            >
              <div className="text-teal-600 font-bold text-sm">150+ Projects</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100"
              initial={{ opacity: 0, scale: 0, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, 5],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                default: { duration: 0.6, delay: 1, type: "spring" }
              }}
            >
              <div className="text-blue-600 font-bold text-sm">98% Success</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Background Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
              
              {/* Animated Icon */}
              <motion.div
                className="relative z-10 text-4xl sm:text-5xl mb-4"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ 
                  duration: 0.5,
                  rotate: { duration: 0.4 }
                }}
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  className="text-base sm:text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                  whileHover={{ x: 1 }}
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}