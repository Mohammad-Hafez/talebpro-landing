import type { ContactFormData, ApiResponse } from "@/types/contact"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://your-api-domain.com/api"

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers your backend requires
      // 'Authorization': `Bearer ${token}`,
      // 'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}
