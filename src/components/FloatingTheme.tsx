import React from 'react'
import { ThemeToggle } from './ThemeToggle'

const FloatingTheme = () => {
  return (
    <div className="absolute top-10 right-10">
      <ThemeToggle />
    </div>
  )
}

export default FloatingTheme
