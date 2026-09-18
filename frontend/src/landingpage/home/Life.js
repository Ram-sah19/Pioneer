import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Life() {
  const { navigateTo, openApplyModal } = useNavigation();

  const highlights = [
    {
      title: 'Science & Tech Exhibitions',
      desc: 'Annual project showcases where students engineer working robotics, electronic models, chemical reactions, and environmental prototypes.',
      icon: 'cpu'
    },
    {
      title: 'Sports Meets & Tournaments',
      desc: 'Annual sports week featuring volleyball, football, cricket, table tennis, badminton, and track athletics fostering team spirit and fitness.',
      icon: 'award'
    },
    {
      title: 'Community Health Outreach',
      desc: 'General Medicine (HA) students organize free diagnostic health checkups, blood grouping camps, and hygiene awareness for local communities.',
      icon: 'activity'
    },
    {
      title: 'Cultural Festivals & Art',
      desc: 'Saraswati Puja, welcome and farewell programs, youth music performances, debates, and poetry recitals celebrating Nepali culture and talent.',
      icon: 'heart'
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="compass" size={14} /> Beyond Academics
          </span>
          <h2 className="section-title">Life at Pioneers' Academy</h2>
          <p className="section-subtitle">
            An engaging, vibrant campus atmosphere designed to nurture well-rounded personalities, leadership qualities, and lifelong friendships.
          </p>
        </div>

        <div className="grid-4" style={{ marginBottom: '45px' }}>
          {highlights.map((item, idx) => (
            <div key={idx} className="card">
              <div className="card-body">
                <div className="card-icon-box">
                  <Icon name={item.icon} size={24} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>{item.title}</h3>
                <p className="card-text" style={{ fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #1e3a8a 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '50px 40px',
            color: '#ffffff',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
            <span
              style={{
                background: 'rgba(245, 158, 11, 0.25)',
                color: '#fde68a',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '14px'
              }}
            >
              Admissions Open for 2083/2084 Session
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '16px', color: '#ffffff' }}>
              Begin Your Journey with Pioneers' Higher Education Academy
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#e2e8f0', marginBottom: '28px', lineHeight: '1.6' }}>
              Join thousands of successful alumni who started their careers right here in Waling, Syangja. Secure your seat in +2 Science, Management, or CTEVT Health Assistant today.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-secondary" onClick={openApplyModal}>
                <Icon name="graduationCap" size={18} /> Apply Online Now
              </button>
              <button className="btn btn-outline-white" onClick={() => navigateTo('facilities')}>
                <Icon name="building" size={18} /> Explore Facilities
              </button>
              <button className="btn btn-outline-white" onClick={() => navigateTo('contact')}>
                <Icon name="phone" size={18} /> Contact Admissions Desk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Life;