'use client'
import { motion } from 'framer-motion'
import { Droplet, Zap, Thermometer, Waves } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

const PROBLEMS = [
  {
    icon: Droplet,
    title: 'Reservatório crítico',
    description: 'O nível caiu abaixo do mínimo durante um final de semana de alta ocupação. Ninguém recebeu alerta.',
  },
  {
    icon: Zap,
    title: 'Pico de consumo invisível',
    description: 'A conta de energia do mês veio 40% acima. Sem telemetria, ninguém sabia qual equipamento era responsável.',
  },
  {
    icon: Thermometer,
    title: 'Temperatura fora do padrão',
    description: 'O ar-condicionado de uma ala inteira operou 4 horas fora do range ideal. Hóspedes reclamaram antes da manutenção saber.',
  },
  {
    icon: Waves,
    title: 'Vazamento silencioso',
    description: 'Pequeno vazamento na tubulação de água quente custou R$ 18.000 antes de ser detectado na conta mensal.',
  },
]

export default function Problems() {
  return (
    <section className="section-padding bg-off-white" id="problemas">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="O problema que resolvemos"
            title="Sua equipe descobre o problema antes ou depois do hóspede?"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon
            return (
              <FadeIn key={i} delay={0.1 * i} direction="up">
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-2 border-blue-brand h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-brand/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-brand" />
                  </div>
                  <h3 className="text-h3 text-navy mb-4">{problem.title}</h3>
                  <p className="text-body text-stone leading-relaxed">
                    &ldquo;{problem.description}&rdquo;
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
