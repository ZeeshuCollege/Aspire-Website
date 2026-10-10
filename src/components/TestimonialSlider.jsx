import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Star, 
  Quote, 
  Send, 
  CheckCircle2, 
  MessageSquareHeart, 
  Sparkles, 
  User, 
  GraduationCap, 
  Award, 
  Trash2, 
  ArrowDown 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { testimonialsData } from '../data/testimonialsData';
import './TestimonialSlider.css';

const AVATAR_COLORS = [
  'linear-gradient(135deg, #1769E8 0%, #0B459E 100%)',
  'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
  'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
  'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
  'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
  'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)'
];

function getAvatarColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const idx = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getRatingLabel(val) {
  switch (val) {
    case 5: return '5 Stars - Outstanding / Excellent!';
    case 4: return '4 Stars - Very Good Experience';
    case 3: return '3 Stars - Good & Helpful';
    case 2: return '2 Stars - Average';
    case 1: return '1 Star - Needs Improvement';
    default: return 'Select your rating';
  }
}

export default function TestimonialSlider() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('aspire_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Failed to load saved reviews:', e);
    }
    return testimonialsData; // Defaults to [] (all pre-fed reviews deleted)
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    role: 'Class 10 Student',
    rating: 5,
    highlight: '',
    quote: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 640) {
          setItemsPerPage(1);
        } else if (window.innerWidth <= 1100) {
          setItemsPerPage(2);
        } else {
          setItemsPerPage(3);
        }
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalReviews = reviews.length;
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);
  const effectiveIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.quote.trim()) {
      setErrorMsg('Please write your review or feedback.');
      return;
    }
    if (formData.quote.trim().length < 10) {
      setErrorMsg('Please write at least 10 characters describing your experience.');
      return;
    }

    const newReview = {
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: formData.name.trim(),
      role: formData.role.trim() || 'Student',
      quote: formData.quote.trim(),
      rating: Number(formData.rating) || 5,
      highlight: formData.highlight.trim(),
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      avatarText: getInitials(formData.name.trim()),
      avatarBg: getAvatarColor(formData.name.trim()),
      isUserAdded: true
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem('aspire_user_reviews', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed saving to localStorage:', err);
    }

    // Celebratory confetti
    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.65 }
      });
    } catch {
      // Ignored
    }

    setSubmitted(true);
    setCurrentIndex(0); // Jump back to start so new review is immediately seen
    setFormData({
      name: '',
      role: 'Class 10 Student',
      rating: 5,
      highlight: '',
      quote: ''
    });

    // Smoothly scroll to the top of the reviews block
    const layoutEl = document.querySelector('.section-testimonials');
    if (layoutEl) {
      layoutEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleDeleteReview = (id) => {
    if (window.confirm('Delete this review?')) {
      const updated = reviews.filter((r) => r.id !== id);
      setReviews(updated);
      try {
        localStorage.setItem('aspire_user_reviews', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed updating localStorage:', err);
      }
    }
  };

  return (
    <section className="section section-testimonials">
      <div className="container">
        {/* 1. Reviews Slider Header & Cards */}
        <div className="testimonials-layout">
          {/* Left Column: Heading & Controls */}
          <div className="testimonials-header-col reveal-on-scroll reveal-left">
            <div className="section-badge-pill">
              <Sparkles size={14} /> Student &amp; Parent Feedback
            </div>
            <h2 className="testimonials-main-title">
              Real Stories. <span className="text-primary">Real Results.</span>
            </h2>
            <p className="testimonials-subtitle">
              Hear directly from our classroom students and parents about their learning journey with ASPIRE.
            </p>

            {totalReviews > itemsPerPage ? (
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
                      className={`dot ${i === effectiveIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : totalReviews > 0 ? (
              <div className="testimonials-live-indicator">
                <span className="live-dot-pulse"></span>
                <span className="live-count-text">
                  {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'} published live
                </span>
              </div>
            ) : (
              <div className="testimonials-empty-hint">
                <p>No reviews yet. Share your experience below to be the first!</p>
                <a href="#review-form" className="btn btn-secondary btn-sm empty-quick-jump">
                  <ArrowDown size={14} /> Go to Review Form
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Cards Track or Empty State */}
          <div className="testimonials-cards-container reveal-on-scroll reveal-right stagger-2">
            {totalReviews === 0 ? (
              <div className="testimonials-empty-state">
                <div className="empty-state-icon-circle">
                  <MessageSquareHeart size={36} />
                </div>
                <h3 className="empty-state-title">No Reviews Yet</h3>
                <p className="empty-state-desc">
                  Be the first student or parent to share your learning journey with ASPIRE Learning Centre! Fill out the short form below and your review will appear here instantly.
                </p>
                <a href="#review-form" className="btn btn-primary btn-sm empty-state-cta">
                  <Sparkles size={14} /> Write First Review <ArrowDown size={14} />
                </a>
              </div>
            ) : (
              <div 
                className="testimonials-track"
                style={{
                  transform: `translateX(-${effectiveIndex * (100 / itemsPerPage)}%)`
                }}
              >
                {reviews.map((item) => (
                  <div key={item.id} className="testimonial-card-wrap">
                    <div className="testimonial-card">
                      <div className="testimonial-card-top">
                        <div className="quote-icon-wrap">
                          <Quote size={24} className="quote-mark" />
                        </div>
                        <div className="author-stars" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                          {Array.from({ length: item.rating }).map((_, s) => (
                            <Star key={s} size={15} fill="#FFB800" color="#FFB800" />
                          ))}
                        </div>
                      </div>

                      {item.highlight && (
                        <div className="testimonial-highlight-pill">
                          <Award size={12} /> {item.highlight}
                        </div>
                      )}
                      
                      <p className="testimonial-quote-text">
                        “{item.quote}”
                      </p>

                      <div className="testimonial-author-block">
                        {item.avatar ? (
                          <img 
                            src={item.avatar} 
                            alt={item.name} 
                            className="testimonial-avatar"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div 
                            className="testimonial-avatar-initials"
                            style={{ background: item.avatarBg || 'var(--color-primary)' }}
                          >
                            {item.avatarText || getInitials(item.name)}
                          </div>
                        )}
                        <div className="testimonial-author-info">
                          <h4 className="author-name">{item.name}</h4>
                          <span className="author-role">{item.role}</span>
                          {item.date && (
                            <span className="testimonial-date">{item.date}</span>
                          )}
                        </div>

                        {item.isUserAdded && (
                          <button 
                            type="button"
                            onClick={() => handleDeleteReview(item.id)}
                            className="btn-delete-review"
                            title="Delete this review"
                            aria-label={`Delete review by ${item.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 2. Review Form - Just below the review section */}
        <div className="review-form-section-wrap" id="review-form">
          <div className="review-form-card reveal-on-scroll reveal-bottom">
            <div className="review-form-header">
              <div className="review-header-badge">
                <Sparkles size={14} /> Instant Community Review
              </div>
              <h3 className="review-form-title">
                Leave a Review for <span className="text-primary">ASPIRE</span>
              </h3>
              <p className="review-form-subtitle">
                Are you an ASPIRE student or parent? Share your feedback on faculty teaching, doubt sessions, study material, or results. Your review will immediately appear on the website above!
              </p>
            </div>

            {submitted && (
              <div className="review-success-banner animate-fade-in">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={24} className="text-teal" />
                </div>
                <div className="success-text-wrap">
                  <h4>Review Published Successfully!</h4>
                  <p>Thank you for sharing your experience. Your review is now live in the section above.</p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="review-error-banner animate-fade-in">
                <p>{errorMsg}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="review-form">
              {/* Star Rating Picker */}
              <div className="form-group rating-picker-group">
                <label className="form-label">
                  Your Rating <span className="required-star">*</span>
                </label>
                <div className="interactive-stars-row">
                  {[1, 2, 3, 4, 5].map((starVal) => {
                    const isFilled = (hoverRating || formData.rating) >= starVal;
                    return (
                      <button
                        type="button"
                        key={starVal}
                        className={`star-pick-btn ${isFilled ? 'filled' : ''}`}
                        onMouseEnter={() => setHoverRating(starVal)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setFormData((prev) => ({ ...prev, rating: starVal }))}
                        aria-label={`Rate ${starVal} star${starVal > 1 ? 's' : ''}`}
                      >
                        <Star 
                          size={28} 
                          fill={isFilled ? '#FFB800' : 'none'} 
                          color={isFilled ? '#FFB800' : '#CBD5E1'} 
                        />
                      </button>
                    );
                  })}
                  <span className="rating-label-text">
                    {getRatingLabel(hoverRating || formData.rating)}
                  </span>
                </div>
              </div>

              <div className="form-row-2col">
                {/* Name Input */}
                <div className="form-group">
                  <label className="form-label" htmlFor="review-name">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <div className="input-with-icon-wrap">
                    <User size={18} className="input-icon" />
                    <input 
                      id="review-name"
                      type="text" 
                      placeholder="e.g. Aryan Khan" 
                      required
                      className="input-field"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Role / Grade Dropdown */}
                <div className="form-group">
                  <label className="form-label" htmlFor="review-role">
                    Your Role / Class <span className="required-star">*</span>
                  </label>
                  <div className="input-with-icon-wrap">
                    <GraduationCap size={18} className="input-icon" />
                    <select
                      id="review-role"
                      className="input-field select-field"
                      value={formData.role}
                      onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                    >
                      <option value="Class 10 Student">Class 10 Student</option>
                      <option value="Class 9 Student">Class 9 Student</option>
                      <option value="Class 8 Student">Class 8 Student</option>
                      <option value="Class 11 / JEE Aspirant">Class 11 / JEE Aspirant</option>
                      <option value="Class 12 / JEE Aspirant">Class 12 / JEE Aspirant</option>
                      <option value="Class 11 / NEET Aspirant">Class 11 / NEET Aspirant</option>
                      <option value="Class 12 / NEET Aspirant">Class 12 / NEET Aspirant</option>
                      <option value="Parent">Parent</option>
                      <option value="Aspire Alumni">Aspire Alumni</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Highlight */}
              <div className="form-group">
                <label className="form-label" htmlFor="review-highlight">
                  Exam / Score / Key Highlight <span className="optional-tag">(Optional)</span>
                </label>
                <div className="input-with-icon-wrap">
                  <Award size={18} className="input-icon" />
                  <input 
                    id="review-highlight"
                    type="text" 
                    placeholder="e.g. 96.4% in CBSE Boards / NEET 650+ / Great Doubt Solving" 
                    className="input-field"
                    value={formData.highlight}
                    onChange={(e) => setFormData((prev) => ({ ...prev, highlight: e.target.value }))}
                  />
                </div>
              </div>

              {/* Review Textarea */}
              <div className="form-group">
                <label className="form-label" htmlFor="review-quote">
                  Your Review / Experience <span className="required-star">*</span>
                </label>
                <textarea 
                  id="review-quote"
                  rows={4}
                  required
                  placeholder="Tell others what you like about ASPIRE — teachers' explanation, daily doubt counter, test series analysis, or personal mentoring..." 
                  className="input-field textarea-field"
                  value={formData.quote}
                  onChange={(e) => setFormData((prev) => ({ ...prev, quote: e.target.value }))}
                ></textarea>
                <div className="char-count-row">
                  <span>Minimum 10 characters</span>
                  <span>{formData.quote.length} characters</span>
                </div>
              </div>

              {/* Form Submit Row */}
              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary btn-lg submit-review-btn">
                  <Send size={18} /> Post Review Instantly
                </button>
                <span className="submit-note">
                  ✓ Automatically appears in the slider above immediately
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
