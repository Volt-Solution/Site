'use client'
import Image from 'next/image'
import { Droplet, Zap, Thermometer } from 'lucide-react'
import FadeIn from '../ui/FadeIn'

const PILLARS = [
  {
    icon: Droplet,
    label: 'Água',
    title: 'Cada gota auditada.',
    description:
      'Vazamentos detectados em horas, não em meses. Setorização por ala, lavanderia e SPA.',
    image: '/images/cases/case-1.jpg',
    annotations: [
      { top: '22%', left: '18%', label: 'RESERV-01', value: '94%' },
      { top: '55%', left: '60%', label: 'FLUXO-A3', value: '12.4 m³/h' },
      { top: '75%', left: '30%', label: 'PRESSÃO', value: '2.8 bar' },
    ],
  },
  {
    icon: Thermometer,
    label: 'Clima',
    title: 'Conforto sem variação.',
    description:
      'Temperatura, umidade e qualidade do ar dentro do range, em cada suíte e ambiente crítico.',
    image: '/images/hero-bg.jpg',
  },
  {
    icon: Zap,
    label: 'Energia',
    title: 'Cada quilowatt explicado.',
    description:
      'Picos, ociosidades e ineficiências invisíveis aparecem antes de chegar à fatura.',
    image: '/images/cases/case-2.jpg',
  },
]

export default function MeasureCare() {
  const [featured, ...rest] = PILLARS
  if (!featured) return null

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-sand)' }}>
      <div className="container-site">
        <FadeIn>
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="eyebrow text-stone mb-6 block">Processo</span>
            <h2 className="text-h2 text-navy">
              O que não se mede,<br />
              <span className="font-light text-navy/55">também não se cuida.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Card principal — full-bleed com overlay técnico */}
        <FadeIn delay={0.1}>
          <div className="relative w-full overflow-hidden rounded-sm mb-5 md:mb-6" style={{ aspectRatio: '21/9' }}>
            <Image
              src={featured.image}
              alt={featured.label}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" />

            {/* Anotações técnicas sobre a foto */}
            {featured.annotations?.map((a) => (
              <div
                key={a.label}
                className="absolute flex items-center gap-1.5"
                style={{ top: a.top, left: a.left }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-brand shrink-0" />
                <div className="bg-navy/65 backdrop-blur-sm rounded-sm px-2 py-1 border border-white/10">
                  <p className="text-[8px] font-medium text-white/50 uppercase tracking-[0.12em] leading-none">{a.label}</p>
                  <p className="text-[10px] font-medium text-white leading-none mt-0.5" style={{ fontFamily: 'var(--font-vogie-condensed)', fontWeight: 800 }}>{a.value}</p>
                </div>
              </div>
            ))}

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <featured.icon className="w-4 h-4 text-blue-brand" strokeWidth={1.75} />
                <span className="eyebrow text-bone/70">{featured.label}</span>
              </div>
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                }}
              >
                {featured.title}
              </h3>
              <p className="text-white/70 text-body max-w-md">{featured.description}</p>
            </div>
          </div>
        </FadeIn>

        {/* Cards secundários */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {rest.map((p, i) => {
            const Icon = p.icon
            return (
              <FadeIn key={p.label} delay={0.2 + i * 0.1}>
                <article className="group bg-white rounded-sm overflow-hidden flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow">
                  <div className="relative aspect-[16/7] overflow-hidden bg-navy/5">
                    <Image
                      src={p.image}
                      alt={p.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-3.5 h-3.5 text-blue-brand/80" strokeWidth={1.75} />
                      <span className="eyebrow text-stone">{p.label}</span>
                    </div>
                    <h3 className="text-h3 text-navy mb-3">{p.title}</h3>
                    <p className="text-body text-stone">{p.description}</p>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
