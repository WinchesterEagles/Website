import { ImportantDocCard } from "components/importantDocCard";
import { Document } from "components/importantDocCard";
import { Metadata } from "next";
import { documents } from "assets/data";

export const metadata: Metadata = {
  title: "important documents",
  description: "learn abou walefare information",
};

export default function ImportantDocuments() {
  return (
    <div className="w-full mx-2 mt-12 px-2 xl:w-3/4">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </h2>

      {/* Documents container */}
      <div className="flex flex-col xl:flex-row flex-wrap xl:gap-4 pt-4">
        {documents.map((document, index) => (
          <ImportantDocCard key={index} document={document} />
        ))}
      </div>
    </div>
  );
}
