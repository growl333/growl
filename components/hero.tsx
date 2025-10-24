"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRTL = language === "ar"

  const captionEN =
    "We don’t believe in one-size-fits-all solutions. You bring the request — we bring the mix of tools that will actually work."
  const captionAR =
    "نحن لا نؤمن بالحلول الجاهزة التي تناسب الجميع. أنت تقدّم الطلب — ونحن نختار المزيج الأمثل من الأدوات التي تحقق النتائج فعلًا."

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden py-20 sm:py-28 md:py-32"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Logo + Tagline */}
        <div className="mb-10 flex flex-col items-center gap-4">
          <Image
            src="/icons/lg-c.png"
            alt="Growl Logo"
            width={5000}
            height={200}
            className="opacity-90 drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]"
          />
          {/* <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">
            {t.heroTagline ?? "Empowering Brands with Smart Innovation"}
          </p> */}
        </div>
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white text-center">
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
    {t.heroHeadline2 ?? (isRTL ? "حلولاً رقمية ذكية لعصرٍ حديث" : "Intelligent Digital Solutions for the Modern World")}
  </span>
</h1>

        {/* Caption */}
        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-gray-300 leading-relaxed">
          {isRTL ? captionAR : captionEN}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-purple-500 hover:bg-purple-400 text-white font-semibold px-8 py-5 text-sm tracking-wide transition-all"
          >
            <a href="https://wa.link/65mf3i" target="_blank" rel="noopener noreferrer">
              {t.chatWithUs ?? (isRTL ? "تواصل معنا" : "Chat with Us")}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-purple-400/40 text-purple-200 hover:bg-purple-400/10 hover:text-white px-8 py-5 text-sm font-medium transition-all"
          >
            <a href="#services">{t.exploreServices ?? (isRTL ? "استكشف خدماتنا" : "Explore Services")}</a>
          </Button>
        </div>

        {/* Service video cards */}
        <div className="mt-16 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {phoneData(t).map((p, i) => (
            <div key={i} className="w-full max-w-[230px]">
              <PhoneCard title={p.title} sub={p.sub} tone={p.tone} videoSrc={p.videoSrc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "Service",
  sub = "Description",
  tone = "Growl",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  videoSrc?: string
}) {
  return (
    <div className="group relative rounded-[28px] border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:border-purple-400/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:-translate-y-1">
      <div className="relative aspect-[9/19] overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={videoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          autoplay
          loop
          muted
          playsInline
          aria-label={`${title} - ${sub}`}
        />
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-xs text-gray-300">{sub}</p>
          <div className="mt-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-purple-300">
            {tone}
          </div>
        </div>
      </div>
    </div>
  )
}

function phoneData(t: typeof translations.en) {
  return [
    {
      title: t.heroCard1Title ?? "Automation Systems",
      sub: t.heroCard1Sub ?? "Integrate AI to simplify your workflows.",
      tone: "Automation",
      videoSrc: "/icons/hed-veds/1.mp4",
    },
    {
      title: t.heroCard2Title ?? "Brand Identity",
      sub: t.heroCard2Sub ?? "Shape your vision into a modern brand presence.",
      tone: "Branding",
      videoSrc: "/icons/hed-veds/2.mp4",
    },
    {
      title: t.heroCard3Title ?? "Web Development",
      sub: t.heroCard3Sub ?? "Build scalable and creative digital experiences.",
      tone: "Development",
      videoSrc: "/icons/hed-veds/3.mp4",
    },
    {
      title: t.heroCard4Title ?? "E-Commerce",
      sub: t.heroCard4Sub ?? "Launch your digital store with conversion-first UX.",
      tone: "E-Commerce",
      videoSrc: "/icons/hed-veds/4.mp4",
    },
    {
      title: t.heroCard5Title ?? "Marketing Strategy",
      sub: t.heroCard5Sub ?? "Data-driven performance for real impact.",
      tone: "Marketing",
      videoSrc: "/icons/hed-veds/5.mp4",
    },
  ]
}
