import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import './globals.css'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-display' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://blocklender.info'),
  title: {
    default: 'blocklender.info — Is Blocklender.io a Scam? Yes. Full Proof.',
    template: '%s | blocklender.info'
  },
  description: 'Blocklender.io is a confirmed crypto scam targeting XRP holders. Fake Instagram accounts, fake ads, AI-generated content, and an impossible 12% APR promise were used to steal funds. Victims have lost $24,000+. Flagged by Ripple CTO David Schwartz. ScamAdviser score 6/100. Scam-Detector score 11.3/100. Do not deposit.',
  keywords: [
    'blocklender.io scam',
    'blocklender scam',
    'is blocklender.io a scam',
    'is blocklender.io legit',
    'is blocklender.io real',
    'is blocklender.io safe',
    'blocklender.io review 2026',
    'blocklender.io fraud',
    'blocklender.io fake',
    'blocklender.io withdrawal blocked',
    'blocklender XRP scam',
    'blocklender 12 percent APR scam',
    'blocklender.io trust score',
    'blocklender.io joelkatz warning',
    'blocklender.io namecheap anonymous',
    'blocklender.io 403 error',
    'blocklender fake instagram david schwartz',
    'blocklender fake ads',
    'blocklender.io scamadviser 6 out of 100',
    'blocklender.io scam detector 11.3',
    'XRP yield scam 2026',
    'XRP lending scam',
    'XRP ledger scam platform',
    'fake XRP lending platform',
    'crypto lending scam 2026',
    'crypto scam XRP holders',
    'XRP fake APR scam',
    'fake 12 percent crypto yield',
    'crypto exit scam 2026',
    'XRP ponzi scheme',
    'blocklender victim reports',
    'blocklender lost money',
    'blocklender withdrawal redirect scam',
    'https://blocklender.io scam',
    'blocklender.io scam or real',
    'blocklender.io honest review',
    'should i use blocklender.io',
    'blocklender.io reddit warning',
    'blocklender.io ripple cto warning',
  ],
  authors: [{ name: 'blocklender.info', url: 'https://blocklender.info' }],
  creator: 'blocklender.info',
  publisher: 'blocklender.info',
  category: 'Consumer Protection, Crypto Fraud, Public Warning',
  classification: 'Scam Warning, Cryptocurrency Fraud, Public Interest',
  openGraph: {
    title: 'blocklender.info — Blocklender.io is a Confirmed XRP Scam',
    description: 'Fake Instagram. Fake ads. Impossible 12% APR. Real theft. Victims lost $24,000+. Flagged by Ripple CTO @JoelKatz. ScamAdviser: 6/100. Full evidence documented.',
    url: 'https://blocklender.info',
    siteName: 'blocklender.info',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'blocklender.info — Blocklender.io Scam Exposed',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Blocklender.io a Scam? Yes — blocklender.info',
    description: 'Confirmed XRP scam. Fake Instagram. Withdrawal redirect. $24,000+ stolen. Flagged by Ripple CTO. Full proof at blocklender.info',
    images: ['/og-image.png'],
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
  },
  verification: {
    google: 'add-your-google-search-console-verification-code-here',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="canonical" href="https://blocklender.info" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#080A0D" />
        <meta name="msapplication-TileColor" content="#080A0D" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
