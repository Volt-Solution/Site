import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '../ui/FadeIn'
import { CLIENTS } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-navy overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // Placeholder path
          alt=""
          fill
          priority
          quality={85}
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/90" />
      </div>

      <div className="container-site relative z-10 flex flex-col justify-center items-start pt-32 pb-16 md:pt-20 md:pb-0">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-brand/50 bg-blue-brand/10 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-brand" />
            <span className="text-sm font-medium text-blue-brand">
              Especialistas em hotelaria de luxo
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-display text-white mb-6 max-w-4xl">
            Telemetria de precisão<br />
            para hotéis e resorts<br />
            de alto padrão.
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-body-lg text-white/80 max-w-2xl mb-8 md:mb-10">
            Monitoramos em tempo real o que importa para a sua operação —
            água, energia, clima e muito mais — para que sua equipe aja
            antes que o problema chegue ao hóspede.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contato"
              className="bg-blue-brand hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold transition-colors text-center"
            >
              Agendar demonstração →
            </Link>
            <a
              href="#solucoes"
              className="bg-transparent border-[1.5px] border-white/40 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded-md font-semibold transition-colors text-center"
            >
              Ver como funciona ↓
            </a>
          </div>
        </FadeIn>

        {/* Logos bottom */}
        <FadeIn delay={0.6} className="mt-16 md:mt-24 w-full mt-auto pt-12 md:pt-0">
          <div className="h-px w-full bg-white/10 mb-6" />
          <p className="text-sm text-stone mb-6">
            Confiado por líderes do setor hoteleiro
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:flex-wrap sm:items-center md:gap-12">
            {CLIENTS.map((client, i) => (
              <div key={i} className="relative h-10 md:h-[60px] opacity-60 hover:opacity-100 transition-opacity flex items-center justify-start">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={300}
                  height={100}
                  className="h-full w-auto object-contain object-left filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
