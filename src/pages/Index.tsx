import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { BrandStory } from '@/components/sections/BrandStory';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUs';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BrandStory />
      <ServicesPreview />
      <WhyChooseUsSection />
      <TechnologySection />
      <IndustriesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
