import React, { useState, useEffect } from 'react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '../data/galleryData';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera 
} from 'lucide-react';
import './GalleryPage.css';

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight' && selectedImageIndex !== null) {
        handleNextImage();
      } else if (e.key === 'ArrowLeft' && selectedImageIndex !== null) {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const currentLightboxImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <div className="gallery-page">
      {/* Hero Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=85"
            alt="The Lumière Bar Atmosphere"
            className="gallery-bg-img"
          />
          <div className="gallery-hero-overlay"></div>
        </div>

        <div className="container gallery-hero-container">
          <span className="gold-badge">
            <Camera size={14} /> Visual Narrative & Ambiance
          </span>
          <h1 className="gallery-hero-title">The Gallery of Splendor</h1>
          <p className="gallery-hero-desc">
            Immerse yourself in the aesthetic world of The Lumière. From the delicate metallurgy 
            of our dessert spheres to the velvet glow of the midnight salon.
          </p>
        </div>
      </section>

      {/* Gallery Filter Nav */}
      <div className="gallery-nav-bar">
        <div className="container">
          <div className="gallery-filter-tabs">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`gallery-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedImageIndex(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="gallery-content section-padding">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item ${item.aspect}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy" 
                  className="gallery-img"
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-overlay-meta">
                    <span className="gallery-overlay-cat">{item.category}</span>
                    <h3 className="gallery-overlay-title">{item.title}</h3>
                    <p className="gallery-overlay-sub">{item.subtitle}</p>
                  </div>
                  <div className="gallery-expand-icon">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {currentLightboxImage && (
        <div 
          className="lightbox-overlay" 
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="lightbox-close-btn" 
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close Lightbox"
          >
            <X size={26} />
          </button>

          <button 
            className="lightbox-nav-btn prev-btn" 
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={30} />
          </button>

          <div 
            className="lightbox-dialog" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentLightboxImage.image} 
              alt={currentLightboxImage.title} 
              className="lightbox-active-img"
            />
            <div className="lightbox-caption">
              <div>
                <span className="lightbox-cat-badge">{currentLightboxImage.category}</span>
                <h3 className="lightbox-title">{currentLightboxImage.title}</h3>
                <p className="lightbox-desc">{currentLightboxImage.subtitle}</p>
              </div>
              <div className="lightbox-counter">
                {selectedImageIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </div>

          <button 
            className="lightbox-nav-btn next-btn" 
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

