import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSearch, FaTimes, FaPhone, FaChevronRight, FaArrowRight, FaCrown } from 'react-icons/fa';
import './Navbar.css';

const LOGO_GIF = 'https://legalterminus.com/wp-content/uploads/2023/09/Legal-Terminus-LOGO-GIF_300-x-150.gif';

const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'Setting Up a Business', href: '#' },
  { label: 'Registrations & Returns', href: '#' },
  { label: 'Event Based Compliances', href: '#' },
  { label: 'Trademark', href: '#' },
  { label: 'Know Us', href: '#' },
];

export default function NavbarAdvanced() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // prevent background scrolling when drawer open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // cleanup on unmount
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  // Close drawer on outside click / escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }
    function onClick(e) {
      if (isMenuOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* TOP BAR - Light Green with White Text */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <div className="topbar-contact">
              <a href="mailto:info@industrify.com" className="topbar-link">
                <FaEnvelope className="topbar-icon" />
                info@industrify.com
              </a>
              <span className="topbar-sep">|</span>
              <a href="tel:+11234567890" className="topbar-link">
                <FaPhone className="topbar-icon" style={{ transform: "rotate(90deg)" }} />
                +1 123 456 7890
              </a>
            </div>
          </div>

          <div className="topbar-right">
            <div className="topbar-tag">Turning big ideas into great products!</div>
            <div className="topbar-socials">
              <a className="social" href="#facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="social" href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="social" href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a className="social" href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="main-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <div className="nav-left">
            <a className="brand" href="/">
              <img
                src={LOGO_GIF}
                alt="Industrify Logo"
                className={`brand-logo ${scrolled ? 'small' : ''}`}
                width={scrolled ? 160 : 200}
                height={scrolled ? 45 : 55}
              />
            </a>
          </div>

          {/* Center nav - desktop */}
          <div className="nav-center" aria-hidden={false}>
            <ul className="nav-list" role="menubar">
              {navItems.map((it) => (
                <li key={it.href} className="nav-list-item" role="none">
                  <a role="menuitem" href={it.href} className="nav-link">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-right">
            <button
              className="icon-btn search-btn"
              aria-label="Search"
              onClick={() => alert('Implement search overlay')}
              title="Search"
            >
              <FaSearch />
            </button>

            {/* Three-bar menu button */}
            <button
              className={`menu-trigger ${isMenuOpen ? 'open' : ''}`}
              aria-expanded={isMenuOpen}
              aria-controls="premium-drawer"
              onClick={() => setIsMenuOpen((s) => !s)}
            >
              <span className="menu-bar" />
              <span className="menu-bar" />
              <span className="menu-bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* PREMIUM WHITE DRAWER & OVERLAY */}
      {/* Overlay - Premium gradient with blur */}
      <div
        className={`premium-drawer-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* Premium White Drawer */}
      <div
        id="premium-drawer"
        ref={drawerRef}
        className={`premium-drawer ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="premium-feature-badge">
          <FaCrown style={{ marginRight: '6px' }} />
          Premium
        </div>

        <div className="premium-drawer-header">
          <div className="premium-drawer-brand">
            <img
              src={LOGO_GIF}
              alt="Industrify Logo"
              className="premium-drawer-logo"
              width={180}
              height={50}
            />
            <span className="premium-drawer-tagline">Excellence in Every Pixel</span>
          </div>
          <button
            className="premium-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="premium-drawer-content">
          <ul className="premium-nav-list">
            {navItems.map(it => (
              <li key={it.href} className="premium-nav-item">
                <a
                  href={it.href}
                  className="premium-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="premium-link-text">{it.label}</span>
                  <FaChevronRight className="premium-link-arrow" />
                </a>
              </li>
            ))}
          </ul>

          <div className="premium-contact-section">
            <h3 className="premium-contact-title">Get In Touch</h3>
            <div className="premium-contact-list">
              <div className="premium-contact-item">
                <FaEnvelope className="premium-contact-icon" />
                <span className="premium-contact-text">info@industrify.com</span>
              </div>
              <div className="premium-contact-item">
                <FaPhone className="premium-contact-icon" />
                <span className="premium-contact-text">+1 123 456 7890</span>
              </div>
              <div className="premium-contact-item">
                <FaMapMarkerAlt className="premium-contact-icon" />
                <span className="premium-contact-text">3567 Melbourn, EA 265, Australia</span>
              </div>
            </div>
          </div>

          <div className="premium-cta-container">
            <a 
              href="#contact" 
              className="premium-cta-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Your Project
              <FaArrowRight />
            </a>
          </div>

          <div className="premium-social-section">
            <span className="premium-social-title">Connect With Us</span>
            <div className="premium-social-grid">
              <a className="premium-social-link" href="#facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="premium-social-link" href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="premium-social-link" href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a className="premium-social-link" href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
