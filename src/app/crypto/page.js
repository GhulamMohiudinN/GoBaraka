'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FiCpu, FiTrendingUp, FiShield, FiGlobe, FiCheckCircle, FiZap, FiLock, FiServer } from 'react-icons/fi';

const Crypto = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [initiativesVisible, setInitiativesVisible] = useState(false);
  const [approachVisible, setApproachVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const initiativesRef = useRef(null);
  const approachRef = useRef(null);

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
          if (entry.target === initiativesRef.current && entry.isIntersecting) {
            setInitiativesVisible(true);
          }
          if (entry.target === approachRef.current && entry.isIntersecting) {
            setApproachVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (initiativesRef.current) observer.observe(initiativesRef.current);
    if (approachRef.current) observer.observe(approachRef.current);

    return () => observer.disconnect();
  }, []);

  const initiativeIcons = [FiTrendingUp, FiShield, FiGlobe, FiCpu];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-purple-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Blockchain & Crypto
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.crypto.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.crypto.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
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
              <span className="inline-block text-xs font-semibold tracking-wider text-purple-600 uppercase mb-3">
                Overview
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.crypto.overviewTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6 rounded-full"></div>
              <div className="space-y-4">
                {t.crypto.overviewLines.map((line, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Focus Points */}
            <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 delay-200 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
                <h3 className="text-xl font-bold text-white">{t.crypto.focusTitle}</h3>
                <p className="text-purple-100 text-sm mt-1">Key areas of expertise</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {t.crypto.focusPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section ref={initiativesRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            initiativesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-purple-600 uppercase mb-3">
              Our Focus
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.crypto.initiativesTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.crypto.initiatives.map((initiative, index) => {
              const Icon = initiativeIcons[index % initiativeIcons.length];
              const gradients = [
                'from-purple-500 to-purple-600',
                'from-blue-500 to-blue-600',
                'from-cyan-500 to-cyan-600',
                'from-indigo-500 to-indigo-600'
              ];
              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    initiativesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section ref={approachRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 transition-all duration-700 ${
            approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-8">
              <span className="inline-block text-xs font-mono tracking-wider text-purple-400 uppercase mb-3">
                Our Methodology
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t.crypto.approachTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
              {t.crypto.approachDescription}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.crypto.characteristics.map((item, index) => {
                const icons = [FiZap, FiLock, FiServer];
                const Icon = icons[index % icons.length];
                const gradients = [
                  'from-purple-500 to-purple-600',
                  'from-blue-500 to-blue-600',
                  'from-cyan-500 to-cyan-600'
                ];
                return (
                  <div 
                    key={index} 
                    className="group bg-white/10 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 border border-white/5"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white mb-2">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crypto;