'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FiAlertTriangle,
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiClipboard,
  FiEye,
  FiEyeOff,
  FiFileText,
  FiLayers,
  FiRefreshCw,
  FiShield,
  FiTruck,
  FiUsers,
} from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import training from '@/lib/training';

const STORAGE_KEY = 'gobaraka-training-progress';

const trackIcons = {
  tax: FiFileText,
  junior: FiUsers,
  insurance: FiShield,
  logistics: FiTruck,
};

const trackGradients = {
  tax: 'from-blue-500 to-blue-600',
  junior: 'from-emerald-500 to-emerald-600',
  insurance: 'from-purple-500 to-purple-600',
  logistics: 'from-amber-500 to-amber-600',
};

const SelfTraining = () => {
  const { t, language } = useLanguage();
  const content = training[language] || training.en;

  const [activeTrack, setActiveTrack] = useState(content.tracks[0].id);
  const [openCase, setOpenCase] = useState(null);
  const [revealed, setRevealed] = useState({});
  const [completed, setCompleted] = useState({});
  const [heroVisible, setHeroVisible] = useState(false);
  const [howVisible, setHowVisible] = useState(false);

  const heroRef = useRef(null);
  const howRef = useRef(null);
  const tracksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
          }
          if (entry.target === howRef.current && entry.isIntersecting) {
            setHowVisible(true);
          }
        });
      },
      { threshold: 0.1, triggerOnce: true }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (howRef.current) observer.observe(howRef.current);

    return () => observer.disconnect();
  }, []);

  // Progress is per device, stored locally - no account required.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCompleted(JSON.parse(stored));
      }
    } catch {
      setCompleted({});
    }
  }, []);

  const persist = (next) => {
    setCompleted(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable - progress stays in memory for this visit */
    }
  };

  const track = useMemo(
    () => content.tracks.find((item) => item.id === activeTrack) || content.tracks[0],
    [content, activeTrack]
  );

  const completedInTrack = track.cases.filter((item) => completed[`${track.id}-${item.id}`]).length;
  const progress = Math.round((completedInTrack / track.cases.length) * 100);

  const toggleCase = (caseId) => {
    setOpenCase((current) => (current === caseId ? null : caseId));
  };

  const toggleSolution = (key) => {
    setRevealed((current) => ({ ...current, [key]: !current[key] }));
  };

  const toggleComplete = (key) => {
    const next = { ...completed };
    if (next[key]) {
      delete next[key];
    } else {
      next[key] = true;
    }
    persist(next);
  };

  const resetTrackProgress = () => {
    const next = { ...completed };
    track.cases.forEach((item) => {
      delete next[`${track.id}-${item.id}`];
    });
    persist(next);
  };

  const selectTrack = (id) => {
    setActiveTrack(id);
    setOpenCase(null);
    if (tracksRef.current) {
      tracksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const howIcons = [FiLayers, FiClipboard, FiEye, FiAward];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white py-24 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-mono tracking-wider text-blue-400 uppercase mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
              {t.selfTraining.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
              {t.selfTraining.heroTitle}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {t.selfTraining.heroDescription}
            </p>
            <p className="mt-6 text-sm font-mono uppercase tracking-wider text-blue-300">
              {content.workbookTitle}
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section ref={howRef} className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              {t.selfTraining.howEyebrow}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.selfTraining.howTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.selfTraining.howItWorks.map((step, index) => {
              const Icon = howIcons[index];
              return (
                <div
                  key={step.title}
                  className={`bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                    howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-mono text-blue-600 mb-1">0{index + 1}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section ref={tracksRef} className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 uppercase mb-3">
              {t.selfTraining.tracksEyebrow}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.selfTraining.tracksTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Track selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {content.tracks.map((item) => {
              const Icon = trackIcons[item.id] || FiBookOpen;
              const isActive = item.id === activeTrack;
              const done = item.cases.filter((c) => completed[`${item.id}-${c.id}`]).length;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectTrack(item.id)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-blue-600 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-11 h-11 bg-gradient-to-br ${
                        trackGradients[item.id] || 'from-blue-500 to-blue-600'
                      } rounded-xl flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      {done}/{item.cases.length}
                    </span>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-1">
                    {item.code}
                  </div>
                  <div className="font-bold text-gray-900">{item.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active track panel */}
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-gray-200 p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div className="max-w-2xl">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-600 mb-2">
                  {track.code}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{track.title}</h3>
                <p className="text-gray-600 leading-relaxed">{track.summary}</p>
              </div>

              <div className="lg:w-72 w-full">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">
                    {t.selfTraining.progressLabel}
                  </span>
                  <span className="font-mono text-gray-500">
                    {completedInTrack}/{track.cases.length} · {progress}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-3">
                  {progress === 100 ? (
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <FiAward className="w-4 h-4" />
                      {t.selfTraining.completedAll}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">
                      {track.cases.length} {t.selfTraining.casesLabel}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={resetTrackProgress}
                    className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <FiRefreshCw className="w-3.5 h-3.5" />
                    {t.selfTraining.resetProgress}
                  </button>
                </div>
              </div>
            </div>

            {/* Optional highlight strip (SOD roles, customs documents...) */}
            {track.highlight && (
              <div className="mb-8 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="px-6 py-3 bg-[#0A1128] text-white text-xs font-mono uppercase tracking-wider">
                  {track.highlight.title}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                  {track.highlight.items.map((item) => (
                    <div key={item.label} className="p-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-700">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cases */}
            <div className="space-y-4">
              {track.cases.map((item) => {
                const key = `${track.id}-${item.id}`;
                const isOpen = openCase === key;
                const isDone = Boolean(completed[key]);
                const isRevealed = Boolean(revealed[key]);

                return (
                  <div
                    key={key}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-blue-300 shadow-lg' : 'border-gray-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCase(key)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-4 text-left px-5 lg:px-6 py-5"
                    >
                      <span
                        className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-bold ${
                          isDone
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {isDone ? <FiCheckCircle className="w-5 h-5" /> : item.id}
                      </span>
                      <span className="flex-1">
                        <span className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                          {t.selfTraining.caseLabel} {item.id}
                        </span>
                        <span className="block font-semibold text-gray-900 leading-snug">
                          {item.title}
                        </span>
                      </span>
                      <FiChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 lg:px-6 pb-6 border-t border-gray-100 pt-6 space-y-6">
                        {/* Scenario */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                            {t.selfTraining.scenarioLabel}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{item.scenario}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Data provided */}
                          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3 flex items-center gap-2">
                              <FiFileText className="w-4 h-4 text-gray-500" />
                              {t.selfTraining.dataLabel}
                            </h4>
                            <ul className="space-y-2">
                              {item.data.map((line, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-600 flex items-start gap-2"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Learner instructions */}
                          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-2">
                              <FiClipboard className="w-4 h-4 text-blue-600" />
                              {t.selfTraining.instructionsLabel}
                            </h4>
                            <ul className="space-y-2">
                              {item.instructions.map((line, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Solution */}
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleSolution(key)}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                              isRevealed
                                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md'
                            }`}
                          >
                            {isRevealed ? (
                              <>
                                <FiEyeOff className="w-4 h-4" />
                                {t.selfTraining.hideSolution}
                              </>
                            ) : (
                              <>
                                <FiEye className="w-4 h-4" />
                                {t.selfTraining.showSolution}
                              </>
                            )}
                          </button>

                          {isRevealed && (
                            <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-2">
                                <FiCheckCircle className="w-4 h-4" />
                                {t.selfTraining.solutionLabel}
                              </h4>
                              <ul className="space-y-3">
                                {item.solution.map((line, index) => (
                                  <li
                                    key={index}
                                    className="text-sm text-gray-700 flex items-start gap-2 leading-relaxed"
                                  >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                    <span>{line}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Completion */}
                        <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => toggleComplete(key)}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 border-2 ${
                              isDone
                                ? 'border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600'
                                : 'border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600'
                            }`}
                          >
                            <FiCheckCircle className="w-4 h-4" />
                            {isDone ? t.selfTraining.markedComplete : t.selfTraining.markComplete}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 flex items-start gap-3 p-5 bg-amber-50 border border-amber-100 rounded-xl">
              <FiAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                {t.selfTraining.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t.selfTraining.ctaTitle}
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl">{t.selfTraining.ctaText}</p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/iris-monde#partnership-contact"
                className="group inline-flex items-center justify-center px-8 py-3 bg-white text-[#0A1128] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                {t.selfTraining.ctaButton}
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfTraining;
