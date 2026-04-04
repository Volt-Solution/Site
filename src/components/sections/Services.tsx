'use client'
import { SERVICES } from '@/lib/constants'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'
import {
  Droplet,
  Zap,
  Thermometer,
  Wind,
  Waves,
  Gauge,
  Lightbulb,
  Cpu
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  droplet: Droplet,
  zap: Zap,
  thermometer: Thermometer,
  wind: Wind,
  waves: Waves,
  gauge: Gauge,
  lightbulb: Lightbulb,
  cpu: Cpu,
}

export default function Services() {
  return (
    <section id="solucoes" className="section-padding bg-navy">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="O que monitoramos"
            title="Tudo que sua operação precisa monitorar"
            theme="dark"
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <div className="h-full bg-white/5 border border-white/10 rounded-[var(--radius-lg)] p-6 hover:bg-blue-brand/10 hover:border-blue-brand/40 transition-all duration-300">
                  {Icon && <Icon className="w-10 h-10 text-blue-brand mb-6" />}
                  <h3 className="text-h3 text-white mb-3">{service.title}</h3>
                  <p className="text-caption text-white/70">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
