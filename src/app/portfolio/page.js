'use client';

import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <div className="">
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.portfolio.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.portfolio.heroDescription}</p>
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolio.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-8">{t.portfolio.metricsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.portfolio.metrics.map((metric, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
