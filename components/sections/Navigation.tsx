'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
  { href: '#what-is-this', label: 'What Is This' },
  { href: '#how-it-works', label: 'How The Scam Works' },
  { href: '#fake-accounts', label: 'Fake Accounts' },
  { href: '#evidence', label: 'Evidence' },
  { href: '#report', label: 'Report' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header role="banner">
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : ''
      }`}
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'var(--divider)'}`,
      }}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl tracking-[0.12em] cursor-pointer"
        >
          <span style={{ color: 'var(--text-primary)' }}>EXPO</span>
          <span style={{ color: 'var(--accent)' }}>SED</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm transition-colors duration-200 cursor-pointer"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <motion.div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.15em] text-white"
            style={{ backgroundColor: 'var(--accent)' }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(226,75,74,0.5)',
                '0 0 0 10px rgba(226,75,74,0)',
                '0 0 0 0 rgba(226,75,74,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <AlertTriangle size={10} />
            ACTIVE SCAM
          </motion.div>

          <button
            className="md:hidden p-1 transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderBottom: '1px solid var(--divider)',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-4 px-5 font-body text-sm transition-colors duration-200"
                style={{
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--divider)',
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  )
}
