import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for blocklender.info. Learn how we handle data submitted through our scam reporting form. No personal data is stored. All submissions are anonymous.',
  alternates: { canonical: 'https://blocklender.info/privacy' },
}

export default function PrivacyPage() {
  const lastUpdated = 'May 26, 2026'

  return (
    <main className="min-h-screen pt-24 pb-20 px-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest mb-12 transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={14} />
          Back to Main Page
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} style={{ color: 'var(--accent)' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
              LEGAL DOCUMENT
            </span>
          </div>
          <h1 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none mb-4" style={{ color: 'var(--text-primary)' }}>
            PRIVACY{' '}
            <span style={{ color: 'var(--accent)' }}>POLICY</span>
          </h1>
          <p className="font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">

          <Section number="01" title="Introduction">
            <p>
              blocklender.info (&quot;this website&quot;, &quot;we&quot;, &quot;us&quot;) is a public interest consumer protection website that documents evidence of fraudulent activity by the platform known as Blocklender.io. This Privacy Policy explains what information is collected when you visit this website or submit a report, how that information is used, and your rights regarding your data.
            </p>
            <p>
              We are committed to protecting the privacy of every visitor. This website does not require registration, does not create user accounts, and does not track individual users across sessions.
            </p>
          </Section>

          <Section number="02" title="Information We Collect">
            <h4 className="font-body font-semibold text-[14px] mb-2" style={{ color: 'var(--text-primary)' }}>
              2.1 — Information You Voluntarily Provide
            </h4>
            <p>
              When you submit a scam report through our reporting form, you may optionally provide the following information:
            </p>
            <ul>
              <li>A username (Reddit, X, or Telegram handle) — optional</li>
              <li>The amount lost — optional</li>
              <li>A transaction hash or blockchain explorer URL — optional</li>
              <li>How you discovered Blocklender.io — optional</li>
              <li>A written description of your experience — optional</li>
            </ul>
            <p>
              All fields in the report form are optional. You are not required to provide any identifying information to submit a report. Submissions are designed to be anonymous by default.
            </p>

            <h4 className="font-body font-semibold text-[14px] mt-6 mb-2" style={{ color: 'var(--text-primary)' }}>
              2.2 — Information Collected Automatically
            </h4>
            <p>
              This website does not use cookies, tracking pixels, analytics scripts, fingerprinting technologies, or any third-party tracking services. We do not use Google Analytics, Facebook Pixel, or any equivalent tracking tool. No personally identifiable information is collected automatically during your visit.
            </p>
          </Section>

          <Section number="03" title="How We Use Information">
            <p>
              Information submitted through the scam report form is used exclusively for the following purposes:
            </p>
            <ul>
              <li>To document and verify reports of fraud by Blocklender.io</li>
              <li>To strengthen the public evidence record against the operators of Blocklender.io</li>
              <li>To assist law enforcement or regulatory bodies if they request information related to this fraud</li>
              <li>To identify patterns of fraudulent behavior that may help warn future potential victims</li>
            </ul>
            <p>
              Report data is transmitted via an encrypted connection (HTTPS) and delivered as a private notification to the site administrator. Reports are not published on the website, are not shared publicly, and are not accessible to any third party unless required by law.
            </p>
          </Section>

          <Section number="04" title="Data Storage and Retention">
            <p>
              This website does not operate a database. Submitted reports are delivered as real-time notifications and are not stored on any server operated by this website. No persistent storage of user-submitted data exists on our infrastructure.
            </p>
            <p>
              The administrator may retain report notifications for the purpose of compiling evidence for law enforcement referrals. Any such retention is handled with appropriate care and is not shared with commercial third parties.
            </p>
          </Section>

          <Section number="05" title="Data Sharing and Third Parties">
            <p>
              We do not sell, rent, license, or trade any user data to any third party for any purpose. We do not share data with advertisers, data brokers, marketing companies, or any commercial entity.
            </p>
            <p>
              Report information may be shared with the following parties only when necessary:
            </p>
            <ul>
              <li><strong>Law enforcement agencies</strong> — such as the FBI, FTC, or local cybercrime units — if they formally request information as part of an investigation into Blocklender.io</li>
              <li><strong>Regulatory bodies</strong> — such as the SEC, CFTC, or equivalent international financial regulators — if required as part of a formal fraud investigation</li>
              <li><strong>Blockchain forensics organizations</strong> — such as XRPL Forensics — if the submitter&apos;s transaction data can help trace stolen funds</li>
            </ul>
            <p>
              In all cases, only the minimum information necessary will be shared, and only for the purpose of pursuing accountability for fraud.
            </p>
          </Section>

          <Section number="06" title="Cookies and Tracking">
            <p>
              This website does not use cookies of any kind — no session cookies, no persistent cookies, no third-party cookies, and no tracking cookies. We do not use local storage, session storage, or any browser-based data persistence mechanism to track visitors.
            </p>
            <p>
              The only client-side storage used is for the dark/light theme preference, which is handled by the browser and does not transmit any data to any server.
            </p>
          </Section>

          <Section number="07" title="Children's Privacy">
            <p>
              This website is not directed at children under the age of 13 (or 16 in jurisdictions where GDPR applies). We do not knowingly collect any information from children. If you believe a child has submitted a report, contact us and we will take appropriate steps to delete any associated data.
            </p>
          </Section>

          <Section number="08" title="Your Rights">
            <p>
              Depending on your jurisdiction, you may have the following rights regarding any data you have submitted:
            </p>
            <ul>
              <li><strong>Right to access</strong> — You may request confirmation of whether we hold any data related to your submission</li>
              <li><strong>Right to deletion</strong> — You may request that any data associated with your submission be deleted</li>
              <li><strong>Right to rectification</strong> — You may request correction of inaccurate information in your submission</li>
              <li><strong>Right to restriction</strong> — You may request that your submitted data not be used for any specific purpose</li>
            </ul>
            <p>
              Since submissions are anonymous by default and we do not store data in a searchable database, exercising these rights may require you to provide identifying details about your original submission so we can locate it.
            </p>
          </Section>

          <Section number="09" title="International Users">
            <p>
              This website is accessible globally. If you are located in the European Economic Area (EEA), United Kingdom, or any jurisdiction with data protection laws (including GDPR, UK GDPR, CCPA, PIPEDA, or equivalent), the legal basis for processing any data you voluntarily submit is your explicit consent — provided when you click the &quot;Submit Your Report&quot; button.
            </p>
            <p>
              You may withdraw this consent at any time by contacting us to request deletion of your submission.
            </p>
          </Section>

          <Section number="10" title="Security">
            <p>
              All data transmitted through this website is protected using industry-standard TLS/SSL encryption (HTTPS). The report submission form communicates with a secure API endpoint. We take reasonable measures to protect any submitted information from unauthorized access, alteration, or disclosure.
            </p>
            <p>
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security of data transmitted to this website.
            </p>
          </Section>

          <Section number="11" title="External Links">
            <p>
              This website contains links to external websites and resources, including government agencies (FTC, FBI IC3), independent fraud databases (ScamAdviser, Scam-Detector), blockchain forensics tools (XRPL Forensics), and community forums (Reddit). We are not responsible for the privacy practices or content of any external websites. We encourage you to review the privacy policies of any external site you visit.
            </p>
          </Section>

          <Section number="12" title="Changes to This Policy">
            <p>
              We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page with an updated &quot;Last updated&quot; date. Continued use of this website after any changes constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section number="13" title="Contact">
            <p>
              If you have any questions about this Privacy Policy, wish to exercise your data rights, or need to report a concern, you may submit a message through the report form on the main page. All inquiries will be reviewed by the site administrator.
            </p>
          </Section>

        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 flex flex-wrap gap-6 justify-between items-center" style={{ borderTop: '1px solid var(--divider)' }}>
          <Link
            href="/"
            className="font-mono text-[12px] transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
          >
            &larr; Back to Main Page
          </Link>
          <Link
            href="/legal"
            className="font-mono text-[12px] transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
          >
            Legal Disclaimer &rarr;
          </Link>
        </div>

      </div>
    </main>
  )
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--accent)' }}>
          {number}
        </span>
        <h2 className="font-display text-[24px] sm:text-[28px]" style={{ color: 'var(--text-primary)' }}>
          {title.toUpperCase()}
        </h2>
      </div>
      <div
        className="space-y-3 font-body text-[14px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:font-semibold"
        style={{ color: 'var(--text-secondary)' }}
      >
        {children}
      </div>
    </section>
  )
}
