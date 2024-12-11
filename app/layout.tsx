import { Toaster } from '@/components/ui/sonner'
import { AuthProvider } from '@/providers/AuthenticationProvider'
import { IntroProvider } from '@/providers/IntroProvider'
import { LanguageProvider } from '@/providers/LanguageProvider'
import { SettingsProvider } from '@/providers/SettingsProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Descrição da sua aplicação" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/svg+xml" href="/icon-192x192.png" />
        <title>MeCase</title>
      </head>
      <body>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Toaster
              expand
              visibleToasts={2}
              position='top-center'
              toastOptions={{
                classNames: {
                  success: 'dark:bg-white dark:text-black bg-background text-black',
                  error: 'bg-red-500',
                }
              }}
            />
            <LanguageProvider>
              <IntroProvider>
                <SettingsProvider>
                  {children}
                </SettingsProvider>
              </IntroProvider>
            </LanguageProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}