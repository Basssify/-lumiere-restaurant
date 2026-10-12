import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Instagram, 
  Check, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="lumiere-footer">
      <div className="footer-top-wave"></div>
      
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Ethos */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo">
              <span className="brand-monogram">
                <Sparkles size={16} className="logo-sparkle" />
              </span>
              <div>
                <h3 className="brand-title">THE LUMIÈRE</h3>
                <span className="brand-tag">RESTAURANT & LOUNGE</span>
              </div>
            </Link>

            <p className="footer-ethos">
              An epicurean sanctuary where classical French technique embraces the vibrant soul 
              of West African ingredients. Designed for those who savor extraordinary culinary craft.
            </p>

            <div className="footer-dress-code">
              <ShieldCheck size={16} className="gold-text-icon" />
              <span>{RESTAURANT_INFO.dressCode}</span>
            </div>

            <div className="footer-socials">
              <a 
                href={RESTAURANT_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="social-icon"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp Concierge"
                className="social-icon wa-social"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href={RESTAURANT_INFO.socials.tiktok} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="TikTok"
                className="social-icon"
              >
                <span className="tiktok-text">TikTok</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Culinary Journey</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">The Experience (Home)</Link></li>
              <li><Link to="/menu">Haute Carte & Tasting</Link></li>
              <li><Link to="/about">Our Story & Executive Chef</Link></li>
              <li><Link to="/gallery">Atmosphere & Interior</Link></li>
              <li><Link to="/reservations">VIP Table Reservations</Link></li>
              <li><Link to="/contact">Location & Valet Service</Link></li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="footer-col hours-col">
            <h4 className="footer-heading">Service Hours</h4>
            <div className="footer-hours-block">
              <div className="hours-entry">
                <span className="entry-title">Lunch Service</span>
                <span className="entry-time">{RESTAURANT_INFO.hours.lunch}</span>
              </div>
              <div className="hours-entry">
                <span className="entry-title">Haute Dinner</span>
                <span className="entry-time">{RESTAURANT_INFO.hours.dinner}</span>
              </div>
              <div className="hours-entry">
                <span className="entry-title">Midnight Lounge & Bar</span>
                <span className="entry-time">{RESTAURANT_INFO.hours.lounge}</span>
              </div>
              <div className="hours-entry closed">
                <span className="entry-time">{RESTAURANT_INFO.hours.closed}</span>
              </div>
            </div>

            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={16} className="gold-text-icon" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="gold-text-icon" />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 4: VIP Newsletter & Concierge */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">The Lumière Circle</h4>
            <p className="newsletter-desc">
              Receive private invitations to seasonal tasting menus, cellar releases, and guest chef masterclasses.
            </p>

            {subscribed ? (
              <div className="newsletter-success-box">
                <Check size={18} />
                <span>Welcome to The Lumière Circle. Your invitation is confirmed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <div className="input-with-button">
                  <input
                    type="email"
                    placeholder="Enter your private email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" aria-label="Join Circle">
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}

            <div className="footer-wa-direct-card">
              <div className="wa-icon-col">
                <MessageCircle size={22} />
              </div>
              <div>
                <span className="wa-card-label">Instant VIP Reservations</span>
                <a 
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello The Lumière Concierge, I would like to inquire about a table reservation.')}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="wa-card-link"
                >
                  Chat with Concierge →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved. Victoria Island, Lagos.
          </p>
          <div className="footer-legal-links">
            <span>Haute Cuisine</span>
            <span className="dot">•</span>
            <span>Master Mixology</span>
            <span className="dot">•</span>
            <span>Private Dining Salon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

