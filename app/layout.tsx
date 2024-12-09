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
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
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