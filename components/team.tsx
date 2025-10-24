"use client"

import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

function normalizeUrl(url?: string) {
  if (!url) return ""
  if (url.startsWith("http://") || url.startsWith("https://")) return url
  return `https://${url}`
}

export function Team() {
  const { language } = useLanguage()
  const t = translations[language]

  const team = [
    {
      name: t.teamMember1Name,
      role: t.teamMember1Role,
      image: "/icons/re3o.webp",
      linkedin: normalizeUrl(t.teamMember1LinkedIn),
      email: "mailto:rabie@growl.cloud",
    },
    {
      name: t.teamMember2Name,
      role: t.teamMember2Role,
      image: "/icons/wessam.webp",
      linkedin: normalizeUrl(t.teamMember2LinkedIn),
      email: "mailto:wessam@growl.cloud",
    },
    {
      name: t.teamMember3Name,
      role: t.teamMember3Role,
      image: "/icons/b4b4.webp",
      linkedin: normalizeUrl(t.teamMember3LinkedIn),
      email: "mailto:alaa@growl.cloud",
    },
    {
      name: t.teamMember4Name,
      role: t.teamMember4Role,
      image: "/icons/mena.webp",
      linkedin: normalizeUrl(t.teamMember4LinkedIn),
      email: "mailto:menna@growl.cloud",
    },
  ]

  return (
    <section id="team" className="container mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          {t.teamTitle ?? "Meet Our Team"}
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          {t.teamSubtitle ?? "The minds shaping Growl’s creative and technical excellence."}
        </p>
      </div>

      {/* Team grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <Card
            key={i}
            className="group border border-white/10 bg-transparent rounded-2xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_22px_rgba(138,63,252,0.25)] hover:-translate-y-1"
          >
            {/* Avatar */}
            <CardHeader className="p-0">
              <div className="flex items-center justify-center py-6">
                <div className="relative aspect-square w-32 sm:w-36 md:w-40">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    priority={i < 2}
                    sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 15vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-white">{m.name}</h3>
              <p className="mt-1 text-sm text-purple-300">{m.role}</p>

              <div className="mt-6 flex justify-center gap-3">
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 hover:border-purple-400/40 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={m.email}
                  aria-label={`Email ${m.name}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 hover:border-purple-400/40 hover:text-purple-300 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
