import Card from "./components/Card/Card";
import VideoGrid from "./components/VideoGrid/VideoGrid";
import { getCaseStudies } from "./utils/contentful";

export default async function Home() {
  const { items } = await getCaseStudies();
  const caseStudies = items.filter(
    (item) => item.sys.space.sys.id === "98888r78yd9b"
  );
  const fields = caseStudies.map((cs) => cs.fields);
  console.log(fields);
  return (
    <main>
      <section>
        <h1>Get more customers you actually love to work with</h1>
        <p>
          We&apos;re talking customers who pay your prices, who want your
          business and don&apos;t ask for discounts
        </p>
        <button>SOUNDS GOOD, LET&apos;S ROLL</button>
      </section>
      {/* <VideoGrid /> */}
      {fields.map((field) => (
        <Card
          key={field.name}
          heading={field.name}
          text={field.resultsSnippet}
        />
      ))}
    </main>
  );
}
