import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
  description: 'Monitoramento em tempo real de água, energia, temperatura e clima para hotéis e resorts de alto padrão. Solução personalizada com hardware certificado ANATEL.',
  keywords: 'telemetria hotelaria, monitoramento IoT hotel, gestão de utilidades resort, Volt Solution',
  openGraph: {
    title: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
    description: 'Monitoramento em tempo real para hotéis e resorts de alto padrão.',
    url: 'https://voltsolution.com.br',
    siteName: 'Volt Solution',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: 'index, follow',
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
      telephone: '+55-81-98699-6968',
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
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
      </body>
    </html>
  )
}
