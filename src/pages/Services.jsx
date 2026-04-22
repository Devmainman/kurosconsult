import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Monitor, 
  ShoppingCart, 
  Layout, 
  TrendingUp, 
  Users,
  FileText,
  X,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import axios from '../api/axios.config';

export const ServicesPage = ({ setPage }) => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    timeline: ''
  });
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  const iconMap = {
  'Mobile Applications': <Smartphone />,
  'E-Commerce Systems': <ShoppingCart />,
  'CRM & ERP': <Monitor />,
  'Digital Real Estate': <Layout />,
  'Creative Branding & Visibility': <Users />,
  'Project Management & Strategy': <FileText />,
  'Learning & Capacity Development': <TrendingUp />
};

  useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await axios.get('/services?isActive=true');
      setServices(res.data.data);
    } catch (err) {
      console.error('Failed to fetch services', err);
    } finally {
      setServicesLoading(false);
    }
  };

  fetchServices();
}, []);

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'Branding & Design',
    'Project Management',
    'Business Consulting',
    'Training',
    'Digital Marketing',
    'Survey & Geospatial',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/quotes', formData);
      
      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setShowQuoteModal(false);
          setSubmitted(false);
          setFormData({
            clientName: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            projectDescription: '',
            budget: '',
            timeline: ''
          });
        }, 3000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit quote request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-[#FAFAFA] relative">
      {/* Floating Quote Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowQuoteModal(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-[#135E73] to-[#1B7F9E] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 group hover:shadow-[#135E73]/25 transition-all"
      >
        <FileText size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="font-bold tracking-wide">GET A QUOTE</span>
      </motion.button>

      {/* Quote Request Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => !loading && setShowQuoteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#135E73]">Request a Quote</h2>
                  <p className="text-gray-500 text-sm mt-1">Tell us about your project and we'll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => !loading && setShowQuoteModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#135E73] mb-3">Quote Request Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for your interest. We'll prepare a custom quote and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          name="clientName"
                          value={formData.clientName}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                          Phone Number *
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                          Company (Optional)
                        </label>
                        <input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all text-gray-600"
                      >
                        <option value="">Select project type...</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                        Project Description *
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                        placeholder="Tell us about your project requirements, goals, and expectations..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                          Estimated Budget (Optional)
                        </label>
                        <input
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                          placeholder="e.g., ₦500,000 - ₦1,000,000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                          Timeline (Optional)
                        </label>
                        <input
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                          placeholder="e.g., 2-3 months"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[#135E73] to-[#1B7F9E] text-white py-4 rounded-xl font-bold tracking-wide hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>SUBMITTING...</span>
                          </>
                        ) : (
                          <>
                            <span>REQUEST QUOTE</span>
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of your existing ServicesPage content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Your existing services content here */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-light text-[#135E73] mb-6">Our <span className="font-bold">Core Offerings</span></h1>
          <p className="text-xl text-gray-500 font-light">
            We develop scalable digital products and provide strategic solutions tailored for modern businesses.
          </p>
        </div>

        {/* Digital Products Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-[#2FA8C7]"></span>
            <h2 className="text-2xl font-bold text-[#135E73] uppercase tracking-widest">Scalable Products</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
          {services
            .filter(service => service.category === 'Scalable Products')
            .sort((a, b) => a.order - b.order)
            .map(service => (
              <motion.div
                key={service._id}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2FA8C7]/30 transition-all group"
              >
                <div className="w-14 h-14 bg-[#135E73]/5 rounded-2xl flex items-center justify-center text-[#135E73] mb-6 group-hover:bg-[#135E73] group-hover:text-white transition-colors">
                  {iconMap[service.name] || <Monitor />}
                </div>
                <h3 className="text-xl font-bold text-[#135E73] mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {service.description.short}
                </p>
              </motion.div>
          ))}
        </div>
        </div>

        {/* Business Solutions Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-[#FEC300]"></span>
            <h2 className="text-2xl font-bold text-[#135E73] uppercase tracking-widest">Business Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services
  .filter(service => service.category === 'Business Solutions')
  .sort((a, b) => a.order - b.order)
  .map((service, index) => (
    <div
      key={service._id}
      className={
        index === 0
          ? "bg-[#135E73] text-white p-10 rounded-[2rem] relative overflow-hidden"
          : "bg-white p-10 rounded-[2rem] border border-gray-200 relative overflow-hidden"
      }
    >
      <div className="relative z-10">
        <h3
          className={
            index === 0
              ? "text-3xl font-light mb-6"
              : "text-3xl font-light text-[#135E73] mb-6"
          }
        >
          {service.name}
        </h3>

        <p
          className={
            index === 0
              ? "font-light text-white/80"
              : "font-light text-gray-500"
          }
        >
          {service.description.short}
        </p>
      </div>

      {index === 0 && (
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#2FA8C7] opacity-20 blur-3xl rounded-full"></div>
      )}
    </div>
))}
          </div>
        </div>

        {/* Learning & Development Section */}
        <div className="bg-[#FEC300]/10 p-12 rounded-[3rem] text-center">
          <div className="w-16 h-16 bg-[#FEC300] text-[#135E73] rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp size={32} />
          </div>
          <h2 className="text-3xl font-bold text-[#135E73] mb-4">Learning & Capacity Development</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            We focus on workplace improvement and human capacity development through skill-based training and digital upskilling.
          </p>
          <button onClick={() => setPage('impact')} className="text-[#135E73] font-bold border-b border-[#135E73] pb-1 hover:text-[#2FA8C7] hover:border-[#2FA8C7] transition-all">
            View Our Programs
          </button>
        </div>
      </div>
    </div>
  );
};