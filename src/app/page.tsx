import React from 'react'
import Homepage from '@/components/Homepage'
import Resume from '@/components/Resume'
import Portfolio from '@/components/Portfolio'
import Bio from '@/components/Bio'
import More from '@/components/More'

export default function Home() {
  return (
    <main id="main" className="snap-y snap-mandatory overflow-y-auto h-screen">
      <Homepage />
      <Bio />
      <Portfolio />
      <Resume />
      <More />
    </main>
  )
}
