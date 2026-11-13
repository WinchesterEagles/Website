/* This is the team "figurine" card used in the teams pages
mapping in teams page, generates as many figurines as there are teams */

import { StandardButton } from "./standardButton";
import Image from "next/image";

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
  // Check if the border is orange/amber, and make the text the OPPOSITE color
  const isOrangeBorder =
    borderColour.includes("amber") || borderColour.includes("orange");
  const textColorClass = isOrangeBorder
    ? "text-[var(--primary-blue)]"
    : "text-[var(--primary-orange)]";

  return (
    <div className="flex flex-col items-center bg-[var(--bg-card)] border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow w-full">
      {/* Team Image Container */}
      <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-4 bg-slate-100">
        <Image
          src={teamInfo.imageUrl}
          alt={teamInfo.imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Team Title with Opposite Text Color to Border */}
      <h3
        className={`text-center text-base sm:text-lg font-extrabold pb-1.5 border-b-2 px-4 ${textColorClass} ${borderColour}`}
      >
        {teamInfo.title}
      </h3>

      {/* League Table Button */}
      <StandardButton text="League Table" href={teamInfo.leagueTableUrl} />
    </div>
  );
}
