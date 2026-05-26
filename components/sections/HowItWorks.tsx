'use client'

import { motion } from 'framer-motion'
import {
  XCircle, Calendar, Globe, EyeOff,
  Megaphone, TrendingUp, ArrowLeftRight, ArrowRight, ArrowDown,
} from 'lucide-react'

const steps = [
  {
    step: 'STEP 01',
    icon: Megaphone,
    title: 'Build Fake Credibility',
    desc: 'The operators created a fake verified Instagram account impersonating Ripple CTO David Schwartz under the handle @joelkatz_. They ran AI-generated promotional content and paid press releases on TechBullion and Bitcoin.com to manufacture the appearance of a legitimate, newsworthy XRP yield platform.',
  },
  {
    step: 'STEP 02',
    icon: TrendingUp,
    title: 'Promise Impossible Returns',
    desc: 'A guaranteed fixed 12% annual percentage rate with daily compounding and no lock-up period. This specific combination — high fixed return plus immediate liquidity — is the defining signal of a Ponzi scheme. No collateral-backed lending operation can sustain these numbers. It is bait.',
  },
  {
    step: 'STEP 03',
    icon: ArrowLeftRight,
    title: 'Intercept Your Withdrawal',
    desc: 'When victims attempted to withdraw, their XRP was silently redirected to a destination wallet tag controlled by the scammers — not the address the victim entered. The platform\'s transaction record appears clean. The victim appears to have sent funds voluntarily. The money is gone.',
  },
  {
    step: 'STEP 04',
    icon: EyeOff,
    title: 'Erase All Evidence',
    desc: 'Every public warning posted about Blocklender.io was systematically reported and removed. The original Reddit thread documenting this fraud was deleted. Videos on X and YouTube were flagged. The domain now returns a 403 error. The operators remain completely anonymous and untraceable.',
  },
]

export default function HowItWorks() {
  return (
    <>
      {/* Part A — What Is Blocklender.io */}
      <section id="what-is-this" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-6xl mx-auto px-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--text-muted)' }}>
            BACKGROUND
          </span>
          <h2 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none" style={{ color: 'var(--text-primary)' }}>
            WHAT IS BLOCKLENDER.IO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="font-body text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Blocklender.io presented itself as a crypto lending platform built natively on the XRP Ledger. It promised XRP and RLUSD holders a fixed 12% annual percentage rate with daily compounding, no lock-up periods, and no minimum deposit. These claims were designed specifically to appeal to XRP holders who have long sought a native yield product.
              </p>
              <p className="font-body text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                To appear legitimate, the operators ran paid promotional articles on TechBullion and Bitcoin.com in April 2026. They created a fake verified Instagram account impersonating Ripple CTO David Schwartz (@joelkatz_) and used AI-generated content, fake social proof, and clickbait ads to reach as many XRP holders as possible. The platform registered its domain anonymously on March 6, 2026 — just weeks before the paid press launch.
              </p>
              <p className="font-body text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Once users deposited funds, withdrawals were either blocked or silently redirected to wallet addresses controlled by the scammers — not the addresses victims entered. The site is now returning a 403 Forbidden error. The operator remains completely untraceable behind a privacy shield registered in Reykjavik, Iceland.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-lg p-6 space-y-5"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--accent-border)',
                }}
              >
                <div className="flex items-center gap-2 pb-4" style={{ borderBottom: '1px solid var(--divider)' }}>
                  <XCircle size={14} style={{ color: 'var(--accent)' }} />
                  <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                    INDEPENDENT VERDICT
                  </span>
                </div>

                <div className="font-display text-[38px]" style={{ color: 'var(--accent)' }}>
                  CONFIRMED SCAM
                </div>

                <div className="space-y-4">
                  {/* ScamAdviser */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[12px]" style={{ color: 'var(--text-secondary)' }}>ScamAdviser</span>
                      <span className="font-mono text-[12px]" style={{ color: 'var(--accent)' }}>6 / 100</span>
                    </div>
                    <div className="w-full h-1 rounded-full" style={{ background: 'var(--divider)' }}>
                      <motion.div
                        className="h-1 rounded-full"
                        style={{ background: 'var(--accent)' }}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '6%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <a
                      href="https://www.scamadviser.com/check-website/blocklender.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] hover:underline block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      scamadviser.com/check-website/blocklender.io ↗
                    </a>
                  </div>

                  {/* Scam-Detector */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[12px]" style={{ color: 'var(--text-secondary)' }}>Scam-Detector</span>
                      <span className="font-mono text-[12px]" style={{ color: 'var(--accent)' }}>11.3 / 100</span>
                    </div>
                    <div className="w-full h-1 rounded-full" style={{ background: 'var(--divider)' }}>
                      <motion.div
                        className="h-1 rounded-full"
                        style={{ background: 'var(--accent)' }}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '11.3%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <a
                      href="https://www.scam-detector.com/validator/blocklender-io-review/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] hover:underline block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      scam-detector.com/validator/blocklender-io-review ↗
                    </a>
                  </div>
                </div>

                <div className="pt-4 space-y-1" style={{ borderTop: '1px solid var(--divider)' }}>
                  <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    <Calendar size={11} className="inline mr-1.5" />
                    Domain created: 2026-03-06
                  </p>
                  <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    <Globe size={11} className="inline mr-1.5" />
                    Registrar: Namecheap Inc — IANA ID 1068
                  </p>
                  <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    <EyeOff size={11} className="inline mr-1.5" />
                    Owner: Withheld for Privacy ehf, Iceland
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part B — How The Scam Works */}
      <section id="how-it-works" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--divider)' }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--text-muted)' }}>
              THE METHOD
            </span>
            <h2 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none" style={{ color: 'var(--text-primary)' }}>
              HOW THEY STEAL YOUR{' '}
              <span style={{ color: 'var(--accent)' }}>XRP</span>
            </h2>
            <p className="font-body text-[15px] max-w-lg mx-auto mt-4 mb-16" style={{ color: 'var(--text-secondary)' }}>
              Four steps. Executed precisely. Targeting thousands of XRP holders.
            </p>
          </div>

          {/* Desktop grid with arrows */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <StepCardAndArrow key={i} step={step} Icon={Icon} index={i} isLast={i === 3} />
              )
            })}
          </div>

          {/* Mobile stack with down arrows */}
          <div className="md:hidden space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i}>
                  <motion.div
                    className="rounded-lg p-6 space-y-3"
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-[3px]"
                      style={{ color: 'var(--accent)', background: 'var(--accent-muted-bg)', border: '1px solid var(--accent-border)' }}
                    >
                      {step.step}
                    </div>
                    <Icon size={22} style={{ color: 'var(--accent)' }} />
                    <h3 className="font-body font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </h3>
                    <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                  </motion.div>
                  {i < 3 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown size={16} style={{ color: 'var(--text-muted)' }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

function StepCardAndArrow({ step, Icon, index, isLast }: {
  step: typeof steps[number]
  Icon: React.ElementType
  index: number
  isLast: boolean
}) {
  return (
    <>
      <motion.div
        className="rounded-lg p-6 space-y-3 flex flex-col"
        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        <div
          className="inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-[3px] self-start"
          style={{ color: 'var(--accent)', background: 'var(--accent-muted-bg)', border: '1px solid var(--accent-border)' }}
        >
          {step.step}
        </div>
        <Icon size={22} style={{ color: 'var(--accent)' }} />
        <h3 className="font-body font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>
          {step.title}
        </h3>
        <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {step.desc}
        </p>
      </motion.div>
      {!isLast && (
        <div className="flex items-center justify-center">
          <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
        </div>
      )}
    </>
  )
}
