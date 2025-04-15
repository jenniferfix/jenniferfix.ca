'use server'
import { formSchema } from '@/schemas'
import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

export type FormState = {
  message: string
  fields?: Record<string, string>
  issues?: string[]
}
const validateHuman = async (token: string): Promise<boolean> => {
  const secret = process.env.TURNSTILE_SECRET_KEY!
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
export async function onSubmitAction(
  _prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data)
  const parsed = formSchema.safeParse(formData)
  const resend = new Resend(process.env.RESEND_API_KEY)

  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString()
    }
    return {
      message: 'Invalid form data',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  // lets verify the cloudflare token
  const token = data.get('cf-turnstile-response')
  if (!token) return { message: 'Invalid token' }
  const isHuman = await validateHuman(token.toString())
  if (!isHuman) {
    return { message: 'Error, maybe not human' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${parsed.data.name} <no-reply@jenn.fyi>`,
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
        message: 'Email send error, please try again. Error: ' + error.message,
        fields: parsed.data,
      }
    }
  } catch (error) {
    return { message: 'Error 500', fields: parsed.data }
  }

  return { message: 'Sent' }
}
