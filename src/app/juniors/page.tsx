import { TimetableCard } from "components/timetableCard";
import { TrainingSession } from "components/timetableCard";
import { Metadata } from "next";
import { FaDownload } from "react-icons/fa";
import { under16s, under18s } from "assets/data";

export const metadata: Metadata = {
  title: "juniors",
  description: "Juniors' training timetable",
};

export default function Juniors() {
  return (
    <div className="flex flex-col mt-12  w-full px-2 mb-16 items-center  mx-auto">
      {/* Visually hidden main heading for SEO */}
      <h1 className="sr-only">Juniors</h1>

      <p className="text-center font-semibold text-lg px-2 mb-8 xl:w-1/2 xl:mx-auto ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </p>
      <div className="flex flex-col xl:flex-row xl:w-5/6  justify-center xl:gap-8 mx-auto">
        {/*  Under 16s */}
        <div className=" flex flex-col xl:w-1/2 mx-auto ">
          <h2 className="mx-2 font-semibold text-xl w-1/2 border-b-2 border-amber-500 mb-4 xl:w-1/3 text-center xl:mt-0 xl:mx-auto">
            Under 16s
          </h2>

          {under16s.map((session, index) => (
            <TimetableCard key={index} session={session} />
          ))}
        </div>

        {/*  Under 18s */}
        <div className=" flex flex-col xl:w-1/2 mx-auto">
          <h2 className="mx-2 font-semibold text-xl w-1/2 border-b-2 border-amber-500 mb-4 mt-8 xl:w-1/3 xl:mt-0 text-center xl:mx-auto">
            Under 18s
          </h2>

          {under18s.map((session, index) => (
            <TimetableCard key={index} session={session} />
          ))}
        </div>
      </div>

      <p className="flex flex-row items-center w-full p-2 mt-4 border-b-2 border-amber-500 xl:w-1/4 xl:text-center xl:mx-auto">
        <span className="flex-grow ">Download full 2025 time table</span>
        <a href="/files/test.pdf" download>
          <FaDownload className="mx-2 text-blue-900 w-6 h-6 xl:hover:text-amber-500 cursor-pointer" />
        </a>
      </p>

      <p className="flex flex-row items-center w-full p-2 mt-4 border-b-2 border-blue-900 xl:w-1/4 xl:text-center xl:mx-auto">
        <span className="flex-grow ">Download full 2025 pricing</span>
        <a href="/files/test.pdf" download>
          <FaDownload className="mx-2 text-blue-900 w-6 h-6 xl:hover:text-amber-500 cursor-pointer" />
        </a>
      </p>
    </div>
  );
}
