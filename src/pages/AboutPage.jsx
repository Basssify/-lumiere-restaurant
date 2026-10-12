import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  Sparkles, 
  Award, 
  Wine, 
  Flame, 
  HeartHandshake, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass
} from 'lucide-react';
import './AboutPage.css';

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=85"
            alt="The Lumière Architecture and Interior"
            className="about-bg-img"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <span className="gold-badge">
            <Sparkles size={14} /> The Heritage & The Vision
          </span>
          <h1 className="about-hero-title">The Art of The Lumière</h1>
          <p className="about-hero-desc">
            An uncompromising epicurean landmark born on Walter Carrington Crescent, 
            crafted to elevate Nigerian dining onto the global haute gastronomy stage.
          </p>
        </div>
      </section>

      {/* 1. FOUNDING STORY */}
      <section className="section-padding story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-subtitle">The Genesis</span>
              <h2 className="section-title">A Vision Born from Two Continents</h2>
              <div className="gold-divider-left"></div>

              <p className="story-p-lead">
                In 2022, French Master Chef Jean-Luc Moreau and Nigerian luxury hospitality entrepreneur 
                Kolawole Davies met in Paris over a shared realization: while global fine dining recognized 
                Tokyo, Copenhagen, and London, West Africa’s boundless culinary tapestry deserved a stage 
                of equal reverence.
              </p>

              <p className="story-p">
                Together, they spent two years traveling across Nigerian riverine states, spice markets of the 
                North, and wine cellars in Bordeaux. The result was <strong>The Lumière Restaurant & Lounge</strong> 
                — an architectural sanctuary overlooking the tranquil waters of Victoria Island.
              </p>

              <p className="story-p">
                At The Lumière, cooking is an art form. We treat aged Wagyu with Nigerian Yaji botanicals, 
                elevate woodfire-smoked Jollof into saffron-infused lobster paella, and transform baobab and 
                wild hibiscus into vintage champagne elixirs.
              </p>

              <div className="story-quote-card">
                <p>
                  "We do not dilute French technique, nor do we tame West African intensity. We ignite them 
                  together until something breathtaking and timeless emerges."
                </p>
                <div className="quote-byline">— Kolawole Davies & Chef Jean-Luc Moreau</div>
              </div>
            </div>

            <div className="story-images">
              <div className="story-img-main">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                  alt="The Private Salon at Lumiere"
                />
              </div>
              <div className="story-img-secondary">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
                  alt="Culinary plating excellence"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHEF PROFILE */}
      <section className="section-padding chef-section">
        <div className="container">
          <div className="chef-card glass-panel">
            <div className="chef-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                alt="Executive Chef Jean-Luc Moreau"
                className="chef-portrait"
              />
              <div className="chef-badge">
                <Award size={18} />
                <span>Executive Chef</span>
              </div>
            </div>

            <div className="chef-details">
              <span className="section-subtitle">Master of the Craft</span>
              <h2 className="chef-name">Chef Jean-Luc Moreau</h2>
              <span className="chef-title">Co-Founder & Culinary Director</span>

              <p className="chef-bio">
                Trained at École Grégoire-Ferrandi in Paris and seasoned at Michelin-starred establishments 
                in Lyon, Monaco, and Geneva, Chef Jean-Luc brings over 22 years of elite kitchen mastery. 
                His obsession with precision temperature control, sauce reduction, and textural contrast 
                forms the backbone of The Lumière brigade.
              </p>

              <p className="chef-bio">
                "Cooking at The Lumière is the most exhilarating chapter of my career. The smokiness of 
                local mahogany hardwoods, the sweetness of sun-ripened Nigerian plantain, and the heat of 
                indigenous peppers have expanded my classical French vocabulary forever."
              </p>

              <div className="chef-credentials">
                <div className="cred-item">
                  <span className="cred-val">22+</span>
                  <span className="cred-lbl">Years Haute Culinary Experience</span>
                </div>
                <div className="cred-item">
                  <span className="cred-val">3</span>
                  <span className="cred-lbl">Michelin-Starred Brigades</span>
                </div>
                <div className="cred-item">
                  <span className="cred-val">100%</span>
                  <span className="cred-lbl">Scratch Kitchen Precision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES & PHILOSOPHY */}
      <section className="section-padding values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Guiding Pillars</span>
            <h2 className="section-title">The Four Tenets of Excellence</h2>
            <p className="section-description">
              Every evening at The Lumière is orchestrated around an uncompromising commitment to 
              gastronomic honor and discreet luxury hospitality.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card glass-panel">
              <div className="value-icon-box">
                <Flame size={28} />
              </div>
              <h3>Culinary Rigor</h3>
              <p>
                From 14-hour red wine oxtail reductions to tableside flambé and binchotan charcoal searing, 
                no shortcuts are ever permitted in our kitchens.
              </p>
            </div>

            <div className="value-card glass-panel">
              <div className="value-icon-box">
                <Wine size={28} />
              </div>
              <h3>Cellar Provenance</h3>
              <p>
                Every vintage in our 1,200-bottle temperature-regulated cellar is sourced through direct 
                importer relationships in Bordeaux, Burgundy, Champagne, and Tuscany.
              </p>
            </div>

            <div className="value-card glass-panel">
              <div className="value-icon-box">
                <Sparkles size={28} />
              </div>
              <h3>Sensory Theatre</h3>
              <p>
                Dining is visual and experiential. Crystal glassware, bespoke linen, hand-crafted cutlery, 
                and acoustic sound design elevate each course into a memory.
              </p>
            </div>

            <div className="value-card glass-panel">
              <div className="value-icon-box">
                <HeartHandshake size={28} />
              </div>
              <h3>Discreet Reverence</h3>
              <p>
                Our captains and butlers provide intuitive, anticipatory service. Private business 
                dialogues and intimate celebrations receive absolute discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERIOR & CRAFTSMANSHIP SHOWCASE */}
      <section className="section-padding craftsmanship-section">
        <div className="container">
          <div className="craft-grid">
            <div className="craft-text">
              <span className="section-subtitle">Materiality & Atmosphere</span>
              <h2 className="section-title">Architectural Splendor in Victoria Island</h2>
              <p className="craft-lead">
                Designed in collaboration with Milanese and Lagosian interior architects, 
                The Lumière balances moody obsidian depth with luminous gold warmth.
              </p>

              <ul className="craft-features-list">
                <li>
                  <CheckCircle size={18} className="gold-text-icon" />
                  <div>
                    <strong>Black Marquina Italian Marble:</strong> Hand-polished stone surfaces 
                    framing the open show kitchen and central cocktail bar.
                  </div>
                </li>
                <li>
                  <CheckCircle size={18} className="gold-text-icon" />
                  <div>
                    <strong>Velvet & Brass Banquettes:</strong> Deep midnight green and charcoal velvet 
                    crafted for supreme acoustic comfort and posture.
                  </div>
                </li>
                <li>
                  <CheckCircle size={18} className="gold-text-icon" />
                  <div>
                    <strong>Lagoon Waterfront Framing:</strong> Floor-to-ceiling soundproof glass 
                    capturing the shimmering evening waters of Lagos.
                  </div>
                </li>
              </ul>

              <div className="craft-actions">
                <Link to="/gallery" className="btn btn-gold">
                  Explore Photo Gallery <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="craft-visual">
              <img
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=85"
                alt="Architectural dining terrace"
                className="craft-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="about-cta-section">
        <div className="container text-center">
          <span className="gold-badge mb-3">
            <Sparkles size={14} /> Join Us for an Unrivaled Evening
          </span>
          <h2 className="about-cta-title">Experience Haute Cuisine Reimagined</h2>
          <div className="cta-buttons-row">
            <Link to="/reservations" className="btn btn-gold btn-large">
              Reserve Your Table
            </Link>
            <Link to="/menu" className="btn btn-outline btn-large">
              Inspect The Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

