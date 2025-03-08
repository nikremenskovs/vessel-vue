import type { MaybeRefOrGetter } from 'vue'
import type { EmailTemplate } from '@/types'

const emailTemplates: Record<string, EmailTemplate> = {
  help: ({ fullName }: { fullName?: string }) => ({
    subject: 'VesselVue Help Enquiry',
    body: `Hello,
        
        I have a question about VesselVue. Can you help me?
        
        Thank you,
        ${fullName}`
  }),

  contactManager: ({
    fullName,
    managerName,
    managerEmail
  }: {
    fullName?: string
    managerName?: string
    managerEmail?: string
  }) => ({
    subject: 'Adding computer opportunity',
    body: `Hello ${managerName},
        
        I have identified an opportunity to add a computed to one of the vessels. Please see the details below:
        
        Thank you,
        ${fullName}`
  })
}

const supportEmail = 'help@vesselvue.com'

export function useEmail(
  templateName: string,
  params: MaybeRefOrGetter<Parameters<(typeof emailTemplates)[string]>[number]>
) {
  const template = computed(() => emailTemplates[templateName]?.(unref(toValue(params))))

  const targetEmail = computed(() => {
    const { managerEmail } = params()
    return managerEmail ? managerEmail : supportEmail
  })

  const url = computed(
    () =>
      `mailto:${targetEmail.value}?subject=${template.value?.subject ?? ''}&body=${encodeURI(template.value?.body ?? '')}`
  )

  const openEmail = () => window.open(url.value)

  return {
    openEmail
  }
}
