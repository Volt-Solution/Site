'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 md:h-20 flex items-center',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/90 backdrop-blur-md border-b border-border'
        )}
      >
        <div className="container-site flex justify-between items-center w-full">
          <Link href="/" onClick={closeMenu} className="relative z-50">
            <div className="relative w-36 h-10">
              <Image
                src={isTransparent ? '/images/logo-white.svg' : '/images/logo.svg'}
                alt="Volt Solution"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-stone',
                      isTransparent ? 'text-white/80' : 'text-navy'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contato"
              className={cn(
                'px-5 py-2.5 rounded-sm font-medium text-sm tracking-wide uppercase transition-colors',
                isTransparent
                  ? 'bg-bone hover:bg-white text-navy'
                  : 'bg-navy hover:bg-navy-deep text-white'
              )}
            >
              Agendar Demo
            </Link>
          </nav>

          <button
            className="md:hidden relative z-50 p-2"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className={cn('w-6 h-6', isTransparent ? 'text-white' : 'text-navy')} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu fora do header para não ser contido pelo backdrop-filter */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-display font-light text-navy hover:text-stone transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href="/contato"
            onClick={closeMenu}
            className="block w-full text-center bg-navy hover:bg-navy-deep text-white py-4 rounded-sm font-medium text-sm uppercase tracking-wide transition-colors"
          >
            Agendar Demo
          </Link>
        </div>
      </div>
    </>
  )
}
