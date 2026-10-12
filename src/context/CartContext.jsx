import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

const CartContext = createContext();

const CART_STORAGE_KEY = 'lumiere_luxury_cart_v1';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from storage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to storage', e);
    }
  }, [cart]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addItem = (dish, quantity = 1, notes = '') => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === dish.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          notes: notes || updated[existingIndex].notes
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: dish.id,
            name: dish.name,
            price: dish.price,
            image: dish.image,
            category: dish.category,
            quantity: quantity,
            notes: notes
          }
        ];
      }
    });

    showToast(`Added "${dish.name}" to your order`);
  };

  const updateQuantity = (dishId, newQty) => {
    if (newQty <= 0) {
      removeItem(dishId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === dishId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeItem = (dishId) => {
    const itemToRemove = cart.find((i) => i.id === dishId);
    setCart((prev) => prev.filter((item) => item.id !== dishId));
    if (itemToRemove) {
      showToast(`Removed "${itemToRemove.name}" from order`);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Luxury dining VAT (7.5% Nigerian standard) and Service (5%)
  const vat = Math.round(cartSubtotal * 0.075);
  const serviceCharge = Math.round(cartSubtotal * 0.05);
  const cartTotal = cartSubtotal + vat + serviceCharge;

  // Format Nigerian Naira
  const formatNaira = (amount) => {
    return '₦' + Number(amount || 0).toLocaleString('en-NG');
  };

  // Generate WhatsApp Order Link
  const generateWhatsAppOrderUrl = (guestDetails = {}) => {
    const {
      name = 'Distinguished Guest',
      phone = 'Not provided',
      orderType = 'Dine-In Pre-Order',
      tableOrAddress = 'Lumière Main Salon',
      instructions = 'None'
    } = guestDetails;

    if (cart.length === 0) return null;

    let itemsText = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}* x ${item.quantity} — ${formatNaira(item.price * item.quantity)}${
            item.notes ? `\n   ↳ Special Note: ${item.notes}` : ''
          }`
      )
      .join('\n');

    const message = `⚜️ *THE LUMIÈRE RESTAURANT & LOUNGE* ⚜️
*Haute Cuisine Order Request*
----------------------------------------
*GUEST INFORMATION*
• *Name:* ${name}
• *Phone:* ${phone}
• *Order Type:* ${orderType}
• *Table / Delivery Address:* ${tableOrAddress}
----------------------------------------
*SELECTED DISHES & WINES:*
${itemsText}

----------------------------------------
• *Subtotal:* ${formatNaira(cartSubtotal)}
• *VAT (7.5%):* ${formatNaira(vat)}
• *Service & Presentation (5%):* ${formatNaira(serviceCharge)}
• *TOTAL AMOUNT:* *${formatNaira(cartTotal)}*
----------------------------------------
*Special Culinary Instructions:* ${instructions || 'None'}

_Please confirm order acceptance, preparation timeframe, and payment details._`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        cartCount,
        cartSubtotal,
        vat,
        serviceCharge,
        cartTotal,
        formatNaira,
        generateWhatsAppOrderUrl,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

