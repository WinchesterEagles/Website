import { ImportantDocCard } from "components/importantDocCard";
import { Document } from "components/importantDocCard";
import { Metadata } from "next";
import { documents } from "assets/data";

export const metadata: Metadata = {
  title: "important documents",
  description:
    "Access all important Winchester Eagles documents - download timetables, pricing, and other club resources",

  // Open Graph (social previews)
  openGraph: {
    title: "important documents",
    description:
      "Access all important Winchester Eagles documents - download timetables, pricing, and other club resources",
    url: "https://www.winchestervolleyball.co.uk/commitee",
  },
};

export default function ImportantDocuments() {
  return (
    <div className="w-full mx-2 mt-12 px-2 xl:w-3/4 mb-16">
      {/* Visually hidden main heading for SEO */}
      <h1 className="sr-only">Important documents</h1>

      <h2 className="text-xl  mb-4 text-center">
        Below you will find links to our clubs policies and documents.
      </h2>

      {/* Documents container */}
      <div className="flex flex-col xl:flex-row flex-wrap xl:gap-4 pt-4 justify-center">
        {documents.map((document, index) => (
          <ImportantDocCard key={index} document={document} />
        ))}
      </div>
    </div>
  );
}
