import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/ui/theme-provider'
import './globals.css'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://blocklender.info'),
  title: {
    default: 'Is Blocklender.io a Scam? Yes — Full Proof | blocklender.info',
    template: '%s | blocklender.info'
  },
  description: 'Blocklender.io is a confirmed crypto scam targeting XRP holders. Fake Instagram, fake ads, impossible 12% APR. Victims lost $24,000+. Flagged by Ripple CTO David Schwartz. ScamAdviser: 6/100.',
  keywords: [
    // Branded searches
    'blocklender', 'blocklender.io', 'blocklender.info', 'block lender',
    'blocklender.io scam', 'blocklender scam',
    // Trust / review searches
    'is blocklender.io a scam', 'is blocklender.io legit', 'is blocklender legit',
    'is blocklender.io real', 'is blocklender.io safe', 'is blocklender safe',
    'blocklender.io review', 'blocklender.io review 2026', 'blocklender review',
    'blocklender.io honest review', 'blocklender.io scam or legit',
    'blocklender real or fake', 'blocklender trustworthy',
    'should i use blocklender.io', 'can i trust blocklender',
    // Negative defense (people searching after seeing the scam)
    'blocklender.io not a scam', 'blocklender.io legitimate',
    'blocklender.io verified', 'blocklender proof',
    // How-to / informational
    'how blocklender.io works', 'how blocklender scam works',
    'how to report blocklender', 'how to get money back from blocklender',
    'blocklender withdrawal', 'blocklender.io withdrawal blocked',
    // Comparison / alternative
    'blocklender vs xrp lending', 'blocklender.io alternative',
    'blocklender.io vs real lending', 'safe XRP lending platforms',
    // Fraud specifics
    'blocklender.io fraud', 'blocklender.io fake', 'blocklender.io trust score',
    'blocklender.io joelkatz warning', 'blocklender.io namecheap anonymous',
    'blocklender.io 403 error', 'blocklender fake instagram david schwartz',
    'blocklender fake ads', 'blocklender.io scamadviser 6 out of 100',
    'blocklender.io scam detector 11.3', 'blocklender 12 percent APR scam',
    // XRP / crypto scam keywords
    'XRP yield scam 2026', 'XRP lending scam', 'XRP ledger scam platform',
    'fake XRP lending platform', 'crypto lending scam 2026',
    'crypto scam XRP holders', 'XRP fake APR scam',
    'fake 12 percent crypto yield', 'crypto exit scam 2026', 'XRP ponzi scheme',
    // Victim intent
    'blocklender victim reports', 'blocklender lost money',
    'blocklender withdrawal redirect scam', 'blocklender.io reddit warning',
    'blocklender.io ripple cto warning',
  ],
  authors: [{ name: 'blocklender.info', url: 'https://blocklender.info' }],
  creator: 'blocklender.info',
  publisher: 'blocklender.info',
  category: 'Consumer Protection',
  classification: 'Scam Warning, Cryptocurrency Fraud, Public Interest',
  openGraph: {
    title: 'Blocklender.io is a Confirmed XRP Scam — blocklender.info',
    description: 'Fake Instagram. Fake ads. Impossible 12% APR. Real theft. Victims lost $24,000+. Flagged by Ripple CTO @JoelKatz. ScamAdviser: 6/100. Full evidence.',
    url: 'https://blocklender.info',
    siteName: 'blocklender.info',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blocklender.io Scam Exposed — Full evidence documented at blocklender.info',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Blocklender.io a Scam? Yes — Full Proof',
    description: 'Confirmed XRP scam. Fake Instagram. Withdrawal redirect. $24,000+ stolen. Flagged by Ripple CTO David Schwartz. ScamAdviser 6/100.',
    images: ['/og-image.png'],
    creator: '@blocklenderinfo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://blocklender.info',
    languages: {
      'en': 'https://blocklender.info',
      'x-default': 'https://blocklender.info',
    },
  },
  verification: {
    google: 'add-your-google-search-console-verification-code-here',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="theme-color" content="#080A0D" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#F8F6F3" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-TileColor" content="#080A0D" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
