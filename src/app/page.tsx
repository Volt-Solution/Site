import Hero from '@/components/sections/Hero'
import Solution from '@/components/sections/Solution'
import MeasureCare from '@/components/sections/MeasureCare'
import Problems from '@/components/sections/Problems'
import Services from '@/components/sections/Services'
import Differentials from '@/components/sections/Differentials'
import Cases from '@/components/sections/Cases'
import Clients from '@/components/sections/Clients'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solution />
      <MeasureCare />
      <Problems />
      <Services />
      <Differentials />
      <Cases />
      <Clients />
      <CTASection />
    </>
  )
}
