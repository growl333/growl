"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"

export function GrowlFooter() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  // Contact data
  const PHONE_E164 = "+201024252649"
  const PHONE_HUMAN = "+20 10 24252649"
  const EMAIL = "info@growl.cloud"
  const ADDRESS_LABEL = isRTL ? "The GrEEK Campus Downtown (الحرم اليوناني)" : "The GrEEK Campus Downtown (El GrEEK Campus)"
  const MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=The+GrEEK+Campus+Downtown+Cairo"

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/growlagency99?igsh=bXVnNHp1dnA3OGRx", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1D16gQk1Wi/", label: "Facebook" },
    // Replace the placeholder below with your actual LinkedIn URL
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { label: t.footerServices ?? (isRTL ? "الخدمات" : "Services"), href: "#services" },
    { label: t.footerPricing ?? (isRTL ? "الأسعار" : "Pricing"), href: "#pricing" },
    { label: t.footerTeam ?? (isRTL ? "الفريق" : "Team"), href: "#team" },
    { label: t.footerBlog ?? (isRTL ? "المدونة" : "Blog"), href: "#blog" },
    { label: t.footerContact ?? (isRTL ? "تواصل" : "Contact"), href: "#contact" },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-14 sm:py-20">
        <div className={`grid gap-10 md:gap-12 md:grid-cols-12 ${isRTL ? "text-right" : "text-left"}`}>
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Image src="/icons/g-2.png" alt="Growl logo" width={28} height={28} className="h-7 w-7" />
              <span className="text-xl font-extrabold tracking-tight text-white">Growl</span>
            </div>
            <p className="text-sm leading-6 text-gray-400">
              {t.footerAboutDesc ??
                (isRTL
                  ? "وكالة متكاملة للهوية البصرية والتسويق والأتمتة بالذكاء الاصطناعي. نبني التجارب الرقمية التي تنمّي عملك."
                  : "A 360° agency for brand identity, marketing, and AI automation. We build digital experiences that grow your business.")}
            </p>
            <div className={`flex flex-wrap gap-3 pt-2 ${isRTL ? "justify-end" : "justify-start"}`}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gray-300 hover:bg-purple-400/20 hover:text-purple-300 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/90">
              {t.footerQuickLinks ?? (isRTL ? "روابط سريعة" : "Quick links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/90">
              {isRTL ? "قانوني" : "Legal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  {t.footerPrivacy ?? (isRTL ? "سياسة الخصوصية" : "Privacy Policy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-purple-300 transition-colors">
                  {t.footerTerms ?? (isRTL ? "الشروط والأحكام" : "Terms of Service")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/90">
              {isRTL ? "معلومات التواصل" : "Contact"}
            </h3>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <a
                href={`tel:${PHONE_E164}`}
                className="group flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <Phone className="h-4 w-4 opacity-70" />
                <span dir="ltr">{PHONE_HUMAN}</span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <Mail className="h-4 w-4 opacity-70" />
                <span>{EMAIL}</span>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 hover:text-purple-300 transition-colors"
              >
                <MapPin className="h-4 w-4 opacity-70" />
                <span>{ADDRESS_LABEL}</span>
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom bar */}
        <div className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`}>
          <p className="text-sm text-gray-500">
            {t.footerCopyright ??
              (isRTL
                ? "© جميع الحقوق محفوظة."
                : "© All rights reserved.")}{" "}
            {new Date().getFullYear()} • <span className="text-purple-300">Growl Agency</span>
          </p>

          <p className="text-sm text-gray-500">
            {isRTL ? "تم التطوير بواسطة" : "Built by"}{" "}
            <span className="text-purple-300">Growl </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
