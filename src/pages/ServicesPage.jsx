import { useEffect } from 'react';
import { servicesList } from '../data/servicesData';

const ServicesPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page" id="services-page">
      <section className="services-page-section">
        <div className="container">
          {/* Top Header Row with Title on Left and Solid Dark Button on Right */}
          <div className="services-header-row">
            <h1 className="services-heading">
              Services
            </h1>
            <button
              className="submit-app-btn-dark"
              id="submit-app-btn-dark"
              onClick={() => onNavigate && onNavigate('/contacts')}
            >
              Submit your application
            </button>
          </div>

          {/* 3-Column Services Grid */}
          <div className="services-grid">
            {servicesList.map((service) => (
              <div
                className="service-card"
                key={service.id}
                id={`services-page-card-${service.id}`}
                onClick={() => onNavigate && onNavigate(service.path)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="service-card-img"
                />
                <div className="service-card-overlay">
                  <span className="service-title-tag">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
