'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FiTruck, FiUsers, FiClock, FiTrendingUp, FiCheckCircle, FiMap, FiNavigation, FiShield, FiZap, FiAward } from 'react-icons/fi';

const Transport = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [fleetVisible, setFleetVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const fleetRef = useRef(null);
  const techRef = useRef(null);

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
          if (entry.target === fleetRef.current && entry.isIntersecting) {
            setFleetVisible(true);
          }
          if (entry.target === techRef.current && entry.isIntersecting) {
            setTechVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (fleetRef.current) observer.observe(fleetRef.current);
    if (techRef.current) observer.observe(techRef.current);

    return () => observer.disconnect();
  }, []);

  const metricIcons = [FiTruck, FiUsers, FiClock, FiTrendingUp];
  const metricGradients = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-orange-500 to-orange-600',
    'from-purple-500 to-purple-600'
  ];

  const techIcons = [FiMap, FiNavigation, FiShield, FiZap, FiAward, FiClock];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background with transport theme */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        {/* Road pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.1) 60px, rgba(255,255,255,0.1) 61px)`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Transport & Logistics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-green-400 bg-clip-text text-transparent">
              {t.transport.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.transport.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">Move</span>
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
                Our Capabilities
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.transport.overviewTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-6 rounded-full"></div>
              <div className="space-y-4">
                {t.transport.overviewLines.map((line, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Metrics Grid */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t.transport.metrics.map((metric, index) => {
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

      {/* Fleet Section */}
      <section ref={fleetRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            fleetVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              Our Fleet
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.transport.fleetTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Modern, well-maintained vehicles for all your transportation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.transport.fleet.map((vehicle, index) => {
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-orange-500 to-orange-600',
                'from-purple-500 to-purple-600'
              ];
              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                    fleetVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <FiTruck className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {vehicle.type}
                          </h3>
                          <p className="text-gray-600 mb-2 leading-relaxed">
                            {vehicle.description}
                          </p>
                          <p className="text-sm font-semibold text-blue-600">
                            {vehicle.capacity}
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

      {/* Innovation & Technology Section */}
      <section ref={techRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-3">
              Innovation Hub
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.transport.techTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.transport.techDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.transport.techCards.map((card, index) => {
              const Icon = techIcons[index % techIcons.length];
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-orange-500 to-orange-600',
                'from-purple-500 to-purple-600',
                'from-red-500 to-red-600',
                'from-cyan-500 to-cyan-600'
              ];
              return (
                <div 
                  key={index} 
                  className={`group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${
                    techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Stats */}
          <div className={`mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-300 ${
            techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">98%</div>
              <div className="text-xs text-gray-400">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-xs text-gray-400">Real-time Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">500+</div>
              <div className="text-xs text-gray-400">Vehicles in Fleet</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-xs text-gray-400">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;