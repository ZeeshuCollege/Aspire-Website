import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import './TestSeries.css';

export default function TestSeries({ onOpenEnquiry }) {

  return (
    <div className="test-series-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="award" text="Evaluation & Analytics" variant="blue" />
          <h1 className="page-header-title">ASPIRE Test Series & Diagnostics</h1>
          <p className="page-header-subtitle">
            Consistent testing bridges the gap between studying a topic and performing under timed exam conditions. Experience rigorous Board, NEET, and JEE mock assessments.
          </p>
        </div>
      </section>

      {/* 3 Pillars of Testing */}
      <section className="section">
        <div className="container">
          <div className="test-types-grid">
            <div className="test-type-card">
              <span className="test-frequency-tag">Weekly</span>
              <h3>Minor Chapter Tests</h3>
              <p>Conducted every Monday on the topics taught the previous week. Ensures students do not accumulate backlogs.</p>
              <ul className="test-feat-list">
                <li><CheckCircle2 size={15} /> 45 Minutes duration</li>
                <li><CheckCircle2 size={15} /> Evaluated within 48 hours</li>
                <li><CheckCircle2 size={15} /> Individual doubt clearance</li>
              </ul>
            </div>

            <div className="test-type-card featured">
              <span className="test-frequency-tag orange">Monthly</span>
              <h3>Major Cumulative Exams</h3>
              <p>Full 3-hour authentic simulations covering multiple units. Tests long-term retention and stamina.</p>
              <ul className="test-feat-list">
                <li><CheckCircle2 size={15} /> Printed authentic OMR sheets</li>
                <li><CheckCircle2 size={15} /> National percentile benchmarking</li>
                <li><CheckCircle2 size={15} /> Sent to parent app with ranking</li>
              </ul>
            </div>

            <div className="test-type-card">
              <span className="test-frequency-tag">Pre-Board / Pre-Exam</span>
              <h3>All-India Grand Mocks</h3>
              <p>15 full-length syllabus test series conducted from November to February before Board and entrance exams.</p>
              <ul className="test-feat-list">
                <li><CheckCircle2 size={15} /> CBSE/HSC answer presentation marking</li>
                <li><CheckCircle2 size={15} /> NTA CBT software lab simulation</li>
                <li><CheckCircle2 size={15} /> Detailed negative marking audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scorecard Preview Demo */}
      <section className="section section-bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <Badge icon="sparkles" text="Analytics Preview" variant="blue" />
            <h2>Inside the ASPIRE Performance Diagnostic</h2>
            <p className="section-subtitle">
              Enrolled students receive an in-depth performance breakdown after every major test via our student portal.
            </p>
          </div>

          <div className="mock-analytics-card">
            <div className="analytics-card-header">
              <div className="test-meta-info">
                <span className="sample-pill">Interactive Demo Report</span>
                <h3>ASPIRE Major Test Series — Mock Test #04</h3>
                <span>Date: Sept 12, 2026 | Test Duration: 180 Mins</span>
              </div>
              <div className="report-topper-score">
                <strong>Score: 654 / 720</strong>
                <span className="text-teal">Percentile: 99.1% (Rank 4 in Centre)</span>
              </div>
            </div>

            {/* Diagnostic Breakdown */}
            <div className="analytics-metrics-grid">
              <div className="metric-box">
                <span className="metric-lbl">Total Questions Attempted</span>
                <strong className="metric-val">172 / 180</strong>
                <span className="metric-status text-teal">95.5% Attempt Rate</span>
              </div>
              <div className="metric-box">
                <span className="metric-lbl">Accuracy Rate</span>
                <strong className="metric-val">91.2%</strong>
                <span className="metric-status text-primary">157 Correct / 15 Incorrect</span>
              </div>
              <div className="metric-box">
                <span className="metric-lbl">Negative Marks Lost</span>
                <strong className="metric-val">-15 Marks</strong>
                <span className="metric-status text-orange">Actionable Gap Identified</span>
              </div>
              <div className="metric-box">
                <span className="metric-lbl">Avg Time Per Question</span>
                <strong className="metric-val">58 Seconds</strong>
                <span className="metric-status text-teal">Ideal Pacing (Target &lt; 65s)</span>
              </div>
            </div>

            {/* Subject Mastery Breakdown */}
            <div className="subject-mastery-section">
              <h4>Subject Mastery Breakdown</h4>
              <div className="subject-bars-list">
                <div className="sub-bar-item">
                  <div className="sub-bar-labels">
                    <span>Physics (Mechanics & Electrodynamics)</span>
                    <strong>162 / 180 (90%)</strong>
                  </div>
                  <div className="sub-bar-track">
                    <div className="sub-bar-fill" style={{ width: '90%', background: 'var(--color-primary)' }}></div>
                  </div>
                </div>

                <div className="sub-bar-item">
                  <div className="sub-bar-labels">
                    <span>Chemistry (Organic Reaction Mechanisms)</span>
                    <strong>158 / 180 (88%)</strong>
                  </div>
                  <div className="sub-bar-track">
                    <div className="sub-bar-fill" style={{ width: '88%', background: 'var(--color-violet)' }}></div>
                  </div>
                </div>

                <div className="sub-bar-item">
                  <div className="sub-bar-labels">
                    <span>Biology / Mathematics (Core Fundamentals)</span>
                    <strong>334 / 360 (93%)</strong>
                  </div>
                  <div className="sub-bar-track">
                    <div className="sub-bar-fill" style={{ width: '93%', background: 'var(--color-teal)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="diagnosis-action-note">
              <AlertTriangle size={20} className="text-orange" />
              <div>
                <strong>Mentor's Remedial Remark:</strong>
                <p>Excellent pace in Biology and Chemistry. 8 marks lost due to calculation hurry in Physics Kinematics. Scheduled for 1-on-1 DDRC session with Rohit sir on Thursday.</p>
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
