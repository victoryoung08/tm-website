import Image from "next/image";
import Card from "./components/Card/Card";
import VideoGrid from "./components/VideoGrid/VideoGrid";
import { getFields, getLogos, getCaseStudiesContent } from "./utils/contentful";

export default async function Home() {
  const logos = await getLogos();
  const caseStudies = await getCaseStudiesContent();
  return (
    <main className="px-2 sm:px-12 md:px-48">
      <section className="flex flex-col items-center py-24 gap-12 h-fit">
        <div className="text-center ">
          <h1 className="uppercase">
            More Customers
            <br />
            you love to work with.
          </h1>
          <p className="">
            If only more people knew about your business. <br /> We damn good
            content to get their attention, and turn followers into customers.
          </p>
          <button>SOUNDS GOOD, LET&apos;S ROLL</button>
        </div>
        <div className="w-full h-48 max-w-[80%] bg-white rounded-xl"></div>
      </section>
      {/* LOGO GRID */}
      {/* mission statement */}
      {/* feature row */}
      {/* <VideoGrid /> */}
      {/* case study */}
      <section>
        {caseStudies.map((cs, index) =>
          index % 2 === 0 ? (
            <Card position="left" content={cs} key={cs + index} />
          ) : (
            <Card position="right" content={cs} key={cs + index} />
          )
        )}
      </section>
    </main>
  );
}
