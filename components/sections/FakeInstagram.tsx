'use client'

import { motion } from 'framer-motion'
import {
  AlertTriangle, CheckCircle, XCircle, Ban,
  Heart, Send, Bookmark, MessageCircle,
  ExternalLink, Eye, Users, Image, TrendingUp,
} from 'lucide-react'

const fakeHandles = [
  {
    handle: '@ripple.cto',
    impersonating: 'David Schwartz (Ripple CTO)',
    status: 'ACTIVE' as const,
    note: 'Currently active. Running ads linking to blocklender.io. Posting daily crypto news to appear legitimate.',
  },
  {
    handle: '@joelkatz_',
    impersonating: 'David Schwartz (JoelKatz)',
    status: 'BANNED' as const,
    note: 'Deactivated / banned. Was verified-impersonating David Schwartz with fake blue checkmark. Used for initial scam promotion.',
  },
  {
    handle: '@ripplecto_',
    impersonating: 'David Schwartz (Ripple CTO)',
    status: 'BANNED' as const,
    note: 'Deactivated / deleted. Duplicate impersonation account used to widen reach after primary account flagged.',
  },
  {
    handle: '@bradgarlinghouse_xrp',
    impersonating: 'Brad Garlinghouse (Ripple CEO)',
    status: 'BANNED' as const,
    note: 'Deactivated / deleted. Impersonated Ripple CEO Brad Garlinghouse to add another layer of false authority.',
  },
]

const tactics = [
  {
    icon: Users,
    title: 'Fake Followers & Engagement',
    desc: 'Accounts were inflated with thousands of purchased fake followers, likes, and comments to simulate a real, trusted profile.',
  },
  {
    icon: Image,
    title: 'Daily Crypto News Posts',
    desc: 'Operators posted real XRP/crypto news daily to build credibility over time, making the account appear like a genuine industry insider.',
  },
  {
    icon: Eye,
    title: 'Story Promotions',
    desc: 'Instagram Stories were used to push "Start Lending Now" links directly to blocklender.io, leveraging the urgency of a 24-hour expiring format.',
  },
  {
    icon: TrendingUp,
    title: 'Paid Instagram Ads',
    desc: 'Scammers ran paid advertisements through these accounts, reaching thousands of XRP holders who would never have found the site organically.',
  },
]

const statusStyles = {
  ACTIVE: {
    color: '#E24B4A',
    bg: 'rgba(226,75,74,0.1)',
    border: 'rgba(226,75,74,0.25)',
    label: 'STILL ACTIVE',
  },
  BANNED: {
    color: '#6B7280',
    bg: 'rgba(107,114,128,0.1)',
    border: 'rgba(107,114,128,0.25)',
    label: 'BANNED / DELETED',
  },
}

