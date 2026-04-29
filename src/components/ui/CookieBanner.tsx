'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'volt_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    window.dispatchEvent(new Event('cookie_consent_accepted'))
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 transition-transform duration-500 ease-out',
        'bg-navy-deep/96 backdrop-blur-sm',
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      )}
    >
      <div className="container-site py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="eyebrow text-bone/55">Cookies &amp; Analytics</span>
          <p className="text-sm text-white/55 font-light">
            Usamos cookies de analytics para entender como o site é utilizado.{' '}
            <Link
              href="/politica-de-privacidade"
              className="text-bone/70 hover:text-bone underline underline-offset-2 transition-colors"
            >
              Saiba mais
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-white/45 hover:text-white/70 transition-colors font-medium"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="bg-bone hover:bg-white text-navy px-5 py-2.5 rounded-sm font-medium text-sm uppercase tracking-wide transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}

export function getCookieConsent(): 'accepted' | 'declined' | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEY) as 'accepted' | 'declined' | null
}
