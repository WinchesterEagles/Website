/* this is the widget for the training session
it is used in Adults and Juniors pages
the available training sessions are defined in the pages 
and widgets are generated through loop */

import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

export interface TrainingSession {
  day: string;
  time: string;
  location: string;
}
export function TimetableCard({ session }: { session: TrainingSession }) {
  return (
    <div className="flex flex-row w-full rounded-lg shadow-xl border-2 border-blue-900 items center xl:w-5/6 mb-4 xl:mx-auto ">
      <div className="flex flex-row items-center pr-2 py-0.5">
        <FiCalendar className="text-amber-500  w-6 h-6 xl:w-8 xl:h-8" />
        <span className="font-bold">{session.day}</span>
      </div>

      <div className="flex flex-row items-center pr-2  w-fit ">
        <FiClock className="text-amber-500  w-9 h-9 xl:w-8 xl:h-8" />
        <span className="font-bold">{session.time}</span>
      </div>

      <div className="flex flex-row items-center  ">
        <FiMapPin className="text-amber-500  w-9 h-9 xl:w-8 xl:h-8" />
        <span className="font-bold break-words">{session.location}</span>
      </div>
    </div>
  );
}
