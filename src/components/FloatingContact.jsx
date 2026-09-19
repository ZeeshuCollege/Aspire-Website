import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import './FloatingContact.css';

export default function FloatingContact({ onOpenEnquiry }) {
  return (
    <div className="floating-contact-container">
      <a 
        href="https://wa.me/919876543210?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
        target="_blank" 
        rel="noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
        <span className="floating-tooltip">WhatsApp Us</span>
      </a>

      <a 
        href="tel:+919876543210"
        className="floating-btn floating-call"
        aria-label="Call ASPIRE Centre"
        title="Call Helpline"
      >
        <Phone size={20} />
        <span className="floating-tooltip">Call +91 98765 43210</span>
      </a>

      <button 
        onClick={onOpenEnquiry}
        className="floating-btn floating-enquiry"
        aria-label="Open Admission Enquiry"
        title="Enquire Now"
      >
        <Send size={18} />
        <span className="floating-pill-text">Enquire Now</span>
      </button>
    </div>
  );
}
