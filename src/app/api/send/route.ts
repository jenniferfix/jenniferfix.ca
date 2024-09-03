import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const reqData = await req.json()
  console.log(reqData)
  try {
    const { data, error } = await resend.emails.send({
      from: 'No-Reply <no-reply@jenniferfix.ca>',
      to: ['jenniferashleyfix@gmail.com'],
      subject: 'TODO Subject',
      react: EmailTemplate({
        name: reqData.name,
        email: reqData.email,
        subject: reqData.subject,
        message: reqData.message,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }
    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
