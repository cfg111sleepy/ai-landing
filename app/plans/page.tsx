"use client";
import Header from "@/components/ui/header";
import VersionSelector from "@/components/version-selector";
import Footer from "@/components/ui/footer";
import { FeatureComparisonTable } from "@/components/feature-comparison-table";
import { FeatureDescriptionsTable } from "@/components/feature-descriptions-table";

export default function PlansPage() {
  return (
    <>
      <Header />
      <section className="mt-10 md:mt-12 max-w-7xl mx-auto py-8 md:py-16 px-2 sm:px-4 md:px-6 w-full flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 md:mb-8 text-center w-full break-words">
          Тарифы и планы
        </h1>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[320px] sm:min-w-0">
            <VersionSelector />
          </div>
        </div>
      </section>
      <FeatureComparisonTable />
      {/* <FeatureDescriptionsTable /> */}
      <Footer />
    </>
  );
}
