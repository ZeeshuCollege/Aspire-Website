import React from 'react';
import { Sparkles } from 'lucide-react';
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

// Repeat slides in two identical groups for seamless, infinite continuous scrolling
const SLIDES_GROUP = [...rawSlides, ...rawSlides];

export default function ClassesSlideshow() {
  return (
    <section className="section section-classes-slideshow" aria-label="Classroom and learning hub slideshow">
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
        </div>
      </div>

      {/* Automatic continuous sideways scrolling marquee */}
      <div className="classes-marquee-viewport" tabIndex={0} aria-roledescription="carousel">
        <div className="classes-marquee-track">
          {/* Group 1 */}
          <div className="classes-marquee-group">
            {SLIDES_GROUP.map((slide, idx) => (
              <div key={`grp1-${slide.id}-${idx}`} className="classes-slide-item">
                <div 
                  className="classes-slide-bg-blur"
                  style={{ backgroundImage: `url(${slide.image})` }} 
                  aria-hidden="true"
                />

                <div className="classes-slide-img-container">
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    className="classes-slide-img" 
                    loading="lazy"
                  />
                </div>

                <div className="classes-slide-overlay">
                  <h4 className="classes-overlay-title">{slide.title}</h4>
                  <p className="classes-overlay-desc">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Group 2 (Duplicate for infinite seamless loop) */}
          <div className="classes-marquee-group" aria-hidden="true">
            {SLIDES_GROUP.map((slide, idx) => (
              <div key={`grp2-${slide.id}-${idx}`} className="classes-slide-item">
                <div 
                  className="classes-slide-bg-blur"
                  style={{ backgroundImage: `url(${slide.image})` }} 
                  aria-hidden="true"
                />

                <div className="classes-slide-img-container">
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    className="classes-slide-img" 
                    loading="lazy"
                  />
                </div>

                <div className="classes-slide-overlay">
                  <h4 className="classes-overlay-title">{slide.title}</h4>
                  <p className="classes-overlay-desc">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
