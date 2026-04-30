'use client'
import Image from 'next/image'
import { CASES } from '@/lib/constants'
import FadeIn from '../ui/FadeIn'

export default function Cases() {
  return (
    <section className="section-padding bg-white" id="cases">
      <div className="container-site">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">
            <div className="lg:col-span-7">
              <span className="eyebrow text-stone mb-6 block">Cases de Sucesso</span>
              <h2 className="text-h2 text-navy">
                Quem já vê<br />
                <span className="font-light text-stone">o que antes passava batido.</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <div style={{ borderTop: '1px solid rgba(3,3,66,0.1)' }}>
          {CASES.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <article
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 group"
                style={{ borderBottom: '1px solid rgba(3,3,66,0.1)' }}
              >
                {/* Logo / imagem */}
                <div className="md:col-span-2 lg:col-span-2 flex items-center">
                  <div className="relative aspect-square w-20 md:w-full rounded-sm overflow-hidden bg-navy/5">
                    <Image
                      src={item.logo}
                      alt={item.client}
                      fill
                      sizes="(max-width: 768px) 80px, 15vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center">
                  <span className="eyebrow text-stone mb-3 block">{item.client}</span>
                  <h3 className="text-h3 text-navy mb-3">{item.problem}</h3>
                  <p className="text-body text-stone">{item.result}</p>
                </div>

                {/* Métrica protagonista */}
                <div className="md:col-span-4 lg:col-span-4 flex md:flex-col md:items-end md:justify-center md:text-right gap-3 md:gap-1 items-baseline">
                  <span
                    className="text-navy leading-none"
                    style={{
                      fontFamily: 'var(--font-vogie-condensed)',
                      fontWeight: 800,
                      fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                      letterSpacing: '-0.03em',
                      lineHeight: 0.9,
                    }}
                  >
                    {item.metric}
                  </span>
                  <div className="flex flex-col md:items-end gap-0.5">
                    <span className="eyebrow text-stone">{item.metricLabel}</span>
                    {item.metricDetail && (
                      <span
                        className="uppercase text-stone/60"
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.12em',
                          fontWeight: 500,
                        }}
                      >
                        {item.metricDetail}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
