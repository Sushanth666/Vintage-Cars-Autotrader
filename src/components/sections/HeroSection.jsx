import { heroCars } from '../../data/carsData';

const HeroSection = ({ onNavigate }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <h1 className="hero-title">
          Retro cars 1960-1970
        </h1>

        <div className="hero-sub-row">
          <div className="hero-tag-text">
            Vintage retro<br />
            cars USA
          </div>
          <button
            className="find-car-btn"
            id="find-car-btn"
            onClick={() => onNavigate && onNavigate('/cars')}
          >
            <span>Find a car</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </div>

        {/* Main Car Grid (6 Cards Matching Reference Screenshot) */}
        <div className="cars-grid">
          {heroCars.map((car, index) => (
            <div
              key={car.id}
              className={`car-card reveal reveal-delay-${Math.min(index + 1, 4)}`}
              id={`car-card-${car.id}`}
              onClick={() => onNavigate && onNavigate('/cars')}
            >
              <img
                src={car.image}
                alt={car.name}
                loading="lazy"
                className="car-card-img"
              />
              <div className="car-card-overlay">
                <div className="car-card-bottom">
                  <div className="car-card-price-tag">{car.price}</div>
                  <h3 className="car-card-name">{car.name}</h3>
                  <div className="car-card-pills-row">
                    <button className="card-pill-btn card-pill-white">
                      <span>Rent</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </button>
                    <span className="card-pill-btn card-pill-outline">{car.miles}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Summary Dark Card */}
          <div
            className="car-card summary-dark-card reveal reveal-delay-4"
            id="car-card-summary"
            onClick={() => onNavigate && onNavigate('/cars')}
          >
            <div className="summary-watermark">
              <img src="/images/cars/vintage.png" alt="" className="watermark-car-img" />
            </div>
            <div className="car-card-overlay">
              <div className="car-card-pills-row">
                <button className="card-pill-btn card-pill-white">
                  <span>All cars</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
                <span className="card-pill-btn card-pill-outline">29 more cars</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
