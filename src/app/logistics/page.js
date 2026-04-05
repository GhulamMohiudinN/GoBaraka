'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FiTruck, FiPackage, FiGlobe, FiTrendingUp, FiCheckCircle, FiMap, FiClock, FiDollarSign } from 'react-icons/fi';

const Logistics = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [growthVisible, setGrowthVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const growthRef = useRef(null);

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
          if (entry.target === servicesRef.current && entry.isIntersecting) {
            setServicesVisible(true);
          }
          if (entry.target === growthRef.current && entry.isIntersecting) {
            setGrowthVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (growthRef.current) observer.observe(growthRef.current);

    return () => observer.disconnect();
  }, []);

  const serviceIcons = [FiPackage, FiGlobe, FiTruck, FiTrendingUp];
  const serviceGradients = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-orange-500 to-orange-600',
    'from-purple-500 to-purple-600'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        {/* Map pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Logistics & Supply Chain
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-green-400 bg-clip-text text-transparent">
              {t.logistics.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.logistics.heroDescription}
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

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Overview */}
            <div className={`transition-all duration-700 delay-100 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
                Industry Expertise
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.logistics.overviewTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6 rounded-full"></div>
              <div className="space-y-4">
                {t.logistics.overviewLines.map((line, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Advantages */}
            <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 delay-200 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-6">
                <h3 className="text-xl font-bold text-white">{t.logistics.advantagesTitle}</h3>
                <p className="text-blue-100 text-sm mt-1">Key competitive advantages</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {t.logistics.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              Our Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.logistics.servicesTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.logistics.services.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                    servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${serviceGradients[index]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
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

      {/* Growth Potential Section */}
      <section ref={growthRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ${
            growthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-3">
              Future Ready
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.logistics.growthTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.logistics.growthDescription}
            </p>
          </div>

          {/* Stats/Features Grid */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            growthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Global Reach</div>
              <div className="text-sm text-gray-400">Operations in 50+ countries</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiClock className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
              <div className="text-sm text-gray-400">Real-time tracking & assistance</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Cost Efficient</div>
              <div className="text-sm text-gray-400">Optimized supply chain solutions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;