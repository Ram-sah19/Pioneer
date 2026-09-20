import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';
import CampusGallery from '../../components/CampusGallery';

function Campuspage() {
  const { navigateTo, openApplyModal } = useNavigation();

  const clubs = [
    {
      name: 'Pioneers Science & Robotics Club',
      icon: 'cpu',
      color: '#2563eb',
      desc: 'Nurturing student inventions, IoT prototypes, electronic circuit design, and chemical reaction demonstrations showcased at our annual Science Fair.'
    },
    {
      name: 'Pioneers Youth Red Cross Circle',
      icon: 'heart',
      color: '#dc2626',
      desc: 'Active student volunteers conducting blood donation camps, first-aid drills, and hygiene awareness outreach across Waling and nearby villages.'
    },
    {
      name: 'Sports & Athletics Committee',
      icon: 'award',
      color: '#d97706',
      desc: 'Organizing inter-class tournaments in volleyball, football, basketball, badminton, chess, and track athletics throughout the academic year.'
    },
    {
      name: 'Literary & Debating Society',
      icon: 'bookOpen',
      color: '#059669',
      desc: 'Fostering public speaking, parliamentary debate format, creative writing, poetry recitals, and critical thought in both English and Nepali.'
    },
    {
      name: 'Eco & Nature Conservation Club',
      icon: 'sparkles',
      color: '#16a34a',
      desc: 'Leading tree plantation drives across Syangja hills, plastic-free campus campaigns, and river conservation awareness programs.'
    },
    {
      name: 'Health & First-Aid Forum',
      icon: 'activity',
      color: '#9333ea',
      desc: 'Led by senior General Medicine (HA) students to conduct basic health screenings, blood pressure checks, and community health sensitization.'
    }
  ];

  const eventsCalendar = [
    { month: 'Shrawan', title: 'Freshers Orientation & Welcome Gala', desc: 'Induction program welcoming new Grade 11, CTEVT HA, and BBS cohorts with cultural performances and faculty introductions.' },
    { month: 'Ashwin', title: 'Dashain-Tihar Cultural Fest & Deusi Bhailo', desc: 'Celebrating Nepali heritage through traditional music, folklore drama, dance performances, and community fellowship.' },
    { month: 'Mangsir', title: 'Annual Inter-Faculty Sports Week', desc: 'Thrilling week of track and field athletics, volleyball, table tennis, badminton, and football tournaments with medals and championship shields.' },
    { month: 'Magh', title: 'Saraswati Puja & National Science Expo', desc: 'Veneration of the Goddess of Learning followed by grand exhibitions of science models, robotic demos, and business startups.' },
    { month: 'Falgun', title: 'Community Medical Outreach & Blood Donation', desc: 'Free medical diagnosis camp and voluntary blood donation drive organized in partnership with Syangja Red Cross.' },
    { month: 'Chaitra', title: 'Graduation Day & Farewell Felicitation', desc: 'Honoring outgoing board candidates, presenting academic achievement awards, and celebrating alumni milestones.' }
  ];

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Campus Life</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Campus Life at Pioneers</h1>
          <p className="page-banner-subtitle">
            A vibrant, disciplined, and supportive community where students discover lifelong passions, friendships, and leadership skills.
          </p>
        </div>
      </div>

      {/* Campus Setting & Courtyard Highlight */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '50px' }}>
            <div>
              <span className="section-tag">
                <Icon name="building" size={14} /> The Learning Sanctuary
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '18px' }}>
                Scenic, Safe, and Purpose-Built Campus in Waling, Syangja
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '16px' }}>
                Nestled in the picturesque valley of Waling along the Siddhartha corridor in Syangja, our campus offers an ideal learning environment away from urban congestion, surrounded by clean mountain air and lush green hills.
              </p>
              <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--slate)', marginBottom: '16px' }}>
                Our spacious multi-story facility features a large central assembly courtyard, dedicated academic wings for secondary, +2, and CTEVT technical faculties, modern science and computer laboratories, and sports grounds.
              </p>
              <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
                <button className="btn btn-primary" onClick={openApplyModal}>
                  <Icon name="graduationCap" size={16} /> Join Our Community
                </button>
                <button className="btn btn-outline-primary" onClick={() => navigateTo('facilities')}>
                  <Icon name="compass" size={16} /> View Campus Facilities
                </button>
              </div>
            </div>

            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border)'
                }}
              >
                <img
                  src="/campus-hero.jpg"
                  alt="Students assembled in the grand courtyard of Pioneers Higher Education Academy"
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/college-banner.webp';
                  }}
                />
                <div style={{ padding: '16px 20px', background: '#ffffff', borderTop: '3px solid var(--primary-accent)' }}>
                  <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)' }}>
                    Grand Assembly & Sports Courtyard • Pioneers' Higher Education Academy, Waling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Photo Gallery Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="sparkles" size={14} /> Visual Tour
            </span>
            <h2 className="section-title">Campus & Facilities Photo Gallery</h2>
            <p className="section-subtitle">
              Filter through real campus photographs, laboratories, sports grounds, and vibrant student activities in Waling.
            </p>
          </div>
          <CampusGallery />
        </div>
      </section>

      {/* Student Clubs Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="users" size={14} /> Student Councils
            </span>
            <h2 className="section-title">Clubs & Co-Curricular Societies</h2>
            <p className="section-subtitle">
              Education transcends textbooks through active student clubs that encourage teamwork, empathy, and initiative.
            </p>
          </div>

          <div className="grid-3">
            {clubs.map((c, i) => (
              <div key={i} className="card">
                <div className="card-body">
                  <div
                    className="card-icon-box"
                    style={{ background: `${c.color}15`, color: c.color }}
                  >
                    <Icon name={c.icon} size={24} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.15rem' }}>{c.name}</h3>
                  <p className="card-text" style={{ fontSize: '0.9rem' }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Event Calendar */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="calendar" size={14} /> Traditions of Joy
            </span>
            <h2 className="section-title">Annual Event Calendar</h2>
            <p className="section-subtitle">
              A year filled with memorable celebrations, sporting rivalry, scientific discovery, and social service.
            </p>
          </div>

          <div className="grid-3">
            {eventsCalendar.map((ev, idx) => (
              <div
                key={idx}
                className="card"
                style={{ borderLeft: '4px solid var(--primary)' }}
              >
                <div className="card-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span className="badge badge-blue">Month of {ev.month}</span>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '8px' }}>
                    {ev.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--slate)', lineHeight: '1.6' }}>
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Campuspage;