import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Hero() {
  const { navigateTo, openApplyModal } = useNavigation();

  return (
    <div>
      <div
        className="hero-wrapper"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 43, 92, 0.92) 0%, rgba(9, 26, 56, 0.88) 100%), url(${process.env.PUBLIC_URL}/college-banner.png)`
        }}
      >
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="hero-badge">
                <Icon name="sparkles" size={14} color="#f59e0b" /> Estd. 2044 B.S. (1987 A.D.)
              </span>
              <span className="hero-badge">
                <Icon name="shieldCheck" size={14} color="#38bdf8" /> Affiliated to NEB & CTEVT
              </span>
              <span className="hero-badge">
                <Icon name="mapPin" size={14} color="#f43f5e" /> Waling, Syangja, Nepal
              </span>
            </div>

            <h1 className="hero-title">
              Inspiring Excellence. <br />
              <span className="highlight">Shaping Future Pioneers.</span>
            </h1>

            <p className="hero-tagline">
              <em>"Pioneers are not born, they are made."</em> Providing quality secondary schooling, +2 Science & Management, CTEVT Technical Diplomas (General Medicine HA & Engineering), and Bachelor's education with state-of-the-art facilities.
            </p>

            <div className="hero-actions">
              <button className="btn btn-secondary" onClick={openApplyModal}>
                <Icon name="graduationCap" size={18} /> Apply for Admission
              </button>
              <button className="btn btn-outline-white" onClick={() => navigateTo('academic')}>
                <Icon name="bookOpen" size={18} /> Explore Programs
              </button>
              <button className="btn btn-outline-white" onClick={() => navigateTo('campus')}>
                <Icon name="building" size={18} /> Campus Life
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat Highlights */}
      <div className="container">
        <div className="hero-stats-banner">
          <div className="stat-card">
            <div className="stat-number">38+</div>
            <div className="stat-label">Years of Academic Heritage (Estd. 2044 B.S.)</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">11K+</div>
            <div className="stat-label">Alumni in Medicine, Engineering & Public Service</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Exemplary NEB & CTEVT Board Examination Results</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">40+</div>
            <div className="stat-label">Expert Faculty Members & Lab Instructors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;