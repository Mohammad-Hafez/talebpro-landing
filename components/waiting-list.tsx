"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface WaitingListProps {
  dict: any
  lang: "en" | "ar"
}

export default function WaitingList({ dict, lang }: WaitingListProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const isRTL = lang === "ar"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      age: formData.get("age"),
      school: formData.get("school"),
      language: lang, // Include current language
    }

    try {
      // Replace with your actual API endpoint
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: lang === "ar" ? "تم الإرسال بنجاح!" : "Success!",
          description:
            result.message || (lang === "ar" ? "تم إرسال طلبك بنجاح" : "Your request has been submitted successfully"),
        })
        e.currentTarget.reset()
      } else {
        toast({
          title: lang === "ar" ? "خطأ" : "Error",
          description: result.error || (lang === "ar" ? "حدث خطأ في الإرسال" : "Failed to submit your request"),
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: lang === "ar" ? "خطأ" : "Error",
        description: lang === "ar" ? "حدث خطأ. يرجى المحاولة مرة أخرى." : "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.waitingList.title}</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">{dict.waitingList.description}</p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-16">
          <Image
            src="/graduation-celebration.png"
            alt="Students celebrating"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{dict.waitingList.formTitle}</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">{dict.waitingList.form.firstName}</Label>
                <Input id="firstName" name="firstName" type="text" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">{dict.waitingList.form.lastName}</Label>
                <Input id="lastName" name="lastName" type="text" required className="mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="subject">{dict.waitingList.form.subject}</Label>
                <Input id="subject" name="subject" type="text" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="age">{dict.waitingList.form.age}</Label>
                <Input id="age" name="age" type="number" required className="mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="school">{dict.waitingList.form.school}</Label>
                <Input id="school" name="school" type="text" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">{dict.waitingList.form.email}</Label>
                <Input id="email" name="email" type="email" required className="mt-1" />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 text-lg"
            >
              {isSubmitting ? "Submitting..." : dict.waitingList.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
