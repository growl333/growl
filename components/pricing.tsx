"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const ACCENT = "#8a3ffc"

function FeatureItem({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-gray-400" : "text-gray-100"}`}>{text}</span>
    </li>
  )
}

export function Pricing() {
  const { language } = useLanguage()
  const t = translations[language]

  const plans = [
    {
      name: t.planEssential,
      price: t.planEssentialPrice,
      description: "Ideal for startups needing quick presence",
      features: [
        t.essentialFeature1,
        t.essentialFeature2,
        t.essentialFeature3,
        t.essentialFeature4,
        t.essentialFeature5,
        t.essentialFeature6,
      ],
      highlighted: false,
    },
    {
      name: t.planProfessional,
      price: t.planProfessionalPrice,
      description: "Best balance between features, performance, and value",
      features: [
        t.professionalFeature1,
        t.professionalFeature2,
        t.professionalFeature3,
        t.professionalFeature4,
        t.professionalFeature5,
        t.professionalFeature6,
        t.professionalFeature7,
        t.professionalFeature8,
        t.professionalFeature9,
      ],
      highlighted: true,
      badge: t.planRecommended,
    },
    {
      name: t.planEnterprise,
      price: t.planEnterprisePrice,
      description: "Built for enterprises demanding automation and scalability",
      features: [
        t.enterpriseFeature1,
        t.enterpriseFeature2,
        t.enterpriseFeature3,
        t.enterpriseFeature4,
        t.enterpriseFeature5,
        t.enterpriseFeature6,
        t.enterpriseFeature7,
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="container mx-auto px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{t.pricingTitle}</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{t.pricingSubtitle}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <Card
              className={`relative overflow-hidden rounded-2xl transition-all duration-300 h-full group-hover:scale-105 ${
                plan.highlighted
                  ? "liquid-glass-enhanced border-purple-400/50 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                  : "liquid-glass border-white/20 hover:border-white/40"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
              )}
              {plan.badge && (
                <div className="absolute top-4 right-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/20 border border-purple-400/50">
                  {plan.badge}
                </div>
              )}
              <CardHeader className="space-y-3 pb-4">
                <div className="text-sm font-semibold text-purple-300">{plan.name}</div>
                <div className="flex items-end gap-2 text-white">
                  <div className="text-4xl font-bold tracking-tight">{plan.price}</div>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
                <Button
                  asChild
                  className={`w-full rounded-lg font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <Link href="https://wa.link/65mf3i" target="_blank" rel="noopener noreferrer">
                    {t.contactNow}
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="grid gap-3">
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx} text={feature} />
                  ))}
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-white mb-1">Bilingual Support</p>
          <p>{t.pricingNote1}</p>
        </div>
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-white mb-1">Delivery Timeline</p>
          <p>{t.pricingNote2}</p>
        </div>
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-white mb-1">Hosting & Domain</p>
          <p>{t.pricingNote3}</p>
        </div>
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-white mb-1">Pricing</p>
          <p>{t.pricingNote4}</p>
        </div>
      </div>
    </section>
  )
}
