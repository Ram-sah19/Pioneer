import React from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Facilitypage() {
  const { navigateTo, openApplyModal } = useNavigation();

  const facilities = [
    {
      title: 'Physics, Chemistry & Biology Labs',
      icon: 'sparkles',
      badge: 'Advanced Science',
      desc: 'Three independent, spacious, and well-ventilated laboratories equipped with optical benches, spectrographs, high-grade reagents, electrical measurement circuits, compound microscopes, and biological specimen banks.',
      points: ['Individual lab work stations', 'Adherence to strict laboratory safety standards', 'Specialized kits for +2 board practical examinations']
    },
    {
      title: 'Computer & Digital IT Lab',
      icon: 'cpu',
      badge: 'High-Tech IT',
      desc: 'Air-conditioned computing center with modern networked PCs, high-speed fiber internet, and licensed software for programming in C, C++, Python, HTML/CSS, database systems, and CAD modeling.',
      points: ['1:1 Student to computer ratio during lab sessions', 'High-speed dedicated broadband connectivity', 'Multimedia projectors for interactive tutorials']
    },
    {
      title: 'Paramedical Clinical & Anatomy Lab',
      icon: 'heart',
      badge: 'CTEVT Medical Wing',
      desc: 'Purpose-built for our General Medicine (HA) students, featuring human anatomical models, skeleton kits, clinical examination tables, sterilization autoclaves, and diagnostic practice tools.',
      points: ['Vital signs monitoring & clinical simulation', 'Suture practice models & first-aid equipment', 'Regular supervised clinical diagnostic drills']
    },
    {
      title: 'Central Library & E-Reading Hall',
      icon: 'bookOpen',
      badge: '10,000+ Volumes',
      desc: 'Comprehensive repository of academic textbooks, reference encyclopedias, medical manuals, engineering codes, national daily newspapers, and periodicals in a peaceful reading environment.',
      points: ['Extensive textbook lending system', 'Dedicated reading hall with quiet study cubicles', 'Past question bank & board solution guides']
    },
    {
      title: 'College Bus Fleet & Transport',
      icon: 'mapPin',
      badge: 'Safe Commute',
      desc: 'Dedicated fleet of college buses providing safe, punctual, and comfortable daily transportation for students living across Waling, Galyang, Bhirkot, Bayarghat, and surrounding Syangja localities.',
      points: ['Experienced drivers and support staff', 'Regular scheduled pickup and drop-off points', 'Emergency first-aid on board']
    },
    {
      title: 'Sports Complex & Courtyard',
      icon: 'award',
      badge: 'Fitness & Games',
      desc: 'Our expansive central courtyard and sports grounds accommodate volleyball matches, basketball tournaments, badminton, table tennis, and athletics events.',
      points: ['Standard volleyball & badminton courts', 'Indoor table tennis and chess boards', 'Annual sports week and inter-college tourneys']
    },
    {
      title: 'Hygienic Food Cafeteria',
      icon: 'shieldCheck',
      badge: 'Clean & Nutritious',
      desc: 'An on-campus canteen serving fresh, affordable, and balanced meals, traditional Nepali khana (Dal-Bhat-Tarkari), and wholesome snacks prepared under strict hygienic supervision.',
      points: ['Filtered drinking water systems (RO/UV)', 'Nutritious student-friendly pricing', 'Spacious and sanitized dining area']
    },
    {
      title: 'Safe Hostel Accommodation',
      icon: 'building',
      badge: 'Boys & Girls',
      desc: 'Supervised residential hostel facilities for students traveling from distant rural municipalities of Syangja and neighboring districts like Palpa and Parbat.',
      points: ['Separate hostels for boys and girls', 'Fixed evening study hours supervised by mentors', 'Nutritious meals and secure 24/7 environment']
    }
  ];

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Facilities</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Facilities & Infrastructure</h1>
          <p className="page-banner-subtitle">
            Providing modern science laboratories, high-tech computer systems, clinical medical labs, and transport services that elevate student learning.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="building" size={14} /> World-Class Infrastructure
            </span>
            <h2 className="section-title">Everything You Need to Excel</h2>
            <p className="section-subtitle">
              We continually upgrade our campus amenities to ensure students enjoy a comfortable, secure, and stimulating educational environment.
            </p>
          </div>

          <div className="facility-list">
            {facilities.map((fac, idx) => (
              <div key={idx} className="facility-row">
                <div className="facility-icon">
                  <Icon name={fac.icon} size={30} />
                </div>
                <div className="facility-main">
                  <div className="facility-head">
                    <h3 className="facility-title">{fac.title}</h3>
                    <span className="badge badge-blue">{fac.badge}</span>
                  </div>
                  <p className="facility-desc">{fac.desc}</p>
                  <ul className="facility-points">
                    {fac.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <Icon name="checkCircle" size={16} color="#16a34a" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Virtual Overview */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '50px 40px',
              color: '#ffffff',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '14px', color: '#ffffff' }}>
              Experience Our Waling Campus in Person
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto 28px', color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.6' }}>
              We warmly invite students and guardians to visit Pioneers' Higher Education Academy in Waling, tour our laboratories and classrooms, and consult directly with our faculty.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-secondary" onClick={openApplyModal}>
                <Icon name="fileText" size={16} /> Online Admission Inquiry
              </button>
              <button className="btn btn-outline-white" onClick={() => navigateTo('contact')}>
                <Icon name="phone" size={16} /> Contact Help Desk
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Facilitypage;