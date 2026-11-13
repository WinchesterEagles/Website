import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adults | Winchester Eagles Volleyball Club",
  description:
    "Join Winchester Eagles adult volleyball sessions - check our Monday open recreational sessions, Wednesday invite-only sessions, and download pricing.",
  openGraph: {
    title: "Adultts | Winchester Eagles Volleyball Club",
    description:
      "Join Winchester Eagles adult volleyball sessions - check our Monday open recreational sessions, Wednesday invite-only sessions, and download pricing.",
    url: "https://www.winchestervolleyball.co.uk/adults",
  },
};

export default function AdultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
