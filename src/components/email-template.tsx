import React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <div>
      <h2>{subject}</h2>
      <div>From: {name}</div>
      <div>Email: {email}</div>
      <div>{message}</div>
    </div>
  )
}
