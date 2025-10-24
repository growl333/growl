import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Team } from "@/components/team"
import { Clients } from "@/components/clients"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { GrowlFooter } from "@/components/growl-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://growlagency.com/",
    name: "Growl Agency | 360° Marketing & AI Automation",
    description:
      "Growl Agency specializes in AI automation, brand identity design, web development, and Shopify/WordPress solutions.",
    url: "https://growlagency.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Growl Agency",
      url: "https://growlagency.com",
      logo: "https://growlagency.com/logo.png",
      sameAs: ["https://www.instagram.com/growlagency99", "https://www.facebook.com/share/1D16gQk1Wi/"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+20-10-24252649",
        email: "info@growl.cloud",
      },
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Services />
        <Process />
        <Team />
        <Clients />
        <Pricing />
        <Contact />
        <GrowlFooter />
      </main>

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
