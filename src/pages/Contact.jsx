import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { centreData } from '../data/centreData';
import './Contact.css';

export default function Contact({ onOpenEnquiry }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="phone" text="Get in Touch" variant="blue" />
          <h1 className="page-header-title">Contact & Centre Location</h1>
          <p className="page-header-subtitle">
            Have questions about admissions, course schedules, or want to book a centre visit? Reach out to us directly or visit our offline campus in Andheri East, Mumbai.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section">
        <div className="container">
          <div className="contact-full-grid">
            {/* Left: Contact Channels */}
            <div className="contact-details-panel">
              <h2>Direct Channels</h2>
              <p className="contact-panel-desc">
                We value your time. Our admission coordinators answer all calls and WhatsApp messages promptly during working hours.
              </p>

              <div className="contact-boxes-list">
                <div className="contact-box-item">
                  <div className="contact-icon-sq blue"><Phone size={20} /></div>
                  <div>
                    <span className="box-lbl">Helpline Phones</span>
                    <strong>+91 98765 43210</strong>
                    <strong>+91 87654 32109</strong>
                    <span className="box-sub">Mon – Sat: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="contact-box-item">
                  <div className="contact-icon-sq green"><MessageCircle size={20} /></div>
                  <div>
                    <span className="box-lbl">WhatsApp Admissions</span>
                    <strong>+91 98765 43210</strong>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="chat-now-link"
                    >
                      Chat with Counsellor <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="contact-box-item">
                  <div className="contact-icon-sq purple"><Mail size={20} /></div>
                  <div>
                    <span className="box-lbl">Email Inquiries</span>
                    <strong>aspirelearningcentre@outlook.com</strong>
                    <span className="box-sub">Response within 24 business hours</span>
                  </div>
                </div>

                <div className="contact-box-item">
                  <div className="contact-icon-sq orange"><MapPin size={20} /></div>
                  <div>
                    <span className="box-lbl">Offline Campus Address</span>
                    <strong>Shop No. 12, Sunrise Complex,</strong>
                    <p className="address-p">Near City Mall, Andheri (E), Mumbai – 400069</p>
                    <span className="box-sub">📍 5 mins walk from Andheri East Metro & Railway Station</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Map preview */}
            <div className="contact-map-panel">
              <div className="map-view-container">
                <img 
                  src="/images/map-preview.png" 
                  alt="Map Location of ASPIRE Learning Centre in Andheri East Mumbai" 
                  className="contact-map-img"
                />
                <div className="map-floating-pin-card">
                  <strong>Aspire Learning Centre</strong>
                  <span>Shop No. 12, Sunrise Complex, Andheri (E)</span>
                  <a 
                    href="https://maps.google.com/?q=Sunrise+Complex+Andheri+East+Mumbai" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="view-gmaps-btn"
                  >
                    View on Google Maps <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="contact-form-panel">
              <div className="form-card-container">
                <h3>Send Us a Message</h3>
                <p className="form-sub-p">Leave your question below and our counsellor will reach out.</p>

                {submitted ? (
                  <div className="contact-success-state">
                    <CheckCircle2 size={46} className="text-teal" />
                    <h4>Thank You!</h4>
                    <p>Your message has been dispatched to our counselling desk.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-page-form">
                    <div className="form-group">
                      <label className="input-label">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Priyanshu Sharma"
                        className="input-field"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="input-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="yourname@gmail.com"
                        className="input-field"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="input-label">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number"
                        className="input-field"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="input-label">Your Message *</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Please ask about courses, batch timings, or fee structure..."
                        className="input-field"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-md full-width-btn">
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
