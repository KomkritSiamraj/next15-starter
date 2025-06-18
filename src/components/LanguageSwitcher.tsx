'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/providers/LanguageProvider";

export default function LanguageSwitcher() {
  const t = useTranslations('common');
  const router = useRouter();
  const { locale, setLocale } = useContext(LanguageContext);

  useEffect(() => {
    // ดึงค่าภาษาจาก localStorage เมื่อ component โหลด
    const savedLocale = localStorage.getItem('language') || 'th';
    setLocale(savedLocale);
  }, [setLocale]);

  const switchLanguage = (newLocale: string) => {
    // บันทึกค่าภาษาลง localStorage
    localStorage.setItem('language', newLocale);
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="capitalize">{locale === 'th' ? 'ไทย' : 'English'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => switchLanguage('th')}
          className={locale === 'th' ? 'bg-accent' : ''}
        >
          ไทย
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => switchLanguage('en')}
          className={locale === 'en' ? 'bg-accent' : ''}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 