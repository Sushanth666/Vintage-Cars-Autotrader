import { useState } from 'react';
import { faqData } from '../../data/faqData';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          {/* Left Title Column */}
          <div className="faq-title-col">
            <h2 className="faq-heading">
              FAQ
            </h2>
            <a href="#contact" className="ask-question-btn" id="ask-question-btn">
              <span>Ask a Question</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Right Accordion List Column */}
          <div className="faq-list">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                  key={item.id}
                  id={`faq-item-${item.id}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-plus-icon">
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
