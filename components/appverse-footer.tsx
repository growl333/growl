"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle, MapPin } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Experience 3D animation like never before. We craft cinematic visuals for brands and products.",
  copyright: "© 2025 — Growl Agency Egypt",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("growl-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="https://wa.me/201024252649" target="_blank" rel="noopener noreferrer">
              Contact us on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Location */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">VISIT US</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                The GrEEK Campus Downtown – الحرم اليوناني
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Come meet our creative team and explore our studio space.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-lime-300">
                <MapPin className="h-4 w-4" />
                <a
                  href="https://www.facebook.com/share/1D16gQk1Wi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  View on Facebook Maps
                </a>
              </div>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/icons/growl-white.svg" alt="Growl logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">Growl Agency</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            <div>
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Contact</h5>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-neutral-400" />
                  <a
                    href="https://wa.me/201024252649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-neutral-400" />
                  <a
                    href="https://www.instagram.com/growlagency99?igsh=bXVnNHp1dnA3OGRx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
