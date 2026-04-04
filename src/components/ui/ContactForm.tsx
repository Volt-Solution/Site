'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('https://formspree.io/f/PLACEHOLDER_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-[var(--radius-lg)] shadow-sm border border-border h-full flex flex-col items-center justify-center text-center min-h-[400px]">
        <CheckCircle2 className="w-16 h-16 text-blue-brand mb-6" />
        <h3 className="text-h3 text-navy mb-4">Mensagem enviada com sucesso!</h3>
        <p className="text-body text-stone">
          Agradecemos o seu contato. Em breve um de nossos especialistas entrará em contato com você.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[var(--radius-lg)] shadow-sm border border-border flex flex-col gap-6">
      {/* Honeypot field */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-navy">Nome Completo *</label>
        <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-border focus:border-blue-brand focus:ring-1 focus:ring-blue-brand outline-none transition-colors" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-navy">Empresa *</label>
          <input required type="text" id="company" name="company" className="w-full px-4 py-3 rounded-md border border-border focus:border-blue-brand focus:ring-1 focus:ring-blue-brand outline-none transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm font-medium text-navy">Cargo</label>
          <input type="text" id="role" name="role" className="w-full px-4 py-3 rounded-md border border-border focus:border-blue-brand focus:ring-1 focus:ring-blue-brand outline-none transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-navy">Telefone</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-md border border-border focus:border-blue-brand focus:ring-1 focus:ring-blue-brand outline-none transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-navy">E-mail *</label>
          <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-border focus:border-blue-brand focus:ring-1 focus:ring-blue-brand outline-none transition-colors" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-navy">Mensagem</label>
        <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-md border border-border focus:border-blue-brand focus:ring-1 focus:ring-blue-brand outline-none transition-colors resize-none"></textarea>
      </div>

      {status === 'error' && (
        <div className="text-red-500 text-sm font-medium">
          Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou use o WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-blue-brand hover:bg-blue-hover text-white font-semibold py-4 rounded-md transition-colors disabled:opacity-70 mt-2"
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem →'}
      </button>
    </form>
  )
}
