'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiTrendingUp, FiPackage, FiGlobe, FiBarChart2 } from 'react-icons/fi';

const Trading = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.trading.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.trading.heroDescription}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.trading.overviewTitle}</h2>
              {t.trading.overviewLines.map((line, index) => (
                <p key={index} className="text-gray-700 mb-4">{line}</p>
              ))}
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">{t.trading.strengthsTitle}</h3>
              <ul className="space-y-3">
                {t.trading.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary font-bold">?</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.trading.commoditiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.trading.commodities.map((commodity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <FiPackage className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-primary-dark mb-3">{commodity.category}</h3>
                <ul className="space-y-1">
                  {commodity.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.trading.marketTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.trading.marketDescription}</p>
        </div>
      </section>
    </div>
  );
};

export default Trading;
