import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, CheckCircle, AlertCircle, Heart, Code, PenTool, Mic, Camera, BookOpen } from 'lucide-react';
import volunteerImage from '../assets/KC CALLFORVOLUNTEERS.jpg';
import axios from '../api/axios.config';

export const KCCVolunteerPage = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    skills: '',
    experience: '',
    availability: '',
    motivation: '',
    linkedin: '',
    portfolio: ''
  });

  const volunteerServices = [
    'Coding Instructor',
    'AI Tools Facilitator',
    'Digital Arts Mentor',
    'Music Production Guide',
    'Storytelling & Creative Writing Coach',
    'Public Speaking Trainer',
    'Event Coordinator',
    'Curriculum Developer',
    'Technical Support',
    'Community Outreach'
  ];

  const availabilityOptions = [
    'Weekdays (Mornings)',
    'Weekdays (Afternoons)',
    'Weekdays (Evenings)',
    'Weekends (Saturdays)',
    'Weekends (Sundays)',
    'Flexible'
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

    // Prepare payload for backend - using contact form structure
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: 'Volunteer Applicant',
      service: formData.service,
      subject: `Volunteer Application: ${formData.service}`,
      message: `
Skills: ${formData.skills || 'Not specified'}
Experience: ${formData.experience || 'Not specified'}
Availability: ${formData.availability}
Motivation: ${formData.motivation}
LinkedIn: ${formData.linkedin || 'Not provided'}
Portfolio: ${formData.portfolio || 'Not provided'}
      `.trim()
    };

    try {
      const response = await axios.post('/contacts', payload);
      
      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setShowVolunteerForm(false);
          setSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            service: '',
            skills: '',
            experience: '',
            availability: '',
            motivation: '',
            linkedin: '',
            portfolio: ''
          });
        }, 3000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit volunteer application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 bg-white text-gray-900">
      {/* Volunteer Application Modal */}
      <AnimatePresence>
        {showVolunteerForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => !loading && setShowVolunteerForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#135E73]">Volunteer Application</h2>
                  <p className="text-gray-500 text-sm mt-1">Join the KCC Volunteer Movement</p>
                </div>
                <button
                  onClick={() => !loading && setShowVolunteerForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#135E73] mb-3">Application Received!</h3>
                    <p className="text-gray-600">
                      Thank you for your interest in volunteering! Our team will review your application and contact you soon.
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

                    {/* Personal Information */}
                    <div className="bg-[#135E73]/5 p-4 rounded-xl border border-[#135E73]/10">
                      <h3 className="font-bold text-[#135E73] mb-4 flex items-center gap-2">
                        <Heart size={18} /> Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Full Name *</label>
                          <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Email *</label>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Phone Number *</label>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="+234 800 000 0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection - User must select what they're volunteering for */}
                    <div className="bg-[#2FA8C7]/5 p-4 rounded-xl border border-[#2FA8C7]/10">
                      <h3 className="font-bold text-[#135E73] mb-4 flex items-center gap-2">
                        <Code size={18} /> Volunteer Role
                      </h3>
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2">I want to volunteer as *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                        >
                          <option value="">Select a volunteer role...</option>
                          {volunteerServices.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Skills & Experience */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#135E73] mb-4">Skills & Experience</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Relevant Skills *</label>
                          <input
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="e.g., Python, Teaching, Design, Public Speaking"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Previous Experience</label>
                          <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            rows="3"
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="Tell us about your teaching/volunteering experience..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#135E73] mb-4">Availability</h3>
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2">When can you volunteer? *</label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                        >
                          <option value="">Select availability...</option>
                          {availabilityOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#135E73] mb-2">Why do you want to volunteer with KCC? *</h3>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        required
                        rows="3"
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                        placeholder="Share your motivation and what you hope to contribute..."
                      />
                    </div>

                    {/* Professional Links */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2">LinkedIn Profile (Optional)</label>
                        <input
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#135E73] mb-2">Portfolio/GitHub (Optional)</label>
                        <input
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                          placeholder="https://github.com/..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#135E73] to-[#1B7F9E] text-white py-4 rounded-xl font-bold tracking-wide hover:shadow-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          <span>SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT APPLICATION</span>
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            className="text-5xl font-bold text-[#135E73]"
          >
            KCC Volunteer Program
          </motion.h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Are you passionate about teaching kids tech skills?
            Do you believe Africa's future depends on digital literacy?
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            The KCC Volunteer Program is a movement of tech enthusiasts,
            educators, and creative leaders committed to shaping the next generation.
          </p>

          <button
            onClick={() => setShowVolunteerForm(true)}
            className="mt-8 bg-[#135E73] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1B7F9E] transition-all shadow-lg hover:scale-105"
          >
            Apply as Volunteer
          </button>
        </div>

        <motion.img 
          src={volunteerImage}
          alt="Call For Volunteers"
          className="rounded-3xl shadow-2xl"
        />
      </section>

      {/* WHO SHOULD APPLY */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#135E73] mb-16">
            Who Should Apply?
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Tech Enthusiasts & Developers",
              "Digital Literacy Educators",
              "Designers & Creative Artists",
              "AI Tool Experts",
              "Coding Instructors",
              "Anyone Passionate About Impact"
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#135E73] mb-10">
            What You Gain
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            As a KCC Volunteer, you gain hands-on teaching experience,
            community impact recognition, and certification.
          </p>

          <ul className="space-y-4 text-gray-500">
            <li>✔ Train-The-Trainers Sessions</li>
            <li>✔ Hands-On Teaching Experience</li>
            <li>✔ Community Leadership Development</li>
            <li>✔ Certificate of Participation</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#135E73] text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Become a KCC Volunteer
        </h2>

        <p className="text-white/80 mb-8">
          Help us empower the next generation of innovators.
        </p>

        <button
          onClick={() => setShowVolunteerForm(true)}
          className="bg-[#FEC300] text-[#135E73] px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};