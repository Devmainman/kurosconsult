import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { step: "01", title: "Discovery", desc: "Understanding your business goals." },
    { step: "02", title: "Strategy", desc: "Comprehensive planning tailored to you." },
    { step: "03", title: "Execution", desc: "Bringing your vision to life." },
    { step: "04", title: "Launch", desc: "Deployment and ongoing support." },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
            How we work
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A streamlined process from concept to completion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#006D77] to-[#00B4D8] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {item.step}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}