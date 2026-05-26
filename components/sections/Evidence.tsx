'use client'

import { motion } from 'framer-motion'
import {
  AlertTriangle, Shield, MessageSquare, Globe,
  ArrowLeftRight, DollarSign, ExternalLink, Terminal,
} from 'lucide-react'

const badgeStyles = {
  CRITICAL: {
    color: 'var(--accent)',
    background: 'var(--accent-muted-bg)',
    border: '1px solid var(--accent-border)',
  },
  VERIFIED: {
    color: '#378ADD',
    background: 'rgba(55,138,221,0.1)',
    border: '1px solid rgba(55,138,221,0.25)',
  },
  COMMUNITY: {
    color: '#BA7517',
    background: 'rgba(186,117,23,0.1)',
    border: '1px solid rgba(186,117,23,0.25)',
  },
}

const evidenceRows = [
  {
    icon: AlertTriangle,
    badge: 'CRITICAL' as const,
    title: 'Ripple CTO David Schwartz (@JoelKatz) publicly flagged Blocklender.io as suspicious on X',
    url: 'https://x.com/joelkatz/status/2054722017321173421',
  },
  {
    icon: Shield,
    badge: 'CRITICAL' as const,
    title: 'ScamAdviser assigned Blocklender.io a trust score of 6 out of 100 — classified Extremely Low Trust',
    url: 'https://www.scamadviser.com/check-website/blocklender.io',
  },
  {
    icon: Shield,
    badge: 'CRITICAL' as const,
    title: 'Scam-Detector assigned a score of 11.3 out of 100 — classified Very High Risk across 53 factors',
    url: 'https://www.scam-detector.com/validator/blocklender-io-review/',
  },
  {
    icon: MessageSquare,
    badge: 'COMMUNITY' as const,
    title: 'Reddit r/XRPUnite community raised fraud concerns — original thread subsequently deleted by operators',
    url: 'https://www.reddit.com/r/XRPUnite/comments/1rpyxmd/blocklender_io_xrp_yield_12/',
  },
  {
    icon: Globe,
    badge: 'VERIFIED' as const,
    title: 'Domain registered 2026-03-06 anonymously via Namecheap using Withheld for Privacy ehf, Reykjavik Iceland — owner completely hidden',
    url: 'https://www.whois.com/whois/blocklender.io',
  },
  {
    icon: ArrowLeftRight,
    badge: 'CRITICAL' as const,
    title: 'Victim u/md0tk confirmed XRP was redirected to a different destination tag than entered — funds sent to scammer wallet, unrecoverable',
    url: 'https://www.reddit.com/r/XRPUnite/comments/1rpyxmd/',
  },
  {
    icon: DollarSign,
    badge: 'CRITICAL' as const,
    title: 'Victim u/Sneakyone369 confirmed loss of $24,000 USD in XRP — \'its a scam i lost 24k\'',
    url: 'https://www.reddit.com/r/XRPUnite/comments/1rpyxmd/',
  },
  {
    icon: DollarSign,
    badge: 'CRITICAL' as const,
    title: 'Estimated total losses exceed $500,000 USD across multiple victims — most did not publicly report due to shame, small amounts, or fear of exposure',
    url: 'https://www.reddit.com/r/XRPUnite/comments/1rpyxmd/',
  },
]

const whoisData = [
  ['DOMAIN', 'blocklender.io'],
  ['CREATED', '2026-03-06T03:34:47.65Z'],
  ['UPDATED', '2026-04-13T19:24:18.38Z'],
  ['EXPIRES', '2028-03-06T03:34:47.65Z'],
  ['REGISTRAR', 'NAMECHEAP INC — IANA ID: 1068'],
  ['REGISTRANT NAME', 'Redacted for Privacy'],
  ['ORGANIZATION', 'Withheld for Privacy ehf'],
  ['LOCATION', 'Kalkofnsvegur 2, Reykjavik, Capital Region, IS'],
  ['REGISTRANT EMAIL', '@withheldforprivacy.com'],
  ['NAMESERVER 1', 'dora.ns.cloudflare.com'],
  ['NAMESERVER 2', 'elliott.ns.cloudflare.com'],
  ['DNSSEC', 'unsigned'],
  ['STATUS', 'clientTransferProhibited'],
]

