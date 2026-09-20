import React, { useState } from 'react';
import { 
  CheckCircle2, 
  GraduationCap, 
  Quote 
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { resultsData, resultsStats } from '../data/resultsData';
import './Results.css';

export default function Results({ onOpenEnquiry }) {
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const examOptions = ['All', 'JEE Advanced', 'JEE Main', 'NEET', 'Class 10', 'Class 12'];
  const yearOptions = ['All', '2025', '2024'];

  const filteredResults = resultsData.filter((r) => {
    const matchExam = selectedExam === 'All' || r.category === selectedExam;
    const matchYear = selectedYear === 'All' || r.year === selectedYear;
    return matchExam && matchYear;
  });

  return (
    <div className="results-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="award" text="Track Record of Excellence" variant="orange" />
          <h1 className="page-header-title">Our Results & Achievements</h1>
          <p className="page-header-subtitle">
            Results that reflect disciplined preparation, rigorous testing, and personal attention. Verified achievements of our students across Mumbai.
          </p>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="section-tight section-bg-navy">
        <div className="container">
          <div className="results-stats-row">
            {resultsStats.map((stat, idx) => (
              <div key={idx} className="result-stat-box">
                <span className="stat-big-val">{stat.value}</span>
                <strong className="stat-main-lbl">{stat.label}</strong>
                <span className="stat-sub-txt">{stat.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Filter & Cards */}
      <section className="section">
        <div className="container">
          <div className="results-filters-row">
            <div className="filter-group">
              <span className="filter-lbl">Filter by Exam:</span>
              <div className="filter-pills">
                {examOptions.map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setSelectedExam(ex)}
                    className={`filter-pill-btn ${selectedExam === ex ? 'active' : ''}`}
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span className="filter-lbl">Year:</span>
              <div className="filter-pills">
                {yearOptions.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`filter-pill-btn ${selectedYear === yr ? 'active' : ''}`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="results-cards-grid">
            {filteredResults.map((res) => (
              <div key={res.id} className="topper-result-card">
                <div className="topper-header">
                  <span className="topper-exam-badge">{res.exam}</span>
                  <span className="topper-year-tag">{res.year}</span>
                </div>

                <div className="topper-score-highlight">
                  <span className="score-primary-val">{res.score}</span>
                  <span className="score-secondary-val">{res.percentile}</span>
                </div>

                <div className="topper-identity-block">
                  <h3 className="topper-name">{res.studentName}</h3>
                  <p className="topper-course">{res.course}</p>
                  <p className="topper-school">{res.school}</p>
                </div>

                <div className="topper-quote-box">
                  <Quote size={18} className="topper-quote-icon" />
                  <p className="topper-quote-p">“{res.quote}”</p>
                </div>

                <div className="topper-college-footer">
                  <GraduationCap size={16} className="college-icon" />
                  <span>{res.college}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency / Verifiable Notice */}
          <div className="results-policy-box">
            <CheckCircle2 size={24} className="text-teal" />
            <div>
              <h4>100% Verified Results Policy</h4>
              <p>
                At ASPIRE Learning Centre, all published results, scores, and parent testimonials correspond strictly to classroom-enrolled students with verifiable roll numbers and scorecards. We do not purchase or inflate rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
