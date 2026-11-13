import { ImportantDocCard } from "components/importantDocCard";
import { Metadata } from "next";
import { documents } from "assets/data";

export const metadata: Metadata = {
  title: "Important Documents | Winchester Eagles Volleyball Club",
  description:
    "Access all important Winchester Eagles documents - download timetables, pricing, and other club resources",
  openGraph: {
    title: "Important Documents | Winchester Eagles Volleyball Club",
    description:
      "Access all important Winchester Eagles documents - download timetables, pricing, and other club resources",
    url: "https://www.winchestervolleyball.co.uk/important-documents",
  },
};

export default function ImportantDocuments() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-10 pb-20">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        {/* Visually hidden main heading for SEO */}
        <h1 className="sr-only">Important Documents</h1>

        {/* Header Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full mb-3">
            Club Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--primary-blue)] mb-4">
            Important Documents & Policies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Below you will find links to our club's policies, member timetables,
            and official club documents. Click any item to download.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {documents.map((document, index) => (
            <ImportantDocCard key={index} document={document} />
          ))}
        </div>
      </div>
    </main>
  );
}
