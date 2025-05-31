import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <>
      <div id="top"></div>
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
    </>
  );
}
