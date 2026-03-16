import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | MMA Dads',
  description: 'DMCA copyright policy and takedown notice information for MMA Dads.',
};

export default function DmcaPage() {
  return (
    <main style={{ background: '#080E18', color: '#EEE8DC', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E8A020', marginBottom: '0.5rem' }}>
          DMCA Policy
        </h1>
        <p style={{ color: '#EEE8DC', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: 'rgba(15,28,46,0.8)', border: '1px solid rgba(232,160,32,0.2)', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            MMA Dads respects the intellectual property rights of others and expects users of this site to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond promptly to claims of copyright infringement.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            DMCA Agent
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            <strong>Designated Agent:</strong> The Voice of Cash<br />
            <strong>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#E8A020' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Filing a DMCA Takedown Notice
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            If you believe content on this site infringes your copyright, please send a written notice to our DMCA Agent containing the following:
          </p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.75rem' }}>A physical or electronic signature of the copyright owner or an authorized agent.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the copyrighted work claimed to have been infringed.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the material that is claimed to be infringing, with enough detail to locate it on our site (URL preferred).</li>
            <li style={{ marginBottom: '0.75rem' }}>Your contact information: name, address, telephone number, and email address.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the owner&apos;s behalf.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Counter-Notification
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            If you believe material was removed in error, you may submit a counter-notification to our DMCA Agent containing:
          </p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.75rem' }}>Your physical or electronic signature.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the material that was removed and the location where it appeared before removal.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement, under penalty of perjury, that you have a good faith belief the material was removed as a result of mistake or misidentification.</li>
            <li style={{ marginBottom: '0.75rem' }}>Your name, address, telephone number, and a statement consenting to the jurisdiction of the federal court in your district.</li>
          </ol>
          <p style={{ lineHeight: 1.8, marginTop: '1rem' }}>
            Upon receipt of a valid counter-notification, we will restore the material within 10–14 business days unless the original complainant files a court action.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#E8A020', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(232,160,32,0.2)' }}>
            Repeat Infringers
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            We reserve the right to terminate accounts or access for users who are found to be repeat infringers of copyright.
          </p>
        </section>
      </div>
    </main>
  );
}
