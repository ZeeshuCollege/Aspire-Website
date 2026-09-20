import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
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
                    <span className="box-lbl">Helpline Phone</span>
                    <a href="tel:+917021220449" className="box-phone-link">
                      <strong>+91 70212 20449</strong>
                    </a>
                    <span className="box-sub">Mon – Sat: 9:00 AM – 6:00 PM (Tap to call)</span>
                  </div>
                </div>

                <div className="contact-box-item">
                  <div className="contact-icon-sq green"><MessageCircle size={20} /></div>
                  <div>
                    <span className="box-lbl">WhatsApp Admissions</span>
                    <a 
                      href="https://wa.me/917021220449?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="box-phone-link"
                    >
                      <strong>+91 70212 20449</strong>
                    </a>
                    <a 
                      href="https://wa.me/917021220449?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="chat-now-link"
                    >
                      Chat on WhatsApp <ArrowRight size={13} />
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
                    <strong>Falah Building, Room No. 102,</strong>
                    <p className="address-p">Near Darul Falah Masjid, Opp DCB Bank, Kausa, Mumbra, Thane – 400612</p>
                    <span className="box-sub">📍 Near St. Mary School, Kausa</span>
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
                  <span>Falah Building, Kausa, Mumbra, Thane</span>
                  <a 
                    href="https://maps.google.com/?q=Falah+Building+Kausa+Mumbra+Thane" 
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
