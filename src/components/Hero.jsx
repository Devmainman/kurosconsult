import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection({ config, stats }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative z-10 px-6 pt-28 pb-16 overflow-hidden">
      {/* Dark Teal and Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900" />
      
      {/* Enhanced Animated Mesh Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)",
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

      {/* Tech Grid Pattern - Lighter for dark background */}
      <motion.div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(20, 184, 166, 1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(20, 184, 166, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Gradient Orbs - Enhanced for dark theme */}
      <motion.div
        className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
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
        className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-gradient-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-2xl"
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
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Code Particles - Brighter for dark background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-teal-300/50 font-mono text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          {['</>','{}','[]','()','♠','♣','♥','♦'][Math.floor(Math.random() * 8)]}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            style={{ opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-1.5 px-3 py-1 glass rounded-full text-xs font-medium text-teal-300 shadow-lg border border-teal-400/30 backdrop-blur-md relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.span
                className="w-1.5 h-1.5 bg-teal-400 rounded-full relative z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">Digital Agency • Tech Solutions • Professional Education</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your Digital Presence with
              <motion.span
                className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2 relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Kuros Consult
              </motion.span>
            </motion.h1>

            {/* Typewriter Subheading */}
            <TypewriterText />

            <motion.p
              className="text-base text-slate-300 leading-relaxed font-normal max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We empower businesses with tailored tech solutions, creative branding, and professional education. 
              Our forward-thinking approach blends cutting-edge technology with creative vision to deliver 
              digital experiences that exceed expectations and drive real business results.
            </motion.p>

            {/* Core Services */}
            <motion.div
              className="flex flex-wrap gap-2 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />, text: "Custom Development" },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v.01" />, text: "Creative Branding" },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />, text: "Professional Tutorials" },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />, text: "Secure Solutions" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-teal-400/20 backdrop-blur-sm group cursor-pointer hover:bg-white/15"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(20, 184, 166, 0.5)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <motion.svg
                    className="w-3.5 h-3.5 text-teal-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.svg>
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="relative px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-teal-500/30 overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Start Your Project
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.button>

              <motion.button
                className="relative px-6 py-3 glass text-white text-sm font-semibold rounded-lg border border-white/20 backdrop-blur-md overflow-hidden group hover:border-white/30"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Explore Tutorials</span>
              </motion.button>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                { value: "⚡", label: "Fast Delivery", sublabel: "On time, every time" },
                { value: "🎯", label: "Client-Focused", sublabel: "Your success first" },
                { value: "🔒", label: "Secure", sublabel: "Industry standards" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <p className="text-sm font-bold text-white">{stat.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Tech Dashboard Mockup */}
          <motion.div
            className="relative flex items-center justify-center min-h-[500px]"
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TechDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Typewriter Effect - Updated with Kuros Consult services
function TypewriterText() {
  const phrases = [
    "Tailored Tech Solutions & Development",
    "Creative Branding & Digital Design",
    "Professional Education & Tutorials",
    "Secure & Scalable Infrastructure"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = phrases[currentPhrase];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <div className="h-8">
      <p className="text-base text-teal-300 font-semibold">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </p>
    </div>
  );
}

// Tech Dashboard Component - Updated to reflect Kuros Consult services
function TechDashboard() {
  return (
    <div className="relative w-full max-w-xl">
      {/* Main Dashboard */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-white font-bold text-lg">♠</span>
              </motion.div>
              <div>
                <h3 className="text-white font-semibold text-sm">Kuros Consult Dashboard</h3>
                <p className="text-white/80 text-xs">Project Management & Analytics</p>
              </div>
            </div>
            <motion.div
              className="px-2 py-1 rounded-md bg-green-400/40 border border-green-400/60"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs text-white font-medium">● Active</span>
            </motion.div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-5 space-y-4">
          {/* Services Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Projects', value: '98%', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />, color: 'from-green-500 to-emerald-500', desc: 'Success Rate' },
              { label: 'Clients', value: '150+', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />, color: 'from-blue-500 to-cyan-500', desc: 'Happy Clients' },
              { label: 'Tutorials', value: '500+', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />, color: 'from-purple-500 to-pink-500', desc: 'Lessons Created' },
            ].map((metric, i) => (
              <motion.div
                key={i}
                className="relative p-3 rounded-lg bg-slate-700/50 border border-slate-600 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -3, borderColor: 'rgba(20, 184, 166, 0.5)' }}
              >
                <motion.div
                  className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${metric.color} opacity-20 rounded-bl-2xl`}
                />
                <div className="flex items-center gap-2 mb-1">
                  <svg className={`w-4 h-4 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`} fill="currentColor" viewBox="0 0 24 24">
                    {metric.icon}
                  </svg>
                  <p className="text-xs text-slate-300 font-medium">{metric.label}</p>
                </div>
                <p className="text-lg font-bold text-white">{metric.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{metric.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Activity Chart */}
          <div className="relative h-32 rounded-lg bg-slate-700/50 border border-slate-600 p-3">
            <p className="text-xs text-slate-300 font-medium mb-2">Project Progress & Performance</p>
            <SystemChart />
          </div>

          {/* Service Stack Icons */}
          <div className="flex items-center justify-between pt-2">
            {[
              { name: 'DEV', color: 'from-teal-500 to-green-500', desc: 'Development' },
              { name: 'DES', color: 'from-blue-500 to-cyan-500', desc: 'Design' },
              { name: 'EDU', color: 'from-purple-500 to-pink-500', desc: 'Education' },
              { name: 'SEC', color: 'from-orange-500 to-red-500', desc: 'Security' },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-xs font-bold shadow-lg mb-1`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.name}
                </motion.div>
                <p className="text-xs text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Notification Cards */}
      <FloatingCard delay={1} className="absolute -top-6 -right-6" color="from-teal-500 to-emerald-500">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-xs text-white/90">Project Complete</p>
            <p className="text-xs font-bold text-white">Brand Launch</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard delay={1.2} className="absolute -bottom-6 -left-6" color="from-blue-500 to-purple-500">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <div>
            <p className="text-xs text-white/90">New Tutorial</p>
            <p className="text-xs font-bold text-white">React Mastery</p>
          </div>
        </div>
      </FloatingCard>

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-500/30 to-blue-500/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// System Performance Chart
function SystemChart() {
  const points = [30, 50, 40, 70, 55, 85, 75, 90];
  
  return (
    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(20, 184, 166, 0.4)" />
          <stop offset="100%" stopColor="rgba(20, 184, 166, 0.1)" />
        </linearGradient>
      </defs>
      
      <motion.path
        d={`M 0 ${80 - points[0]} ${points.map((p, i) => `L ${(i + 1) * 25} ${80 - p}`).join(' ')} L 200 80 L 0 80 Z`}
        fill="url(#gradient)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <motion.path
        d={`M 0 ${80 - points[0]} ${points.map((p, i) => `L ${(i + 1) * 25} ${80 - p}`).join(' ')}`}
        fill="none"
        stroke="rgba(20, 184, 166, 1)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={(i + 1) * 25}
          cy={80 - p}
          r="2"
          fill="rgba(20, 184, 166, 1)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

// Floating Card
function FloatingCard({ children, delay, className, color }) {
  return (
    <motion.div
      className={`p-3 rounded-lg backdrop-blur-xl border border-white/30 shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        rotate: { delay, duration: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-95 rounded-lg`} />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

// Demo wrapper
export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-slate-900">
      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
      `}</style>
      <HeroSection config={{}} stats={{}} />
    </div>
  );
}