'use client'

import { ReactNode } from 'react'

import clsx from 'clsx'

import { useDarkMode } from '@/hooks/useDarkMode'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useDarkMode()

  return (
    <div className="flex flex-col min-h-screen">
      <main
        className={clsx('flex flex-col justify-center w-full max-w-[768px] p-4 mx-auto', {
          dark: isDarkMode,
        })}
      >
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}
