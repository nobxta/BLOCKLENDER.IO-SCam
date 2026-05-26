import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, Home, FileText, Scale, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found — 404',
  description: 'This page does not exist on blocklender.info. Navigate back to the main scam exposure report on Blocklender.io.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-lg text-center space-y-8">
        <div className="flex justify-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--accent-muted-bg)', border: '1px solid var(--accent-border)' }}
          >
            <AlertTriangle size={28} style={{ color: 'var(--accent)' }} />
          </div>
        </div>

        <div>
          <h1 className="font-display text-[64px] leading-none mb-2" style={{ color: 'var(--accent)' }}>
            404
          </h1>
          <p className="font-display text-[28px]" style={{ color: 'var(--text-primary)' }}>
            PAGE NOT FOUND
          </p>
          <p className="font-body text-[15px] mt-4" style={{ color: 'var(--text-secondary)' }}>
            The page you are looking for does not exist. Use the links below to navigate back to the Blocklender.io scam report.
          </p>
        </div>

        <nav aria-label="Site navigation from 404 page">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 px-5 py-4 rounded-lg transition-all duration-200 group"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <Home size={16} style={{ color: 'var(--accent)' }} />
              <div className="text-left">
                <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                  Scam Report Home
                </p>
                <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  Full evidence documented
                </p>
              </div>
            </Link>
            <Link
              href="/#evidence"
              className="flex items-center gap-3 px-5 py-4 rounded-lg transition-all duration-200 group"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <Shield size={16} style={{ color: 'var(--accent)' }} />
              <div className="text-left">
                <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                  View Evidence
                </p>
                <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  8 documented red flags
                </p>
              </div>
            </Link>
            <Link
              href="/#report"
              className="flex items-center gap-3 px-5 py-4 rounded-lg transition-all duration-200 group"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <FileText size={16} style={{ color: 'var(--accent)' }} />
              <div className="text-left">
                <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                  Submit a Report
                </p>
                <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  Were you affected?
                </p>
              </div>
            </Link>
            <Link
              href="/legal"
              className="flex items-center gap-3 px-5 py-4 rounded-lg transition-all duration-200 group"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <Scale size={16} style={{ color: 'var(--accent)' }} />
              <div className="text-left">
                <p className="font-body font-semibold text-[14px] group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                  Legal Disclaimer
                </p>
                <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
                  Criminal law breakdown
                </p>
              </div>
            </Link>
          </div>
        </nav>

        <p className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          blocklender.info — Consumer protection reporting
        </p>
      </div>
    </main>
  )
}
