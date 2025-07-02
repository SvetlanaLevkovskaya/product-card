'use client'

import { ReactNode } from 'react'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col justify-center w-full max-w-[768px] p-4 mx-auto flex-1 relative">
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}
