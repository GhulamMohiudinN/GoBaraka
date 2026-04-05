'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Portfolio = () => {
  const { t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [metricsVisible, setMetricsVisible] = useState(false);
  
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
          }
          if (entry.target === projectsRef.current && entry.isIntersecting) {
            setProjectsVisible(true);
          }
          if (entry.target === metricsRef.current && entry.isIntersecting) {
            setMetricsVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (metricsRef.current) observer.observe(metricsRef.current);

    return () => observer.disconnect();
  }, []);

  const metricIcons = [FiAward, FiUsers, FiTrendingUp];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 80px)`
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.portfolio.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.portfolio.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              Featured Projects
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Explore some of our most impactful projects across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolio.projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                isVisible={projectsVisible}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${
            metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-3">
              Our Impact
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.portfolio.metricsTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.portfolio.metrics.map((metric, index) => {
              const Icon = metricIcons[index % metricIcons.length];
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-purple-500 to-purple-600',
                'from-cyan-500 to-cyan-600'
              ];
              return (
                <div 
                  key={index} 
                  className={`group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${
                    metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;