import React from 'react';
import Icon from '../../Icons';

function PrincipalMessage() {
  return (
    <section className="principal-message-section">
      <div className="container">
        <div className="principal-message-grid">
          <div className="principal-message-photo">
            <img
              src="/campus-hero.jpg"
              alt="Students gathered at Pioneers' Higher Education Academy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/college-banner.png';
              }}
            />
            <div className="principal-message-photo-caption">
              <Icon name="building" size={16} />
              <span>Learning with purpose, serving with pride</span>
            </div>
          </div>

          <div className="principal-message-content">
            <span className="principal-message-tag">
              <Icon name="award" size={14} /> From the Principal
            </span>
            <h2>What Our Principal Says</h2>
            <div className="principal-message-quote-mark">“</div>
            <blockquote>
              At Pioneers, our mission has remained steadfast for over 38 years:
              to provide transformative education rooted in ethics, scientific
              curiosity, and social responsibility. We nurture not just scholars,
              but compassionate leaders.
            </blockquote>
            <p>
              Every learner who joins our academy is encouraged to ask questions,
              work with discipline, and use knowledge for the good of family and
              society. Our teachers walk beside students with care and high
              expectations, helping each one discover confidence, competence, and
              the courage to become a pioneer.
            </p>
            <div className="principal-message-signature">
              <strong>Principal / Campus Chief</strong>
              <span>Pioneers' Higher Education Academy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
