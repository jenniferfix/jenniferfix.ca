import { z } from 'zod'
import { Resend } from 'resend'
import { createServerFn } from '@tanstack/react-start'
import { EmailTemplate } from '@/components/email-template'
import { formSchema } from '@/schemas'

const isDev = process.env.NODE_ENV === 'development' || import.meta.env.DEV

// export type FormState = {
//   message: string
//   fields?: Record<string, string>
//   issues?: Array<string>
// }

export const onSubmitHandler = createServerFn({ method: 'POST' })
  .validator((data: unknown) => {
    return formSchema.parse(data)
  })
  .handler(async (ctx) => {
    const parsed = formSchema.safeParse(ctx.data)

    const resend = new Resend(process.env.RESEND_API_KEY)

    const validateHuman = async (token: string): Promise<boolean> => {
      const secret = import.meta.env.TURNSTILE_SECRET_KEY!
      const sendData = new FormData()
      sendData.append('secret', secret)
      sendData.append('response', token)
      const response = await fetch(
        `https://challenges.cloudflare.com/turnstile/v0/siteverify`,
        {
          body: sendData,
          method: 'POST',
        },
      )
      const data = await response.json()

      return data.success
    }

    // console.log(ctx.data)

    if (!parsed.success) {
      return {
        message: 'Invalid form data',
      }
    }

    // lets verify the cloudflare token
    if (!isDev) {
      const token = ctx.data['cf-turnstile-response']
      if (!token) return { message: 'Invalid token' }

      const isHuman = await validateHuman(token.toString())
      if (!isHuman) {
        return { message: 'Error, maybe not human' }
      }
    }

    try {
      const { data, error } = await resend.emails.send({
        from: `${parsed.data.name} <no-reply@jenniferfix.ca>`,
        to: ['jenniferashleyfix@gmail.com'],
        subject: `WebForm: ${parsed.data.subject}`,
        react: EmailTemplate({
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
        }),
      })

      if (error) {
        return {
          message:
            'Email send error, please try again. Error: ' + error.message,
          fields: parsed.data,
        }
      }
    } catch (error) {
      return { message: 'Error 500', fields: parsed.data }
    }

    return { message: 'Sent' }
  })
