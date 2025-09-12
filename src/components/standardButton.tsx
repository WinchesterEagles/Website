/* standard button used throughout the application 
text and href defined on call*/

import Link from "next/link";

interface settings {
  text: string;
  href: string;
}

// if redirects to iternal page opens in same tab
// if redirects to external site opens in a new tab
export function StandardButton({ text, href }: settings) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 py-2 px-3 rounded-lg font-semibold bg-blue-900 w-fit mx-auto text-white cursor-pointer hover:bg-amber-500 
        shadow-lg active:scale-95 active:shadow-md active:bg-amber-500 active:opacity-90
        transform transition-transform duration-100 xl:duration-200 hover:scale-105"
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="mt-6 py-2 px-3 rounded-lg font-semibold bg-blue-900 w-fit mx-auto text-white cursor-pointer hover:bg-amber-500 
      shadow-lg active:scale-95 active:shadow-md active:bg-amber-500 active:opacity-90
      transform transition-transform duration-100 xl:duration-200 hover:scale-105"
    >
      {text}
    </Link>
  );
}
