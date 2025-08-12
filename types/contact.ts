export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  age: number
  school: string
  language: "en" | "ar"
}

export interface ApiResponse {
  success: boolean
  message: string
  error?: string
}
