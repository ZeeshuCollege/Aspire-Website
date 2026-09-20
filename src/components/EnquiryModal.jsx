import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Sparkles, Send, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose, initialCourse = "" }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    course: initialCourse || 'Class 10',
    batchTiming: 'Evening (5:00 PM - 7:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate fast submission & local persistence
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('aspire_enquiries') || '[]');
      const newRecord = {
        id: `ENQ-${Date.now().toString().slice(-5)}`,
        ...formData,
        date: new Date().toISOString()
      };
      localStorage.setItem('aspire_enquiries', JSON.stringify([newRecord, ...existing]));

      setLoading(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      course: 'Class 10',
      batchTiming: 'Evening (5:00 PM - 7:00 PM)',
      message: ''
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="modal-content-wrap">
            <div className="modal-header">
              <div className="modal-header-logo-row">
                <img src="/images/logo.png" alt="ASPIRE Learning Centre" className="modal-logo-img" />
                <span className="badge badge-blue">
                  <Sparkles size={13} /> Offline Batch Admissions
                </span>
              </div>
              <h3 className="modal-title">Enquire for Admissions</h3>
              <p className="modal-desc">
                Fill out the quick form below. Our academic counsellor will get in touch within 2 hours to discuss batch options and arrange a free demo session.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label className="input-label">Student Name *</label>
                  <input 
                    type="text" 
                    name="studentName"
                    required
                    placeholder="e.g. Aarav Sharma"
                    className="input-field"
                    value={formData.studentName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="input-label">Parent / Guardian Name *</label>
                  <input 
                    type="text" 
                    name="parentName"
                    required
                    placeholder="e.g. Mr. Sharma"
                    className="input-field"
                    value={formData.parentName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="input-label">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="input-field"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="input-label">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="name@email.com"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="input-label">Interested Course *</label>
                  <select 
                    name="course" 
                    className="input-field"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="Class 8">Class 8 Foundation</option>
                    <option value="Class 9">Class 9 Foundation</option>
                    <option value="Class 10">Class 10 Board Champions</option>
                    <option value="Class 11 Science">Class 11 Science (PCM / PCB)</option>
                    <option value="Class 12 Science">Class 12 Science (PCM / PCB)</option>
                    <option value="NEET Medical">NEET Medical Entrance</option>
                    <option value="JEE Main">JEE Main Engineering</option>
                    <option value="JEE Advanced">JEE Advanced Apex Program</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="input-label">Preferred Batch Slot</label>
                  <select 
                    name="batchTiming" 
                    className="input-field"
                    value={formData.batchTiming}
                    onChange={handleChange}
                  >
                    <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                    <option value="Evening (6:30 PM - 8:30 PM)">Evening (6:30 PM - 8:30 PM)</option>
                    <option value="Evening (7:00 PM - 9:00 PM)">Evening (7:00 PM - 9:00 PM)</option>
                    <option value="Morning Batch">Morning Batch (NEET/JEE)</option>
                    <option value="Weekend Intensive">Weekend Intensive Batch</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="input-label">Any specific questions or current school/board?</label>
                <textarea 
                  name="message" 
                  rows={2}
                  placeholder="e.g. CBSE board student, interested in demo class for Physics & Maths..."
                  className="input-field"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-lg full-width-btn"
                disabled={loading}
              >
                {loading ? 'Submitting Enquiry...' : (
                  <>
                    <Send size={18} /> Request Academic Callback
                  </>
                )}
              </button>

              <p className="modal-privacy-note">
                🔒 Your details are strictly confidential. We do not spam.
              </p>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="text-teal" />
            </div>
            <h3 className="success-title">Enquiry Received Successfully!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.parentName || formData.studentName}</strong>. Our senior academic counsellor has received your request for <strong>{formData.course}</strong>.
            </p>

            <div className="success-roadmap-card">
              <h4 className="roadmap-title">What happens next:</h4>
              <ul className="roadmap-list">
                <li>
                  <Phone size={16} className="text-primary" />
                  <span><strong>Callback within 2 hours:</strong> We'll call on <strong>{formData.phone}</strong> to confirm batch timing and current syllabus pace.</span>
                </li>
                <li>
                  <Calendar size={16} className="text-orange" />
                  <span><strong>Free Demo Pass:</strong> We will reserve 2 complimentary trial lectures in our modern smart classroom.</span>
                </li>
                <li>
                  <MapPin size={16} className="text-teal" />
                  <span><strong>Centre Visit:</strong> You can visit Falah Building, Kausa, Mumbra anytime between 9 AM to 8 PM.</span>
                </li>
              </ul>
            </div>

            <button onClick={handleReset} className="btn btn-primary btn-md">
              Done / Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
