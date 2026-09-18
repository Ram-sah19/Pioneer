import React, { useState } from 'react';
import Icon from '../Icons';

export const CampusGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewImage, setPreviewImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'campus',
      title: 'Grand Campus Courtyard & Assembly',
      desc: 'Morning prayer assembly and assembly ground at Pioneers Higher Education Academy, Waling.',
      image: '/campus-hero.jpg',
      tag: 'Campus Architecture'
    },
    {
      id: 2,
      category: 'labs',
      title: 'Modern Science & Practical Laboratory',
      desc: 'Students conducting chemical reactions, titrations, and microscopic analysis in the chemistry wing.',
      image: '/college-banner.png',
      tag: 'Science Laboratories'
    },
    {
      id: 3,
      category: 'clinical',
      title: 'Health Assistant (HA) Clinical Diagnostics',
      desc: 'CTEVT paramedical trainees practicing diagnostic procedures and patient counseling simulation.',
      image: '/campus-hero.jpg',
      tag: 'Paramedical Practice'
    },
    {
      id: 4,
      category: 'sports',
      title: 'Annual Inter-Faculty Sports Week',
      desc: 'Thrilling district-level volleyball tournament in our central sports arena.',
      image: '/college-banner.png',
      tag: 'Sports & Athletics'
    },
    {
      id: 5,
      category: 'events',
      title: 'Saraswati Puja & Cultural Celebration',
      desc: 'Annual festival celebrating the goddess of knowledge, arts, and music with faculty and students.',
      image: '/campus-hero.jpg',
      tag: 'Cultural Heritage'
    },
    {
      id: 6,
      category: 'labs',
      title: 'Hi-Tech Computer & IT Center',
      desc: 'Equipped with fiber broadband, coding terminals, and architectural drafting software.',
      image: '/college-banner.png',
      tag: 'Digital IT'
    }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className="tabs-container" style={{ marginBottom: '30px' }}>
        <button
          className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Photos ({galleryItems.length})
        </button>
        <button
          className={`tab-btn ${activeCategory === 'campus' ? 'active' : ''}`}
          onClick={() => setActiveCategory('campus')}
        >
          Campus & Grounds
        </button>
        <button
          className={`tab-btn ${activeCategory === 'labs' ? 'active' : ''}`}
          onClick={() => setActiveCategory('labs')}
        >
          Laboratories & IT
        </button>
        <button
          className={`tab-btn ${activeCategory === 'clinical' ? 'active' : ''}`}
          onClick={() => setActiveCategory('clinical')}
        >
          Paramedical & Health
        </button>
        <button
          className={`tab-btn ${activeCategory === 'sports' ? 'active' : ''}`}
          onClick={() => setActiveCategory('sports')}
        >
          Sports & Athletics
        </button>
        <button
          className={`tab-btn ${activeCategory === 'events' ? 'active' : ''}`}
          onClick={() => setActiveCategory('events')}
        >
          Events & Festivals
        </button>
      </div>

      <div className="grid-3" style={{ gap: '24px' }}>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{ overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => setPreviewImage(item)}
          >
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#0f172a' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/college-banner.png';
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 43, 92, 0.85)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {item.tag}
              </span>
            </div>
            <div className="card-body" style={{ padding: '18px 20px' }}>
              <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '6px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--slate)', lineHeight: '1.5', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div
            className="modal-card"
            style={{ maxWidth: '800px', padding: 0, overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={previewImage.image}
                alt={previewImage.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
              />
              <button
                onClick={() => setPreviewImage(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Icon name="x" size={20} />
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <span className="badge badge-blue" style={{ marginBottom: '8px' }}>
                {previewImage.tag}
              </span>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.3rem', marginBottom: '8px' }}>
                {previewImage.title}
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                {previewImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusGallery;
