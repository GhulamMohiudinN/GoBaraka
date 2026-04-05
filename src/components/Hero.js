'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] overflow-hidden"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Small Label */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-blue-400 uppercase mb-4 sm:mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              {t.hero.label}
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2 sm:space-y-3">
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 tracking-tight">
                {t.hero.line1}
              </span>
            </div>

            <div 
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent tracking-tighter">
                {t.hero.line2}
              </span>
            </div>

            <div 
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 tracking-tight">
                {t.hero.line3}
              </span>
            </div>
          </div>

          {/* Description */}
          <div 
            className={`max-w-2xl mx-auto lg:mx-0 mt-6 sm:mt-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center lg:justify-start transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              {t.hero.portfolioButton}
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm sm:text-base"
            >
              {t.hero.contactButton}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <FiChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;