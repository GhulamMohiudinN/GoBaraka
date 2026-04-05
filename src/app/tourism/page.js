'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiGlobe, FiCamera, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Tourism = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.tourism.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.tourism.heroDescription}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.tourism.overviewTitle}</h2>
              {t.tourism.overviewLines.map((line, index) => (
                <p key={index} className="text-gray-700 mb-4">{line}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.tourism.metrics.map((metric, index) => (
                <div key={index} className="bg-secondary-light p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary-dark">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.tourism.experiencesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.tourism.experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <FiCamera className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Potential */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.tourism.marketTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.tourism.marketDescription}</p>
        </div>
      </section>
    </div>
  );
};

export default Tourism;
