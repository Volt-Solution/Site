import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import { CONTACT } from '@/lib/constants'

// Vogie base — body, labels, eyebrows
const vogieBase = localFont({
  src: [
    { path: '../../public/fonts/Vogie-Light.woff2',      weight: '300', style: 'normal' },
    { path: '../../public/fonts/Vogie-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../../public/fonts/Vogie-Regular.woff2',     weight: '400', style: 'normal' },
    { path: '../../public/fonts/Vogie-Medium.woff2',      weight: '500', style: 'normal' },
    { path: '../../public/fonts/Vogie-SemiBold.woff2',    weight: '600', style: 'normal' },
  ],
  variable: '--font-vogie',
  display: 'swap',
})

// Vogie Expanded — títulos editoriais (hero, h1, h2)
const vogieDisplay = localFont({
  src: [
    { path: '../../public/fonts/Vogie-ThinExpanded.woff2',  weight: '100', style: 'normal' },
    { path: '../../public/fonts/Vogie-LightExpanded.woff2', weight: '300', style: 'normal' },
  ],
  variable: '--font-vogie-display',
  display: 'swap',
})

// Vogie Condensed — números/stats grandes
const vogieCondensed = localFont({
  src: [
    { path: '../../public/fonts/Vogie-ExtraBoldCondensed.woff2', weight: '800', style: 'normal' },
    { path: '../../public/fonts/Vogie-BlackCondensed.woff2',     weight: '900', style: 'normal' },
  ],
  variable: '--font-vogie-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
    template: '%s | Volt Solution',
  },
  description: 'Monitoramento em tempo real de água, energia, temperatura e clima para hotéis e resorts de alto padrão. Solução personalizada com hardware certificado ANATEL.',
  keywords: ['telemetria hotelaria', 'monitoramento IoT hotel', 'gestão de utilidades resort', 'Volt Solution'],
  alternates: {
    canonical: 'https://voltsolution.com.br',
  },
  openGraph: {
    title: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
    description: 'Monitoramento em tempo real para hotéis e resorts de alto padrão.',
    url: 'https://voltsolution.com.br',
    siteName: 'Volt Solution',
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }], // TODO: criar public/og-image.jpg (1200×630)
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
    description: 'Monitoramento em tempo real para hotéis e resorts de alto padrão.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://voltsolution.com.br'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Volt Solution',
    url: 'https://voltsolution.com.br',
    logo: 'https://voltsolution.com.br/images/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.PHONE_INTL,
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  }

  return (
    <html lang="pt-BR" className={`${vogieBase.variable} ${vogieDisplay.variable} ${vogieCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
