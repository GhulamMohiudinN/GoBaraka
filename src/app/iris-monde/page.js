'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiFileText,
  FiTrendingUp,
  FiShield,
  FiTruck,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
} from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const IrisMonde = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);
  const [pillarsVisible, setPillarsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const pillarsRef = useRef(null);
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
          }
          if (entry.target === introRef.current && entry.isIntersecting) {
            setIntroVisible(true);
          }
          if (entry.target === pillarsRef.current && entry.isIntersecting) {
            setPillarsVisible(true);
          }
          if (entry.target === contactRef.current && entry.isIntersecting) {
            setContactVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (pillarsRef.current) observer.observe(pillarsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', organisation: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1000);
  };

  const pillarIcons = [FiFileText, FiTrendingUp, FiShield, FiTruck];
  const pillarGradients = [
    'from-blue-500 to-blue-600',
    'from-emerald-500 to-emerald-600',
    'from-purple-500 to-purple-600',
    'from-amber-500 to-amber-600',
  ];
  const contactIcons = [FiMapPin, FiPhone, FiMail, FiClock];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              {t.irisMonde.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
              {t.irisMonde.heroTitle}
            </h1>
            <p className="text-lg lg:text-2xl font-light text-blue-200 mb-6">
              {t.irisMonde.heroTagline}
            </p>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              {t.irisMonde.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#partnership-contact"
                className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {t.hero.contactButton}
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/self-training"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
              >
                <FiBookOpen className="mr-2 w-5 h-5" />
                {t.irisMonde.trainingButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`transition-all duration-700 delay-100 ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
                {t.irisMonde.introEyebrow}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.irisMonde.introTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed">{t.irisMonde.introText}</p>
            </div>

            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
                introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {t.irisMonde.pillars.map((pillar, index) => {
                const Icon = pillarIcons[index];
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${pillarGradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wide text-gray-900">
                      {pillar.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Pillars */}
      <section ref={pillarsRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              {t.irisMonde.pillarsEyebrow}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.irisMonde.pillarsTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">{t.irisMonde.pillarsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.irisMonde.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <div
                  key={pillar.title}
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${pillarGradients[index]}`}></div>
                  <div className="p-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${pillarGradients[index]} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-3">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                          <FiCheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-training band */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-3">
                {t.irisMonde.trainingEyebrow}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t.irisMonde.trainingTitle}
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl">{t.irisMonde.trainingText}</p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/self-training"
                className="group inline-flex items-center justify-center px-8 py-3 bg-white text-[#0A1128] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <FiBookOpen className="mr-2 w-5 h-5" />
                {t.irisMonde.trainingButton}
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Contact */}
      <section
        id="partnership-contact"
        ref={contactRef}
        className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact details */}
            <div>
              <div
                className={`transition-all duration-700 delay-100 ${
                  contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
                  {t.irisMonde.contactEyebrow}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t.irisMonde.contactTitle}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 rounded-full"></div>
                <p className="text-gray-600 mb-8">{t.irisMonde.contactSubtitle}</p>
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
                        {Icon ? <Icon className="w-6 h-6 text-white" /> : null}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, i) =>
                          info.link ? (
                            <a
                              key={i}
                              href={info.link}
                              className="text-gray-600 hover:text-blue-600 transition-colors block text-sm lg:text-base"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-gray-600 text-sm lg:text-base">
                              {detail}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-100 transition-all duration-700 delay-500 ${
                  contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-gray-700 text-sm">
                  <strong className="text-blue-900">{t.irisMonde.contactFormNote}</strong>{' '}
                  <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                    {t.irisMonde.contactFormLink}
                  </Link>
                </p>
              </div>
            </div>

            {/* Partnership form */}
            <div
              className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 delay-300 ${
                contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">{t.irisMonde.contactFormTitle}</h2>
                <p className="text-blue-100 text-sm mt-1">{t.contact.quickNoteText}</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.irisMonde.organisation}
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.irisMonde.subjectLabel}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">—</option>
                    {t.irisMonde.subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IrisMonde;
