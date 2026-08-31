'use client';

import { useEffect, useRef, useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
          }
          if (entry.target === contactRef.current && entry.isIntersecting) {
            setContactVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const contactIcons = [FiMapPin, FiPhone, FiMail, FiClock];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Got a Project
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
              {t.contact.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.contact.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <div className={`transition-all duration-700 delay-100 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
                  Contact Info
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t.contact.contactTitle}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mb-8 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {t.contact.contactInfo.map((info, index) => {
                  const Icon = contactIcons[index];
                  return (
                    <div 
                      key={index} 
                      className={`group flex items-start space-x-5 p-5 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 ${
                        contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${150 + index * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          info.link ? (
                            <a 
                              key={i} 
                              href={info.link} 
                              className="text-gray-600 hover:text-blue-600 transition-colors block text-sm lg:text-base"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-gray-600 text-sm lg:text-base">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Note Card */}
              <div className={`mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 transition-all duration-700 delay-500 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="flex items-start space-x-3">
                  <FiMessageSquare className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-sm">
                      <strong className="text-blue-900">{t.contact.quickNote}</strong>
                      <span className="text-gray-600"> {t.contact.quickNoteText}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 delay-300 ${
              contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">{t.contact.formTitle}</h2>
                <p className="text-blue-100 text-sm mt-1">We'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.contact.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.contact.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.contact.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t.contact.sending}</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <FiCheckCircle className="w-5 h-5" />
                      <span>{t.contact.success}</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>{t.contact.sendButton}</span>
                    </>
                  )}
                </button>
                
                {status === 'success' && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                    <p className="text-green-700 text-center text-sm flex items-center justify-center gap-2">
                      <FiCheckCircle className="w-4 h-4" />
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Add if you have Google Maps API) */}
      {/* <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 text-center">
              <p className="text-gray-400 text-sm">
                📍 Interactive map would be displayed here. Integrate with Google Maps API for live location.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;