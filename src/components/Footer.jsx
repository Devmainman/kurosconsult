import kuroLogo from "../assets/kuro.png"; 
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["About", "Services", "Process", "Careers"],
      hrefs: ["#about", "#services", "#process", "#careers"]
    },
    {
      title: "Services",
      links: ["Tech Consultation", "Web Development", "UI/UX Design", "IT Solutions"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Documentation", "Status"],
    },
    {
      title: "Connect",
      links: [
        { icon: <Mail size={14} />, text: "info@kurosconsult.com" },
        { icon: <Phone size={14} />, text: "+234 800 000 0000" },
        { icon: <MapPin size={14} />, text: "Lagos, Nigeria" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "GitHub", href: "#", icon: "{}" },
    { name: "Instagram", href: "#", icon: "📷" }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-blue-900/20" />
      
      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
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

      {/* Floating Orbs */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                 <img src={kuroLogo} alt="Kuros Consult" className="h-12 w-auto" />
                </motion.div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Transforming businesses with cutting-edge technology solutions, 
                creative design, and professional education. Let's build the future together.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:border-teal-400/50 hover:bg-slate-800 transition-all group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-xs font-medium group-hover:text-teal-400 transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    {section.title}
                    <motion.div
                      className="w-1 h-1 bg-teal-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: sectionIndex * 0.5 }}
                    />
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      >
                        {typeof link === 'string' ? (
                          <motion.a
                            href={section.hrefs?.[linkIndex] || "#"}
                            className="text-xs text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1 group"
                            whileHover={{ x: 4 }}
                          >
                            {link}
                            <motion.span
                              className="opacity-0 group-hover:opacity-100"
                              whileHover={{ x: 2 }}
                            >
                              <ExternalLink size={12} />
                            </motion.span>
                          </motion.a>
                        ) : (
                          <div className="text-xs text-slate-400 flex items-center gap-2">
                            <span className="text-teal-400">{link.icon}</span>
                            {link.text}
                          </div>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                <p className="text-slate-400 text-sm">
                  Get the latest insights on technology, design, and business growth.
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-800 py-6 px-4 sm:px-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-slate-500 text-sm text-center md:text-left">
             <img src={kuroLogo} alt="Kuros Consult" className="h-6 w-auto opacity-80" />

              <span>© {new Date().getFullYear()} Kuros Consult. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              {["Privacy", "Terms", "Legal"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-slate-500 hover:text-teal-300 transition-colors"
                  whileHover={{ scale: 1.05, y: -1 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}