import { FaDownload } from "react-icons/fa";

export interface Document {
  url: string;
  title: string;
}

export function ImportantDocCard({ document }: { document: Document }) {
  return (
    <div className="w-full bg-[var(--bg-card)] border-2 border-[var(--primary-blue)] rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      <a
        href={document.url}
        download
        className="flex items-center justify-between p-5 w-full cursor-pointer hover:bg-amber-50 active:scale-[0.99] transition-colors"
      >
        <span className="text-sm sm:text-base font-bold text-[var(--primary-blue)] pr-3 group-hover:text-[var(--primary-orange)] transition-colors">
          {document.title}
        </span>

        <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[var(--primary-orange)] flex items-center justify-center flex-shrink-0 transition-colors">
          <FaDownload className="w-4 h-4 text-[var(--primary-orange)] group-hover:text-white group-hover:bg-[var(--primary-blue) transition-colors" />
        </div>
      </a>
    </div>
  );
}
