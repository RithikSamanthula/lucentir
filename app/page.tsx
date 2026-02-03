import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhatWeBuild } from "@/components/what-we-build"
import { Industries } from "@/components/industries"
import { Process } from "@/components/process"
import { WhyLucentir } from "@/components/why-lucentir"
import { CapabilitySnapshot } from "@/components/capability-snapshot"
import { Engage } from "@/components/engage"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatWeBuild />
        <Industries />
        <Process />
        <WhyLucentir />
        <CapabilitySnapshot />
        <Engage />
      </main>
      <Footer />
    </>
  )
}
