'use client';

import { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the menu when the route changes or when clicking outside of it.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { language, setLanguage, t } = useLanguage();

  // Shown inline on desktop.
  const primaryNavigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.logistics, href: '/logistics' },
    { name: t.nav.transport, href: '/transport' },
    { name: t.nav.tourism, href: '/tourism' },
    { name: t.nav.trading, href: '/trading' },
    { name: t.nav.crypto, href: '/crypto' },
    { name: t.nav.portfolio, href: '/portfolio' },
    { name: t.nav.careers, href: '/careers' },
  ];

  // Shown inside the menu button on every screen size.
  const moreNavigation = [
    { name: t.nav.digitalServices, href: '/digital-services' },
    { name: t.nav.irisMonde, href: '/iris-monde' },
    { name: t.nav.selfTraining, href: '/self-training' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isMoreActive = moreNavigation.some((item) => item.href === pathname);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm bg-white/95'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" ref={menuRef}>
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="mt-1 flex-shrink-0">
            <Image src={logo} alt="Go Baraka Sarl Logo" width={100} height={10} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {primaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              title={t.header.switchTitle}
              className="px-3 py-2 rounded-full border border-primary bg-white text-primary-dark font-semibold transition-colors hover:bg-primary hover:text-white"
            >
              {t.header.switchLabel}
            </button>

            {/* Menu Button - holds the remaining links on every screen size */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={t.header.menuLabel}
              title={t.header.menuLabel}
              className={`p-2 rounded-lg transition-colors ${
                isOpen || isMoreActive
                  ? 'bg-primary text-white'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Dropdown: extra links on desktop, the full menu on smaller screens */}
        {isOpen && (
          <div className="absolute top-full right-0 left-0 lg:left-auto lg:right-8 lg:w-64 bg-white shadow-xl lg:rounded-2xl lg:border lg:border-gray-100 overflow-hidden">
            <div className="container-custom lg:px-0 py-2">
              {/* Primary links are only repeated here below the desktop breakpoint */}
              <div className="lg:hidden">
                {primaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? 'text-blue-950' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="my-2 border-t border-gray-100" />
              </div>

              {moreNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 lg:px-5 text-sm font-medium transition-colors hover:text-primary lg:hover:bg-gray-50 ${
                    pathname === item.href ? 'text-blue-950 lg:bg-gray-50' : 'text-gray-700'
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
