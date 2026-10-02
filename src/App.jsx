import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollRevealObserver from './components/ScrollRevealObserver';
import EnquiryModal from './components/EnquiryModal';
import FloatingContact from './components/FloatingContact';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/PageLoader';
import './App.css';

// Lazy Loaded Pages for performance and optimal Core Web Vitals
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const Results = lazy(() => import('./pages/Results'));
const Methodology = lazy(() => import('./pages/Methodology'));
const TestSeries = lazy(() => import('./pages/TestSeries'));
const Updates = lazy(() => import('./pages/Updates'));
const FAQs = lazy(() => import('./pages/FAQs'));
const Contact = lazy(() => import('./pages/Contact'));
const Admissions = lazy(() => import('./pages/Admissions'));
const AppPortal = lazy(() => import('./pages/AppPortal'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [initialCourse, setInitialCourse] = useState('');

  const handleOpenEnquiry = (courseName = '') => {
    setInitialCourse(typeof courseName === 'string' ? courseName : '');
    setEnquiryOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealObserver />
      <div className="app-shell">
        {/* Skip Navigation for Keyboard Accessibility (WCAG 2.2 AA) */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        <main id="main-content" className="main-content" tabIndex="-1">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/courses" element={<Courses onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/courses/:courseId" element={<CourseDetail onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/batches" element={<Navigate to="/courses" replace />} />
                <Route path="/results" element={<Results onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/faculty" element={<Navigate to="/about" replace />} />
                <Route path="/methodology" element={<Methodology onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/centre" element={<Navigate to="/about" replace />} />
                <Route path="/test-series" element={<TestSeries onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/updates" element={<Updates onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/faqs" element={<FAQs onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/contact" element={<Contact onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/app/login" element={<AppPortal onOpenEnquiry={handleOpenEnquiry} />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer onOpenEnquiry={() => handleOpenEnquiry()} />
        <FloatingContact onOpenEnquiry={() => handleOpenEnquiry()} />

        <EnquiryModal 
          key={`${enquiryOpen ? 'open' : 'closed'}-${initialCourse}`}
          isOpen={enquiryOpen} 
          onClose={() => setEnquiryOpen(false)} 
          initialCourse={initialCourse}
        />
      </div>
    </Router>
  );
}
