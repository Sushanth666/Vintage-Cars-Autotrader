import { useEffect, useState } from 'react';
import ContactModal from '../components/modals/ContactModal';

const ContactPage = ({ isModalInitiallyOpen = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(isModalInitiallyOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page" id="contact-page">
      <section className="contact-page-section">
        <div className="container">
          {/* Top Header Row */}
          <div className="contact-header-row">
            {/* Left Title */}
            <div className="contact-title-box">
              <h1 className="contact-heading">
                Contacts
              </h1>
            </div>

            {/* Right Contact Info & Action Button */}
            <div className="contact-right-box">
              <a href="tel:+17015811331" className="contact-phone-link">
                +1 (701) 581-1331
              </a>
              <p className="contact-address-text">
                161 Trumpeter Ave, Soldotna, Alaska
              </p>
              <button
                className="submit-app-btn-dark"
                id="contact-page-submit-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Submit your application
              </button>
            </div>
          </div>

          {/* Map Container */}
          <div className="map-wrapper" id="contact-page-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280006547!2d-87.78449354002661!3d41.83390374826507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Contacts - Map"
              className="map-iframe"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Connect with us Popup Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ContactPage;
