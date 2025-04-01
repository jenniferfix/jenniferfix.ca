import React from 'react'

const Bio = () => {
  return (
    <section className="min-h-screen snap-start px-4 py-2">
      <h2 className="text-3xl border-b border-b-pink pb-1">Bio</h2>
      <h3 className="inline pr-2 text-2xl">Jennifer Fix</h3>
      <span>She/Her</span>
      <article className="p-2">
        <p>
          Life long learner. Generalist. Technology lover. Human rights
          advocate.
        </p>
        <h4 className="text-xl">Building</h4>
        <p className="p-1">
          I love to create. Whether it's a physical or digital creation, I love
          it all.
        </p>
        <h4 className="text-xl">Fixing</h4>
      </article>
    </section>
  )
}

export default Bio
