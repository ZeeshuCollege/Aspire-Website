import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Download, 
  Sparkles, 
  MapPin
} from 'lucide-react';
import Badge from '../components/Badge';
import CtaBanner from '../components/CtaBanner';
import { batchesData } from '../data/batchesData';
import './Batches.css';

export default function Batches({ onOpenEnquiry }) {
  const [filterClass, setFilterClass] = useState('All');

  const classes = ['All', 'Foundation', '9th', '10th', 'NEET', 'JEE'];

  const filteredBatches = batchesData.filter(b => {
    if (filterClass === 'All') return true;
    if (filterClass === 'NEET') return b.classLevel.includes('NEET');
    if (filterClass === 'JEE') return b.classLevel.includes('JEE');
    return b.classLevel === filterClass;
  });

  return (
    <div className="batches-page">
      {/* Header */}
      <section className="page-header-section section-bg-soft-blue">
        <div className="container text-center">
          <Badge icon="calendar" text="Class Timetables & Schedules" variant="blue" />
          <h1 className="page-header-title">Offline Batch Schedules</h1>
          <p className="page-header-subtitle">
            Find the right batch timing that fits your school or college hours. All classes are conducted offline with strictly capped batch sizes for individual student attention.
          </p>
        </div>
      </section>

      {/* Main Batches Section */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="batches-filter-wrapper">
            <div className="batches-tabs">
              {classes.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setFilterClass(cls)}
                  className={`batch-tab-btn ${filterClass === cls ? 'active' : ''}`}
                >
                  {cls}
                </button>
              ))}
            </div>

            <div className="batch-download-action">
              <button 
                onClick={() => alert('Downloading ASPIRE Academic Year 2026-27 Offline Timetable (PDF)...')}
                className="btn btn-secondary btn-md"
              >
                <Download size={16} /> Download Timetable (PDF)
              </button>
            </div>
          </div>

          {/* Batches Grid */}
          <div className="batches-full-grid">
            {filteredBatches.map((batch) => {
              const seatPercent = Math.round((batch.filledSeats / batch.totalSeats) * 100);
              return (
                <div key={batch.id} className="batch-detail-card">
                  <div className="batch-card-top-row">
                    <span className={`batch-status-badge ${batch.badgeColor}`}>
                      {batch.status}
                    </span>
                    <span className="room-text">
                      <MapPin size={13} /> {batch.room}
                    </span>
                  </div>

                  <h3 className="batch-title">{batch.name}</h3>
                  <p className="batch-desc-text">{batch.description}</p>

                  <div className="batch-schedule-box">
                    <div className="schedule-entry">
                      <Calendar size={16} className="text-primary" />
                      <span>{batch.days}</span>
                    </div>
                    <div className="schedule-entry">
                      <Clock size={16} className="text-orange" />
                      <strong>{batch.timings}</strong>
                    </div>
                  </div>

                  {/* Seat Occupancy Meter */}
                  <div className="seat-meter-block">
                    <div className="seat-meter-labels">
                      <span>Seat Capacity</span>
                      <strong>{batch.filledSeats} / {batch.totalSeats} Enrolled</strong>
                    </div>
                    <div className="meter-track">
                      <div 
                        className="meter-fill" 
                        style={{ 
                          width: `${seatPercent}%`,
                          backgroundColor: seatPercent > 85 ? 'var(--color-orange)' : 'var(--color-primary)' 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="batch-card-actions">
                    <button 
                      onClick={onOpenEnquiry}
                      className="btn btn-primary btn-md full-width-btn"
                    >
                      Reserve Seat in this Batch <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Small Batch Philosophy Box */}
          <div className="batch-philosophy-card">
            <div className="philosophy-icon-wrap">
              <Sparkles size={28} className="text-primary" />
            </div>
            <div className="philosophy-content">
              <h3>Why We Strictly Cap Batches at 25 Students</h3>
              <p>
                Unlike massive coaching factories that pack 100+ students into an amphitheater, ASPIRE believes effective teaching requires individual eye contact, homework verification, and direct interaction. Once a batch reaches 25 students, it is permanently closed to maintain quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
