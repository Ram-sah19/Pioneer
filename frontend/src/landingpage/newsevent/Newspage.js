import React, { useState } from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Newspage() {
  const { navigateTo, openNoticeModal } = useNavigation();
  const [activeTab, setActiveTab] = useState('all');

  const items = [
    {
      id: 'N-01',
      type: 'notice',
      category: 'Admissions',
      badgeClass: 'badge-red',
      title: 'Admissions Open for Grade XI (+2 Science & Management) and CTEVT HA (2083/84)',
      date: 'Bhadra 28, 2083',
      dept: 'Admissions Office',
      summary: 'Applications are formally open for admission into Grade 11 Science and Management streams, as well as the 3-Year CTEVT PCL in General Medicine (Health Assistant).',
      bullets: [
        'SEE graduates with minimum 2.0 GPA eligible for Science & HA.',
        'Scholarships up to 100% available for meritorious SEE candidates.',
        'Application forms can be submitted online or at the Waling-1 campus front desk.'
      ]
    },
    {
      id: 'N-02',
      type: 'exam',
      category: 'Examination',
      badgeClass: 'badge-amber',
      title: 'First Terminal Examination Schedule Announced for Class 11, 12 and BBS',
      date: 'Bhadra 22, 2083',
      dept: 'Internal Examination Committee',
      summary: 'The routine for the First Terminal Assessment has been published. Theory examinations will be conducted in the morning shift followed by science and computer practicals.',
      bullets: [
        'Examinations commence from Ashwin 10, 2083.',
        'Clearance of tuition dues up to Bhadra is required to receive admit cards.',
        'Practical examination time-slots will be posted on department bulletin boards.'
      ]
    },
    {
      id: 'N-03',
      type: 'event',
      category: 'Campus Event',
      badgeClass: 'badge-blue',
      title: 'Annual Inter-Faculty Sports Week 2083 Scheduled for Mangsir',
      date: 'Bhadra 18, 2083',
      dept: 'Sports & Athletics Committee',
      summary: 'Pioneers Academy is thrilled to announce our Annual Sports Week featuring volleyball, football, basketball, badminton, table tennis, and 100m/200m track athletics.',
      bullets: [
        'Team registration deadline: Mangsir 5, 2083.',
        'Championship trophies and medals will be awarded during the closing ceremony.',
        'All houses and batches are encouraged to begin practice sessions.'
      ]
    },
    {
      id: 'N-04',
      type: 'event',
      category: 'Community Service',
      badgeClass: 'badge-green',
      title: 'Free Community Health Screening & Blood Donation Camp by HA Students',
      date: 'Bhadra 14, 2083',
      dept: 'Youth Red Cross Circle',
      summary: 'In partnership with Syangja Red Cross and local health posts, our CTEVT General Medicine students and faculty doctors are hosting a day-long health camp.',
      bullets: [
        'Free blood pressure, random blood glucose, and general health diagnostics.',
        'Voluntary blood donation program in coordination with Pokhara Blood Bank.',
        'Venue: Pioneers Higher Education Academy Main Courtyard.'
      ]
    },
    {
      id: 'N-05',
      type: 'news',
      category: 'Press Release',
      badgeClass: 'badge-blue',
      title: 'Pioneers Students Clinch 1st Prize at Gandaki Regional Science Fair',
      date: 'Bhadra 05, 2083',
      dept: 'Science & Robotics Club',
      summary: 'Our Grade 12 Science innovators brought home the championship trophy for their solar-powered automated irrigation prototype engineered in our physics lab.',
      bullets: [
        'Over 35 educational institutions from Pokhara, Syangja, and Tanahun participated.',
        'Students received commendation plaques and research grants.',
        'The team will represent Gandaki Province at the national finals in Kathmandu.'
      ]
    },
    {
      id: 'N-06',
      type: 'notice',
      category: 'Scholarships',
      badgeClass: 'badge-amber',
      title: 'Notice Regarding CTEVT Classified Scholarship Quotas (2083/84)',
      date: 'Shrawan 29, 2083',
      dept: 'CTEVT Health Department',
      summary: 'Official notification regarding government-subsidized classified scholarship quotas for CTEVT 3-Year Diploma in General Medicine (Health Assistant) and Civil Engineering.',
      bullets: [
        'Eligible candidates under target group quotas must submit verified municipality letters.',
        'Entrance assessment supervised directly under CTEVT Gandaki Provincial Office.'
      ]
    }
  ];

  const filteredItems =
    activeTab === 'all'
      ? items
      : items.filter((item) => item.type === activeTab);

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>News & Events</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>News, Bulletins & Events</h1>
          <p className="page-banner-subtitle">
            Stay updated with official academic notices, examination routines, campus festivals, and achievement headlines from Pioneers' Higher Education Academy.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="section">
        <div className="container">
          <div className="tabs-container">
            <button
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Updates ({items.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'notice' ? 'active' : ''}`}
              onClick={() => setActiveTab('notice')}
            >
              Official Notices
            </button>
            <button
              className={`tab-btn ${activeTab === 'event' ? 'active' : ''}`}
              onClick={() => setActiveTab('event')}
            >
              Campus Events & Sports
            </button>
            <button
              className={`tab-btn ${activeTab === 'exam' ? 'active' : ''}`}
              onClick={() => setActiveTab('exam')}
            >
              Examinations & Routines
            </button>
            <button
              className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              News & Achievements
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid-2" style={{ gap: '24px' }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => openNoticeModal(item)}
              >
                <div className="card-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className={`badge ${item.badgeClass}`}>{item.category}</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Icon name="calendar" size={14} /> {item.date}
                    </span>
                  </div>

                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                    {item.title}
                  </h3>

                  <p className="card-text" style={{ fontSize: '0.92rem', marginBottom: '16px' }}>
                    {item.summary}
                  </p>

                  <div style={{ background: 'var(--light-bg)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                      Key Highlights:
                    </span>
                    <ul style={{ paddingLeft: '18px', fontSize: '0.85rem', color: 'var(--slate)', lineHeight: '1.5' }}>
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer" style={{ marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Icon name="building" size={14} /> {item.dept}
                    </span>
                    <button
                      className="btn btn-outline-primary"
                      style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openNoticeModal(item);
                      }}
                    >
                      <Icon name="fileText" size={14} /> View Circular
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Updates Box */}
          <div
            style={{
              marginTop: '50px',
              background: '#f8fafc',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '6px' }}>
                Follow Our Official Facebook Community (11K+ Followers)
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: 0 }}>
                Get real-time photo galleries, video highlights, and live updates directly from our verified Facebook page.
              </p>
            </div>
            <a
              href="https://www.facebook.com/pioneersacademywaling"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ background: '#1877f2', color: '#ffffff' }}
            >
              <Icon name="facebook" size={18} /> Visit Pioneers Facebook Page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newspage;