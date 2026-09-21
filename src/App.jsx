import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollRevealObserver from './components/ScrollRevealObserver';
import EnquiryModal from './components/EnquiryModal';
import FloatingContact from './components/FloatingContact';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Results from './pages/Results';
import Faculty from './pages/Faculty';
import Methodology from './pages/Methodology';
import TestSeries from './pages/TestSeries';
import Updates from './pages/Updates';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import AppPortal from './pages/AppPortal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

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
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<Courses onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses/:courseId" element={<CourseDetail onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/batches" element={<Navigate to="/courses" replace />} />
            <Route path="/results" element={<Results onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/faculty" element={<Faculty onOpenEnquiry={handleOpenEnquiry} />} />
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
        </main>

        <Footer onOpenEnquiry={() => handleOpenEnquiry()} />
        <FloatingContact onOpenEnquiry={() => handleOpenEnquiry()} />

        <EnquiryModal 
          isOpen={enquiryOpen} 
          onClose={() => setEnquiryOpen(false)} 
          initialCourse={initialCourse}
        />
      </div>
    </Router>
  );
}
