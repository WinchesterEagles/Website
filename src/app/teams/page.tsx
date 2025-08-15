import { TeamCard } from "components/teamCard";
import { TeamInfo } from "components/teamCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "teams",
  description: "Discover our teams",
};
/* list all current teams here
must reflect TeamInfo interface in teamCard.tsx*/
const teams: TeamInfo[] = [
  {
    imageUrl: "/images/p2.jpeg",
    imageAlt: "team photo",
    title: "example team",
    leagueTableUrl: "/",
  },
  {
    imageUrl: "/images/p2.jpeg",
    imageAlt: "team photo",
    title: "example team",
    leagueTableUrl: "/",
  },
  {
    imageUrl: "/images/p2.jpeg",
    imageAlt: "team photo",
    title: "example team",
    leagueTableUrl: "/",
  },
  {
    imageUrl: "/images/p2.jpeg",
    imageAlt: "team photo",
    title: "example team",
    leagueTableUrl: "/",
  },
];

export default function Teams() {
  return (
    <div className=" flex flex-col mt-8 w-full items-center xl:w-5/6 xl:flex-row xl:flex-wrap ">
      {teams.map((team, index) => (
        <TeamCard key={index} teamInfo={team} />
      ))}
    </div>
  );
}
