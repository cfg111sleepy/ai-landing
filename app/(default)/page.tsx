export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import Workflows from "@/components/workflows";
import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";
import TerminalInstallN8N from "@/components/terminal-install-n8n";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <Workflows />
      <div className="mx-auto">
        <TerminalInstallN8N />
      </div>
      <Testimonials />
      <FaqSection />
      <Cta />
    </>
  );
}
