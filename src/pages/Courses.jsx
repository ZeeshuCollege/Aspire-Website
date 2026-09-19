import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Layers, 
  Target, 
  Stethoscope, 
  Compass 
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { coursesData } from '../data/coursesData';
import './Courses.css';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  BookOpenCheck: GraduationCap,
  Layers: Layers,
  Target: Target,
  Stethoscope: Stethoscope,
  Compass: Compass
};

export default function Courses({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Foundation', 'Competitive'];

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="courses-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="book" text="Academic Catalog" variant="blue" />
          <h1 className="page-header-title">Our Academic Programs</h1>
          <p className="page-header-subtitle">
            Focused, structured offline courses for Foundation, 9th, 10th, NEET, and JEE (Main + Adv.). Built for deep concepts, consistent practice, and verifiable success.
          </p>
        </div>
      </section>

      {/* Filter & Catalog Section */}
      <section className="section">
        <div className="container">
          {/* Controls Bar */}
          <div className="courses-filter-bar">
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="courses-search-wrap">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search course or subject..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
            </div>
          </div>

          {/* Courses List Grid */}
          <div className="courses-catalog-grid">
            {filteredCourses.map((course) => {
              const IconComp = iconMap[course.icon] || GraduationCap;
              return (
                <div key={course.id} className="detailed-course-card">
                  <div className="detailed-card-top">
                    <div className="card-badge-row">
                      <span className={`badge ${course.badgeClass}`}>
                        {course.category}
                      </span>
                      <span className="card-duration-text">
                        <Clock size={13} /> {course.duration}
                      </span>
                    </div>

                    <div className="card-title-group">
                      <div className="course-icon-sq" style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                        <IconComp size={24} />
                      </div>
                      <div>
                        <h3 className="course-full-title">{course.title}</h3>
                        <p className="course-tagline-text">{course.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="detailed-card-body">
                    <p className="course-hero-desc">{course.heroDesc}</p>

                    <div className="course-spec-row">
                      <div className="spec-pill">
                        <Users size={14} className="text-primary" />
                        <span>Batch: {course.batchSize}</span>
                      </div>
                      <div className="spec-pill">
                        <Clock size={14} className="text-orange" />
                        <span>{course.schedule}</span>
                      </div>
                    </div>

                    <h4 className="key-features-heading">Key Program Features:</h4>
                    <ul className="course-feature-checklist">
                      {course.features.slice(0, 3).map((feat, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="feature-check-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detailed-card-footer">
                    <Link to={`/courses/${course.slug}`} className="btn btn-secondary btn-md">
                      View Syllabus & Details <ArrowRight size={15} />
                    </Link>
                    <button 
                      onClick={onOpenEnquiry} 
                      className="btn btn-primary btn-md"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="empty-search-state">
              <h3>No courses found matching "{searchQuery}"</h3>
              <p>Try clearing your search or explore all categories.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} 
                className="btn btn-secondary btn-md"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stream Guidance Counseling Banner */}
      <section className="section-tight section-bg-subtle">
        <div className="container">
          <div className="counseling-help-card">
            <div className="counseling-text">
              <span className="badge badge-orange">Confused About Stream Selection?</span>
              <h3>Need 1-on-1 Academic Counseling?</h3>
              <p>Our senior educators provide free diagnostic evaluation and career counselling for Class 10 and 11 students choosing between Engineering (JEE), Medical (NEET), and Pure Sciences.</p>
            </div>
            <button onClick={onOpenEnquiry} className="btn btn-primary btn-lg">
              Book Free Counselling Session <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
