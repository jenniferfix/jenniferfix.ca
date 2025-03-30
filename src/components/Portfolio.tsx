import React from 'react'
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from '@/components/ui/card'

type Project = {
  name: string
  description: string
  github?: string
  demo?: string
  screenshot?: string
}
const projects: Project[] = [
  {
    name: 'Emoji Invaders',
    description: '',
    github: '',
    demo: '',
    screenshot: '',
  },
  {
    name: 'Calgary Non-Binary and Transgender Society',
    description: '',
    github: '',
    demo: '',
    screenshot: '',
  },
  {
    name: 'Conveyor Jam/Fault Display',
    description: '',
    github: '',
    demo: '',
    screenshot: '',
  },
  {
    name: 'The Feud',
    description: '',
    github: '',
    demo: '',
    screenshot: '',
  },
]
const Portfolio = () => {
  return (
    <section className="p-4 min-h-full snap-start">
      <h2 className="text-2xl font-bold">Projects I&apos;ve done</h2>
      <div style={{ display: 'grid' }}>
        {projects.map((p) => (
          <Card typeof="article" key={p.name}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
