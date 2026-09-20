import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  AlertCircle
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { updatesData } from '../data/updatesData';
import './Updates.css';

export default function Updates({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeNotice, setActiveNotice] = useState(null);

  const categories = ['All', 'Admissions', 'Scholarship', 'Academic', 'Events'];

  const filteredUpdates = updatesData.filter((u) => {
    if (selectedCategory === 'All') return true;
    return u.category === selectedCategory;
  });

  return (
    <div className="updates-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="sparkles" text="Notices & Bulletins" variant="blue" />
          <h1 className="page-header-title">Institute Announcements</h1>
          <p className="page-header-subtitle">
            Stay up to date with new batch inaugurations, scholarship examination dates (ATSE), mock test timetables, and academic guidelines.
          </p>
        </div>
      </section>

      {/* Notices List */}
      <section className="section">
        <div className="container">
          <div className="updates-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`update-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="updates-list-container">
            {filteredUpdates.map((item) => (
              <div 
                key={item.id} 
                className={`update-card-item ${item.urgent ? 'urgent-item' : ''}`}
                onClick={() => setActiveNotice(item)}
              >
                <div className="update-meta-row">
                  <div className="update-tags">
                    <span className={`badge badge-${item.badgeColor}`}>
                      {item.category}
                    </span>
                    {item.urgent && (
                      <span className="urgent-badge">
                        <AlertCircle size={12} /> Action Required
                      </span>
                    )}
                  </div>
                  <span className="update-date-text">
                    <Calendar size={13} /> {item.date}
                  </span>
                </div>

                <h3 className="update-card-title">{item.title}</h3>
                <p className="update-card-summary">{item.summary}</p>

                <div className="update-card-action">
                  <span className="read-more-link">
                    Read Official Notice <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Modal */}
      {activeNotice && (
        <div className="modal-backdrop" onClick={() => setActiveNotice(null)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content-wrap">
              <span className={`badge badge-${activeNotice.badgeColor}`}>
                {activeNotice.category} Notice
              </span>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', margin: '0.75rem 0' }}>
                {activeNotice.title}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: '1.25rem' }}>
                Published: {activeNotice.date} | Official ASPIRE Circular
              </p>

              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '2rem' }}>
                <p>{activeNotice.summary}</p>
                <p style={{ marginTop: '1rem' }}>
                  All registered students and parents are requested to review the schedule. For any clarifications, please contact the admissions desk at Sunrise Complex, Andheri (E) or call <a href="tel:+917021220449" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>+91 70212 20449</a>.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => { setActiveNotice(null); onOpenEnquiry(); }} className="btn btn-primary btn-md">
                  Enquire / Register Now
                </button>
                <button onClick={() => setActiveNotice(null)} className="btn btn-secondary btn-md">
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
