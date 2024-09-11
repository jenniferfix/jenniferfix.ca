import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import FloatingTheme from '@/components/FloatingTheme'
import { Toaster } from '@/components/ui/toaster'
import dynamic from 'next/dynamic'
import PostHogProvider from '@/components/posthog/PostHogProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jennifer Fix',
  description: 'Internet home of Jennifer Fix',
}
const PostHogPageView = dynamic(
  () => import('@/components/posthog/PostHogPageView'),
  {
    ssr: false,
  },
)

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
              <PostHogPageView />
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
