'use client'
import React from 'react'
import { useServerFn } from '@tanstack/react-start'
import { Turnstile } from '@marsidev/react-turnstile'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
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
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { formSchema } from '@/schemas'
import { onSubmitHandler } from '@/actions/contactFormSubmit'

const isDev = process.env.NODE_ENV === 'development' || import.meta.env.DEV

const MailForm = ({ children }: { children: React.ReactNode }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false)

  // const [state, formAction] = useActionState(onSubmitHandler, { message: '' })

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: ({ value }) => {
      onSubmitHandler({ data: value })
    },
  })
  const formRef = React.useRef<HTMLFormElement>(null)

  const reset = React.useCallback(() => {
    setDialogOpen(false)
    form.reset()
    toast('Message sent!')
  }, [form, toast])

  // React.useEffect(() => {
  //   if (state?.message === 'Sent') {
  //     reset()
  //   }
  // }, [state, reset])
  //

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
            {/* <Form {...form}> */}
            {/*   {state?.message !== '' && */}
            {/*     state?.message !== 'Sent' && */}
            {/*     !state.issues && <div className="">{state.message}</div>} */}
            {/*   {state?.issues && ( */}
            {/*     <div className=""> */}
            {/*       <ul> */}
            {/*         {state.issues.map((issue) => ( */}
            {/*           <li key={issue} className=""> */}
            {/*             {issue} */}
            {/*           </li> */}
            {/*         ))} */}
            {/*       </ul> */}
            {/*     </div> */}
            {/*   )} */}
            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
              className=""
            >
              <form.Field
                name="name"
                children={(field) => (
                  <div>
                    <Label htmlFor={field.name}>Name</Label>
                    <Input
                      placeholder="Name"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors.length ? (
                      <em>{field.state.meta.errors.join(',')}</em>
                    ) : null}
                  </div>
                )}
              />
              <form.Field
                name="email"
                children={(field) => (
                  <div>
                    <Label htmlFor={field.name}>Email</Label>
                    <Input
                      placeholder="your@email.here"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors.length ? (
                      <em>{field.state.meta.errors.join(',')}</em>
                    ) : null}
                  </div>
                )}
              />
              <form.Field
                name="subject"
                children={(field) => (
                  <div>
                    <Label htmlFor={field.name}>Subject</Label>
                    <Input
                      placeholder="Subject"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors.length ? (
                      <em>{field.state.meta.errors.join(',')}</em>
                    ) : null}
                  </div>
                )}
              />
              <form.Field
                name="message"
                children={(field) => (
                  <div>
                    <Label htmlFor={field.name}>Message</Label>
                    <Textarea
                      placeholder="How can I help you?"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors.length ? (
                      <em>{field.state.meta.errors.join(',')}</em>
                    ) : null}
                  </div>
                )}
              />
              <div className="flex justify-center items-center">
                {!isDev && (
                  <Turnstile
                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  />
                )}
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
            {/* </Form> */}
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default MailForm
