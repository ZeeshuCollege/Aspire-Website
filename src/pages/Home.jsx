import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Phone, 
  Mail, 
  Send, 
  GraduationCap, 
  MessageCircle, 
  MapPin
} from 'lucide-react';

import Badge from '../components/Badge';
import HighlightsStrip from '../components/HighlightsStrip';
import CourseCard from '../components/CourseCard';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';
import CtaBanner from '../components/CtaBanner';

import { coursesData } from '../data/coursesData';
import { methodologySteps } from '../data/methodologyData';
import { faqData } from '../data/faqData';

import './Home.css';

export default function Home({ onOpenEnquiry }) {
  // Quick contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const handleQuickContact = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setContactSent(true);
      setContactForm({ name: '', email: '', message: '' });
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
            <Badge icon="graduation" text="Build Your Future With Us" variant="blue" />

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
            <div className="hero-visual-wrapper">
              {/* Organic Backdrop shape with annotations */}
              <div className="hero-organic-backdrop"></div>
              
              {/* Hand-drawn annotation */}
              <div className="hero-handwritten-note">
                <span>Better</span>
                <span>Learning</span>
                <span style={{ marginTop: '0.2rem' }}>Brighter</span>
                <span>Future</span>
                <svg className="curved-arrow-svg" viewBox="0 0 50 40" fill="none">
                  <path d="M5 5C25 15 35 25 40 35M40 35L30 35M40 35L42 25" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Main Student Image */}
              <img 
                src="/images/hero-student.png" 
                alt="Aspire Student Learning" 
                className="hero-student-img animate-fade-in"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&auto=format&fit=crop&q=80';
                }}
              />

              {/* Floating Vertical Feature Badges */}
              <div className="hero-floating-stack animate-float">
                <div className="floating-badge-item">
                  <div className="floating-icon-dot blue">
                    <GraduationCap size={16} />
                  </div>
                  <div className="floating-badge-text">
                    <strong>Expert</strong>
                    <span>Faculty</span>
                  </div>
                </div>

                <div className="floating-badge-item">
                  <div className="floating-icon-dot teal">
                    <Users size={16} />
                  </div>
                  <div className="floating-badge-text">
                    <strong>Small</strong>
                    <span>Batches</span>
                  </div>
                </div>

                <div className="floating-badge-item">
                  <div className="floating-icon-dot orange">
                    <TrendingUp size={16} />
                  </div>
                  <div className="floating-badge-text">
                    <strong>Proven</strong>
                    <span>Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS 4-COLUMN STRIP (Bottom of First section.png) */}
      <HighlightsStrip />

      {/* 3. COURSES WE OFFER PREVIEW (First section.png) */}
      <section className="section section-courses-preview">
        <div className="container">
          <div className="section-header-row">
            <div>
              <Badge icon="book" text="Our Courses" variant="blue" />
              <h2>Courses We Offer</h2>
              <p className="section-subtitle">
                Comprehensive coaching for 9th, 10th, NEET and JEE — designed to build strong concepts and boost confidence.
              </p>
            </div>
            <Link to="/courses" className="view-all-link">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="courses-preview-grid">
            {coursesData.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>


      {/* 7. METHODOLOGY */}
      <section className="section section-methodology">
        <div className="container">
          <div className="section-header">
            <Badge icon="gear" text="Our Methodology" variant="blue" />
            <h2>A Structured Approach to <span className="text-primary">Success</span></h2>
            <p className="section-subtitle">
              We follow a well-planned and proven teaching methodology that focuses on concept clarity, regular practice and continuous evaluation to ensure consistent progress.
            </p>
          </div>

          <div className="methodology-steps-row">
            {methodologySteps.map((step, idx) => (
              <React.Fragment key={step.stepNumber}>
                <div className="methodology-step-card">
                  <div className={`step-icon-circle ${step.color}`}>
                    <BookOpen size={20} />
                  </div>
                  <span className="step-num-label">{step.stepNumber}</span>
                  <h4 className="step-card-title">{step.title}</h4>
                  <p className="step-card-desc">{step.description}</p>
                </div>
                {idx < methodologySteps.length - 1 && (
                  <div className="step-connector-arrow">
                    <ArrowRight size={20} className="connector-arrow-icon" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="methodology-cta-wrap">
            <Link to="/methodology" className="btn btn-primary btn-md">
              Learn More About Our Methodology <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER (Second section.png) */}
      <TestimonialSlider />

      {/* 10. PRE-FAQ BANNER (Fourth section.png) */}
      <section className="section-pre-faq-banner">
        <div className="container">
          <div className="pre-faq-banner-card">
            <div className="banner-text-side">
              <Badge icon="graduation" text="Your Future Awaits" variant="blue" />
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

            <div className="banner-stats-middle">
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
              <div className="banner-stat-item">
                <div className="stat-circle-icon blue"><TrendingUp size={18} /></div>
                <div>
                  <strong>5+</strong>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>

            <div className="banner-visual-side">
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
          <div className="section-header-row">
            <div>
              <Badge icon="faq" text="FAQs" variant="blue" />
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

      {/* 12. GET IN TOUCH WITH US (Fourth section.png) */}
      <section className="section section-contact-preview">
        <div className="container">
          <div className="contact-preview-grid">
            {/* Left: Contact Info */}
            <div className="contact-info-col">
              <Badge icon="phone" text="Contact Us" variant="blue" />
              <h2>Get in Touch <span className="text-primary">With Us</span></h2>
              <p className="contact-sub">
                Have a question or need guidance? We're here to help! Reach out to us through any of the channels below.
              </p>

              <div className="contact-channel-list">
                <div className="contact-channel-card">
                  <div className="channel-icon-circle blue"><Phone size={18} /></div>
                  <div>
                    <span className="channel-label">Phone & WhatsApp</span>
                    <a href="tel:+917021220449" className="channel-contact-link">
                      <strong>+91 70212 20449</strong>
                    </a>
                    <a 
                      href="https://wa.me/917021220449?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
                      target="_blank" 
                      rel="noreferrer" 
                      className="channel-whatsapp-link"
                    >
                      <MessageCircle size={14} /> WhatsApp Us Directly
                    </a>
                    <span className="channel-hours">(Mon – Sat, 9:00 AM – 6:00 PM)</span>
                  </div>
                </div>

                <div className="contact-channel-card">
                  <div className="channel-icon-circle blue"><Mail size={18} /></div>
                  <div>
                    <span className="channel-label">Email</span>
                    <strong>aspirelearningcentre@outlook.com</strong>
                    <span className="channel-hours">(We reply within 24 hours)</span>
                  </div>
                </div>

                <div className="contact-channel-card">
                  <div className="channel-icon-circle blue"><MapPin size={18} /></div>
                  <div>
                    <span className="channel-label">Address</span>
                    <strong>Falah Building, Room No. 102,</strong>
                    <span>Near Darul Falah Masjid, Kausa, Mumbra, Thane – 400612</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Map Card */}
            <div className="contact-map-col">
              <div className="map-embed-card">
                <img 
                  src="/images/map-preview.png" 
                  alt="Map Location of ASPIRE Learning Centre in Andheri East Mumbai" 
                  className="map-card-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="map-overlay-badge">
                  <strong>Aspire Learning Centre</strong>
                  <span>Falah Building, Kausa, Mumbra, Thane</span>
                  <a 
                    href="https://maps.google.com/?q=Falah+Building+Kausa+Mumbra+Thane" 
                    target="_blank" 
                    rel="noreferrer"
                    className="view-map-link"
                  >
                    View on Google Maps <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Send Us a Message Form */}
            <div className="contact-form-col">
              <div className="quick-message-card">
                <h3>Send Us a Message</h3>
                {contactSent ? (
                  <div className="quick-msg-success">
                    <CheckCircle2 size={38} className="text-teal" />
                    <h4>Message Sent!</h4>
                    <p>Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickContact} className="quick-form">
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        className="input-field"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        className="input-field"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <textarea 
                        rows={4}
                        placeholder="Your Message" 
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
        </div>
      </section>

      {/* 13. READY TO BUILD YOUR FUTURE CTA BANNER (Second section.png) */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
