import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';
import './Footer.css';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="footer-wrap">
      <div className="container footer-main">
        {/* Brand Col */}
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-brand-link">
            <div className="footer-logo-block">
              <img 
                src="/images/logo-white-text.png" 
                alt="ASPIRE Learning Centre" 
                className="footer-logo-img" 
              />
              <span className="footer-brand-motto">Learn • Grow • Achieve</span>
            </div>
          </Link>
          <p className="footer-brand-desc">
            ASPIRE Learning Centre is a premier offline coaching institute in Kausa, Mumbra, Thane, dedicated to conceptual clarity, personal mentorship, and consistent results for JEE (Main + Adv.), NEET, Foundation, 10th, and 9th.
          </p>

          <div className="footer-contact-mini">
            <div className="footer-contact-item">
              <MapPin size={16} className="text-primary" />
              <span>Falah Building, Room No. 102, Kausa, Mumbra, Thane – 400612</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="text-primary" />
              <a href="tel:+917021220449">+91 70212 20449</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="text-primary" />
              <a href="mailto:aspirelearningcentre@outlook.com">aspirelearningcentre@outlook.com</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/methodology">Teaching Methodology</Link></li>
          </ul>
        </div>

        {/* Resources & Courses */}
        <div className="footer-col">
          <h4 className="footer-col-title">Courses</h4>
          <ul className="footer-links-list">
            <li><Link to="/courses/jee">JEE (Main + Adv.)</Link></li>
            <li><Link to="/courses/neet">NEET</Link></li>
            <li><Link to="/courses/foundation">Foundation</Link></li>
            <li><Link to="/courses/std-10">10th</Link></li>
            <li><Link to="/courses/std-9">9th</Link></li>
            <li><Link to="/test-series">ASPIRE Test Series</Link></li>
          </ul>
        </div>

        {/* Resources & Portal */}
        <div className="footer-col">
          <h4 className="footer-col-title">Resources</h4>
          <ul className="footer-links-list">
            <li><Link to="/contact">Contact & Location</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/updates">Announcements</Link></li>
            <li><Link to="/app/login">Student & Parent Portal</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Follow & Newsletter */}
        <div className="footer-col footer-col-newsletter">
          <h4 className="footer-col-title">Follow Us</h4>
          <div className="footer-social-row">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              aria-label="YouTube"
            >
              <YoutubeIcon size={18} />
            </a>
            <a 
              href="https://wa.me/917021220449" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} Aspire Learning Centre. All rights reserved.
          </p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms & Conditions</Link>
            <span>•</span>
            <span className="footer-handwritten-motto">Better Learning. Brighter Future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
