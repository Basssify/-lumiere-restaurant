import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Sparkles, 
  CalendarDays, 
  Clock, 
  Users, 
  Phone, 
  User, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Wine, 
  Car,
  MessageCircle
} from 'lucide-react';
import './ReservationsPage.css';

export const ReservationsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: '2',
    seatingArea: 'The Grand Obsidian Salon',
    occasion: 'Romantic Fine Dining',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name or title.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = 'Please provide a valid contact number.';
    }
    if (!formData.date) {
      newErrors.date = 'Please select your preferred dining date.';
    }
    if (!formData.time) {
      newErrors.time = 'Please select a dining time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format reservation request for WhatsApp
    const message = `⚜️ *THE LUMIÈRE RESTAURANT & LOUNGE* ⚜️
*VIP TABLE RESERVATION INQUIRY*
----------------------------------------
*GUEST DETAILS:*
• *Distinguished Guest:* ${formData.name}
• *Phone Number:* ${formData.phone}
${formData.email ? `• *Email:* ${formData.email}\n` : ''}----------------------------------------
*BOOKING DETAILS:*
• *Date:* ${formData.date}
• *Preferred Time:* ${formData.time}
• *Party Size:* ${formData.guests} Guests
• *Desired Seating:* ${formData.seatingArea}
• *Occasion:* ${formData.occasion}
----------------------------------------
*SPECIAL REQUESTS & DIETARY:*
${formData.specialRequests || 'No specific dietary restrictions noted.'}

----------------------------------------
_Please confirm table availability and concierge arrangement for our party._`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;

    setLastWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Automatically trigger WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Get tomorrow's date string for input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="reservations-page">
      {/* Hero Banner */}
      <section className="reserve-hero">
        <div className="reserve-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
            alt="The Lumière Private Dining Room"
            className="reserve-bg-img"
          />
          <div className="reserve-hero-overlay"></div>
        </div>

        <div className="container reserve-hero-container">
          <span className="gold-badge">
            <Sparkles size={14} /> Bespoke Table Hospitality
          </span>
          <h1 className="reserve-hero-title">Table Reservations</h1>
          <p className="reserve-hero-desc">
            Reserve your evening of haute culinary excellence. Every reservation is personalized 
            with dedicated sommelier pairing and discrete butler attendance.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <main className="section-padding reserve-main-section">
        <div className="container">
          <div className="reserve-grid">
            {/* Form Column */}
            <div className="reserve-form-col">
              <div className="glass-panel reserve-card">
                {isSubmitted ? (
                  <div className="reserve-success-state">
                    <div className="success-crest-icon">
                      <CheckCircle2 size={54} className="gold-text-icon" />
                    </div>
                    <span className="section-subtitle">Transmission Complete</span>
                    <h2>Reservation Dispatched to Concierge</h2>
                    <p className="success-body-p">
                      Your table reservation for <strong>{formData.guests} guests</strong> on <strong>{formData.date} at {formData.time}</strong> 
                      has been generated and dispatched to our Head Concierge at <strong>{RESTAURANT_INFO.whatsappDisplay}</strong>.
                    </p>

                    <div className="summary-ticket">
                      <div className="ticket-row">
                        <span>Guest Name</span>
                        <strong>{formData.name}</strong>
                      </div>
                      <div className="ticket-row">
                        <span>Contact Number</span>
                        <strong>{formData.phone}</strong>
                      </div>
                      <div className="ticket-row">
                        <span>Seating Area</span>
                        <strong>{formData.seatingArea}</strong>
                      </div>
                      <div className="ticket-row">
                        <span>Occasion</span>
                        <strong>{formData.occasion}</strong>
                      </div>
                    </div>

                    <div className="success-actions-row">
                      <a 
                        href={lastWhatsAppUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-whatsapp"
                      >
                        <MessageCircle size={18} /> Re-open WhatsApp Chat
                      </a>
                      <button 
                        className="btn btn-outline" 
                        onClick={() => setIsSubmitted(false)}
                      >
                        Create Another Reservation
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="reserve-card-header">
                      <span className="section-subtitle">Private Concierge Booking</span>
                      <h3>Reserve Your Experience</h3>
                      <p>
                        Complete the guest information below to submit your reservation request 
                        directly to our dining concierge on WhatsApp.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="luxury-reservation-form" noValidate>
                      {/* Name & Phone */}
                      <div className="form-row-2">
                        <div className="form-field">
                          <label htmlFor="res-name">
                            <User size={14} /> Full Name or Title *
                          </label>
                          <input
                            id="res-name"
                            type="text"
                            name="name"
                            placeholder="e.g. Chief Babatunde Adeleke"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'input-error' : ''}
                          />
                          {errors.name && <span className="field-error-msg">{errors.name}</span>}
                        </div>

                        <div className="form-field">
                          <label htmlFor="res-phone">
                            <Phone size={14} /> Phone / WhatsApp Number *
                          </label>
                          <input
                            id="res-phone"
                            type="tel"
                            name="phone"
                            placeholder="e.g. +234 803 123 4567"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'input-error' : ''}
                          />
                          {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                        </div>
                      </div>

                      {/* Email (Optional) */}
                      <div className="form-field">
                        <label htmlFor="res-email">Email Address (Optional confirmation)</label>
                        <input
                          id="res-email"
                          type="email"
                          name="email"
                          placeholder="e.g. guest@corporate.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Date, Time, Guests */}
                      <div className="form-row-3">
                        <div className="form-field">
                          <label htmlFor="res-date">
                            <CalendarDays size={14} /> Date *
                          </label>
                          <input
                            id="res-date"
                            type="date"
                            name="date"
                            min={todayStr}
                            value={formData.date}
                            onChange={handleChange}
                            className={errors.date ? 'input-error' : ''}
                          />
                          {errors.date && <span className="field-error-msg">{errors.date}</span>}
                        </div>

                        <div className="form-field">
                          <label htmlFor="res-time">
                            <Clock size={14} /> Dining Time *
                          </label>
                          <select
                            id="res-time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                          >
                            <optgroup label="Lunch Service">
                              <option value="12:30">12:30 PM</option>
                              <option value="13:30">1:30 PM</option>
                              <option value="14:30">2:30 PM</option>
                            </optgroup>
                            <optgroup label="Haute Dinner Service">
                              <option value="18:30">6:30 PM</option>
                              <option value="19:30">7:30 PM</option>
                              <option value="20:30">8:30 PM</option>
                              <option value="21:30">9:30 PM</option>
                            </optgroup>
                            <optgroup label="Midnight Lounge & Bar">
                              <option value="22:30">10:30 PM</option>
                              <option value="23:30">11:30 PM</option>
                              <option value="00:30">12:30 AM</option>
                            </optgroup>
                          </select>
                        </div>

                        <div className="form-field">
                          <label htmlFor="res-guests">
                            <Users size={14} /> Party Size *
                          </label>
                          <select
                            id="res-guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                          >
                            <option value="1">1 Guest (Solo Dining)</option>
                            <option value="2">2 Guests (Intimate Table)</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="8">8 Guests (Executive Table)</option>
                            <option value="10+">10+ Guests (Private Salon)</option>
                          </select>
                        </div>
                      </div>

                      {/* Seating Preference & Occasion */}
                      <div className="form-row-2">
                        <div className="form-field">
                          <label htmlFor="res-seating">Preferred Dining Setting</label>
                          <select
                            id="res-seating"
                            name="seatingArea"
                            value={formData.seatingArea}
                            onChange={handleChange}
                          >
                            <option value="The Grand Obsidian Salon">The Grand Obsidian Salon (Indoor Velvet)</option>
                            <option value="The Moonlit Lagoon Terrace">The Moonlit Lagoon Terrace (Alfresco)</option>
                            <option value="The Gilded Cocktail Lounge">The Gilded Cocktail Lounge (High Table)</option>
                            <option value="Private VIP Salon (16 Seats)">Private VIP Salon (Exclusive Butler)</option>
                          </select>
                        </div>

                        <div className="form-field">
                          <label htmlFor="res-occasion">Special Occasion</label>
                          <select
                            id="res-occasion"
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                          >
                            <option value="Romantic Fine Dining">Romantic Fine Dining / Date Night</option>
                            <option value="Executive Business Meeting">Executive Business Dinner</option>
                            <option value="Anniversary Celebration">Anniversary Celebration</option>
                            <option value="Birthday Gathering">Birthday Celebration</option>
                            <option value="Chef Tasting & Cellar Tour">Chef's Tasting Menu Experience</option>
                            <option value="Informal Luxury Evening">Casual Luxury Gathering</option>
                          </select>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div className="form-field">
                        <label htmlFor="res-requests">
                          Special Requests, Dietary Restrictions or Sommelier Notes
                        </label>
                        <textarea
                          id="res-requests"
                          name="specialRequests"
                          rows={3}
                          placeholder="e.g. Allergies to shellfish, flower arrangement request, champagne pre-chilled on arrival, anniversary dessert sparkler..."
                          value={formData.specialRequests}
                          onChange={handleChange}
                        />
                      </div>

                      {/* WhatsApp Note */}
                      <div className="reserve-wa-notice">
                        <MessageCircle size={20} className="gold-text-icon" />
                        <div>
                          <strong>Instant WhatsApp Confirmation</strong>
                          <p>
                            Upon clicking below, your formatted booking details will launch in WhatsApp to 
                            connect with our on-duty Head Concierge at <strong>{RESTAURANT_INFO.whatsappDisplay}</strong>.
                          </p>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-gold btn-large w-100">
                        <Send size={18} /> Dispatch Reservation via WhatsApp
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar Guidelines Column */}
            <div className="reserve-info-col">
              <div className="glass-panel info-guidelines-card">
                <span className="section-subtitle">Dining Protocol</span>
                <h3>Hospitality Guidelines</h3>

                <ul className="guidelines-list">
                  <li>
                    <ShieldCheck size={20} className="gold-text-icon" />
                    <div>
                      <strong>Smart Elegant Dress Code</strong>
                      <p>{RESTAURANT_INFO.dressCode}</p>
                    </div>
                  </li>
                  <li>
                    <Clock size={20} className="gold-text-icon" />
                    <div>
                      <strong>Grace Period & Duration</strong>
                      <p>
                        We hold tables for 20 minutes past reservation time. Standard seating is 
                        orchestrated for 2.5 hours of unhurried culinary progression.
                      </p>
                    </div>
                  </li>
                  <li>
                    <Car size={20} className="gold-text-icon" />
                    <div>
                      <strong>Complimentary VIP Valet</strong>
                      <p>{RESTAURANT_INFO.valetParking}</p>
                    </div>
                  </li>
                  <li>
                    <Wine size={20} className="gold-text-icon" />
                    <div>
                      <strong>Corkage & Private Cellar</strong>
                      <p>
                        Our cellar accommodates special requests. Inquire about private sommelier 
                        pairings for tables of 6 or more.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="direct-call-box">
                  <span className="direct-call-title">Prefer Direct Telephone?</span>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="direct-phone-link">
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  <span className="direct-call-sub">Available 11:00 AM – 11:00 PM Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

