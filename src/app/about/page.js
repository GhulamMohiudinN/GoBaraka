'use client';

import { FiAward, FiUsers, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const iconMap = {
  award: FiAward,
  users: FiUsers,
  trending: FiTrendingUp,
  globe: FiGlobe,
};

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.about.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.about.heroDescription}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary-light p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.about.missionTitle}</h2>
              <p className="text-gray-700 text-lg">{t.about.missionText}</p>
            </div>
            <div className="bg-secondary-light p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">{t.about.visionTitle}</h2>
              <p className="text-gray-700 text-lg">{t.about.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={index} className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-dark mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">{t.about.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;