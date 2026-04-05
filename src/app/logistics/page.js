'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiTruck, FiPackage, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const Logistics = () => {
  const { t } = useLanguage();
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.logistics.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.logistics.heroDescription}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.logistics.overviewTitle}</h2>
              {t.logistics.overviewLines.map((line, index) => (
                <p key={index} className="text-gray-700 mb-4">{line}</p>
              ))}
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">{t.logistics.advantagesTitle}</h3>
              <ul className="space-y-3">
                {t.logistics.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.logistics.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.logistics.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {index === 0 && <FiPackage className="w-8 h-8 text-primary" />}
                  {index === 1 && <FiGlobe className="w-8 h-8 text-primary" />}
                  {index === 2 && <FiTruck className="w-8 h-8 text-primary" />}
                  {index === 3 && <FiTrendingUp className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Potential */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.logistics.growthTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.logistics.growthDescription}</p>
        </div>
      </section>
    </div>
  );
};

export default Logistics;