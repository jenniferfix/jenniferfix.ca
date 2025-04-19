import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Project = {
  name: string
  description: string
  github?: string
  demo?: string
  screenshot?: string
}
const projects: Array<Project> = [
  {
    name: 'Emoji Invaders',
    description:
      'One of my first projects after learning Javascript. I had initially wanted to do it in react, but decided to see if I could move the elements around in the DOM myself. I was a learning experience in finding out what attributes can be changed an animated in a performant way.',
    github: 'https://github.com/jenniferfix/emoji-invaders-vanillajs',
    demo: '',
    screenshot: '',
  },
  {
    name: 'Calgary Non-Binary and Transgender Society',
    description:
      'Built for a group I was part of. Build with Next.js Uses Sentry.io for content management.',
    github: 'https://github.com/Calgary-NBTS/cnbts-web',
    demo: '',
    screenshot: '',
  },
  {
    name: 'Conveyor Jam/Fault Display',
    description: '',
    github: 'https://github.com/jenniferfix/singulator-jams',
    screenshot: '',
  },
  {
    name: 'The Feud',
    description: '',
    github: 'https://github.com/jenniferfix/thefeud',
    demo: '',
    screenshot: '',
  },
]
const Portfolio = () => {
  return (
    <section className="p-4 min-h-full snap-start">
      <h2 className="text-2xl font-bold p-1 pb-2">Projects I&apos;ve done</h2>
      <div className="flex flex-col gap-2">
        {projects.map((p) => (
          <Card typeof="article" key={p.name}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p>{p.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              {p.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost" asChild>
                      <a href={p.github} target="_blank">
                        <FaGithub />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>See code on Github</TooltipContent>
                </Tooltip>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
