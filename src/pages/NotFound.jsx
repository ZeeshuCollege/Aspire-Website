import React from 'react';
import { Link } from 'react-router-dom';
import { BookX, ArrowRight, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found-page section text-center" style={{ padding: '6rem 1rem' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ 
          width: '72px', 
          height: '72px', 
          borderRadius: '20px', 
          background: 'var(--color-primary-light)', 
          color: 'var(--color-primary)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1.5rem auto' 
        }}>
          <BookX size={36} />
        </div>

        <span style={{ 
          fontFamily: 'var(--font-display)', 
          fontSize: '4.5rem', 
          fontWeight: 800, 
          color: 'var(--color-navy)', 
          display: 'block', 
          lineHeight: 1 
        }}>
          404
        </span>

        <h2 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', margin: '1rem 0 0.5rem 0' }}>
          Looks like this lesson isn't on today's timetable.
        </h2>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          The page you are looking for might have been moved, rescheduled, or does not exist.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-md">
            <Home size={16} /> Back to Home
          </Link>
          <Link to="/courses" className="btn btn-secondary btn-md">
            <Compass size={16} /> Explore Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
