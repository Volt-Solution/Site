'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeIn from '../ui/FadeIn'
import { CLIENTS, HERO } from '@/lib/constants'
import { Activity } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

const Sparkline = () => (
  <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="my-2">
    <polyline
      points="0,18 12,14 22,16 34,8 44,12 54,5 64,9 72,4 80,2"
      stroke="#0081E6"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="80" cy="2" r="2.5" fill="#0081E6" />
  </svg>
)

const READINGS = [
  { label: 'ÁGUA · TORRE A', value: '12.4', unit: 'm³/h' },
  { label: 'ENERGIA · BOMBA 03', value: '4.8', unit: 'kW' },
  { label: 'GÁS · COZINHA', value: '1.2', unit: 'Nm³/h' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-navy overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy" />
        {/* Glow neutro suave */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(40% 50% at 75% 25%, rgba(255,255,255,0.06) 0%, rgba(3,3,66,0) 65%)',
          }}
        />
      </div>

      {/* Grid técnico */}
      <div className="grid-bg" aria-hidden />

      <div className="container-site relative z-10 flex flex-col flex-1 pt-32 md:pt-44 pb-12 md:pb-16">

        <div className="max-w-3xl flex-1 flex flex-col justify-center">
          {/* Badge linear sem pill */}
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 border-l-2 border-bone/40 pl-4 mb-9 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-brand animate-pulse" />
              <span className="text-sm font-medium text-white/75 tracking-wide">
                {HERO.LABEL}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-editorial text-white mb-9">
              {HERO.TITLE_WHITE}<br />
              <span className="font-light text-white/45">{HERO.TITLE_GRAY}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-body-lg text-white/65 max-w-xl mb-12">
              {HERO.SUBTEXT}
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="bg-bone hover:bg-white text-navy px-8 py-4 rounded-sm font-medium tracking-wide transition-colors text-center text-sm uppercase"
              >
                Agendar demonstração
              </Link>
              <a
                href="#solucoes"
                className="bg-white/5 backdrop-blur border border-bone/30 hover:border-bone hover:bg-white/8 text-white px-8 py-4 rounded-sm font-medium transition-colors text-center text-sm uppercase tracking-wide"
              >
                Ver como funciona
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Card principal de telemetria — densificado */}
        <motion.div {...fadeUp(0.55)} className="hidden md:block absolute right-8 lg:right-16 top-[42%] -translate-y-1/2 bg-navy-deep/85 backdrop-blur-md rounded-sm shadow-2xl min-w-[230px] border border-bone/15 overflow-hidden">
            {/* Header do card */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/8">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-blue-brand" strokeWidth={1.75} />
                <span className="text-[10px] font-medium text-white/50 uppercase tracking-[0.14em]">
                  Dashboard
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-brand animate-pulse" />
                <span className="bg-blue-brand text-navy text-[9px] font-medium uppercase tracking-[0.14em] px-1.5 py-0.5 rounded-sm">
                  AO VIVO
                </span>
              </div>
            </div>

            {/* Sparkline + timestamp */}
            <div className="px-5 pt-3 pb-1">
              <Sparkline />
              <span className="text-[9px] text-white/30 font-medium tabular-nums">15:42:08</span>
            </div>

            {/* Leituras */}
            <div className="px-5 pb-4 flex flex-col gap-2.5 mt-2">
              {READINGS.map((r) => (
                <div key={r.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-brand shrink-0" />
                    <span className="text-[9px] font-medium text-white/40 uppercase tracking-[0.12em]">
                      {r.label}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span
                      className="text-white text-base leading-none"
                      style={{ fontFamily: 'var(--font-vogie-condensed)', fontWeight: 800 }}
                    >
                      {r.value}
                    </span>
                    <span className="text-white/40 text-[9px]">{r.unit}</span>
                  </div>
                </div>
              ))}
            </div>
        </motion.div>

        {/* Card secundário — energia offset */}
        <motion.div {...fadeUp(0.7)} className="hidden lg:block absolute right-56 top-[22%] bg-navy/75 backdrop-blur-sm rounded-sm p-4 shadow-xl min-w-[165px] border border-white/8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1 h-1 rounded-full bg-blue-brand shrink-0" />
              <span className="text-[9px] font-medium text-white/40 uppercase tracking-[0.12em]">
                Energia · Bloco A
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white text-2xl leading-none" style={{ fontFamily: 'var(--font-vogie-condensed)', fontWeight: 800 }}>
                48,2
              </span>
              <span className="text-white/40 text-xs">kWh</span>
            </div>
            <p className="text-[10px] text-emerald-400/80 mt-1.5">−12% vs. ontem</p>
        </motion.div>

        {/* Card terciário — gás offset */}
        <motion.div {...fadeUp(0.85)} className="hidden lg:block absolute right-6 top-[68%] bg-navy/75 backdrop-blur-sm rounded-sm p-4 shadow-xl min-w-[150px] border border-white/8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1 h-1 rounded-full bg-blue-brand shrink-0" />
              <span className="text-[9px] font-medium text-white/40 uppercase tracking-[0.12em]">
                Gás · Cozinha
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white text-2xl leading-none" style={{ fontFamily: 'var(--font-vogie-condensed)', fontWeight: 800 }}>
                3,1
              </span>
              <span className="text-white/40 text-xs">m³/h</span>
            </div>
            <p className="text-[10px] text-white/35 mt-1.5">dentro do normal</p>
        </motion.div>

        {/* Logos clientes */}
        <div className="mt-12 md:mt-16">
          <FadeIn delay={0.6}>
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.14em] text-white/35 mb-5">
                Confiado por líderes do setor
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-x-10 gap-y-5 md:gap-x-16">
                {CLIENTS.map((client) => (
                  <div key={client.name} className="relative h-9 md:h-11 opacity-40 hover:opacity-75 transition-opacity flex items-center">
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
