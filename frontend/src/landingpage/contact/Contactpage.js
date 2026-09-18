import React, { useState } from 'react';
import { useNavigation } from '../../navigation';
import Icon from '../../Icons';

function Contactpage() {
  const { navigateTo, openApplyModal } = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigateTo('home')}>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: '14px' }}>Contact & Campus Visit</h1>
          <p className="page-banner-subtitle">
            Have questions about admissions, +2 faculties, CTEVT technical programs, scholarships, or bus routes? Our counseling desk is here to help.
          </p>
        </div>
      </div>

      {/* Contact Cards Row */}
      <section className="section">
        <div className="container">
          <div className="grid-4" style={{ marginBottom: '50px' }}>
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div
                  className="card-icon-box"
                  style={{ margin: '0 auto 16px', background: 'var(--primary-light)', color: 'var(--primary-accent)' }}
                >
                  <Icon name="mapPin" size={24} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>Campus Address</h3>
                <p className="card-text" style={{ fontSize: '0.88rem' }}>
                  Waling Municipality - 1, Syangja District, Gandaki Province, Nepal
                </p>
                <span className="badge badge-blue">Near Siddhartha Highway</span>
              </div>
            </div>

            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div
                  className="card-icon-box"
                  style={{ margin: '0 auto 16px', background: '#fef2f2', color: '#dc2626' }}
                >
                  <Icon name="phone" size={24} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>Phone Numbers</h3>
                <p className="card-text" style={{ fontSize: '0.88rem' }}>
                  Landline: <strong>+977-63-440220</strong><br />
                  Hotline: <strong>+977-9856031370</strong>
                </p>
                <span className="badge badge-red">Active 6:00 AM – 5:00 PM</span>
              </div>
            </div>

            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div
                  className="card-icon-box"
                  style={{ margin: '0 auto 16px', background: 'var(--gold-light)', color: 'var(--gold)' }}
                >
                  <Icon name="mail" size={24} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>Official Email</h3>
                <p className="card-text" style={{ fontSize: '0.88rem' }}>
                  info@pioneersacademy.edu.np<br />
                  pioneerswaling@gmail.com
                </p>
                <span className="badge badge-amber">Prompt Reply</span>
              </div>
            </div>

            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div
                  className="card-icon-box"
                  style={{ margin: '0 auto 16px', background: '#f0fdf4', color: '#16a34a' }}
                >
                  <Icon name="clock" size={24} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>Office Hours</h3>
                <p className="card-text" style={{ fontSize: '0.88rem' }}>
                  Sunday to Friday<br />
                  6:00 AM – 5:00 PM<br />
                  (Closed on Saturdays)
                </p>
                <span className="badge badge-green">Open for Visitors</span>
              </div>
            </div>
          </div>

          {/* Contact Form & Location Details */}
          <div className="grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            {/* Form */}
            <div
              style={{
                background: '#ffffff',
                padding: '35px',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)'
              }}
            >
              <h3 style={{ color: 'var(--primary)', fontSize: '1.35rem', marginBottom: '8px' }}>
                Send Us a Message / Schedule a Visit
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '22px' }}>
                Fill in the form below and our educational counseling team in Waling will get back to you immediately.
              </p>

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
                    Message Received!
                  </h3>
                  <p style={{ color: 'var(--slate)', fontSize: '0.94rem', marginBottom: '20px' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your query regarding <em>{formData.subject}</em> has been transmitted to our administration desk. We will respond via phone or email shortly.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Ramesh Poudel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Phone / Mobile Number *</label>
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
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject of Inquiry *</label>
                    <select
                      className="form-control"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="+2 Science Admissions">+2 Science Admissions</option>
                      <option value="+2 Management Admissions">+2 Management Admissions</option>
                      <option value="CTEVT General Medicine (HA)">CTEVT General Medicine (HA)</option>
                      <option value="CTEVT Civil Engineering">CTEVT Civil Engineering</option>
                      <option value="BBS Degree Admissions (TU)">BBS Degree Admissions (TU)</option>
                      <option value="Scholarship Application">Scholarship Application</option>
                      <option value="Hostel & Bus Routes Inquiry">Hostel & Bus Routes Inquiry</option>
                      <option value="General Administration">General Administration</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message or Question *</label>
                    <textarea
                      required
                      className="form-control"
                      placeholder="Please describe what information you need regarding courses, fees, scholarships, or timings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                    <Icon name="send" size={16} /> Submit Message to Admissions Desk
                  </button>
                </form>
              )}
            </div>

            {/* Location & Transport Guidance */}
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
                  <Icon name="compass" size={20} color="var(--primary-accent)" />
                  How to Reach Pioneers Academy
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--slate)', lineHeight: '1.6', marginBottom: '16px' }}>
                  Our campus is strategically situated in <strong>Waling-1</strong>, just off the Siddhartha Highway in the heart of Syangja district:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ minWidth: '28px', color: 'var(--primary-accent)' }}>
                      <Icon name="checkCircle" size={20} />
                    </div>
                    <div style={{ fontSize: '0.88rem' }}>
                      <strong>From Pokhara / Putalibazar:</strong> Direct public buses and microbuses run every 15 minutes along the Siddhartha Highway to Waling.
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ minWidth: '28px', color: 'var(--primary-accent)' }}>
                      <Icon name="checkCircle" size={20} />
                    </div>
                    <div style={{ fontSize: '0.88rem' }}>
                      <strong>From Butwal / Palpa / Galyang:</strong> Smooth highway access with regular transport stopping right near the Waling main market and campus junction.
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ minWidth: '28px', color: 'var(--primary-accent)' }}>
                      <Icon name="checkCircle" size={20} />
                    </div>
                    <div style={{ fontSize: '0.88rem' }}>
                      <strong>College Bus Service:</strong> Regular morning and afternoon routes covering Waling, Galyang, Bhirkot, Bayarghat, and surrounding Syangja areas.
                    </div>
                  </div>
                </div>

                <div style={{ background: 'var(--light-bg)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>
                        Join our Facebook Community
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                        Over 11,000+ followers and active alumni
                      </div>
                    </div>
                    <a
                      href="https://www.facebook.com/pioneersacademywaling"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{ background: '#1877f2', color: '#ffffff', padding: '8px 14px', fontSize: '0.84rem' }}
                    >
                      <Icon name="facebook" size={16} /> Visit Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant Action CTA */}
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)',
                  padding: '28px',
                  borderRadius: 'var(--radius)',
                  color: '#ffffff'
                }}
              >
                <h4 style={{ color: '#ffffff', marginBottom: '8px', fontSize: '1.2rem' }}>
                  Ready to Enroll?
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', marginBottom: '18px' }}>
                  Start your online admission application in less than 2 minutes to reserve your seat in the upcoming session.
                </p>
                <button className="btn btn-secondary" onClick={openApplyModal}>
                  <Icon name="graduationCap" size={16} /> Open Admission Application Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactpage;