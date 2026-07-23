import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ShippingPage from './pages/ShippingPage';
import WarrantyPage from './pages/WarrantyPage';
import FinancingPage from './pages/FinancingPage';

function App() {
  const getNormalizedPath = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('shipping')) return '/services/shipping';
    if (path.includes('warranty')) return '/services/warranty';
    if (path.includes('financing')) return '/services/financing';
    if (path.includes('cars')) return '/cars';
    if (path.includes('about')) return '/about';
    if (path.includes('services') || path.includes('service')) return '/services';
    if (path.includes('contact') || path.includes('contacts')) return '/contacts';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getNormalizedPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPath]);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main>
        {currentPath === '/cars' ? (
          <CarsPage onNavigate={handleNavigate} />
        ) : currentPath === '/about' ? (
          <AboutPage />
        ) : currentPath === '/services' ? (
          <ServicesPage onNavigate={handleNavigate} />
        ) : currentPath === '/services/shipping' ? (
          <ShippingPage onNavigate={handleNavigate} />
        ) : currentPath === '/services/warranty' ? (
          <WarrantyPage onNavigate={handleNavigate} />
        ) : currentPath === '/services/financing' ? (
          <FinancingPage onNavigate={handleNavigate} />
        ) : currentPath === '/contacts' ? (
          <ContactPage />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
