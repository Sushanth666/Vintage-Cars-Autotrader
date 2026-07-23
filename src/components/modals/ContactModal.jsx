import { useState } from 'react';

const USFlagIcon = () => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 20 14"
    fill="none"
    className="us-flag-icon"
    style={{ borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle' }}
  >
    <rect width="20" height="14" rx="1.5" fill="#B22234" />
    <rect y="1.077" width="20" height="1.077" fill="white" />
    <rect y="3.231" width="20" height="1.077" fill="white" />
    <rect y="5.385" width="20" height="1.077" fill="white" />
    <rect y="7.538" width="20" height="1.077" fill="white" />
    <rect y="9.692" width="20" height="1.077" fill="white" />
    <rect y="11.846" width="20" height="1.077" fill="white" />
    <rect width="8" height="7.538" fill="#3C3B6E" />
    <circle cx="1.6" cy="1.5" r="0.45" fill="white" />
    <circle cx="4.0" cy="1.5" r="0.45" fill="white" />
    <circle cx="6.4" cy="1.5" r="0.45" fill="white" />
    <circle cx="2.8" cy="3.0" r="0.45" fill="white" />
    <circle cx="5.2" cy="3.0" r="0.45" fill="white" />
    <circle cx="1.6" cy="4.5" r="0.45" fill="white" />
    <circle cx="4.0" cy="4.5" r="0.45" fill="white" />
    <circle cx="6.4" cy="4.5" r="0.45" fill="white" />
    <circle cx="2.8" cy="6.0" r="0.45" fill="white" />
    <circle cx="5.2" cy="6.0" r="0.45" fill="white" />
  </svg>
);

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    comment: '',
    agreePrivacy: true,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    if (onClose) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="contact-modal-card"
        onClick={(e) => e.stopPropagation()}
        id="connect-modal"
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          id="close-modal-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Title */}
        <h2 className="modal-title">
          Connect<br />
          with us
        </h2>

        {/* Modal Contact Form */}
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row-2col">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="modal-line-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                className="modal-line-input"
                required
              />
            </div>
          </div>

          <div className="form-row-2col">
            <div className="form-group phone-group">
              <div className="country-flag-box">
                <USFlagIcon />
                <span className="country-code">+1</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                className="modal-line-input phone-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="modal-line-input"
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <input
              type="text"
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              className="modal-line-input"
            />
          </div>

          <div className="form-bottom-row">
            <button type="submit" className="contact-me-btn" id="contact-me-submit-btn">
              Contact me
            </button>

            <label className="privacy-checkbox-label">
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleChange}
                className="custom-checkbox"
                required
              />
              <span className="privacy-text">
                <span className="underline-link">I agree with the privacy policy</span>
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
