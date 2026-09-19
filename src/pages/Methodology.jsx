import React from 'react';
import { 
  BookOpen, 
  Pencil, 
  ClipboardCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  RefreshCw,
  HelpCircle
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { methodologySteps } from '../data/methodologyData';
import './Methodology.css';

export default function Methodology({ onOpenEnquiry }) {
  return (
    <div className="methodology-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="gear" text="Pedagogy & Learning Cycle" variant="blue" />
          <h1 className="page-header-title">Our Teaching Methodology</h1>
          <p className="page-header-subtitle">
            A scientifically designed 5-step learning cycle that turns academic anxiety into structured mastery. Built for real conceptual depth, continuous testing, and personal improvement.
          </p>
        </div>
      </section>

      {/* The 5 Steps */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow-label">THE 5-STEP ASPIRE LEARNING CYCLE</span>
            <h2>Concept → Practice → Test → Analyze → Improve</h2>
            <p className="section-subtitle">
              Every topic in our curriculum passes through this rigorous five-tier validation process.
            </p>
          </div>

          <div className="methodology-detailed-list">
            {methodologySteps.map((step) => (
              <div key={step.stepNumber} className="methodology-step-detail-card">
                <div className="step-number-col">
                  <span className="big-step-num">{step.stepNumber}</span>
                  <div className={`step-circle-icon ${step.color}`}>
                    <BookOpen size={24} />
                  </div>
                </div>

                <div className="step-content-col">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc-p">{step.description}</p>

                  <div className="step-points-grid">
                    {step.details.map((item, i) => (
                      <div key={i} className="step-point-item">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Step 5: Continuous Improvement */}
            <div className="methodology-step-detail-card">
              <div className="step-number-col">
                <span className="big-step-num">05</span>
                <div className="step-circle-icon blue">
                  <RefreshCw size={24} />
                </div>
              </div>

              <div className="step-content-col">
                <h3 className="step-title">Continuous Improvement & Parent Visibility</h3>
                <p className="step-desc-p">
                  Learning does not end when the test paper is handed back. We identify weak concepts, conduct targeted remedial sessions, and keep parents updated in real-time via the ASPIRE app.
                </p>

                <div className="step-points-grid">
                  <div className="step-point-item">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Personalized error correction logbook</span>
                  </div>
                  <div className="step-point-item">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Bi-weekly Parent Teacher Meetings (PTM)</span>
                  </div>
                  <div className="step-point-item">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Live mobile app attendance and test reports</span>
                  </div>
                  <div className="step-point-item">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>Post-exam psychological motivation and counselling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DDRC Feature Callout */}
      <section className="section-tight section-bg-subtle">
        <div className="container">
          <div className="ddrc-feature-card">
            <div className="ddrc-content">
              <span className="badge badge-orange">Exclusive Feature</span>
              <h2>Daily Doubt Resolution Counter (DDRC)</h2>
              <p>
                Unresolved doubts are the number one cause of poor performance in Board and competitive exams. At ASPIRE, our dedicated Doubt Desks are open 6 days a week from 3:00 PM to 8:00 PM, allowing students to sit one-on-one with senior faculty to clear any tricky problem immediately.
              </p>
              <div className="ddrc-chips">
                <span>✓ 1-on-1 Dedicated Time</span>
                <span>✓ Zero Judgement Environment</span>
                <span>✓ Unlimited Questions Allowed</span>
              </div>
            </div>
            <button onClick={onOpenEnquiry} className="btn btn-primary btn-lg">
              Experience a Doubt Session <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
