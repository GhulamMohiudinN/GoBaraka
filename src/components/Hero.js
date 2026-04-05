'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark to-primary-light"
    >
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl">
          {/* Small Label */}
          <p className="text-sm tracking-widest text-blue-200 mb-6 uppercase border-l-4 border-white pl-4 animate-slide-up">
            {t.hero.label}
          </p>

          {/* Main Heading */}
          <h1 className="leading-tight">
            <span className="block text-4xl md:text-6xl font-light text-white/90 tracking-wide animate-slide-up animation-delay-200">
              {t.hero.line1}
            </span>

            <span className="block text-5xl md:text-7xl font-bold text-white tracking-tight animate-slide-up animation-delay-400">
              {t.hero.line2}
            </span>

            <span className="block text-4xl md:text-6xl font-light text-white/90 tracking-wide animate-slide-up animation-delay-600">
              {t.hero.line3}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-white/80 max-w-2xl animate-slide-up animation-delay-800">
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6 animate-slide-up animation-delay-1000">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-2 lg:px-8 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
            >
              {t.hero.portfolioButton}
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-2 lg:px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-dark transition-colors"
            >
              {t.hero.contactButton}
            </Link>
          </div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;