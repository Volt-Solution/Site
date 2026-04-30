'use client'
import { SERVICES } from '@/lib/constants'
import { iconMap } from '@/lib/icons'
import FadeIn from '../ui/FadeIn'

export default function Services() {
  return (
    <section id="solucoes" className="section-padding bg-navy relative overflow-hidden">
      {/* Grid técnico */}
      <div className="grid-bg" aria-hidden />
      <div className="container-site relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
            <div className="lg:col-span-7">
              <span className="eyebrow text-bone/55 mb-6 block">Soluções</span>
              <h2 className="text-h2 text-white">
                Tudo que sustenta a operação,<br />
                <span className="font-light text-white/45">em uma única visão.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="text-body-lg text-white/55">
                Diversas frentes integradas em um dashboard único. Uma plataforma
                flexível que se adapta e expande conforme a necessidade do seu hotel.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-sm overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeIn key={service.id} delay={index * 0.06}>
                <div className="h-full p-7 bg-navy hover:bg-navy-deep transition-colors group">
                  <Icon className="w-6 h-6 text-bone/80 stroke-[1.75] mb-6 group-hover:text-white transition-colors" />
                  <h3 className="text-h3 text-white mb-2">{service.title}</h3>
                  <p className="text-caption text-white/50">{service.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
