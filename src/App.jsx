import { useState } from 'react';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Coming Soon</h2>
        <p>We're currently in beta and will be releasing soon. Stay tuned for updates!</p>
        <button className="btn btn-primary" onClick={onClose}>Got it</button>
      </div>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
      {/* Navigation */}
      <header className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img 
              src="https://framerusercontent.com/images/q3hqwrydzmMhwOvIJzLPserLv5I.svg" 
              alt="Chasi AI" 
            />
            <span>Chasi</span>
          </a>
          <nav className="nav-menu">
            <a href="#product">Product</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
          </nav>
          <div className="nav-actions">
            <button className="nav-link" onClick={() => setShowModal(true)}>Log in</button>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Request Demo<ArrowRight size={16} /></button>
          </div>
          <button 
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#product">Product</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowModal(true); }}>Log in</a>
            <button className="btn btn-primary btn-full" onClick={() => setShowModal(true)}>Request Demo<ArrowRight size={16} /></button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-pattern" />
        </div>
        <div className="hero-content">
          {/* YC Badge */}
          <div className="badge">
            <span className="badge-icon">YC</span>
            <span>Backed by Y Combinator</span>
          </div>

          {/* Headline */}
          <h1>
            <span className="hero-title-line">AI for</span>
            <span className="hero-title-accent">Industrial Commerce</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Automate procurement, sales, and supply chain operations for industrial distributors and manufacturers.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => setShowModal(true)}>Request Demo<ArrowRight size={20} /></button>
            <button className="btn btn-outline btn-lg" onClick={() => setShowModal(true)}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-value">$50B+</div>
            <div className="stat-label">Industrial transactions processed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">85%</div>
            <div className="stat-label">Reduction in manual processing</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10x</div>
            <div className="stat-label">Faster quote turnaround</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Enterprise customers</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="product" className="features">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Product</span>
            <h2>Intelligent automation for industrial commerce</h2>
            <p>
              Our AI platform handles the complexity of industrial transactions so your team can focus on what matters.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>Email Processing</h3>
              <p>Automatically extract and process RFQs, POs, and other documents from emails with 99% accuracy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Dynamic Pricing</h3>
              <p>AI-powered pricing recommendations based on market conditions, customer history, and inventory levels.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Quote Generation</h3>
              <p>Generate accurate quotes in seconds, not hours. Integrate with your ERP for real-time inventory and pricing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Order Management</h3>
              <p>Streamline order processing from quote to delivery with intelligent automation and exception handling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Analytics & Insights</h3>
              <p>Real-time visibility into sales performance, pricing trends, and customer behavior.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>ERP Integration</h3>
              <p>Seamless integration with SAP, Oracle, Microsoft Dynamics, and other major ERP systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-label">Solutions</span>
            <h2>Built for industrial complexity</h2>
            <p>
              Whether you're a distributor, manufacturer, or supplier, Chasi AI adapts to your unique workflows.
            </p>
          </div>
          <div className="solutions-grid">
            <div className="solution-card">
              <h3>For Distributors</h3>
              <p>Automate quote-to-cash processes, manage complex pricing, and deliver faster customer response times.</p>
              <a href="#" className="solution-link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
            <div className="solution-card">
              <h3>For Manufacturers</h3>
              <p>Streamline sales operations, configure-price-quote workflows, and dealer/distributor management.</p>
              <a href="#" className="solution-link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
            <div className="solution-card">
              <h3>For Suppliers</h3>
              <p>Automate customer communications, bid management, and contract compliance monitoring.</p>
              <a href="#" className="solution-link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-inner">
          <blockquote>
            "Chasi AI has transformed how we handle customer inquiries. What used to take our team hours now happens in minutes, with better accuracy."
          </blockquote>
          <div className="testimonial-author">
            <strong>VP of Sales Operations</strong>
            <span>Fortune 500 Industrial Distributor</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-inner">
          <h2>Ready to transform your operations?</h2>
          <p>Join leading industrial companies using Chasi AI to automate commerce.</p>
          <div className="cta-buttons">
            <button className="btn btn-white btn-lg" onClick={() => setShowModal(true)}>Request Demo<ArrowRight size={20} /></button>
            <button className="btn btn-outline-white btn-lg" onClick={() => setShowModal(true)}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <img 
                  src="https://framerusercontent.com/images/q3hqwrydzmMhwOvIJzLPserLv5I.svg" 
                  alt="Chasi AI" 
                />
                <span>Chasi</span>
              </a>
              <p>AI for Industrial Commerce</p>
              <div className="yc-badge-small">
                <span className="yc-icon">YC</span>
                <span>Backed by Y Combinator</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">Distributors</a></li>
                <li><a href="#">Manufacturers</a></li>
                <li><a href="#">Suppliers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Chasi AI. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
