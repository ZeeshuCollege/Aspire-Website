import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Award, 
  Phone, 
  Mail, 
  Send, 
  MessageCircle, 
  MapPin
} from 'lucide-react';

import HighlightsStrip from '../components/HighlightsStrip';
import CourseCard from '../components/CourseCard';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';

import { coursesData } from '../data/coursesData';
import { methodologySteps } from '../data/methodologyData';
import { faqData } from '../data/faqData';

import hmSirImg from '../assets/images/hm_sir_cutout.png';
import './Home.css';

export default function Home({ onOpenEnquiry }) {
  // Quick contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const handleQuickContact = (e) => {
    e.preventDefault();
    if (contactForm.name && (contactForm.email || contactForm.phone)) {
      setContactSent(true);
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setContactSent(false), 5000);
    }
  };

  return (
    <div className="home-page-wrap">
      {/* 1. HERO SECTION (Matching First section.png) */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left Column */}
          <div className="hero-content">
            <h1 className="hero-headline">
              Learn Today,<br />
              Lead <span className="text-primary relative-inline">
                Tomorrow.
                <svg className="hero-wavy-svg" viewBox="0 0 160 12" fill="none">
                  <path d="M2 9C25 3 45 10 70 5C95 1 120 8 158 4" stroke="var(--color-orange)" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="hero-description">
              At Aspire Learning Centre, we provide expert guidance, structured learning and personal attention to help you achieve your academic goals and build a brighter future.
            </p>

            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary btn-lg">
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Know More
              </Link>
            </div>

          </div>

          {/* Right Column (Hero Graphic) */}
          <div className="hero-visual-col">
            <div className="hero-poster-wrapper">
              <img 
                src={hmSirImg} 
                alt="Hamiuddin Khan (HM Sir) - JEE/NEET Specialist" 
                className="hero-poster-img animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS 4-COLUMN STRIP (Bottom of First section.png) */}
      <HighlightsStrip />

      {/* 3. COURSES WE OFFER PREVIEW (First section.png) */}
      <section className="section section-courses-preview">
        <div className="container">
          <div className="section-header">
            <h2>Courses We Offer</h2>
          </div>

          <div className="courses-preview-grid">
            {coursesData.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        </div>
      </section>


      {/* 7. METHODOLOGY */}
      <section className="section section-methodology">
        <div className="container">
          <div className="section-header reveal-on-scroll reveal-bottom">
            <h2>A Structured Approach to <span className="text-primary">Success</span></h2>
            <p className="section-subtitle">
              We follow a well-planned and proven teaching methodology that focuses on concept clarity, regular practice and continuous evaluation to ensure consistent progress.
            </p>
          </div>

          <div className="methodology-steps-row">
            {methodologySteps.map((step, idx) => {
              const dirClass = idx === 0 
                ? 'reveal-left' 
                : idx === methodologySteps.length - 1 
                  ? 'reveal-right' 
                  : 'reveal-bottom';
              return (
                <React.Fragment key={step.stepNumber}>
                  <div className={`methodology-step-card reveal-on-scroll ${dirClass} stagger-${(idx % 4) + 1}`}>
                    <div className={`step-icon-circle ${step.color}`}>
                      <BookOpen size={20} />
                    </div>
                    <span className="step-num-label">{step.stepNumber}</span>
                    <h4 className="step-card-title">{step.title}</h4>
                    <p className="step-card-desc">{step.description}</p>
                  </div>
                  {idx < methodologySteps.length - 1 && (
                    <div className="step-connector-arrow reveal-on-scroll reveal-bottom">
                      <ArrowRight size={20} className="connector-arrow-icon" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER (Second section.png) */}
      <TestimonialSlider />

      {/* 10. PRE-FAQ BANNER (Fourth section.png) */}
      <section className="section-pre-faq-banner">
        <div className="container">
          <div className="pre-faq-banner-card reveal-on-scroll reveal-scale">
            <div className="banner-text-side reveal-on-scroll reveal-left stagger-1">
              <h2 className="banner-title">
                Take the First Step<br />
                Towards <span className="text-primary">Your Dream.</span>
              </h2>
              <p className="banner-desc">
                Join Aspire Learning Centre today and give yourself the right guidance, support and environment to succeed.
              </p>
              <button onClick={onOpenEnquiry} className="btn btn-primary btn-md banner-enroll-btn">
                Enroll Now <ArrowRight size={16} />
              </button>
            </div>

            <div className="banner-stats-middle reveal-on-scroll reveal-bottom stagger-2">
              <div className="banner-stat-item">
                <div className="stat-circle-icon blue"><Users size={18} /></div>
                <div>
                  <strong>150+</strong>
                  <span>Students Enrolled</span>
                </div>
              </div>
              <div className="banner-stat-item">
                <div className="stat-circle-icon blue"><Award size={18} /></div>
                <div>
                  <strong>95%</strong>
                  <span>Success Rate</span>
                </div>
              </div>
            </div>

            <div className="banner-visual-side reveal-on-scroll reveal-right stagger-3">
              <div className="banner-student-wrap">
                <span className="banner-handwritten">
                  Big Dreams<br />
                  Better Guidance
                </span>
                <img 
                  src="/images/banner-student.png" 
                  alt="Student with big dreams" 
                  className="banner-student-img" 
                  onError={(e) => {
                    e.target.src = '/images/hero-student.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQS (Fourth section.png) */}
      <section className="section section-faqs section-bg-subtle">
        <div className="container">
          <div className="section-header-row reveal-on-scroll reveal-bottom">
            <div>
              <h2>Frequently Asked <span className="text-primary">Questions</span></h2>
              <p className="section-subtitle">
                Find answers to the most common questions about our courses, admission process and more.
              </p>
            </div>
            <Link to="/faqs" className="view-all-link">
              View All FAQs <ArrowRight size={16} />
            </Link>
          </div>

          <FAQAccordion items={faqData.slice(0, 8)} columns={2} />
        </div>
      </section>

      {/* 12. GET IN TOUCH WITH US */}
      <section className="section section-contact-preview">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll reveal-bottom">
            <h2>Get in Touch <span className="text-primary">With Us</span></h2>
            <p className="section-subtitle">
              Have a question or need guidance? We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="contact-three-boxes-grid">
            {/* Box 1: Contact Box */}
            <div className="contact-box-card reveal-on-scroll reveal-left stagger-1">
              <div className="contact-box-header">
                <div className="contact-box-icon-circle blue">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="contact-box-title">Contact Us</h3>
                  <span className="contact-box-subtitle">Direct helpline & centre address</span>
                </div>
              </div>

              <div className="contact-box-body">
                <div className="contact-info-row">
                  <div className="contact-info-icon"><Phone size={18} /></div>
                  <div className="contact-info-content">
                    <span className="info-label">Phone & WhatsApp</span>
                    <a href="tel:+917021220449" className="info-main-link">+91 70212 20449</a>
                    <a 
                      href="https://wa.me/917021220449?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="contact-wa-action"
                    >
                      <MessageCircle size={14} /> WhatsApp Us Directly
                    </a>
                    <span className="info-subtext">(Mon – Sat, 9:00 AM – 6:00 PM)</span>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-icon"><Mail size={18} /></div>
                  <div className="contact-info-content">
                    <span className="info-label">Email Support</span>
                    <a href="mailto:aspirelearningcentre@outlook.com" className="info-main-link">aspirelearningcentre@outlook.com</a>
                    <span className="info-subtext">(We reply within 24 hours)</span>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-icon"><MapPin size={18} /></div>
                  <div className="contact-info-content">
                    <span className="info-label">Centre Address</span>
                    <strong className="info-address-title">Falah Building, Room No. 102,</strong>
                    <span className="info-address-desc">Near Darul Falah Masjid, Kausa, Mumbra, Thane – 400612</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Google Maps Box */}
            <div className="contact-box-card map-box-card reveal-on-scroll reveal-bottom stagger-2">
              <div className="contact-box-header">
                <div className="contact-box-icon-circle orange">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="contact-box-title">Google Maps</h3>
                  <span className="contact-box-subtitle">Visit our classroom centre</span>
                </div>
              </div>

              <div className="contact-map-frame-wrap">
                <iframe
                  title="ASPIRE Learning Centre Location"
                  src="https://maps.google.com/maps?q=Falah+Building+Kausa+Mumbra+Thane&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="map-card-bottom">
                <div className="map-bottom-text">
                  <strong>ASPIRE Learning Centre</strong>
                  <span>Falah Building, Kausa, Mumbra</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Falah+Building+Kausa+Mumbra+Thane" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm map-directions-link"
                >
                  <MapPin size={13} /> View on Maps <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Box 3: Write Us Box */}
            <div className="contact-box-card write-box-card reveal-on-scroll reveal-right stagger-3">
              <div className="contact-box-header">
                <div className="contact-box-icon-circle teal">
                  <Send size={20} />
                </div>
                <div>
                  <h3 className="contact-box-title">Write Us</h3>
                  <span className="contact-box-subtitle">Leave your message or query</span>
                </div>
              </div>

              {contactSent ? (
                <div className="quick-msg-success">
                  <CheckCircle2 size={40} className="text-teal" />
                  <h4>Message Sent!</h4>
                  <p>Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="quick-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Your Name *" 
                      required 
                      className="input-field"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Your Email *" 
                      required 
                      className="input-field"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="input-field"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      rows={3}
                      placeholder="Your Message *" 
                      required 
                      className="input-field"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
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
      </section>
    </div>
  );
}
