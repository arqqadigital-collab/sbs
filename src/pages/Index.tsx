import Hero from '@/components/sections/Hero';
import TransformSection from '@/components/sections/TransformSection';
import DeliverSection from '@/components/sections/DeliverSection';
import TrustedSection from '@/components/sections/TrustedSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

const Index = () => (
  <div className="min-h-screen font-sans text-slate-800 selection:bg-lime-200 selection:text-[#003366]">
    <Hero />
    <TransformSection />
    <DeliverSection />
    <TrustedSection />
    <StatsSection />
    <TestimonialSection />
    <CTABannerSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
