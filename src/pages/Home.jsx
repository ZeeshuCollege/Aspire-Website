import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  Award, 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Send,
  Calendar,
  Compass,
  GraduationCap,
  MessageCircle
} from 'lucide-react';

import Badge from '../components/Badge';
import HighlightsStrip from '../components/HighlightsStrip';
import CourseCard from '../components/CourseCard';
import BatchCard from '../components/BatchCard';
import FacultyCard from '../components/FacultyCard';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';
import CtaBanner from '../components/CtaBanner';

import { coursesData } from '../data/coursesData';
import { batchesData } from '../data/batchesData';
import { facultyData } from '../data/facultyData';
import { methodologySteps } from '../data/methodologyData';
import { faqData } from '../data/faqData';
import { centreData } from '../data/centreData';

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
                  <path d="M2 9C25 3 45 10 70 5C95 1 120 8 158 4" stroke="#1769E8" strokeWidth="4" strokeLinecap="round" />
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

            {/* Social Proof */}
            <div className="hero-social-proof">
              <img 
                src="/images/avatars.png?v=2" 
                alt="Trusted Students Avatars" 
                className="hero-avatars-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="social-proof-text">
                <strong>Trusted by 500+ Students</strong>
                <span>and their families</span>
              </div>
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
                  <path d="M5 5C25 15 35 25 40 35M40 35L30 35M40 35L42 25" stroke="#1769E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
                Comprehensive coaching for Class 8 to 12, designed to build strong concepts and boost confidence.
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

      {/* 4. WHY CHOOSE ASPIRE (Matching Second section.png) */}
      <section className="section section-why-aspire section-bg-subtle">
        <div className="container">
          <div className="why-aspire-grid">
            {/* Left Content */}
            <div className="why-aspire-content">
              <Badge icon="sparkles" text="Why Choose Aspire?" variant="blue" />
              <h2>
                More Than Coaching,<br />
                It's a <span className="text-primary relative-inline">
                  Future Builder.
                  <svg className="hero-wavy-svg" viewBox="0 0 160 12" fill="none">
                    <path d="M2 9C25 3 45 10 70 5C95 1 120 8 158 4" stroke="#1769E8" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>

              <p className="why-aspire-desc">
                At Aspire Learning Centre, we focus on your complete growth — academic, personal and professional. With expert faculty, structured learning and a supportive environment, we help you turn your goals into reality.
              </p>

              <div className="why-features-grid">
                <div className="why-feature-box">
                  <div className="why-feature-icon blue">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4>Experienced Faculty</h4>
                    <p>Subject experts with proven track records</p>
                  </div>
                </div>

                <div className="why-feature-box">
                  <div className="why-feature-icon green">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4>Personal Mentorship</h4>
                    <p>Individual attention for better results</p>
                  </div>
                </div>

                <div className="why-feature-box">
                  <div className="why-feature-icon blue">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4>Structured Curriculum</h4>
                    <p>As per latest exam patterns and board guidelines</p>
                  </div>
                </div>

                <div className="why-feature-box">
                  <div className="why-feature-icon purple">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4>Supportive Environment</h4>
                    <p>A place to learn, grow and succeed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual with Stats Card */}
            <div className="why-aspire-visual">
              <div className="why-image-card">
                <img 
                  src="/images/student-studying.png" 
                  alt="Student studying at ASPIRE" 
                  className="why-student-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&auto=format&fit=crop&q=80';
                  }}
                />

                {/* Floating Stats Block */}
                <div className="why-stats-badge">
                  <div className="why-stat-row">
                    <span className="why-stat-num">1000+</span>
                    <span className="why-stat-lbl">Students Trained</span>
                  </div>
                  <div className="why-stat-row">
                    <span className="why-stat-num">95%</span>
                    <span className="why-stat-lbl">Success Rate</span>
                  </div>
                  <div className="why-stat-row">
                    <span className="why-stat-num">5+</span>
                    <span className="why-stat-lbl">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FIND THE RIGHT BATCH FOR YOU (Second section.png) */}
      <section className="section section-batches-preview">
        <div className="container">
          <div className="section-header-row">
            <div>
              <Badge icon="calendar" text="Our Batches" variant="blue" />
              <h2>Find the Right Batch for You</h2>
              <p className="section-subtitle">
                We offer flexible batch timings to suit your schedule and learning needs.
              </p>
            </div>
            <Link to="/batches" className="view-all-link">
              View All Batches <ArrowRight size={16} />
            </Link>
          </div>

          <div className="batches-preview-grid">
            {batchesData.slice(0, 4).map((batch) => (
              <BatchCard key={batch.id} batch={batch} onSelectBatch={onOpenEnquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEARN FROM THE BEST IN THE INDUSTRY (Third section.png) */}
      <section className="section section-faculty-spotlight section-bg-subtle">
        <div className="container">
          <div className="section-header-row">
            <div>
              <Badge icon="users" text="Our Faculty" variant="blue" />
              <h2>Learn From the Best in the <span className="text-primary">Industry</span></h2>
              <p className="section-subtitle">
                Our experienced and dedicated faculty members bring real-world knowledge, proven teaching methods and a passion for student success.
              </p>
            </div>
            <Link to="/faculty" className="view-all-link">
              View All Faculty <ArrowRight size={16} />
            </Link>
          </div>

          <div className="faculty-spotlight-layout">
            <div className="faculty-benefits-column">
              <div className="faculty-benefit-item">
                <div className="benefit-icon-circle blue">
                  <Users size={18} />
                </div>
                <div>
                  <h4>Expert Faculty</h4>
                  <p>Subject specialists with years of experience</p>
                </div>
              </div>

              <div className="faculty-benefit-item">
                <div className="benefit-icon-circle blue">
                  <Award size={18} />
                </div>
                <div>
                  <h4>Proven Track Record</h4>
                  <p>Consistent results in board and competitive exams</p>
                </div>
              </div>

              <div className="faculty-benefit-item">
                <div className="benefit-icon-circle blue">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4>Personal Attention</h4>
                  <p>Every student gets individual guidance and support</p>
                </div>
              </div>

              <div className="faculty-benefit-item">
                <div className="benefit-icon-circle blue">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <h4>Supportive Mentors</h4>
                  <p>Always there to guide, motivate and help</p>
                </div>
              </div>

              <Link to="/faculty" className="btn btn-primary btn-md meet-faculty-btn">
                Meet Our Faculty <ArrowRight size={16} />
              </Link>
            </div>

            <div className="faculty-cards-column">
              {facultyData.slice(0, 3).map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY (Third section.png) */}
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

      {/* 8. OUR CENTRE / INFRASTRUCTURE (Third section.png) */}
      <section className="section section-centre-preview section-bg-subtle">
        <div className="container">
          <div className="centre-preview-grid">
            <div className="centre-preview-content">
              <Badge icon="pin" text="Our Centre" variant="blue" />
              <h2>A Perfect Learning <span className="text-primary">Environment</span></h2>
              <p className="centre-desc">
                Our centre is designed to provide a focused, comfortable and inspiring atmosphere for students to learn, grow and achieve their goals.
              </p>

              <div className="centre-features-list">
                <div className="centre-feat-item">
                  <div className="feat-icon-sq blue"><GraduationCap size={18} /></div>
                  <div>
                    <h4>Spacious Classrooms</h4>
                    <p>Well-ventilated & equipped</p>
                  </div>
                </div>

                <div className="centre-feat-item">
                  <div className="feat-icon-sq blue"><Compass size={18} /></div>
                  <div>
                    <h4>Digital Learning Tools</h4>
                    <p>Smart boards & projectors</p>
                  </div>
                </div>

                <div className="centre-feat-item">
                  <div className="feat-icon-sq blue"><BookOpen size={18} /></div>
                  <div>
                    <h4>Library & Study Area</h4>
                    <p>Peaceful & well-stocked</p>
                  </div>
                </div>

                <div className="centre-feat-item">
                  <div className="feat-icon-sq blue"><ShieldCheck size={18} /></div>
                  <div>
                    <h4>Safe & Secure</h4>
                    <p>CCTV & staff support</p>
                  </div>
                </div>
              </div>

              <Link to="/centre" className="btn btn-primary btn-md explore-centre-btn">
                Explore Our Centre <ArrowRight size={16} />
              </Link>
            </div>

            {/* Images Collage */}
            <div className="centre-preview-images">
              <div className="centre-main-img-wrap">
                <img 
                  src="/images/centre-classroom.png" 
                  alt="Modern Classrooms at ASPIRE" 
                  className="centre-main-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80';
                  }}
                />
                <span className="image-caption-tag">
                  <MapPin size={13} /> Modern Classrooms
                </span>
              </div>

              <div className="centre-side-imgs">
                <div className="centre-small-img-wrap">
                  <img src="/images/centre-library.png" alt="ASPIRE Library" />
                  <span className="image-caption-tag"><MapPin size={12} /> Library</span>
                </div>
                <div className="centre-small-img-wrap">
                  <img src="/images/centre-study.png" alt="ASPIRE Study Area" />
                  <span className="image-caption-tag"><MapPin size={12} /> Study Area</span>
                </div>
                <div className="centre-small-img-wrap">
                  <img src="/images/centre-reception.png" alt="ASPIRE Reception" />
                  <span className="image-caption-tag"><MapPin size={12} /> Reception</span>
                </div>
              </div>
            </div>
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
                  <strong>1000+</strong>
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
                    <strong>Shop No. 12, Sunrise Complex,</strong>
                    <span>Near City Mall, Andheri (E), Mumbai – 400069</span>
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
                  <span>Shop No. 12, Sunrise Complex, Andheri (E)</span>
                  <a 
                    href="https://maps.google.com/?q=Sunrise+Complex+Andheri+East+Mumbai" 
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
