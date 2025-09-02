import { Metadata } from "next";
import { CommiteeCard } from "components/commiteeCard";
import { commiteeMembers } from "assets/data";

export default function commitee() {
  return (
    <div className="flex flex-col px-2 mt-12 mb-16 xl:w-5/6 xl:mx-auto ">
      {/* Visually hidden main heading for SEO */}
      <h1 className="sr-only">Committee</h1>

      <p className="text-center font-semibold text-lg px-2 mb-8 xl:w-1/2 xl:mx-auto ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </p>

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
  );
}
