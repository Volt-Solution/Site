import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, CONTACT } from '@/lib/constants'
import { Mail, Phone } from 'lucide-react'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white pt-20 pb-10">
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
            <p className="text-white/60 text-body pr-4 font-light">
              Especialistas em telemetria para hotelaria de luxo.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-sm bg-white/8 flex items-center justify-center hover:bg-white/12 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={CONTACT.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/8 flex items-center justify-center hover:bg-white/12 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-medium tracking-[0.14em] uppercase text-white/50">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-bone transition-colors font-light">Home</Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-bone transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/politica-de-privacidade" className="text-white/60 hover:text-bone transition-colors font-light">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-medium tracking-[0.14em] uppercase text-white/50">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-white/60 font-light">
                <Phone className="w-4 h-4 text-white/50 shrink-0" strokeWidth={1.5} />
                <span>{CONTACT.PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 font-light">
                <Mail className="w-4 h-4 text-white/50 shrink-0" strokeWidth={1.5} />
                <span>{CONTACT.EMAIL}</span>
              </li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 border border-white/10 rounded-sm px-4 py-2 text-xs text-white/50 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-brand"></span>
              Certificação ISO 9001
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/35">
          <p>© {new Date().getFullYear()} Volt Solution. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span>ISO 9001</span>
            <span className="text-white/20">·</span>
            <span>Site desenvolvido por Volt Solution</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
