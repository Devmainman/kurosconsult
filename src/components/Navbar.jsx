import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/kuro.png"; // 🟢 replace with your actual image path

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <nav className="fixed w-full z-50 bg-teal-900/80 backdrop-blur-xl border-b border-teal-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo Image */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={logo}
              alt="Brand Logo"
              className="h-10 w-auto rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Process", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-teal-100 hover:text-white text-sm font-medium transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-teal-100 hover:text-white transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-teal-900 to-slate-900 z-50 shadow-2xl border-l border-teal-400/20 md:hidden"
            >
              {/* Header with image */}
              <div className="flex items-center justify-between p-6 border-b border-teal-400/20">
                <motion.img
                  src={logo}
                  alt="Brand Logo"
                  className="h-10 w-auto rounded-md"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                />

                <motion.button
                  onClick={() => setSidebarOpen(false)}
                  className="text-teal-200 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 px-4 space-y-2">
                {["Home", "About", "Services", "Process", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-4 text-teal-100 hover:text-white hover:bg-teal-800/50 rounded-xl transition-all text-base font-medium group"
                    onClick={() => setSidebarOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-center justify-between">
                      {item}
                      <motion.div
                        className="opacity-0 group-hover:opacity-100"
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-teal-400">→</span>
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all"
                  onClick={() => setSidebarOpen(false)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                </motion.a>
              </motion.div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
