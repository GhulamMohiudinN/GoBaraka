'use client';

import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="">
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.heroTitle}</h1>
          <p className="text-xl max-w-3xl">{t.contact.heroDescription}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8">{t.contact.contactTitle}</h2>
              <div className="space-y-6">
                {t.contact.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center">
                      {index === 0 && <FiMapPin className="w-6 h-6 text-primary" />}
                      {index === 1 && <FiPhone className="w-6 h-6 text-primary" />}
                      {index === 2 && <FiMail className="w-6 h-6 text-primary" />}
                      {index === 3 && <FiClock className="w-6 h-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        info.link ? (
                          <a key={i} href={info.link} className="text-gray-600 hover:text-primary transition-colors block">{detail}</a>
                        ) : (
                          <p key={i} className="text-gray-600">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-secondary-light rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>{t.contact.quickNote}</strong> {t.contact.quickNoteText}
                </p>
              </div>
            </div>

            <div className="bg-secondary-light p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">{t.contact.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.fullName}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">{t.contact.message}</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>{t.contact.sendButton}</span>
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-center">{t.contact.success}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
