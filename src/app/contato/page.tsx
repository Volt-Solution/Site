import type { Metadata } from 'next'
import { Phone, Mail } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import ContactForm from '@/components/ui/ContactForm'

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export const metadata: Metadata = {
  title: 'Contato — Volt Solution',
  description: 'Fale com um especialista da Volt Solution. Agende uma demonstração gratuita para hotéis e resorts.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-off-white min-h-[100svh]">
      <div className="container-site max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Informações */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-display text-navy mb-6">
                  Fale com um especialista
                </h1>
                <p className="text-body-lg text-stone max-w-md">
                  Preencha o formulário ou nos chame diretamente. Retornamos em até 1 dia útil.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <a href="tel:+5581986996968" className="flex items-center gap-4 text-navy hover:text-blue-brand transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-brand/10 flex items-center justify-center group-hover:bg-blue-brand/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-brand" />
                  </div>
                  <span className="text-lg font-medium">+55 (81) 98699-6968</span>
                </a>
                
                <a href="mailto:contato@voltsolution.com.br" className="flex items-center gap-4 text-navy hover:text-blue-brand transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-brand/10 flex items-center justify-center group-hover:bg-blue-brand/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-brand" />
                  </div>
                  <span className="text-lg font-medium">contato@voltsolution.com.br</span>
                </a>

                <a href="https://linkedin.com/company/voltsolution" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-navy hover:text-blue-brand transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-brand/10 flex items-center justify-center group-hover:bg-blue-brand/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-brand" />
                  </div>
                  <span className="text-lg font-medium">/company/voltsolution</span>
                </a>
              </div>

              <div className="pt-4 border-t border-border w-full max-w-xs">
                <a
                  href="https://api.whatsapp.com/send/?phone=5581986996968&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Volt%20Solution."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-md font-semibold transition-colors mt-4 text-center"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Formulário */}
          <FadeIn delay={0.2} direction="left">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
