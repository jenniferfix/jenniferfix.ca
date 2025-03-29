import React from 'react'
import Homepage from '@/components/Homepage'
import Resume from '@/components/Resume'
import Portfolio from '@/components/Portfolio'
import Bio from '@/components/Bio'

export default function Home() {
  return (
    <React.Fragment>
      <Homepage />
      <Bio />
      <Portfolio />
      <Resume />
    </React.Fragment>
  )
}
