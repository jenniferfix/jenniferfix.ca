import React from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import TanstackQueryLayout from '../integrations/tanstack-query/layout'
import appCss from '../styles.css?url'
import type { QueryClient } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
// import PostHogProvider from '@/components/posthog/PostHogProvider'
// import PostHogPageViewWrapper from '@/components/posthog/PostHogPageViewWrapper'
import FloatingTheme from '@/components/FloatingTheme'
import { ThemeProvider } from '@/components/theme-provider'

interface MyRouterContext {
  queryClient: QueryClient
}

declare global {
  interface Window {
    onloadTurnstileCallback: () => void
  }
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    scripts: [
      {
        src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback&render=explicit',
        defer: true,
        async: true,
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: "Jennifer's Home on the Internet",
      },
      {
        name: 'description',
        content:
          "Jennifer's Home on the Internet. Jenn is an aspiring full stack developer",
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.png',
      },
    ],
  }),
  component: () => (
    <RootDocument>
      <Outlet />
      <TanStackRouterDevtools />

      <TanstackQueryLayout />
    </RootDocument>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    window.onloadTurnstileCallback = () => {
      // console.log('Turnstile script loaded sucessfully')
    }
  }, [])
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {/* <PostHogProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={['light', 'dark']}
          // disableTransitionOnChange
        >
          <TooltipProvider>
            <FloatingTheme />
            {/* <PostHogPageViewWrapper /> */}
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        {/* </PostHogProvider> */}
        <Scripts />
      </body>
    </html>
  )
}
