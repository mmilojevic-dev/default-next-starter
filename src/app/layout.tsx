// import { Inter } from 'next/font/google'
import './globals.css'

import type { Metadata } from 'next'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next/TypeScript/Vite-Eslint-Prettier-TailwindCSS Starter',
  description:
    'A template built to easily start with server-rendered app development.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
