/* This is the team "figurine" card used in the teams pages
mapping in teams page, generates as many figurines as there are teams */

import { StandardButton } from "./standardButton";
import Image from "next/image";

// these are the info about the team
export interface TeamInfo {
  imageUrl: string;
  imageAlt: string;
  title: string;
  leagueTableUrl: string;
}

export function TeamCard({
  teamInfo,
  borderColour,
}: {
  teamInfo: TeamInfo;
  borderColour: string;
}) {
  return (
    <div className="flex flex-col w-full items-center mb-16 xl:max-w-[48%]  ">
      <div className="w-5/6  mb-2 xl:mx-auto min-h-72 aspect-[4/3]  relative ">
        <Image
          src={teamInfo.imageUrl}
          alt={teamInfo.imageAlt}
          fill
          className="mb-2 rounded-lg"
        />
      </div>

      <p
        className={`text-center text-lg font-semibold mt-2 px-2 pb-2 w-1/2 xl:w-1/3 border-b-2 border-amber-500 ${borderColour}`}
      >
        {teamInfo.title}
      </p>
      <StandardButton text="League's Table" href={teamInfo.leagueTableUrl} />
    </div>
  );
}
