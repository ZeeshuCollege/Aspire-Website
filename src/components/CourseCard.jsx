import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Layers, Target, Stethoscope, Compass } from 'lucide-react';
import './CourseCard.css';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  BookOpenCheck: GraduationCap,
  Layers: Layers,
  Target: Target,
  Stethoscope: Stethoscope,
  Compass: Compass
};

export default function CourseCard({ course }) {
  const IconComp = iconMap[course.icon] || GraduationCap;

  return (
    <div className="course-card">
      <div className="course-card-top">
        <div className="course-card-icon" style={{ backgroundColor: course.color ? `${course.color}15` : 'var(--color-primary-light)', color: course.color || 'var(--color-primary)' }}>
          <IconComp size={20} />
        </div>
      </div>
      <div className="course-card-body">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-tagline">{course.tagline}</p>
        
        {course.subjects && (
          <div className="course-card-subjects">
            {course.subjects.slice(0, 3).map((sub, i) => (
              <span key={i} className="subject-pill">{sub}</span>
            ))}
            {course.subjects.length > 3 && (
              <span className="subject-pill-more">+{course.subjects.length - 3}</span>
            )}
          </div>
        )}
      </div>

      <div className="course-card-footer">
        <Link 
          to={`/courses/${course.slug}`} 
          className="course-card-action-btn"
          aria-label={`View ${course.title} details`}
        >
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
