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
  CheckCircle2,
  LogOut
} from 'lucide-react';
import Badge from '../components/Badge';
import './AppPortal.css';

export default function AppPortal({ onOpenEnquiry }) {
  const [activeRole, setActiveRole] = useState('student');
  const [appPreviewTab, setAppPreviewTab] = useState('attendance');

  // Login state
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInRole, setLoggedInRole] = useState('');
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const enteredId = credentials.id.trim().toLowerCase();
    const enteredPass = credentials.password;

    // Teacher authentication for muneebkhann036@gmail.com / teacher@123
    if (enteredId === 'muneebkhann036@gmail.com' && enteredPass === 'teacher@123') {
      setIsLoggedIn(true);
      setLoggedInRole('teacher');
      setLoginError('');
      return;
    }

    // Admin / Staff authentication for aspirelearningcentre@outlook.com / admin@123
    if (
      (enteredId === 'aspirelearningcentre@outlook.com' || enteredId === 'admin@aspire.com' || enteredId === 'admin') &&
      (enteredPass === 'admin@123' || enteredPass === 'aspire@123')
    ) {
      setIsLoggedIn(true);
      setLoggedInRole('admin');
      setLoginError('');
      return;
    }

    if (activeRole === 'teacher') {
      setLoginError('Invalid teacher credentials. Use registered email (muneebkhann036@gmail.com) and password (teacher@123).');
      return;
    }

    if (activeRole === 'admin') {
      setLoginError('Invalid admin credentials. Use admin email (aspirelearningcentre@outlook.com) and password (admin@123).');
      return;
    }

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
            {/* Left: Login Box / Logged In Dashboard */}
            <div className="portal-login-card">
              {isLoggedIn ? (
                <div className="faculty-dashboard-panel">
                  <div className="faculty-dash-header">
                    <div>
                      <span className="faculty-status-pill">
                        {loggedInRole === 'admin' ? '● Staff Admin Online' : '● Faculty Desk Online'}
                      </span>
                      <h3 style={{ marginTop: '0.4rem', color: 'var(--color-navy)' }}>
                        {loggedInRole === 'admin' ? 'Centre Admin Portal' : 'Faculty Portal'}
                      </h3>
                    </div>
                    <button 
                      onClick={() => { setIsLoggedIn(false); setLoggedInRole(''); setCredentials({ id: '', password: '' }); }}
                      className="faculty-logout-btn"
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>

                  {loggedInRole === 'admin' ? (
                    <>
                      <div className="faculty-profile-card">
                        <div className="faculty-avatar-circle" style={{ background: '#0F172A' }}>AD</div>
                        <div className="faculty-info">
                          <h4>ASPIRE Centre Administration</h4>
                          <span className="faculty-email-text">aspirelearningcentre@outlook.com</span>
                          <span className="faculty-role-tag">Centre Administrator • Kausa, Mumbra</span>
                        </div>
                      </div>

                      <div className="faculty-stats-row">
                        <div className="faculty-stat-box">
                          <strong>150+</strong>
                          <span>Enrolled Students</span>
                        </div>
                        <div className="faculty-stat-box">
                          <strong>4</strong>
                          <span>Batches Active</span>
                        </div>
                        <div className="faculty-stat-box">
                          <strong>5</strong>
                          <span>Faculty Mentors</span>
                        </div>
                      </div>

                      <div className="faculty-batch-list">
                        <span className="p-section-heading">Centre Overview & Operations:</span>
                        
                        <div className="faculty-batch-item">
                          <div>
                            <strong>Admissions Desk</strong>
                            <span>Open for 9th, 10th, JEE & NEET 2026</span>
                          </div>
                          <span className="badge badge-teal">Accepting</span>
                        </div>

                        <div className="faculty-batch-item">
                          <div>
                            <strong>Facility Status</strong>
                            <span>Falah Bldg, Room 102 • Open till 8:00 PM</span>
                          </div>
                          <span className="badge badge-blue">Operational</span>
                        </div>

                        <div className="faculty-batch-item">
                          <div>
                            <strong>Helpline Desk</strong>
                            <span>+91 70212 20449</span>
                          </div>
                          <span className="badge badge-teal">Active</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="faculty-profile-card">
                        <div className="faculty-avatar-circle">MK</div>
                        <div className="faculty-info">
                          <h4>Prof. Muneeb Khan</h4>
                          <span className="faculty-email-text">muneebkhann036@gmail.com</span>
                          <span className="faculty-role-tag">Senior Faculty & Academic Mentor</span>
                        </div>
                      </div>

                      <div className="faculty-stats-row">
                        <div className="faculty-stat-box">
                          <strong>4</strong>
                          <span>Batches</span>
                        </div>
                        <div className="faculty-stat-box">
                          <strong>{attendanceMarked ? '32/32' : '30/32'}</strong>
                          <span>Attendance</span>
                        </div>
                        <div className="faculty-stat-box">
                          <strong>3</strong>
                          <span>Doubts Open</span>
                        </div>
                      </div>

                      <div className="faculty-batch-list">
                        <span className="p-section-heading">Today's Teaching Schedule:</span>
                        
                        <div className="faculty-batch-item">
                          <div>
                            <strong>Foundation & 9th Batch</strong>
                            <span>4:00 PM – 6:00 PM • Room 102</span>
                          </div>
                          <button 
                            className={`btn-mark-present ${attendanceMarked ? 'marked' : ''}`}
                            onClick={() => setAttendanceMarked(!attendanceMarked)}
                          >
                            {attendanceMarked ? '✓ Saved' : 'Mark Attendance'}
                          </button>
                        </div>

                        <div className="faculty-batch-item">
                          <div>
                            <strong>10th Board Champions</strong>
                            <span>6:30 PM – 8:30 PM • Room 102</span>
                          </div>
                          <span className="badge badge-blue">Upcoming</span>
                        </div>

                        <div className="faculty-batch-item">
                          <div>
                            <strong>NEET / JEE Doubt Clinic</strong>
                            <span>Daily 3:00 PM – 4:00 PM</span>
                          </div>
                          <span className="badge badge-teal">3 Students Waiting</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>
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
                      {activeRole === 'teacher'
                        ? 'Enter registered teacher email and password to access the faculty desk.'
                        : activeRole === 'admin'
                        ? 'Enter registered admin email and password to access centre administration.'
                        : 'Enter your assigned ASPIRE Student ID or registered mobile number to proceed.'}
                    </p>
                  </div>

                  {activeRole === 'teacher' && (
                    <button 
                      type="button" 
                      className="teacher-quick-fill-badge"
                      onClick={() => setCredentials({ id: 'muneebkhann036@gmail.com', password: 'teacher@123' })}
                    >
                      <span>👨‍🏫 Click to Autofill Teacher Login:</span>
                      <code>muneebkhann036@gmail.com</code>
                    </button>
                  )}

                  {activeRole === 'admin' && (
                    <button 
                      type="button" 
                      className="teacher-quick-fill-badge"
                      onClick={() => setCredentials({ id: 'aspirelearningcentre@outlook.com', password: 'admin@123' })}
                    >
                      <span>👨‍💼 Click to Autofill Admin Login:</span>
                      <code>aspirelearningcentre@outlook.com</code>
                    </button>
                  )}

                  <form onSubmit={handleLoginSubmit} className="login-form">
                    <div className="form-group">
                      <label className="input-label">
                        {activeRole === 'teacher' 
                          ? 'Teacher / Faculty Email' 
                          : activeRole === 'admin'
                          ? 'Admin / Staff Email'
                          : activeRole === 'student' 
                          ? 'ASPIRE Student ID / Roll No' 
                          : 'Registered Mobile Number'}
                      </label>
                      <input 
                        type={activeRole === 'teacher' || activeRole === 'admin' ? 'email' : 'text'} 
                        required 
                        placeholder={
                          activeRole === 'teacher' 
                            ? 'muneebkhann036@gmail.com' 
                            : activeRole === 'admin'
                            ? 'aspirelearningcentre@outlook.com'
                            : activeRole === 'student' 
                            ? 'e.g. ASP-2026-409' 
                            : 'e.g. 7021220449'
                        } 
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
                        placeholder={
                          activeRole === 'teacher' 
                            ? 'teacher@123' 
                            : activeRole === 'admin'
                            ? 'admin@123'
                            : '••••••••'
                        } 
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
                      <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Please visit the Kausa, Mumbra centre reception or call +91 70212 20449 to reset your registered credentials.'); }}>
                        Forgot ID or PIN?
                      </a>
                      <span>•</span>
                      <button type="button" onClick={onOpenEnquiry} className="not-enrolled-btn">
                        Not enrolled yet? Enquire here
                      </button>
                    </div>
                  </form>
                </>
              )}

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
                        <strong className="user-name">
                          {isLoggedIn || activeRole === 'teacher' ? 'Prof. Muneeb Khan' : 'Aarav Sharma'}
                        </strong>
                        <span className="user-batch">
                          {isLoggedIn || activeRole === 'teacher' ? 'Faculty Portal • Room 102' : 'Class 10 Board Champions'}
                        </span>
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
