/* standard button used throughout the application 
text and href defined on call*/

import Link from "next/link";

interface settings {
  text: string;
  href: string;
  className?: string;
}

export function StandardButton({ text, href, className }: settings) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const defaultStyles =
    "mt-5 py-2.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[var(--primary-blue)] text-white hover:bg-[var(--primary-orange)] inline-flex items-center justify-center text-center cursor-pointer shadow-md active:scale-95 transition-all duration-200 whitespace-nowrap";

  const finalClassName = className || defaultStyles;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClassName}
      >
        <span className="text-white font-bold">{text}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={finalClassName}>
      <span className="text-white font-bold">{text}</span>
    </Link>
  );
}
