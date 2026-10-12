import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Send, 
  Sparkles, 
  Clock, 
  Info,
  CheckCircle2
} from 'lucide-react';
import './CartDrawer.css';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    cartCount,
    cartSubtotal,
    vat,
    serviceCharge,
    cartTotal,
    formatNaira,
    generateWhatsAppOrderUrl
  } = useCart();

  const navigate = useNavigate();

  // Guest details state for order personalization
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [guestDetails, setGuestDetails] = useState({
    name: '',
    phone: '',
    orderType: 'Dine-In Pre-Order',
    tableOrAddress: 'Lumière Main Salon',
    instructions: ''
  });
  const [orderSent, setOrderSent] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isCartOpen) return null;

  const handleClose = () => {
    setIsCartOpen(false);
    setShowCheckoutForm(false);
    setOrderSent(false);
    setFormError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleProceedToWhatsApp = (e) => {
    e.preventDefault();

    if (!guestDetails.name.trim()) {
      setFormError('Please enter your name or title (e.g. Mr. Adebayo / Dr. Williams).');
      return;
    }
    if (!guestDetails.phone.trim() || guestDetails.phone.length < 7) {
      setFormError('Please provide a valid phone number for order verification.');
      return;
    }

    const waUrl = generateWhatsAppOrderUrl(guestDetails);
    if (!waUrl) return;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setOrderSent(true);
  };

  const handleBrowseMenu = () => {
    setIsCartOpen(false);
    navigate('/menu');
  };

  return (
    <div className="cart-drawer-overlay" onClick={handleClose}>
      <aside 
        className="cart-drawer" 
        onClick={(e) => e.stopPropagation()} 
        aria-label="Culinary Selection Cart"
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <span className="cart-eyebrow">The Lumière Cellar & Kitchen</span>
            <h2>Your Selection <span className="cart-count-pill">{cartCount}</span></h2>
          </div>
          <button 
            className="cart-close-btn" 
            onClick={handleClose} 
            aria-label="Close cart drawer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Area */}
        <div className="cart-drawer-body">
          {orderSent ? (
            <div className="order-success-state">
              <div className="success-icon-wrap">
                <CheckCircle2 size={54} className="gold-check-icon" />
              </div>
              <h3>Order Dispatched to Concierge</h3>
              <p>
                Your bespoke culinary order has been formatted and transferred to our WhatsApp 
                sommelier & dining concierge at <strong>{RESTAURANT_INFO.whatsappDisplay}</strong>.
              </p>
              <div className="order-success-details">
                <p><strong>Guest:</strong> {guestDetails.name}</p>
                <p><strong>Dining Format:</strong> {guestDetails.orderType}</p>
                <p><strong>Total Value:</strong> {formatNaira(cartTotal)}</p>
              </div>
              <div className="success-actions">
                <button 
                  className="btn btn-gold" 
                  onClick={() => {
                    clearCart();
                    handleClose();
                  }}
                >
                  Clear Selection & Close
                </button>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setOrderSent(false)}
                >
                  Review Order Details
                </button>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-cart-icon">
                <ShoppingBag size={48} />
              </div>
              <h3>Your Culinary Cart is Empty</h3>
              <p>
                You haven't added any haute cuisine dishes, prime steaks, or vintage cellar selections yet.
              </p>
              <button className="btn btn-gold" onClick={handleBrowseMenu}>
                Explore The Menu <ArrowRight size={16} />
              </button>
            </div>
          ) : showCheckoutForm ? (
            /* WhatsApp Checkout Form */
            <div className="cart-checkout-form-container">
              <button 
                type="button" 
                className="back-to-items-link" 
                onClick={() => setShowCheckoutForm(false)}
              >
                ← Return to items list
              </button>

              <div className="checkout-intro">
                <Sparkles size={18} className="gold-icon" />
                <div>
                  <h4>Guest & Dining Information</h4>
                  <p>Provide details to transmit directly to our WhatsApp concierge.</p>
                </div>
              </div>

              {formError && (
                <div className="cart-form-error">
                  <Info size={16} /> {formError}
                </div>
              )}

              <form onSubmit={handleProceedToWhatsApp} className="cart-checkout-form">
                <div className="form-group">
                  <label htmlFor="guest-name">Full Name / Title *</label>
                  <input
                    id="guest-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Chief Adebayo Coker"
                    value={guestDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guest-phone">Phone / WhatsApp Number *</label>
                  <input
                    id="guest-phone"
                    type="tel"
                    name="phone"
                    placeholder="e.g. +234 803 123 4567"
                    value={guestDetails.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guest-orderType">Dining Experience</label>
                  <select
                    id="guest-orderType"
                    name="orderType"
                    value={guestDetails.orderType}
                    onChange={handleInputChange}
                  >
                    <option value="Dine-In Pre-Order">Dine-In (Pre-Order for Table)</option>
                    <option value="VIP Table Reserve & Dine">VIP Table Reserve & Dine</option>
                    <option value="Private Chauffeur Delivery">Private Chauffeur Delivery (VI / Ikoyi / Lekki)</option>
                    <option value="Curbside Pickup">Curbside Pickup (Walter Carrington Cres.)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="guest-address">Table No. or Delivery Address</label>
                  <input
                    id="guest-address"
                    type="text"
                    name="tableOrAddress"
                    placeholder="Table 4 / Penthouse 2, Bourdillon Rd, Ikoyi"
                    value={guestDetails.tableOrAddress}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guest-notes">Culinary Notes & Dietary Requests</label>
                  <textarea
                    id="guest-notes"
                    name="instructions"
                    rows={2}
                    placeholder="e.g. Medium-rare steak, peanut allergy, chilling champagne for 8:30 PM..."
                    value={guestDetails.instructions}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="whatsapp-notice-box">
                  <div className="notice-icon">
                    <Send size={16} />
                  </div>
                  <div>
                    <span className="notice-title">WhatsApp Instant Concierge:</span>
                    <p>
                      Orders transmit to <strong>{RESTAURANT_INFO.whatsappDisplay}</strong> with itemized invoice and instant confirmation.
                    </p>
                  </div>
                </div>

                <button type="submit" className="btn btn-whatsapp w-100">
                  <Send size={18} /> Transmit Order via WhatsApp
                </button>
              </form>
            </div>
          ) : (
            /* Normal Cart List */
            <div className="cart-items-list">
              <div className="cart-actions-bar">
                <span className="items-selected-count">{cart.length} distinct item{cart.length > 1 ? 's' : ''}</span>
                <button className="clear-cart-text-btn" onClick={clearCart}>
                  <Trash2 size={13} /> Empty Selection
                </button>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-thumb" />
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <button 
                        className="remove-item-btn" 
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <span className="cart-item-price-unit">{formatNaira(item.price)} each</span>

                    <div className="cart-item-bottom">
                      <div className="cart-qty-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="cart-qty-display">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="cart-item-subtotal-price">
                        {formatNaira(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Subtotals & Order CTA */}
        {cart.length > 0 && !orderSent && (
          <div className="cart-drawer-footer">
            <div className="cart-breakdown-row">
              <span>Culinary Subtotal</span>
              <span>{formatNaira(cartSubtotal)}</span>
            </div>
            <div className="cart-breakdown-row subtle">
              <span>Lagos Luxury VAT (7.5%)</span>
              <span>{formatNaira(vat)}</span>
            </div>
            <div className="cart-breakdown-row subtle">
              <span>Service & Butler Presentation (5%)</span>
              <span>{formatNaira(serviceCharge)}</span>
            </div>
            <div className="gold-divider-mini"></div>
            <div className="cart-breakdown-row total-row">
              <span>Total Estimated Investment</span>
              <span className="cart-grand-total">{formatNaira(cartTotal)}</span>
            </div>

            {!showCheckoutForm ? (
              <button 
                className="btn btn-gold w-100 mt-3" 
                onClick={() => setShowCheckoutForm(true)}
              >
                Proceed to WhatsApp Order <ArrowRight size={17} />
              </button>
            ) : (
              <p className="concierge-guarantee-note">
                <Clock size={13} /> Average prep & delivery response: Under 5 minutes via WhatsApp
              </p>
            )}
          </div>
        )}
      </aside>
    </div>
  );
};

