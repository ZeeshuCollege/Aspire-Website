import React from 'react';
import { 
  BookOpen, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import './About.css';

export default function About({ onOpenEnquiry }) {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="graduation" text="About ASPIRE Learning Centre" variant="blue" />
          <h1 className="page-header-title">
            Committed to Offline Academic <span className="text-primary">Excellence</span>
          </h1>
          <p className="page-header-subtitle">
            Founded with a clear purpose: to bring back focused offline classroom coaching, disciplined preparation, and true 1-on-1 personal attention for students in Mumbai.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-split-content">
              <span className="eyebrow-label">OUR CORE IDENTITY</span>
              <h2>Building Strong Concepts Since 2020</h2>
              <p className="about-p">
                At ASPIRE Learning Centre, we believe that real academic breakthroughs happen in the classroom — through live eye contact with experienced teachers, chalkboard problem solving, immediate doubt resolution, and healthy peer competition.
              </p>
              <p className="about-p">
                Unlike impersonal online learning platforms where students easily get distracted, our centre in Sunrise Complex, Andheri (E) provides an inspiring, distraction-free sanctum designed exclusively for deep focus.
              </p>

              <div className="about-pillars-list">
                <div className="pillar-item">
                  <div className="pillar-check"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong>Offline Classroom First:</strong> Dedicated physical environment with zero digital distractions during core lectures.
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-check"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong>Small Batch Sizes:</strong> Strictly limited to 20–25 students so every student's notebook is reviewed.
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-check"><CheckCircle2 size={18} /></div>
                  <div>
                    <strong>Transparent Parent Partnership:</strong> Bi-weekly PTMs and real-time mobile app attendance & test score tracking.
                  </div>
                </div>
              </div>
            </div>

            <div className="about-split-visual">
              <div className="about-image-card">
                <img 
                  src="/images/student-studying.png" 
                  alt="Students focused in ASPIRE classroom" 
                  className="about-main-img"
                />
                <div className="about-floating-experience">
                  <span className="exp-num">5+</span>
                  <span className="exp-text">Years of Trusted Coaching in Andheri (E)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director / Academic Dean's Message */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div className="director-message-card">
            <div className="director-quote-col">
              <span className="badge badge-orange">Director's Message</span>
              <h2 className="director-title">“We Teach How to Think, Not Just What to Remember.”</h2>
              <blockquote className="director-blockquote">
                “When a student grasps the fundamental concept behind a formula, fear disappears and confidence takes over. Our goal at ASPIRE is never rote memorization — it is developing structured analytical reasoning that empowers students to crack Board examinations, NEET, and JEE with calm composure.”
              </blockquote>
              <div className="director-signature-block">
                <strong>Er. Rohit Sharma</strong>
                <span>Founder & Academic Director, ASPIRE Learning Centre</span>
                <span className="director-creds">B.Tech, IIT Delhi | 12+ Years Teaching Experience</span>
              </div>
            </div>
            <div className="director-photo-col">
              <img 
                src="/images/faculty-rohit.png" 
                alt="Director Rohit Sharma" 
                className="director-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <Badge icon="award" text="Our Values" variant="blue" />
            <h2>The Four Pillars of ASPIRE</h2>
            <p className="section-subtitle">
              The fundamental convictions that guide our teaching methodology and institutional culture every day.
            </p>
          </div>

          <div className="values-cards-grid">
            <div className="value-card">
              <div className="value-icon-circle blue"><BookOpen size={24} /></div>
              <h3>Conceptual Integrity</h3>
              <p>No shortcuts or superficial tricks. We build concepts from first principles until the student can derive the formulas independently.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-circle green"><Users size={24} /></div>
              <h3>Empathy & Mentorship</h3>
              <p>Every child learns at their own pace. We provide patience, personalized guidance, and emotional support to eliminate exam stress.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-circle purple"><TrendingUp size={24} /></div>
              <h3>Data-Driven Growth</h3>
              <p>Through weekly diagnostic assessments and negative marking analysis, we pinpoint exact weaknesses before board and entrance exams.</p>
            </div>

            <div className="value-card">
              <div className="value-icon-circle orange"><ShieldCheck size={24} /></div>
              <h3>Authentic Results</h3>
              <p>We believe in verified, genuine achievements. Every score and rank published on our website is 100% authentic and verifiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Bar */}
      <section className="section-tight section-bg-soft-blue">
        <div className="container">
          <div className="about-location-strip">
            <div className="loc-text">
              <MapPin size={22} className="text-primary" />
              <div>
                <strong>Visit Us in Person:</strong> Falah Building, Room No. 102, Near Darul Falah Masjid, Kausa, Mumbra, Thane – 400612
              </div>
            </div>
            <button onClick={onOpenEnquiry} className="btn btn-primary btn-md">
              Schedule Centre Visit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
