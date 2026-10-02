import React, { useState } from 'react';
import { 
  FileText, 
  Bell, 
  Lock, 
  Download, 
  KeyRound, 
  CheckCircle2, 
  LogOut
} from 'lucide-react';
import Badge from '../components/Badge';
import PageSEO from '../components/PageSEO';
import './AppPortal.css';

export default function AppPortal({ onOpenEnquiry }) {
  const [activeRole, setActiveRole] = useState('student');
  const [appPreviewTab, setAppPreviewTab] = useState('attendance');

  // Login state
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [loginNotice, setLoginNotice] = useState(null); // { type: 'info' | 'error' | 'success', text: string }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInRole, setLoggedInRole] = useState('');
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(null); // 'android' | 'ios' | null

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const enteredId = credentials.id.trim();
    const enteredPass = credentials.password.trim();

    if (!enteredId || !enteredPass) {
      setLoginNotice({
        type: 'error',
        text: 'Please enter both your registered ID/Email and your security PIN.'
      });
      return;
    }

    if (activeRole === 'teacher' || activeRole === 'admin') {
      setLoginNotice({
        type: 'info',
        text: 'Faculty & Administrative portal sessions require physical centre intranet access or two-factor hardware authentication. Please use the terminal in Room 102 or contact Centre Administration.'
      });
      return;
    }

    // For students and parents, grant verified simulation access to interactive portal
    setIsLoggedIn(true);
    setLoggedInRole(activeRole);
    setLoginNotice(null);
  };

  return (
    <div className="app-portal-page">
      <PageSEO
        title="Student & Parent App Portal | ASPIRE Learning Centre"
        description="Access the secure ASPIRE student & parent portal. Track real-time attendance, test scorecards, chapter schedules, homework assignments, and teacher updates."
        canonicalPath="/portal"
      />
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
                            <span>Open for JEE, NEET, Foundation, 10th & 9th 2026</span>
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
                      onClick={() => { setActiveRole('student'); setLoginNotice(null); }}
                    >
                      Student
                    </button>
                    <button 
                      className={`role-tab ${activeRole === 'parent' ? 'active' : ''}`}
                      onClick={() => { setActiveRole('parent'); setLoginNotice(null); }}
                    >
                      Parent
                    </button>
                    <button 
                      className={`role-tab ${activeRole === 'teacher' ? 'active' : ''}`}
                      onClick={() => { setActiveRole('teacher'); setLoginNotice(null); }}
                    >
                      Faculty
                    </button>
                    <button 
                      className={`role-tab ${activeRole === 'admin' ? 'active' : ''}`}
                      onClick={() => { setActiveRole('admin'); setLoginNotice(null); }}
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
                        ? 'Enter registered teacher ID and secure PIN to access the faculty desk.'
                        : activeRole === 'admin'
                        ? 'Enter registered staff administrative credentials to access operations.'
                        : 'Enter your assigned ASPIRE Student ID or registered mobile number to proceed.'}
                    </p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="login-form">
                    <div className="form-group">
                      <label htmlFor="portal-user-id" className="input-label">
                        {activeRole === 'teacher' 
                          ? 'Teacher / Faculty Email or ID' 
                          : activeRole === 'admin'
                          ? 'Admin / Staff Work Email'
                          : activeRole === 'student' 
                          ? 'ASPIRE Student ID / Roll No' 
                          : 'Registered Mobile Number'}
                      </label>
                      <input 
                        id="portal-user-id"
                        type={activeRole === 'teacher' || activeRole === 'admin' ? 'email' : 'text'} 
                        required 
                        placeholder={
                          activeRole === 'teacher' 
                            ? 'e.g. faculty@aspirelearningcentre.com' 
                            : activeRole === 'admin'
                            ? 'e.g. admin@aspirelearningcentre.com'
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
                      <label htmlFor="portal-password" className="input-label">Password / Security PIN</label>
                      <input 
                        id="portal-password"
                        type="password" 
                        required 
                        placeholder="••••••••" 
                        className="input-field"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      />
                    </div>

                    {loginNotice && (
                      <div className={`login-alert-banner ${loginNotice.type === 'error' ? 'alert-error' : 'alert-info'}`} style={{
                        background: loginNotice.type === 'error' ? '#FEF2F2' : '#EFF6FF',
                        border: `1px solid ${loginNotice.type === 'error' ? '#FECACA' : '#BFDBFE'}`,
                        color: loginNotice.type === 'error' ? '#991B1B' : '#1E40AF',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.85rem',
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'flex-start',
                        marginBottom: '1rem',
                        lineHeight: '1.45'
                      }}>
                        <Lock size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{loginNotice.text}</span>
                      </div>
                    )}

                    <button type="submit" className="btn btn-primary btn-lg full-width-btn">
                      <KeyRound size={18} /> Access Dashboard
                    </button>

                    <div className="login-help-links">
                      <button 
                        type="button" 
                        onClick={() => setHelpModalOpen(true)}
                        style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '0.85rem', padding: 0 }}
                      >
                        Forgot ID or PIN?
                      </button>
                      <span>•</span>
                      <button type="button" onClick={() => onOpenEnquiry()} className="not-enrolled-btn">
                        Not enrolled yet? Enquire here
                      </button>
                    </div>
                  </form>
                </>
              )}

              <div className="app-download-badges">
                <span>Download ASPIRE App on your device:</span>
                <div className="download-buttons-row">
                  <button className="store-badge-btn" onClick={() => setDownloadModalOpen('android')}>
                    <Download size={15} /> Google Play / Android APK
                  </button>
                  <button className="store-badge-btn" onClick={() => setDownloadModalOpen('ios')}>
                    <Download size={15} /> iOS Web App / PWA
                  </button>
                </div>
              </div>

              {/* Help Assistance Modal */}
              {helpModalOpen && (
                <div className="modal-backdrop" onClick={() => setHelpModalOpen(false)}>
                  <div className="modal-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '460px' }}>
                    <div className="modal-content-wrap">
                      <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.75rem' }}>Credential Assistance</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        To protect student privacy and attendance records, security PINs are issued in-person or via SMS to the guardian's registered mobile number.
                      </p>
                      <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                        <strong>Centre Administration Desk:</strong>
                        <p style={{ margin: '0.35rem 0' }}>Room 102, Falah Building, Kausa, Mumbra</p>
                        <p>Helpline: <a href="tel:+917021220449" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>+91 70212 20449</a></p>
                      </div>
                      <button onClick={() => setHelpModalOpen(false)} className="btn btn-primary btn-md full-width-btn">
                        Understood / Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Download Instructions Modal */}
              {downloadModalOpen && (
                <div className="modal-backdrop" onClick={() => setDownloadModalOpen(null)}>
                  <div className="modal-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
                    <div className="modal-content-wrap">
                      <h3 style={{ color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                        {downloadModalOpen === 'android' ? 'ASPIRE Android App Download' : 'ASPIRE iOS Web App Access'}
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        {downloadModalOpen === 'android' 
                          ? 'The official ASPIRE Learning Centre Android companion app provides real-time lecture notifications, attendance tracking, and DPP answer keys.'
                          : 'On iPhone and iPad, tap the Share icon in Safari and select "Add to Home Screen" to install the full ASPIRE portal application with offline caching.'}
                      </p>
                      <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                        <strong>Enrolled Student Access:</strong>
                        <p style={{ margin: '0.35rem 0' }}>Active batch enrolment is verified upon first device pairing.</p>
                        <p>Need setup assistance? Visit Room 102 or call <a href="tel:+917021220449" style={{ color: 'var(--color-primary)' }}>+91 70212 20449</a>.</p>
                      </div>
                      <button onClick={() => setDownloadModalOpen(null)} className="btn btn-primary btn-md full-width-btn">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
