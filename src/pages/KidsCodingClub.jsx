import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, CheckCircle, AlertCircle, Users, Calendar, Clock } from 'lucide-react';
import kidsImage from '../assets/KC AIFORKIDS.jpg';
import axios from '../api/axios.config';

export const KidsCodingClubPage = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childAge: '',
    childGrade: '',
    programInterest: 'Kids Coding Club',
    preferredDay: '',
    preferredTime: '',
    message: ''
  });

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['9:00 AM - 11:00 AM', '11:30 AM - 1:30 PM', '2:00 PM - 4:00 PM', '4:30 PM - 6:30 PM'];

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
      name: formData.parentName,
      email: formData.parentEmail,
      phone: formData.parentPhone,
      company: 'Parent',
      service: 'Kids Coding Club',
      subject: `Enrollment Inquiry: ${formData.childName} (Age ${formData.childAge})`,
      message: `
Child Name: ${formData.childName}
Child Age: ${formData.childAge}
Child Grade: ${formData.childGrade || 'Not specified'}
Preferred Day: ${formData.preferredDay}
Preferred Time: ${formData.preferredTime}
Additional Info: ${formData.message || 'None'}
      `.trim()
    };

    try {
      const response = await axios.post('/contacts', payload);
      
      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setShowEnrollForm(false);
          setSubmitted(false);
          setFormData({
            parentName: '',
            parentEmail: '',
            parentPhone: '',
            childName: '',
            childAge: '',
            childGrade: '',
            programInterest: 'Kids Coding Club',
            preferredDay: '',
            preferredTime: '',
            message: ''
          });
        }, 3000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit enrollment request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 bg-white text-gray-900">
      {/* Enrollment Modal */}
      <AnimatePresence>
        {showEnrollForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => !loading && setShowEnrollForm(false)}
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
                  <h2 className="text-2xl font-bold text-[#135E73]">Enroll Your Child</h2>
                  <p className="text-gray-500 text-sm mt-1">Kids Coding Club - ₦10,000/month</p>
                </div>
                <button
                  onClick={() => !loading && setShowEnrollForm(false)}
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
                    <h3 className="text-2xl font-bold text-[#135E73] mb-3">Enrollment Request Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for your interest! We'll contact you within 24-48 hours to confirm your child's spot.
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

                    <div className="bg-[#FEC300]/10 p-4 rounded-xl border border-[#FEC300]/20">
                      <h3 className="font-bold text-[#135E73] mb-2 flex items-center gap-2">
                        <Users size={18} /> Parent/Guardian Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Full Name *</label>
                          <input
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Email *</label>
                          <input
                            name="parentEmail"
                            type="email"
                            value={formData.parentEmail}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Phone Number *</label>
                          <input
                            name="parentPhone"
                            type="tel"
                            value={formData.parentPhone}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="+234 800 000 0000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#2FA8C7]/10 p-4 rounded-xl border border-[#2FA8C7]/20">
                      <h3 className="font-bold text-[#135E73] mb-2 flex items-center gap-2">
                        <Users size={18} /> Child's Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Child's Full Name *</label>
                          <input
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="Child's full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Age *</label>
                          <input
                            name="childAge"
                            type="number"
                            value={formData.childAge}
                            onChange={handleChange}
                            required
                            min="5"
                            max="17"
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="e.g., 8"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Grade/Class</label>
                          <input
                            name="childGrade"
                            value={formData.childGrade}
                            onChange={handleChange}
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                            placeholder="e.g., Grade 4"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-[#135E73] mb-4 flex items-center gap-2">
                        <Calendar size={18} /> Schedule Preferences
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Preferred Day *</label>
                          <select
                            name="preferredDay"
                            value={formData.preferredDay}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                          >
                            <option value="">Select day...</option>
                            {weekdays.map(day => (
                              <option key={day} value={day}>{day}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#135E73] mb-2">Preferred Time *</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                          >
                            <option value="">Select time...</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#135E73] mb-2">Additional Information (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-[#2FA8C7] outline-none"
                        placeholder="Any questions or special requests?"
                      />
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
                          <span>SUBMIT ENROLLMENT</span>
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

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6}}
            className="text-5xl font-bold leading-tight text-[#135E73]"
          >
            Kids Coding Club (KCC)
          </motion.h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            The Kids Coding Club is a transformational AI & technology learning ecosystem 
            designed to equip children with creative intelligence, problem-solving skills, 
            and future-ready digital capabilities.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            In a world powered by Artificial Intelligence, automation, and digital innovation,
            we believe children shouldn't just consume technology — they should build it.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="bg-[#FEC300] text-[#135E73] px-6 py-3 rounded-full font-semibold">
              ₦10,000 Monthly
            </span>
            <button
              onClick={() => setShowEnrollForm(true)}
              className="bg-[#135E73] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1B7F9E] transition-all shadow-lg hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <motion.img 
          src={kidsImage}
          alt="AI For Kids"
          className="rounded-3xl shadow-2xl"
          initial={{opacity:0, scale:0.95}}
          animate={{opacity:1, scale:1}}
          transition={{duration:0.7}}
        />
      </section>

      {/* Rest of your existing sections remain the same */}
      {/* WHAT THEY WILL LEARN */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#135E73] mb-16">
            What Your Child Will Master
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Create AI-Powered Videos & Visual Stories",
              "Build Apps That Solve Real Problems",
              "Design Cartoons, Posters & Digital Art",
              "Create Music With AI Tools",
              "Turn Imagination Into Books & Storyboards",
              "Develop Confidence, Creativity & Public Speaking"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:i*0.1}}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KCC */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#135E73] mb-10">
            Why Kids Coding Club?
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            KCC is more than coding. It is a creative technology revolution.
            We train children to think independently, build confidently,
            and express creatively using modern AI tools.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Every session is hands-on, interactive, and project-based.
            Children leave every month with real digital creations —
            not just theory.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#135E73] text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Enroll Your Child Today
        </h2>
        <p className="text-white/80 mb-8">
          Limited seats available. Let's raise creators, not consumers.
        </p>

        <button
          onClick={() => setShowEnrollForm(true)}
          className="bg-[#FEC300] text-[#135E73] px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-all inline-block"
        >
          Join Kids Coding Club
        </button>
      </section>
    </div>
  );
};