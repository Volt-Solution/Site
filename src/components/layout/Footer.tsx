import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'
import { Mail, Phone } from 'lucide-react'

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo-white.svg"
                  alt="Volt Solution"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/80 text-body pr-4">
              Especialistas em telemetria para hotelaria de luxo.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-brand transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-brand transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-semibold text-lg">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/politica-de-privacidade" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-semibold text-lg">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-blue-brand" />
                <span>(81) 98699-6968</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-blue-brand" />
                <span>contato@voltsolution.com.br</span>
              </li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm text-white/90">
              <span className="w-2 h-2 rounded-full bg-blue-brand"></span>
              Certificação ISO 9001
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Volt Solution. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span>ISO 9001</span>
            <span>·</span>
            <span>Site desenvolvido por [empresa]</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
