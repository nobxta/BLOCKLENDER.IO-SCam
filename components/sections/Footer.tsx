'use client'

import Link from 'next/link'

export default function Footer() {
  const externalLinks = [
    { label: 'FTC Report', url: 'https://reportfraud.ftc.gov' },
    { label: 'FBI IC3', url: 'https://www.ic3.gov' },
    { label: 'XRPL Forensics', url: 'https://xrpl.org/report-a-scam.html' },
    { label: 'Reddit r/XRPUnite', url: 'https://www.reddit.com/r/XRPUnite/' },
  ]

  const siteLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Legal Disclaimer', href: '/legal' },
  ]

  return (
    <footer className="py-12 px-6" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--divider)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
          <div className="font-display text-xl tracking-widest">
            <span style={{ color: 'var(--text-primary)' }}>EXPO</span>
            <span style={{ color: 'var(--accent)' }}>SED</span>
          </div>

          <div className="flex gap-6 flex-wrap">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
            <span className="hidden sm:inline font-mono text-[12px]" style={{ color: 'var(--border)' }}>|</span>
            {siteLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-[12px] transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid var(--divider)' }}>
          <p className="font-mono text-[11px] leading-relaxed text-center" style={{ color: 'var(--text-muted)' }}>
            &copy; 2026 blocklender.info — Published for public consumer protection only. All information is sourced from publicly available WHOIS records, independent scam detection databases, Reddit forums, and official social media posts. blocklender.info is not affiliated with, endorsed by, or connected to Blocklender.io or any associated entity. Anonymous operators have no standing to demand removal of factual public interest reporting.
          </p>
        </div>
      </div>
    </footer>
  )
}
