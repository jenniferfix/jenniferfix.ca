import React from 'react'
import Socials from './Socials'

const Homepage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main>
        <div className="text-2xl fira-code-normal">Hello, World</div>
        <div className="text-5xl my-2">
          I&#39;m <span className="rainbowtext">Jennifer Fix</span>
        </div>
        <Socials />
      </main>
    </div>
  )
}

export default Homepage
