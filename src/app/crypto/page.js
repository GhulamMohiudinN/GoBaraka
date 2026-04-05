'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiCpu, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi';

const Crypto = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.crypto.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.crypto.heroDescription}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.crypto.overviewTitle}</h2>
              {t.crypto.overviewLines.map((line, index) => (
                <p key={index} className="text-gray-700 mb-4">{line}</p>
              ))}
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">{t.crypto.focusTitle}</h3>
              <ul className="space-y-3">
                {t.crypto.focusPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary font-bold">?</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.crypto.initiativesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.crypto.initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {index === 0 && <FiTrendingUp className="w-8 h-8 text-primary" />}
                  {index === 1 && <FiShield className="w-8 h-8 text-primary" />}
                  {index === 2 && <FiGlobe className="w-8 h-8 text-primary" />}
                  {index === 3 && <FiCpu className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{initiative.title}</h3>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="bg-primary-dark text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{t.crypto.approachTitle}</h2>
            <p className="text-gray-300 mb-4">{t.crypto.approachDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {t.crypto.characteristics.map((item, index) => (
                <div key={index} className="border border-gray-600 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crypto;
