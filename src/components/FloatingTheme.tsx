import React from 'react'
import { ThemeToggle } from './ThemeToggle'

const FloatingTheme = () => {
  return (
    <div className="absolute top-1 lg:top-8 right-1 lg:right-8">
      <ThemeToggle />
    </div>
  )
}

export default FloatingTheme
