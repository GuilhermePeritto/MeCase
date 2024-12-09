'use client'

import CoupleInterface from "@/components/CoupleInterface"
import { useAuth } from "@/providers/AuthenticationProvider"
import { useIntro } from "@/providers/IntroProvider"
import { useEffect } from "react"
import Layout from '../components/Layout'
import AuthenticationPage from './authentication/page'

export default function Home() {

  const { isAuthenticated } = useAuth();

  const { findIntroCompleted } = useIntro();

  useEffect(() => {
    findIntroCompleted()
  }, [])

  return ((isAuthenticated) ? (
    <Layout>
      <CoupleInterface />
    </Layout>
  ) : (
    <AuthenticationPage />
  ))
}