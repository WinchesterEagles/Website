import { TeamCard } from "components/teamCard";
import { Metadata } from "next";
import { teams } from "assets/data";

export const metadata: Metadata = {
  title: "Teams | Winchester Eagles Volleyball Club",
  description:
    "Discover the Winchester Eagles teams - view team info and follow their progress in the official league tables.",
  openGraph: {
    title: "Teams | Winchester Eagles Volleyball Club",
    description:
      "Discover the Winchester Eagles teams - view team info and follow their progress in the official league tables.",
    url: "https://www.winchestervolleyball.co.uk/teams",
  },
};

export default function Teams() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-10 pb-20">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        {/* Visually hidden main heading for SEO */}
        <h1 className="sr-only">Teams</h1>

        {/* Header Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full mb-3">
            Competitive Squads
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--primary-blue)] mb-4">
            Our Teams & Leagues
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our teams compete in the highest regional leagues, including
            tournaments organized by the Southampton and District Volleyball
            Association (SADVA) and Volleyball Hampshire (VH). You can check out
            the league tables below!
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              teamInfo={team}
              borderColour={
                index % 2 === 0
                  ? "border-[var(--primary-orange)]"
                  : "border-[var(--primary-blue)]"
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}
