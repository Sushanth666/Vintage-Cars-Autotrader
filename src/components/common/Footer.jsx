const Footer = ({ onNavigate }) => {
  const handleLink = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Left Column: Brand & Privacy Policies link */}
          <div className="footer-left-col">
            <h3 className="footer-brand-title">Cars Classic Autotrader</h3>
            <a href="#" className="footer-privacy-link" id="privacy-policy-link">
              Privacy Policies
            </a>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <a
                href="/cars"
                className="footer-nav-item"
                onClick={(e) => handleLink(e, '/cars')}
              >
                Cars
              </a>
              <a
                href="/about"
                className="footer-nav-item"
                onClick={(e) => handleLink(e, '/about')}
              >
                About Us
              </a>
              <a
                href="/about"
                className="footer-nav-item"
                onClick={(e) => handleLink(e, '/about')}
              >
                About Us
              </a>
            </div>
            <div className="footer-nav-col">
              <a
                href="/services"
                className="footer-nav-item"
                onClick={(e) => handleLink(e, '/services')}
              >
                How to rent
              </a>
              <a
                href="/contacts"
                className="footer-nav-item"
                onClick={(e) => handleLink(e, '/contacts')}
              >
                Contacts
              </a>
            </div>
          </div>

          {/* Right Column: Phone & Address */}
          <div className="footer-right-col">
            <a href="tel:+17015811331" className="footer-phone-number">
              +1 (701) 581-1331
            </a>
            <p className="footer-address">
              161 Trumpeter Ave, Soldotna, Alaska
            </p>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="footer-copyright-row">
          <span>© Cars Classic Autotrader 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
