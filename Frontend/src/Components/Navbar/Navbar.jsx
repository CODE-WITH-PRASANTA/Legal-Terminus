import React, { useState, useEffect, useRef } from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSearch,
  FaTimes,
  FaPhone,
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa';
import './Navbar.css';

const LOGO_GIF = 'https://legalterminus.com/wp-content/uploads/2023/09/Legal-Terminus-LOGO-GIF_300-x-150.gif';

/**
 * Full navigation data. Added "Event Based Compliances" sections as requested.
 * Update hrefs to match your routing.
 */
const navData = [
  { id: 'home', label: 'Home', href: '/home' },

  {
    id: 'setup-business',
    label: 'Setting Up a Business',
    children: [
      {
        id: 'profit',
        label: 'Profit Making Structure',
        items: [
          { label: 'Private Limited Company Registration In India', href: '/private-limited' },
          { label: 'Incorporation Of Wholly Owned Subsidiary In India', href: '/wholly-owned' },
          { label: 'Public Limited Company Registration In India', href: '/public-limited' },
          { label: 'One Person Company Registration In India', href: '/one-person-company' },
          { label: 'Limited Liability Partnership Registration In India', href: '/llp' },
          { label: 'Partnership Firm Registration In India', href: '/partnership' },
          { label: 'Proprietorship Firm Registration In India', href: '/proprietorship' }
        ]
      },
      {
        id: 'nonprofit',
        label: 'Non-Profit Making Structures',
        items: [
          { label: 'Non-Profit Company/ Sec-8 Company Registration In India', href: '/section-8' },
          { label: 'Trust Registration In India', href: '/trust' },
          { label: 'Society Registration In India', href: '/society' }
        ]
      }
    ]
  },

  {
    id: 'registrations',
    label: 'Registrations & Returns',
    children: [
      {
        id: 'registrations-main',
        label: 'Registrations',
        items: [
          { label: 'GST Registration In India', href: '/gst-registration' },
          { label: 'Udyam Registration In India', href: '/udyam' },
          { label: 'EPF Registration In India', href: '/epf' },
          { label: 'ESIC Registration In India', href: '/esic' },
          { label: 'Professional Tax Registration', href: '/professional-tax' },
          { label: 'Shop & Commercial Establishments Registration In India', href: '/shop-establishment' },
          { label: 'Odisha Labour Welfare Fund (OLWF) Registration', href: '/olwf' },
          { label: 'Startup India Registration', href: '/startup-india' },
          { label: 'Startup Odisha Registration', href: '/startup-odisha' }
        ]
      },
      {
        id: 'licenses',
        label: 'License & Certifications',
        items: [
          { label: 'Importer Exporter Code Registration', href: '/iec' },
          { label: 'Food License And Registration', href: '/food-license' },
          { label: 'Trade License Registration', href: '/trade-license' },
          { label: 'Labour License Registration', href: '/labour-license' },
          { label: 'Bar Code Registration', href: '/bar-code' },
          { label: 'ISO Certification In India', href: '/iso' }
        ]
      },
      {
        id: 'return-filing',
        label: 'Return Filing',
        items: [
          { label: 'GST Return Filing', href: '/gst-return-filing' },
          { label: 'ITR Filing (Business)', href: '/itr-business' },
          { label: 'ITR Filing (Individual)', href: '/itr-individual' },
          { label: 'Annual Filing (Company)', href: '/annual-filing-company' },
          { label: 'Annual Filing (LLP)', href: '/annual-filing-llp' },
          { label: 'EPF Return Filing', href: '/epf-return' },
          { label: 'ESI Return Filing', href: '/esi-return' },
          { label: 'Professional Tax Return Filing', href: '/professional-tax-return' }
        ]
      }
    ]
  },

  // NEW: Event Based Compliances (left tabs + right panel items)
  {
    id: 'event-compliances',
    label: 'Event Based Compliances',
    children: [
      {
        id: 'conversion',
        label: 'Conversion In Form Of Business',
        items: [
          { label: 'Proprietorship Firm To OPC Private Limited Company', href: '/conversion/proprietorship-to-opc' },
          { label: 'Proprietorship Firm To Private Limited Company', href: '/conversion/proprietorship-to-private' },
          { label: 'Partnership Firm To Limited Liability Partnership', href: '/conversion/partnership-to-llp' },
          { label: 'Partnership Firm To Private Limited Company', href: '/conversion/partnership-to-private' },
          { label: 'LLP To Private Limited Company', href: '/conversion/llp-to-private' },
          { label: 'Private Limited Company To Limited Liability Partnership', href: '/conversion/private-to-llp' },
          { label: 'Private Limited Company To Public Limited Company', href: '/conversion/private-to-public' },
          { label: 'Public Limited Company To Private Limited Company', href: '/conversion/public-to-private' }
        ]
      },
      {
        id: 'updation',
        label: 'Updation Services',
        items: [
          { label: 'Change In Name (LLP)', href: '/updation/change-name-llp' },
          { label: 'Change In Registered Office Address (Company)', href: '/updation/change-address-company' },
          { label: 'Change In Object (Company)', href: '/updation/change-object-company' },
          { label: 'Increase In Authorised Capital (Company)', href: '/updation/increase-authorised-capital' },
          { label: 'Add Or Remove A Director (Company)', href: '/updation/add-remove-director' },
          { label: 'Change In Name (Company)', href: '/updation/change-name-company' },
          { label: 'Change In Registered Office Address (LLP)', href: '/updation/change-address-llp' },
          { label: 'Change In Object (LLP)', href: '/updation/change-object-llp' }
        ]
      },
      {
        id: 'windup',
        label: 'Windup Services',
        items: [
          { label: 'Dissolve A Private Limited Company', href: '/windup/dissolve-private' },
          { label: 'Dissolve A Limited Liability Partnership', href: '/windup/dissolve-llp' },
          { label: 'Dissolve A Partnership Firm', href: '/windup/dissolve-partnership' }
        ]
      }
    ]
  },

  { id: 'trademark', label: 'Trademark', href: '#' },
  { id: 'know-us', label: 'Know Us', href: '#' }
];

export default function NavbarAdvanced() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile drawer open
  const [scrolled, setScrolled] = useState(false);
  const [megaOpenFor, setMegaOpenFor] = useState(null); // which top-level menu shows mega
  const [activeMegaTab, setActiveMegaTab] = useState(null); // which left tab is active (controls right panel)
  const [mobileExpanded, setMobileExpanded] = useState({}); // expanded sections in drawer
  const drawerRef = useRef(null);
  const megaTimeoutRef = useRef(null);

  // small scroll effect for header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // prevent background scroll when mobile drawer open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
      setTimeout(() => drawerRef.current?.focus(), 0);
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  // escape and outside-click handlers
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setMegaOpenFor(null);
        setActiveMegaTab(null);
      }
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

  // open the compact mega (left list only)
  const openMegaCompact = (id) => {
    clearTimeout(megaTimeoutRef.current);
    setMegaOpenFor(id);
    setActiveMegaTab(null); // compact state (no right panel)
  };

  // delayed close to allow pointer travel between elements
  const closeMegaDelayed = () => {
    clearTimeout(megaTimeoutRef.current);
    megaTimeoutRef.current = setTimeout(() => {
      setMegaOpenFor(null);
      setActiveMegaTab(null);
    }, 160);
  };

  // when hovering/focusing a left tab, reveal right panel
  const showRightPanel = (tabId) => {
    setActiveMegaTab(tabId);
  };

  const toggleMobileSection = (id) => {
    setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <header className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <div className="topbar-contact">
              <a href="mailto:sales21@legalterminus.com" className="topbar-link">
                <FaEnvelope className="topbar-icon" />
                sales21@legalterminus.com
              </a>
              <span className="topbar-sep">|</span>
              <a href="tel:8280093456" className="topbar-link">
                <FaPhone className="topbar-icon" style={{ transform: 'rotate(90deg)' }} />
                8280093456
              </a>
            </div>
          </div>

          <div className="topbar-right">
            <div className="topbar-tag">Turning big ideas into great products!</div>
            <div className="topbar-socials">
              <a className="social" href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a className="social" href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a className="social" href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a className="social" href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
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

          <div className="nav-center" aria-hidden={false}>
            <ul className="nav-list" role="menubar">
              {navData.map((it) => {
                const hasMega = Array.isArray(it.children) && it.children.length > 0;
                return (
                  <li
                    key={it.id}
                    className="nav-list-item"
                    role="none"
                    onMouseEnter={() => hasMega && openMegaCompact(it.id)}
                    onMouseLeave={() => hasMega && closeMegaDelayed()}
                  >
                    {hasMega ? (
                      <button
                        className="nav-link nav-link-button"
                        aria-haspopup="true"
                        aria-expanded={megaOpenFor === it.id}
                        onFocus={() => openMegaCompact(it.id)}
                        onBlur={() => closeMegaDelayed()}
                      >
                        {it.label}
                      </button>
                    ) : (
                      <a role="menuitem" href={it.href} className="nav-link">{it.label}</a>
                    )}

                    {/* Compact -> Expanded mega panel */}
                    {hasMega && (
                      <div
                        className={`mega-menu ${megaOpenFor === it.id ? (activeMegaTab ? 'expanded' : 'compact') : ''}`}
                        onMouseEnter={() => openMegaCompact(it.id)}
                        onMouseLeave={() => closeMegaDelayed()}
                        aria-hidden={megaOpenFor !== it.id}
                      >
                        <div className="mega-inner-compact">
                          <div className="mega-left-compact" role="tablist" aria-label={`${it.label} categories`}>
                            {it.children.map((cat) => (
                              <button
                                key={cat.id}
                                className={`mega-tab-compact ${activeMegaTab === cat.id ? 'active' : ''}`}
                                onMouseEnter={() => showRightPanel(cat.id)}
                                onFocus={() => showRightPanel(cat.id)}
                                onClick={() => showRightPanel(cat.id)}
                                aria-selected={activeMegaTab === cat.id}
                              >
                                <span>{cat.label}</span>
                                <FaChevronRight className="mini-right" />
                              </button>
                            ))}
                          </div>

                          <div className={`mega-right-panel ${activeMegaTab ? 'visible' : ''}`} role="region" aria-live="polite">
                            {it.children.map((cat) => (
                              <div key={cat.id} className={`mega-col ${activeMegaTab === cat.id ? 'visible' : ''}`}>
                                <ul className="mega-links">
                                  {cat.items.map((item, idx) => (
                                    <li key={idx}>
                                      <a className="mega-link" href={item.href} onClick={() => setMegaOpenFor(null)}>
                                        <span>{item.label}</span>
                                        <FaChevronRight className="mega-link-arrow" />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav-right">
            <button className="icon-btn search-btn" aria-label="Search" onClick={() => alert('Implement search overlay')} title="Search">
              <FaSearch />
            </button>

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

      {/* OVERLAY for drawer */}
      <div
        className={`premium-drawer-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* MOBILE DRAWER */}
      <aside
        id="premium-drawer"
        ref={drawerRef}
        className={`premium-drawer ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
        tabIndex={-1}
      >
        <div className="premium-drawer-header">
          <div className="premium-drawer-brand">
            <img src={LOGO_GIF} alt="Industrify Logo" className="premium-drawer-logo" width={180} height={50} />
            <span className="premium-drawer-tagline">Excellence in Every Pixel</span>
          </div>

          <button className="premium-close-btn" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <div className="premium-drawer-content">
          {/* About */}
          <div className="drawer-about">
            <h3 className="drawer-about-title">About Us</h3>
            <p className="drawer-about-text">
              We must explain to you how all seds this mistakens idea off denouncing pleasures and praising pain was born and I will give you a completed accounts of the system and expound.
            </p>

            <div className="drawer-cta-wrap">
              <a href="#contact" className="drawer-cta" onClick={() => setIsMenuOpen(false)}>
                Get In Touch <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Drawer nav (mirror top nav) */}
          <nav aria-label="Drawer Navigation">
            <ul className="premium-nav-list">
              {navData.map((item) => {
                const hasChildren = !!item.children;
                return (
                  <li key={item.id} className="premium-nav-item">
                    {!hasChildren ? (
                      <a className="premium-nav-link" href={item.href} onClick={() => setIsMenuOpen(false)}>
                        <span className="premium-link-text">{item.label}</span>
                        <FaChevronRight className="premium-link-arrow" />
                      </a>
                    ) : (
                      <>
                        <button
                          className="premium-nav-link"
                          onClick={() => toggleMobileSection(item.id)}
                          aria-expanded={!!mobileExpanded[item.id]}
                        >
                          <span className="premium-link-text">{item.label}</span>
                          <FaChevronRight className="premium-link-arrow" />
                        </button>

                        <div className={`premium-sublist ${mobileExpanded[item.id] ? 'expanded' : ''}`}>
                          {item.children.map((cat) => (
                            <div key={cat.id} className="premium-subsection">
                              <div className="premium-subsection-head">
                                <strong>{cat.label}</strong>
                              </div>
                              <ul className="premium-sublinks">
                                {cat.items.map((sub, i) => (
                                  <li key={i}>
                                    <a href={sub.href} onClick={() => setIsMenuOpen(false)} className="premium-nav-link simple">
                                      <span className="premium-link-text">{sub.label}</span>
                                      <FaChevronRight className="premium-link-arrow" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact & Socials */}
          <div className="drawer-contact">
            <h4 className="drawer-contact-title">Contact Info</h4>

            <div className="drawer-contact-item">
              <FaMapMarkerAlt className="drawer-contact-icon" />
              <div className="drawer-contact-text">
                Australia - 175 24th Street, Office 3567 Melbourn, EA 265
              </div>
            </div>

            <div className="drawer-contact-item">
              <FaPhone className="drawer-contact-icon" style={{ transform: 'rotate(90deg)' }} />
              <div className="drawer-contact-text">8280093456</div>
            </div>

            <div className="drawer-contact-item">
              <FaEnvelope className="drawer-contact-icon" />
              <div className="drawer-contact-text">sales21@legalterminus.com</div>
            </div>
          </div>

          <div className="premium-social-section">
            <div className="premium-social-grid">
              <a className="premium-social-link" href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
              <a className="premium-social-link" href="#instagram" aria-label="Instagram"><FaInstagram /></a>
              <a className="premium-social-link" href="#twitter" aria-label="Twitter"><FaTwitter /></a>
              <a className="premium-social-link" href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
