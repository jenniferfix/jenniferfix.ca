import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: 'Please let me know who you are',
  }),
  email: z.string().trim().email({
    message: 'Invalid email. I want to get back to you',
  }),
  subject: z.string().trim().min(1, {
    message: 'Please enter a subject',
  }),
  message: z.string().trim().min(1, {
    message: 'Hi, you rang?',
  }),
  'cf-turnstile-response': z.string().trim(),
})
