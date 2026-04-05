'use client';

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assests/logo.jpeg';
import Image from 'next/image';

const Footer = () => {
  const { t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.logistics, href: '/logistics' },
    { name: t.nav.transport, href: '/transport' },
    { name: t.nav.tourism, href: '/tourism' },
    { name: t.nav.trading, href: '/trading' },
    { name: t.nav.digitalServices, href: '/digital-services' },
    { name: t.nav.crypto, href: '/crypto' },
    { name: t.nav.portfolio, href: '/portfolio' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">GB</span>
              </div> */}
              <span className="text-xl font-bold">Go Baraka Sarl</span>
            </div>
            <p className="text-gray-300 text-sm">
              A diversified business group committed to excellence and innovation across multiple sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">77 2043677</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@al-r.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiClock className="mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.ourCommitment}</h3>
            <p className="text-gray-300 text-sm mb-2">
              {t.footer.commitmentText}
            </p>
            <p className="text-gray-300 text-sm">
              {t.footer.companySummary}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Go Baraka Sarl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;