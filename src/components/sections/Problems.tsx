'use client'
import { Droplet, Zap, Thermometer, Waves } from 'lucide-react'
import FadeIn from '../ui/FadeIn'

const PROBLEMS = [
  {
    icon: Droplet,
    title: 'Reservatório crítico no fim de semana cheio.',
    description: 'O nível caiu abaixo do mínimo na alta ocupação. Ninguém recebeu alerta.',
  },
  {
    icon: Zap,
    title: 'Pico invisível na fatura do mês.',
    description: 'A conta veio 40% acima e ninguém soube qual equipamento foi responsável.',
  },
  {
    icon: Thermometer,
    title: 'Ala inteira fora da temperatura ideal.',
    description: 'O ar-condicionado operou 4h fora do range. O hóspede reclamou antes da manutenção saber.',
  },
  {
    icon: Waves,
    title: 'Vazamento silencioso de R$ 18 mil.',
    description: 'Pequena falha na tubulação de água quente só apareceu na conta mensal.',
  },
]

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
            const Icon = problem.icon
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
