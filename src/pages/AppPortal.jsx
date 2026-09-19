import React, { useState } from 'react';
import { 
  Smartphone, 
  UserCheck, 
  Calendar, 
  ClipboardCheck, 
  FileText, 
  Bell, 
  Lock, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Download,
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import Badge from '../components/Badge';
import './AppPortal.css';

export default function AppPortal({ onOpenEnquiry }) {
  const [activeRole, setActiveRole] = useState('student');
  const [appPreviewTab, setAppPreviewTab] = useState('attendance');

  // Mock login handler
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('Demo Mode: Live authentication is restricted to registered ASPIRE enrolled students and guardians. Contact centre administration for your security pin.');
  };

  return (
    <div className="app-portal-page">
      {/* Header */}
      <section className="page-header-section section-bg-navy">
        <div className="container text-center">
          <Badge icon="sparkles" text="ASPIRE Digital Ecosystem" variant="blue" />
          <h1 className="page-header-title text-white">Your ASPIRE Journey, Connected.</h1>
          <p className="page-header-subtitle" style={{ color: '#CBD5E1' }}>
            A private, secure digital portal connecting enrolled students, parents, and faculty. Track daily attendance, lecture schedules, test scorecards, and study materials in real-time.
          </p>
        </div>
      </section>

      {/* Main Grid: Login Box + Interactive Phone Mockup */}
      <section className="section">
        <div className="container">
          <div className="app-portal-layout">
            {/* Left: Login Box */}
            <div className="portal-login-card">
              <div className="role-selector-tabs">
                <button 
                  className={`role-tab ${activeRole === 'student' ? 'active' : ''}`}
                  onClick={() => { setActiveRole('student'); setLoginError(''); }}
                >
                  Student
                </button>
                <button 
                  className={`role-tab ${activeRole === 'parent' ? 'active' : ''}`}
                  onClick={() => { setActiveRole('parent'); setLoginError(''); }}
                >
                  Parent
                </button>
                <button 
                  className={`role-tab ${activeRole === 'teacher' ? 'active' : ''}`}
                  onClick={() => { setActiveRole('teacher'); setLoginError(''); }}
                >
                  Faculty
                </button>
                <button 
                  className={`role-tab ${activeRole === 'admin' ? 'active' : ''}`}
                  onClick={() => { setActiveRole('admin'); setLoginError(''); }}
                >
                  Staff
                </button>
              </div>

              <div className="login-box-header">
                <img src="/images/logo.png" alt="ASPIRE Learning Centre" className="portal-header-logo-img" />
                <h3>
                  {activeRole === 'student' && 'Student App Login'}
                  {activeRole === 'parent' && 'Parent Guardian Portal'}
                  {activeRole === 'teacher' && 'Faculty Attendance Desk'}
                  {activeRole === 'admin' && 'Centre Staff Admin'}
                </h3>
                <p>
                  Enter your assigned ASPIRE Student ID or registered mobile number to proceed.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="login-form">
                <div className="form-group">
                  <label className="input-label">
                    {activeRole === 'student' ? 'ASPIRE Student ID / Roll No' : 'Registered Mobile Number'}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder={activeRole === 'student' ? 'e.g. ASP-2026-409' : 'e.g. 7021220449'} 
                    className="input-field"
                    value={credentials.id}
                    onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="input-label">Password / Security PIN</label>
                  <input 
                    type="password" 
                    required 
                    placeholder="••••••••" 
                    className="input-field"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  />
                </div>

                {loginError && (
                  <div className="login-alert-banner">
                    <Lock size={16} />
                    <span>{loginError}</span>
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-lg full-width-btn">
                  <KeyRound size={18} /> Access Dashboard
                </button>

                <div className="login-help-links">
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Please visit the Andheri (E) centre reception or call +91 70212 20449 to reset your registered credentials.'); }}>
                    Forgot ID or PIN?
                  </a>
                  <span>•</span>
                  <button type="button" onClick={onOpenEnquiry} className="not-enrolled-btn">
                    Not enrolled yet? Enquire here
                  </button>
                </div>
              </form>

              <div className="app-download-badges">
                <span>Download ASPIRE App on your device:</span>
                <div className="download-buttons-row">
                  <button className="store-badge-btn" onClick={() => alert('ASPIRE Android App APK download starting...')}>
                    <Download size={15} /> Google Play / Android
                  </button>
                  <button className="store-badge-btn" onClick={() => alert('ASPIRE iOS Web App launch instructions...')}>
                    <Download size={15} /> iOS App Store
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Interactive Phone Mockup Preview */}
            <div className="phone-mockup-wrapper">
              <div className="mockup-header-callout">
                <span className="badge badge-teal">Live App Simulation</span>
                <h3>Try the Student App Interface</h3>
                <p>Click the navigation tabs below to preview the mobile experience:</p>
              </div>

              {/* Phone Device Frame */}
              <div className="phone-device-frame">
                <div className="phone-notch"></div>

                <div className="phone-screen-content">
                  {/* Mock App Header */}
                  <div className="phone-app-header">
                    <div className="phone-user-brand-group">
                      <img src="/images/logo-emblem.png" alt="ASPIRE" className="phone-app-emblem" />
                      <div>
                        <span className="user-greeting">Welcome back,</span>
                        <strong className="user-name">Aarav Sharma</strong>
                        <span className="user-batch">Class 10 Board Champions</span>
                      </div>
                    </div>
                    <div className="phone-notif-bell">
                      <Bell size={18} />
                    </div>
                  </div>

                  {/* App Tab Switcher */}
                  <div className="phone-tabs-bar">
                    <button 
                      className={`p-tab ${appPreviewTab === 'attendance' ? 'active' : ''}`}
                      onClick={() => setAppPreviewTab('attendance')}
                    >
                      Attendance
                    </button>
                    <button 
                      className={`p-tab ${appPreviewTab === 'timetable' ? 'active' : ''}`}
                      onClick={() => setAppPreviewTab('timetable')}
                    >
                      Timetable
                    </button>
                    <button 
                      className={`p-tab ${appPreviewTab === 'tests' ? 'active' : ''}`}
                      onClick={() => setAppPreviewTab('tests')}
                    >
                      Scores
                    </button>
                    <button 
                      className={`p-tab ${appPreviewTab === 'materials' ? 'active' : ''}`}
                      onClick={() => setAppPreviewTab('materials')}
                    >
                      DPPs
                    </button>
                  </div>

                  {/* App Screen Views */}
                  <div className="phone-view-container">
                    {appPreviewTab === 'attendance' && (
                      <div className="phone-view-content animate-fade-in">
                        <div className="p-card stat-highlight">
                          <span>Overall Attendance</span>
                          <strong>96.4%</strong>
                          <span className="p-sub-text text-teal">✓ Consistently Punctual</span>
                        </div>

                        <div className="p-activity-list">
                          <span className="p-section-heading">Recent Offline Punches:</span>
                          <div className="p-activity-item">
                            <CheckCircle2 size={16} className="text-teal" />
                            <div>
                              <strong>Today, 4:58 PM — Classroom A-2</strong>
                              <span>Biometric Punch Verified</span>
                            </div>
                          </div>
                          <div className="p-activity-item">
                            <CheckCircle2 size={16} className="text-teal" />
                            <div>
                              <strong>Yesterday, 4:55 PM — Classroom A-2</strong>
                              <span>Biometric Punch Verified</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {appPreviewTab === 'timetable' && (
                      <div className="phone-view-content animate-fade-in">
                        <span className="p-section-heading">Today's Lectures:</span>
                        <div className="p-card lecture-card">
                          <div className="p-time-badge">5:00 PM - 6:00 PM</div>
                          <h4>Physics: Light & Refraction</h4>
                          <span>Ms. Priya Deshmukh • Classroom A-2</span>
                        </div>

                        <div className="p-card lecture-card">
                          <div className="p-time-badge">6:00 PM - 7:00 PM</div>
                          <h4>Mathematics: Quadratic Equations</h4>
                          <span>Mr. Rohit Sharma • Classroom A-2</span>
                        </div>
                      </div>
                    )}

                    {appPreviewTab === 'tests' && (
                      <div className="phone-view-content animate-fade-in">
                        <span className="p-section-heading">Latest Scorecard:</span>
                        <div className="p-card test-card">
                          <div className="test-header-p">
                            <strong>Class 10 Full Board Mock #02</strong>
                            <span className="test-score-p">96 / 100</span>
                          </div>
                          <span className="p-sub-text">Rank #2 in Centre • Percentile: 98.8%</span>
                          <div className="mini-progress-bar">
                            <div className="mini-fill" style={{ width: '96%' }}></div>
                          </div>
                          <button className="btn btn-primary btn-sm full-width-btn" style={{ marginTop: '0.75rem' }}>
                            View Detailed Answer Sheet
                          </button>
                        </div>
                      </div>
                    )}

                    {appPreviewTab === 'materials' && (
                      <div className="phone-view-content animate-fade-in">
                        <span className="p-section-heading">Available Study Packs:</span>
                        <div className="p-card mat-item">
                          <FileText size={20} className="text-primary" />
                          <div>
                            <strong>Mathematics DPP #14: Polynomials</strong>
                            <span>Uploaded 2 days ago • PDF (1.2 MB)</span>
                          </div>
                        </div>
                        <div className="p-card mat-item">
                          <FileText size={20} className="text-primary" />
                          <div>
                            <strong>Physics Formula Handbook (Class 10)</strong>
                            <span>Comprehensive Formula Sheet</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
