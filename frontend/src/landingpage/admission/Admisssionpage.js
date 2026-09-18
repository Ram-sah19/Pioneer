import React, { useState } from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Admisssionpage() {
  const { navigateTo } = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'Male',
    phone: '',
    email: '',
    program: '+2 Science',
    prevSchool: '',
    seeGpa: '',
    guardianName: '',
    guardianPhone: '',
    address: '',
    needsHostel: 'No',
    needsTransport: 'No',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    {
      step: '01',
      title: 'Submit Application',
      desc: 'Fill out the online application below or visit our Admissions Desk at Waling-1, Syangja with your academic credentials.'
    },
    {
      step: '02',
      title: 'Entrance Assessment',
      desc: 'Participate in our diagnostic entrance assessment or scholarship evaluation test designed to identify academic aptitude.'
    },
    {
      step: '03',
      title: 'Counseling & Interview',
      desc: 'Interactive counseling session with our senior faculty and career advisors alongside parents or guardians.'
    },
    {
      step: '04',
      title: 'Enrollment & Orientation',
      desc: 'Finalize document submission, collect your syllabus pack, student ID, and join the formal academic orientation.'
    }
  ];

  const scholarships = [
    {
      title: 'SEE Board Topper Award',
      desc: 'Up to 100% tuition waiver for students achieving GPA 3.65 and above in the Secondary Education Examination.',
      tag: '100% Tuition Waiver'
    },
    {
      title: 'Syangja District Merit Quota',
      desc: 'Special scholarship allocated to outstanding students from rural municipalities across Syangja district.',
      tag: '50% - 75% Support'
    },
    {
      title: 'Underprivileged & Inclusion Quota',
      desc: 'Need-based financial aid reserved for underprivileged, Dalit, Janajati, and single-parent households.',
      tag: 'Need-Based Aid'
    },
    {
      title: 'Sports & Extra-Curricular Honors',
      desc: 'Scholarships for district, province, or national-level athletes, debate champions, and science innovators.',
      tag: 'Talent Scholarship'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Admissions</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Admissions Open 2083/84</h1>
          <p className="page-banner-subtitle">
            Secure your future in +2 Science, Management, CTEVT General Medicine (HA), Civil Engineering, or BBS at Pioneers' Higher Education Academy.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="checkCircle" size={14} /> How to Apply
            </span>
            <h2 className="section-title">Admission Process in 4 Simple Steps</h2>
            <p className="section-subtitle">
              We have streamlined the enrollment process to ensure a transparent, merit-oriented, and welcoming experience for students and parents.
            </p>
          </div>

          <div className="grid-4">
            {steps.map((s, idx) => (
              <div key={idx} className="card" style={{ position: 'relative' }}>
                <div className="card-body">
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: 'var(--primary-accent)',
                      marginBottom: '10px'
                    }}
                  >
                    {s.step}
                  </div>
                  <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{s.title}</h3>
                  <p className="card-text" style={{ fontSize: '0.88rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Icon name="award" size={14} /> Merit & Assistance
            </span>
            <h2 className="section-title">Scholarships & Financial Aid</h2>
            <p className="section-subtitle">
              In line with our motto <em>"We Receive to Give"</em>, Pioneers provides generous scholarships so that financial constraints never hinder deserving minds.
            </p>
          </div>

          <div className="grid-4">
            {scholarships.map((sch, i) => (
              <div key={i} className="card" style={{ borderTop: '4px solid var(--secondary-crimson)' }}>
                <div className="card-body">
                  <span className="badge badge-amber" style={{ marginBottom: '10px' }}>
                    {sch.tag}
                  </span>
                  <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{sch.title}</h3>
                  <p className="card-text" style={{ fontSize: '0.88rem' }}>{sch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Application Form & Checklist */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            {/* Left: Interactive Form */}
            <div
              style={{
                background: '#ffffff',
                padding: '35px',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                <div className="card-icon-box" style={{ margin: 0 }}>
                  <Icon name="fileText" size={24} />
                </div>
                <div>
                  <h3 style={{ color: 'var(--primary)', fontSize: '1.3rem', margin: 0 }}>
                    Online Admission Application Form
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--muted)', margin: 0 }}>
                    Academic Session 2083/2084
                  </p>
                </div>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: '#dcfce7',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}
                  >
                    <Icon name="checkCircle" size={36} />
                  </div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                    Application Successfully Registered!
                  </h3>
                  <p style={{ color: 'var(--slate)', fontSize: '0.94rem', marginBottom: '20px' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your application for <strong>{formData.program}</strong> has been logged into our admissions database. Our admission counselors will reach out to you at <strong>{formData.phone}</strong> within 24 business hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        dob: '',
                        gender: 'Male',
                        phone: '',
                        email: '',
                        program: '+2 Science',
                        prevSchool: '',
                        seeGpa: '',
                        guardianName: '',
                        guardianPhone: '',
                        address: '',
                        needsHostel: 'No',
                        needsTransport: 'No',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name of Student *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Sujan Shrestha"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="student@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Intended Program *</label>
                      <select
                        className="form-control"
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      >
                        <option value="+2 Science">+2 Science (NEB)</option>
                        <option value="+2 Management">+2 Management (NEB)</option>
                        <option value="+2 Humanities & Law">+2 Humanities & Law (NEB)</option>
                        <option value="CTEVT General Medicine (HA)">CTEVT General Medicine (HA)</option>
                        <option value="CTEVT Civil Engineering">CTEVT Civil Engineering</option>
                        <option value="Bachelor of Business Studies (BBS)">Bachelor of Business Studies (BBS - TU)</option>
                        <option value="School Level (Grade 1-10)">School Level (Grade 1-10 / SEE)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">SEE GPA / Marks *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="e.g. 3.75 GPA"
                        value={formData.seeGpa}
                        onChange={(e) => setFormData({ ...formData, seeGpa: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Guardian Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Father's / Mother's Name"
                        value={formData.guardianName}
                        onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Guardian Contact Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Guardian Phone"
                        value={formData.guardianPhone}
                        onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Do you need Bus Transport?</label>
                      <select
                        className="form-control"
                        value={formData.needsTransport}
                        onChange={(e) => setFormData({ ...formData, needsTransport: e.target.value })}
                      >
                        <option value="No">No, I will commute locally</option>
                        <option value="Yes - Waling Route">Yes - Waling Route</option>
                        <option value="Yes - Galyang / Bayarghat Route">Yes - Galyang / Bayarghat Route</option>
                        <option value="Yes - Bhirkot / Chapakot Route">Yes - Bhirkot / Chapakot Route</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Hostel Accommodation?</label>
                      <select
                        className="form-control"
                        value={formData.needsHostel}
                        onChange={(e) => setFormData({ ...formData, needsHostel: e.target.value })}
                      >
                        <option value="No">No</option>
                        <option value="Yes - Boys Hostel">Yes - Boys Hostel</option>
                        <option value="Yes - Girls Hostel">Yes - Girls Hostel</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Permanent / Current Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Waling-1, Syangja"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Additional Inquiries or Remarks</label>
                    <textarea
                      className="form-control"
                      placeholder="Any specific questions about scholarships, previous subjects, or admission documents..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                    <Icon name="send" size={16} /> Submit Admission Application
                  </button>
                </form>
              )}
            </div>

            {/* Right: Requirements Checklist & Download */}
            <div>
              <div
                style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border)',
                  marginBottom: '25px'
                }}
              >
                <h3 style={{ color: 'var(--primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon name="shieldCheck" size={20} color="var(--primary-accent)" />
                  Required Documents Checklist
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '16px' }}>
                  Applicants are requested to bring original copies alongside 2 photocopies of each:
                </p>
                <ul style={{ listStyle: 'none' }}>
                  {[
                    'SEE / SLC Grade-Sheet / Marksheet & Character Certificate',
                    '3 recent Passport-size photographs with clear background',
                    'Copy of Birth Certificate or Citizenship of Student/Parent',
                    'School Leaving Certificate (SLC/SEE Transfer Certificate)',
                    'Proof of Scholarship eligibility (if applying under quota)'
                  ].map((doc, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '12px',
                        fontSize: '0.9rem',
                        color: 'var(--slate)'
                      }}
                    >
                      <Icon name="checkCircle" size={17} color="var(--success)" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Brochure Card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  padding: '28px',
                  borderRadius: 'var(--radius)',
                  border: '1px solid #bfdbfe'
                }}
              >
                <h4 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.15rem' }}>
                  Download Prospectus & Fee Structure
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--slate)', marginBottom: '18px' }}>
                  Get the official Pioneers' Higher Education Academy information prospectus (2083/84) with comprehensive course breakdowns, lab schedules, and fee guidelines.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => alert('Downloading Pioneers Higher Education Academy Prospectus (2083/84)...')}
                >
                  <Icon name="download" size={16} /> Download Official Prospectus (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admisssionpage;
