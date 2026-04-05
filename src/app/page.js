'use client';

import Hero from '@/components/Hero';
import SectorCard from '@/components/SectorCard';
import { FiTruck, FiBox, FiGlobe, FiShoppingBag, FiCode, FiCpu } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const sectors = [
    {
      title: t.home.cards[0].title,
      description: t.home.cards[0].description,
      icon: <FiBox className="w-6 h-6 text-white" />,
      href: t.home.cards[0].href,
      color: t.home.cards[0].color,
    },
    {
      title: t.home.cards[1].title,
      description: t.home.cards[1].description,
      icon: <FiTruck className="w-6 h-6 text-white" />,
      href: t.home.cards[1].href,
      color: t.home.cards[1].color,
    },
    {
      title: t.home.cards[2].title,
      description: t.home.cards[2].description,
      icon: <FiGlobe className="w-6 h-6 text-white" />,
      href: t.home.cards[2].href,
      color: t.home.cards[2].color,
    },
    {
      title: t.home.cards[3].title,
      description: t.home.cards[3].description,
      icon: <FiShoppingBag className="w-6 h-6 text-white" />,
      href: t.home.cards[3].href,
      color: t.home.cards[3].color,
    },
    {
      title: t.home.cards[4].title,
      description: t.home.cards[4].description,
      icon: <FiCode className="w-6 h-6 text-white" />,
      href: t.home.cards[4].href,
      color: t.home.cards[4].color,
    },
    {
      title: t.home.cards[5].title,
      description: t.home.cards[5].description,
      icon: <FiCpu className="w-6 h-6 text-white" />,
      href: t.home.cards[5].href,
      color: t.home.cards[5].color,
    },
  ];
  return (
    <>
      <Hero />

      {/* Sectors Overview */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.home.sectorsTitle}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">{t.home.sectorsDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={index} {...sector} buttonText={t.home.learnMore} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.home.whyTitle}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">{t.home.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.whyPoints.map((point) => (
              <div key={point.number} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{point.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}