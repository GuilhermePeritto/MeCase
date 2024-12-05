'use client'

import Link from 'next/link'
import { useLanguage } from '../providers/LanguageProvider'
import { UserNav } from "./userNav"

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="shadow-sm flex h-12 w-full mb-8 border-b">
      <nav className="container mx-auto w-full flex justify-between items-center">
        <Link href="/" className="text-2xl pl-5 font-bold text-gray-800 dark:text-white cursor-pointer">
          {t('systemName')}
        </Link>
        <UserNav />
      </nav>
    </header>
  )
}

