import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { TESTIMONIALS, PRESS_ACCOLADES } from '../data/testimonialsData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { DishCard } from '../components/DishCard';
import { 
  Sparkles, 
  ArrowRight, 
  CalendarDays, 
  ShoppingBag, 
  Award, 
  Wine, 
  Flame, 
  Compass, 
  Star, 
  MessageCircle, 
  Clock, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import './HomePage.css';

export const HomePage = () => {
  const { setIsCartOpen } = useCart();

  // Selected 4 standout signature items for home highlight
  const signatureDishes = MENU_ITEMS.filter((item) => item.isSignature).slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="hero-section" aria-label="Welcome to The Lumière">
        <div className="hero-backdrop">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85"
            alt="Haute cuisine steak preparation at The Lumière"
            className="hero-bg-img"
          />
          <div className="hero-overlay"></div>
          <div className="hero-gradient-bottom"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="gold-badge hero-badge">
                <Sparkles size={14} /> Victoria Island, Lagos • Haute Fine Dining
              </span>
            </div>

            <h1 className="hero-headline">
              Where French Precision Meets <span className="gold-gradient-text">African Luxury</span>
            </h1>

            <p className="hero-narrative">
              Welcome to <strong>The Lumière Restaurant & Lounge</strong> — an immersive culinary 
              sanctuary overlooking the Lagos Lagoon. Indulge in certified A5 Miyazaki Wagyu, 
              Imperial Ossetra Caviar, woodfire Jollof paella, and bespoke midnight mixology.
            </p>

            <div className="hero-cta-group">
              <Link to="/menu" className="btn btn-gold">
                <ShoppingBag size={17} /> Explore Haute Menu
              </Link>
              <Link to="/reservations" className="btn btn-outline">
                <CalendarDays size={17} /> Reserve VIP Table
              </Link>
            </div>

            <div className="hero-whatsapp-pill">
              <span className="pulse-indicator"></span>
              <span>Direct WhatsApp Concierge: </span>
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer"
                className="hero-wa-link"
              >
                {RESTAURANT_INFO.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Hero Features Bar */}
        <div className="hero-stats-bar">
          <div className="container stats-container">
            <div className="stat-card">
              <Award className="stat-icon" size={24} />
              <div>
                <span className="stat-title">A5 Wagyu & Caviar</span>
                <span className="stat-sub">Certified Japanese imports & 24K gold</span>
              </div>
            </div>
            <div className="stat-card">
              <Wine className="stat-icon" size={24} />
              <div>
                <span className="stat-title">1,200+ Vintage Cellar</span>
                <span className="stat-sub">Burgundy, Bordeaux & Grand Crus</span>
              </div>
            </div>
            <div className="stat-card">
              <Flame className="stat-icon" size={24} />
              <div>
                <span className="stat-title">Binchotan Charcoal Grill</span>
                <span className="stat-sub">Smoky firewood African fusion</span>
              </div>
            </div>
            <div className="stat-card">
              <Compass className="stat-icon" size={24} />
              <div>
                <span className="stat-title">Waterside Lounge</span>
                <span className="stat-sub">Victoria Island lagoon panoramas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STORY TEASER */}
      <section className="section-padding philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-visual">
              <div className="visual-image-main">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85"
                  alt="The Lumière Dining Room"
                />
              </div>
              <div className="visual-image-secondary">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=85"
                  alt="Midnight Mixology Cocktail"
                />
              </div>
              <div className="philosophy-badge-card">
                <span className="years-number">5★</span>
                <span className="years-label">Fine Dining Distinction In Lagos</span>
              </div>
            </div>

            <div className="philosophy-text-content">
              <div className="section-subtitle">The Gastronomic Ethos</div>
              <h2 className="section-title">
                Culinary Theatre for the Discerning Connoisseur
              </h2>
              <div className="gold-divider-left"></div>

              <p className="philosophy-desc">
                Founded by Executive Chef Jean-Luc Moreau and Nigerian hospitality visionary 
                Kolawole Davies, The Lumière was conceived as a multi-sensory theatre. Every dish 
                is an intentional convergence: classical Paris cooking rigor elevated by the intense 
                aromatic palette of West African botanicals, peppers, and heirloom woodsmoke.
              </p>

              <div className="pillars-list">
                <div className="pillar-item">
                  <div className="pillar-bullet">01</div>
                  <div>
                    <h4>Uncompromising Ingredients</h4>
                    <p>Miyazaki Wagyu flown from Japan, live Atlantic lobsters, and organic produce sourced from select farms.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-bullet">02</div>
                  <div>
                    <h4>Tableside Plating Spectacle</h4>
                    <p>Smoked cloches, 24-karat gold leaf carvings, and molten chocolate sphere revelations done before your eyes.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-bullet">03</div>
                  <div>
                    <h4>Midnight Lounge Vibrance</h4>
                    <p>As the clock strikes 10 PM, the dining room transitions seamlessly into an intimate velvet lounge with afro-luxe vinyl soundscapes.</p>
                  </div>
                </div>
              </div>

              <div className="philosophy-actions">
                <Link to="/about" className="btn btn-outline">
                  Read The Lumière Story <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DISHES SHOWCASE */}
      <section className="section-padding signature-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Chef's Masterpieces</span>
            <h2 className="section-title">Signature Culinary Creations</h2>
            <p className="section-description">
              Hand-selected highlights from our 20-course repertoire. Add directly to your order 
              for seamless WhatsApp dining reservation or concierge delivery.
            </p>
          </div>

          <div className="signature-grid">
            {signatureDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="signature-footer-cta">
            <Link to="/menu" className="btn btn-gold btn-large">
              <span>View Full 20-Dish Menu & Wine List</span>
              <ArrowRight size={18} />
            </Link>
            <p className="sub-cta-note">
              Prices in Nigerian Naira (₦) • All dishes prepared fresh to order by our Michelin-trained brigade
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE 3 AMBIANCES (SALON, BAR, TERRACE) */}
      <section className="section-padding ambiance-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Spaces of Distinction</span>
            <h2 className="section-title">Three Worlds of Midnight Splendor</h2>
            <p className="section-description">
              Each corner of The Lumière offers a bespoke atmosphere tailored to intimate dinners, 
              private business deals, or late-night celebratory indulgence.
            </p>
          </div>

          <div className="ambiance-cards-grid">
            <div className="ambiance-card">
              <div className="ambiance-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85"
                  alt="The Grand Dining Salon"
                />
              </div>
              <div className="ambiance-card-info">
                <span className="ambiance-tag">Haute Dining</span>
                <h3>The Grand Obsidian Salon</h3>
                <p>
                  Warm bronze chandeliers, hand-stitched velvet seating, and acoustic precision 
                  crafted for uninterrupted culinary enjoyment and romantic rendezvous.
                </p>
                <Link to="/gallery" className="ambiance-link">
                  View Ambiance <ChevronRight size={15} />
                </Link>
              </div>
            </div>

            <div className="ambiance-card">
              <div className="ambiance-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=85"
                  alt="The Golden Mixology Lounge"
                />
              </div>
              <div className="ambiance-card-info">
                <span className="ambiance-tag">Midnight Mixology</span>
                <h3>The Gilded Cocktail Bar</h3>
                <p>
                  A luminous onyx bar hosting our award-winning mixologists. Featuring smoked 
                  single malts, vintage French Champagnes, and signature botanicals until 2:30 AM.
                </p>
                <Link to="/gallery" className="ambiance-link">
                  View Lounge <ChevronRight size={15} />
                </Link>
              </div>
            </div>

            <div className="ambiance-card">
              <div className="ambiance-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=85"
                  alt="The Waterside Lagoon Terrace"
                />
              </div>
              <div className="ambiance-card-info">
                <span className="ambiance-tag">Alfresco Waterside</span>
                <h3>The Moonlit Lagoon Terrace</h3>
                <p>
                  Breathtaking breezes and night skyline reflections along Walter Carrington Crescent. 
                  Lagos’s premier open-air luxury setting for champagne toasts.
                </p>
                <Link to="/gallery" className="ambiance-link">
                  View Terrace <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST TESTIMONIALS & ACCOLADES */}
      <section className="section-padding testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Patron Commendations</span>
            <h2 className="section-title">Words from Our Esteemed Guests</h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="testimonial-card glass-panel">
                <div className="testimonial-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--gold-primary)" color="var(--gold-primary)" />
                  ))}
                </div>
                <p className="testimonial-text">"{review.comment}"</p>
                <div className="testimonial-author-block">
                  <div className="author-crest">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="author-name">{review.author}</h4>
                    <span className="author-title">{review.title}</span>
                    <span className="author-occasion">• {review.occasion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Row */}
          <div className="accolades-strip">
            <div className="accolades-title">
              <Award size={18} className="gold-text-icon" />
              <span>Critical Recognition & Accolades:</span>
            </div>
            <div className="accolades-items">
              {PRESS_ACCOLADES.map((item, idx) => (
                <div key={idx} className="accolade-badge">
                  <strong>{item.outlet}</strong>: {item.award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE RESERVATION CALL TO ACTION */}
      <section className="cta-banner-section">
        <div className="cta-backdrop">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
            alt="The Lumière Private Dining Room"
            className="cta-bg-img"
          />
          <div className="cta-dark-overlay"></div>
        </div>

        <div className="container cta-container">
          <div className="cta-content-box">
            <span className="gold-badge">
              <Sparkles size={14} /> An Unforgettable Evening Awaits
            </span>
            <h2 className="cta-title">
              Secure Your Table at Lagos's Most Celebrated Dining Address
            </h2>
            <p className="cta-desc">
              Due to intimate table spacing and bespoke preparation, we recommend reserving your 
              table 48 hours in advance. For same-day VIP reservations or private salon bookings, 
              contact our WhatsApp Dining Concierge directly.
            </p>

            <div className="cta-buttons-row">
              <Link to="/reservations" className="btn btn-gold btn-large">
                <CalendarDays size={18} /> Book Table Online
              </Link>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello The Lumière Concierge, I would like to reserve a table for an upcoming evening.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-large"
              >
                <MessageCircle size={18} /> WhatsApp Concierge ({RESTAURANT_INFO.whatsappDisplay})
              </a>
            </div>

            <div className="cta-footnotes">
              <span><Clock size={14} /> Open Tue - Sun from 12:00 PM</span>
              <span><ShieldCheck size={14} /> Smart Elegant Dress Code</span>
              <span>Complimentary VIP Valet Parking</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

