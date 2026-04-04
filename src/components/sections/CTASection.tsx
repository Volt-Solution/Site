'use client'
import Link from 'next/link'
import FadeIn from '../ui/FadeIn'

export default function CTASection() {
  return (
    <section className="section-padding bg-navy text-center">
      <div className="container-site max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="text-h2 text-white mb-6">
            Qual é o custo de não saber o que está acontecendo na sua operação?
          </h2>
          <p className="text-body-lg text-white/75 mb-10 max-w-2xl mx-auto">
            Em 30 minutos, mostramos como a Volt Solution pode ser implementada no seu hotel e quanto você pode economizar no primeiro ano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-10">
            <Link
              href="/contato"
              className="bg-blue-brand hover:bg-blue-hover text-white px-8 py-3.5 rounded-md font-semibold transition-colors w-full sm:w-auto"
            >
              Agendar demonstração gratuita →
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=5581986996968&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Volt%20Solution."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-[1.5px] border-white/40 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded-md font-semibold transition-colors w-full sm:w-auto"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-caption text-stone">
            <span>ISO 9001</span>
            <span>·</span>
            <span>Hardware ANATEL</span>
            <span>·</span>
            <span>Dados em nuvem AWS</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
