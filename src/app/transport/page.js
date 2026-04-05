'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiTruck, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi';

const Transport = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.transport.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.transport.heroDescription}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.transport.overviewTitle}</h2>
              {t.transport.overviewLines.map((line, index) => (
                <p key={index} className="text-gray-700 mb-4">{line}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.transport.metrics.map((metric, index) => (
                <div key={index} className="bg-secondary-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary-dark">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.transport.fleetTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.transport.fleet.map((vehicle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{vehicle.type}</h3>
                <p className="text-gray-600 mb-2">{vehicle.description}</p>
                <p className="text-sm text-primary font-semibold">{vehicle.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-4">{t.transport.techTitle}</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">{t.transport.techDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.transport.techCards.map((card, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-primary font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transport;
