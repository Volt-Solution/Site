import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import Differentials from '@/components/sections/Differentials'
import Cases from '@/components/sections/Cases'
import Clients from '@/components/sections/Clients'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <Services />
      <Differentials />
      <Cases />
      <Clients />
      <CTASection />
    </>
  )
}
