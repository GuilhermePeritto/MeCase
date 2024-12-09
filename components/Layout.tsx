'use client'

import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div>
      <main className="flex-grow container w-screen h-screen">
        {children}
        <Footer />
      </main>
    </div>
  )
}

