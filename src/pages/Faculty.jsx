import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { facultyData } from '../data/facultyData';
import './Faculty.css';

export default function Faculty({ onOpenEnquiry }) {
  const [subjectFilter, setSubjectFilter] = useState('All');

  const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology & Botany'];

  const filteredFaculty = facultyData.filter((f) => {
    if (subjectFilter === 'All') return true;
    return f.subject.includes(subjectFilter.split(' ')[0]);
  });

  return (
    <div className="faculty-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="users" text="Our Academic Mentors" variant="blue" />
          <h1 className="page-header-title">Learn From Experienced Educators</h1>
          <p className="page-header-subtitle">
            Our faculty members are subject specialists from premier institutions like the IITs and top central universities, bringing a passion for concept clarity and student success.
          </p>
        </div>
      </section>

      {/* Faculty Philosophy Strip */}
      <section className="section-tight section-bg-subtle">
        <div className="container">
          <div className="faculty-philosophy-row">
            <div className="fac-phil-box">
              <span className="fac-phil-num">100%</span>
              <strong>Permanent Full-Time Faculty</strong>
              <p>No guest lecturers or revolving teachers. Your faculty stays with your batch till exam day.</p>
            </div>
            <div className="fac-phil-box">
              <span className="fac-phil-num">1-on-1</span>
              <strong>Daily Doubt Resolution</strong>
              <p>Faculty members are available daily in our doubt cubicles for personal assistance.</p>
            </div>
            <div className="fac-phil-box">
              <span className="fac-phil-num">10+ Yrs</span>
              <strong>Average Teaching Experience</strong>
              <p>Seasoned educators who know common student pitfalls and exam marking schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="section">
        <div className="container">
          <div className="faculty-filter-tabs">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSubjectFilter(sub)}
                className={`fac-filter-btn ${subjectFilter === sub ? 'active' : ''}`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="faculty-full-grid">
            {filteredFaculty.map((faculty) => (
              <div key={faculty.id} className="faculty-detail-profile-card">
                <div className="profile-img-wrap">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="profile-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
                    }}
                  />
                  <span className="profile-subject-badge">{faculty.subject}</span>
                </div>

                <div className="profile-info-body">
                  <h3 className="profile-name">{faculty.name}</h3>
                  <div className="profile-degree">
                    <GraduationCap size={16} className="text-primary" />
                    <span>{faculty.degree}</span>
                  </div>
                  <span className="profile-exp">{faculty.experience}</span>

                  <blockquote className="profile-quote-callout">
                    “{faculty.quote}”
                  </blockquote>

                  <p className="profile-bio">{faculty.bio}</p>

                  <div className="profile-specialization-box">
                    <strong>Specialization:</strong>
                    <span>{faculty.specialization}</span>
                  </div>

                  <button onClick={onOpenEnquiry} className="btn btn-secondary btn-sm full-width-btn" style={{ marginTop: '1.25rem' }}>
                    Request Demo Class with {faculty.name.split(' ')[1]} Sir/Ma'am
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
