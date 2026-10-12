import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { DishCard } from '../components/DishCard';
import { 
  Sparkles, 
  Search, 
  ShoppingBag, 
  Filter, 
  Wine, 
  Info,
  Clock,
  ArrowRight
} from 'lucide-react';
import './MenuPage.css';

export const MenuPage = () => {
  const { cartCount, cartTotal, formatNaira, setIsCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('all'); // all, signature, seafood, vegetarian

  // Filter items based on activeCategory, search query, and filter tag
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || dish.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch = 
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.tags.some((t) => t.toLowerCase().includes(query));

      // Quick Tag Filter
      let tagMatch = true;
      if (filterTag === 'signature') tagMatch = dish.isSignature;
      if (filterTag === 'seafood') tagMatch = dish.tags.some((t) => t.toLowerCase().includes('seafood') || t.toLowerCase().includes('lobster') || t.toLowerCase().includes('scallop') || t.toLowerCase().includes('prawn'));
      if (filterTag === 'vegetarian') tagMatch = dish.tags.some((t) => t.toLowerCase().includes('vegetarian'));

      return categoryMatch && searchMatch && tagMatch;
    });
  }, [activeCategory, searchQuery, filterTag]);

  return (
    <div className="menu-page">
      {/* Menu Header Banner */}
      <section className="menu-hero-header">
        <div className="menu-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1920&q=85"
            alt="The Lumière Wine Cellar & Plating"
            className="menu-bg-img"
          />
          <div className="menu-hero-overlay"></div>
        </div>

        <div className="container menu-hero-container">
          <span className="gold-badge">
            <Sparkles size={14} /> Haute Carte Automne / Hiver 2026
          </span>
          <h1 className="menu-hero-title">The Culinary Repertoire</h1>
          <p className="menu-hero-desc">
            A symphony of flavors curated by Executive Chef Jean-Luc Moreau. Each dish reflects 
            French haute technique harmonized with the finest West African ingredients and rare global imports.
          </p>

          <div className="menu-hero-meta">
            <span><Clock size={15} /> All items prepared fresh to order</span>
            <span className="divider-dot">•</span>
            <span>All prices displayed in Nigerian Naira (₦)</span>
            <span className="divider-dot">•</span>
            <span>WhatsApp Ordering Available</span>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar Container */}
      <div className="menu-controls-wrapper">
        <div className="container">
          <div className="menu-controls-bar">
            {/* Search Input */}
            <div className="menu-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search Wagyu, Lobster, Caviar, Truffle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search culinary repertoire"
              />
              {searchQuery && (
                <button 
                  className="clear-search-btn" 
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filters */}
            <div className="menu-quick-tags">
              <button
                className={`quick-tag-btn ${filterTag === 'all' ? 'active' : ''}`}
                onClick={() => setFilterTag('all')}
              >
                All Curations
              </button>
              <button
                className={`quick-tag-btn ${filterTag === 'signature' ? 'active' : ''}`}
                onClick={() => setFilterTag('signature')}
              >
                <Sparkles size={13} /> Signatures Only
              </button>
              <button
                className={`quick-tag-btn ${filterTag === 'seafood' ? 'active' : ''}`}
                onClick={() => setFilterTag('seafood')}
              >
                Seafood & Raw Bar
              </button>
              <button
                className={`quick-tag-btn ${filterTag === 'vegetarian' ? 'active' : ''}`}
                onClick={() => setFilterTag('vegetarian')}
              >
                Vegetarian
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <nav className="category-tabs-nav" aria-label="Menu categories">
            <div className="category-tabs-scroll">
              {MENU_CATEGORIES.map((cat) => {
                const count = cat.id === 'all' 
                  ? MENU_ITEMS.length 
                  : MENU_ITEMS.filter((i) => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="cat-count">({count})</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Main Dishes Catalog */}
      <main className="menu-catalog-section section-padding">
        <div className="container">
          {/* Active Category Title & Count */}
          <div className="catalog-status-header">
            <div>
              <h2 className="active-cat-title">
                {activeCategory === 'all' 
                  ? 'Complete Culinary Portfolio' 
                  : MENU_CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </h2>
              <span className="results-count-text">
                Showing {filteredDishes.length} exquisite creation{filteredDishes.length !== 1 ? 's' : ''}
              </span>
            </div>

            {cartCount > 0 && (
              <button 
                className="cart-indicator-pill" 
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={16} />
                <span>{cartCount} item{cartCount > 1 ? 's' : ''} selected ({formatNaira(cartTotal)})</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length > 0 ? (
            <div className="dishes-grid">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="no-dishes-found">
              <Info size={40} className="gold-text-icon" />
              <h3>No Culinary Matches Found</h3>
              <p>
                We could not find any dishes matching "{searchQuery}". Try searching for another ingredient 
                or reset your active filters.
              </p>
              <button 
                className="btn btn-gold" 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setFilterTag('all');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Dietary & Sommelier Notice */}
          <div className="menu-bottom-notice glass-panel">
            <Wine size={26} className="gold-text-icon" />
            <div>
              <h4>Private Sommelier & Dietary Concierge</h4>
              <p>
                Kindly inform our dining captain of any allergies or religious dietary preferences. 
                Our cellar hosts over 1,200 bottles of vintage Champagne and premier grand crus available 
                for custom tableside pairing.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Mobile Cart Bar when cart has items */}
      {cartCount > 0 && (
        <div className="floating-cart-bar">
          <div className="floating-cart-info">
            <span className="floating-count">{cartCount} items in selection</span>
            <span className="floating-total">{formatNaira(cartTotal)}</span>
          </div>
          <button 
            className="btn btn-gold floating-cart-btn" 
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={17} /> View Cart & Order
          </button>
        </div>
      )}
    </div>
  );
};

