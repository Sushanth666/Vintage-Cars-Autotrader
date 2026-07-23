import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = ({ onNavigate }) => {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <AboutSection />
      <ServicesSection onNavigate={onNavigate} />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
