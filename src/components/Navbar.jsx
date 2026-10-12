import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Sparkles, 
  Phone, 
  CalendarDays,
  Clock
} from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Track scroll position for transparent to glass header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Haute Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact & Lounge', path: '/contact' },
  ];

  return (
    <>
      <header className={`lumiere-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="The Lumière Home">
            <span className="brand-monogram">
              <Sparkles size={16} className="logo-sparkle" />
            </span>
            <div className="brand-text-block">
              <span className="brand-title">THE LUMIÈRE</span>
              <span className="brand-tag">RESTAURANT & LOUNGE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end={link.path === '/'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="navbar-actions">
            {/* Cart Trigger */}
            <button
              className="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open order cart with ${cartCount} items`}
              title="View Culinary Selection"
            >
              <ShoppingBag size={20} />
              <span className="cart-badge-text">Order</span>
              {cartCount > 0 && (
                <span className="nav-cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Quick Reserve CTA */}
            <Link to="/reservations" className="btn btn-gold nav-reserve-btn">
              <span>Reserve Table</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <div className="brand-text-block">
              <span className="brand-title">THE LUMIÈRE</span>
              <span className="brand-tag">VICTORIA ISLAND, LAGOS</span>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
              >
                <span>{link.name}</span>
                <span className="nav-arrow">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <button 
              className="btn btn-gold w-100 mb-2"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
            >
              <ShoppingBag size={18} /> View Culinary Cart ({cartCount})
            </button>

            <Link 
              to="/reservations" 
              className="btn btn-outline w-100 mb-3"
            >
              <CalendarDays size={18} /> Reserve a VIP Table
            </Link>

            <div className="mobile-quick-info">
              <div className="info-item">
                <Clock size={15} />
                <span>Tue - Sun: 12:00 PM – 2:30 AM</span>
              </div>
              <div className="info-item">
                <Phone size={15} />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

