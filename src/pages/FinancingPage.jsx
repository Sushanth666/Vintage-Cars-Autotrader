import { useEffect } from 'react';

const FinancingPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-detail-page" id="financing-page">
      <section className="service-detail-section">
        <div className="container">
          {/* Main Service Title */}
          <h1 className="service-detail-heading">
            FINANCING
          </h1>

          {/* 2-Column Layout Grid */}
          <div className="service-detail-grid">
            {/* Left Image Column */}
            <div className="service-detail-image-box">
              <img
                src="/images/services/service3.jpg"
                alt="FINANCING"
                className="service-detail-img"
              />
            </div>

            {/* Right Content Column */}
            <div className="service-detail-content-box">
              <div className="service-detail-paragraphs">
                <p>
                  Our financing options are designed to accommodate various budgets and preferences. Whether you are a seasoned collector or a first-time buyer, our team is dedicated to finding a financing plan that suits your needs. Benefit from competitive interest rates and straightforward terms that align with the timeless value of the classic car you desire.
                </p>
                <p>
                  Applying for financing with us is a hassle-free process. Our knowledgeable team is ready to guide you through the application, ensuring that you have a clear understanding of the terms and conditions. We believe in transparency, and our commitment is to provide you with a financing solution that enhances your enjoyment of the classic car of your dreams.
                </p>
                <p>
                  Take the next step in your journey to classic car ownership by exploring our financing options. ALL CLASSIC MOTORS VELVA is here to make your dream car a reality, with financing plans that reflect our dedication to your satisfaction and the preservation of automotive history.
                </p>
              </div>

              <button
                className="submit-app-btn-dark service-detail-btn"
                onClick={() => onNavigate && onNavigate('/contacts')}
                id="financing-deliver-btn"
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

export default FinancingPage;
