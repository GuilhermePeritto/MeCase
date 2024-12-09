'use client'

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useIntro } from "@/providers/IntroProvider"
import { useLanguage } from "@/providers/LanguageProvider"
import { Language } from "@/types/Language"
import { ArrowRight, CheckCircle, Globe, Languages, Monitor, Palette } from 'lucide-react'
import { useTheme } from "next-themes"
import { useState } from 'react'
import { DialogClose, DialogContent } from "./ui/dialog"

export default function IntroCards() {
    const [step, setStep] = useState(0);

    const { completeIntro } = useIntro()

    const { t, language, setLanguage } = useLanguage();

    const { setTheme, theme } = useTheme();

    const nextStep = () => setStep(step + 1);

    const prevStep = () => setStep(step - 1);

    const languages: Language[] = ['en', 'pt', 'es'];


    const cards = [
        // Introduction Card
        <div key="intro">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    {t('welcomeToSystem')}<br />
                </CardTitle>
                <CardDescription className="text-center">
                    {t('letsSetUpSomeThings')}<br />
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <ArrowRight className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p>
                    {t('welcomeMessage')}<br />
                </p>
            </CardContent>
            <CardFooter>
                <Button onClick={nextStep} className="w-full">{t('start')}</Button>
            </CardFooter>
        </div>,

        // Language Selection Card
        <div key="language">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{t('chooseLanguage')}</CardTitle>
                <CardDescription className="text-center">
                    {t('chooseLanguage')}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Languages className="h-12 w-12 mx-auto mb-4 text-primary" />
                <RadioGroup value={language} onValueChange={setLanguage}>
                    {languages.map((lang) => (
                        <div key={lang} className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value={lang} id={lang} />
                            <Label htmlFor={lang}>{t(`${lang}`)}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>{t('previous')}</Button>
                <Button onClick={nextStep} disabled={!language}>{t('next')}</Button>
            </CardFooter>
        </div>,

        // Theme Selection Card
        <div key="theme">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{t('chooseTheme')}</CardTitle>
                <CardDescription className="text-center">
                    {t('chooseTheme')}<br />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Monitor className="h-12 w-12 mx-auto mb-4 text-primary" />
                <RadioGroup value={theme} onValueChange={setTheme}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="dark" />
                        <Label htmlFor="dark">{t("dark")}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="light" />
                        <Label htmlFor="light">{t("light")}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="system" id="system" />
                        <Label htmlFor="system">{t("system")}</Label>
                    </div>
                </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={prevStep}>{t('previous')}</Button>
                <Button onClick={nextStep} disabled={!theme}>{t('next')}</Button>
            </CardFooter>
        </div>,

        // Final Welcome Card
        <div key="welcome">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    {t('allReady')}<br />
                </CardTitle>
                <CardDescription className="text-center">
                    {t('allSet')}<br />
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                        {t('language')}:
                    </span>
                    <span>{t(`${language}`)}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-primary" />
                    <span className="font-medium">
                        {t('theme')}:
                    </span>
                    <span>{t(`${theme as 'dark' | 'light' | 'system'}`)}</span>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                        <p className="font-medium">
                            {t('configComplete')}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {t('readyToStart')}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <DialogClose className="w-full">
                    <Button onClick={completeIntro} className="w-full">
                        {t("startUsingSystem")}
                    </Button>
                </DialogClose>
            </CardFooter>
        </div>
    ]

    return (
        <DialogContent className="flex items-center justify-center w-[25rem] smm:max-w-[85%] rounded">
            {cards[step]}
        </DialogContent>
    )
}