import { ScrollArea } from '@/components/ui/scroll-area'
import { AuthProvider } from '@/providers/AuthenticationProvider'
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
    <html lang="en">
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
            <LanguageProvider>
              <SettingsProvider>
                <ScrollArea className='h-screen'>
                  {children}
                </ScrollArea>
              </SettingsProvider>
            </LanguageProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}