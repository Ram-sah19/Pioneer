import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Welcome() {
  const { navigateTo } = useNavigation();

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
          {/* Left Column: Visual Campus Frame & Motto Banner */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid #ffffff',
                position: 'relative'
              }}
            >
              <img
                src="/campus-hero.jpg"
                alt="Pioneers Higher Education Academy Campus Building in Waling"
                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/college-banner.png';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(15, 43, 92, 0.95), transparent)',
                  padding: '24px',
                  color: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img
                    src="/college-logo.png"
                    alt="Logo"
                    style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#fff' }}
                  />
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#ffffff' }}>Pioneers' Higher Education Academy</h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#93c5fd' }}>Waling Municipality - 1, Syangja, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Badge Card */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-15px',
                background: 'var(--secondary-crimson)',
                color: '#ffffff',
                padding: '14px 20px',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '220px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.3rem', fontWeight: 800 }}>ESTD. 2044 B.S.</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>38+ Years of Educational Leadership</div>
            </div>
          </div>

          {/* Right Column: Narrative Message */}
          <div>
            <span className="section-tag">
              <Icon name="award" size={14} /> Leadership & Philosophy
            </span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '18px' }}>
              Welcome to Pioneers' Higher Education Academy
            </h2>
            <p style={{ fontSize: '1.08rem', color: 'var(--primary-accent)', fontWeight: 600, marginBottom: '16px' }}>
              <em>"Pioneers are not born, they are made. And we receive only to give."</em>
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '18px' }}>
              For nearly four decades since 2044 B.S., Pioneers' Higher Education Academy has stood as a beacon of academic rigor and character building in Waling, Syangja. We believe that true education goes far beyond textbooks — it is about igniting curiosity, fostering analytical minds, and preparing students to serve their communities with competence and humility.
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '25px' }}>
              Whether through our renowned <strong>+2 Science and Management</strong> faculties, our impactful <strong>CTEVT General Medicine (Health Assistant)</strong> program, or higher education under <strong>Tribhuvan University</strong>, Pioneers students consistently achieve high board ranks, top university admissions, and commendable careers in public and private sectors.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid-2" style={{ gap: '14px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
                <Icon name="checkCircle" size={18} color="var(--success)" />
                <span>Well-Equipped Science & Health Labs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
                <Icon name="checkCircle" size={18} color="var(--success)" />
                <span>Merit & Need-Based Scholarships</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
                <Icon name="checkCircle" size={18} color="var(--success)" />
                <span>Safe Bus Transportation Across Syangja</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
                <Icon name="checkCircle" size={18} color="var(--success)" />
                <span>Experienced Mentors & Counselors</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <button className="btn btn-primary" onClick={() => navigateTo('about')}>
                <Icon name="bookOpen" size={16} /> Read Our Full Legacy & Vision
              </button>
              <button className="btn btn-outline-primary" onClick={() => navigateTo('campus')}>
                <Icon name="building" size={16} /> Campus Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;