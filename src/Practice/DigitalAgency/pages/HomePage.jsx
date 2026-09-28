import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import ServicesPreview from '../components/ServicesPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';

/** Figma "Home Page - Desktop" (19:151) — nine stacked sections. */
export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <LogoStrip />
      <ServicesPreview onNavigate={onNavigate} />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <ContactSection />
    </>
  );
}
