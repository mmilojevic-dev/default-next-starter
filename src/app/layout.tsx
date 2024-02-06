import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Playfair_Display as FontSerif } from 'next/font/google'
import { Roboto as FontSans } from 'next/font/google'

// import { ThemeProvider } from 'next-themes'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans'
})

export const fontSerif = FontSerif({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: 'white',
  width: 'device-width',
  initialScale: 1
}

// Exporting this way to avoid NextJs 14 type error
export { viewport }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSerif.variable,
          fontSans.variable
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        > */}
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
