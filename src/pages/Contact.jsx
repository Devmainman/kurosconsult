import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, XCircle } from 'lucide-react';
import axios from '../api/axios.config'; 

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

   const services = [
    'Project Management',
    'Branding & Design',
    'Web Design & Development',
    'Survey & Geospatial Services',
    'Business Consulting',
    'Learning & Development',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Combine first and last name
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const payload = {
      name: fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      subject: `Contact Form: ${formData.service}`,
      message: formData.message
    };

    try {
      const response = await axios.post('/contacts', payload);
      
      if (response.data.success) {
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
        }, 5000);
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.response?.data?.error || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column - Info */}
        <div>
          <span className="text-[#FEC300] font-bold tracking-widest uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-[#135E73] mb-8">
            Let's build your <br />
            <span className="font-bold">Digital Future.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light mb-12">
            Whether you need a digital product, corporate strategy, or want to support our youth initiatives, 
            we are ready to listen.
          </p>

          <div className="space-y-8">
            {[
              { icon: <Phone size={20} />, title: "Call Us", text: "0705 878 3742" },
              { icon: <Mail size={20} />, title: "Email Us", text: "info@kurosconsult.com.ng" },
              { 
                icon: <MapPin size={20} />, 
                title: "Visit HQ", 
                text: "11 Tombia Street, GRA Phase 2, Port Harcourt, Rivers State" 
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 text-gray-600 font-light group">
                <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center text-[#135E73] group-hover:bg-[#135E73] group-hover:text-white transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#135E73] text-sm uppercase tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-[#135E73]/5 border border-gray-100"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#135E73] mb-3">Message Sent!</h3>
              <p className="text-gray-600">
                Thank you for reaching out. We'll get back to you within 24-48 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
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
                  className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                  Phone Number (Optional)
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
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
                  className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all text-gray-600"
                >
                  <option value="">Select a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#135E73] mb-2 uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-[#2FA8C7] focus:bg-white outline-none transition-all"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#135E73] to-[#1B7F9E] text-white py-5 rounded-xl font-bold tracking-wide hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};