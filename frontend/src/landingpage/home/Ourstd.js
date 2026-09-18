import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Ourstd() {
  const { navigateTo } = useNavigation();

  const testimonials = [
    {
      name: 'Dr. Bishal Aryal',
      role: 'MBBS Doctor • +2 Science Batch 2073',
      quote: 'The rigorous foundation in Physics, Chemistry, and Biology at Pioneers Academy, along with the guidance of dedicated teachers, played a pivotal role in helping me crack the national medical entrance exam.',
      tag: 'Medical Professional'
    },
    {
      name: 'Sunita Thapa',
      role: 'Senior Health Assistant • CTEVT HA Batch 2075',
      quote: 'The practical clinical labs, hospital rotations, and community health camps at Pioneers Academy gave us real-world confidence before stepping into primary healthcare centers.',
      tag: 'Healthcare Hero'
    },
    {
      name: 'Rohan Shrestha',
      role: 'Chartered Accountant (CA) Aspirant • +2 Management Batch 2076',
      quote: 'Pioneers Academy instilled financial discipline, critical thinking, and leadership. The teachers genuinely care about every student’s dream and provide continuous mentorship.',
      tag: 'Business & Finance'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Icon name="users" size={14} /> Student Voices & Alumni
          </span>
          <h2 className="section-title">What Our Pioneers Say</h2>
          <p className="section-subtitle">
            Hear from our proud alumni and current students who have walked the halls of Pioneers' Higher Education Academy and achieved their dreams.
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card" style={{ background: '#ffffff' }}>
              <div className="card-body">
                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px', color: '#f59e0b' }}>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={16} />
                  ))}
                </div>
                <p className="card-text" style={{ fontStyle: 'italic', fontSize: '0.92rem' }}>
                  "{t.quote}"
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '2px' }}>
                    {t.role}
                  </div>
                  <span className="badge badge-blue" style={{ marginTop: '8px' }}>
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <button className="btn btn-outline-primary" onClick={() => navigateTo('campus')}>
            <Icon name="users" size={16} /> Discover Student Clubs & Extracurriculars
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ourstd;