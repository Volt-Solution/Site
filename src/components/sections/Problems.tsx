'use client'
import { iconMap } from '@/lib/icons'
import { PROBLEMS } from '@/lib/constants'
import FadeIn from '../ui/FadeIn'

export default function Problems() {
  return (
    <section className="section-padding" id="problemas" style={{ backgroundColor: 'var(--color-bone)' }}>
      <div className="container-site">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
            <div className="lg:col-span-7">
              <span className="eyebrow text-stone mb-6 block">Diagnóstico</span>
              <h2 className="text-h2 text-navy">
                Sua equipe descobre o problema<br />
                <span className="font-light text-stone">antes ou depois do hóspede?</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-sm overflow-hidden" style={{ backgroundColor: 'var(--color-sand-deep)' }}>
          {PROBLEMS.map((problem, i) => {
            const Icon = iconMap[problem.icon]
            return (
              <FadeIn key={problem.title} delay={0.06 * i} direction="up">
                <div className="p-8 md:p-10 h-full" style={{ backgroundColor: 'var(--color-bone)' }}>
                  <Icon className="w-6 h-6 stroke-[1.75] mb-6" style={{ color: 'color-mix(in oklab, var(--color-stone) 60%, transparent)' }} />
                  <h3 className="text-h3 text-navy mb-3">{problem.title}</h3>
                  <p className="text-body text-stone">{problem.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
