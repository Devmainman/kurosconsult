import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import { Navigation, Footer, WhatsAppButton } from './components/Layout';

// Page Imports
import HomePage from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ImpactPage } from './pages/Impact';
import { PortfolioPage } from './pages/Portfolio'; // Now using the real Portfolio page
import { ContactPage } from './pages/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setPage={setCurrentPage} />;
      case 'about': return <AboutPage setPage={setCurrentPage} />;
      case 'services': return <ServicesPage setPage={setCurrentPage} />;
      case 'impact': return <ImpactPage setPage={setCurrentPage} />;
      case 'portfolio': return <PortfolioPage setPage={setCurrentPage} />;
      case 'contact': return <ContactPage setPage={setCurrentPage} />;
      default: return <HomePage setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FEC300] selection:text-[#135E73]">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
};

export default App;