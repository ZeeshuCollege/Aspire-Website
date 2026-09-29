import React from 'react';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import './HighlightsStrip.css';

export default function HighlightsStrip() {
  const highlights = [
    {
      icon: BookOpen,
      iconBg: 'var(--color-primary-light)',
      iconColor: 'var(--color-primary)',
      title: 'Expert Faculty',
      desc: 'Learn from experienced and dedicated teachers'
    },
    {
      icon: Users,
      iconBg: 'var(--color-orange-light)',
      iconColor: 'var(--color-orange)',
      title: 'Personal Attention',
      desc: 'Small batches & focused 1-on-1 guidance'
    },
    {
      icon: TrendingUp,
      iconBg: 'var(--color-primary-light)',
      iconColor: 'var(--color-primary)',
      title: 'Proven Results',
      desc: 'Consistent track record of success'
    },
    {
      icon: Award,
      iconBg: 'var(--color-orange-light)',
      iconColor: 'var(--color-orange)',
      title: 'Study Material',
      desc: 'Structured modules & regular test series'
    }
  ];

  return (
    <div className="highlights-strip-wrap">
      <div className="container">
        <div className="highlights-strip-card reveal-on-scroll reveal-scale">
          <div className="highlights-grid">
            {highlights.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon-wrap" style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                    <IconComp size={22} />
                  </div>
                  <div className="highlight-text-wrap">
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
