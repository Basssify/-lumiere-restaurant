import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// Luxury 404 Not Found Page
const NotFoundPage = () => {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      paddingTop: '120px'
    }}>
      <span className="gold-badge" style={{ marginBottom: '1.5rem' }}>404 • Destination Not Found</span>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
        The Path Beyond The Light
      </h1>
      <p style={{ maxWidth: '480px', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
        The culinary chamber or page you are seeking does not exist or has been retired. 
        Allow us to escort you back to the main dining room.
      </p>
      <Link to="/" className="btn btn-gold">
        Return to The Main Dining Room
      </Link>
    </div>
  );
};

export const App = () => {
  return (
    <div className="lumiere-app">
      <ScrollToTop />
      <Navbar />

      <main className="lumiere-main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer />
      <Toast />
    </div>
  );
};

export default App;

