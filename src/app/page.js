'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import SectorCard from '@/components/SectorCard';
import { FiTruck, FiBox, FiGlobe, FiShoppingBag, FiCode, FiCpu } from 'react-icons/fi';
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