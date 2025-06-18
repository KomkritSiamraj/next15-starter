'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect, useState } from 'react';
import React from 'react';

type Props = {
  children: ReactNode;
};

// สร้าง context เพื่อแชร์ค่า locale
export const LanguageContext = React.createContext<{
  locale: string;
  setLocale: (locale: string) => void;
}>({
  locale: 'th',
  setLocale: () => {},
});

export default function LanguageProvider({ children }: Props) {
  const [locale, setLocale] = useState('th');

  useEffect(() => {
    // ดึงค่าภาษาจาก localStorage เมื่อ component โหลด
    const savedLocale = localStorage.getItem('language') || 'th';
    setLocale(savedLocale);
  }, []);

  const messages = {
    th: require('../messages/th.json'),
    en: require('../messages/en.json'),
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages[locale as keyof typeof messages]}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
} 