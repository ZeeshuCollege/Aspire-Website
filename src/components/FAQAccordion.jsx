import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

export default function FAQAccordion({ items, columns = 2 }) {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // If 2 columns, split the items
  const col1 = [];
  const col2 = [];

  if (columns === 2) {
    items.forEach((item, index) => {
      if (index % 2 === 0) {
        col1.push(item);
      } else {
        col2.push(item);
      }
    });
  }

  const renderItem = (item) => {
    const isOpen = openId === item.id;
    return (
      <div key={item.id} className={`faq-item-card ${isOpen ? 'open' : ''}`}>
        <button 
          className="faq-question-btn"
          onClick={() => toggleItem(item.id)}
          aria-expanded={isOpen}
        >
          <span className="faq-question-text">{item.question}</span>
          <ChevronDown 
            size={18} 
            className={`faq-chevron ${isOpen ? 'rotated' : ''}`} 
          />
        </button>

        {isOpen && (
          <div className="faq-answer-wrap animate-fade-in">
            <p className="faq-answer-text">{item.answer}</p>
          </div>
        )}
      </div>
    );
  };

  if (columns === 1) {
    return (
      <div className="faq-grid-1-col">
        {items.map(renderItem)}
      </div>
    );
  }

  return (
    <div className="faq-grid-2-col">
      <div className="faq-col">
        {col1.map(renderItem)}
      </div>
      <div className="faq-col">
        {col2.map(renderItem)}
      </div>
    </div>
  );
}
