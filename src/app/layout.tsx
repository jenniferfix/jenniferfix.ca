import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import FloatingTheme from '@/components/FloatingTheme'
import { Toaster } from '@/components/ui/toaster'
import PostHogProvider from '@/components/posthog/PostHogProvider'
import PostHogPageViewWrapper from '@/components/posthog/PostHogPageViewWrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jennifer Fix',
  description: 'Internet home of Jennifer Fix',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          defer
          async
        />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingTheme />
            {/* <Header /> */}
            <main>
              <PostHogPageViewWrapper />
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
