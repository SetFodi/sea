import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "კონტაქტი",
  description:
    "დაგვიკავშირდით — შპს სეა. წყლის დამუშავება, დეზინფექცია და სამრეწველო აღჭურვილობა. თბილისი, საქართველო.",
};

export default function Page() {
  return (
    <>
      <PageHero crumbKey="cp.crumb" eyebrowKey="nav.contact" titleKey="cp.title" leadKey="cp.lead" />
      <ContactView />
    </>
  );
}
