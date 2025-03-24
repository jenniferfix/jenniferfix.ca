import React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: Readonly<EmailTemplateProps>): React.ReactElement => {
  return (
    <div>
      <h2>{subject}</h2>
      <div>From: {name}</div>
      <div>Email: {email}</div>
      <div>{message}</div>
    </div>
  )
}
