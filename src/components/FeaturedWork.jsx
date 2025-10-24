import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-Commerce Platform",
      category: "Mobile & Web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Healthcare Portal",
      category: "Enterprise Solution",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Brand Identity",
      category: "Design & Branding",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1000&q=80",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="text-xs text-gray-600 font-medium tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
            Featured work
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Showcasing our best projects and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-white text-sm font-medium flex items-center">
                    View Project <ChevronRight size={16} className="ml-2" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="text-xs text-[#00B4D8] font-medium mb-2">{project.category}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#00B4D8] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.color} opacity-5 rounded-bl-full`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}