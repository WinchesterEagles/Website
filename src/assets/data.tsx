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
];

// Invite Only
export const inviteOnly: TrainingSession[] = [
  {
    day: "Wednesday",
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
    imageUrl: "/images/men_HV.webp",
    imageAlt: "Men's HV team line-up picture",
    title: "Men HV",
    leagueTableUrl:
      "https://www.volleyballhampshire.org/competitions/men.php?season=2024-2025&div=MB",
  },
  {
    imageUrl: "/images/men_SADVA.webp",
    imageAlt: "Men's SADVA team line-up picture",
    title: "Men SADVA",
    leagueTableUrl:
      "https://www.sadva-volleyball.org.uk/leagues/tables.php?league=M",
  },
  {
    imageUrl: "/images/women_HV.webp",
    imageAlt: "Women HV team line-up picture",
    title: "Women HV",
    leagueTableUrl:
      "https://www.volleyballhampshire.org/competitions/ladies.php",
  },
  {
    imageUrl: "/images/women_SADVA.webp",
    imageAlt: "Women SADVA team line-up picture",
    title: "Women SADVA",
    leagueTableUrl:
      "https://www.sadva-volleyball.org.uk/leagues/tables.php?league=L",
  },
  {
    imageUrl: "/images/mixed_HV.webp",
    imageAlt: "Mixed SADVA team line-up picture",
    title: "Mixed HV",
    leagueTableUrl:
      "https://www.volleyballhampshire.org/competitions/mixed.php",
  },
  {
    imageUrl: "/images/mixed_SADVA.webp",
    imageAlt: "Mixed SADVA team line-up picture",
    title: "Mixed SADVA",
    leagueTableUrl:
      "https://www.sadva-volleyball.org.uk/leagues/tables.php?league=X",
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
  {
    url: "/files/WEVC_Safeguarding_Adults_Policy.pdf",
    title: "Safeguarding Adults Policy",
  },
  {
    url: "/files/WEVC_Safeguarding_and_Protecting_Children_policy.pdf",
    title: "Safeguarding and Protecting Children Policy",
  },
  {
    url: "/files/WEVC_Safeguarding_club_statement_2024.pdf",
    title: "Safeguarding Club Statement",
  },
  {
    url: "/files/WEVC_Anti-Bullying_Charter.pdf",
    title: "Anti-Bullying Charter",
  },
  {
    url: "/files/WEVC_Privacy_Policy_2025.pdf",
    title: "Privacy Policy - 2025",
  },
  { url: "/files/VE_Code_of_Conduct.pdf", title: "VE Code of Conduct" },
  {
    url: "/files/WEVC_Membership_Fees_2025.pdf",
    title: "Membership Fees - 2025",
  },
];
