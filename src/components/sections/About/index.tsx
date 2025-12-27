import Image from "next/image";
import transparentLogo from "@/public/transparent_logo.svg";
import jamesPhoto from "@/public/james.png";

export function About() {
  return (
    <section
      className="relative mx-auto py-18 px-3 sm:px-6 lg:px-6 bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-9 items-center">
          <div className="animate-fade-in">
            <h2 className="mb-6 flex items-center gap-3">
              About
              <Image
                src={transparentLogo}
                alt="Company logo."
                className="max-w-[180px]"
              />
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Listing Engine was born from the struggle every reseller faces;
              how to meet their listing goals whilst simultaneously managing
              their inventory across multiple platforms. Our co-founder James
              has spent a decade reselling across Ebay, Depop, Shopify and more,
              building a small company and selling 40,000 items in the process.
              However, far too much time was wasted learning the title structure
              for each platform, filling in item specifics boxes and manually
              managing a 5,000+ item inventory across multiple platforms.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Listing Engine was built to change that, using multiple complex AI
              models and our own in house training system our software creates
              the perfect listing in seconds, with an optimised title, succinct
              description and correctly mapped item specifics. Allowing our
              users to spend more time on growing their business, sourcing more
              items or simply reclaiming some of that work life balance that is
              so often lost in this industry.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in stagger-1">
            <Image
              src={jamesPhoto}
              alt="James photo, one of the founders of the product"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
