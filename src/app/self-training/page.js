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
  FiEdit3,
  FiFileText,
  FiLayers,
  FiLock,
  FiRefreshCw,
  FiShield,
  FiTruck,
  FiUsers,
  FiXCircle,
} from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import training from '@/lib/training';
import quiz from '@/lib/quiz';

const STORAGE_KEY = 'gobaraka-training-results';
const PASS_MARK = 50;

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
  const questionBank = quiz[language] || quiz.en;

  const [activeTrack, setActiveTrack] = useState(content.tracks[0].id);
  const [collapsed, setCollapsed] = useState({});
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [results, setResults] = useState({});
  const [heroVisible, setHeroVisible] = useState(false);
  const [howVisible, setHowVisible] = useState(false);

  const heroRef = useRef(null);
  const howRef = useRef(null);
  const tracksRef = useRef(null);
  const resultRef = useRef(null);

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

  // Best score per pathway, kept on this device only.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setResults(JSON.parse(stored));
      }
    } catch {
      setResults({});
    }
  }, []);

  const persistResult = (trackId, result) => {
    setResults((current) => {
      const previous = current[trackId];
      const next =
        previous && previous.percent >= result.percent
          ? current
          : { ...current, [trackId]: result };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable - the score still shows for this visit */
      }
      return next;
    });
  };

  const track = useMemo(
    () => content.tracks.find((item) => item.id === activeTrack) || content.tracks[0],
    [content, activeTrack]
  );

  const questionsFor = (caseId) => questionBank[caseId] || [];

  const trackQuestions = useMemo(
    () =>
      track.cases.flatMap((item) =>
        questionsFor(item.id).map((question, index) => ({
          key: `${track.id}-${item.id}-${index}`,
          question,
        }))
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [track, questionBank]
  );

  const total = trackQuestions.length;
  const answeredCount = trackQuestions.filter(
    ({ key }) => answers[key] !== undefined
  ).length;
  const score = trackQuestions.filter(
    ({ key, question }) => answers[key] === question.answer
  ).length;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const isSubmitted = Boolean(submitted[track.id]);
  const passed = percent >= PASS_MARK;

  const selectAnswer = (key, optionIndex) => {
    if (isSubmitted) return;
    setAnswers((current) => ({ ...current, [key]: optionIndex }));
  };

  const submitTrack = () => {
    setSubmitted((current) => ({ ...current, [track.id]: true }));
    persistResult(track.id, { score, total, percent, passed });
    setCollapsed({});
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const retryTrack = () => {
    setAnswers((current) => {
      const next = { ...current };
      trackQuestions.forEach(({ key }) => delete next[key]);
      return next;
    });
    setSubmitted((current) => {
      const next = { ...current };
      delete next[track.id];
      return next;
    });
    setCollapsed({});
    if (tracksRef.current) {
      tracksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const selectTrack = (id) => {
    setActiveTrack(id);
    setCollapsed({});
    if (tracksRef.current) {
      tracksRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleCase = (caseKey) => {
    setCollapsed((current) => ({ ...current, [caseKey]: !current[caseKey] }));
  };

  const howIcons = [FiLayers, FiClipboard, FiEdit3, FiAward];

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
              const best = results[item.id];
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
                    {best ? (
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          best.passed
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {best.percent}%
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-gray-400">
                        {t.selfTraining.notStarted}
                      </span>
                    )}
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
                  <span className="font-semibold text-gray-700">{t.selfTraining.progressLabel}</span>
                  <span className="font-mono text-gray-500">
                    {answeredCount}/{total} {t.selfTraining.answeredLabel}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${total ? (answeredCount / total) * 100 : 0}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>
                    {track.cases.length} {t.selfTraining.casesLabel}
                  </span>
                  <span>{t.selfTraining.passMark}</span>
                </div>
                {results[track.id] && (
                  <div className="mt-2 text-xs text-gray-500">
                    {t.selfTraining.bestScore}: {results[track.id].percent}%
                  </div>
                )}
              </div>
            </div>

            {/* Result panel */}
            <div ref={resultRef} className="scroll-mt-24">
              {isSubmitted && (
                <div
                  className={`mb-8 rounded-2xl border p-6 lg:p-8 ${
                    passed ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          passed ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      >
                        {passed ? (
                          <FiAward className="w-7 h-7 text-white" />
                        ) : (
                          <FiRefreshCw className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                          {t.selfTraining.resultsTitle}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {t.selfTraining.yourScore}: {score}/{total} · {percent}%
                        </div>
                        <div
                          className={`text-sm font-semibold mt-1 ${
                            passed ? 'text-emerald-700' : 'text-amber-700'
                          }`}
                        >
                          {passed ? t.selfTraining.passed : t.selfTraining.failed} ·{' '}
                          {t.selfTraining.passMark}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={retryTrack}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                    >
                      <FiRefreshCw className="w-4 h-4" />
                      {t.selfTraining.retry}
                    </button>
                  </div>
                </div>
              )}
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
                const caseKey = `${track.id}-${item.id}`;
                const isOpen = !collapsed[caseKey];
                const caseQuestions = questionsFor(item.id);
                const caseAnswered = caseQuestions.filter(
                  (question, index) => answers[`${caseKey}-${index}`] !== undefined
                ).length;

                return (
                  <div
                    key={caseKey}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-blue-200 shadow-md' : 'border-gray-200 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCase(caseKey)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-4 text-left px-5 lg:px-6 py-5"
                    >
                      <span className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-mono text-sm font-bold bg-blue-50 text-blue-700">
                        {item.id}
                      </span>
                      <span className="flex-1">
                        <span className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-1">
                          {t.selfTraining.caseLabel} {item.id}
                        </span>
                        <span className="block font-semibold text-gray-900 leading-snug">
                          {item.title}
                        </span>
                      </span>
                      <span className="hidden sm:block text-xs font-mono text-gray-400 flex-shrink-0">
                        {caseAnswered}/{caseQuestions.length}
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
                                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
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
                                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                                    {index + 1}
                                  </span>
                                  <span>{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Questions */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1 flex items-center gap-2">
                            <FiEdit3 className="w-4 h-4 text-gray-500" />
                            {t.selfTraining.questionsLabel}
                          </h4>
                          {!isSubmitted && (
                            <p className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
                              <FiLock className="w-3.5 h-3.5" />
                              {t.selfTraining.noAnswersHint}
                            </p>
                          )}

                          <div className="space-y-5 mt-4">
                            {caseQuestions.map((question, index) => {
                              const key = `${caseKey}-${index}`;
                              const chosen = answers[key];
                              const isCorrect = chosen === question.answer;

                              return (
                                <div
                                  key={key}
                                  className={`rounded-xl border p-5 ${
                                    !isSubmitted
                                      ? 'border-gray-200 bg-white'
                                      : isCorrect
                                      ? 'border-emerald-200 bg-emerald-50/60'
                                      : 'border-red-200 bg-red-50/60'
                                  }`}
                                >
                                  <div className="flex items-start justify-between gap-3 mb-4">
                                    <p className="font-semibold text-gray-900 text-sm leading-relaxed">
                                      {index + 1}. {question.prompt}
                                    </p>
                                    {isSubmitted && (
                                      <span
                                        className={`flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                                          isCorrect
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}
                                      >
                                        {isCorrect ? (
                                          <FiCheckCircle className="w-3.5 h-3.5" />
                                        ) : (
                                          <FiXCircle className="w-3.5 h-3.5" />
                                        )}
                                        {isCorrect
                                          ? t.selfTraining.correctLabel
                                          : t.selfTraining.incorrectLabel}
                                      </span>
                                    )}
                                  </div>

                                  <div className="space-y-2">
                                    {question.options.map((option, optionIndex) => {
                                      const selected = chosen === optionIndex;
                                      const isAnswer = question.answer === optionIndex;

                                      let optionClass =
                                        'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50/50';
                                      if (isSubmitted) {
                                        if (isAnswer) {
                                          optionClass = 'border-emerald-400 bg-emerald-50';
                                        } else if (selected) {
                                          optionClass = 'border-red-300 bg-red-50';
                                        } else {
                                          optionClass = 'border-gray-200 bg-white opacity-70';
                                        }
                                      } else if (selected) {
                                        optionClass = 'border-blue-500 bg-blue-50';
                                      }

                                      return (
                                        <label
                                          key={optionIndex}
                                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${optionClass} ${
                                            isSubmitted ? 'cursor-default' : ''
                                          }`}
                                        >
                                          <input
                                            type="radio"
                                            name={key}
                                            checked={selected || false}
                                            disabled={isSubmitted}
                                            onChange={() => selectAnswer(key, optionIndex)}
                                            className="mt-1 accent-blue-600"
                                          />
                                          <span className="text-sm text-gray-700 leading-relaxed">
                                            {option}
                                          </span>
                                          {isSubmitted && isAnswer && (
                                            <span className="ml-auto flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                                              {t.selfTraining.correctAnswer}
                                            </span>
                                          )}
                                          {isSubmitted && selected && !isAnswer && (
                                            <span className="ml-auto flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-red-600">
                                              {t.selfTraining.yourAnswer}
                                            </span>
                                          )}
                                        </label>
                                      );
                                    })}
                                  </div>

                                  {isSubmitted && (
                                    <p className="mt-4 text-sm text-gray-700 leading-relaxed border-t border-gray-200 pt-3">
                                      {chosen === undefined && (
                                        <span className="font-semibold text-red-600">
                                          {t.selfTraining.notAnswered} —{' '}
                                        </span>
                                      )}
                                      {question.explanation}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Legal recap, only once the pathway is submitted */}
                        {isSubmitted && (
                          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
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
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit */}
            {!isSubmitted && (
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={submitTrack}
                  disabled={answeredCount < total}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <FiCheckCircle className="w-5 h-5" />
                  {t.selfTraining.submitAnswers}
                </button>
                <span className="text-sm text-gray-500">
                  {answeredCount < total
                    ? t.selfTraining.submitHint
                    : `${answeredCount}/${total} ${t.selfTraining.answeredLabel}`}
                </span>
              </div>
            )}

            {/* Disclaimer */}
            <div className="mt-8 flex items-start gap-3 p-5 bg-amber-50 border border-amber-100 rounded-xl">
              <FiAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">{t.selfTraining.disclaimer}</p>
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
