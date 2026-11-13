"use client";
import type { Metadata } from "next";
import Image from "next/image";
import { handleSpondJoin } from "./handlers/handleSpondJoin";
import { StandardButton } from "components/standardButton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      <h1 className="sr-only">Winchester Eagles Volleyball Club</h1>

      <section className="w-full px-4 pt-4 max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-[var(--text-on-brand)] shadow-lg">
          {/* Full color photo with higher opacity so it's clearly visible */}
          <img
            src="/images/hpMain.jpg"
            alt="Winchester Eagles Volleyball Club"
            className="w-full h-64 sm:h-96 object-cover opacity-75"
          />

          {/* Dark gradient overlay at the bottom for text readability */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <span className="self-start px-3 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full shadow-sm">
              Winchester, UK
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight drop-shadow-md">
              Welcome to Winchester Eagles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-100 max-w-xl drop-shadow">
              A fun and friendly volleyball club welcoming players of all
              abilities—from absolute beginners to league pros. Check out our
              adult and junior programs below.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK METRICS STRIP */}
      <section className="w-full px-4 my-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--bg-muted)] text-center">
          <div className="p-2">
            <p className="text-xs text-[var(--text-muted)] uppercase font-semibold">
              Location
            </p>
            <p className="text-sm font-bold text-[var(--text-main)]">
              Winchester
            </p>
          </div>
          <div className="p-2 border-l border-[var(--bg-muted)]">
            <p className="text-xs text-[var(--text-muted)] uppercase font-semibold">
              Sessions
            </p>
            <p className="text-sm font-bold text-[var(--text-main)]">
              2x / Week
            </p>
          </div>
          <div className="p-2 border-l border-[var(--bg-muted)]">
            <p className="text-xs text-[var(--text-muted)] uppercase font-semibold">
              Ages
            </p>
            <p className="text-sm font-bold text-[var(--text-main)]">
              Juniors & Adults
            </p>
          </div>
          <div className="p-2 border-l border-[var(--bg-muted)]">
            <p className="text-xs text-[var(--text-muted)] uppercase font-semibold">
              Level
            </p>
            <p className="text-sm font-bold text-[var(--text-main)]">
              Beginner to Local League
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 2: Adults & Juniors Cards */}
      <section className="w-full px-4 my-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Adults Card */}
          <div className="flex flex-col bg-[var(--bg-card)] border border-[var(--bg-muted)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Locked uniform height: h-56 */}
            <div className="h-56 w-full overflow-hidden relative bg-slate-900">
              <img
                src="/images/hpAdults6.webp"
                alt="Adults playing volleyball indoor"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-[var(--text-on-brand)] bg-[var(--primary-blue)] rounded-full shadow">
                Adult Program
              </span>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">
                  Adult Training & Social
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  We offer two adult training sessions per week focusing on
                  tactical skill development, team scrimmages, and competitive
                  matches.
                </p>
                <ul className="text-xs text-[var(--text-muted)] space-y-1 mb-6">
                  <li>• Beginners welcome</li>
                  <li>• Social & competitive options</li>
                </ul>
              </div>
              <StandardButton
                text="Find Out More"
                href="/adults"
                className="btn-primary"
              />
            </div>
          </div>

          {/* Juniors Card */}
          <div className="flex flex-col bg-[var(--bg-card)] border border-[var(--bg-muted)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Locked uniform height: h-56 */}
            <div className="h-56 w-full overflow-hidden relative bg-slate-900">
              <img
                src="/images/hpJuniors1.jpeg"
                alt="Juniors playing volleyball indoor"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full shadow">
                Under 18s
              </span>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">
                  Junior Development
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  Training sessions tailored specifically for young athletes up
                  to 18 years old. Focused on volleyball fundamentals, teamwork,
                  and game confidence.
                </p>
                <ul className="text-xs text-[var(--text-muted)] space-y-1 mb-6">
                  <li>• Age-grouped coaching</li>
                  <li>• Boys & Girls U16/U18 development</li>
                </ul>
              </div>
              <StandardButton
                text="Find Out More"
                href="/juniors"
                className="btn-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPOND JOIN BANNER: How to Join the Club */}
      <section className="w-full px-4 my-12 max-w-7xl mx-auto">
        <div className="bg-[var(--bg-card)] border-2 border-[var(--primary-orange)] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Decorative background accent badge */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--primary-orange)]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Column: Heading & First Session Note */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full mb-3">
                New Players Welcome
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] leading-tight">
                How to Join Winchester Eagles
              </h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed max-w-xl">
                We manage all our training sessions, attendance, and club
                updates through the sport management app{" "}
                <strong className="text-[var(--text-main)]">Spond</strong>. Your
                first recreational session is completely free!
              </p>

              {/* Spond Code Highlight Box */}
              <div className="mt-6 inline-flex items-center gap-4 bg-white border border-[var(--bg-muted)] px-4 py-3 rounded-2xl shadow-sm">
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">
                    Group Join Code
                  </p>
                  <p className="text-lg font-black text-[var(--primary-blue)] tracking-widest">
                    XAVGO
                  </p>
                </div>
                <a
                  href="https://spond.com/"
                  onClick={handleSpondJoin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  <span>Spond app</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Step-by-Step Instructions Card */}
            <div className="w-full lg:w-1/2 bg-white border border-[var(--bg-muted)] rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[var(--primary-blue)] mb-4 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Quick 4-Step Guide
              </h4>
              <ol className="space-y-3 text-xs sm:text-sm text-[var(--text-main)]">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary-orange)] text-white font-bold flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span>
                    Download the{" "}
                    <strong className="text-[var(--text-main)]">Spond</strong>{" "}
                    app on your phone and sign in.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary-orange)] text-white font-bold flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span>
                    Request to join the Winchester Eagles community using group
                    code:{" "}
                    <strong className="text-[var(--primary-blue)] tracking-wider">
                      XAVGO
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary-orange)] text-white font-bold flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span>
                    Log your attendance for upcoming Recreational Sessions on
                    Mondays.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary-orange)] text-white font-bold flex items-center justify-center text-[10px]">
                    4
                  </span>
                  <span>
                    Your first session is <strong>free</strong>! Check
                    membership details for ongoing play.
                  </span>
                </li>
              </ol>

              <div className="mt-6 pt-4 border-t border-[var(--bg-muted)] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[var(--text-muted)]">
                  Have questions? Contact us below
                </span>
                <a
                  href="mailto:winchestereaglessocial@gmail.com"
                  className="text-xs font-bold text-[var(--primary-blue)] hover:underline"
                >
                  winchestereaglessocial@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3: Teams Banner */}
      <section className="w-full px-4 mt-8 mb-16 max-w-7xl">
        <div className="p-6 sm:p-8 bg-[var(--primary-blue)] rounded-3xl text-[var(--text-on-brand)] flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="flex-1">
            <span className="text-xs font-bold text-[var(--primary-orange)] uppercase tracking-wider">
              Competitive & Social
            </span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-3">
              Our Squads & Teams
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed mb-6">
              We run a wide range of teams (Mixed, Women's SADVA, Boys, U16/U18
              Girls) entering local leagues, regional tournaments, and friendly
              matches year-round.
            </p>
            <StandardButton
              text="Discover Teams"
              href="/teams"
              className="btn-primary"
            />
          </div>

          {/* Uniform 2x2 Grid with locked heights (h-32) to prevent grain distortion */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
            <div className="h-32 rounded-xl overflow-hidden shadow-inner bg-slate-900">
              <img
                src="/images/mixedHV.jpg"
                alt="Mixed Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-32 rounded-xl overflow-hidden shadow-inner bg-slate-900">
              <img
                src="/images/womenSADVA.webp"
                alt="Womens Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-32 rounded-xl overflow-hidden shadow-inner bg-slate-900">
              <img
                src="/images/BoysTeam.jpeg"
                alt="Boys Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-32 rounded-xl overflow-hidden shadow-inner bg-slate-900">
              <img
                src="/images/U16Girls.jpg"
                alt="U16 Girls Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
