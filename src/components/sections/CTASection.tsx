'use client'
import Link from 'next/link'
import FadeIn from '../ui/FadeIn'
import { CONTACT } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="bg-navy text-center relative overflow-hidden">
      {/* Grid técnico */}
      <div className="grid-bg" aria-hidden />
      {/* Glow neutro */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(255,255,255,0.05) 0%, rgba(3,3,66,0) 70%)',
        }}
      />
      <div className="container-site relative z-10 py-28 md:py-40">
        <FadeIn>
          <span className="eyebrow text-bone/55 mb-8 block">Pronto para o próximo passo</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-display text-white max-w-4xl mx-auto mb-10">
            Qual é o custo de não saber o que está acontecendo na sua operação?
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-body-lg text-white/60 max-w-2xl mx-auto mb-14">
            Em 30 minutos, mostramos como a Volt Solution pode ser implementada no seu hotel, 
            mostrando também cases em produção e em tempo real.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="bg-bone text-navy hover:bg-white px-8 py-4 rounded-sm font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Agendar demonstração
            </Link>
            <a
              href={CONTACT.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-bone/30 hover:border-bone text-white px-8 py-4 rounded-sm font-medium transition-colors text-sm uppercase tracking-wide"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-14 text-caption text-white/35">
            <span>ISO 9001</span>
            <span className="text-white/20">·</span>
            <span>Hardware ANATEL</span>
            <span className="text-white/20">·</span>
            <span>Dados em nuvem</span>
            <span className="text-white/20">·</span>
            <span>Suporte 24/7</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
