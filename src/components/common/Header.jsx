import { useState, useEffect } from 'react';

const Header = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
    document.body.style.overflow = !isMobileOpen ? 'hidden' : '';
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  };

  const handleLinkClick = (e, targetPath) => {
    e.preventDefault();
    closeMobile();
    if (onNavigate) {
      onNavigate(targetPath);
    }
  };

  const isServicesActive = currentPath.startsWith('/services');

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container header-inner">
        {/* Left: Brand Logo (Navigates to Home /) */}
        <div className="header-left">
          <a
            href="/"
            className="brand-logo"
            id="logo"
            onClick={(e) => handleLinkClick(e, '/')}
          >
            Cars Classic Autotrader
          </a>
        </div>

        {/* Center Navigation Links */}
        <nav className="header-center" id="main-nav">
          {isMobileOpen ? (
            <div className="mobile-nav-overlay">
              <a
                href="/cars"
                className={`mobile-nav-link ${currentPath === '/cars' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/cars')}
              >
                Cars
              </a>
              <a
                href="/about"
                className={`mobile-nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/about')}
              >
                About Us
              </a>
              <a
                href="/services"
                className={`mobile-nav-link ${isServicesActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/services')}
              >
                Services
              </a>
              <a
                href="/contacts"
                className={`mobile-nav-link ${currentPath === '/contacts' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/contacts')}
              >
                Contacts
              </a>
            </div>
          ) : (
            <div className="nav-links nav-links-desktop">
              <a
                href="/cars"
                className={`nav-link ${currentPath === '/cars' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/cars')}
              >
                Cars
              </a>
              <a
                href="/about"
                className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/about')}
              >
                About Us
              </a>
              <a
                href="/services"
                className={`nav-link ${isServicesActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/services')}
              >
                Services
              </a>
              <a
                href="/contacts"
                className={`nav-link ${currentPath === '/contacts' ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, '/contacts')}
              >
                Contacts
              </a>
            </div>
          )}
        </nav>

        {/* Right Phone Number */}
        <div className="header-right">
          <a href="tel:+12403751288" className="header-phone-link" id="header-phone">
            +1 (240) 375-1288
          </a>
          <button
            className={`hamburger-btn ${isMobileOpen ? 'active' : ''}`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
