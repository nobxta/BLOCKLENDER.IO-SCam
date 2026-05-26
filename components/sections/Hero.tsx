'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { AlertTriangle, ArrowDown, FileText, ChevronDown } from 'lucide-react'

function CountUpStat({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const [display, setDisplay] = useState('0')
  const motionVal = useMotionValue(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(motionVal, target, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (v) => {
          if (target >= 1000) {
            setDisplay(`$${Math.floor(v).toLocaleString()}+`)
          } else if (suffix === ' / 100') {
            if (target < 10) {
              setDisplay(Math.floor(v).toString())
            } else {
              setDisplay(v.toFixed(1))
            }
          } else {
            setDisplay(Math.floor(v).toString())
          }
        },
      })
      return () => controls.stop()
    }, delay)
    return () => clearTimeout(timeout)
  }, [motionVal, target, suffix, delay])

  const displayValue = target >= 1000 ? display : display + suffix

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-[52px] leading-none" style={{ color: 'var(--accent)' }}>
        {displayValue}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  )
}

export default function Hero() {
  const headlineChars = 'BLOCKLENDER.IO'.split('')
  const subChars = 'IS A SCAM'.split('')

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(226,75,74,0.07), transparent)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] font-mono text-[11px] uppercase tracking-[0.15em]"
          style={{
            color: 'var(--accent)',
            background: 'var(--accent-muted-bg)',
            border: '1px solid var(--accent-border)',
          }}
        >
          <AlertTriangle size={12} />
          SCAM EXPOSED — BLOCKLENDER.IO
        </motion.div>

        <h1 className="font-display leading-none">
          <span className="block text-[60px] sm:text-[80px] md:text-[110px]" style={{ color: 'var(--text-primary)' }}>
            {headlineChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.035, duration: 0.01 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block text-[60px] sm:text-[80px] md:text-[110px]" style={{ color: 'var(--accent)' }}>
            {subChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.05, duration: 0.01 }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="font-body text-lg md:text-xl max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Fake Instagram. Fake ads. Fake APR. Real theft. Real victims. All documented.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <CountUpStat target={500000} suffix="" label="ESTIMATED STOLEN FROM VICTIMS" delay={2000} />
          <div className="hidden md:block w-px h-10" style={{ backgroundColor: 'var(--divider)' }} />
          <CountUpStat target={6} suffix=" / 100" label="SCAMADVISER TRUST SCORE" delay={2000} />
          <div className="hidden md:block w-px h-10" style={{ backgroundColor: 'var(--divider)' }} />
          <CountUpStat target={8} suffix="" label="DOCUMENTED RED FLAGS" delay={2000} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center"
        >
          <button
            onClick={() => document.getElementById('evidence')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-[4px] w-full md:w-auto transition-all duration-200 text-white flex items-center justify-center gap-2 hover:opacity-90"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            SEE THE EVIDENCE
            <ArrowDown size={14} />
          </button>
          <button
            onClick={() => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-[4px] w-full md:w-auto transition-all duration-200 flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            SUBMIT YOUR REPORT
            <FileText size={14} />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={22} style={{ color: 'var(--text-muted)' }} />
      </motion.div>
    </section>
  )
}
