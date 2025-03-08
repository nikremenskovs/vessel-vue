/** Templated email type */
export type EmailTemplate = (...args: any[]) => {
  subject: string
  body: string
}
