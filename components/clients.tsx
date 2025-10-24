"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export function Clients() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const clients = [
    "Four Seasons","ENI Egypt","Cairo Festival City","Mountain View","Buffalo Burger","Contact","ZED",
    "NOLA Cupcakes","BOSCH","Holmes Burgers","Dr. Baby","Ibn Al Sham","Halawet Al Dunya","Cityscape",
    "CIC","MSA University","MIU","Future University","NGU","Coventry University","Traverse",
    "TEDx Youth","TEDx Manarat Al Farouk","Enactus Egypt",
  ]

  const looped = [...clients, ...clients]

  return (
    <section id="clients" dir={isRTL ? "rtl" : "ltr"} className="relative py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          {t.clientsTitle ?? "Entities We Collaborated With"}
        </h2>
        <p className="mt-3 text-lg text-gray-400">
          {t.clientsSubtitle ?? "Trusted by leading brands and institutions."}
        </p>
      </div>

      {/* line 1 */}
      <div className="group overflow-hidden mb-6">
        <div className={`${isRTL ? "animate-marquee-rtl" : "animate-marquee-x"} can-pause flex whitespace-nowrap`}>
          {looped.map((name, i) => (
            <div
              key={`l1-${i}`}
              className="mx-3 px-5 py-3 rounded-lg border border-white/10 bg-transparent
                         text-gray-300 text-sm font-semibold transition-all duration-200
                         hover:text-purple-300 hover:border-purple-400/50"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* line 2 (reverse) */}
      <div className="group overflow-hidden">
        <div className={`${isRTL ? "animate-marquee-rtl-rev" : "animate-marquee-x-rev"} can-pause flex whitespace-nowrap`}>
          {looped.map((name, i) => (
            <div
              key={`l2-${i}`}
              className="mx-3 px-5 py-3 rounded-lg border border-white/10 bg-transparent
                         text-gray-300 text-sm font-semibold transition-all duration-200
                         hover:text-purple-300 hover:border-purple-400/50"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
