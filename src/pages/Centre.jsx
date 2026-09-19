import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Monitor, 
  BookOpen, 
  GraduationCap, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { centreData } from '../data/centreData';
import './Centre.css';

export default function Centre({ onOpenEnquiry }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="centre-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="pin" text="Infrastructure & Campus Tour" variant="blue" />
          <h1 className="page-header-title">A Focused Learning Environment</h1>
          <p className="page-header-subtitle">
            Take a virtual tour of our modern offline centre in Andheri (E), Mumbai. Designed with ergonomic seating, smart interactive boards, quiet study cubicles, and 24/7 security.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-tight section-bg-subtle">
        <div className="container">
          <div className="facility-cards-row">
            {centreData.facilities.map((fac, idx) => (
              <div key={idx} className="facility-feature-box">
                <div className="facility-icon-wrap">
                  <ShieldCheck size={22} className="text-primary" />
                </div>
                <h4>{fac.title}</h4>
                <p>{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow-label">AUTHENTIC CAMPUS PHOTOGRAPHY</span>
            <h2>Tour Our Andheri (E) Facility</h2>
            <p className="section-subtitle">
              Every photograph below is taken directly inside our centre at Sunrise Complex.
            </p>
          </div>

          <div className="centre-gallery-grid">
            {centreData.gallery.map((item) => (
              <div 
                key={item.id} 
                className="gallery-item-card"
                onClick={() => setActivePhoto(item)}
              >
                <div className="gallery-img-wrap">
                  <img src={item.image} alt={item.title} className="gallery-photo" />
                  <span className="gallery-tag-badge">{item.tag}</span>
                  <div className="gallery-hover-overlay">
                    <Maximize2 size={24} color="#ffffff" />
                  </div>
                </div>
                <div className="gallery-caption-wrap">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div className="centre-directions-card">
            <div className="directions-info-col">
              <Badge icon="pin" text="Visit in Person" variant="blue" />
              <h2>How to Reach ASPIRE</h2>
              <p className="directions-desc">
                Located centrally in Andheri East, Mumbai, our centre is easily accessible via Mumbai Metro Line 1 and Western/Harbour railway local lines.
              </p>

              <div className="directions-address-box">
                <strong>Address:</strong>
                <p>{centreData.address}</p>
                <p className="landmark-text">📍 Landmark: {centreData.landmark}</p>
              </div>

              <div className="centre-timing-box">
                <Clock size={16} className="text-primary" />
                <span><strong>Visiting Hours:</strong> {centreData.hours}</span>
              </div>

              <div className="directions-actions">
                <a 
                  href="https://maps.google.com/?q=Sunrise+Complex+Andheri+East+Mumbai" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary btn-md"
                >
                  Get Driving Directions <ArrowRight size={16} />
                </a>
                <button onClick={onOpenEnquiry} className="btn btn-secondary btn-md">
                  Book Centre Visit Appointment
                </button>
              </div>
            </div>

            <div className="directions-map-col">
              <div className="map-view-card">
                <img 
                  src="/images/map-preview.png" 
                  alt="Map Location of ASPIRE Learning Centre" 
                  className="map-preview-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="modal-backdrop" onClick={() => setActivePhoto(null)}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto.image} alt={activePhoto.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{activePhoto.title}</h3>
              <p>{activePhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
