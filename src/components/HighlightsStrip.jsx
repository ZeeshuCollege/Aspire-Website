import React from 'react';
import { BookOpen, Users, TrendingUp } from 'lucide-react';
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
      title: 'Small Batches',
      desc: 'Personal attention for better learning'
    },
    {
      icon: TrendingUp,
      iconBg: 'var(--color-primary-light)',
      iconColor: 'var(--color-primary)',
      title: 'Proven Results',
      desc: 'Consistent track record of success'
    }
  ];

  return (
    <div className="highlights-strip-wrap">
      <div className="container">
        <div className="highlights-strip-card">
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
