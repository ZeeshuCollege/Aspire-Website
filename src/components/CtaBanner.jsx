import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import './CtaBanner.css';

export default function CtaBanner({ onOpenEnquiry }) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
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
                onClick={onOpenEnquiry} 
                className="btn btn-white btn-lg cta-enroll-btn"
              >
                Enroll Now <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => setVideoOpen(true)}
                className="cta-video-trigger"
                aria-label="Watch video tour"
              >
                <div className="video-play-icon-wrap">
                  <Play size={18} fill="#ffffff" color="#ffffff" className="play-icon-offset" />
                </div>
                <div className="video-trigger-text">
                  <span className="video-trigger-title">Watch Our Video</span>
                  <span className="video-trigger-sub">See what makes us different</span>
                </div>
                <div className="video-thumb-preview">
                  <img 
                    src="/images/cta-video-thumb.png" 
                    alt="ASPIRE Centre Video Preview" 
                    className="video-thumb-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div className="modal-backdrop" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setVideoOpen(false)}>
              <X size={20} />
            </button>
            <div className="video-modal-content">
              <div className="video-screen-mockup">
                <div className="video-overlay-info">
                  <span className="badge badge-blue">ASPIRE Campus Tour</span>
                  <h3>A Day in the Life at ASPIRE Learning Centre</h3>
                  <p>Step inside our smart classrooms, interact with our faculty, and discover our focused offline environment in Andheri (E), Mumbai.</p>
                  <div className="video-features-chips">
                    <span>✓ Interactive Classrooms</span>
                    <span>✓ 1-on-1 Doubt Desk</span>
                    <span>✓ CBT Simulation Lab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
