'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectorCard from '@/components/SectorCard';
import {
  FiTruck,
  FiBox,
  FiGlobe,
  FiShoppingBag,
  FiCode,
  FiCpu,
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
} from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const sectorsRef = useRef(null);
  const whyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectorsRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          if (entry.target === whyRef.current && entry.isIntersecting) {
            setIsWhyVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (sectorsRef.current) observer.observe(sectorsRef.current);
    if (whyRef.current) observer.observe(whyRef.current);

    return () => observer.disconnect();
  }, []);

  const sectors = [
    {
      title: t.home.cards[0].title,
      description: t.home.cards[0].description,
      icon: <FiBox className="w-6 h-6 text-white" />,
      href: t.home.cards[0].href,
      color: '#002B5C',
    },
    {
      title: t.home.cards[1].title,
      description: t.home.cards[1].description,
      icon: <FiTruck className="w-6 h-6 text-white" />,
      href: t.home.cards[1].href,
      color: '#2563EB',
    },
    {
      title: t.home.cards[2].title,
      description: t.home.cards[2].description,
      icon: <FiGlobe className="w-6 h-6 text-white" />,
      href: t.home.cards[2].href,
      color: '#059669',
    },
    {
      title: t.home.cards[3].title,
      description: t.home.cards[3].description,
      icon: <FiShoppingBag className="w-6 h-6 text-white" />,
      href: t.home.cards[3].href,
      color: '#7C3AED',
    },
    {
      title: t.home.cards[4].title,
      description: t.home.cards[4].description,
      icon: <FiCode className="w-6 h-6 text-white" />,
      href: t.home.cards[4].href,
      color: '#DC2626',
    },
    {
      title: t.home.cards[5].title,
      description: t.home.cards[5].description,
      icon: <FiCpu className="w-6 h-6 text-white" />,
      href: t.home.cards[5].href,
      color: '#002B5C',
    },
  ];

  return (
    <>
      <Hero />

      {/* Sectors Overview */}
      <section ref={sectorsRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t.home.sectorsTitle}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.home.sectorsDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard 
                key={index} 
                {...sector} 
                buttonText={t.home.learnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Iris Monde partnership & self-training */}
      <section className="py-20 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                {t.irisMonde.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.irisMonde.introTitle}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 rounded-full"></div>
              <p className="text-gray-300 leading-relaxed mb-8">{t.irisMonde.introText}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iris-monde#partnership-contact"
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                >
                  {t.hero.contactButton}
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/self-training"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm sm:text-base"
                >
                  <FiBookOpen className="mr-2 w-5 h-5" />
                  {t.irisMonde.trainingButton}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.irisMonde.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-300">
                        <FiCheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`transition-all duration-700 delay-100 ${
              isWhyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t.home.whyTitle}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.home.whySubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.whyPoints.map((point, index) => (
              <div 
                key={point.number} 
                className={`text-center p-6 rounded-2xl transition-all duration-700 delay-${index * 100} ${
                  isWhyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white text-3xl font-bold">{point.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}