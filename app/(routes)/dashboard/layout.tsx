import * as React from 'react'
import AppHeader from './_components/AppHeader';

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-[0.2] text-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        {/* Hero Spotlight Halo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full opacity-40" />

        {/* Dynamic Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-beam opacity-20" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-beam [animation-delay:2s] opacity-20" />
          <div className="absolute top-0 left-3/4 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-beam [animation-delay:5s] opacity-20" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-1 px-10 md:px-20 lg:px-40 py-10">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout