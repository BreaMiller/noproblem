'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { InfiniteGrid } from '@/components/ui/the-infinite-grid';
import { LoadingScreen } from '@/components/ui/loading-screen';

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply theme to document on mount and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode'); document.body.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode'); document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode'); document.body.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode'); document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const services = [
    {
      icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75',
      title: 'Complete Home Transformations',
      description: 'Full-scale residential renovations that reimagine your entire living space with meticulous attention to every detail.',
    },
    {
      icon: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM4 9h16M15 6h.01M15 12h.01',
      title: 'Kitchen Remodeling',
      description: 'Sophisticated kitchen designs that blend functionality with elegance, featuring premium finishes and custom cabinetry.',
    },
    {
      icon: 'M7 4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2v-1h6v1c0 1.1.9 2 2 2s2-.9 2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v1H9V6c0-1.1-.9-2-2-2z',
      title: 'Bathroom Renovations',
      description: 'Luxurious bathroom retreats with spa-quality fixtures, custom tilework, and impeccable craftsmanship.',
    },
    {
      icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
      title: 'Commercial Remodeling',
      description: 'Professional commercial spaces designed to enhance your business presence while maximizing functionality.',
    },
    {
      icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
      title: 'Outdoor Transformations',
      description: 'Beautiful outdoor living spaces including patios, decks, and landscaping that extend your home\'s elegance outside.',
    },
    {
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
      title: 'Handyman Services',
      description: 'Reliable repairs, installations, and maintenance services for all your residential and commercial needs.',
    },
  ];

  const showcaseCards = [
    {
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      title: 'Kitchen Remodeling',
      description: 'Custom designs, premium finishes, and expert installation.',
      badge: 'MOST POPULAR',
      badgeClass: 'bg-orange-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      title: 'Bathroom Renovations',
      description: 'Luxury fixtures, spa-quality results, rapid completion.',
      badge: 'QUICK TURNAROUND',
      badgeClass: 'bg-green-500',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1689609950071-af404daa58a0?q=80&w=687&auto=format&fit=crop',
      title: 'Complete Home Remodeling',
      description: 'Full-scale transformations with a focus on older homes.',
      badge: 'PREMIUM SERVICE',
      badgeClass: 'bg-blue-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      title: 'Commercial Remodeling',
      description: 'Professional spaces with minimal downtime.',
      badge: 'BUSINESS FOCUSED',
      badgeClass: 'bg-purple-500',
    },
    {
      image: 'https://images.unsplash.com/photo-1604062527894-55b0712bbee3?q=80&w=1171&auto=format',
      title: 'Customizations',
      description: 'Seamless structural built-in units',
      badge: 'FEATURED',
      badgeClass: 'bg-cyan-400',
    },
    {
      image: 'https://images.unsplash.com/photo-1596086221164-c8a4cac55e27?q=80&w=1074&auto=format',
      title: 'Outdoor Transformations',
      description: 'Patios, decks, landscaping, and outdoor living spaces.',
      badge: 'NEW',
      badgeClass: 'bg-yellow-500',
    },
  ];

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      
      <InfiniteGrid speed={0.5} gap={40} />
      
      {/* Navigation - hidden during loading */}
      <nav className={`navbar ${showLoading ? 'hidden' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#home" className="logo">
              <img src="/logo black.png" alt="NP Services LLC" className="logo-img" />
              <span className="logo-text-brand">Services LLC</span>
            </a>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li>
                <button
                  className="theme-toggle"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <svg className="sun-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                  <svg className="moon-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 0 1 11.21 3 9 9 0 1 0 21 12.79z"></path>
                  </svg>
                </button>
              </li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li>
                <a href="tel:678-791-6902" className="btn-nav">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="phone-info">
                    <span className="phone-number">678-791-6902</span>
                    <span className="phone-hours">8AM-8PM CST</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content">
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-content">
                <div className="hero-badge">
                  <span className="badge-icon">✦</span>
                  NO PROBLEM WE CAN'T SOLVE
                </div>
                <h1 className="hero-title">
                  Premium<br/>
                  Renovation<br/>
                  <span className="title-highlight">Solutions.</span>
                </h1>
                <p className="hero-description">
                  We deliver premium residential and commercial remodeling and handyman services.
                </p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4h12v10H6z"></path>
                      <path d="M9 14v6h6v-6"></path>
                      <path d="M6 4L4 2M18 4l2-2"></path>
                    </svg>
                    Start Your Project
                  </a>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    alert('Portfolio gallery coming soon! In the meantime, please contact us to see examples of our work.');
                  }} className="btn btn-portfolio">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    View Portfolio
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">YEARS EXPERIENCE</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">PROJECTS COMPLETED</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">SATISFACTION RATE</div>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <img src="https://i.imgur.com/o0crFwq.png?w=1200&q=80" alt="NP Services construction site" />
                <div className="hero-image-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none">
                    <path d="M12 1C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                  <div className="badge-content">
                    <div className="badge-title">Competitive Pricing</div>
                    <div className="badge-subtitle">Ask about our subscriptions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="section-header">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">Comprehensive remodeling solutions for residential and commercial properties</p>
          </div>
          <div className="services-carousel-wrapper">
            <div className="services-carousel">
              {[...services, ...services].map((service, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose">
          <div className="container">
            <div className="why-choose-wrapper">
              <div className="why-choose-image">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80" alt="NP Services kitchen remodel" />
                <div className="why-image-badge">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none">
                    <path d="M12 2C6.5 2 2 6.48 2 12s4.5 10 10 10 10-4.48 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  Kitchen remodeled in 21 days
                </div>
              </div>
              <div className="why-choose-content">
                <h2 className="why-choose-title">
                  A handyman you can trust.
                </h2>
                <p className="why-choose-description">
                  From minor repairs to complete installations, we handle it all. Whether it's fixing a leaky faucet, assembling furniture, or tackling more difficult flooring installations, NP Services delivers reliable craftsmanship you can count on.
                </p>
                <div className="why-choose-buttons">
                  <a href="#contact" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    Get a Proposal
                  </a>
                </div>
                <div className="why-choose-stats">
                  <div className="why-stat-item">
                    <div className="why-stat-number">0</div>
                    <div className="why-stat-label">Hidden Fees</div>
                  </div>
                  <div className="why-stat-item">
                    <div className="why-stat-number">$1M</div>
                    <div className="why-stat-label">License Insurance</div>
                  </div>
                  <div className="why-stat-item">
                    <div className="why-stat-number">4.8★</div>
                    <div className="why-stat-label">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="services-showcase">
          <div className="container">
            <div className="showcase-header">
              <div className="showcase-header-content">
                <h2 className="showcase-title">Trusted. Proven. Exceptional.</h2>
                <p className="showcase-subtitle">Explore our comprehensive range of premium construction and remodeling services.</p>
              </div>
            </div>
            <div className="showcase-grid">
              {showcaseCards.map((card, idx) => (
                <div key={idx} className="showcase-card">
                  <img src={card.image} alt={card.title} />
                  <div className="card-overlay"></div>
                  <div className={`card-badge ${card.badgeClass}`}>{card.badge}</div>
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2>Bring Your Vision to Life</h2>
                <p>Contact us today to schedule your free consultation.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div>
                      <h4>Phone</h4>
                      <p><a href="tel:678-791-6902" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>678-791-6902</a></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div>
                      <h4>Email</h4>
                      <p><a href="mailto:noproblem@npservices.info" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>noproblem@npservices.info</a></p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <h4>Service Area</h4>
                      <p>Alabama & Surrounding Regions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = String(formData.get('name') || '');
                  const email = String(formData.get('email') || '');
                  const phone = String(formData.get('phone') || '');
                  const serviceType = String(formData.get('serviceType') || '');
                  const message = String(formData.get('message') || '');
                  
                  // Send to Google Apps Script
                  const scriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL"; // Replace with your script URL
                  
                  fetch(scriptUrl, {
                    method: 'POST',
                    body: new URLSearchParams({
                      formType: 'contact',
                      name: name,
                      email: email,
                      phone: phone,
                      serviceType: serviceType,
                      message: message
                    })
                  })
                  .then(r => r.json())
                  .then(data => {
                    alert(data.message);
                    if (data.status === 'success') {
                      e.currentTarget.reset();
                    }
                  })
                  .catch(err => {
                    alert('Error: ' + err.message);
                  });
                }}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <select name="serviceType" required>
                      <option value="">Select Service Type</option>
                      <option value="Complete Home Transformation">Complete Home Transformation</option>
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Renovation">Bathroom Renovation</option>
                      <option value="Commercial Remodeling">Commercial Remodeling</option>
                      <option value="Outdoor Transformations">Outdoor Transformations</option>
                      <option value="Handyman Services">Handyman Services</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Tell us about your project" rows={4} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo-wrapper">
                <img src="/logo black.png" alt="NP Services LLC Logo" className="footer-logo-img" />
                <span className="footer-brand-name">Services LLC</span>
              </div>
              <p>NO PROBLEM WE CAN'T SOLVE.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <p><a href="mailto:noproblem@npservices.info">noproblem@npservices.info</a></p>
              <p><a href="tel:678-791-6902">678-791-6902</a></p>
            </div>
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <form onSubmit={(e) => {
                e.preventDefault();
                const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement | null;
                const email = emailInput?.value || '';
                
                if (!email) {
                  alert('Please enter an email address');
                  return;
                }
                
                // Send to Google Apps Script
                const scriptUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL"; // Replace with your script URL
                
                fetch(scriptUrl, {
                  method: 'POST',
                  body: new URLSearchParams({
                    formType: 'newsletter',
                    email: email
                  })
                })
                .then(r => r.json())
                .then(data => {
                  alert(data.message);
                  if (data.status === 'success') {
                    e.currentTarget.reset();
                  }
                })
                .catch(err => {
                  alert('Error: ' + err.message);
                });
              }}>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 NP Services LLC. All rights reserved.</p>
            <p style={{ marginTop: '10px' }}>Made with ❤️ by <a href="https://breamiller.github.io" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>Brea Miller</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
