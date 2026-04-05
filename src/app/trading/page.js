'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FiTrendingUp, FiPackage, FiGlobe, FiBarChart2, FiDollarSign, FiCheckCircle, FiActivity, FiShoppingCart } from 'react-icons/fi';

const Trading = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [commoditiesVisible, setCommoditiesVisible] = useState(false);
  const [marketVisible, setMarketVisible] = useState(false);
  
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const commoditiesRef = useRef(null);
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
          if (entry.target === commoditiesRef.current && entry.isIntersecting) {
            setCommoditiesVisible(true);
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
    if (commoditiesRef.current) observer.observe(commoditiesRef.current);
    if (marketRef.current) observer.observe(marketRef.current);

    return () => observer.disconnect();
  }, []);

  const commodityIcons = [FiPackage, FiTrendingUp, FiGlobe, FiBarChart2];
  const commodityGradients = [
    'from-emerald-500 to-emerald-600',
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-rose-500 to-rose-600'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background with market theme */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        {/* Chart pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute bottom-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path fill="rgba(255,255,255,0.1)" d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-emerald-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Global Trading
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {t.trading.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.trading.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">Trade</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
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
              <span className="inline-block text-xs font-semibold tracking-wider text-emerald-600 uppercase mb-3">
                Trading Excellence
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t.trading.overviewTitle}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mb-6 rounded-full"></div>
              <div className="space-y-4">
                {t.trading.overviewLines.map((line, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column - Strengths */}
            <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 delay-200 ${
              overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-6">
                <h3 className="text-xl font-bold text-white">{t.trading.strengthsTitle}</h3>
                <p className="text-emerald-100 text-sm mt-1">Key competitive advantages</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {t.trading.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {strength}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commodities Section */}
      <section ref={commoditiesRef} className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            commoditiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-emerald-600 uppercase mb-3">
              Trade Portfolio
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.trading.commoditiesTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Diverse range of commodities for global trade and investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.trading.commodities.map((commodity, index) => {
              const Icon = commodityIcons[index % commodityIcons.length];
              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    commoditiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="p-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${commodityGradients[index]} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                        {commodity.category}
                      </h3>
                      <ul className="space-y-2">
                        {commodity.items.map((item, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section ref={marketRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ${
            marketVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-emerald-400 uppercase mb-3">
              Market Insights
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.trading.marketTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.trading.marketDescription}
            </p>
          </div>

          {/* Additional Trading Features */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            marketVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiActivity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-time Analytics</h3>
              <p className="text-sm text-gray-400">Live market data and insights</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiShoppingCart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Sourcing</h3>
              <p className="text-sm text-gray-400">Eliminate middlemen</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiDollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-400">Best market rates guaranteed</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-300 ${
            marketVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-400">50+</div>
                <div className="text-xs text-gray-400">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">100+</div>
                <div className="text-xs text-gray-400">Global Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                <div className="text-xs text-gray-400">Trading Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trading;