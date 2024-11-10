'use client'
import dynamic from 'next/dynamic'

const PostHogPageViewWrapper = dynamic(
  () => import('@/components/posthog/PostHogPageView'),
  {
    ssr: false,
  },
)
export default PostHogPageViewWrapper
