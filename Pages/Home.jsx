import React from 'react';
import HeroSection from '../components/home/HeroSection';
import UrgencyBand from '../components/home/UrgencyBand';
import ServicesSection from '../components/home/ServicesSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ReviewsSlider from '../components/home/ReviewsSlider';
import ProcessSection from '../components/home/ProcessSection';
import ZoneSection from '../components/home/ZoneSection';
import FAQSection from '../components/home/FAQSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="pb-20 lg:pb-0">
      {/* Meta SEO */}
      <title>Plombier Besançon 24h/24 - Dépannage Urgence | HL Plomberie</title>
      <meta 
        name="description" 
        content="Plombier à Besançon, dépannage 24h/24 7j/7. Fuite d'eau, chauffe-eau, WC, débouchage. Intervention rapide, devis gratuit, tarifs transparents. ☎ 07 45 08 90 80"
      />
      
      <HeroSection />
      <UrgencyBand />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSlider />
      <ProcessSection />
      <ZoneSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}