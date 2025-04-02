import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/components/theme-provider'
import FloatingTheme from '@/components/FloatingTheme'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
// import PostHogProvider from '@/components/posthog/PostHogProvider'
// import PostHogPageViewWrapper from '@/components/posthog/PostHogPageViewWrapper'

import TanstackQueryLayout from '../integrations/tanstack-query/layout'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: () => (
    <RootDocument>
      {/* <Header /> */}

      <Outlet />
      <TanStackRouterDevtools />

      <TanstackQueryLayout />
    </RootDocument>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          defer
          async
        />
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
