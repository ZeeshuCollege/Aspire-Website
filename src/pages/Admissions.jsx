import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck
} from 'lucide-react';
import Badge from '../components/Badge';
import confetti from 'canvas-confetti';
import './Admissions.css';

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    currentClass: 'Class 10',
    interestedCourse: 'JEE (Main + Adv.)',
    previousSchool: '',
    board: 'CBSE',
    batchTiming: 'Evening (5:00 PM - 7:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('aspire_enquiries') || '[]');
      const newRecord = {
        id: `ADM-${Date.now().toString().slice(-5)}`,
        ...formData,
        date: new Date().toISOString()
      };
      localStorage.setItem('aspire_enquiries', JSON.stringify([newRecord, ...existing]));

      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 600);
  };

  const steps = [
    {
      num: "01",
      title: "Submit Enquiry",
      desc: "Fill the admission enquiry form online or call our helpline to express your interest."
    },
    {
      num: "02",
      title: "Free Diagnostic & Trial",
      desc: "Attend 2 complimentary trial lectures in our smart classroom to experience our teaching first-hand."
    },
    {
      num: "03",
      title: "Counselling & Batch Allocation",
      desc: "Consult with our Academic Director to select the ideal batch timing and study plan."
    },
    {
      num: "04",
      title: "Enrolment & App Activation",
      desc: "Receive your printed study modules and get student/parent login access to the ASPIRE app."
    }
  ];

  return (
    <div className="admissions-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="graduation" text="Admission Portal 2026–27" variant="blue" />
          <h1 className="page-header-title">Admissions & Enrolment Process</h1>
          <p className="page-header-subtitle">
            Take the first step towards academic transformation. We maintain transparent fees, merit scholarships, and limited 25-student batches.
          </p>
        </div>
      </section>

      {/* 4-Step Admission Journey */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow-label">SIMPLE & TRANSPARENT</span>
            <h2>Your Path to Joining ASPIRE</h2>
            <p className="section-subtitle">
              From your first phone call to your first classroom lecture, our counsellors guide you every step of the way.
            </p>
          </div>

          <div className="admission-steps-grid">
            {steps.map((st, i) => (
              <div key={i} className="admission-step-box">
                <span className="adm-step-num">{st.num}</span>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship ATSE Section */}
      <section className="section-tight section-bg-navy">
        <div className="container">
          <div className="atse-banner-card">
            <div className="atse-text-side">
              <span className="badge badge-orange">Scholarship Opportunity</span>
              <h2>ASPIRE Talent Search Examination (ATSE)</h2>
              <p>
                Deserving and meritorious students can earn up to <strong>100% fee concession</strong> based on our diagnostic aptitude test conducted every alternate Sunday.
              </p>
              <div className="atse-perks">
                <span>✓ Evaluates NCERT Science & Maths fundamentals</span>
                <span>✓ Diagnostic gap-analysis report provided free</span>
                <span>✓ Direct admission into Apex batches for top 5% scorers</span>
              </div>
            </div>
            <div className="atse-cta-side">
              <div className="atse-box-highlight">
                <span className="atse-call-text">Next Test Date:</span>
                <strong>Upcoming Sunday, 10:00 AM</strong>
                <a href="#admission-form" className="btn btn-white btn-md" style={{ marginTop: '1rem' }}>
                  Register for ATSE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Form Section */}
      <section id="admission-form" className="section section-bg-subtle">
        <div className="container">
          <div className="admission-form-wrapper">
            <div className="form-intro-header text-center">
              <Badge icon="sparkles" text="Official Application" variant="blue" />
              <h2>Admission & Callback Request Form</h2>
              <p className="section-subtitle">
                Please complete the details below. Our admissions coordinator will contact you to confirm batch availability.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="admissions-full-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="input-label">Student Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Aryan Sharma" 
                      className="input-field"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label">Parent / Guardian Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rajesh Sharma" 
                      className="input-field"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="input-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      pattern="[0-9]{10}"
                      placeholder="10-digit phone number" 
                      className="input-field"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-label">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      placeholder="name@gmail.com" 
                      className="input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label className="input-label">Current Grade / Standard *</label>
                    <select 
                      className="input-field"
                      value={formData.currentClass}
                      onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                    >
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                      <option value="Repeater / Dropper">Repeater / Dropper</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="input-label">Education Board *</label>
                    <select 
                      className="input-field"
                      value={formData.board}
                      onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                    >
                      <option value="CBSE">CBSE Board</option>
                      <option value="ICSE / ISC">ICSE / ISC Board</option>
                      <option value="Maharashtra State Board">Maharashtra State Board (SSC/HSC)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="input-label">Interested Course *</label>
                    <select 
                      className="input-field"
                      value={formData.interestedCourse}
                      onChange={(e) => setFormData({ ...formData, interestedCourse: e.target.value })}
                    >
                      <option value="JEE (Main + Adv.)">JEE (Main + Adv.)</option>
                      <option value="NEET Medical">NEET Medical Entrance</option>
                      <option value="Class 8 Foundation">Class 8 Foundation</option>
                      <option value="Class 10 Board Champions">Class 10 Board Champions</option>
                      <option value="Class 9 Foundation">Class 9 Foundation</option>
                      <option value="Class 11 & 12 Science">Class 11 & 12 Science (PCM/PCB)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="input-label">Previous School / College Name (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Podar International School, Andheri"
                    className="input-field"
                    value={formData.previousSchool}
                    onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="input-label">Any specific questions or request for trial class date?</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g. Looking to attend demo lecture this Friday evening..."
                    className="input-field"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg full-width-btn"
                  disabled={loading}
                >
                  {loading ? 'Submitting Application...' : (
                    <>
                      <Send size={18} /> Submit Admission Enquiry
                    </>
                  )}
                </button>

                <div className="form-privacy-foot">
                  <ShieldCheck size={16} className="text-teal" />
                  <span>Your information is protected and used solely by ASPIRE Learning Centre counsellors.</span>
                </div>
              </form>
            ) : (
              <div className="admission-success-card">
                <div className="adm-success-icon">
                  <CheckCircle2 size={64} className="text-teal" />
                </div>
                <h3>Admission Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.parentName || formData.studentName}</strong>. Your enquiry for <strong>{formData.interestedCourse}</strong> has been registered.
                </p>
                <div className="adm-call-reminder">
                  <span>Our academic counsellor will call you on <strong>{formData.phone}</strong> within 2 hours.</span>
                </div>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-primary btn-md"
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
