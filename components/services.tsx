"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import {
  Palette,
  Zap,
  Code,
  TrendingUp,
  ShoppingCart,
  LayoutPanelLeft,
  PenTool,
  Rocket,
} from "lucide-react"

export function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  // 4 main + 4 about Growl
  const services = [
    {
      icon: Palette,
      title: t.serviceBrandIdentityTitle ?? "Brand Identity & Strategy",
      description:
        t.serviceBrandIdentityDesc ??
        "We design bold, strategic identities that define how your brand is seen, felt, and remembered.",
      keypoints: ["Logo Systems", "Brand Guidelines", "Positioning & Naming"],
    },
    {
      icon: Zap,
      title: t.serviceAITitle ?? "AI Automation & n8n Workflows",
      description:
        t.serviceAIDesc ??
        "We build automation pipelines powered by AI and n8n to eliminate repetitive tasks and unlock productivity.",
      keypoints: ["AI Agents", "CRM Automation", "Data Triggers"],
    },
    {
      icon: Code,
      title: t.serviceWebTitle ?? "Web Development",
      description:
        t.serviceWebDesc ??
        "We create responsive, high-performance websites — from native React builds to scalable Shopify and WordPress setups.",
      keypoints: ["Next.js / Node.js", "Shopify / WordPress", "Performance SEO"],
    },
    {
      icon: TrendingUp,
      title: t.serviceAnalyticsTitle ?? "Marketing & Growth Systems",
      description:
        t.serviceAnalyticsDesc ??
        "We don’t just launch — we optimize. Growl implements data-driven marketing systems for measurable growth.",
      keypoints: ["Paid Media", "SEO/SEM", "Analytics Dashboard"],
    },
    {
      icon: ShoppingCart,
      title: "Custom POS Systems",
      description:
        "Fast checkout, real-time inventory, roles, branches, taxes, and barcode support.",
      keypoints: ["Cloud-ready", "Receipts & Taxes", "Inventory Reports"],
    },
    {
      icon: LayoutPanelLeft,
      title: "CRM & Back-Office",
      description:
        "Leads, pipelines, tasks, invoices, and WhatsApp/Email touchpoints with KPIs.",
      keypoints: ["Lead Capture", "Deals & Tasks", "Invoicing & KPIs"],
    },
    {
      icon: PenTool,
      title: "Creative & Copywriting",
      description:
        "Clear words and visuals for ads, landing pages, and socials with one tone of voice.",
      keypoints: ["Ad Creatives", "Landing Copy", "Content Ops"],
    },
    {
      icon: Rocket,
      title: "Full-Cycle Digital Launch",
      description:
        "Strategy → identity → product → campaigns. Analytics by default.",
      keypoints: ["Roadmap", "Go-to-Market", "Optimization"],
    },
  ]

  return (
    <section id="services" className="py-24 container mx-auto px-6">
      {/* Our Services */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          {t.servicesTitle ?? (language === "ar" ? "خدماتنا" : "Our Services")}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {t.servicesSubtitle ??
            (language === "ar"
              ? "نمزج بين الإبداع والأتمتة والاستراتيجية لمساعدة العلامات التجارية على النمو بدقة وفعالية."
              : "We blend creativity, automation, and strategy to help brands grow with precision and purpose.")}
        </p>
      </div>

      {/* First 4 */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
        {services.slice(0, 4).map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={i}
              className="group flex flex-col h-full border border-white/10 rounded-2xl p-8 transition-all duration-300 ease-out hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(138,63,252,0.25)] hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center justify-center h-14 w-14 rounded-full border border-white/10 bg-transparent transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 transition-all duration-300 group-hover:text-purple-300 group-hover:translate-x-1">
                {service.title}
              </h3>
              <div className="h-px w-16 bg-white/10 mb-5 transition-all duration-300 group-hover:w-24 group-hover:bg-purple-400/50"></div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 transition-all duration-300 group-hover:text-gray-200 group-hover:translate-y-1">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2">
                {service.keypoints.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-300 flex items-center gap-2 transition-all duration-300 group-hover:text-purple-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70 transition-all duration-300 group-hover:bg-purple-300"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* About Growl */}
      <div className="text-center mb-10">
        <h3 className="text-4xl font-semibold text-white tracking-tight">
          {language === "ar" ? (
            <>
              عن <span className="text-[#A855F7]">جرول</span>
            </>
          ) : (
            <>
              About <span className="text-[#A855F7]">Growl</span>
            </>
          )}
        </h3>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {language === "ar"
            ? "تأسست جراول عام 2022 بهدف دمج التصميم الإبداعي والهندسة الآلية في نظام واحد. نحن لا نبيع حزم خدمات جاهزة، بل نصمم منظومات رقمية متكاملة تعمل فعلاً من أجل نجاح عملك."
            : "Growl was founded in 2022 to connect creative design and automation engineering into one system. We don’t sell bundles — we craft digital ecosystems that actually work for your business."}
        </p>
      </div>

      {/* Gradient Cards with same hover animation */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.slice(4).map((service, i) => {
          const Icon = service.icon
          return (
            <div
              key={i}
              className="group relative flex flex-col h-full rounded-2xl p-8 border border-white/10 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(168,85,247,0.32),rgba(17,24,39,0.4)_45%,rgba(17,24,39,0.9))] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300 ease-out"
            >
              <div className="mb-6 flex items-center justify-center h-14 w-14 rounded-full border border-white/20 bg-black/10 transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-7 h-7 text-white/90 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 transition-all duration-300 group-hover:text-purple-300 group-hover:translate-x-1">
                {service.title}
              </h4>
              <div className="h-px w-24 bg-white/20 mb-5 transition-all duration-300 group-hover:bg-purple-400/50" />
              <p className="text-sm text-zinc-200 leading-relaxed mb-5 transition-all duration-300 group-hover:text-zinc-100 group-hover:translate-y-1">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2">
                {service.keypoints.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm text-zinc-100/90 flex items-center gap-2 transition-all duration-300 group-hover:text-purple-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70 transition-all duration-300 group-hover:bg-purple-400"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
