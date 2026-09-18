import React, { useState } from 'react';
import { useNavigation } from '../navigation';
import Icon from '../Icons';

export const ApplyModal = () => {
  const { isApplyModalOpen, closeApplyModal } = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: '+2 Science',
    previousGpa: '',
    guardianName: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isApplyModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      program: '+2 Science',
      previousGpa: '',
      guardianName: '',
      address: '',
      message: ''
    });
    closeApplyModal();
  };

  return (
    <div className="modal-overlay" onClick={closeApplyModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-accent)'
              }}
            >
              <Icon name="graduationCap" size={22} />
            </div>
            <div>
              <h3 className="modal-title">Online Admission Inquiry (2083/84)</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                Pioneers' Higher Education Academy • Waling, Syangja
              </p>
            </div>
          </div>
          <button
            onClick={closeApplyModal}
            style={{ color: 'var(--muted)', padding: '4px', borderRadius: '4px' }}
          >
            <Icon name="x" size={22} />
          </button>
        </div>

        <div className="modal-body">
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
                Application Received Successfully!
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: '0.95rem', marginBottom: '20px' }}>
                Thank you, <strong>{formData.fullName}</strong>. Our admissions desk has received your details for <strong>{formData.program}</strong>. Our counselors will contact you at <strong>{formData.phone}</strong> shortly with the syllabus, scholarship criteria, and entrance schedule.
              </p>
              <div
                style={{
                  background: 'var(--light-bg)',
                  padding: '16px',
                  borderRadius: 'var(--radius)',
                  textAlign: 'left',
                  fontSize: '0.86rem',
                  color: 'var(--muted)',
                  marginBottom: '24px'
                }}
              >
                <p><strong>Institution:</strong> Pioneers' Higher Education Academy</p>
                <p><strong>Hotline:</strong> +977-63-440220 / +977-9856031370</p>
                <p><strong>Office Hours:</strong> Sun - Fri (6:00 AM - 5:00 PM)</p>
              </div>
              <button className="btn btn-primary" onClick={handleReset}>
                Done & Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid-2" style={{ gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Aayush Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="98XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '14px' }}>
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
                <div className="form-group">
                  <label className="form-label">Select Program *</label>
                  <select
                    className="form-control"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  >
                    <option value="+2 Science (NEB)">+2 Science (NEB)</option>
                    <option value="+2 Management (NEB)">+2 Management (NEB)</option>
                    <option value="+2 Humanities & Law (NEB)">+2 Humanities & Law (NEB)</option>
                    <option value="CTEVT General Medicine (HA)">CTEVT General Medicine (HA)</option>
                    <option value="CTEVT Diploma in Civil Engineering">CTEVT Diploma in Civil Engineering</option>
                    <option value="CTEVT Pre-Diploma / Agriculture">CTEVT Pre-Diploma / Agriculture</option>
                    <option value="Bachelor of Business Studies (BBS - TU)">Bachelor of Business Studies (BBS - TU)</option>
                    <option value="School Level (Grade 1 - 10 / SEE)">School Level (Grade 1 - 10 / SEE)</option>
                  </select>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Previous School / SEE GPA</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 3.65 GPA or A+"
                    value={formData.previousGpa}
                    onChange={(e) => setFormData({ ...formData, previousGpa: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Current Address / Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Waling-1, Syangja / Galyang"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Questions / Hostel Request</label>
                <textarea
                  className="form-control"
                  style={{ minHeight: '80px' }}
                  placeholder="Tell us any queries regarding scholarships, transport bus route, or hostel facilities..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button type="button" className="btn btn-outline-primary" onClick={closeApplyModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Icon name="send" size={16} /> Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
