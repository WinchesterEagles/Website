import { FaDownload } from "react-icons/fa";

export interface Document {
  url: string;
  title: string;
}

export function ImportantDocCard({ document }: { document: Document }) {
  return (
    <div
      className="flex w-full rounded-lg shadow-lg border-2 border-blue-900 items-center xl:w-[48%] mb-4  cursor-pointer hover:bg-amber-500 transform transition-transform duration-200 hover:scale-103
    active:scale-95 active:shadow-md active:bg-amber-500 active:opacity-90  "
    >
      <a
        href={document.url}
        download
        className="flex justify-between items-center w-full px-4 py-2 group "
      >
        <span className="text-start pr-2 font-semibold ">{document.title}</span>

        <FaDownload className="text-amber-500 group-hover:text-blue-900 group-active:text-blue-900 " />
      </a>
    </div>
  );
}
