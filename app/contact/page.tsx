import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "კონტაქტი",
  description:
    "დაგვიკავშირდით — შპს „სეა“. ტელეფონი: +995 557 263 356. მისამართი: შალვა ნუცუბიძის 20, თბილისი.",
};

export default function Page() {
  return (
    <>
      <PageHero crumbKey="cp.crumb" eyebrowKey="nav.contact" titleKey="cp.title" leadKey="cp.lead" />
      <ContactView />
    </>
  );
}
