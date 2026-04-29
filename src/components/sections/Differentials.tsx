'use client'
import { DIFFERENTIALS } from '@/lib/constants'
import { iconMap } from '@/lib/icons'
import FadeIn from '../ui/FadeIn'

export default function Differentials() {
  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden" id="sobre">
      {/* Grid técnico */}
      <div className="grid-bg" aria-hidden />
      {/* Glow azul sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 60% at 100% 0%, rgba(0,129,230,0.10) 0%, rgba(3,3,66,0) 70%)',
        }}
      />
      <div className="container-site relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
            <div className="lg:col-span-6">
              <span className="eyebrow text-bone/55 mb-6 block">Especificações</span>
              <h2 className="text-h2 text-white">
                Projetado para o padrão<br />
                <span className="font-light text-white/45">que você entrega.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-body-lg text-white/55">
                Não vendemos plataforma genérica. Cada instalação é dimensionada para
                a estrutura do seu hotel, com hardware nacional e suporte local.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = iconMap[diff.icon]
            const number = String(index + 1).padStart(2, '0')

            return (
              <FadeIn key={diff.title} delay={index * 0.1}>
                <div className="flex gap-5 py-8 border-b border-white/10">
                  {/* Número editorial */}
                  <div
                    className="shrink-0 leading-none select-none"
                    style={{
                      fontFamily: 'var(--font-vogie-condensed)',
                      fontWeight: 800,
                      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginTop: '-0.1em',
                      color: 'rgba(255,255,255,0.12)',
                    }}
                  >
                    {number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-4 h-4 text-bone/80 stroke-[1.75]" />
                      <h3 className="text-h3 text-white">{diff.title}</h3>
                    </div>
                    <p className="text-body text-white/60">{diff.description}</p>
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
