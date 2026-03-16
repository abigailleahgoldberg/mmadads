import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | MMA Dads',
  description: 'Get in touch with the MMA Dads team.',
};

export default function ContactPage() {
  return (
    <main style={{ background: '#080E18', color: '#EEE8DC', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E8A020', marginBottom: '0.5rem' }}>
          Contact Us
        </h1>
        <p style={{ color: '#EEE8DC', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          How can we help?
        </p>

        <div style={{ background: 'rgba(15,28,46,0.8)', border: '1px solid rgba(232,160,32,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Whether you have a question about our content, want to report an issue, have a tip on a fighter or event, or just want to connect — we&apos;d love to hear from you.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            <strong style={{ color: '#E8A020' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#E8A020', textDecoration: 'none' }}>
              thevoiceofcash@gmail.com
            </a>
          </p>
        </div>

        <div style={{ background: 'rgba(15,28,46,0.5)', border: '1px solid rgba(232,160,32,0.1)', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem' }}>
            What We Can Help With
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Content corrections or updates</li>
            <li style={{ marginBottom: '0.5rem' }}>Fighter or event tips</li>
            <li style={{ marginBottom: '0.5rem' }}>Advertising and partnership inquiries</li>
            <li style={{ marginBottom: '0.5rem' }}>DMCA or copyright concerns</li>
            <li style={{ marginBottom: '0.5rem' }}>General feedback</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
