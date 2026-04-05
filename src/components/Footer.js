'use client';

import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
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

  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0A1128] via-[#1A2333] to-[#0A1128] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)`
        }} />
      </div>

      {/* Top decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo placeholder - uncomment when logo is available */}
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Image src={logo} alt="Go Baraka" width={40} height={40} className="rounded-lg" />
              </div> */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Go Baraka Sarl
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A diversified business group committed to excellence and innovation across multiple sectors.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 relative inline-block">
              {t.footer.quickLinks}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></div>
            </h3>
            <ul className="space-y-2">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 relative inline-block">
              Resources
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></div>
            </h3>
            <ul className="space-y-2">
              {navigation.slice(6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Commitment */}
          <div>
            <h3 className="text-lg font-bold mb-5 relative inline-block">
              Get in Touch
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-1"></div>
            </h3>
            
            {/* Contact Info */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <FiPhone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  +77 2043677
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <FiMail className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  info@al-r.com
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <FiClock className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors block">
                    Mon-Fri: 9:00 - 18:00
                  </span>
                  <span className="text-gray-500 text-xs">(GMT+1)</span>
                </div>
              </li>
            </ul>

            {/* Commitment Box */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="text-sm font-semibold text-blue-400 mb-2">
                {t.footer.ourCommitment}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-2">
                {t.footer.commitmentText}
              </p>
              <p className="text-gray-500 text-xs italic">
                {t.footer.companySummary}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Go Baraka Sarl. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;