import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

interface trainingSession {
  day: string;
  time: string;
  location: string;
}
export function TimetableCard({ session }: { session: trainingSession }) {
  return (
    <div className="flex flex-row w-full rounded-lg shadow-xl border-2 border-blue-900 items center justify-between xl:w-5/6 ">
      <div className="flex flex-row items-center pr-2">
        <FiCalendar className="text-amber-500  w-6 h-6" />
        <span className="font-bold">{session.day}</span>
      </div>

      <div className="flex flex-row items-center pr-2  w-fit ">
        <FiClock className="text-amber-500  w-9 h-9" />
        <span className="font-bold">{session.time}</span>
      </div>

      <div className="flex flex-row items-center  ">
        <FiMapPin className="text-amber-500  w-9 h-9" />
        <span className="font-bold break-words">{session.location}</span>
      </div>
    </div>
  );
}
