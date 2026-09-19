import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Hero() {
  const { navigateTo, openApplyModal } = useNavigation();

  const stats = [
    { icon: 'graduationCap', num: '38+', label: 'Years of Academic Heritage' },
    { icon: 'bookOpen', num: '11K+', label: 'Alumni in Medicine & Engineering' },
    { icon: 'award', num: '100%', label: 'NEB & CTEVT Board Results' },
    { icon: 'users', num: '40+', label: 'Expert Faculty Members' },
  ];

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}
        role="img"
        aria-label="Himalayan mountains at golden hour above the Pioneers' Academy campus"
      />
      <div className="hero-overlay" />

      <div className="hero-body">
        <div className="container">
          <div className="hero-copy">
            <span className="hero-eyebrow">
              Estd. 2044 B.S. (1987 A.D.) &bull; Waling, Syangja
            </span>

            <h1 className="hero-title">
              Inspiring Excellence.
              <br />
              <span className="gold">Shaping Future</span>
              <br />
              Pioneers.
            </h1>

            <p className="hero-sub">
              <em>"Pioneers are not born, they are made."</em> Quality secondary
              schooling, +2 Science &amp; Management, CTEVT Technical Diplomas and
              Bachelor's education &mdash; delivered with state-of-the-art facilities.
            </p>

            <div className="hero-actions">
              <button className="btn btn-gold" onClick={openApplyModal}>
                Apply for Admission
                <Icon name="arrowRight" size={18} />
              </button>
              <button className="btn btn-ghost" onClick={() => navigateTo('academic')}>
                <Icon name="bookOpen" size={18} /> Explore Programs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="hero-stats-inner">
            {stats.map((s) => (
              <div className="hero-stat" key={s.num}>
                <span className="hero-stat-icon">
                  <Icon name={s.icon} size={26} color="#e8c874" />
                </span>
                <div className="hero-stat-text">
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
