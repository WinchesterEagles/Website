import { TimetableCard } from "components/timetableCard";

export default function Adults() {
  return (
    <div className="flex flex-col mt-8  w-full px-2 mb-16 items-center xl:w-5/6 mx-auto">
      <p className="text-center font-semibold text-lg px-2 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
      </p>
      <div className="flex flex-col xl:flex-row xl:w-5/6  justify-between">
        <div className=" flex flex-col xl:w-1/2 ">
          <h1 className="mx-2 font-semibold text-xl w-1/2 border-b-2 border-amber-500 mb-4 xl:w-1/3">
            Open Sessions
          </h1>

          {/* list open sessions here*/}
          <TimetableCard
            session={{
              day: "Monday",
              time: "20:00 - 22:00",
              location: "Winchester sports and leisure centre",
            }}
          />
        </div>

        <div className=" flex flex-col xl:w-1/2">
          {/* list invite only sessions here*/}
          <h1 className="mx-2 font-semibold text-xl w-1/2 border-b-2 border-amber-500 mb-4 mt-8 xl:w-1/3 xl:mt-0 ">
            Invite Only
          </h1>
          <TimetableCard
            session={{
              day: "Monday",
              time: "20:00 - 22:00",
              location: "Winchester sports and leisure centre",
            }}
          />
        </div>
      </div>
    </div>
  );
}
