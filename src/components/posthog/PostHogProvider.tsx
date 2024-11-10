'use client'
import React from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

function PHProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: 'always',
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export default PHProvider
