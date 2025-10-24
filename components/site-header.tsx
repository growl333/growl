"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { LanguageToggle } from "@/components/language-toggle"

export function SiteHeader() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const [activeId, setActiveId] = useState<string>("")
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const root = document.documentElement
    root.dir = isRTL ? "rtl" : "ltr"
  }, [isRTL])

  const F = (en: string, ar: string, key?: keyof typeof t) =>
    (key ? (t[key] as string | undefined) : undefined) ?? (isRTL ? ar : en)

  const sectionLinks = [
    { href: "#services", label: F("Services", "الخدمات", "services") },
    { href: "#process", label: F("Process", "العملية", "process") },
    { href: "#team", label: F("Team", "الفريق", "team") },
    { href: "#pricing", label: F("Pricing", "الأسعار", "pricing") },
    { href: "#contact", label: F("Contact", "تواصل", "contact") },
  ]

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const targets = sectionLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]
    if (!targets.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((en) => en.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis?.target?.id) setActiveId(`#${vis.target.id}`)
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.25, 0.6, 0.95] }
    )
    targets.forEach((t) => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current
        const passed = y > 80
        setVisible(!passed || delta < -2)
        lastY.current = y
        ticking.current = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Updated Calendly URL
  const calendly = "https://calendly.com/awessam311/growl"
  const bookTxt = F("Book a meeting", "احجز اجتماع", "bookMeeting")

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4">
          <div className="container mx-auto max-w-5xl">
            <div
              className={`flex h-20 items-center justify-between px-8 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.35)] ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/icons/lg-c.png"
                  alt="Growl logo"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-transform duration-500 hover:scale-105"
                />
              </Link>

              {/* Desktop nav */}
              <nav
                className={`hidden md:flex items-center gap-8 text-sm font-medium text-white/90 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {sectionLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={handleAnchor}
                    className={`relative pb-1 transition-colors duration-300 hover:text-purple-300 ${
                      activeId === l.href ? "text-purple-300" : ""
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute left-1/2 -bottom-[2px] h-[2px] w-0 rounded-full bg-purple-400 transition-all duration-300 ease-out ${
                        activeId === l.href ? "w-6 -translate-x-1/2 opacity-100" : "opacity-0 w-0 -translate-x-1/2"
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              {/* Desktop actions */}
              <div className={`hidden md:flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <LanguageToggle />
                <Button
                  asChild
                  className="bg-purple-500 text-white font-medium rounded-lg px-6 py-2.5 hover:bg-purple-400 transition-all"
                >
                  <Link href={calendly} target="_blank" rel="noopener noreferrer">
                    {bookTxt}
                  </Link>
                </Button>
              </div>

              {/* Mobile */}
              <div className={`md:hidden flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                <LanguageToggle />
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side={isRTL ? "left" : "right"}
                    className="border-gray-800 p-0 w-64 flex flex-col bg-black/70 backdrop-blur-xl"
                  >
                    <div
                      className={`flex items-center gap-2 px-4 py-4 border-b border-gray-800 ${
                        isRTL ? "justify-end" : ""
                      }`}
                    >
                      <Image src="/icons/lg-c.png" alt="Growl logo" width={28} height={28} className="h-7 w-7" />
                    </div>

                    <nav className={`flex flex-col gap-1 mt-2 text-gray-200 ${isRTL ? "items-end" : ""}`}>
                      {sectionLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={handleAnchor}
                          className={`px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors ${
                            activeId === l.href ? "text-purple-300" : ""
                          }`}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-auto border-t border-gray-800 p-4">
                      <Button
                        asChild
                        className="w-full bg-purple-500 text-white font-medium rounded-lg px-6 py-2.5 hover:bg-purple-400 transition-all"
                      >
                        <Link href={calendly} target="_blank" rel="noopener noreferrer">
                          {bookTxt}
                        </Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx global>{`
        html:focus-within {
          scroll-behavior: smooth;
        }
        [dir="rtl"] * {
          letter-spacing: 0;
        }
      `}</style>
    </>
  )
}
