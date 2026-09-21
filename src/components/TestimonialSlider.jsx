import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import './TestimonialSlider.css';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, testimonialsData.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="section section-testimonials">
      <div className="container">
        <div className="testimonials-layout">
          {/* Left Column: Heading & Controls */}
          <div className="testimonials-header-col reveal-on-scroll reveal-left">
            <h2 className="testimonials-main-title">
              Real Stories. <span className="text-primary">Real Results.</span>
            </h2>
            <p className="testimonials-subtitle">
              Hear from our students and parents about their journey with Aspire Learning Centre.
            </p>

            <div className="testimonials-nav-row">
              <button 
                onClick={handlePrev} 
                className="btn-circle nav-arrow-btn"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={handleNext} 
                className="btn-circle nav-arrow-btn"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
              
              <div className="pagination-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button 
                    key={i} 
                    className={`dot ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="testimonials-cards-container reveal-on-scroll reveal-right stagger-2">
            <div 
              className="testimonials-track"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`
              }}
            >
              {testimonialsData.map((item) => (
                <div key={item.id} className="testimonial-card-wrap">
                  <div className="testimonial-card">
                    <div className="quote-icon-wrap">
                      <Quote size={28} className="quote-mark" />
                    </div>
                    
                    <p className="testimonial-quote-text">
                      “{item.quote}”
                    </p>

                    <div className="testimonial-author-block">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="testimonial-avatar"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80';
                        }}
                      />
                      <div className="testimonial-author-info">
                        <h4 className="author-name">{item.name}</h4>
                        <span className="author-role">{item.role}</span>
                        <div className="author-stars">
                          {Array.from({ length: item.rating }).map((_, s) => (
                            <Star key={s} size={14} fill="#FFB800" color="#FFB800" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
