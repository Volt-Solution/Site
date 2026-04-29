'use client'
import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 rounded-sm border border-sand-deep bg-white focus:border-navy focus:ring-1 focus:ring-navy/20 outline-none transition-colors text-navy placeholder:text-stone/50'

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
      if (!endpoint) throw new Error('NEXT_PUBLIC_FORMSPREE_ID not set')
      const response = await fetch(`https://formspree.io/f/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-sand-deep rounded-sm p-10 flex flex-col items-center justify-center text-center min-h-[400px] bg-white">
        <CheckCircle2 className="w-12 h-12 text-navy mb-5 stroke-[1.5]" />
        <h3 className="text-h3 text-navy mb-3">Mensagem recebida.</h3>
        <p className="text-body text-stone">
          Em breve um especialista entrará em contato com você.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-sand-deep rounded-sm p-8 flex flex-col gap-5">
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="eyebrow text-stone">Nome Completo *</label>
        <input required type="text" id="name" name="name" autoComplete="name" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="eyebrow text-stone">Empresa *</label>
          <input required type="text" id="company" name="company" autoComplete="organization" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="role" className="eyebrow text-stone">Cargo</label>
          <input type="text" id="role" name="role" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="eyebrow text-stone">Telefone</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="eyebrow text-stone">E-mail *</label>
          <input required type="email" id="email" name="email" autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="eyebrow text-stone">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Erro ao enviar. Tente novamente ou use o WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-navy hover:bg-navy-deep text-white font-medium py-4 rounded-sm transition-colors disabled:opacity-60 text-sm uppercase tracking-wide mt-1"
      >
        {status === 'submitting' ? 'Enviando…' : 'Enviar mensagem'}
      </button>
    </form>
  )
}
