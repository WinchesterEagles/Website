"use client";

import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaDownload,
  FaInfoCircle,
} from "react-icons/fa";
import { handleSpondJoin } from "../handlers/handleSpondJoin";

export default function AdultsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] py-10 pb-20">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        {/* 1. SIMPLE HEADER INTRO (No heavy blue block) */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--text-on-brand)] bg-[var(--primary-orange)] rounded-full mb-3">
            Adult Program
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[var(--primary-blue)] mb-3">
            Adult Training & Social
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We hold two training sessions per week for adults. Monday sessions
            are open recreational sessions for players of all abilities, while
            Wednesday sessions are for experienced players invited by the coach.
          </p>
        </div>

        {/* 2. TIMETABLE CARDS */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Open Sessions Card */}
            <div className="bg-[var(--bg-card)] border-2 border-[var(--primary-blue)] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--primary-orange)]">
                  Open Sessions
                </span>
                <span className="text-xs bg-blue-50 text-[var(--primary-blue)] px-2.5 py-1 rounded-full font-semibold">
                  All Abilities
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[var(--primary-orange)] w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-sm">Mondays</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-[var(--primary-orange)] w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">20:00 – 22:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[var(--primary-orange)] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Winchester Sports & Leisure Centre
                  </span>
                </div>
              </div>
            </div>

            {/* Invite Only Card */}
            <div className="bg-[var(--bg-card)] border-2 border-[var(--primary-orange)] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--primary-blue)]">
                  Invite Only
                </span>
                <span className="text-xs bg-orange-50 text-[var(--primary-orange)] px-2.5 py-1 rounded-full font-semibold">
                  Experienced
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-[var(--primary-blue)] w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-sm">Wednesdays</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-[var(--primary-blue)] w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">20:00 – 22:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[var(--primary-blue)] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">
                    Winchester Sports & Leisure Centre
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HOW TO JOIN SPOND CALLOUT BANNER */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold flex items-center gap-2 text-[var(--primary-orange)]">
              <FaInfoCircle /> Ready to Join a Session?
            </h3>
            <p className="text-sm text-slate-200 mt-2 leading-relaxed">
              We organize all attendance and group messaging through the Spond
              app using group code{" "}
              <strong className="text-white tracking-widest">XAVGO</strong>.
              Your first session is completely free!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://spond.com/"
              onClick={handleSpondJoin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[var(--primary-orange)] text-white font-bold rounded-xl text-xs hover:opacity-90 transition-opacity text-center whitespace-nowrap"
            >
              Get Spond App
            </a>
          </div>
        </section>

        {/* 4. DOCUMENT DOWNLOAD & CONTACT */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div>
            <h4 className="font-bold text-sm text-[var(--primary-blue)]">
              Membership Fees & Pricing
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              For more information or questions, contact us at{" "}
              <a
                href="mailto:winchestereaglessocial@gmail.com"
                className="text-[var(--primary-blue)] underline"
              >
                winchestereaglessocial@gmail.com
              </a>
            </p>
          </div>
          <a
            href="/docs/Membership_Fees.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-blue)] text-white text-xs font-bold rounded-xl hover:opacity-95 transition-opacity shadow-sm whitespace-nowrap w-full sm:w-auto"
          >
            <FaDownload className="w-4 h-4 text-white flex-shrink-0" />
            <span className="text-white">Download 2025 Pricing</span>
          </a>
        </section>
      </div>
    </main>
  );
}
