export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import VersionSelector from "@/components/version-selector";
import Testimonials from "@/components/testimonials";
import TerminalInstallN8N from "@/components/terminal-install-n8n";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <VersionSelector />
      <div className="mb-8 max-w-6xl mx-auto">
        <TerminalInstallN8N />
      </div>
      <Testimonials />
      <Cta />
    </>
  );
}
