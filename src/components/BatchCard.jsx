import React from 'react';
import { Calendar, Clock, ArrowRight, GraduationCap } from 'lucide-react';
import './BatchCard.css';

export default function BatchCard({ batch, onSelectBatch }) {
  return (
    <div className="batch-card">
      <div className="batch-card-header">
        <div className="batch-icon-wrap" style={{ backgroundColor: batch.iconBg, color: batch.iconColor }}>
          <GraduationCap size={22} />
        </div>
        {batch.status && (
          <span className={`batch-status-tag ${batch.badgeColor}`}>
            {batch.status}
          </span>
        )}
      </div>

      <div className="batch-card-body">
        <h3 className="batch-class-title">{batch.classLevel}</h3>
        <p className="batch-card-desc">{batch.description}</p>
        
        <div className="batch-meta-info">
          <div className="batch-meta-item">
            <Calendar size={15} className="meta-icon" />
            <span>{batch.days}</span>
          </div>
          <div className="batch-meta-item">
            <Clock size={15} className="meta-icon" />
            <span>{batch.timings}</span>
          </div>
        </div>
      </div>

      <div className="batch-card-footer">
        <button 
          onClick={() => onSelectBatch && onSelectBatch(batch)}
          className="batch-action-circle"
          aria-label={`Enroll in ${batch.classLevel}`}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
