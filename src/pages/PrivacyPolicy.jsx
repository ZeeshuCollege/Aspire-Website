import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page section">
      <div className="container" style={{ maxWidth: '840px' }}>
        <nav className="breadcrumb-nav" style={{ marginBottom: '1.5rem' }}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Privacy Policy</span>
        </nav>

        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
          Last Updated: September 15, 2026 | ASPIRE Learning Centre Official Policy
        </p>

        <div style={{ color: 'var(--text-main)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>1. Commitment to Privacy</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              ASPIRE Learning Centre ("ASPIRE", "we", "our") respects the privacy of prospective and enrolled students, parents, and website visitors. This Privacy Policy explains what information we collect via our official website and how that data is safeguarded.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>2. Information We Collect</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              We collect information voluntarily provided when you submit an Admission Enquiry, contact us via phone/WhatsApp, or request a demo session. This may include: student name, guardian name, contact telephone number, email address, school board, and current academic standard.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>3. Separation from Private Student App Data</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              As specified in Section 34 of our institutional requirements, the public website does NOT host or expose private student educational records, exam scores, biometric attendance logs, or fee payment history. Such information is isolated inside the authenticated private ASPIRE mobile ecosystem.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>4. Data Protection</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              We implement industry-standard encryption and security protocols. We never sell, rent, or trade student contact details to third-party advertisers or external telemarketers.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>5. Contact Information</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              For privacy-related questions, please contact our administrative coordinator at: <strong>aspirelearningcentre@outlook.com</strong> or visit Falah Building, Room No. 102, Near Darul Falah Masjid, Kausa, Mumbra, Thane – 400612.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
