import { useEffect } from 'react';

const WarrantyPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-detail-page" id="warranty-page">
      <section className="service-detail-section">
        <div className="container">
          {/* Main Service Title */}
          <h1 className="service-detail-heading">
            WARRANTY PURCHASE
          </h1>

          {/* 2-Column Layout Grid */}
          <div className="service-detail-grid">
            {/* Left Image Column */}
            <div className="service-detail-image-box">
              <img
                src="/images/services/service2.jpg"
                alt="WARRANTY PURCHASE"
                className="service-detail-img"
              />
            </div>

            {/* Right Content Column */}
            <div className="service-detail-content-box">
              <div className="service-detail-paragraphs">
                <p>
                  Our comprehensive warranty options provide an added layer of protection, ensuring that you can fully enjoy the beauty of your timeless vehicle without worry.
                </p>
                <p>
                  Choose from our range of warranty packages tailored to meet the unique needs of classic car enthusiasts. Our warranties cover essential components, providing you with confidence and assurance in the reliability of your cherished automobile.
                </p>
                <p>
                  With ALL CLASSIC MOTORS VELVA's warranty options, you're not just investing in protection; you're investing in the longevity and continued performance of your classic car. Our commitment to your satisfaction extends beyond the showroom, offering a safety net that aligns with the timeless quality of the vehicles in our collection.
                </p>
              </div>

              <button
                className="submit-app-btn-dark service-detail-btn"
                onClick={() => onNavigate && onNavigate('/contacts')}
                id="warranty-submit-btn"
              >
                I want to put
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarrantyPage;
