import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | MMA Dads',
  description: 'Important disclaimers for MMA Dads content including health, betting, and editorial disclosures.',
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: '#080E18', color: '#EEE8DC', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E8A020', marginBottom: '0.5rem' }}>
          Disclaimer
        </h1>
        <p style={{ color: '#EEE8DC', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: 'rgba(15,28,46,0.8)', border: '1px solid rgba(232,160,32,0.3)', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, fontWeight: 600, color: '#E8A020' }}>
            Please read this disclaimer carefully before using MMA Dads (mmadads.com).
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Health &amp; Medical Disclaimer
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We are not licensed physicians, athletic trainers, nutritionists, or medical professionals. Content on this website related to training, nutrition, fitness, or fight preparation is provided for general informational purposes only. Nothing on this site constitutes professional medical or health advice. Always consult a qualified healthcare provider before beginning any training program, diet, or physical activity regimen.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Sports Analysis &amp; Predictions
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Fight analysis, predictions, and commentary published on MMA Dads are for entertainment purposes only and do not constitute professional sports advice. Our opinions reflect personal viewpoints and should not be used as the basis for financial, wagering, or any other decisions.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Betting &amp; Gambling Disclaimer
          </h2>
          <div style={{ background: 'rgba(232,160,32,0.08)', border: '1px solid rgba(232,160,32,0.3)', borderRadius: '6px', padding: '1rem', marginBottom: '1rem' }}>
            <p style={{ lineHeight: 1.8, fontWeight: 600 }}>
              ️ Betting content on this site is for entertainment purposes only. We do not encourage or facilitate illegal gambling.
            </p>
          </div>
          <p style={{ lineHeight: 1.8 }}>
            Odds, lines, and betting information are provided for informational and entertainment purposes only. Please gamble responsibly. Gambling can be addictive and harmful. If you or someone you know has a gambling problem, call <strong>1-800-GAMBLER</strong> (1-800-426-2537) for free, confidential support available 24/7.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            AI-Generated Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Some content on this website may be created or assisted by artificial intelligence tools. While we strive for accuracy, AI-generated content may contain errors, outdated information, or inaccuracies. We encourage readers to verify important information through authoritative sources.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            External Links
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of any third-party sites. The inclusion of any link does not imply endorsement by MMA Dads.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Contact
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Questions about this disclaimer? Contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#E8A020' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
