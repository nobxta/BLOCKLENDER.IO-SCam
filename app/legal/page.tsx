import type { Metadata } from 'next'
import Link from 'next/link'
import { Scale, ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Disclaimer',
  description: 'Legal disclaimer, source attribution, and applicable criminal law information for blocklender.info. This site documents publicly available evidence of fraud by Blocklender.io.',
  alternates: { canonical: 'https://blocklender.info/legal' },
}

export default function LegalPage() {
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
            <Scale size={20} style={{ color: 'var(--accent)' }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
              LEGAL DOCUMENT
            </span>
          </div>
          <h1 className="font-display text-[42px] sm:text-[52px] md:text-[64px] leading-none mb-4" style={{ color: 'var(--text-primary)' }}>
            LEGAL{' '}
            <span style={{ color: 'var(--accent)' }}>DISCLAIMER</span>
          </h1>
          <p className="font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">

          <Section number="01" title="Purpose of This Website">
            <p>
              blocklender.info is a public interest consumer protection website. Its sole purpose is to document, organize, and present publicly available evidence that the platform known as Blocklender.io (https://blocklender.io) is operating a fraudulent cryptocurrency scheme targeting holders of XRP (the digital asset native to the XRP Ledger).
            </p>
            <p>
              This website exists to warn potential victims before they deposit funds, to provide a reporting channel for those already affected, and to create a permanent public record that can be referenced by law enforcement, regulators, and the crypto community.
            </p>
            <p>
              This website does not provide legal advice, financial advice, investment advice, or professional consultation of any kind. Nothing on this website should be construed as a recommendation to take or refrain from taking any specific legal action.
            </p>
          </Section>

          <Section number="02" title="Sources of Information">
            <p>
              Every claim, statistic, and factual assertion on this website is sourced exclusively from publicly available information. No proprietary, hacked, leaked, or unlawfully obtained data is used. Sources include:
            </p>
            <ul>
              <li><strong>WHOIS records</strong> — publicly accessible domain registration data for blocklender.io, obtained through standard WHOIS lookup tools. This data confirms the domain was registered via Namecheap using a privacy service (Withheld for Privacy ehf, Reykjavik, Iceland) on March 6, 2026.</li>
              <li><strong>ScamAdviser.com</strong> — an independent, publicly accessible scam detection database that assigned Blocklender.io a trust score of 6 out of 100, classified as &quot;Extremely Low Trust.&quot;</li>
              <li><strong>Scam-Detector.net</strong> — an independent fraud analysis service that assigned Blocklender.io a legitimacy score of 11.3 out of 100.</li>
              <li><strong>Reddit public forums</strong> — victim reports and community warnings posted publicly on subreddits including r/XRPUnite, r/CryptoScams, and related communities. These posts were made voluntarily by the authors and are publicly accessible.</li>
              <li><strong>X (Twitter) public posts</strong> — public statements by David Schwartz (@JoelKatz), Chief Technology Officer of Ripple and co-architect of the XRP Ledger, warning the community about scam platforms impersonating him.</li>
              <li><strong>XRP Ledger transaction data</strong> — publicly viewable blockchain transaction records that are inherently transparent and accessible to anyone.</li>
              <li><strong>Blocklender.io itself</strong> — claims, marketing material, and promises published by the platform on its own website and social media channels before the site went offline (HTTP 403).</li>
            </ul>
          </Section>

          <Section number="03" title="Fair Use and Public Interest">
            <p>
              The content on this website constitutes fair comment, criticism, and public interest reporting on a matter of significant consumer concern. The publication of this information is protected under:
            </p>
            <ul>
              <li><strong>First Amendment (United States)</strong> — The right to free speech, including the right to publish factual criticism, consumer warnings, and commentary on matters of public interest.</li>
              <li><strong>Fair comment and honest opinion doctrines</strong> — Where opinions are expressed, they are clearly identified as such and are based on stated facts that the reader can independently verify.</li>
              <li><strong>Public interest defense</strong> — The operators of Blocklender.io solicited public funds through public advertising on social media platforms. Any entity that publicly solicits investment is subject to public scrutiny and criticism.</li>
              <li><strong>Anti-SLAPP protections</strong> — In jurisdictions where Anti-SLAPP (Strategic Lawsuit Against Public Participation) statutes exist, this website&apos;s content constitutes protected activity, and any legal action intended to silence this reporting may be subject to Anti-SLAPP motions and fee-shifting.</li>
            </ul>
          </Section>

          <Section number="04" title="No Affiliation">
            <p>
              blocklender.info has no affiliation, association, partnership, endorsement, or connection of any kind with:
            </p>
            <ul>
              <li>Blocklender.io or any of its operators, developers, or promoters</li>
              <li>Ripple Labs, Inc. or any of its officers or employees</li>
              <li>David Schwartz (@JoelKatz) personally</li>
              <li>The XRP Ledger Foundation or any associated entity</li>
              <li>Any law enforcement agency, regulatory body, or government entity</li>
              <li>Any cryptocurrency exchange, lending platform, or financial institution</li>
            </ul>
            <p>
              References to these entities and individuals are made solely in the context of documenting publicly available information relevant to the Blocklender.io fraud.
            </p>
          </Section>

          <Section number="05" title="Criminal Law Applicable to Blocklender.io">
            <p>
              The documented activities of Blocklender.io may constitute violations of multiple criminal statutes across multiple jurisdictions. The following is a non-exhaustive summary of potentially applicable laws:
            </p>

            <LawBlock
              jurisdiction="United States — Federal"
              laws={[
                { name: '18 U.S.C. § 1343 — Wire Fraud', description: 'Using interstate or international communications (websites, social media, messaging apps) to execute a scheme to defraud. Punishable by up to 20 years imprisonment per count.' },
                { name: '18 U.S.C. § 1030 — Computer Fraud and Abuse Act (CFAA)', description: 'Unauthorized access to computer systems or exceeding authorized access to obtain financial data, commit fraud, or cause damage. Applicable if the withdrawal redirection involved unauthorized manipulation of user transactions.' },
                { name: '18 U.S.C. § 1028 — Identity Fraud', description: 'Creating fake social media accounts impersonating a real person (David Schwartz / @JoelKatz) for the purpose of committing fraud. Punishable by up to 15 years imprisonment.' },
                { name: '18 U.S.C. § 1956 — Money Laundering', description: 'Conducting financial transactions with proceeds of fraud. If stolen XRP was converted, mixed, or transferred to obscure its origin, money laundering charges may apply. Punishable by up to 20 years imprisonment.' },
                { name: '18 U.S.C. § 1341 — Mail Fraud', description: 'If any physical mailings, printed materials, or postal communications were used to promote Blocklender.io. Punishable by up to 20 years imprisonment.' },
                { name: 'Securities Exchange Act — Section 10(b) / Rule 10b-5', description: 'If XRP deposits or the "yield" offered by Blocklender.io are deemed securities or investment contracts, the operators may have violated federal securities fraud statutes by making materially false statements to investors.' },
              ]}
            />

            <LawBlock
              jurisdiction="United States — State Level"
              laws={[
                { name: 'State Consumer Protection Acts', description: 'Every U.S. state has consumer protection statutes prohibiting deceptive trade practices, false advertising, and fraud. Victims in any state can file complaints with their state Attorney General.' },
                { name: 'State Money Transmitter Laws', description: 'Operating a platform that accepts, holds, and transmits cryptocurrency may require a money transmitter license in most states. Operating without one is a criminal offense in many jurisdictions.' },
              ]}
            />

            <LawBlock
              jurisdiction="European Union"
              laws={[
                { name: 'Directive 2011/36/EU — Fraud and Financial Crime', description: 'EU member states are required to criminalize fraud involving financial instruments and digital assets. Cross-border crypto fraud may trigger cooperation between Europol, Eurojust, and national law enforcement.' },
                { name: 'Markets in Crypto-Assets Regulation (MiCA)', description: 'As of 2024, crypto-asset service providers operating in the EU must be licensed and comply with strict conduct requirements. Operating an unlicensed platform that solicits EU residents may constitute a criminal offense.' },
                { name: 'GDPR — Data Protection', description: 'If the operators collected personal information from EU residents without lawful basis, they may have violated GDPR in addition to fraud statutes.' },
              ]}
            />

            <LawBlock
              jurisdiction="United Kingdom"
              laws={[
                { name: 'Fraud Act 2006 — Sections 2, 3, and 4', description: 'Fraud by false representation (fake Instagram accounts, fake endorsements), fraud by failing to disclose information (hidden ownership, no licensing), and fraud by abuse of position (redirecting withdrawals). Each offense carries up to 10 years imprisonment.' },
                { name: 'Financial Services and Markets Act 2000 (FSMA)', description: 'Operating an unauthorized investment scheme targeting UK residents. The FCA (Financial Conduct Authority) has jurisdiction over crypto investment services marketed to UK consumers.' },
                { name: 'Proceeds of Crime Act 2002', description: 'Enables seizure and recovery of criminal proceeds, including cryptocurrency. Applicable if stolen XRP can be traced.' },
              ]}
            />

            <LawBlock
              jurisdiction="India"
              laws={[
                { name: 'Indian Penal Code — Section 420 (Cheating and Dishonesty)', description: 'Cheating and dishonestly inducing delivery of property. Applicable to crypto fraud targeting Indian residents. Punishable by up to 7 years imprisonment.' },
                { name: 'Information Technology Act, 2000 — Section 66D', description: 'Cheating by impersonation using a computer resource. Directly applicable to the fake Instagram impersonation of David Schwartz. Punishable by up to 3 years imprisonment.' },
                { name: 'Information Technology Act, 2000 — Section 66C', description: 'Identity theft using electronic means. Applicable to the creation of fake social media profiles. Punishable by up to 3 years imprisonment.' },
              ]}
            />

            <LawBlock
              jurisdiction="International"
              laws={[
                { name: 'INTERPOL — Financial Crime Division', description: 'INTERPOL coordinates cross-border financial crime investigations. Crypto fraud operations like Blocklender.io that target victims across multiple countries may be referred to INTERPOL for international cooperation.' },
                { name: 'Budapest Convention on Cybercrime (2001)', description: 'The primary international treaty on cybercrime, ratified by 68 countries. Provides a legal framework for cross-border investigation and prosecution of online fraud, computer fraud, and identity theft.' },
                { name: 'Financial Action Task Force (FATF) Guidelines', description: 'FATF member countries are required to regulate virtual asset service providers and enforce anti-money laundering (AML) requirements. Operating an unregistered crypto platform violates FATF guidelines in all member jurisdictions.' },
              ]}
            />
          </Section>

          <Section number="06" title="Types of Criminal Activity Documented">
            <p>
              Based on publicly available evidence, the operators of Blocklender.io appear to have engaged in the following categories of criminal conduct:
            </p>
            <div className="space-y-4 mt-4">
              <CrimeCard
                title="Investment Fraud / Ponzi Scheme"
                description="Promising a guaranteed 12% annual return on XRP deposits with no disclosed investment strategy, no audited financials, and no regulatory licensing. Guaranteed returns on volatile assets are a hallmark of Ponzi schemes."
              />
              <CrimeCard
                title="Identity Theft and Impersonation"
                description="Creating a fake verified Instagram account under the username joelkatz_ to impersonate Ripple CTO David Schwartz. This fake endorsement was used to build false credibility and lure victims into depositing funds."
              />
              <CrimeCard
                title="Theft by Deception (Withdrawal Redirection)"
                description="When victims attempted to withdraw their XRP, the platform silently redirected funds to a wallet address controlled by the scammers instead of the address the victim entered. This constitutes theft by deception — the victim believed they were withdrawing to their own wallet."
              />
              <CrimeCard
                title="Fraudulent Advertising"
                description="Using paid advertisements on Instagram and other platforms, paid press releases on TechBullion and Bitcoin.com, and AI-generated promotional content to create an appearance of legitimacy for a fraudulent platform."
              />
              <CrimeCard
                title="Evidence Destruction and Obstruction"
                description="Systematically deleting the platform website (now returning HTTP 403), removing social media accounts, deleting Reddit threads, and erasing all public-facing evidence. This pattern of evidence destruction may constitute obstruction of justice in jurisdictions where investigations are underway."
              />
              <CrimeCard
                title="Operating Without Financial Licensing"
                description="Accepting deposits and offering yield on cryptocurrency without holding any money transmitter license, securities registration, or financial services authorization in any jurisdiction. This is a criminal offense in most countries."
              />
            </div>
          </Section>

          <Section number="07" title="Accuracy and Corrections">
            <p>
              We make every effort to ensure the accuracy of information presented on this website. All facts are verifiable through the publicly available sources cited above.
            </p>
            <p>
              If any factual inaccuracy is identified, we will promptly investigate and correct it. Requests for corrections should include specific identification of the claimed inaccuracy and verifiable evidence supporting the correction.
            </p>
            <p>
              Opinions and characterizations (such as describing Blocklender.io as a &quot;scam&quot;) are based on the totality of documented evidence and represent fair comment on a matter of public interest.
            </p>
          </Section>

          <Section number="08" title="Takedown and Removal Requests">
            <p>
              This website publishes factual public interest reporting based on verified, publicly available sources. We do not honor removal requests from:
            </p>
            <ul>
              <li>Anonymous parties who cannot demonstrate standing</li>
              <li>Parties claiming to represent Blocklender.io without verified legal identity</li>
              <li>Automated DMCA or takedown generators</li>
              <li>Threats of legal action that do not identify specific factual inaccuracies</li>
            </ul>
            <p>
              Legitimate legal correspondence must be sent by a verified legal representative, must identify specific factual claims alleged to be false, and must provide verifiable evidence demonstrating the alleged falsity. General demands to &quot;remove everything&quot; or &quot;take down the site&quot; without substantive basis will be treated as attempted censorship of public interest reporting and may be published as evidence of intimidation.
            </p>
          </Section>

          <Section number="09" title="How Victims Can Take Legal Action">
            <p>
              If you have been defrauded by Blocklender.io, you have the right to pursue legal action. The following steps are recommended:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Preserve all evidence immediately.</strong> Screenshot all transaction records, wallet addresses, account balances, email communications, social media messages, and any other interactions with Blocklender.io or its operators.
              </li>
              <li>
                <strong>File a report with your national cybercrime unit.</strong> In the United States, file with the FBI at ic3.gov. In the UK, file with Action Fraud at actionfraud.police.uk. In India, file at cybercrime.gov.in.
              </li>
              <li>
                <strong>Report to financial regulators.</strong> In the US, report to the FTC at reportfraud.ftc.gov and the SEC at sec.gov/tcr. In the EU, contact your national financial authority. In the UK, report to the FCA.
              </li>
              <li>
                <strong>Report the scam wallet to XRPL Forensics.</strong> Submit the destination wallet address that received your stolen XRP at xrpl.org/report-a-scam.html. This helps the community flag and track scammer wallets.
              </li>
              <li>
                <strong>Consult a lawyer specializing in cryptocurrency fraud.</strong> Depending on the amount lost and your jurisdiction, civil recovery or class action options may be available.
              </li>
              <li>
                <strong>Submit your report on this website.</strong> Your documented experience strengthens the public evidence record and may assist law enforcement investigations.
              </li>
            </ol>
          </Section>

          <Section number="10" title="Limitation of Liability">
            <p>
              This website is provided &quot;as is&quot; without warranty of any kind, express or implied. blocklender.info, its administrators, contributors, and hosting providers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of this website, reliance on information presented, or inability to access the website.
            </p>
            <p>
              This website does not guarantee the outcome of any legal action, regulatory investigation, or fund recovery effort. The information provided is for educational and informational purposes only.
            </p>
          </Section>

          <Section number="11" title="Governing Law">
            <p>
              This website operates as a public interest publication. Any disputes arising from the content of this website shall be governed by the laws of the jurisdiction in which the site administrator is located, without regard to conflict of law principles.
            </p>
            <p>
              For the avoidance of doubt: the operators of Blocklender.io, who operate under complete anonymity with no disclosed legal entity, jurisdiction, or registered agent, lack standing to bring claims in any court without first identifying themselves and their legal basis.
            </p>
          </Section>

        </div>

        {/* Reporting callout */}
        <div
          className="mt-16 p-6 rounded-lg"
          style={{ borderLeft: '3px solid var(--accent)', backgroundColor: 'var(--bg-card)' }}
        >
          <p className="font-body font-semibold text-[15px] mb-2" style={{ color: 'var(--text-primary)' }}>
            Were you affected by Blocklender.io?
          </p>
          <p className="font-body text-[13px] leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            Your report strengthens the public record. Every documented case makes it harder for these operators to disappear without consequence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#report"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest px-5 py-2.5 rounded-[4px] text-white transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Submit a Report
            </Link>
            <a
              href="https://www.ic3.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest px-5 py-2.5 rounded-[4px] transition-colors duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <ExternalLink size={12} />
              FBI IC3
            </a>
            <a
              href="https://reportfraud.ftc.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest px-5 py-2.5 rounded-[4px] transition-colors duration-200"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <ExternalLink size={12} />
              FTC Report
            </a>
          </div>
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
            href="/privacy"
            className="font-mono text-[12px] transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
          >
            Privacy Policy &rarr;
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

function LawBlock({ jurisdiction, laws }: { jurisdiction: string; laws: { name: string; description: string }[] }) {
  return (
    <div className="mt-6 rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      <div className="px-5 py-3" style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
        <h4 className="font-body font-semibold text-[13px] uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>
          {jurisdiction}
        </h4>
      </div>
      <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
        {laws.map((law) => (
          <div key={law.name} className="px-5 py-4" style={{ borderColor: 'var(--border)' }}>
            <p className="font-mono text-[12px] font-semibold mb-1" style={{ color: 'var(--accent)' }}>
              {law.name}
            </p>
            <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {law.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CrimeCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="p-5 rounded-lg"
      style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <p className="font-body font-semibold text-[14px] mb-2" style={{ color: 'var(--text-primary)' }}>
        {title}
      </p>
      <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  )
}
