import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import Portfolio from '@/components/Portfolio'
import Bio from '@/components/Bio'
import More from '@/components/More'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main id="main" className="snap-y snap-mandatory overflow-y-auto h-screen">
      <Hero />
      <Portfolio />
      <Bio />
      <Resume />
      <More />
    </main>
  )
}
