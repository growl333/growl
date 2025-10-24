"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Process() {
  const { language } = useLanguage()
  const t = translations[language]

  const steps = [
    {
      number: "01",
      title: t.processStep1Title ?? "Discovery & Analysis",
      description:
        t.processStep1Desc ??
        "We begin by uncovering challenges, understanding your audience, and defining measurable objectives that align with your brand vision.",
      deliverables: t.processStep1Deliverables ?? "Market Insights, User Research, Competitive Audit",
      kpi: t.processStep1KPI ?? "Strategic clarity and opportunity map",
    },
    {
      number: "02",
      title: t.processStep2Title ?? "Strategy Formation",
      description:
        t.processStep2Desc ??
        "We translate insights into an actionable strategy. Every move — from messaging to channel selection — is defined by data and creative direction.",
      deliverables: t.processStep2Deliverables ?? "Strategic Framework, Positioning Statement",
      kpi: t.processStep2KPI ?? "Defined brand roadmap and positioning",
    },
    {
      number: "03",
      title: t.processStep3Title ?? "Design & Experience",
      description:
        t.processStep3Desc ??
        "We shape your visual and digital identity into a unified experience — modern, functional, and rooted in purpose.",
      deliverables: t.processStep3Deliverables ?? "Brand Identity, UI Systems, Experience Blueprint",
      kpi: t.processStep3KPI ?? "Design consistency and visual impact",
    },
    {
      number: "04",
      title: t.processStep4Title ?? "Development & Automation",
      description:
        t.processStep4Desc ??
        "We build powerful, scalable systems — from websites to AI-driven workflows — engineered for reliability and growth.",
      deliverables: t.processStep4Deliverables ?? "Website Deployment, Automation Pipelines, CMS Setup",
      kpi: t.processStep4KPI ?? "Operational efficiency and uptime reliability",
    },
    {
      number: "05",
      title: t.processStep5Title ?? "Launch & Optimization",
      description:
        t.processStep5Desc ??
        "We activate your product or campaign, monitor performance, and continuously refine for results that exceed expectations.",
      deliverables: t.processStep5Deliverables ?? "Launch Report, Campaign Setup, QA Testing",
      kpi: t.processStep5KPI ?? "Launch performance and engagement rate",
    },
    {
      number: "06",
      title: t.processStep6Title ?? "Growth & Management",
      description:
        t.processStep6Desc ??
        "We maintain momentum post-launch — managing updates, refining strategies, and scaling your ecosystem sustainably.",
      deliverables: t.processStep6Deliverables ?? "Analytics Dashboard, Growth Reports, Retention Systems",
      kpi: t.processStep6KPI ?? "Sustained growth and ROI",
    },
  ]

  return (
    <section id="process" className="container mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          {t.processTitle ?? "Our Process"}
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t.processSubtitle ??
            "A structured approach that transforms strategy into tangible results — ensuring clarity, consistency, and measurable impact at every phase."}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <Card
            key={i}
            className="group relative border border-white/10 bg-transparent rounded-2xl p-8
                       hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(138,63,252,0.25)]
                       transition-all duration-300 hover:-translate-y-2"
          >
            <CardHeader className="space-y-4">
              {/* Step Number */}
              <span className="block text-sm font-semibold text-purple-400/70 tracking-widest">
                STEP {step.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white leading-tight group-hover:text-purple-300 transition-colors">
                {step.title}
              </h3>

              {/* Divider */}
              <div className="h-px bg-white/10 group-hover:bg-purple-400/40 transition-all duration-300"></div>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Deliverables */}
              <div>
                <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide mb-1">
                  Deliverables
                </p>
                <p className="text-xs text-gray-400">{step.deliverables}</p>
              </div>

              {/* KPI */}
              <div>
                <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide mb-1">
                  KPI
                </p>
                <p className="text-xs text-gray-400">{step.kpi}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