export default function FakeInstagram() {
  return (
    <section
      id="fake-accounts"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--divider)' }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--text-muted)' }}>
            IDENTITY FRAUD
          </span>
          <h2 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none" style={{ color: 'var(--text-primary)' }}>
            FAKE{' '}
            <span style={{ color: 'var(--accent)' }}>INSTAGRAM</span>
            {' '}ACCOUNTS
          </h2>
          <p className="font-body text-[15px] max-w-2xl mx-auto mt-4" style={{ color: 'var(--text-secondary)' }}>
            The operators created multiple fake Instagram accounts impersonating Ripple executives. They purchased fake followers, posted daily crypto news to appear legitimate, added fake likes and comments, and ran paid ads — all linking to blocklender.io.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Instagram Story Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[360px]">
              {/* FAKE badge overlay */}
              <div className="absolute -top-3 -right-3 z-20">
                <span
                  className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                  style={{ backgroundColor: 'var(--accent)', boxShadow: '0 2px 8px rgba(226,75,74,0.4)' }}
                >
                  FAKE ACCOUNT
                </span>
              </div>

              {/* Phone frame */}
              <div
                className="rounded-[24px] overflow-hidden"
                style={{ border: '3px solid var(--border)', backgroundColor: '#000' }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-1" style={{ backgroundColor: '#000' }}>
                  <span className="text-white text-[13px] font-semibold">7:35</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-[2px]">
                      <div className="w-[3px] h-[6px] bg-white rounded-[1px]" />
                      <div className="w-[3px] h-[8px] bg-white rounded-[1px]" />
                      <div className="w-[3px] h-[10px] bg-white/40 rounded-[1px]" />
                      <div className="w-[3px] h-[12px] bg-white/40 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Story progress bar */}
                <div className="px-2 pt-1">
                  <div className="h-[2px] rounded-full bg-white/30">
                    <div className="h-full w-1/3 rounded-full bg-white" />
                  </div>
                </div>

                {/* Profile header */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center overflow-hidden">
                      <span className="text-white text-[11px] font-bold">DS</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-white text-[13px] font-semibold">ripple.cto</span>
                        <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="#3897f0">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.4 14.6l-4.2-4.2 1.4-1.4 2.8 2.8 5.6-5.6 1.4 1.4-7 7z"/>
                        </svg>
                      </div>
                      <span className="text-gray-400 text-[11px]">21h</span>
                    </div>
                  </div>
                  <button className="text-white/80 text-[13px] font-semibold border border-white/30 rounded-lg px-4 py-1">
                    Follow
                  </button>
                </div>

                {/* Ripple logo badge */}
                <div className="px-4 pb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">X</span>
                    </div>
                    <span className="text-blue-400 text-[12px] font-medium">Ripple</span>
                  </div>
                </div>

                {/* Story content */}
                <div className="px-6 py-8 min-h-[320px] flex flex-col justify-center" style={{ backgroundColor: '#111' }}>
                  <p className="text-white text-[22px] leading-[1.4] font-light">
                    Lending XRP is safe &amp; easy.
                    <br />Your XRP stays XRP.
                    <br />Your yield is paid in XRP.
                  </p>
                  <p className="text-white text-[22px] leading-[1.4] font-light mt-6">
                    The best time to put your XRP
                    <br />to work was yesterday.
                    <br />The second best time is now.
                  </p>

                  {/* Visit link card */}
                  <div className="mt-8 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-2.5 flex items-center gap-3">
                      <div>
                        <p className="text-white text-[13px] font-semibold">Visit link</p>
                        <p className="text-white/60 text-[11px]">blocklender.io</p>
                      </div>
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 flex justify-center">
                    <div className="bg-[#2C2C2C] rounded-full px-6 py-3 flex items-center gap-2">
                      <ExternalLink size={14} className="text-white" />
                      <span className="text-white text-[15px] font-semibold">Start Lending Now</span>
                    </div>
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="flex items-center justify-between px-4 py-4" style={{ backgroundColor: '#000' }}>
                  <div className="flex-1">
                    <div className="border border-white/20 rounded-full px-4 py-2">
                      <span className="text-white/40 text-[13px]">Send message...</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <Heart size={22} className="text-white" />
                    <Send size={22} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Warning annotation */}
              <div
                className="mt-4 p-3 rounded-lg"
                style={{ borderLeft: '2px solid var(--accent)', backgroundColor: 'var(--bg-card)' }}
              >
                <p className="font-mono text-[11px] uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
                  <AlertTriangle size={11} className="inline mr-1" />
                  CURRENTLY ACTIVE SCAM ACCOUNT
                </p>
                <p className="font-body text-[12px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  This Instagram story from <strong style={{ color: 'var(--text-primary)' }}>@ripple.cto</strong> links directly to blocklender.io. The account impersonates Ripple CTO David Schwartz using his photo, the Ripple brand, and a fake verification badge.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Account list + tactics */}
          <div className="space-y-8">
            {/* Fake handles list */}
            <div>
              <h3 className="font-body font-semibold text-[16px] mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Ban size={16} style={{ color: 'var(--accent)' }} />
                Documented Fake Accounts
              </h3>
              <div className="space-y-3">
                {fakeHandles.map((account, i) => {
                  const style = statusStyles[account.status]
                  return (
                    <motion.div
                      key={account.handle}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg p-4"
                      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: style.bg, border: `1px solid ${style.border}` }}
                          >
                            {account.status === 'ACTIVE' ? (
                              <AlertTriangle size={14} style={{ color: style.color }} />
                            ) : (
                              <XCircle size={14} style={{ color: style.color }} />
                            )}
                          </div>
                          <div>
                            <p className="font-mono text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                              {account.handle}
                            </p>
                            <p className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
                              Impersonating: {account.impersonating}
                            </p>
                          </div>
                        </div>
                        <span
                          className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap"
                          style={{ color: style.color, background: style.bg, border: `1px solid ${style.border}` }}
                        >
                          {style.label}
                        </span>
                      </div>
                      <p className="font-body text-[12px] leading-relaxed ml-10" style={{ color: 'var(--text-secondary)' }}>
                        {account.note}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Scam tactics breakdown */}
            <div>
              <h3 className="font-body font-semibold text-[16px] mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Eye size={16} style={{ color: 'var(--accent)' }} />
                How They Made It Look Real
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tactics.map((tactic, i) => {
                  const Icon = tactic.icon
                  return (
                    <motion.div
                      key={tactic.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg p-4"
                      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                    >
                      <Icon size={18} style={{ color: 'var(--accent)' }} className="mb-2" />
                      <p className="font-body font-semibold text-[13px] mb-1" style={{ color: 'var(--text-primary)' }}>
                        {tactic.title}
                      </p>
                      <p className="font-body text-[12px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {tactic.desc}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Warning callout */}
            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'var(--accent-muted-bg)', border: '1px solid var(--accent-border)' }}
            >
              <p className="font-body font-semibold text-[14px] mb-2 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
                <AlertTriangle size={14} />
                Warning: @ripple.cto Is Still Active
              </p>
              <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                As of June 2026, the account <strong style={{ color: 'var(--text-primary)' }}>@ripple.cto</strong> remains active on Instagram and continues to post content linking to blocklender.io. If you see this account, <strong style={{ color: 'var(--text-primary)' }}>do not interact with it</strong>. Report it to Instagram for impersonation. David Schwartz does not operate any Instagram account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
