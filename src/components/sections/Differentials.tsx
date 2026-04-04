'use client'
import { DIFFERENTIALS } from '@/lib/constants'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'
import { Settings2, ShieldCheck, Plug2, BadgeCheck } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  'settings-2': Settings2,
  'shield-check': ShieldCheck,
  'plug-2': Plug2,
  'badge-check': BadgeCheck,
}

export default function Differentials() {
  return (
    <section className="section-padding bg-white" id="sobre">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Nossos Diferenciais"
            title="Por que a Volt Solution, e não uma plataforma genérica?"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = iconMap[diff.icon]
            const number = String(index + 1).padStart(2, '0')

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative h-full pt-8">
                  {/* Decorative Number */}
                  <span className="absolute top-0 right-0 text-[80px] font-display font-light text-navy/5 leading-none select-none">
                    {number}
                  </span>
                  
                  <div className="relative z-10">
                    {Icon && <Icon className="w-8 h-8 text-blue-brand mb-6 stroke-[1.5]" />}
                    <h3 className="text-h3 text-navy mb-4 pr-8">{diff.title}</h3>
                    <p className="text-body text-stone">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
