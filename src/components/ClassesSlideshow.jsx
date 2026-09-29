import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import img1 from '../assets/media/1.jpeg';
import img2 from '../assets/media/2.jpeg';
import img3 from '../assets/media/3.jpeg';
import img4 from '../assets/media/4.jpeg';
import './ClassesSlideshow.css';

const rawSlides = [
  {
    id: 1,
    image: img1,
    alt: 'Aspire Learning Centre - Admissions Open 2026',
    title: 'Admissions Open 2026',
    desc: 'JEE, NEET & Foundation Coaching in Kausa, Mumbra'
  },
  {
    id: 2,
    image: img2,
    alt: 'Interactive Classroom Lecture',
    title: 'Interactive Classroom Sessions',
    desc: 'Deep concept clarity with HM Sir & senior mentors'
  },
  {
    id: 3,
    image: img3,
    alt: 'Focused Doubt Solving & Practice',
    title: '1-on-1 Doubt Clearing & Practice',
    desc: 'Disciplined batch learning with personal attention'
  },
  {
    id: 4,
    image: img4,
    alt: 'Aspire Learning Centre Entrance & Programs',
    title: 'Aspire Learning Hub',
    desc: 'NEET, JEE, CET & 9th–12th Foundation Centre'
  }
];

// Repeat slides for seamless infinite loop
const SLIDES = [
  ...rawSlides.map((s, i) => ({ ...s, loopKey: `set0-${i}` })),
  ...rawSlides.map((s, i) => ({ ...s, loopKey: `set1-${i}` })),
  ...rawSlides.map((s, i) => ({ ...s, loopKey: `set2-${i}` })),
  ...rawSlides.map((s, i) => ({ ...s, loopKey: `set3-${i}` }))
];

export default function ClassesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(4); // Start at first set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (dotIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(4 + dotIndex);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  // Seamless loop reset
  useEffect(() => {
    if (currentIndex >= 8) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev - 4);
      }, 560);
      return () => clearTimeout(timer);
    }
    if (currentIndex <= 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev + 4);
      }, 560);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const activeDot = ((currentIndex % 4) + 4) % 4;

  return (
    <section className="section section-classes-slideshow">
      <div className="container">
        <div className="classes-header-row reveal-on-scroll reveal-bottom">
          <div className="classes-header-text">
            <span className="badge badge-orange">
              <Sparkles size={14} className="badge-icon-spin" /> Life at ASPIRE
            </span>
            <h2 className="classes-main-title">
              Inside Our <span className="text-primary">Classrooms &amp; Learning Hub</span>
            </h2>
            <p className="classes-subtitle">
              Authentic glimpses of our offline lectures, dedicated study hall, and 1-on-1 mentorship in Kausa, Mumbra.
            </p>
          </div>

          <div className="classes-nav-controls">
            <button 
              onClick={handlePrev} 
              className="btn-circle nav-arrow-btn"
              aria-label="Previous class photo"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext} 
              className="btn-circle nav-arrow-btn"
              aria-label="Next class photo"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width carousel viewport: shows 2 full huge images & 2 half images */}
      <div 
        className="classes-slideshow-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="classes-slides-track"
          style={{
            transform: `translateX(calc(-1 * ${currentIndex} * (var(--slide-width) + var(--slide-gap)) + 0.5 * (var(--slide-width) + var(--slide-gap))))`,
            transition: isTransitioning ? 'transform 0.55s cubic-bezier(0.25, 1, 0.35, 1)' : 'none'
          }}
        >
          {SLIDES.map((slide, idx) => {
            const isCenter = idx === currentIndex || idx === currentIndex + 1;
            return (
              <div 
                key={slide.loopKey}
                className={`classes-slide-item ${isCenter ? 'is-center' : 'is-peek'}`}
              >
                {/* Blurred ambient background with matching colors */}
                <div 
                  className="classes-slide-bg-blur"
                  style={{ backgroundImage: `url(${slide.image})` }} 
                />

                {/* Natural aspect ratio image without any cropping */}
                <div className="classes-slide-img-container">
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    className="classes-slide-img" 
                    loading="lazy"
                  />
                </div>

                {/* Info Overlay */}
                <div className="classes-slide-overlay">
                  <h4 className="classes-overlay-title">{slide.title}</h4>
                  <p className="classes-overlay-desc">{slide.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="container">
        <div className="classes-dots-wrap">
          {rawSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => goToSlide(dotIdx)}
              className={`classes-dot ${dotIdx === activeDot ? 'active' : ''}`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
