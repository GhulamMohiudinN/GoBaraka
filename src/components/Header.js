'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '@/assests/logo.png';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { language, setLanguage, t } = useLanguage();

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
    { name: t.nav.careers, href: '/careers' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm bg-white/95'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="mt-1">
            {/* <div className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GB</span>
            </div>
            <span className="text-xl font-bold text-primary-dark">Go Baraka Sarl</span> */}
            <Image src={logo} alt="Go Baraka Sarl Logo" width={100} height={10} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              title={t.header.switchTitle}
              className="px-3 py-2 rounded-full border border-primary bg-white text-primary-dark font-semibold transition-colors hover:bg-primary hover:text-white"
            >
              {t.header.switchLabel}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="container-custom py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? 'text-blue-950'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;