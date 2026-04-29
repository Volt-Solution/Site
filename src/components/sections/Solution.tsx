'use client'
import { MOVES } from '@/lib/constants'
import FadeIn from '../ui/FadeIn'

export default function Solution() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-bone)' }}>
      <div className="container-site">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-24">
            <div className="lg:col-span-5">
              <span className="eyebrow text-stone mb-6 block">Método · 3 Etapas</span>
              <h2 className="text-h2 text-navy">
                Três movimentos.<br />
                <span className="text-stone font-light">Nenhum deles o hóspede percebe.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-body-lg text-stone">
                Da coleta ao insight, cada etapa é projetada para sumir do campo de
                visão do hóspede e aparecer onde a sua equipe precisa decidir.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-sand-deep">
          {MOVES.map((m, i) => (
            <FadeIn key={m.number} delay={i * 0.1}>
              <div className="py-10 md:py-14 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 md:border-r last:md:border-r-0 border-sand-deep h-full">
                {/* Número editorial grande */}
                <div
                  className="leading-none mb-6 select-none"
                  style={{
                    fontFamily: 'var(--font-vogie-condensed)',
                    fontWeight: 800,
                    fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                    letterSpacing: '-0.03em',
                    color: 'color-mix(in oklab, var(--color-stone) 40%, transparent)',
                  }}
                >
                  {m.number}
                </div>
                <h3 className="text-h3 text-navy mb-4">{m.title}</h3>
                <p className="text-body text-stone">{m.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
