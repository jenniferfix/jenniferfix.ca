'use client'
import React from 'react'
import { FaAnglesDown } from 'react-icons/fa6'
import { cn } from '@/lib/utils'

const More = () => {
  const [isTop, setIsTop] = React.useState<boolean | null>(null)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const mainElement = document.getElementById('main') as HTMLElement

    if (!ref.current) {
      return
    }

    const handleScroll = () => {
      const scrollTop = ref.current?.scrollTop
      setIsTop(scrollTop === 0)
    }

    handleScroll()

    mainElement.addEventListener('scroll', handleScroll, { passive: true })

    return () => mainElement.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (!ref.current) return
    if (isTop) {
      clearTimeout(parseInt(ref.current.dataset.timeout || ''))
      ref.current.dataset.state = 'show'
      ref.current.style.display = ''
    }
    if (!isTop) {
      ref.current.dataset.state = 'hidden'
      const timeoutId = setTimeout(() => {
        if (ref.current) {
          ref.current.style.display = 'none'
        }
      }, 300)
      ref.current.dataset.timeout = timeoutId.toString()
    }
  }, [isTop, ref])

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-25 text-sm absolute bottom-2 inset-x-0 w-fit mx-auto bg-popover text-popover-foreground border py-1 px-2 rounded flex items-center gap-1 data-[state=show]:animate-in data-[state=show]:fade-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out duration-300',
      )}
    >
      More <FaAnglesDown className="inline-block" />
    </div>
  )
}

export default More
