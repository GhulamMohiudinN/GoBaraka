'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiCode, FiSmartphone, FiCloud, FiShield } from 'react-icons/fi';

const DigitalServices = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.digitalServices.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.digitalServices.heroDescription}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.digitalServices.overviewTitle}</h2>
              {t.digitalServices.overviewLines.map((line, index) => (
                <p key={index} className="text-gray-700 mb-4">{line}</p>
              ))}
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">{t.digitalServices.approachTitle}</h3>
              <ul className="space-y-3">
                {t.digitalServices.approachPoints.map((point, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.digitalServices.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.digitalServices.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {index === 0 && <FiCode className="w-8 h-8 text-primary" />}
                  {index === 1 && <FiSmartphone className="w-8 h-8 text-primary" />}
                  {index === 2 && <FiCloud className="w-8 h-8 text-primary" />}
                  {index === 3 && <FiShield className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-4">{t.digitalServices.technologyTitle}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">{t.digitalServices.technologyDescription}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {t.digitalServices.technologyList.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-secondary-light text-primary-dark rounded-full text-sm font-semibold">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalServices;
