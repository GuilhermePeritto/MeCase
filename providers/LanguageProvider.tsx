'use client'

import { Language } from '@/types/Language'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../utils/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations[Language]) => string
  quote: { text: string; author: string } | null
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(navigator.language.split('-')[0] as Language || 'en')
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null)

  useEffect(() => {
    const savedLanguage = typeof window !== "undefined" ? window.localStorage.getItem('language') as Language : null
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    const quotes = translations[language].quotes
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    typeof window !== "undefined" ? window.localStorage.setItem('language', lang) : null
  }

  const t = (key: keyof typeof translations[Language]) => {
    const translation = translations[language][key];
    if (key === 'quotes') {
      return 'Quotes cannot be translated to a string';
    }
    return typeof translation === 'string' ? translation : key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, quote }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}