'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, ShieldAlert, ExternalLink, ArrowRight, Loader2 } from 'lucide-react'

const authorities = [
  { name: 'FTC — Report Fraud', url: 'https://reportfraud.ftc.gov' },
  { name: 'FBI — Internet Crime Complaint Center', url: 'https://www.ic3.gov' },
  { name: 'XRPL Forensics — Report Scam Wallet', url: 'https://xrpl.org/report-a-scam.html' },
  { name: 'ScamAdviser — Submit a Report', url: 'https://www.scamadviser.com/check-website/blocklender.io' },
]

const inputBase = 'w-full font-mono text-[13px] px-4 py-3 rounded-[4px] outline-none transition-all duration-200'

export default function ReportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const [username, setUsername] = useState('')
  const [amount, setAmount] = useState('')
  const [source, setSource] = useState('')
  const [txHash, setTxHash] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, amount, source, txHash, description }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Failed to submit report. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="report" className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--divider)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-3" style={{ color: 'var(--text-muted)' }}>
            TAKE ACTION
          </span>
          <h2 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none" style={{ color: 'var(--text-primary)' }}>
            WERE YOU{' '}
            <span style={{ color: 'var(--accent)' }}>AFFECTED</span>?
          </h2>
          <p className="font-body text-[15px] max-w-lg mx-auto mt-4" style={{ color: 'var(--text-secondary)' }}>
            Your documented report is public record. Every confirmed case makes it harder for these operators to disappear without consequence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h3 className="font-body font-semibold text-[16px] mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Send size={16} style={{ color: 'var(--accent)' }} />
              Submit Your Report
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-lg p-8 text-center space-y-3"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--accent-border)' }}
              >
                <div className="font-display text-[28px]" style={{ color: 'var(--accent)' }}>REPORT RECEIVED</div>
                <p className="font-body text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                  Your report has been documented. Every submission strengthens the public record against these operators.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Reddit, X, or Telegram username — optional"
                    className={inputBase}
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.07 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Amount lost — e.g. 500 XRP or $1,200 USD — optional"
                    className={inputBase}
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.14 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    placeholder="Transaction hash or blockchain explorer URL — optional"
                    className={inputBase}
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.21 }}
                  viewport={{ once: true }}
                >
                  <select
                    className={inputBase}
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  >
                    <option value="" disabled>
                      How did you find Blocklender.io?
                    </option>
                    <option value="Instagram ad or post">Instagram ad or post</option>
                    <option value="Reddit">Reddit</option>
                    <option value="X (Twitter)">X (Twitter)</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Google search">Google search</option>
                    <option value="Someone referred me">Someone referred me</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.28 }}
                  viewport={{ once: true }}
                >
                  <textarea
                    rows={5}
                    placeholder="Describe exactly what happened — how you found it, what you deposited, what happened when you tried to withdraw, any communications you received."
                    className={`${inputBase} resize-none`}
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </motion.div>

                {error && (
                  <p className="font-mono text-[12px] text-center" style={{ color: 'var(--accent)' }}>
                    {error}
                  </p>
                )}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 rounded-[4px] font-body font-semibold text-sm uppercase tracking-widest transition-all duration-200 text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    {sending ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        SUBMIT YOUR REPORT
                      </>
                    )}
                  </button>
                </motion.div>

                <p className="font-mono text-[11px] text-center mt-3" style={{ color: 'var(--text-muted)' }}>
                  No personal data is stored. Submissions are anonymous.
                </p>
              </form>
            )}
          </div>

          {/* Authority Links */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>
              <ShieldAlert size={12} className="inline mr-2" />
              REPORT TO OFFICIAL AUTHORITIES
            </p>

            <div className="space-y-3">
              {authorities.map((auth) => (
                <a
                  key={auth.name}
                  href={auth.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 rounded-lg transition-all duration-200 group"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <ExternalLink size={14} style={{ color: 'var(--accent)' }} className="flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                      {auth.name}
                    </p>
                    <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                      {auth.url}
                    </p>
                  </div>
                  <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
                </a>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-lg"
              style={{ borderLeft: '2px solid var(--accent)', backgroundColor: 'var(--bg-card)' }}
            >
              <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                If you are in India, you can also report at cybercrime.gov.in. In the UK, report to Action Fraud at actionfraud.police.uk. All reports build the public record against these operators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
