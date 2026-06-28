import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsView from "@/components/ProjectsView";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "პროექტები",
  description:
    "რეალიზებული პროექტები — დასრულებული პროექტების ფოტოები, წლები და დასახელებები. SEA Ltd.",
};

export default function Page() {
  return (
    <>
      <PageHero crumbKey="prp.crumb" eyebrowKey="proj.eyebrow" titleKey="prp.title" leadKey="prp.lead" />
      <ProjectsView />
      <CtaBand />
    </>
  );
}
