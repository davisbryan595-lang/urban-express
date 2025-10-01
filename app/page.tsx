import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickCTA } from "@/components/quick-cta"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <QuickCTA />
      <Services />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  )
}
