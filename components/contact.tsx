"use client"

import type React from "react"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.link/65mf3i?text=${encodedMessage}`, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{t.contactTitle}</h2>
        <p className="mt-4 text-lg text-gray-400">{t.contactSubtitle}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <Mail className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{t.contactEmail}</h3>
              <p className="mt-1 text-gray-400">{t.contactEmailValue}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <Phone className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{t.contactPhone}</h3>
              <p className="mt-1 text-gray-400">{t.contactPhoneValue}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
              <MapPin className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{t.contactAddress}</h3>
              <p className="mt-1 text-gray-400">{t.contactAddressValue}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder={t.contactFormName}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400"
          />
          <Input
            type="email"
            placeholder={t.contactFormEmail}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400"
          />
          <Textarea
            placeholder={t.contactFormMessage}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400"
          />
          <Button
            type="submit"
            className="w-full bg-purple-500 text-white hover:bg-purple-600 font-medium rounded-lg py-2.5"
          >
            {t.contactFormSend}
          </Button>
        </form>
      </div>
    </section>
  )
}
