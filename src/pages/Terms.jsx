import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Terms() {
  return (
    <div className="terms-page section">
      <div className="container" style={{ maxWidth: '840px' }}>
        <nav className="breadcrumb-nav" style={{ marginBottom: '1.5rem' }}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>Terms & Conditions</span>
        </nav>

        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
          Terms & Conditions
        </h1>
        <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
          Effective: Academic Year 2026–27 | ASPIRE Learning Centre, Andheri (E), Mumbai
        </p>

        <div style={{ color: 'var(--text-main)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>1. Offline Classroom Norms</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              ASPIRE Learning Centre operates an offline coaching model. Students are expected to maintain at least 85% attendance, bring printed study modules to class, and adhere to classroom discipline.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>2. Batch Allocation & Cap</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Batches are strictly capped at 20 to 25 students. Admissions are confirmed strictly on a first-come, first-served basis following academic counselling. Timing adjustments require written parent consent.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>3. Fee & Scholarship Rules</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Fee schedules, installment options, and scholarship concessions under ATSE are communicated transparently before final registration. Any fee receipt generated is recorded under the student's roll number.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.5rem' }}>4. Verified Achievements</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Enrolled students agree that verified achievements, percentiles, and board percentages can be celebrated by ASPIRE on official merit noticeboards and promotional literature with parental acknowledgement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
