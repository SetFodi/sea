import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutView from "@/components/AboutView";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "კომპანია",
  description:
    "შპს „სეა“ — მრავალპროფილური მომწოდებელი კომპანია, რომელიც 2017 წლიდან მუშაობს სახელმწიფო და კერძო სექტორთან.",
};

export default function Page() {
  return (
    <>
      <PageHero crumbKey="ap.crumb" eyebrowKey="ap.story.eyebrow" titleKey="ap.title" leadKey="ap.lead" />
      <AboutView />
      <CtaBand />
    </>
  );
}
