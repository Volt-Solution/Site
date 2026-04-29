import type { Metadata } from 'next'
import { Phone, Mail } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/ui/ContactForm'
import { CONTACT } from '@/lib/constants'
import type { ElementType } from 'react'

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

type ContactItem = { icon: ElementType; label: string; value: string; href: string }

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Phone,
    label: 'Telefone',
    value: `+55 ${CONTACT.PHONE_DISPLAY}`,
    href: CONTACT.PHONE_HREF,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: CONTACT.EMAIL,
    href: `mailto:${CONTACT.EMAIL}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/company/voltsolution',
    href: CONTACT.LINKEDIN_URL,
  },
]

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com um especialista da Volt Solution. Agende uma demonstração gratuita para hotéis e resorts.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep relative overflow-hidden pt-40 pb-20">
        <div className="grid-bg" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(40% 60% at 100% 0%, rgba(0,129,230,0.10) 0%, rgba(3,3,66,0) 70%)',
          }}
        />
        <div className="container-site relative z-10">
          <FadeIn>
            <span className="eyebrow text-bone/55 mb-6 block">Contato · Volt Solution</span>
            <h1 className="text-h2 text-white max-w-xl">
              Agende uma demonstração<br />
              <span className="font-light text-white/45">técnica sem compromisso.</span>
            </h1>
            <p className="text-body-lg text-white/55 mt-6 max-w-lg">
              Retornamos em até 1 dia útil com proposta customizada para a
              estrutura do seu hotel ou resort.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bone)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Info */}
            <FadeIn className="lg:col-span-4">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6 border-t border-sand-deep pt-8">
                  {CONTACT_ITEMS.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-start gap-4"
                      >
                        <Icon className="w-4 h-4 text-stone mt-0.5 shrink-0 group-hover:text-navy transition-colors" />
                        <div>
                          <span className="eyebrow text-stone block mb-1">{item.label}</span>
                          <span className="text-navy font-medium group-hover:text-stone transition-colors">
                            {item.value}
                          </span>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="border-t border-sand-deep pt-8">
                  <p className="text-body text-stone mb-5">
                    Prefere resposta imediata?
                  </p>
                  <a
                    href={CONTACT.WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-sand-deep bg-white hover:border-navy hover:bg-navy hover:text-white text-navy px-6 py-3.5 rounded-sm font-medium text-sm uppercase tracking-wide transition-colors"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Formulário */}
            <FadeIn delay={0.15} className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
