import React from 'react';
import { GraduationCap } from 'lucide-react';
import './FacultyCard.css';

export default function FacultyCard({ faculty }) {
  return (
    <div className="faculty-card">
      <div className="faculty-image-container">
        <img 
          src={faculty.image} 
          alt={faculty.name} 
          className="faculty-img"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
          }}
        />
        <span className="faculty-subject-tag">
          {faculty.subject}
        </span>
      </div>

      <div className="faculty-info-box">
        <h3 className="faculty-name">{faculty.name}</h3>
        <p className="faculty-exp">{faculty.experience}</p>

        <p className="faculty-quote">
          “{faculty.quote}”
        </p>

        <div className="faculty-degree-row">
          <GraduationCap size={16} className="faculty-degree-icon" />
          <span className="faculty-degree-text">{faculty.degree}</span>
        </div>
      </div>
    </div>
  );
}
