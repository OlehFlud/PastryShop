import {
  MainSection,
  AboutUsSection,
  OurInteriorSection,
  OurProductSection,
  OurTeamSection,
  PromotionSection,
  ContactUsSection,
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen p-14 sm:px-20 md:px-30 lg:px-36 xl:px-52 font-[family-name:var(--font-geist-sans)] bg-[#F9F8DF]">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
        <MainSection />
        <AboutUsSection />
        <OurInteriorSection />
        <OurProductSection />
        <PromotionSection />
        <OurTeamSection />
        {/*<ContactUsSection />*/}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
