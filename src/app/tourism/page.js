'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FiGlobe, FiCamera, FiUsers, FiTrendingUp, FiMap, FiCompass, FiHeart, FiSun, FiCheckCircle } from 'react-icons/fi';

const Tourism = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [experiencesVisible, setExperiencesVisible] = useState(false);
  const [marketVisible, setMarketVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const experiencesRef = useRef(null);
  const marketRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
          }
          if (entry.target === overviewRef.current && entry.isIntersecting) {
            setOverviewVisible(true);
          }
          if (entry.target === experiencesRef.current && entry.isIntersecting) {
            setExperiencesVisible(true);
          }
          if (entry.target === marketRef.current && entry.isIntersecting) {
            setMarketVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (experiencesRef.current) observer.observe(experiencesRef.current);
    if (marketRef.current) observer.observe(marketRef.current);

    return () => observer.disconnect();
  }, []);

  const metricIcons = [FiGlobe, FiUsers, FiTrendingUp, FiCamera];
  const metricGradients = [
    'from-orange-500 to-orange-600',
    'from-red-500 to-red-600',
    'from-amber-500 to-amber-600',
    'from-yellow-500 to-yellow-600'
  ];

  const experienceIcons = [FiCamera, FiCompass, FiHeart, FiSun, FiMap, FiGlobe];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background with travel theme */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        {/* Mountain/landscape pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute bottom-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path fill="rgba(255,255,255,0.1)" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-amber-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Travel & Tourism
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-amber-400 to-orange-400 bg-clip-text text-transparent">
              {t.tourism.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.tourism.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">Explore</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Overview */}
            <div className={`transition-all duration-700 delay-100 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="inline-block text-xs font-semibold tracking-wider text-amber-600 uppercase mb-3">
                Industry Overview
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.tourism.overviewTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-6 rounded-full"></div>
              <div className="space-y-4">
                {t.tourism.overviewLines.map((line, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Metrics Grid */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t.tourism.metrics.map((metric, index) => {
                const Icon = metricIcons[index % metricIcons.length];
                return (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${metricGradients[index]} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section ref={experiencesRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            experiencesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-amber-600 uppercase mb-3">
              Unique Experiences
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.tourism.experiencesTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Discover unforgettable journeys and authentic cultural experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.tourism.experiences.map((exp, index) => {
              const Icon = experienceIcons[index % experienceIcons.length];
              const gradients = [
                'from-orange-500 to-orange-600',
                'from-red-500 to-red-600',
                'from-amber-500 to-amber-600',
                'from-yellow-500 to-yellow-600',
                'from-orange-600 to-red-600',
                'from-amber-600 to-yellow-600'
              ];
              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                    experiencesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Potential Section */}
      <section ref={marketRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ${
            marketVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
              Market Potential
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.tourism.marketTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.tourism.marketDescription}
            </p>
          </div>

          {/* Additional Features Grid */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            marketVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiCompass className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Customized Tours</h3>
              <p className="text-sm text-gray-400">Tailored itineraries for every traveler</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiHeart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Premium Service</h3>
              <p className="text-sm text-gray-400">24/7 dedicated support</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiGlobe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Network</h3>
              <p className="text-sm text-gray-400">Partners worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;