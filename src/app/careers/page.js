'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  FiBriefcase, FiMapPin, FiClock, FiDollarSign, FiCheckCircle, 
  FiX, FiSend, FiUsers, FiHeart, FiTrendingUp, FiAward,
  FiCode, FiGlobe, FiTruck, FiBarChart2, FiCpu, FiShoppingBag
} from 'react-icons/fi';

const Careers = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [rolesVisible, setRolesVisible] = useState(false);
  const [cultureVisible, setCultureVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  });
  const [applicationStatus, setApplicationStatus] = useState('');

  const heroRef = useRef(null);
  const rolesRef = useRef(null);
  const cultureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
          }
          if (entry.target === rolesRef.current && entry.isIntersecting) {
            setRolesVisible(true);
          }
          if (entry.target === cultureRef.current && entry.isIntersecting) {
            setCultureVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (rolesRef.current) observer.observe(rolesRef.current);
    if (cultureRef.current) observer.observe(cultureRef.current);

    return () => observer.disconnect();
  }, []);

  const jobAssets = [
    { id: 1, icon: FiTruck, color: 'blue' },
    { id: 2, icon: FiTruck, color: 'green' },
    { id: 3, icon: FiGlobe, color: 'orange' },
    { id: 4, icon: FiBarChart2, color: 'purple' },
    { id: 5, icon: FiCode, color: 'cyan' },
    { id: 6, icon: FiCpu, color: 'red' },
  ];

  const jobOpenings = jobAssets.map((asset, index) => ({
    ...asset,
    ...((t?.careers?.jobs && t.careers.jobs[index]) || {}),
  }));

  const careerCulture = t?.careers?.culturePoints || [];
  const culturePoints = [
    { icon: FiTrendingUp, ...(careerCulture[0] || {}) },
    { icon: FiHeart, ...(careerCulture[1] || {}) },
    { icon: FiAward, ...(careerCulture[2] || {}) },
    { icon: FiUsers, ...(careerCulture[3] || {}) },
  ];

  const handleApply = (role) => {
    setSelectedRole(role);
    setShowApplicationForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setApplicationStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setApplicationStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
        resume: null
      });
      
      setTimeout(() => {
        setApplicationStatus('');
        setShowApplicationForm(false);
        setSelectedRole(null);
      }, 3000);
    }, 1500);
  };

  const getColorClass = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600',
      cyan: 'from-cyan-500 to-cyan-600',
      red: 'from-red-500 to-red-600'
    };
    return colors[color] || colors.blue;
  };

  const getBgColorClass = (color) => {
    const colors = {
      blue: 'bg-blue-50',
      green: 'bg-green-50',
      orange: 'bg-orange-50',
      purple: 'bg-purple-50',
      cyan: 'bg-cyan-50',
      red: 'bg-red-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="overflow-hidden">
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowApplicationForm(false);
                setSelectedRole(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiX className="w-5 h-5 text-gray-500" />
            </button>
            
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.careers.form.applyFor} {selectedRole?.title}</h2>
                <p className="text-gray-600">{`${selectedRole?.department} • ${selectedRole?.location}`}</p>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.careers.form.fullName}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.careers.form.placeholders.fullName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.careers.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.careers.form.placeholders.email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.careers.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.careers.form.placeholders.phone}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.careers.form.experience}
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t.careers.form.placeholders.experience}</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="7+">7+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.careers.form.coverLetter}
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t.careers.form.placeholders.coverLetter}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.careers.form.resume}
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>

                <button
                  type="submit"
                  disabled={applicationStatus === 'sending'}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {applicationStatus === 'sending' ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t.careers.form.submitting}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <FiSend className="w-5 h-5" />
                      <span>{t.careers.form.submit}</span>
                    </div>
                  )}
                </button>

                {applicationStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm text-center">
                      {t.careers.form.success}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              {t.careers.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.careers.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.careers.heroDescription}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">{t.careers.exploreLabel}</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.careers.whyTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t.careers.whySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section ref={rolesRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              {t.careers.currentOpportunitiesLabel}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.careers.openPositionsTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t.careers.openPositionsDescription}
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => {
              const Icon = job.icon;
              return (
                <div 
                  key={job.id}
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                    rolesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      {/* Left side - Job info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${getColorClass(job.color)} rounded-xl flex items-center justify-center shadow-md`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                            <p className="text-sm text-blue-600 font-medium">{job.department}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FiMapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FiClock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FiDollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FiBriefcase className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{t.careers.keyRequirementsTitle}</h4>
                          <ul className="space-y-1">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Right side - Apply button */}
                      <div className="lg:text-right">
                        <button
                          onClick={() => handleApply(job)}
                          className="w-full lg:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          {t.careers.applyNow}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section ref={cultureRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            cultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-3">
              {t.careers.cultureSectionLabel}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.careers.lifeTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              {t.careers.lifeDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Culture Card 1 */}
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 ${
              cultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FiUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Team Collaboration</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We foster a collaborative environment where ideas are shared freely, and everyone's voice is heard. Regular team building activities and open communication channels keep our team connected.
              </p>
            </div>

            {/* Culture Card 2 */}
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-100 ${
              cultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Growth Opportunities</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We invest in our people through continuous learning, mentorship programs, and clear career progression paths. Your growth is our priority.
              </p>
            </div>

            {/* Culture Card 3 */}
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-200 ${
              cultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Work-Life Balance</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Flexible working hours, remote options, and wellness programs ensure our team maintains a healthy balance between professional and personal life.
              </p>
            </div>

            {/* Culture Card 4 */}
            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-300 ${
              cultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <FiAward className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Recognition & Rewards</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We celebrate achievements and reward excellence through our recognition program, bonuses, and career advancement opportunities.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-400 ${
            cultureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-300 mb-4">
              {t.careers.callToAction}
            </p>
            <button
              onClick={() => {
                setSelectedRole({
                  title: t.careers.generalApplication,
                  department: t.careers.futureOpportunities,
                  location: t.careers.flexible
                });
                setShowApplicationForm(true);
              }}
              className="px-6 py-2.5 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              {t.careers.generalApplicationButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;