'use client'

import CoupleInterface from "@/components/CoupleInterface"
import { useAuth } from "@/providers/AuthenticationProvider"
import { useLanguage } from '@/providers/LanguageProvider'
import Layout from '../components/Layout'
import AuthenticationPage from './authentication/page'

export default function Home() {

  const { t } = useLanguage();
  
  const { isAuthenticated } = useAuth();

  return ((isAuthenticated) ? (
    <Layout>
      <CoupleInterface />
    </Layout>
  ) : (
    <AuthenticationPage />
  ))
}