import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Car, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import './ContactPage.css';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Dining Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name or title.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please enter a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello The Lumière Concierge, I would like to inquire regarding: ${formData.subject || 'Table & Dining Inquiry'}. My name is ${formData.name || 'a prospective guest'}.`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=85"
            alt="The Lumière Victoria Island Lagoon Terrace"
            className="contact-bg-img"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="container contact-hero-container">
          <span className="gold-badge">
            <Sparkles size={14} /> Concierge & Inquiries
          </span>
          <h1 className="contact-hero-title">Contact & Location</h1>
          <p className="contact-hero-desc">
            Located along the diplomatic waterfront of Walter Carrington Crescent, Victoria Island. 
            Our dining concierge is dedicated to fulfilling your gastronomic requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="section-padding contact-main">
        <div className="container">
          {/* Top Quick Contact Cards */}
          <div className="contact-cards-grid">
            {/* Address */}
            <div className="contact-card glass-panel">
              <div className="card-icon-wrap">
                <MapPin size={24} />
              </div>
              <h3>Sanctuary Address</h3>
              <p className="card-text-primary">{RESTAURANT_INFO.address}</p>
              <span className="card-subtext">{RESTAURANT_INFO.landmark}</span>
              <a 
                href={RESTAURANT_INFO.mapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="card-action-link"
              >
                Open Google Maps <ExternalLink size={13} />
              </a>
            </div>

            {/* Direct Phone */}
            <div className="contact-card glass-panel">
              <div className="card-icon-wrap">
                <Phone size={24} />
              </div>
              <h3>Direct Telephone</h3>
              <p className="card-text-primary">{RESTAURANT_INFO.phoneDisplay}</p>
              <span className="card-subtext">Reservations, Sommelier & VIP Concierge</span>
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="card-action-link">
                Call Concierge Now →
              </a>
            </div>

            {/* WhatsApp VIP */}
            <div className="contact-card glass-panel wa-highlight-card">
              <div className="card-icon-wrap wa-icon-wrap">
                <MessageCircle size={24} />
              </div>
              <h3>WhatsApp Concierge</h3>
              <p className="card-text-primary">{RESTAURANT_INFO.whatsappDisplay}</p>
              <span className="card-subtext">Instant table confirmation, menus & orders</span>
              <button onClick={handleWhatsAppInquiry} className="btn btn-whatsapp card-wa-btn">
                <MessageCircle size={16} /> Open WhatsApp
              </button>
            </div>

            {/* Email */}
            <div className="contact-card glass-panel">
              <div className="card-icon-wrap">
                <Mail size={24} />
              </div>
              <h3>Electronic Mail</h3>
              <p className="card-text-primary">{RESTAURANT_INFO.email}</p>
              <span className="card-subtext">Private events, buyouts & media inquiries</span>
              <a href={`mailto:${RESTAURANT_INFO.email}`} className="card-action-link">
                Send Message →
              </a>
            </div>
          </div>

          {/* Form & Hours Row */}
          <div className="contact-body-grid">
            {/* Form */}
            <div className="glass-panel contact-form-box">
              <span className="section-subtitle">Send a Message</span>
              <h3>Concierge Inquiry Form</h3>
              <p className="contact-form-intro">
                Whether organizing a private boardroom dinner, corporate reception, or special culinary 
                request, our team responds within 2 hours.
              </p>

              {submitted ? (
                <div className="contact-success-state">
                  <CheckCircle2 size={54} className="gold-text-icon" />
                  <h4>Inquiry Successfully Received</h4>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our Head Concierge will review your inquiry 
                    regarding <em>"{formData.subject}"</em> and contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button 
                    className="btn btn-gold" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Dining Inquiry',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-inquiry-form" noValidate>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="ct-name">Full Name *</label>
                      <input
                        id="ct-name"
                        type="text"
                        name="name"
                        placeholder="e.g. Adeola Williams"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-field">
                      <label htmlFor="ct-email">Email Address *</label>
                      <input
                        id="ct-email"
                        type="email"
                        name="email"
                        placeholder="e.g. adeola@luxury.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="ct-phone">Phone Number (Optional)</label>
                      <input
                        id="ct-phone"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +234 803 123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="ct-subject">Inquiry Nature</label>
                      <select
                        id="ct-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="General Dining Inquiry">General Dining Inquiry</option>
                        <option value="Private Salon Buyout (16-40 Guests)">Private Salon Buyout (16-40 Guests)</option>
                        <option value="Corporate Boardroom Dinner">Corporate Boardroom Dinner</option>
                        <option value="Press, Filming & Media Inquiries">Press, Filming & Media Inquiries</option>
                        <option value="Sommelier Rare Cellar Acquisition">Sommelier Rare Cellar Acquisition</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="ct-message">Your Message *</label>
                    <textarea
                      id="ct-message"
                      name="message"
                      rows={4}
                      placeholder="Share your event date, anticipated guest count, or bespoke culinary preferences..."
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'input-error' : ''}
                    />
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-gold w-100">
                    <Send size={17} /> Transmit Inquiry to Concierge
                  </button>
                </form>
              )}
            </div>

            {/* Hours & Map Preview */}
            <div className="contact-hours-sidebar">
              {/* Detailed Hours */}
              <div className="glass-panel hours-schedule-card">
                <span className="section-subtitle">Service Schedule</span>
                <h3>Hours of Operation</h3>

                <div className="schedule-timeline">
                  <div className="schedule-entry">
                    <div className="entry-marker"></div>
                    <div>
                      <strong>Lunch Service</strong>
                      <span>{RESTAURANT_INFO.hours.lunch}</span>
                      <small>Full carte, business lunch set & light dessert tasting</small>
                    </div>
                  </div>

                  <div className="schedule-entry">
                    <div className="entry-marker"></div>
                    <div>
                      <strong>Haute Dinner Service</strong>
                      <span>{RESTAURANT_INFO.hours.dinner}</span>
                      <small>Chef's signature tasting, prime steaks & tableside rituals</small>
                    </div>
                  </div>

                  <div className="schedule-entry">
                    <div className="entry-marker"></div>
                    <div>
                      <strong>Midnight Lounge & Bar</strong>
                      <span>{RESTAURANT_INFO.hours.lounge}</span>
                      <small>Signature cocktails, rare champagnes & resident DJ afro-luxe vinyl</small>
                    </div>
                  </div>

                  <div className="schedule-entry closed-day">
                    <div className="entry-marker closed-marker"></div>
                    <div>
                      <strong>Mondays</strong>
                      <span>{RESTAURANT_INFO.hours.closed}</span>
                    </div>
                  </div>
                </div>

                <div className="valet-info-strip">
                  <Car size={18} className="gold-text-icon" />
                  <div>
                    <strong>VIP Valet Parking:</strong>
                    <p>Complimentary secured valet service upon arrival on Walter Carrington Crescent.</p>
                  </div>
                </div>
              </div>

              {/* Victoria Island Map Preview Card */}
              <div className="glass-panel map-preview-card">
                <div className="map-artistic-header">
                  <div>
                    <span className="map-badge">Diplomatic Quarter</span>
                    <h4>Victoria Island, Lagos</h4>
                    <p>{RESTAURANT_INFO.address}</p>
                  </div>
                  <a 
                    href={RESTAURANT_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold btn-sm"
                  >
                    View on Map <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

