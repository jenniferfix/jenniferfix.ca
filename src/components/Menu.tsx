'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { FaHouseChimney, FaCode, FaUser, FaIdCard } from 'react-icons/fa6'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'

type MenuItem = {
  url: string
  title: string
  icon: React.ReactNode
}

const menuItems: MenuItem[] = [
  { icon: <FaHouseChimney />, url: '/', title: 'Home' },
  { icon: <FaUser />, url: '/bio', title: 'Bio' },
  { icon: <FaIdCard />, url: '/resume', title: 'Resume' },
  { icon: <FaCode />, url: '/portfolio', title: 'Portfolio' },
]

const Menu = () => {
  const path = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <nav className="hidden lg:block h-full">
        <TooltipProvider delayDuration={100}>
          <ul className="flex flex-col justify-center h-full gap-8 pl-12 text-right min-h-screen">
            {menuItems.map((item) => (
              <li
                key={item.url}
                className={cn(
                  'text-mauve transition ease-in-out delay-150 opacity-70',
                  'hover:text-pink hover:opacity-95 hover:scale-110 hover:-translate-y-1 hover:translate-x-1 duration-300',
                  'motion-reduce:transition-none motion-reduce:hover:transform-none',
                )}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.url}
                      className={cn(
                        'text-4xl whitespace-nowrap',
                        path === item.url ? 'opacity-20' : '',
                      )}
                    >
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    tiptype="menu"
                    side="left"
                    className="p-3 bg-popover text-popover-foreground border rounded-2xl"
                  >
                    <p className="font-bold text-3xl">{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </nav>
      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden absolute top-1 left-1"
          >
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-transparent border-none p-2">
          <SheetHeader>
            <SheetTitle hidden>Mobile Menu</SheetTitle>
          </SheetHeader>
          <nav className="h-full opacity-100">
            <ul className="flex flex-col gap-1 justify-start h-full">
              <li className="text-4xl py-4 pl-4 bg-gradient-to-r from-base/95 to-base/5">
                &nbsp;
              </li>
              {menuItems.map((item) => (
                <li
                  key={'mobile' + item.url}
                  className="py-4 pl-4 bg-gradient-to-r from-base/95 to-base/5"
                >
                  <Link
                    href={item.url}
                    className="text-4xl block"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  )
}

export default Menu
