import React, { useState } from 'react';
import { Search, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Badge from '../components/Badge';
import FAQAccordion from '../components/FAQAccordion';
import CtaBanner from '../components/CtaBanner';
import { faqData } from '../data/faqData';
import './FAQs.css';

export default function FAQs({ onOpenEnquiry }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'General', 'Admissions', 'Academics', 'Batches', 'App'];

  const filteredFAQs = faqData.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="faqs-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="faq" text="Knowledge Base" variant="blue" />
          <h1 className="page-header-title">Frequently Asked Questions</h1>
          <p className="page-header-subtitle">
            Find immediate answers regarding admissions, batch timings, trial classes, syllabus coverage, fees, and the private ASPIRE mobile app.
          </p>
        </div>
      </section>

      {/* Filter and FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="faq-controls-bar">
            <div className="faq-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`faq-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="faq-search-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search questions..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
            </div>
          </div>

          <FAQAccordion items={filteredFAQs} columns={2} />

          {/* Help Center Box */}
          <div className="faq-contact-help-card">
            <div className="faq-help-text">
              <h3>Still have questions?</h3>
              <p>Our academic counsellors are available on phone and WhatsApp from 9:00 AM to 8:00 PM every day.</p>
            </div>
            <div className="faq-help-actions">
              <a href="tel:+917021220449" className="btn btn-primary btn-md">
                <Phone size={16} /> Call +91 70212 20449
              </a>
              <a 
                href="https://wa.me/917021220449?text=Hello%20ASPIRE%20Learning%20Centre,%20I%20have%20a%20question%20regarding%20courses." 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary btn-md"
                style={{ color: '#16A34A' }}
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <button onClick={onOpenEnquiry} className="btn btn-secondary btn-md">
                Request Callback <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
