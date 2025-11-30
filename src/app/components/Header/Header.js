// components/Header.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image";

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? 'bg-cb-bg/85 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container-cb flex items-center justify-between py-4">
        {/* Logo / Marca */}
        <Link href="/" className="flex items-center gap-2">
        {/* Logo / Marca */}
          {/* <div className="h-9 w-9 rounded-full bg-cb-accent/15 border border-cb-accent/40 flex items-center justify-center text-cb-accent">
            <span className="text-lg font-serif">CB</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg">Casa Botánica</div>
            <image src="../../../../public/Logo Casa Botanica.png" alt="logo" className="h-12" />
            <div className="text-xs text-slate-400">
              Paisajismo · Boutique
            </div>
          </div> */}
          <div className="flex items-center gap-3">
  <Image
    src="/logo-casabotanica.png"
    alt="Casa Botánica Logo"
    width={160}
    height={60}
    className="h-auto w-[140px] md:w-40"
    priority
  />
</div>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/541158504632"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-cb-accent px-4 py-2 text-xs font-medium text-slate-900 hover:bg-cb-accent-soft transition-colors"
          >
            Agendar visita
          </a>
        </nav>

        {/* Botón mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-100"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <div className="space-y-1">
            <span className="block h-[2px] w-5 bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
          </div>
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-cb-bg-soft">
          <nav className="container-cb flex flex-col py-4 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-slate-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cb-accent px-4 py-2 text-xs font-medium text-slate-900 hover:bg-cb-accent-soft transition-colors"
            >
              Agendar visita
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
