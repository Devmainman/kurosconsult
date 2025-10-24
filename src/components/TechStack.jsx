import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "MongoDB", icon: "🍃" },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
            Technologies we master
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Cutting-edge tools and frameworks for superior results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: [0, -5, 5, 0] }}
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-[#00B4D8]/30 hover:shadow-lg transition-all duration-300 text-center cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-4xl mb-2 group-hover:scale-110 transition-transform"
              >
                {tech.icon}
              </motion.div>
              <div className="text-xs font-medium text-gray-700 group-hover:text-[#00B4D8] transition-colors">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}