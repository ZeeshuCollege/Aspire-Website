import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CtaBanner.css';

export default function CtaBanner({ onOpenEnquiry }) {
  return (
    <section className="cta-banner-wrap">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Ready to Build Your Future?</h2>
            <p className="cta-banner-desc">
              Join Aspire Learning Centre and take the first step towards your dreams.
            </p>
          </div>

          <div className="cta-banner-actions">
            <button 
              onClick={() => onOpenEnquiry()} 
              className="btn btn-white btn-lg cta-enroll-btn"
            >
              Enroll Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
