/* This is the team "figurone" card usec in the teams pages
the teams' information are defined in the teams page 
and figurines are generated through loop */

import { StandardButton } from "./standardButton";

// these are the info about the team
export interface TeamInfo {
  imageUrl: string;
  imageAlt: string;
  title: string;
  leagueTableUrl: string;
}

export function TeamCard({ teamInfo }: { teamInfo: TeamInfo }) {
  return (
    <div className="flex flex-col w-full items-center mb-16 xl:max-w-[48%]  ">
      <img
        src={teamInfo.imageUrl}
        alt={teamInfo.imageAlt}
        className="mb-2 rounded-lg w-11/12 xl:w-5/6 h-auto"
      />
      <p className="text-center font-semibold px-2 pb-2 w-1/2 xl:w-1/3 border-b-2 border-amber-500">
        {teamInfo.title}
      </p>
      <StandardButton text="League's Table" href={teamInfo.leagueTableUrl} />
    </div>
  );
}