const victimCards = [
  {
    username: 'Sneakyone369',
    initials: 'SN',
    avatarBg: 'rgba(226,75,74,0.15)',
    avatarColor: 'var(--accent)',
    timeAgo: '5d ago',
    quote: 'its a scam i lost 24k. pull what you can but small amounts its a scam',
    loss: '$24,000 USD IN XRP',
  },
  {
    username: 'md0tk',
    initials: 'MD',
    avatarBg: 'rgba(55,138,221,0.15)',
    avatarColor: '#378ADD',
    timeAgo: '22d ago',
    quote: 'They literally sent my XRP to another destination tag, not my destination tag that I entered when I withdrew. Each attempt was denied while I was communicating with their support. My XRP is gone. It now looks like I sent my XRP somewhere I didn\'t — their hands are clean. They are literally impersonating David Schwartz on Instagram with a verified checkmark. Anyone reading this, beware of blocklender and any other scam sites like this.',
    loss: null,
  },
  {
    username: 'North-Decision-1882',
    initials: 'ND',
    avatarBg: 'rgba(186,117,23,0.15)',
    avatarColor: '#BA7517',
    timeAgo: '3mo ago',
    quote: 'Ive been trying to take the small amount out and so far being denied.',
    loss: null,
  },
  {
    username: 'HEATHENSCENT',
    initials: 'HC',
    avatarBg: 'rgba(20,184,166,0.15)',
    avatarColor: '#14B8A6',
    timeAgo: '3mo ago',
    quote: 'site only registered less than a week ago, abnormally high APR... sounds a little sus to me. Also David Schwartz has an IG account under username joelkatz_ — I couldn\'t tell you if both accounts are real as both are verified.',
    loss: null,
  },
  {
    username: 'OtherwiseLand6110',
    initials: 'OL',
    avatarBg: 'rgba(139,92,246,0.15)',
    avatarColor: '#8B5CF6',
    timeAgo: '2mo ago',
    quote: 'The site is a scam. Don\'t use it. If you can\'t withdraw your money it\'s obviously a scam.',
    loss: null,
  },
]

