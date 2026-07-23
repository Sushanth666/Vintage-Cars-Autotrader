import { useState } from 'react';
import ContactModal from '../modals/ContactModal';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Top Header Row */}
        <div className="contact-header-row reveal">
          {/* Left Title */}
          <div className="contact-title-box">
            <h2 className="contact-heading">
              Where<br />
              to find us
            </h2>
          </div>

          {/* Right Contact Info & Action Button */}
          <div className="contact-right-box reveal reveal-delay-1">
            <a href="tel:+17015811331" className="contact-phone-link">
              +1 (701) 581-1331
            </a>
            <p className="contact-address-text">
              161 Trumpeter Ave, Soldotna, Alaska
            </p>
            <button
              className="submit-app-btn"
              id="submit-app-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Submit your application
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="map-wrapper reveal reveal-delay-2" id="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280006547!2d-87.78449354002661!3d41.83390374826507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Where to find us - Map"
            className="map-iframe"
          ></iframe>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ContactSection;
