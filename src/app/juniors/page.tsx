import { Metadata } from "next";
import { FaDownload } from "react-icons/fa";
import { JuniorsTimetableCard } from "components/juniorsTimetableCard";
import { sundaySessions } from "assets/data";

export const metadata: Metadata = {
  title: "juniors",
  description:
    "Join Winchester Eagles junior volleyball - check training times, location, and download our timetable and pricing list",

  // Open Graph (social previews)
  openGraph: {
    title: "juniors",
    description:
      "Join Winchester Eagles junior volleyball - check training times, location, and download our timetable and pricing list",
    url: "https://www.winchestervolleyball.co.uk/juniors",
  },
};

export default function Juniors() {
  return (
    <div className="flex flex-col mt-12  w-full px-2 mb-16 items-center  mx-auto">
      {/* Visually hidden main heading for SEO */}
      <h1 className="sr-only">Juniors</h1>

      <h2 className="text-center  text-xl px-2 mb-8 xl:w-1/2 xl:mx-auto ">
        We proudly run a Junior sector focused on developing young players (up
        to 18 years old), building skills, confidence, and a love for the game.
        Our teams compete in major leagues, such as SADVA and the Volleyball
        England Grand Prix, giving players the chance to grow and shine on the
        court. See our training session schedule below.
      </h2>
      <div className="flex flex-col xl:flex-row xl:w-5/6  justify-center xl:gap-8 mx-auto">
        {/*  Sunday sessions */}
        <div className=" flex flex-col xl:w-1/2 mx-auto ">
          <h3 className="mx-2 font-semibold text-xl w-1/2 border-b-2 border-amber-500 mb-4 xl:w-1/3 text-center xl:mt-0 xl:mx-auto">
            Sunday
          </h3>

          {sundaySessions.map((session, index) => (
            <JuniorsTimetableCard key={index} session={session} />
          ))}
        </div>
      </div>

      <p className=" w-full text-center p-2 mt-6 text-lg  xl:w-1/4  xl:mx-auto">
        for more information Contact us at:
        <span>
          <a
            className=" mx-1 mt-2 text-blue-900 cursor-pointer hover:text-amber-500 transition-colors duration-200 transform hover:scale-105"
            href="mailto:juniorvolleyballwinchester@gmail.com?subject=Contact%20from%20Website&body=Hi%20Eagles%2C%0A"
          >
            juniorvolleyballwinchester@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
}
