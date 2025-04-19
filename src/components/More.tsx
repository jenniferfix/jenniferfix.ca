'use client'
import React from 'react'
import { FaAnglesDown } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

const More = () => {
  const [scrollPos, setScrollPos] = React.useState(0)
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    if (scrollPos > 0) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [scrollPos])

  React.useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.getElementById('main')
      if (mainElement) {
        setScrollPos(mainElement.scrollTop)
      }
    }
    handleScroll()

    const mainElement = document.getElementById('main')
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (mainElement) mainElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      data-state={show ? 'visible' : 'hidden'}
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out',
        'data-[state=visible]:fade-in-25 data-[state=hidden]:fade-out-0',
        'data-[state=visible]:slide-in-from-bottom data-[state=hidden]:slide-out-to-bottom-0',
        'text-sm absolute bottom-2 inset-x-0 w-fit mx-auto bg-popover text-popover-foreground border py-1 px-2 rounded flex items-center gap-1',
        show ? 'opacity-25' : 'opacity-0 pointer-events-none',
        show ? 'translate-y-0' : 'translate-y-4',
      )}
    >
      More <FaAnglesDown className="inline-block" />
    </div>
  )
}

export default More
