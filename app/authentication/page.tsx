'use client'

import Link from "next/link";

import { UserAuthForm } from "@/components/forms/userAuthForm";
import { useLanguage } from "@/providers/LanguageProvider";
import Image from "next/image";

export default function AuthenticationPage() {

    const { t, quote } = useLanguage();

    return (
        <>
            <div className="container relative hidden max-w-none h-screen flex-col smm:px-8 items-center justify-center smm:grid lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <Image
                    src="/images/image-login.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Authentication"
                    className="h-full w-full object-cover dark:brightness-[0.6] dark:grayscale"
                />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-6 w-6"
                        >
                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                        </svg>
                        {t("systemName")}
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;{quote?.text}&rdquo;
                            </p>
                            <footer className="text-sm">{quote?.author}</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <img src="/favicon.ico" alt="Logo" className="w-24 h-24 mx-auto" />
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:max-w-[30rem]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {t("createAccount")}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {t("enterEmail")}
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-2 text-center text-sm text-muted-foreground">
                            {t("agreeTerms")}{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                {t("terms")}
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                {t("privacy")}
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}