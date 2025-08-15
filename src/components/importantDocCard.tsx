import { FaDownload } from "react-icons/fa";

export interface Document {
  url: string;
  title: string;
}

export function ImportantDocCard({ document }: { document: Document }) {
  return (
    <div className="flex w-full rounded-lg shadow-xl border-2 border-blue-900 items-center xl:w-[48%] mb-4  cursor-pointer hover:bg-amber-500 group  ">
      <a
        href={document.url}
        download
        className="flex justify-between items-center w-full px-4 py-2"
      >
        <span className="text-start pr-2 font-semibold">{document.title}</span>
        <FaDownload className="text-amber-500 group-hover:text-blue-900" />
      </a>
    </div>
  );
}
