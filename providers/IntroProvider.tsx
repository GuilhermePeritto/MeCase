'use client'

import React, { createContext, ReactNode, useContext } from 'react';
import { toast } from 'sonner';
import { useLanguage } from './LanguageProvider';

interface IntroContextData {
    showIntro: boolean;
    completeIntro: () => void;
    findIntroCompleted: () => void;
}

const IntroContext = createContext<IntroContextData | undefined>(undefined);

interface IntroProviderProps {
    children: ReactNode;
}

export const IntroProvider: React.FC<IntroProviderProps> = ({ children }) => {

    const { t } = useLanguage();

    const findIntroCompleted = () => {
        return typeof window !== "undefined" ? window.localStorage.getItem('introCompleted') === 'true' ? false : true : false;
    }

    const showIntro = findIntroCompleted();


    const completeIntro = () => {
        toast.success(t('completeIntro'));
        typeof window !== "undefined" ? window.localStorage.setItem('introCompleted', 'true') : null;
    };

    return (
        <IntroContext.Provider value={{ showIntro, completeIntro, findIntroCompleted }}>
            {children}
        </IntroContext.Provider>
    );
};

export const useIntro = (): IntroContextData => {
    const context = useContext(IntroContext);
    if (!context) {
        throw new Error('useAuth must be used within an IntroProvider');
    }
    return context;
};