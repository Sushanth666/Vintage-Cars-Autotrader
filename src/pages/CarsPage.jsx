import { useEffect } from 'react';
import { catalogCars } from '../data/carsData';

const CarsPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="our-cars-page" id="our-cars-page">
      <div className="container">
        {/* Page Title & Filters Bar */}
        <div className="our-cars-header-row">
          <h1 className="our-cars-heading">
            Our cars
          </h1>
          <button className="filters-btn" id="filters-btn">
            <span>Filters</span>
          </button>
        </div>

        {/* 2-Column Catalog Cars Grid (16 Cards) */}
        <div className="cars-grid catalog-grid">
          {catalogCars.map((car) => (
            <div className="car-card" key={car.id} id={`catalog-car-${car.id}`}>
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
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
