'use client'
import { Server, ShieldCheck, Activity } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

const STEPS = [
  {
    icon: Server,
    title: 'Coleta',
    description: 'Sensores autônomos instalados sem interromper a operação ou a experiência do hóspede. Hardware 100% brasileiro, certificado pela ANATEL, resistente e de baixa manutenção.',
  },
  {
    icon: ShieldCheck,
    title: 'Processamento',
    description: 'Todos os dados são transmitidos e processados em servidores AWS com criptografia ponta a ponta, disponibilidade 99,9% e armazenamento histórico completo.',
  },
  {
    icon: Activity,
    title: 'Visibilidade',
    description: 'Dashboard personalizado para sua operação, com alertas configuráveis por WhatsApp, SMS ou email. Sua equipe age antes que o problema impacte o hóspede.',
  },
]

export default function Solution() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="A Solução"
            title="Da coleta ao insight em tempo real"
          />
        </FadeIn>

        <div className="relative max-w-5xl mx-auto mt-12 md:mt-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-4 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex-1 flex flex-col md:items-center relative">
                  {/* Connector Line (Desktop) */}
                  {index < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[50%] w-full h-0.5 bg-blue-brand/20">
                      <div className="h-full bg-blue-brand w-0" /> {/* Future animation possible here */}
                    </div>
                  )}
                  {/* Connector Line (Mobile) */}
                  {index < STEPS.length - 1 && (
                    <div className="md:hidden absolute top-12 left-6 bottom-[-3rem] w-0.5 bg-blue-brand/20" />
                  )}

                  <FadeIn delay={index * 0.2} className="flex flex-col md:items-center w-full">
                    <div className="flex items-center md:flex-col gap-6 md:gap-0 w-full relative z-10 bg-white">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-navy text-white font-display font-bold text-xl flex items-center justify-center md:mb-6 z-10 border-4 border-white shadow-sm">
                        {index + 1}
                      </div>
                      <div className="md:text-center flex-1">
                        <div className="hidden md:flex justify-center mb-4">
                          <Icon className="w-8 h-8 text-blue-brand" />
                        </div>
                        <h3 className="text-h3 text-navy flex items-center gap-3 md:justify-center mb-3">
                          <Icon className="w-6 h-6 text-blue-brand md:hidden" />
                          {step.title}
                        </h3>
                        <p className="text-body text-stone md:px-4">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
