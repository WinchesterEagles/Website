import { TeamCard } from "components/teamCard";
import { TeamInfo } from "components/teamCard";
import { Metadata } from "next";
import { teams } from "assets/data";

export const metadata: Metadata = {
  title: "teams",
  description:
    "Discover the Winchester Eagles teams - view team info and follow their progress in the official league tables.",

  // Open Graph (social previews)
  openGraph: {
    title: "teams",
    description:
      "Discover the Winchester Eagles teams - view team info and follow their progress in the official league tables.",
    url: "https://www.winchestervolleyball.co.uk/commitee",
  },
};

export default function Teams() {
  return (
    <div className=" flex flex-col mt-12 w-full items-center xl:w-5/6  ">
      {/* Visually hidden main heading for SEO */}
      <h1 className="sr-only">Teams</h1>

      <h2 className="text-center  text-lg px-2 mb-8 xl:w-1/2 xl:mx-auto ">
        Our teams compete in the highest regional leagues, including tournaments
        organized by the Southampton and District Volleyball Association (SADVA)
        and Volleyball Hampshire (VH). You can check out the league tables
        below!
      </h2>

      <div className=" flex flex-col xl:flex-row xl:flex-wrap xl:w-full mt-4">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            teamInfo={team}
            borderColour={
              index % 2 === 0 ? "border-amber-500" : "border-blue-900"
            }
          />
        ))}
      </div>
    </div>
  );
}
