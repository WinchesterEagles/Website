import { Metadata } from "next";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { sundaySessions } from "assets/data";

export const metadata: Metadata = {
  title:
    "Junior Volleyball for Kids & Teens | Winchester Eagles Volleyball Club",
  description:
    "Looking to get your child into volleyball? Winchester Eagles offers junior training for ages up to 18. Check Sunday training times, location, and get in touch",
  openGraph: {
    title:
      "Junior Volleyball for Kids & Teens | Winchester Eagles Volleyball Club",
    description:
      "Looking to get your child into volleyball? Winchester Eagles offers junior training for ages up to 18. Check Sunday training times, location, and get in touch",
    url: "https://www.winchestervolleyball.co.uk/juniors",
  },
};

export default function Juniors() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* 1. HEADER INTRO */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full mb-3">
            Junior Program
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--primary-blue)] mb-4">
            Junior Development & Teams
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We proudly run a Junior sector focused on developing young players
            (up to 18 years old), building skills, confidence, and a love for
            the game. Our teams compete in major leagues, such as SADVA and the
            Volleyball England Grand Prix, giving players the chance to grow and
            shine on the court.
          </p>
        </div>

        {/* 2. TIMETABLE SECTION */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-center text-[var(--primary-blue)]">
            Sunday Training Schedule
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {sundaySessions.map((session, index) => (
              <div
                key={index}
                className="bg-[var(--bg-card)] border-2 border-[var(--primary-blue)] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-[var(--primary-orange)] w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-bold text-[var(--primary-blue)]">
                      {session.level}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-amber-50 text-[var(--primary-orange)] px-2 py-0.5 rounded-full border border-amber-200">
                    Sunday
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <FaClock className="text-[var(--primary-orange)] w-4 h-4 flex-shrink-0" />
                    <span className="font-semibold text-slate-800">
                      {session.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <FaMapMarkerAlt className="text-[var(--primary-orange)] w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{session.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DOCUMENT DOWNLOAD & CONTACT CARD */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm max-w-3xl mx-auto">
          <div>
            <h4 className="font-bold text-sm text-[var(--primary-blue)]">
              Interested in getting your child involved? Get in touch
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              For more information and availability, contact us at{" "}
              <a
                href="mailto:juniorvolleyballwinchester@gmail.com?subject=Contact%20from%20Website&body=Hi%20Eagles%2C%0A"
                className="text-[var(--primary-blue)] underline font-medium"
              >
                juniorvolleyballwinchester@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
