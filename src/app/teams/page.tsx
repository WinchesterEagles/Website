import { TeamCard } from "components/teamCard";

export default function Teams() {
  return (
    <div className=" flex flex-col mt-8 w-full items-center xl:w-5/6 xl:flex-row xl:flex-wrap ">
      <TeamCard
        teamInfo={{
          imageUrl: "/images/p2.jpeg",
          imageAlt: "team photo",
          title: "example team",
          leagueTableUrl: "/",
        }}
      />

      <TeamCard
        teamInfo={{
          imageUrl: "/images/p2.jpeg",
          imageAlt: "team photo",
          title: "example team",
          leagueTableUrl: "/",
        }}
      />

      <TeamCard
        teamInfo={{
          imageUrl: "/images/p2.jpeg",
          imageAlt: "team photo",
          title: "example team",
          leagueTableUrl: "/",
        }}
      />

      <TeamCard
        teamInfo={{
          imageUrl: "/images/p2.jpeg",
          imageAlt: "team photo",
          title: "example team",
          leagueTableUrl: "/",
        }}
      />
      <TeamCard
        teamInfo={{
          imageUrl: "/images/p2.jpeg",
          imageAlt: "team photo",
          title: "example team",
          leagueTableUrl: "/",
        }}
      />
      <TeamCard
        teamInfo={{
          imageUrl: "/images/p2.jpeg",
          imageAlt: "team photo",
          title: "example team",
          leagueTableUrl: "/",
        }}
      />
    </div>
  );
}
