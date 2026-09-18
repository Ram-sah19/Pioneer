import React, { useState } from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Hallpage() {
  const { navigateTo, openApplyModal } = useNavigation();
  const [filter, setFilter] = useState('all');

  const honors = [
    {
      name: 'Aayush Adhikari',
      title: 'District Topper • +2 Science (NEB)',
      year: 'Batch 2081',
      category: 'plus2',
      badge: 'GPA 3.88',
      desc: 'Achieved the highest GPA in Syangja district in the National Examination Board (NEB) Class 12 Science examinations, securing full scholarship for engineering.',
      icon: 'award'
    },
    {
      name: 'Pratima Sharma',
      title: 'District Rank 1 • +2 Management (NEB)',
      year: 'Batch 2081',
      category: 'plus2',
      badge: 'GPA 3.82',
      desc: 'Ranked 1st among all management candidates in Syangja district with outstanding distinction in Principles of Accounting and Economics.',
      icon: 'award'
    },
    {
      name: 'Pooja Karki',
      title: 'Merit Holder • CTEVT General Medicine (HA)',
      year: 'Batch 2080',
      category: 'ctevt',
      badge: '88.4% Distinction',
      desc: 'Passed the CTEVT final diploma board examination with top honours and cleared the Nepal Health Professional Council (NHPC) licensure on first attempt.',
      icon: 'heart'
    },
    {
      name: 'Dr. Bishal Aryal',
      title: 'Medical Officer • MBBS Graduate',
      year: 'Alumni Batch 2073',
      category: 'alumni',
      badge: 'CEE Medical Ranker',
      desc: 'Completed +2 Science at Pioneers Academy, cracked the common medical entrance examination, and currently serves as a physician at a leading regional teaching hospital.',
      icon: 'shieldCheck'
    },
    {
      name: 'Er. Sandeep Gurung',
      title: 'Civil Engineer • Infrastructure Development',
      year: 'Alumni Batch 2074',
      category: 'alumni',
      badge: 'IOE Pulchowk Alum',
      desc: 'Pioneers science graduate who earned a Bachelor in Civil Engineering from Pulchowk Campus, IOE, now leading municipal road and bridge projects.',
      icon: 'building'
    },
    {
      name: 'Sunita Thapa',
      title: 'Senior Health Assistant • Rural Healthcare',
      year: 'Alumni Batch 2075',
      category: 'alumni',
      badge: 'Community Health Leader',
      desc: 'Graduated from our CTEVT General Medicine program and currently leads clinical operations at a primary health care center in Gandaki Province.',
      icon: 'heart'
    },
    {
      name: 'Pioneers Senior Volleyball Team',
      title: 'Champions • Syangja Inter-College Cup',
      year: 'Session 2082',
      category: 'sports',
      badge: 'Gold Medalists',
      desc: 'Defeated top collegiate teams across Syangja and Palpa to lift the running trophy at the District Inter-School Volleyball Championship.',
      icon: 'award'
    },
    {
      name: 'Rohan Shrestha',
      title: 'Semi-Qualified Chartered Accountant (CA)',
      year: 'Alumni Batch 2076',
      category: 'alumni',
      badge: 'ICAN Ranker',
      desc: 'Credited the solid accounting and financial fundamentals learned at Pioneers Management faculty for his exceptional success in ICAN examinations.',
      icon: 'sparkles'
    }
  ];

  const filteredHonors =
    filter === 'all'
      ? honors
      : honors.filter((h) => h.category === filter);

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Hall of Fame</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Hall of Fame & Achievements</h1>
          <p className="page-banner-subtitle">
            Celebrating the extraordinary academic accomplishments, medical entrance successes, and athletic triumphs of Pioneers' scholars.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="section">
        <div className="container">
          <div className="tabs-container">
            <button
              className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Honorees ({honors.length})
            </button>
            <button
              className={`tab-btn ${filter === 'plus2' ? 'active' : ''}`}
              onClick={() => setFilter('plus2')}
            >
              NEB Board Toppers
            </button>
            <button
              className={`tab-btn ${filter === 'ctevt' ? 'active' : ''}`}
              onClick={() => setFilter('ctevt')}
            >
              CTEVT Health Merit
            </button>
            <button
              className={`tab-btn ${filter === 'alumni' ? 'active' : ''}`}
              onClick={() => setFilter('alumni')}
            >
              Distinguished Alumni (Doctors & Engineers)
            </button>
            <button
              className={`tab-btn ${filter === 'sports' ? 'active' : ''}`}
              onClick={() => setFilter('sports')}
            >
              Sports Champions
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid-3">
            {filteredHonors.map((item, idx) => (
              <div key={idx} className="card" style={{ borderTop: '4px solid var(--gold)' }}>
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div
                      className="card-icon-box"
                      style={{ margin: 0, background: 'var(--gold-light)', color: 'var(--gold)' }}
                    >
                      <Icon name={item.icon} size={24} />
                    </div>
                    <span className="badge badge-amber">{item.badge}</span>
                  </div>

                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
                    {item.name}
                  </h3>
                  <div style={{ fontSize: '0.86rem', color: 'var(--primary-accent)', fontWeight: 600, marginBottom: '12px' }}>
                    {item.title} • <span style={{ color: 'var(--muted)' }}>{item.year}</span>
                  </div>

                  <p className="card-text" style={{ fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Pride Banner */}
          <div
            style={{
              marginTop: '60px',
              background: '#ffffff',
              borderRadius: 'var(--radius)',
              padding: '40px',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)'
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center', gap: '30px' }}>
              <div>
                <span className="section-tag">
                  <Icon name="award" size={14} /> Legacy of Glory
                </span>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', marginBottom: '12px' }}>
                  Write Your Name in the Pioneers Hall of Fame
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--slate)', lineHeight: '1.6', marginBottom: '20px' }}>
                  With disciplined guidance from our expert teachers, top-tier laboratories, and personalized mentorship, you too can achieve top board ranks and secure your dream career.
                </p>
                <button className="btn btn-secondary" onClick={openApplyModal}>
                  <Icon name="graduationCap" size={16} /> Apply for Admission Today
                </button>
              </div>

              <div style={{ background: 'var(--light-bg)', padding: '24px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>100% Board Pass Record in Science & Management</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>Over 50+ Medical & Engineering Entrance Qualifiers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>District Champions in Volleyball & Athletics</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon name="checkCircle" size={18} color="var(--success)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--dark)' }}>11,000+ Alumni Impacting Society Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hallpage;