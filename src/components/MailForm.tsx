'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import Script from 'next/script'
import Turnstile from 'react-turnstile'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { formSchema } from '@/schemas'
import { onSubmitAction } from '@/actions/contactFormSubmit'

const MailForm = ({ children }: { children: React.ReactNode }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [state, formAction] = useFormState(onSubmitAction, { message: '' })
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      ...(state?.fields ?? {}),
    },
  })
  const formRef = React.useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const reset = React.useCallback(() => {
    setDialogOpen(false)
    form.reset()
    toast({
      description: 'Message sent!',
    })
  }, [form, toast])

  React.useEffect(() => {
    if (state?.message === 'Sent') {
      reset()
    }
  }, [state, reset])

  return (
    <React.Fragment>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Email Jennifer</DialogTitle>
            <DialogDescription>Send me an email</DialogDescription>
          </DialogHeader>

          <div>
            <Form {...form}>
              {state?.message !== '' &&
                state?.message !== 'Sent' &&
                !state.issues && <div className="">{state.message}</div>}
              {state?.issues && (
                <div className="">
                  <ul>
                    {state.issues.map((issue) => (
                      <li key={issue} className="">
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <form
                ref={formRef}
                action={formAction}
                // onSubmit={form.handleSubmit(() => formRef.current?.submit())}
                className=""
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.here" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can I help you?"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex justify-center items-center">
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  />
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" variant="default">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default MailForm
