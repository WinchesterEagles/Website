/* this is the widget for the training session
it is used in the juniors page
the available training sessions are defined in the pages 
and widgets are generated through loop */

import { FiStar, FiClock, FiMapPin } from "react-icons/fi";

export interface JuniorTrainingSession {
  level: string;
  time: string;
  location: string;
}
export function JuniorsTimetableCard({
  session,
}: {
  session: JuniorTrainingSession;
}) {
  return (
    <div className="flex flex-row w-full rounded-lg shadow-xl border-2 border-blue-900 items center xl:w-5/6 mb-4 xl:mx-auto text-sm">
      <div className="flex flex-row items-center pr-1 py-0.5 flex-[2]">
        <FiStar className="text-amber-500 min-w-8 min-h-8  w-9 h-9 xl:w-8 xl:h-8 flex-shrink-0 " />
        <span className="font-semibold break-words pl-0.5 ">
          {session.level}
        </span>
      </div>

      <div className="flex flex-row items-center pr-1  w-fit flex-1 ">
        <FiClock className="text-amber-500 min-w-8 min-h-8  w-9 h-9 xl:w-8 xl:h-8 flex-shrink-0" />
        <span className=" text-center font-semibold  pl-0.5 leading-tight ">
          {session.time}
        </span>
      </div>

      <div className="flex flex-row items-center pr-1 flex-[2] ">
        <FiMapPin className="text-amber-500 min-w-8 min-h-8  w-9 h-9 xl:w-8 xl:h-8 flex-shrink-0 " />
        <span className="font-semibold break-words pl-0.5 ">
          {session.location}
        </span>
      </div>
    </div>
  );
}
