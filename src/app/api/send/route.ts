// import { Resend } from 'resend'
// import { EmailTemplate } from '@/components/email-template'
//
// if (!import.meta.env.RESEND_API_KEY) console.error('No Resend Key!')
//
// const resend = new Resend(process.env.RESEND_API_KEY)
//
// export async function POST(req: Request) {
//   const reqData = await req.json()
//   try {
//     const { data, error } = await resend.emails.send({
//       from: `${reqData.name} <${reqData.email}>`,
//       to: ['jenniferashleyfix@gmail.com'],
//       subject: `WebForm: ${reqData.subject}`,
//       react: EmailTemplate({
//         name: reqData.name,
//         email: reqData.email,
//         subject: reqData.subject,
//         message: reqData.message,
//       }),
//     })
//
//     if (error) {
//       return Response.json({ error }, { status: 500 })
//     }
//     return Response.json(data)
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }
