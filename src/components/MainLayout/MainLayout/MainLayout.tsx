'use client'

import { ReactNode } from 'react'

import clsx from 'clsx'

import { useDarkMode } from '@/hooks/useDarkMode'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useDarkMode()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main
        className={clsx('mx-auto w-full max-w-[768px] p-4', {
          dark: isDarkMode,
        })}
      >
        {children}
      </main>
    </div>
  )
}
