'use client'
import Image from 'next/image'
import { CASES } from '@/lib/constants'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function Cases() {
  return (
    <section className="section-padding bg-off-white" id="cases">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Cases de Sucesso"
            title="Resultados reais em operações reais"
          />
        </FadeIn>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-12">
          {CASES.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="bg-white rounded-[var(--radius-xl)] shadow-sm overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="w-full md:w-[40%] h-64 md:h-auto relative bg-navy/5">
                  <Image
                    src={item.logo}
                    alt={`Case ${item.client}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-brand mb-6">
                    {item.client}
                  </span>

                  <div className="flex flex-col gap-6 mb-8">
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-stone shrink-0 mt-1" />
                      <p className="text-body text-navy leading-relaxed">
                        <span className="font-semibold mr-1">Problema:</span>
                        {item.problem}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-brand shrink-0 mt-1" />
                      <p className="text-body text-navy leading-relaxed">
                        <span className="font-semibold mr-1">Solução:</span>
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-brand/5 rounded-[var(--radius-lg)] p-6 border border-blue-brand/10">
                    <p className="text-body text-navy mb-3">
                      <span className="font-semibold mr-1">Resultado:</span>
                      {item.result}
                    </p>
                    <div className="flex items-baseline gap-3 mt-4">
                      <span className="text-5xl font-display font-bold text-blue-brand leading-none">
                        {item.metric}
                      </span>
                      <span className="text-caption text-navy/70 uppercase tracking-wide font-medium">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