export default function Evidence() {
  return (
    <section id="evidence" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--text-muted)' }}>
          DOCUMENTED PROOF
        </span>
        <h2 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none" style={{ color: 'var(--text-primary)' }}>
          THE{' '}
          <span style={{ color: 'var(--accent)' }}>EVIDENCE</span>
          {' '}FILE
        </h2>
        <p className="font-body text-[15px] mt-4 mb-12" style={{ color: 'var(--text-secondary)' }}>
          Every item below is sourced from a publicly verifiable record. Click any row to open the original source.
        </p>

        {/* Evidence Rows */}
        <div style={{ borderTop: '1px solid var(--divider)' }}>
          {evidenceRows.map((row, index) => {
            const Icon = row.icon
            const style = badgeStyles[row.badge]
            return (
              <motion.a
                key={index}
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 cursor-pointer group transition-all duration-200"
                style={{ borderBottom: '1px solid var(--divider)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.005 }}
              >
                <div
                  className="w-10 h-10 rounded-[6px] flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent-muted-bg)', border: '1px solid var(--accent-border)' }}
                >
                  <Icon size={16} style={{ color: 'var(--accent)' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                    {row.title}
                  </p>
                  <p className="font-mono text-[11px] truncate mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {row.url}
                  </p>
                </div>

                <span
                  className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full flex-shrink-0 hidden sm:inline-block"
                  style={style}
                >
                  {row.badge}
                </span>

                <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} className="flex-shrink-0" />
              </motion.a>
            )
          })}
        </div>

        {/* WHOIS Terminal */}
        <div className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
            <Terminal size={12} className="inline mr-2" />
            VERIFIED DOMAIN REGISTRATION RECORD — WHOIS DATA
          </p>
          <div
            className="rounded-lg p-6 font-mono text-[12px] leading-[2] overflow-x-auto"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            {whoisData.map(([key, value]) => (
              <div key={key} className="flex gap-4">
                <span className="flex-shrink-0 w-44" style={{ color: 'var(--text-muted)' }}>{key}:</span>
                <span style={{ color: 'var(--text-primary)' }}>{value}</span>
              </div>
            ))}
          </div>

          <div
            className="mt-4 pl-4"
            style={{ borderLeft: '2px solid var(--accent)' }}
          >
            <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The operator of Blocklender.io deliberately hidden every identifying detail behind a privacy service based in Iceland. No name, no email address, and no physical address is traceable. This is the standard configuration used by scam operators who intend to vanish after defrauding victims.
            </p>
          </div>
        </div>

        {/* Victim Reports */}
        <div className="mt-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--text-muted)' }}>
            VICTIM REPORTS
          </span>
          <h3 className="font-display text-[42px] md:text-[52px] leading-none" style={{ color: 'var(--text-primary)' }}>
            REAL PEOPLE. REAL LOSSES.
          </h3>
          <p className="font-body text-[14px] mt-4 mb-10" style={{ color: 'var(--text-secondary)' }}>
            The following are verbatim quotes posted publicly on Reddit by victims of Blocklender.io. All usernames are original. The source thread was later deleted. These represent only a fraction of total victims — most never reported publicly. Estimated total losses exceed $500,000.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {victimCards.map((card, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-5 space-y-3"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold flex-shrink-0"
                    style={{ background: card.avatarBg, color: card.avatarColor }}
                  >
                    {card.initials}
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[12px]" style={{ color: 'var(--text-primary)' }}>u/{card.username}</span>
                    <span className="font-mono text-[10px] ml-2" style={{ color: 'var(--text-muted)' }}>Reddit · {card.timeAgo}</span>
                  </div>
                </div>

                <blockquote
                  className="font-body text-[13px] leading-relaxed italic"
                  style={{ color: 'var(--text-secondary)', borderLeft: '2px solid var(--divider)', paddingLeft: '12px' }}
                >
                  &ldquo;{card.quote}&rdquo;
                </blockquote>

                {card.loss && (
                  <span
                    className="inline-block font-mono text-[11px] px-3 py-1 rounded-[3px]"
                    style={{ color: 'var(--accent)', background: 'var(--accent-muted-bg)', border: '1px solid var(--accent-border)' }}
                  >
                    REPORTED LOSS: {card.loss}
                  </span>
                )}
              </motion.div>
            ))}

            {/* Thread exchange card */}
            <motion.div
              className="md:col-span-2 rounded-lg p-5"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[11px] mb-3" style={{ color: 'var(--text-muted)' }}>
                REDDIT THREAD EXCHANGE — 15 DAYS AGO
              </p>

              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold flex-shrink-0"
                  style={{ background: 'rgba(234,179,8,0.15)', color: '#EAB308' }}
                >
                  LM
                </div>
                <span className="font-mono text-[12px]" style={{ color: 'var(--text-primary)' }}>u/Least-Mistake-6903</span>
              </div>
              <p className="font-body text-[13px] italic" style={{ color: 'var(--text-secondary)' }}>
                &ldquo;Shits real&rdquo;
              </p>

              <div className="pl-4 ml-4 mt-3" style={{ borderLeft: '2px solid var(--divider)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold flex-shrink-0"
                    style={{ background: 'rgba(226,75,74,0.15)', color: 'var(--accent)' }}
                  >
                    SN
                  </div>
                  <span className="font-mono text-[12px]" style={{ color: 'var(--text-primary)' }}>u/Sneakyone369</span>
                  <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>replied</span>
                </div>
                <p className="font-body text-[13px] italic" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;its fake&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
