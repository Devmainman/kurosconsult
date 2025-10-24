import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import FeaturedWork from "./components/FeaturedWork";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white antialiased">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <CTA />
      <TechStack />
      <Footer />
    </div>
  );
}