import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Map, Home, Shield, FileText, Scale, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap — All Pages',
  description: 'Complete sitemap of blocklender.info. Browse all pages documenting the Blocklender.io crypto scam including evidence, victim reports, legal information, and privacy policy.',
  alternates: { canonical: 'https://blocklender.info/sitemap-page' },
  openGraph: {
    title: 'Sitemap — blocklender.info',
    description: 'Browse all pages on blocklender.info documenting the Blocklender.io crypto scam.',
    url: 'https://blocklender.info/sitemap-page',
    type: 'website',
  },
}

const pages = [
  {
    href: '/',
    icon: Home,
    title: 'Home — Blocklender.io Scam Exposure',
    description: 'Full scam report with evidence, victim testimonials, WHOIS data, and independent trust scores.',
  },
  {
    href: '/#what-is-this',
    icon: Shield,
    title: 'What Is Blocklender.io',
    description: 'Background on the fraudulent platform, how it presented itself, and why it is classified as a scam.',
  },
  {
    href: '/#how-it-works',
    icon: Shield,
    title: 'How The Scam Works',
    description: 'Step-by-step breakdown of the four-phase fraud operation used by Blocklender.io operators.',
  },
  {
    href: '/#evidence',
    icon: Shield,
    title: 'The Evidence File',
    description: '8 documented red flags including ScamAdviser scores, Ripple CTO warning, victim reports, and WHOIS data.',
  },
  {
    href: '/#report',
    icon: FileText,
    title: 'Submit a Scam Report',
    description: 'Anonymous reporting form for Blocklender.io victims. Links to official authorities (FTC, FBI IC3, XRPL Forensics).',
  },
  {
    href: '/legal',
    icon: Scale,
    title: 'Legal Disclaimer',
    description: 'Source attribution, fair use defense, applicable criminal law by jurisdiction, and victim action guide.',
  },
  {
    href: '/privacy',
    icon: Lock,
    title: 'Privacy Policy',
    description: 'How we handle submitted data. No cookies, no tracking, no database. All submissions are anonymous.',
  },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest mb-12 transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={14} />
          Back to Main Page
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Map size={20} style={{ color: 'var(--accent)' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
              NAVIGATION
            </span>
          </div>
          <h1 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none mb-4" style={{ color: 'var(--text-primary)' }}>
            SITE<span style={{ color: 'var(--accent)' }}>MAP</span>
          </h1>
          <p className="font-body text-[15px]" style={{ color: 'var(--text-secondary)' }}>
            All pages on blocklender.info — documenting evidence of the Blocklender.io cryptocurrency scam.
          </p>
        </header>

        <nav aria-label="Full sitemap navigation">
          <div className="space-y-3">
            {pages.map((page) => {
              const Icon = page.icon
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-start gap-4 px-5 py-4 rounded-lg transition-all duration-200 group"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <Icon size={16} style={{ color: 'var(--accent)' }} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                      {page.title}
                    </p>
                    <p className="font-body text-[13px] mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {page.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </nav>

        <div className="mt-12 pt-8 flex flex-wrap gap-6 justify-between items-center" style={{ borderTop: '1px solid var(--divider)' }}>
          <Link href="/" className="font-mono text-[12px] transition-colors duration-200" style={{ color: 'var(--text-muted)' }}>
            &larr; Back to Main Page
          </Link>
          <a
            href="/sitemap.xml"
            className="font-mono text-[12px] transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            XML Sitemap &rarr;
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://blocklender.info" },
                { "@type": "ListItem", "position": 2, "name": "Sitemap", "item": "https://blocklender.info/sitemap-page" }
              ]
            })
          }}
        />
      </div>
    </main>
  )
}
