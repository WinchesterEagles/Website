/* 
This is where all the webiste data are kept, as of right now all data are kept in one file
to simply maintenance process for non-techical people.
If data grows too large they are to be separated into their own files and grouped within index file
*/

import { TrainingSession } from "components/timetableCard";
import { TeamInfo } from "components/teamCard";
import { Document } from "components/importantDocCard";
import { commiteeMember } from "components/commiteeCard";

// =========== ADULTS TRAINING SESSIONS ========== //

// Open sessions
export const openSessions: TrainingSession[] = [
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "tuesday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
];

// Invite Only
export const inviteOnly: TrainingSession[] = [
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
];

// =========== JUNIORS TRAINING SESSIONS ========== //

// Under 16s
export const under16s: TrainingSession[] = [
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
];

// Under 18s
export const under18s: TrainingSession[] = [
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
  {
    day: "Monday",
    time: "20:00 - 22:00",
    location: "Winchester sports and leisure centre",
  },
];

// =========== TEAMS ========== //

export const teams: TeamInfo[] = [
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

// =========== COMMITEE MEMBERS ========== //

export const commiteeMembers: commiteeMember[] = [
  {
    imageUrl: "/images/commiteeMember.jpg",
    imageAlt: "commitee member",
    name: "Jhon Smith",
    role: "Test role",
  },
  {
    imageUrl: "/images/commiteeMember.jpg",
    imageAlt: "commitee member",
    name: "Jhon Smith",
    role: "Test role",
  },
  {
    imageUrl: "/images/commiteeMember.jpg",
    imageAlt: "commitee member",
    name: "Jhon Smith",
    role: "Test role",
  },
  {
    imageUrl: "/images/commiteeMember.jpg",
    imageAlt: "commitee member",
    name: "Jhon Smith",
    role: "Test role",
  },
];

// =========== IMPORTANT DOCUMENTS ========== //

export const documents: Document[] = [
  { url: "/files/test.pdf", title: "test document 1" },
  { url: "/files/test.pdf", title: "test document 2" },
  { url: "/files/test.pdf", title: "test document 3" },
];
