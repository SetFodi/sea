import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCatalog from "@/components/ProductCatalog";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "პროდუქცია",
  description:
    "წყლის დამუშავება, ქიმიური პროდუქცია, სამედიცინო და ლაბორატორიული, სამრეწველო აღჭურვილობა — SEA Ltd კატალოგი.",
};

export default function Page() {
  return (
    <>
      <PageHero crumbKey="pp.crumb" eyebrowKey="cat.eyebrow" titleKey="pp.title" leadKey="pp.lead" />
      <section className="section">
        <div className="container">
          <ProductCatalog />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
