import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsView from "@/components/ProjectsView";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "პროექტები",
  description:
    "რეალიზებული პროექტები — წყლის დეზინფექციისა და დამუშავების სისტემები საქართველოს მასშტაბით. SEA LLC.",
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
