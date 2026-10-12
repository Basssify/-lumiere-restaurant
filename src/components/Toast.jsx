import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';
import './Toast.css';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="lumiere-toast-container" role="alert" aria-live="polite">
      <div className="lumiere-toast">
        <Sparkles className="lumiere-toast-icon" size={18} />
        <span className="lumiere-toast-text">{toastMessage}</span>
      </div>
    </div>
  );
};

