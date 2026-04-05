'use client';

import { LanguageProvider } from '@/context/LanguageContext';

const Providers = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default Providers;
