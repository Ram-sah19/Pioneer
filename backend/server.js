const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data store for demo inquiries
const admissionApplications = [];
const contactMessages = [];

// Official Notices API
app.get('/api/notices', (req, res) => {
  res.json([
    {
      id: 'N-01',
      category: 'Admissions',
      title: 'Admissions Open for Grade XI (+2 Science & Management) and CTEVT HA (2083/84)',
      date: 'Bhadra 28, 2083',
      dept: 'Admissions Office',
      summary: 'Applications are formally open for admission into Grade 11 Science and Management streams, as well as the 3-Year CTEVT PCL in General Medicine (Health Assistant).'
    },
    {
      id: 'N-02',
      category: 'Examination',
      title: 'First Terminal Examination Schedule Announced for Class 11, 12 and BBS',
      date: 'Bhadra 22, 2083',
      dept: 'Internal Examination Committee',
      summary: 'The routine for the First Terminal Assessment has been published. Theory examinations will be conducted in the morning shift followed by science and computer practicals.'
    }
  ]);
});

// Programs List API
app.get('/api/programs', (req, res) => {
  res.json([
    { name: '+2 Science', board: 'NEB', duration: '2 Years' },
    { name: '+2 Management', board: 'NEB', duration: '2 Years' },
    { name: '+2 Humanities & Law', board: 'NEB', duration: '2 Years' },
    { name: 'PCL in General Medicine (HA)', board: 'CTEVT', duration: '3 Years' },
    { name: 'Diploma in Civil Engineering', board: 'CTEVT', duration: '3 Years' },
    { name: 'Bachelor of Business Studies (BBS)', board: 'TU', duration: '4 Years' }
  ]);
});

// Admission Applications Endpoint
app.post('/api/admissions', (req, res) => {
  const application = {
    id: `APP-${Date.now()}`,
    ...req.body,
    submittedAt: new Date().toISOString()
  };
  admissionApplications.push(application);
  console.log('Received Admission Application:', application);
  res.status(201).json({
    success: true,
    message: 'Admission application successfully submitted to Pioneers Academy desk.',
    applicationId: application.id
  });
});

// Contact Inquiries Endpoint
app.post('/api/contact', (req, res) => {
  const message = {
    id: `MSG-${Date.now()}`,
    ...req.body,
    submittedAt: new Date().toISOString()
  };
  contactMessages.push(message);
  console.log('Received Contact Message:', message);
  res.status(201).json({
    success: true,
    message: 'Thank you for contacting Pioneers Academy. We will reply shortly.'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    institution: "Pioneers' Higher Education Academy",
    location: 'Waling, Syangja, Nepal',
    estd: '2044 B.S.'
  });
});

app.listen(PORT, () => {
  console.log(`Pioneers Academy Backend running on port ${PORT}`);
});
