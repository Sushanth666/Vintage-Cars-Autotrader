import { useEffect } from 'react';

const ShippingPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-detail-page" id="shipping-page">
      <section className="service-detail-section">
        <div className="container">
          {/* Main Service Title */}
          <h1 className="service-detail-heading">
            SHIPPING
          </h1>

          {/* 2-Column Layout Grid */}
          <div className="service-detail-grid">
            {/* Left Image Column */}
            <div className="service-detail-image-box">
              <img
                src="/images/services/service1.jpg"
                alt="SHIPPING"
                className="service-detail-img"
              />
            </div>

            {/* Right Content Column */}
            <div className="service-detail-content-box">
              <div className="service-detail-paragraphs">
                <p>
                  We partner with trusted shipping professionals experienced in handling classic automobiles. From meticulous loading to secure transit, we prioritize the safety of your vehicle throughout its journey to your doorstep. Our global shipping network allows us to cater to enthusiasts worldwide, bringing the allure of classic cars to every corner of the globe.
                </p>
                <p>
                  Rest easy knowing that your classic car is in the hands of experts who share your passion for preserving automotive history. Whether it's a local delivery or an international shipment, ALL CLASSIC MOTORS VELVA is committed to ensuring that your timeless vehicle arrives with the same elegance and care it had in our showroom.
                </p>
                <p>
                  Experience worry-free shipping with ALL CLASSIC MOTORS VELVA and let us bring the joy of classic cars directly to you. Your journey with your classic car starts from the moment it leaves our hands to the moment it arrives at yours.
                </p>
              </div>

              <button
                className="submit-app-btn-dark service-detail-btn"
                onClick={() => onNavigate && onNavigate('/contacts')}
                id="shipping-deliver-btn"
              >
                Deliver the car
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
