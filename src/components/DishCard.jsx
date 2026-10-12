import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Check, Sparkles, Wine } from 'lucide-react';
import './DishCard.css';

export const DishCard = ({ dish }) => {
  const { cart, addItem, updateQuantity, formatNaira } = useCart();

  // Check if item is already in cart
  const cartItem = cart.find((item) => item.id === dish.id);
  const isInCart = Boolean(cartItem);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="dish-card">
      <div className="dish-card-image-wrap">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="dish-card-image" 
          loading="lazy" 
        />
        <div className="dish-image-overlay"></div>

        {/* Badges */}
        <div className="dish-card-badges">
          {dish.isSignature && (
            <span className="dish-badge signature-badge">
              <Sparkles size={11} /> Signature
            </span>
          )}
          {dish.isPopular && !dish.isSignature && (
            <span className="dish-badge popular-badge">Popular</span>
          )}
        </div>

        {/* Price Tag Floating Pill */}
        <div className="dish-card-price-tag">
          {formatNaira(dish.price)}
        </div>
      </div>

      <div className="dish-card-content">
        <div className="dish-card-header">
          <h3 className="dish-card-title">{dish.name}</h3>
        </div>

        {/* Tags */}
        {dish.tags && dish.tags.length > 0 && (
          <div className="dish-tag-pills">
            {dish.tags.map((tag, idx) => (
              <span key={idx} className="dish-tag-pill">{tag}</span>
            ))}
          </div>
        )}

        <p className="dish-card-desc">{dish.description}</p>

        {/* Wine / Pairing note */}
        {dish.pairing && (
          <div className="dish-pairing-note">
            <Wine size={13} className="pairing-icon" />
            <span>{dish.pairing}</span>
          </div>
        )}

        <div className="dish-card-footer">
          <div className="dish-price-block">
            <span className="price-label">Investment</span>
            <span className="price-amount">{formatNaira(dish.price)}</span>
          </div>

          <div className="dish-action-block">
            {isInCart ? (
              <div className="dish-cart-counter">
                <button
                  className="counter-btn"
                  onClick={() => updateQuantity(dish.id, currentQuantity - 1)}
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} />
                </button>
                <span className="counter-val">{currentQuantity}</span>
                <button
                  className="counter-btn"
                  onClick={() => updateQuantity(dish.id, currentQuantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={13} />
                </button>
              </div>
            ) : (
              <button
                className="btn-add-cart"
                onClick={() => addItem(dish)}
                aria-label={`Add ${dish.name} to order`}
              >
                <Plus size={15} /> Add to Order
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

