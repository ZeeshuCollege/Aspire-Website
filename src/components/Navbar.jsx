import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UserCheck, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Batches', path: '/batches' },
    { name: 'Results', path: '/results' },
    { name: 'Centre', path: '/centre' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Announcement Micro-Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-tag">
              <Sparkles size={12} className="text-orange" /> New Batches Starting
            </span>
            <span className="top-bar-text">Std. 8–12, NEET & JEE 2026 Admissions Open!</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+917021220449" className="top-bar-link">
              <Phone size={13} /> +91 70212 20449
            </a>
            <span className="top-bar-divider">|</span>
            <Link to="/app/login" className="top-bar-link app-link">
              <UserCheck size={13} /> Student & Parent App
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand">
            <div className="brand-logo-wrap">
              <img 
                src="/images/logo.png" 
                alt="ASPIRE Learning Centre" 
                className="brand-logo-img"
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="navbar-nav desktop-nav">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  `nav-item-link ${isActive ? 'active' : ''}`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="navbar-actions desktop-actions">
            <button 
              onClick={onOpenEnquiry} 
              className="btn btn-primary btn-md enroll-btn"
              id="header-enroll-btn"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown / Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-inner">
            <div className="mobile-drawer-brand">
              <img src="/images/logo.png" alt="ASPIRE Learning Centre" className="mobile-drawer-logo-img" />
            </div>
            <div className="mobile-links-list">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  className={({ isActive }) => 
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  end={link.path === '/'}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} className="mobile-arrow" />
                </NavLink>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-contact-quick-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <a 
                  href="tel:+917021220449" 
                  className="btn btn-secondary btn-sm" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontSize: '0.8rem', padding: '0.6rem 0.5rem' }}
                >
                  <Phone size={14} /> Call Helpline
                </a>
                <a 
                  href="https://wa.me/917021220449?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20would%20like%20to%20know%20more%20about%20your%20courses." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary btn-sm" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontSize: '0.8rem', padding: '0.6rem 0.5rem', color: '#16A34A', borderColor: '#BBF7D0' }}
                >
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </div>
              <Link to="/app/login" className="mobile-app-link">
                <UserCheck size={16} /> Student & Parent App Portal
              </Link>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }} 
                className="btn btn-primary btn-lg full-width-btn"
              >
                Enroll Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
