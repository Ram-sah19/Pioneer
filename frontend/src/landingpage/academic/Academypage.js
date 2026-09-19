import React, { useState, useRef } from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Academypage() {
  const { navigateTo, openApplyModal } = useNavigation();
  const [activeTab, setActiveTab] = useState('all');
  const layoutRef = useRef(null);

  const selectCategory = (id) => {
    setActiveTab(id);
    // Result length changes, which can strand the scroll position; realign to the list top.
    setTimeout(() => {
      layoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const programs = [
    {
      id: 'plus2-science',
      category: 'plus2',
      title: '+2 Science Stream',
      board: 'NEB Affiliated',
      duration: '2 Academic Years',
      eligibility: 'Min GPA 2.0 or C+ in SEE with Science & Math focus',
      icon: 'sparkles',
      badgeClass: 'badge-blue',
      overview: 'A rigorous pre-university program designed for aspiring medical doctors, engineers, software specialists, and pure researchers.',
      curriculum: [
        'Physics (Theory & Practical Lab)',
        'Chemistry (Organic, Inorganic & Physical)',
        'Biology (Botany & Zoology) or Mathematics',
        'Computer Science (Programming & Web Concepts)',
        'Compulsory English & Nepali'
      ],
      highlights: [
        'Dedicated modern Physics, Chemistry & Biology laboratories',
        'Integrated medical (MBBS) & engineering (IOE) entrance prep sessions',
        'Weekly model tests and individualized faculty mentorship',
        'Science exhibition & technical projects exhibition'
      ]
    },
    {
      id: 'plus2-mgmt',
      category: 'plus2',
      title: '+2 Management Stream',
      board: 'NEB Affiliated',
      duration: '2 Academic Years',
      eligibility: 'Min GPA 1.6 in SEE or equivalent',
      icon: 'award',
      badgeClass: 'badge-amber',
      overview: 'Fostering future corporate executives, chartered accountants, bankers, and innovative entrepreneurs in the commercial sector.',
      curriculum: [
        'Principles of Accounting',
        'Economics (Micro & Macro)',
        'Business Studies & Marketing',
        'Computer Science or Hotel Management',
        'Business Mathematics / Marketing',
        'Compulsory English & Nepali'
      ],
      highlights: [
        'Practical accounting software training (Tally & Excel)',
        'Industrial exposure and bank branch observational visits',
        'Guest lectures by prominent business leaders & bankers',
        'Case study methodology and public presentation workshops'
      ]
    },
    {
      id: 'plus2-humanities',
      category: 'plus2',
      title: '+2 Humanities & Law',
      board: 'NEB Affiliated',
      duration: '2 Academic Years',
      eligibility: 'Min GPA 1.6 in SEE',
      icon: 'shieldCheck',
      badgeClass: 'badge-red',
      overview: 'Ideal for students seeking careers in legal practice, judiciary, civil administration, journalism, diplomacy, and social science research.',
      curriculum: [
        'General Principles of Law & Jurisprudence',
        'Constitutional Law & Human Rights',
        'Sociology & Social Work',
        'Mass Communication & Journalism',
        'Compulsory English & Nepali'
      ],
      highlights: [
        'Intra-college Moot Court simulations and legal debates',
        'Field visits to Syangja District Court and Bar Association',
        'Seminars on constitution, human rights, and public policy',
        'Comprehensive Lok Sewa foundation preparation'
      ]
    },
    {
      id: 'ctevt-ha',
      category: 'ctevt',
      title: 'PCL in General Medicine (Health Assistant - HA)',
      board: 'CTEVT Affiliated',
      duration: '3 Academic Years',
      eligibility: 'SEE Passed with GPA 2.0+ (Min C in English, Math & Science)',
      icon: 'heart',
      badgeClass: 'badge-red',
      overview: 'Our flagship paramedical program preparing licensed Health Assistants capable of diagnosing, treating, and managing rural and urban health facilities.',
      curriculum: [
        'Year 1: Basic Anatomy, Physiology, Chemistry, Physics & English',
        'Year 2: Clinical Pathology, Pharmacology, Surgery, Medicine & Microbiology',
        'Year 3: Comprehensive Hospital Clinical Postings, Rural Health Camp & Health Post Management'
      ],
      highlights: [
        'Hands-on clinical postings at district and regional hospitals',
        'On-campus Medical Simulation and Anatomy Demonstration Lab',
        'Preparation for NHPC (Nepal Health Professional Council) licensure',
        'Direct career pathway to senior paramedical posts or MBBS/Public Health'
      ]
    },
    {
      id: 'ctevt-civil',
      category: 'ctevt',
      title: 'Diploma in Civil Engineering',
      board: 'CTEVT Affiliated',
      duration: '3 Academic Years',
      eligibility: 'SEE Passed with GPA 2.0+ (Min C in Science & Math)',
      icon: 'building',
      badgeClass: 'badge-green',
      overview: 'Equipping students with structural engineering, land surveying, estimating, and computer-aided architectural drafting skills.',
      curriculum: [
        'Surveying & Leveling (Theodolite & Total Station)',
        'Building Construction Technology & Materials',
        'AutoCAD & Structural Drawing',
        'Hydraulics, Water Supply & Sanitary Engineering',
        'Estimating, Costing & Project Management'
      ],
      highlights: [
        'Extensive field survey camps across scenic terrains in Syangja',
        'Modern CAD and structural modeling computing lab',
        'Job readiness for local municipalities, infrastructure projects & overseas',
        'Eligibility for lateral entry into Bachelor of Civil Engineering (BE)'
      ]
    },
    {
      id: 'ctevt-pre',
      category: 'ctevt',
      title: 'CTEVT Pre-Diploma Programs',
      board: 'CTEVT Affiliated',
      duration: '18 Months',
      eligibility: 'SEE / SLC Passed',
      icon: 'cpu',
      badgeClass: 'badge-green',
      overview: 'Short-cycle technical vocational courses providing immediate employability in livestock, veterinary, and agriculture fields.',
      curriculum: [
        'Veterinary Science & Animal Health',
        'Livestock Production & Management',
        'Community Agricultural Extension & Horticulture'
      ],
      highlights: [
        'Field-based practicals with local veterinary clinics & farms',
        'Subsidized CTEVT quotas and scholarship schemes',
        'Self-employment incubation and agribusiness mentorship'
      ]
    },
    {
      id: 'tu-bbs',
      category: 'degree',
      title: 'Bachelor of Business Studies (BBS)',
      board: 'Tribhuvan University (Pioneers Multiple Campus)',
      duration: '4 Academic Years',
      eligibility: '+2 or equivalent in any stream with minimum D+ grade',
      icon: 'graduationCap',
      badgeClass: 'badge-blue',
      overview: 'Our university collegiate program providing in-depth knowledge in strategic finance, marketing, human resource development, and corporate governance.',
      curriculum: [
        'Year 1: Business Economics, Business English, Accountancy, Principles of Mgmt',
        'Year 2: Cost & Management Accounting, Business Finance, Macroeconomics',
        'Year 3: Business Law, Financial Management, Organizational Behavior',
        'Year 4: Concentration (Finance/Marketing), Entrepreneurship & Research Project'
      ],
      highlights: [
        'Convenient morning shift for working students and professionals',
        'Research-driven term papers and thesis mentorship',
        'Affordable community campus fee structure with merit scholarships',
        'Strong track record in Tribhuvan University annual examinations'
      ]
    },
    {
      id: 'school-see',
      category: 'school',
      title: 'Secondary School (Grade 1 - 10 / SEE)',
      board: 'Ministry of Education / SEE Board',
      duration: 'Comprehensive Schooling',
      eligibility: 'Transfer Certificate & Previous Grade Marksheet',
      icon: 'bookOpen',
      badgeClass: 'badge-amber',
      overview: 'From early primary to SEE, Pioneers builds strong moral values, English language fluency, and solid conceptual foundations in STEM and social sciences.',
      curriculum: [
        'Compulsory Science & Technology with Junior Labs',
        'Compulsory & Optional Mathematics',
        'English & Nepali Literature & Composition',
        'Social Studies, Health & Physical Education',
        'Computer Studies & Information Technology'
      ],
      highlights: [
        '100% First Division and Distinction records in SEE Board exams',
        'Interactive smart classrooms with audio-visual equipment',
        'Continuous assessment system and parent-teacher conferences',
        'Robust sports, debate, quiz, and cultural program calendar'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'plus2', label: '+2 Higher Secondary (NEB)' },
    { id: 'ctevt', label: 'CTEVT Technical Diplomas' },
    { id: 'degree', label: 'Bachelor Degree (BBS - TU)' },
    { id: 'school', label: 'School Level (Grade 1-10)' }
  ];

  const countFor = (id) =>
    id === 'all' ? programs.length : programs.filter((p) => p.category === id).length;

  const filteredPrograms =
    activeTab === 'all'
      ? programs
      : programs.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Academics</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Academic Programs</h1>
          <p className="page-banner-subtitle">
            Comprehensive learning pathways from School Level through +2 Science & Management, CTEVT Technical Diplomas, and Tribhuvan University Degree courses.
          </p>
        </div>
      </div>

      {/* Program Categories Sidebar + Cards */}
      <section className="section">
        <div className="container">
          <div className="acad-layout" ref={layoutRef}>
            {/* Left: sticky category sidebar */}
            <aside className="acad-sidebar">
              <div className="acad-sidebar-title">Browse by Category</div>
              <nav className="acad-filters" aria-label="Program categories">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    className={`acad-filter ${activeTab === c.id ? 'active' : ''}`}
                    onClick={() => selectCategory(c.id)}
                    aria-current={activeTab === c.id ? 'true' : undefined}
                  >
                    <span>{c.label}</span>
                    <span className="acad-filter-count">{countFor(c.id)}</span>
                  </button>
                ))}
              </nav>
              <p className="acad-sidebar-note">
                Showing <strong>{filteredPrograms.length}</strong> {filteredPrograms.length === 1 ? 'program' : 'programs'}.
                Select a category to filter the list.
              </p>
            </aside>

            {/* Right: program cards */}
            <div className="acad-content">
              {filteredPrograms.map((p) => (
                <div key={p.id} className="card">
                  <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="card-icon-box" style={{ margin: 0 }}>
                          <Icon name={p.icon} size={24} />
                        </div>
                        <div>
                          <h3 className="card-title" style={{ margin: 0, fontSize: '1.25rem' }}>{p.title}</h3>
                          <span style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                            {p.duration} • <span style={{ color: 'var(--primary-accent)', fontWeight: 600 }}>{p.board}</span>
                          </span>
                        </div>
                      </div>
                      <span className={`badge ${p.badgeClass}`}>{p.board.split(' ')[0]}</span>
                    </div>

                    <p className="card-text" style={{ fontSize: '0.94rem', marginBottom: '16px' }}>
                      {p.overview}
                    </p>

                    <div
                      style={{
                        background: 'var(--light-bg)',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        marginBottom: '16px',
                        fontSize: '0.86rem',
                        borderLeft: '3px solid var(--gold)'
                      }}
                    >
                      <strong>Eligibility:</strong> {p.eligibility}
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>
                        Key Subjects & Syllabus:
                      </span>
                      <ul style={{ paddingLeft: '18px', fontSize: '0.88rem', color: 'var(--slate)', lineHeight: '1.6' }}>
                        {p.curriculum.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>
                        Special Training & Program Highlights:
                      </span>
                      <ul style={{ paddingLeft: '18px', fontSize: '0.88rem', color: 'var(--slate)', lineHeight: '1.6' }}>
                        {p.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-footer" style={{ marginTop: 'auto' }}>
                      <button className="btn btn-outline-primary" onClick={openApplyModal}>
                        <Icon name="fileText" size={15} /> Download Syllabus
                      </button>
                      <button className="btn btn-primary" onClick={openApplyModal}>
                        <Icon name="graduationCap" size={15} /> Apply for This Program
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology Banner */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="sparkles" size={14} /> Our Academic Edge
            </span>
            <h2 className="section-title">Teaching Methodology & Academic Standards</h2>
            <p className="section-subtitle">
              How we nurture curiosity, scientific thinking, and professional discipline.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-body">
                <div className="card-icon-box">
                  <Icon name="cpu" size={24} />
                </div>
                <h3 className="card-title">Interactive & Multimedia Classrooms</h3>
                <p className="card-text">
                  Audio-visual teaching aids, animated science simulations, and digital presentation rooms that convert abstract textbook concepts into vivid understanding.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="card-icon-box">
                  <Icon name="activity" size={24} />
                </div>
                <h3 className="card-title">Practical-First Clinical & Lab Focus</h3>
                <p className="card-text">
                  Extensive laboratory hours for Physics, Chemistry, Biology, and Computer Science, supplemented by hospital ward rounds for General Medicine (HA) students.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="card-icon-box">
                  <Icon name="award" size={24} />
                </div>
                <h3 className="card-title">Continuous Formative Assessment</h3>
                <p className="card-text">
                  Weekly unit tests, terminal examinations, and rigorous model pre-board tests mirroring the exact standard of NEB and CTEVT board examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Academypage;