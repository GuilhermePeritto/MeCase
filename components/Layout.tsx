'use client'

import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div>
      <main className="flex-grow container mx-auto md:px-8 h-screen">
        {children}
        <Footer />
      </main>
    </div>
  )
}

