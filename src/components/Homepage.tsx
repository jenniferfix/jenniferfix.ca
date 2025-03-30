'use client'
import React from 'react'
import Socials from './Socials'

const Typer = ({ text, delay }: { text: string; delay: number }) => {
  const [count, setCount] = React.useState(0)
  const [curText, setCurText] = React.useState('')
  const [flash, setFlash] = React.useState(true)

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (count >= text.length)
      interval = setInterval(() => setFlash((prev) => !prev), 500)

    return () => clearInterval(interval)
  }, [count, text])

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (count < text.length) {
      timeout = setTimeout(() => {
        setCurText((prevText) => prevText + text[count])
        setCount((prevCount) => prevCount + 1)
      }, delay)
    }

    return () => clearTimeout(timeout)
  }, [count, text, delay])
  const outChar = flash ? '_' : '\xA0'
  return <span>{curText + outChar}</span>
}

const Homepage = () => {
  return (
    <section
      id="hero"
      className="flex justify-center items-center min-h-screen snap-start"
    >
      <div className="">
        <div className="text-2xl fira-code-normal">
          <Typer text="Hello, World" delay={200} />
        </div>
        <div className="text-5xl my-2">
          <span className="text-teal">I&#39;m </span>
          <span className="rainbowtext">Jennifer Fix</span>
        </div>
        <Socials />
      </div>
    </section>
  )
}

export default Homepage
