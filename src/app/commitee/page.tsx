import { Metadata } from "next";
import { CommiteeCard } from "components/commiteeCard";
import { commiteeMembers } from "assets/data";

export const metadata: Metadata = {
  title: "commitee",
  description:
    "Meet the Winchester Eagles committee and coaches - learn about the people who run and support our club.",

  // Open Graph (social previews)
  openGraph: {
    title: "commitee",
    description:
      "Meet the Winchester Eagles committee and coaches - learn about the people who run and support our club.",
    url: "https://www.winchestervolleyball.co.uk/commitee",
  },
};

export default function commitee() {
  return (
    <div className="flex flex-col px-2 mt-12 mb-16 xl:w-5/6 xl:mx-auto ">
      {/* Visually hidden main heading for SEO */}
      <h1 className="sr-only">Committee</h1>

      {/* Coming Soon Section */}
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
        <h2 className="text-3xl font-semibold  mb-4 sm:text-4xl text-center">
          Coming Soon!
        </h2>
        <p className="text-base sm:text-lg text-center max-w-md">
          The committee is busy checking mirrors and perfecting their poses,
          stay tuned for their grand debut!
        </p>
      </div>

      <div className="hidden">
        <h2 className="text-center font-semibold text-lg px-2 mb-8 xl:w-1/2 xl:mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </h2>

        {/*  border colour determines the color of the name paragraph*/}
        <div className="flex flex-col xl:flex-row xl:flex-wrap xl:justify-center">
          {commiteeMembers.map((comiteeMemeber, index) => (
            <CommiteeCard
              key={index}
              commiteeMember={comiteeMemeber}
              borderColour={
                index % 2 === 0 ? "border-amber-500" : "border-blue-900"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
