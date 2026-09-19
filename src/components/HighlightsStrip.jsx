import React from 'react';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import './HighlightsStrip.css';

export default function HighlightsStrip() {
  const highlights = [
    {
      icon: BookOpen,
      iconBg: '#EBF3FE',
      iconColor: '#1769E8',
      title: 'Expert Faculty',
      desc: 'Learn from experienced and dedicated teachers'
    },
    {
      icon: Users,
      iconBg: '#EBF3FE',
      iconColor: '#1769E8',
      title: 'Small Batches',
      desc: 'Personal attention for better learning'
    },
    {
      icon: TrendingUp,
      iconBg: '#EBF3FE',
      iconColor: '#1769E8',
      title: 'Proven Results',
      desc: 'Consistent track record of success'
    },
    {
      icon: Award,
      iconBg: '#EBF3FE',
      iconColor: '#1769E8',
      title: 'Holistic Development',
      desc: 'Academic, personal and career guidance'
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
