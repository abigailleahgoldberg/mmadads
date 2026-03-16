import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | MMA Dads',
  description: 'FTC-compliant affiliate disclosure for MMA Dads.',
};

export default function AffiliateDisclosurePage() {
  return (
    <main style={{ background: '#080E18', color: '#EEE8DC', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E8A020', marginBottom: '0.5rem' }}>
          Affiliate Disclosure
        </h1>
        <p style={{ color: '#EEE8DC', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: 'rgba(15,28,46,0.8)', border: '1px solid rgba(232,160,32,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            In compliance with the Federal Trade Commission (FTC) guidelines, MMA Dads discloses that this website participates in affiliate marketing programs. This means we may earn a commission when you click on certain links and make a purchase.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            What This Means for You
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.75rem' }}>Some links on this site are affiliate links. If you click through and make a purchase, we may receive a commission from the seller.</li>
            <li style={{ marginBottom: '0.75rem' }}>This comes at <strong>no additional cost to you</strong> — you pay the same price you would normally.</li>
            <li style={{ marginBottom: '0.75rem' }}>Affiliate relationships <strong>do not influence our recommendations or editorial content</strong>. We only recommend products and services we believe are genuinely useful.</li>
            <li style={{ marginBottom: '0.75rem' }}>Affiliate links may be present in articles, reviews, and resource pages across this site.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Our Commitment
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We are committed to transparency. Affiliate income helps us maintain and grow MMA Dads as a free resource for the MMA community. We appreciate your support when you use our links, but we always prioritize honest content over commissions.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Questions?
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            If you have questions about our affiliate relationships, contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#E8A020' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
