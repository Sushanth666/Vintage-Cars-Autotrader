import { servicesList } from '../../data/servicesData';

const ServicesSection = ({ onNavigate }) => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Top Header Row with Title on Left and Submit Button on Right */}
        <div className="services-header-row reveal">
          <h2 className="services-heading">
            Services
          </h2>
          <button
            className="submit-app-btn"
            id="submit-app-btn"
            onClick={() => onNavigate && onNavigate('/contacts')}
          >
            Submit your application
          </button>
        </div>

        {/* 3-Column Services Grid */}
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div
              className={`service-card reveal reveal-delay-${index + 1}`}
              key={service.id}
              id={`service-card-${service.id}`}
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
  );
};

export default ServicesSection;
