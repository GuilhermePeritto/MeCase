'use client'

import React, { createContext, useContext, useState } from 'react'

type SettingsContextType = {
  qrCodeHash: string
  setQrCodeHash: (hash: string) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [qrCodeHash, setQrCodeHashState] = useState<string>('')

  const setQrCodeHash = (hash: string) => {
    setQrCodeHashState(hash)
    typeof window !== "undefined" ? window.localStorage.setItem('qrCodeHash', hash) : null
  }

  return (
    <SettingsContext.Provider value={{ qrCodeHash, setQrCodeHash }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}

