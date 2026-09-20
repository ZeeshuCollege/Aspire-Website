import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { faqData } from '../data/faqData';
import FAQAccordion from '../components/FAQAccordion';
import CtaBanner from '../components/CtaBanner';
import './CourseDetail.css';

export default function CourseDetail({ onOpenEnquiry }) {
  const { courseId } = useParams();

  const course = coursesData.find(c => c.slug === courseId || c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="course-detail-page">
      {/* Breadcrumb Header */}
      <section className="course-detail-hero section-bg-soft-blue">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/courses">Courses</Link>
            <ChevronRight size={14} />
            <span>{course.title}</span>
          </nav>

          <div className="course-hero-inner">
            <div className="course-hero-content">
              <span className={`badge ${course.badgeClass}`}>
                {course.category} Coaching Program
              </span>
              <h1 className="course-hero-title">{course.title}</h1>
              <p className="course-hero-tagline">{course.tagline}</p>
              <p className="course-hero-lead">{course.heroDesc}</p>

              <div className="course-hero-highlights">
                <div className="hero-spec-item">
                  <Clock size={18} className="text-primary" />
                  <div>
                    <strong>Duration</strong>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="hero-spec-item">
                  <Users size={18} className="text-primary" />
                  <div>
                    <strong>Batch Size</strong>
                    <span>{course.batchSize}</span>
                  </div>
                </div>
                <div className="hero-spec-item">
                  <Calendar size={18} className="text-primary" />
                  <div>
                    <strong>Timings</strong>
                    <span>{course.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="course-hero-actions">
                <button 
                  onClick={onOpenEnquiry} 
                  className="btn btn-primary btn-lg"
                >
                  Enroll / Book Trial Class <ArrowRight size={18} />
                </button>
                <a href="#syllabus" className="btn btn-secondary btn-lg">
                  Explore Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section">
        <div className="container">
          <div className="course-detail-grid">
            {/* Left Content Column */}
            <div className="course-main-column">
              {/* Program Overview */}
              <div className="course-content-block">
                <h2>Program Overview</h2>
                <p className="block-lead-p">{course.overview}</p>

                <h3 style={{ marginTop: '1.75rem', marginBottom: '1rem' }}>Subjects Covered</h3>
                <div className="detail-subjects-row">
                  {course.subjects.map((sub, i) => (
                    <div key={i} className="detail-subject-pill">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Learn & Features */}
              <div className="course-content-block">
                <h2>What Sets ASPIRE Coaching Apart</h2>
                <div className="features-checklist-grid">
                  {course.features.map((feat, i) => (
                    <div key={i} className="feature-check-card">
                      <div className="check-dot">
                        <CheckCircle2 size={18} />
                      </div>
                      <p>{feat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Breakdown */}
              <div id="syllabus" className="course-content-block">
                <h2>Curriculum & Syllabus Structure</h2>
                <p className="block-lead-p">
                  Designed strictly in line with Board regulations and competitive exam weightage.
                </p>

                <div className="curriculum-modules-list">
                  {course.curriculum.map((mod, idx) => (
                    <div key={idx} className="curriculum-module-card">
                      <div className="module-card-header">
                        <span className="module-idx">Module {idx + 1}</span>
                        <h4>{mod.module}</h4>
                      </div>
                      <div className="module-topics-tags">
                        {mod.topics.map((t, ti) => (
                          <span key={ti} className="module-topic-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing & Evaluation */}
              <div className="course-content-block">
                <h2>Testing & Performance Evaluation System</h2>
                <div className="test-system-grid">
                  <div className="test-sys-card">
                    <span className="test-badge">Weekly</span>
                    <h4>Chapter Concept Tests</h4>
                    <p>30-minute objective & subjective check to ensure 100% homework clarity before advancing.</p>
                  </div>
                  <div className="test-sys-card">
                    <span className="test-badge">Monthly</span>
                    <h4>Cumulative Exam Simulations</h4>
                    <p>Strictly timed offline exams on authentic OMR sheets (NEET) or Computer-Based Lab (JEE).</p>
                  </div>
                  <div className="test-sys-card">
                    <span className="test-badge">Continuous</span>
                    <h4>Parent App Scorecard</h4>
                    <p>Automated score reports, percentile charts, and teacher remarks delivered straight to parents.</p>
                  </div>
                </div>
              </div>

              {/* Course Specific FAQs */}
              <div className="course-content-block">
                <h2>Course FAQs</h2>
                <FAQAccordion items={faqData.slice(0, 4)} columns={1} />
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="course-sidebar-column">
              <div className="sidebar-sticky-card">
                <h3>Quick Admission Summary</h3>
                <div className="sidebar-summary-list">
                  <div className="summary-row">
                    <span>Course:</span>
                    <strong>{course.title}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Category:</span>
                    <strong>{course.category}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Timings:</span>
                    <strong>{course.schedule}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Location:</span>
                    <strong>Kausa, Mumbra, Thane</strong>
                  </div>
                  <div className="summary-row">
                    <span>Mode:</span>
                    <strong>Offline Classroom</strong>
                  </div>
                  <div className="summary-row">
                    <span>Demo Sessions:</span>
                    <strong className="text-teal">2 Free Trial Classes</strong>
                  </div>
                </div>

                <div className="sidebar-action-box">
                  <button onClick={onOpenEnquiry} className="btn btn-primary btn-lg full-width-btn">
                    Book Free Trial Class
                  </button>
                  <a href="tel:+917021220449" className="btn btn-secondary btn-md full-width-btn" style={{ marginTop: '0.75rem' }}>
                    Call: +91 70212 20449
                  </a>
                </div>

                <div className="sidebar-guarantee-note">
                  <ShieldCheck size={16} className="text-primary" />
                  <span>No obligation trial • Transparent offline fees</span>
                </div>
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
