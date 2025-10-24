import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Kuros Consult transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      role: "Founder, HealthPlus",
      content: "Professional, creative, and reliable. They delivered our healthcare platform ahead of schedule with exceptional quality.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "The team's expertise in both design and development is remarkable. They brought our vision to life beautifully.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-64 h-64 bg-[#00B4D8]/5 rounded-full blur-3xl"
      ></motion.div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#00B4D8]/10 to-[#006D77]/10 rounded-full">
            <span className="text-xs text-[#006D77] font-medium tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
            What clients say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#00B4D8]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl text-[#00B4D8]/10 font-serif">"</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.1 }}
                    className="text-yellow-400 text-sm"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 relative z-10">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}