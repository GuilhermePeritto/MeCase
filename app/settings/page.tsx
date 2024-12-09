'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useLanguage } from '@/providers/LanguageProvider'
import { useSettings } from '@/providers/SettingsProvider'
import { ArrowLeft } from 'lucide-react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage();

  const { setTheme, theme } = useTheme();

  const { qrCodeHash, setQrCodeHash } = useSettings();

  return (
    <Layout>
      <div className="container mx-auto py-8 w-full h-screen">
        <div className='flex justify-between mb-8 w-screen px-8'>
          <div className='flex items-center gap-2'>
            <Link href='/couple'>
              <ArrowLeft className='cursor-pointer' />
            </Link>
            <h1 className="text-4xl font-bold">{t('settings')}</h1>
          </div>
        </div>
        <div className="space-y-8 w-screen px-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('language')}</CardTitle>
              <CardDescription>{t('chooseLanguage')}</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={language}
                onValueChange={(value) => setLanguage(value as 'en' | 'pt')}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="en" id="en" />
                  <Label htmlFor="en">English</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pt" id="pt" />
                  <Label htmlFor="pt">Português</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('toggleTheme')}</CardTitle>
              <CardDescription>{t('setTheme')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <RadioGroup value={theme} onValueChange={(value) => setTheme(value as 'dark' | 'light')} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="dark" />
                    <Label htmlFor="dark">{t("dark")}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light">{t("light")}</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('qrCodeHash')}</CardTitle>
              <CardDescription>{t('setQrCodeHash')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Input
                  value={qrCodeHash}
                  onChange={(e) => setQrCodeHash(e.target.value)}
                  placeholder={t('enterQrCodeHash')}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

