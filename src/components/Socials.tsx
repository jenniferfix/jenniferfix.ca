import React from 'react'
import { Button } from '@/components/ui/button'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'
import MailForm from '@/components/MailForm'

const Socials = () => {
  return (
    <div className="flex gap-2 min-w-full">
      <Button size="icon" variant="ghost" aria-label="Github" asChild>
        <a href="https://github.com/JenniferFix" target="_blank">
          <FaGithub className="text-2xl text-red" />
        </a>
      </Button>
      <Button size="icon" variant="ghost" aria-label="LinkedIn" asChild>
        <a href="https://ca.linkedin.com/in/jennifer-fix/" target="_blank">
          <FaLinkedin className="text-2xl text-peach" />
        </a>
      </Button>
      <MailForm>
        <Button size="icon" variant="ghost" aria-label="Email">
          <MdAlternateEmail className="text-2xl text-yellow" />
        </Button>
      </MailForm>
    </div>
  )
}

export default Socials
