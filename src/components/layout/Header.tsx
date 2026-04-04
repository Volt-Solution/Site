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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // Check initial scroll position
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 md:h-20 flex items-center',
        !isTransparent ? 'bg-white shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-site flex justify-between items-center w-full">
        <Link href="/" onClick={closeMenu} className="relative z-50">
          <div className="relative w-36 h-10">
            <Image
              src={!isTransparent ? '/images/logo.svg' : '/images/logo-white.svg'}
              alt="Volt Solution"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-blue-brand',
                    !isTransparent ? 'text-navy' : 'text-white/90'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contato"
            className="bg-blue-brand hover:bg-blue-hover text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors"
          >
            Agendar Demo →
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-navy" />
          ) : (
            <Menu className={cn('w-6 h-6', !isTransparent ? 'text-navy' : 'text-white')} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
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
                className="text-2xl font-display font-semibold text-navy hover:text-blue-brand transition-colors"
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
            className="block w-full text-center bg-blue-brand text-white py-4 rounded-md font-semibold text-lg"
          >
            Agendar Demo →
          </Link>
        </div>
      </div>
    </header>
  )
}
